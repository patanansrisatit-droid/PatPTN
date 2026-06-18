let currentSet = null, currentIdx = 0, selectedAnswers = {};
let hiddenChoices = {};
let transcriptVisible = {};
let currentMode = 'mouse';
let activeColor  = '#ef4444';
let currentZoomElementId = null;

const toolSettings = {
    pen:         { size: 3,  opacity: 1.00 },
    highlighter: { size: 14, opacity: 0.35 },
    eraser:      { size: 18 }
};

let allStrokes = [];
let undoStack = [];
let redoStack = [];

let isDrawing  = false;
let currentPath = [];
let activeCanvas = null;

let zoomScale = 1, panX = 0, panY = 0;
let isPanning = false, panStartX = 0, panStartY = 0;
let spaceHeld = false;
let rightClickPanning = false;
let rightClickStartX = 0, rightClickStartY = 0;
let pinchStartDistance = 0, pinchStartScale = 1;

const zoomOverlay = document.getElementById('zoom-overlay');
const viewport    = document.getElementById('zoom-viewport');
const zoomCanvas  = document.getElementById('zoomCanvas');

let examScreens = [];
let explanationVisible = {};
let currentLayoutMode = 'vertical';
let carouselImages = [];
let previousTool = 'mouse';
let scrollTimeout = null;

function getNormalizedId(id) {
    if (!id) return '';
    return id.replace(/^img-\d+-/, 'img-');
}

window.onload = () => {
    renderExamDashboard();
    if (window.lucide) { lucide.createIcons(); }

    const zCvs = document.getElementById('zoomCanvas');
    if (zCvs) setupCanvasDrawing(zCvs);

    initViewportControls();

    document.getElementById('audio-player').addEventListener('ended', () => {
        resetAudioPlayer();
    });

    window.addEventListener('keydown', e => {
        if (e.key === 'Escape' || e.code === 'Escape') setTool('mouse');
        if (e.code === 'Digit1') setTool('pen');
        if (e.code === 'Digit2') setTool('highlighter');
        if (e.code === 'Digit3') setTool('eraser');
        if ((e.ctrlKey || e.metaKey) && e.code === 'KeyZ') { e.preventDefault(); undo(); }
        if ((e.ctrlKey || e.metaKey) && e.code === 'KeyY') { e.preventDefault(); redo(); }
    });

        window.addEventListener('resize', () => {
            resizeAllActiveCanvases();
        });

        setupJumpSelect();

    document.addEventListener('wheel', () => {
        if (currentMode !== 'mouse') {
            previousTool = currentMode;
            setTool('mouse');
        }
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (previousTool !== 'mouse') {
                setTool(previousTool);
            }
                }, 300);
    }, { passive: true });

    let touchStartX = 0, touchStartY = 0, isTouchScroll = false;
    document.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            isTouchScroll = false;
        }
    }, { passive: true });
    document.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1 && !isTouchScroll) {
            const dx = Math.abs(e.touches[0].clientX - touchStartX);
            const dy = Math.abs(e.touches[0].clientY - touchStartY);
            if (dx > 10 || dy > 10) {
                isTouchScroll = true;
                if (currentMode !== 'mouse') {
                    previousTool = currentMode;
                    setTool('mouse');
                }
            }
        }
    }, { passive: true });
    document.addEventListener('touchend', () => {
        if (isTouchScroll) {
            setTimeout(() => {
                if (previousTool !== 'mouse') {
                    setTool(previousTool);
                }
            }, 300);
        }
    }, { passive: true });
};

function startExam(setId) {
    console.log('startExam called with:', setId);
    currentSet = window.targetExamData.find(p => p.setId === setId) || window.targetExamData[0];
    console.log('currentSet:', currentSet);
    currentIdx = 0;
    selectedAnswers = {};
    hiddenChoices = {};
    transcriptVisible = {};
    explanationVisible = {};
    undoStack = [];
    redoStack = [];

    examScreens = [];
    let currentGroup = null;
    let currentScreen = [];

    currentSet.questions.forEach(q => {
        if (q.groupId) {
            if (currentGroup === q.groupId) {
                currentScreen.push(q);
            } else {
                if (currentScreen.length > 0) examScreens.push(currentScreen);
                currentGroup = q.groupId;
                currentScreen = [q];
            }
        } else {
            if (currentScreen.length > 0) examScreens.push(currentScreen);
            currentGroup = null;
            currentScreen = [q];
            examScreens.push(currentScreen);
            currentScreen = [];
        }
    });
    if (currentScreen.length > 0) examScreens.push(currentScreen);

        console.log('examScreens:', examScreens);
        loadStrokesFromStorage();
        document.getElementById('home-screen').classList.add('hidden');
        document.getElementById('tutor-screen').classList.remove('hidden');
        document.getElementById('toolbar').classList.remove('hidden');
        const layoutToggle = document.getElementById('layout-toggle'); if (layoutToggle) layoutToggle.classList.remove('hidden');
        document.body.className = "bg-slate-100 text-slate-800 min-h-screen flex flex-col justify-center items-center overflow-hidden font-sans antialiased";

        resetAudioPlayer();
        renderQuestion();
        showViewportControls();
        viewportReset();
        if (window.lucide) { lucide.createIcons(); }
}
function renderExamDashboard() {
    const grid = document.getElementById('exam-sets-grid');
    grid.innerHTML = '';
    const data = (typeof examPackages !== 'undefined') ? examPackages
                 : (typeof examData   !== 'undefined') ? [{ setId:'default', setTitle:'TOEIC Practice Set', setCover:'', questions: examData.questions }]
                 : null;
    if (!data) { grid.innerHTML = `<div class="text-white col-span-3 text-center bg-slate-800 p-6 rounded-xl border border-slate-700">ไม่พบข้อมูลชุดข้อสอบ (examPackages)</div>`; return; }
    window.targetExamData = data;
    data.forEach(pkg => {
        const card = document.createElement('div');
        card.className = "bg-slate-800 border border-slate-700/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition flex flex-col justify-between";

        card.innerHTML = `
            <img src="${pkg.setCover||'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600'}" class="w-full h-44 object-cover">
            <div class="p-5 flex-1 flex flex-col justify-between">
                <div><h3 class="text-lg font-bold text-white mb-2">${pkg.setTitle}</h3>
                <p class="text-slate-400 text-xs mb-4">จำนวน: ${pkg.questions.length} ข้อ</p></div>
                <button onclick="startExam('${pkg.setId}')" class="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 group">
                    <span>Select</span>
                    <i data-lucide="arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-1"></i>
                </button>
            </div>`;
        grid.appendChild(card);
    });
}
function toggleAudio() {
    const audio = document.getElementById('audio-player');
    const icon = document.getElementById('audio-icon');
    const status = document.getElementById('audio-status');

    if (audio.paused) {
        audio.play();
        icon.setAttribute('data-lucide', 'pause');
        status.innerText = "Playing...";
    } else {
        audio.pause();
        icon.setAttribute('data-lucide', 'play');
        status.innerText = "Paused";
    }
    lucide.createIcons();
}
function resetAudioPlayer() {
    const audio = document.getElementById('audio-player');
    const icon = document.getElementById('audio-icon');
    const status = document.getElementById('audio-status');
    audio.pause();
    audio.currentTime = 0;
    icon.setAttribute('data-lucide', 'play');
    status.innerText = "Click to Play";
    lucide.createIcons();
}
function saveStrokesToStorage() {
    if (currentSet) {
        localStorage.setItem(`toeic_strokes_${currentSet.setId}`, JSON.stringify(allStrokes));
    }
}
function loadStrokesFromStorage() {
    if (currentSet) {
        const saved = localStorage.getItem(`toeic_strokes_${currentSet.setId}`);
        allStrokes = saved ? JSON.parse(saved) : [];
    }
}
function goHome() {
    document.getElementById('tutor-screen').classList.add('hidden');
    document.getElementById('toolbar').classList.add('hidden');
    document.getElementById('home-screen').classList.remove('hidden');
    const layoutToggle2 = document.getElementById('layout-toggle'); if (layoutToggle2) layoutToggle2.classList.add('hidden');
    document.body.className = "bg-slate-900 text-slate-800 min-h-screen flex flex-col justify-center items-center overflow-hidden font-sans antialiased";
    closeZoom();
    hideViewportControls();
    viewportReset();
    resetAudioPlayer();
    if (window.lucide) { lucide.createIcons(); }
    }

function getAutoLayoutMode(questionCount) {
    return questionCount <= 1 ? 'vertical' : 'horizontal';
}
function updateLayoutMode() {
    const screenQuestions = examScreens[currentIdx] || [];
    const numQuestions = screenQuestions.length;

    const hasImages = screenQuestions.some(q => q.images && q.images.length > 0);

    if (!hasImages) {
        currentLayoutMode = 'horizontal';
    } else {
        currentLayoutMode = numQuestions <= 1 ? 'vertical' : 'horizontal';
    }

    const tutorScreen = document.getElementById('tutor-screen');
    tutorScreen.classList.remove('layout-vertical', 'layout-horizontal');
    tutorScreen.classList.add(`layout-${currentLayoutMode}`);
}

function setTool(mode) {
    currentMode = mode;

    document.querySelectorAll('.tool-btn').forEach(b => {
        b.className = 'tool-btn bg-slate-700 hover:bg-slate-600 text-white font-bold px-3 py-1.5 rounded-full text-xs transition flex items-center gap-1.5';
    });
    const activeBtn = document.getElementById(`tool-${mode}`);
    if (activeBtn) activeBtn.className = 'tool-btn bg-blue-600 text-white font-bold px-3 py-1.5 rounded-full text-xs transition shadow-md shadow-blue-500/30 flex items-center gap-1.5';

    const sc = document.getElementById('stroke-controls');
    const cc = document.getElementById('color-controls-container'); // แผงควบคุมสีที่เราตั้ง ID ไว้ใน HTML
    const opacityWrap = document.getElementById('opacity-wrap');
    const sizeSlider = document.getElementById('size-slider');
    const opacitySlider = document.getElementById('opacity-slider');

    if (sc && sizeSlider && opacitySlider) {
        sc.style.opacity = '1';
        sc.style.pointerEvents = 'auto';
        sizeSlider.disabled = false;
        opacitySlider.disabled = false;
        if (opacityWrap) { opacityWrap.style.opacity = '1'; }
        if (cc) { cc.style.opacity = '1'; cc.style.pointerEvents = 'auto'; }

        if (mode === 'mouse') {
            sc.style.opacity = '0.35';
            sc.style.pointerEvents = 'none';
            sizeSlider.disabled = true;
            opacitySlider.disabled = true;
            if (cc) { cc.style.opacity = '0.35'; cc.style.pointerEvents = 'none'; }
        } else {
            const s = toolSettings[mode];
            sizeSlider.value = s.size;
            document.getElementById('size-val').innerText = s.size;

            if (mode === 'eraser') {
                opacitySlider.disabled = true;
                if (opacityWrap) { opacityWrap.style.opacity = '0.35'; }
                if (cc) { cc.style.opacity = '0.35'; cc.style.pointerEvents = 'none'; }
            } else {
                opacitySlider.value = Math.round(s.opacity * 100);
                document.getElementById('opacity-val').innerText = Math.round(s.opacity * 100) + '%';
            }
        }
    }

        updateCanvasesPointerEvents();
    if (window.lucide) { lucide.createIcons(); }
}
function updateCanvasesPointerEvents() {
    const drawingCanvas = document.getElementById('drawing-canvas');
    const customCursor = document.getElementById('canvas-custom-cursor');

        if (drawingCanvas) {
            drawingCanvas.style.pointerEvents = currentMode === 'mouse' ? 'none' : 'auto';
        }

    document.querySelectorAll('.gallery-canvas').forEach(cvs => {
        cvs.style.pointerEvents = currentMode === 'mouse' ? 'none' : 'auto';
    });

    const zoomCanv = document.getElementById('zoomCanvas');
    if (zoomCanv && !zoomOverlay.classList.contains('hidden')) {
        zoomCanv.style.pointerEvents = currentMode === 'mouse' ? 'none' : 'auto';
    }

    if (customCursor) {
        document.removeEventListener('mousemove', handleCustomCursorMove);
        if (currentMode !== 'mouse') {
            document.body.classList.add('drawing-mode');
            document.addEventListener('mousemove', handleCustomCursorMove);

            document.querySelectorAll('canvas').forEach(c => {
                c.style.cursor = 'none';
            });
        } else {
            document.body.classList.remove('drawing-mode');
            customCursor.classList.add('hidden');

            document.querySelectorAll('canvas').forEach(c => {
                c.style.cursor = '';
            });
        }
    }
}
function onSizeChange(v) {
    const n = parseInt(v);
    document.getElementById('size-val').innerText = n;
    if (toolSettings[currentMode]) toolSettings[currentMode].size = n;
}
function onOpacityChange(v) {
    const n = parseInt(v);
    document.getElementById('opacity-val').innerText = n + '%';
    if (toolSettings[currentMode]) toolSettings[currentMode].opacity = n / 100;
}
function positionCustomCursor(clientX, clientY, onCanvas) {
    const customCursor = document.getElementById('canvas-custom-cursor');
    if (!customCursor || currentMode === 'mouse') {
        if (customCursor) customCursor.classList.add('hidden');
        return;
    }

    if (onCanvas || isDrawing) {
        const s = toolSettings[currentMode] || { size: 3, opacity: 1 };

        if (currentMode === 'highlighter') {
            customCursor.style.backgroundColor = activeColor;
            customCursor.style.opacity = s.opacity || 0.35;
        } else if (currentMode === 'eraser') {
            customCursor.style.backgroundColor = "rgba(180, 180, 180, 0.45)";
            customCursor.style.opacity = "1";
        } else {
            customCursor.style.backgroundColor = activeColor;
            customCursor.style.opacity = s.opacity || 1;
        }
        customCursor.style.border = "none";

        const actualSize = (currentMode === 'highlighter') ? s.size * 2.2 : s.size;
        const displaySize = Math.max(actualSize, 6);

        customCursor.style.width  = `${displaySize}px`;
        customCursor.style.height = `${displaySize}px`;
        customCursor.style.left   = `${clientX}px`;
        customCursor.style.top    = `${clientY}px`;
        customCursor.classList.remove('hidden');
    } else {
        customCursor.classList.add('hidden');
    }
}
function handleCustomCursorMove(e) {
    const onCanvas = e.target && e.target.tagName.toLowerCase() === 'canvas';
    positionCustomCursor(e.clientX, e.clientY, onCanvas);
}
function selectColor(color, el) {
    activeColor = color;
    document.querySelectorAll('.color-dot').forEach(d => { d.classList.remove('scale-110','border-white','border-2'); d.style.borderColor='transparent'; });
    el.classList.add('scale-110','border-white','border-2');
}
function selectCustomColor(color) {
    activeColor = color;
    document.querySelectorAll('.color-dot').forEach(d => { d.classList.remove('scale-110','border-white','border-2'); d.style.borderColor='transparent'; });
}
function resizeAllActiveCanvases() {
    const galleryCanvases = document.querySelectorAll('.gallery-canvas');
    galleryCanvases.forEach(c => {
        const img = c.parentElement.querySelector('img');
        if (img && img.clientWidth > 0) {
            c.width = img.clientWidth;
            c.height = img.clientHeight;
            redrawCanvas(c);
        }
    });

    const rightCanvas = document.getElementById('rightPanelCanvas');
    if (rightCanvas) {
        const wrap = document.getElementById('question-panel-wrapper');
        rightCanvas.width = wrap.clientWidth;
        rightCanvas.height = wrap.clientHeight;
        redrawCanvas(rightCanvas);
    }

    if (!zoomOverlay.classList.contains('hidden')) {
        const zoomedImg = document.getElementById('zoomed-image');
        if (zoomedImg && zoomedImg.clientWidth > 0) {
            zoomCanvas.width = zoomedImg.clientWidth;
            zoomCanvas.height = zoomedImg.clientHeight;
            redrawCanvas(zoomCanvas);
        }
    }
}

function resizeQuestionPanelCanvas() {
    const rightCanvas = document.getElementById('rightPanelCanvas');
    const wrapper = document.getElementById('question-panel-wrapper');
    if (rightCanvas && wrapper) {
        requestAnimationFrame(() => {
            rightCanvas.width = wrapper.clientWidth;
            rightCanvas.height = wrapper.clientHeight;
            redrawCanvas(rightCanvas);
        });
    }
}
function applyStrokeStyle(ctx, mode, color, size, opacity) {
    ctx.globalAlpha = opacity ?? 1.0;
    ctx.globalCompositeOperation = 'source-over';
    ctx.strokeStyle = color;
    ctx.lineWidth   = (mode === 'highlighter') ? size * 2.2 : size;
    ctx.lineCap     = 'round';
    ctx.lineJoin    = 'round';
}

function correctCoordinates(clientX, clientY, canvas) {
    const cRect = canvas.getBoundingClientRect();
    const visualX = clientX - cRect.left;
    const visualY = clientY - cRect.top;
    const canvasX = visualX * (canvas.width / cRect.width);
    const canvasY = visualY * (canvas.height / cRect.height);
    return { x: canvasX, y: canvasY };
}

function setupCanvasDrawing(canvas) {
    canvas.addEventListener('pointerdown', e => {
        if (currentMode === 'mouse') return;

        const elementsUnderPointer = document.elementsFromPoint(e.clientX, e.clientY);
        const targetButton = elementsUnderPointer.find(el => el.id && el.id.startsWith('btn-answer-'));

        if (targetButton) {
            targetButton.click(); // สั่งให้ปุ่มทำงาน
            return; // หยุดการทำงานส่วนที่เหลือเพื่อไม่ให้เกิดการวาดจุด/เส้น
        }

        e.preventDefault();
        canvas.setPointerCapture(e.pointerId);
        isDrawing = true;
        activeCanvas = canvas;

        undoStack.push(JSON.stringify(allStrokes));
        redoStack = [];

        const corrected = correctCoordinates(e.clientX, e.clientY, canvas);
        const x = corrected.x;
        const y = corrected.y;
        const elementId = canvas.getAttribute('data-element-id');

        if (currentMode === 'eraser') {
            handleVectorEraser(canvas, elementId, x, y);
        } else {
            currentPath = [{ x: x / canvas.width, y: y / canvas.height }];
            redrawCanvas(canvas);
        }
    });

    canvas.addEventListener('pointermove', e => {
        positionCustomCursor(e.clientX, e.clientY, true);

        if (currentMode !== 'mouse' && !isDrawing) {
            const elementsUnderPointer = document.elementsFromPoint(e.clientX, e.clientY);

            const isOverButton = elementsUnderPointer.some(el => el.id && el.id.startsWith('btn-answer-'));

            const customCursor = document.getElementById('canvas-custom-cursor');

            if (isOverButton) {
                canvas.style.cursor = 'pointer';
                if (customCursor) customCursor.classList.add('hidden');
            } else {
                canvas.style.cursor = 'none';
                if (customCursor) customCursor.classList.remove('hidden');
            }
        }

        if (!isDrawing || activeCanvas !== canvas || currentMode === 'mouse') return;

        const corrected = correctCoordinates(e.clientX, e.clientY, canvas);
        const x = corrected.x;
        const y = corrected.y;
        const elementId = canvas.getAttribute('data-element-id');

        if (currentMode === 'eraser') {
            handleVectorEraser(canvas, elementId, x, y);
            syncAllCanvasesById(elementId, canvas);
        } else {
            currentPath.push({ x: x / canvas.width, y: y / canvas.height });
            redrawCanvas(canvas);
            syncAllCanvasesById(elementId, canvas);
        }
    });

    const stopDrawing = e => {
        if (!isDrawing || activeCanvas !== canvas) return;
        isDrawing = false;
        const elementId = canvas.getAttribute('data-element-id');

        if (currentMode !== 'eraser' && currentPath.length > 0) {
            const s = toolSettings[currentMode];
            allStrokes.push({
                questionIdx: currentIdx,
                elementId: elementId,
                mode: currentMode,
                color: activeColor,
                size: s.size,
                opacity: s.opacity,
                points: [...currentPath]
            });
        }
        currentPath = [];
        redrawCanvas(canvas);
        saveStrokesToStorage();

        const customCursor = document.getElementById('canvas-custom-cursor');
        const elementsUnderPointer = document.elementsFromPoint(e.clientX, e.clientY);
        const isOverButton = elementsUnderPointer.some(el => el.id && el.id.startsWith('btn-answer-'));
        if (isOverButton) {
            canvas.style.cursor = 'pointer';
            if (customCursor) customCursor.classList.add('hidden');
        } else {
            canvas.style.cursor = 'none';
            if (customCursor) customCursor.classList.remove('hidden');
        }

        syncAllCanvasesById(elementId, canvas);
        try { canvas.releasePointerCapture(e.pointerId); } catch(_) {}
    };

    canvas.addEventListener('pointerup', stopDrawing);
    canvas.addEventListener('pointercancel', stopDrawing);
}

function redrawCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const elementId = canvas.getAttribute('data-element-id');

    const currentNormId = getNormalizedId(elementId);

    const filtered = allStrokes.filter(s => {
        if (s.questionIdx !== currentIdx) return false;
        return s.elementId === elementId || getNormalizedId(s.elementId) === currentNormId;
    });

    filtered.forEach(s => {
        if (s.points.length < 1) return;
        ctx.beginPath();
        applyStrokeStyle(ctx, s.mode, s.color, s.size, s.opacity);
        ctx.moveTo(s.points[0].x * canvas.width, s.points[0].y * canvas.height);
        for(let i = 1; i < s.points.length; i++) {
            ctx.lineTo(s.points[i].x * canvas.width, s.points[i].y * canvas.height);
        }
        ctx.stroke();
    });

    if (isDrawing && activeCanvas === canvas && currentPath.length > 0 && currentMode !== 'eraser') {
        ctx.beginPath();
        const s = toolSettings[currentMode];
        applyStrokeStyle(ctx, currentMode, activeColor, s.size, s.opacity);
        ctx.moveTo(currentPath[0].x * canvas.width, currentPath[0].y * canvas.height);
        for(let i = 1; i < currentPath.length; i++) {
            ctx.lineTo(currentPath[i].x * canvas.width, currentPath[i].y * canvas.height);
        }
        ctx.stroke();
    }
    ctx.globalAlpha = 1.0;
}

function redrawAllCanvasesOnScreen() {
    const canvases = document.querySelectorAll('canvas');
    canvases.forEach(c => redrawCanvas(c));
}

function handleVectorEraser(canvas, elementId, ex, ey) {
    const radius = toolSettings.eraser.size;
    let isMutated = false;

    const getNormalizedId = (id) => id ? id.replace(/^img-\d+-/, 'img-') : '';
    const currentNormId = getNormalizedId(elementId);

    allStrokes = allStrokes.filter(s => {
        if (s.questionIdx !== currentIdx) return true;
        if (s.elementId !== elementId && getNormalizedId(s.elementId) !== currentNormId) return true;

        for (let i = 0; i < s.points.length - 1; i++) {
            const x1 = s.points[i].x * canvas.width;
            const y1 = s.points[i].y * canvas.height;
            const x2 = s.points[i+1].x * canvas.width;
            const y2 = s.points[i+1].y * canvas.height;
            if (getDistanceToSegment(ex, ey, x1, y1, x2, y2) < radius) {
                isMutated = true;
                return false;
            }
        }
        return true;
    });

    if (isMutated) {
        redrawCanvas(canvas);
        syncAllCanvasesById(elementId, canvas);
                saveStrokesToStorage();
            }
        }

        function getDistanceToSegment(x, y, x1, y1, x2, y2) {
    const A = x - x1, B = y - y1, C = x2 - x1, D = y2 - y1;
    const dot = A * C + B * D, lenSq = C * C + D * D;
    let param = -1;
    if (lenSq !== 0) param = dot / lenSq;
    let xx, yy;
    if (param < 0) { xx = x1; yy = y1; }
    else if (param > 1) { xx = x2; yy = y2; }
    else { xx = x1 + param * C; yy = y1 + param * D; }
    return Math.hypot(x - xx, y - yy);
}

function undo() {
    if (undoStack.length === 0) return;
    redoStack.push(JSON.stringify(allStrokes));
    allStrokes = JSON.parse(undoStack.pop());
    redrawAllCanvasesOnScreen();
    saveStrokesToStorage();
}

function redo() {
    if (redoStack.length === 0) return;
    undoStack.push(JSON.stringify(allStrokes));
    allStrokes = JSON.parse(redoStack.pop());
    redrawAllCanvasesOnScreen();
    saveStrokesToStorage();
}

function clearCurrentCanvas() {
    undoStack.push(JSON.stringify(allStrokes));
    redoStack = [];
    allStrokes = allStrokes.filter(s => s.questionIdx !== currentIdx);
    redrawAllCanvasesOnScreen();
    saveStrokesToStorage();
}

function setupPan() {
    viewport.addEventListener('mousedown', e => {
        if (currentMode !== 'mouse') return;
        e.preventDefault();
        isPanning = true;
        panStartX = e.clientX - panX;
        panStartY = e.clientY - panY;
        viewport.style.cursor = 'grabbing';
    });

    viewport.addEventListener('mousemove', e => {
        if (isPanning) {
            e.preventDefault();
            panX = e.clientX - panStartX;
            panY = e.clientY - panStartY;
            updateZoomTransform();
        }
    });

    viewport.addEventListener('mouseup', () => {
        isPanning = false;
        viewport.style.cursor = 'grab';
    });

    viewport.addEventListener('mouseleave', () => {
        isPanning = false;
        viewport.style.cursor = 'grab';
    });
}

function setupGlobalZoom() {
    zoomOverlay.onwheel = null;

    zoomOverlay.addEventListener('wheel', e => {
            e.preventDefault();
            e.stopPropagation();

                let delta = 0;
                if (e.deltaY !== 0) {
                    const absDelta = Math.abs(e.deltaY);
                    const factor = absDelta > 50 ? 0.1 : 0.03;
                    delta = e.deltaY > 0 ? -factor : factor;
                }

            if (delta !== 0) {
                const newZoom = Math.min(Math.max(zoomScale + delta, 1), 4);
                handleZoomSlider(newZoom);
            }
        }, { passive: false });

    let initialDistance = 0;
    let initialZoom = 1;

    zoomOverlay.addEventListener('touchstart', e => {
        if (e.touches.length === 2) {
            e.preventDefault();
            initialDistance = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            initialZoom = zoomScale;
        }
    }, { passive: false });

    zoomOverlay.addEventListener('touchmove', e => {
        if (e.touches.length === 2) {
            e.preventDefault();
            const currentDistance = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            if (initialDistance > 0) {
                const scale = currentDistance / initialDistance;
                const newZoom = Math.min(Math.max(initialZoom * scale, 1), 4);
                handleZoomSlider(newZoom);
            }
        }
    }, { passive: false });

    zoomOverlay.addEventListener('touchend', () => {
        initialDistance = 0;
    });
}
function openZoom(imgUrl, elementId) {
    currentZoomElementId = elementId;
    const zoomedImg = document.getElementById('zoomed-image');
    document.getElementById('minimap-img').src = imgUrl;
    zoomScale = 2; panX = 0; panY = 0;
    document.getElementById('zoom-slider').value = 2;
    document.getElementById('zoom-val').innerText = '2.0x';
    document.getElementById('mini-map-container').classList.remove('hidden');
    updateZoomTransform();

    zoomCanvas.setAttribute('data-element-id', elementId);

    zoomedImg.src = imgUrl;

    const setupZoomCanvas = () => {
        const w = zoomedImg.clientWidth || zoomedImg.naturalWidth || 800;
        const h = zoomedImg.clientHeight || zoomedImg.naturalHeight || 600;

        if (w === 0 || h === 0) {
            setTimeout(setupZoomCanvas, 30);
            return;
        }

        zoomCanvas.width = w;
        zoomCanvas.height = h;
        redrawCanvas(zoomCanvas);
        updateCanvasesPointerEvents();
        document.body.classList.add('zoom-open');
        zoomOverlay.classList.remove('hidden');
    };

    zoomedImg.onload = () => {
        setTimeout(setupZoomCanvas, 60);
    };

    if (zoomedImg.complete) {
        setTimeout(setupZoomCanvas, 60);
    }

    if (!viewport._panSetup) {
        setupPan();
        viewport._panSetup = true;
    }
    if (!zoomOverlay._globalZoomSetup) {
        setupGlobalZoom();
        zoomOverlay._globalZoomSetup = true;
    }
}

function closeZoom() {
    zoomOverlay.classList.add('hidden');
    document.body.classList.remove('zoom-open');
    currentZoomElementId = null;
    redrawAllCanvasesOnScreen();
    updateCanvasesPointerEvents();

    if (document.getElementById('tutor-screen').classList.contains('hidden') === false) {
        const layoutToggle = document.getElementById('layout-toggle'); if (layoutToggle) layoutToggle.classList.remove('hidden');
        document.getElementById('toolbar').classList.remove('hidden');
        showViewportControls();
        viewportReset();
    }
}

function handleZoomSlider(val) {
    zoomScale = parseFloat(val);
    const slider = document.getElementById('zoom-slider');
    if (slider) slider.value = zoomScale;
    document.getElementById('zoom-val').innerText = zoomScale.toFixed(1) + 'x';
    if (zoomScale === 1) { panX = 0; panY = 0; document.getElementById('mini-map-container').classList.add('hidden'); }
    else document.getElementById('mini-map-container').classList.remove('hidden');
    updateZoomTransform();
}

function updateZoomTransform() {
    document.getElementById('zoom-transform-container').style.transform = `translate(${panX}px,${panY}px) scale(${zoomScale})`;
    updateMinimapViewer();
}

function updateMinimapViewer() {
    const viewer = document.getElementById('minimap-viewer');
    if (zoomScale <= 1) { viewer.style.cssText = 'width:100%;height:100%;left:0;top:0'; return; }
    const w = 100/zoomScale, h = 100/zoomScale;
    const l = Math.max(0, Math.min(100-w, 50 - w/2 - (panX / window.innerWidth  * 100 / zoomScale)));
    const t = Math.max(0, Math.min(100-h, 50 - h/2 - (panY / window.innerHeight * 100 / zoomScale)));
    viewer.style.cssText = `width:${w}%;height:${h}%;left:${l}%;top:${t}%`;
}

function renderQuestion() {
    console.log('renderQuestion called, currentIdx:', currentIdx, 'examScreens.length:', examScreens.length);
    if (!currentSet || examScreens.length === 0) { console.log('renderQuestion early return'); return; }
    const screenQuestions = examScreens[currentIdx];
    const totalScreens = examScreens.length;
    const num = currentIdx + 1;

    updateLayoutMode();
    const isHorizontal = currentLayoutMode === 'horizontal';

    document.getElementById('question-counter').innerText = `Page ${num} of ${totalScreens}`;
    document.getElementById('progress-percent').innerText = `${Math.round(num/totalScreens*100)}%`;
    document.getElementById('progress-bar').style.width = `${Math.round(num/totalScreens*100)}%`;

    const ap = document.getElementById('audio-player');
    const ac = document.getElementById('audio-container');
    const qAudio = screenQuestions.find(q => q.audioUrl?.trim());
    if (qAudio) { ap.src = qAudio.audioUrl; ac.classList.remove('hidden'); ap.load(); }
    else { ac.classList.add('hidden'); }

        let allImages = [...new Set(screenQuestions.flatMap(q => q.images || []))];
        carouselImages = allImages;

    const gallery = document.getElementById('image-gallery');
    const imagesArea = document.getElementById('images-area');

                const renderImage = (url, i) => {
                const elementId = `img-${currentIdx}-${i}`;
                return `
                    <div class="relative rounded-xl bg-white border border-slate-200 shadow-sm ${isHorizontal ? 'flex-shrink-0' : 'w-full mb-4'}">
                        <img src="${url}" class="${isHorizontal ? 'h-[400px] w-auto' : 'w-full max-h-[65vh]'} object-contain block select-none pointer-events-none">
                        <canvas data-element-id="${elementId}" class="gallery-canvas absolute top-0 left-0 w-full h-full z-10"></canvas>
                        <div class="absolute top-2 right-2 z-[99999]">
                            <button onclick="openZoom('${url}', '${elementId}')" class="zoom-btn bg-slate-900/90 text-white p-2 rounded-lg hover:bg-slate-800" style="position:relative;z-index:150">
                                <i data-lucide="zoom-in" class="w-4 h-4"></i>
                            </button>
                        </div>
                    </div>`;
    };

    if (isHorizontal) {
        gallery.innerHTML = '';
        imagesArea.innerHTML = allImages.map(renderImage).join('');
        imagesArea.classList.remove('hidden');
        imagesArea.style.display = 'flex';
    } else {
        gallery.innerHTML = allImages.map(renderImage).join('');
        imagesArea.classList.add('hidden');
        imagesArea.innerHTML = '';
        imagesArea.style.display = 'none';
    }




    allImages.forEach((url, i) => {
        const elementId = `img-${currentIdx}-${i}`;
        document.querySelectorAll(`canvas[data-element-id="${elementId}"]`).forEach(cvs => {
            const img = cvs.parentElement.querySelector('img');
            const setup = () => {
                cvs.width = img.clientWidth || img.naturalWidth;
                cvs.height = img.clientHeight || img.naturalHeight;
                setupCanvasDrawing(cvs);
                redrawCanvas(cvs);
            };
            if (img.complete) setup();
            else img.onload = setup;
        });
    });

    const wrapper = document.getElementById('questions-wrapper');
    wrapper.innerHTML = '';

    const numQuestions = screenQuestions.length;

    screenQuestions.forEach(q => {
        if (q.hideOptions && hiddenChoices[q.id] === undefined) {
            hiddenChoices[q.id] = true;
        }

        const col = document.createElement('div');
        if (isHorizontal) {
            col.className = 'question-column';
            if (numQuestions <= 3) {
                col.style.flex = '1 1 0';
                col.style.minWidth = '0';
            } else {
                col.style.flex = '0 0 320px';
            }
        }
        col.innerHTML = generateQuestionHTML(q);
        wrapper.appendChild(col);
        if (explanationVisible[q.id]) setTimeout(() => checkAnswer(q.id, true), 50);
    });

    const rightCanvas = document.getElementById('rightPanelCanvas');
    if (rightCanvas) {
        rightCanvas.width = rightCanvas.clientWidth;
        rightCanvas.height = rightCanvas.clientHeight;
        if (!rightCanvas.dataset.drawingSetup) {
            setupCanvasDrawing(rightCanvas);
            rightCanvas.dataset.drawingSetup = '1';
        }
        redrawCanvas(rightCanvas);
    }

    if (isHorizontal && numQuestions <= 3) {
        wrapper.style.overflowX = 'visible';
        wrapper.style.justifyContent = 'center';
    } else if (isHorizontal) {
        wrapper.style.overflowX = 'auto';
        wrapper.style.justifyContent = 'flex-start';
    }

    document.getElementById('btn-prev').style.visibility = currentIdx === 0 ? 'hidden' : 'visible';
    document.getElementById('btn-next').style.visibility = currentIdx === totalScreens - 1 ? 'hidden' : 'visible';

    populateJumpDropdown();

    if (window.lucide) lucide.createIcons();
}

function setupDrawingCanvas() {
    const canvas = document.getElementById('drawing-canvas');
    const tutorScreen = document.getElementById('tutor-screen');
    if (canvas && tutorScreen) {
        canvas.width = tutorScreen.clientWidth;
        canvas.height = tutorScreen.clientHeight;
        canvas.setAttribute('data-element-id', `drawing-${currentIdx}`);
        setupCanvasDrawing(canvas);
        redrawCanvas(canvas);
    }
}

function generateQuestionHTML(q) {
    const isH = currentLayoutMode === 'horizontal';
    const selected = (qId, i) => selectedAnswers[qId] === i;
    const hideChoices = q.hideOptions && hiddenChoices[q.id];
    const showingHiddenOptions = q.hideOptions && !hiddenChoices[q.id];
    const optionsMarkup = q.options.map((opt, i) => {
        const isSelected = selected(q.id, i);
        const defaultClass = showingHiddenOptions
            ? (isSelected ? 'bg-slate-200 border-slate-400 text-slate-700' : 'bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-500')
            : (isSelected ? 'bg-blue-50 border-2 border-blue-500 text-blue-800' : 'bg-slate-50 hover:bg-slate-100/80 border border-slate-200 text-slate-700');
        const badgeClass = showingHiddenOptions
            ? 'w-6 h-6 rounded-md bg-slate-200 shadow-sm border border-slate-300 flex items-center justify-center font-bold text-sm text-slate-500'
            : 'w-6 h-6 rounded-md bg-white shadow-sm border border-slate-200 flex items-center justify-center font-bold text-sm text-slate-500';

        return `
                <button onclick="if(currentMode!=='mouse')return;selectOption(${q.id},${i})" class="${defaultClass} w-full text-left ${isH ? 'p-4' : 'p-5'} rounded-xl text-base font-medium transition flex items-center gap-3" style="position:relative;z-index:999999">
                    <span class="${badgeClass}">${String.fromCharCode(65+i)}</span>
                    <span class="flex-1">${opt}</span>
                </button>
            `;
    }).join('');
    const transcriptShown = !!q.transcript && transcriptVisible[q.id];
    const transcriptToggleLabel = transcriptShown ? 'Hide Transcript' : 'Show Transcript';
    const transcriptToggleIcon = transcriptShown ? 'eye-off' : 'eye';
    const transcriptToggleClass = transcriptShown
        ? `w-full bg-transparent hover:bg-slate-100 text-slate-400 hover:text-slate-600 font-medium ${isH ? 'text-sm px-4 py-3' : 'text-base px-5 py-3'} rounded-xl transition flex items-center gap-1 mb-2 border border-slate-200`
        : `w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold ${isH ? 'text-sm px-4 py-3' : 'text-base px-5 py-3'} rounded-xl shadow-md shadow-yellow-200 transition flex items-center gap-1 mb-2`;
    const toggleLabel = hideChoices ? 'Show Options' : 'Hide Options';
    const toggleIcon = hideChoices ? 'eye' : 'eye-off';
    const toggleClass = hideChoices
        ? `w-full bg-red-600 hover:bg-red-700 text-white font-bold ${isH ? 'text-sm px-4 py-3' : 'text-base px-5 py-3'} rounded-xl shadow-md shadow-red-200 transition flex items-center gap-1 mb-2`
        : `w-full bg-transparent hover:bg-slate-100 text-slate-400 hover:text-slate-600 font-medium ${isH ? 'text-sm px-4 py-3' : 'text-base px-5 py-3'} rounded-xl transition flex items-center gap-1 mb-2 border border-slate-200`;

    return `
        <div class="${isH ? 'text-base' : 'text-lg'} font-bold text-slate-800 leading-snug mb-3">${q.questionText}</div>
        ${q.hideOptions ? `<button id="btn-options-${q.id}" onpointerdown="event.stopPropagation(); event.preventDefault(); toggleOptions(${q.id});" class="${toggleClass}" style="position:relative;z-index:110;pointer-events:auto"><i data-lucide="${toggleIcon}" class="w-4 h-4"></i> ${toggleLabel}</button>` : ''}
        <div id="options-wrapper-${q.id}" class="mb-2" style="position:relative;z-index:1">
            <div id="options-container-${q.id}" class="flex flex-col ${isH ? 'gap-3' : 'gap-3'} ${hideChoices ? 'hidden' : ''}">
                ${optionsMarkup}
            </div>
        </div>
        ${q.transcript ? `<button id="btn-transcript-${q.id}" onpointerdown="event.stopPropagation(); event.preventDefault(); toggleTranscript(${q.id});" class="${transcriptToggleClass}" style="position:relative;z-index:110;pointer-events:auto"><i data-lucide="${transcriptToggleIcon}" class="w-4 h-4"></i> ${transcriptToggleLabel}</button>` : ''}
        ${q.transcript ? `<div id="transcript-box-${q.id}" class="${transcriptShown ? '' : 'hidden'} mt-3 mb-3 bg-yellow-50 border border-slate-200 p-4 rounded-2xl text-slate-700 text-base whitespace-pre-line">${q.transcript}</div>` : ''}
        <button id="btn-answer-${q.id}" onpointerdown="event.stopPropagation(); event.preventDefault(); checkAnswer(${q.id});" class="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold ${isH ? 'text-sm px-4 py-3' : 'text-base px-5 py-3'} rounded-xl shadow-md shadow-emerald-200 transition flex items-center gap-1 mb-2" style="position:relative;z-index:110;pointer-events:auto">
            <i data-lucide="check-check" class="w-4 h-4"></i> Show Answer
        </button>
        <div id="explanation-box-${q.id}" class="${explanationVisible[q.id] ? '' : 'hidden'} mt-3 bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-xl text-emerald-800 text-base leading-relaxed shadow-sm"></div>
    `;
}
        function selectOption(qId, optIdx) {
            if (hiddenChoices[qId]) return;
            selectedAnswers[qId] = optIdx;
            const container = document.getElementById(`options-container-${qId}`);
            if (!container) return;
            const buttons = container.getElementsByTagName('button');
            Array.from(buttons).forEach((btn, i) => {
                const isSelected = (i === optIdx);
                btn.className = isSelected
                    ? "w-full text-left bg-blue-50 border-2 border-blue-500 p-5 rounded-xl text-base font-semibold text-blue-800 shadow-sm flex items-center gap-3"
                    : "w-full text-left bg-slate-50 hover:bg-slate-100/80 border border-slate-200 p-5 rounded-xl text-base font-medium transition flex items-center gap-3";
            });
        }

        function checkAnswer(qId, forceShow = false) {
                    const q = currentSet.questions.find(x => x.id === qId);
                    if (!q) return;

                    const box = document.getElementById(`explanation-box-${qId}`);
                    const container = document.getElementById(`options-container-${qId}`);
                    const btn = document.getElementById(`btn-answer-${qId}`);

                    if (explanationVisible[qId] && !forceShow) {
                        explanationVisible[qId] = false;
                        box.classList.add('hidden');

                        if (btn) {
                            btn.className = "w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-5 py-3 rounded-xl text-base shadow-md shadow-emerald-200 transition flex items-center gap-1.5";
                            btn.innerHTML = `<i data-lucide="check-check" class="w-4 h-4"></i> Show Answer`;
                            if (window.lucide) { lucide.createIcons(); }
                        }

                        resizeQuestionPanelCanvas();

                        if (container) {
                            const buttons = container.getElementsByTagName('button');
                            if (buttons[q.correctAnswer]) {
                                const isSelected = selectedAnswers[qId] === q.correctAnswer;
                                buttons[q.correctAnswer].className = isSelected
                                    ? "w-full text-left bg-blue-50 border-2 border-blue-500 p-5 rounded-xl text-base font-semibold text-blue-800 shadow-sm flex items-center gap-3"
                                    : "w-full text-left bg-slate-50 hover:bg-slate-100/80 border border-slate-200 p-5 rounded-xl text-base font-medium transition flex items-center gap-3";

                                const badge = buttons[q.correctAnswer].querySelector('span');
                                if (badge) badge.className = "w-6 h-6 rounded-lg bg-white shadow-sm border border-slate-200 flex items-center justify-center font-bold text-sm text-slate-500";
                            }
                        }
                    }
                    else {
                        explanationVisible[qId] = true;
                        box.innerHTML = `<div><strong class="text-emerald-700 text-base">เฉลย: ${String.fromCharCode(65+q.correctAnswer)}</strong></div><div class="mt-1 text-slate-600">${q.explanation}</div>`;
                        box.classList.remove('hidden');

                                        if (btn) {
                                            btn.className = "w-full bg-transparent hover:bg-slate-100 text-slate-400 hover:text-slate-600 font-medium px-5 py-3 rounded-xl text-base transition flex items-center gap-1.5 border border-slate-200";
                                            btn.innerHTML = `<i data-lucide="eye-off" class="w-4 h-4"></i> Hide Answer`;
                                            if (window.lucide) { lucide.createIcons(); }
                                        }

                        resizeQuestionPanelCanvas();

                        if (container) {
                            const buttons = container.getElementsByTagName('button');
                            if (buttons[q.correctAnswer]) {
                                buttons[q.correctAnswer].className = "w-full text-left bg-emerald-50 border-2 border-emerald-500 p-5 rounded-xl text-base font-semibold text-emerald-800 shadow-sm flex items-center gap-3";
                                const badge = buttons[q.correctAnswer].querySelector('span');
                                if (badge) badge.className = "w-6 h-6 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold text-sm";
                            }
                        }
                    }
                }

function _togglePanel(stateMap, qId, boxId, btnId, cfg) {
    stateMap[qId] = !stateMap[qId];
    const isOn  = stateMap[qId];
    const box   = document.getElementById(boxId);
    const btn   = document.getElementById(btnId);
    if (box) box.classList.toggle('hidden', !isOn);
    if (btn) {
        const sz = btn.className.includes('text-sm') ? 'text-sm px-4 py-3' : 'text-base px-5 py-3';
        btn.className = (isOn ? cfg.classOn : cfg.classOff).replace('{sz}', sz);
        btn.innerHTML = `<i data-lucide="${isOn ? cfg.iconOn : cfg.iconOff}" class="w-4 h-4"></i> ${isOn ? cfg.labelOn : cfg.labelOff}`;
        if (window.lucide) lucide.createIcons();
    }
}

function toggleOptions(qId) {
    const q = currentSet?.questions.find(x => x.id === qId);
    if (!q || !q.hideOptions) return;
    const note = document.getElementById(`options-hidden-note-${qId}`);
    _togglePanel(hiddenChoices, qId,
        `options-container-${qId}`,
        `btn-options-${qId}`,
        {
            labelOn:  'Hide Options', labelOff: 'Show Options',
            iconOn:   'eye-off',      iconOff:  'eye',
            classOn:  'w-full bg-transparent hover:bg-slate-100 text-slate-400 hover:text-slate-600 font-medium {sz} rounded-xl transition flex items-center gap-1 mb-2 border border-slate-200',
            classOff: 'w-full bg-red-600 hover:bg-red-700 text-white font-bold {sz} rounded-xl shadow-md shadow-red-200 transition flex items-center gap-1 mb-2',
        }
    );
    if (note) note.style.display = hiddenChoices[qId] ? 'none' : 'block';
}

function toggleTranscript(qId) {
    const q = currentSet?.questions.find(x => x.id === qId);
    if (!q || !q.transcript) return;
    _togglePanel(transcriptVisible, qId,
        `transcript-box-${qId}`,
        `btn-transcript-${qId}`,
        {
            labelOn:  'Hide Transcript', labelOff: 'Show Transcript',
            iconOn:   'eye-off',         iconOff:  'eye',
            classOn:  'w-full bg-transparent hover:bg-slate-100 text-slate-400 hover:text-slate-600 font-medium {sz} rounded-xl transition flex items-center gap-1 mb-2 border border-slate-200',
            classOff: 'w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold {sz} rounded-xl shadow-md shadow-yellow-200 transition flex items-center gap-1 mb-2',
        }
    );
}

function jumpToQuestion(index) {
    const idx = parseInt(index);
    if (idx >= 0 && idx < examScreens.length) {
        currentIdx = idx;
        renderQuestion();
        document.getElementById('question-panel').scrollTop = 0;
    }
}

function setupJumpSelect() {
    const select = document.getElementById('jump-select');
    if (!select) return;
    select.addEventListener('change', function(e) {
        const selected = this.value;
        if (selected) {
            jumpToQuestion(selected);
            this.blur(); // ปิด dropdown หลังจากเลือก
        }
    });
}

function populateJumpDropdown() {
    const grid = document.getElementById('jump-grid');
    if (!grid) return;
    grid.innerHTML = '';

    let globalQNum = 0;
    examScreens.forEach((screen, idx) => {
        screen.forEach((q, qIdx) => {
            globalQNum++;
            const btn = document.createElement('button');
            btn.textContent = globalQNum;
            btn.dataset.screenIdx = idx;
            btn.className = 'w-7 h-7 text-xs font-medium rounded-md transition flex items-center justify-center';

            if (idx === currentIdx) {
                btn.className += ' bg-blue-500 text-white shadow-sm';
            } else {
                btn.className += ' bg-slate-50 hover:bg-blue-100 text-slate-600 border border-slate-200';
            }

            btn.onclick = function() {
                jumpToQuestion(parseInt(this.dataset.screenIdx));
                closeJumpDropdown();
            };
            grid.appendChild(btn);
        });
    });
}

function toggleJumpDropdown() {
    const dropdown = document.getElementById('jump-dropdown');
    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
        populateJumpDropdown();
    } else {
        closeJumpDropdown();
    }
}

function closeJumpDropdown() {
    const dropdown = document.getElementById('jump-dropdown');
    dropdown.classList.add('hidden');
}

document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('jump-dropdown');
    const btn = document.getElementById('jump-btn');
    if (dropdown && !dropdown.classList.contains('hidden')) {
        if (!dropdown.contains(e.target) && !btn.contains(e.target)) {
            closeJumpDropdown();
        }
    }
});

function moveQuestion(step) {
    const next = currentIdx + step;
    if (next >= 0 && next < examScreens.length) {
        currentIdx = next;
        resetAudioPlayer();
        renderQuestion();
        document.getElementById('question-panel').scrollTop = 0;
    }
}

// ===== Viewport Control (Zoom & Pan) =====

const viewportWorkspace = document.getElementById('viewport-workspace');
const zoomableContent = document.getElementById('zoomable-content');

function viewportApplyTransform() {
    zoomableContent.style.transform = `translate(${panX}px, ${panY}px) scale(${zoomScale})`;

    const contentArea = document.getElementById('content-area');
    if (contentArea) {
        const wsRect = viewportWorkspace.getBoundingClientRect();
        if (zoomScale > 1) {
            contentArea.style.minWidth = Math.round(wsRect.width * zoomScale) + 'px';
            contentArea.style.minHeight = Math.round(wsRect.height * zoomScale) + 'px';
        } else {
            contentArea.style.minWidth = wsRect.width + 'px';
            contentArea.style.minHeight = wsRect.height + 'px';
        }
    }
}

function viewportSetScale(newScale, centerX, centerY) {
    const oldScale = zoomScale;
    zoomScale = Math.min(Math.max(newScale, 0.5), 4);

    if (centerX !== undefined && centerY !== undefined && oldScale > 0) {
        const contentPointX = (centerX - panX) / oldScale;
        const contentPointY = (centerY - panY) / oldScale;
        panX = centerX - contentPointX * zoomScale;
        panY = centerY - contentPointY * zoomScale;
    }

    viewportApplyTransform();
}

function viewportZoomIn() {
    const rect = viewportWorkspace.getBoundingClientRect();
    viewportSetScale(zoomScale + 0.2, rect.width / 2, rect.height / 2);
}

function viewportZoomOut() {
    const rect = viewportWorkspace.getBoundingClientRect();
    viewportSetScale(zoomScale - 0.2, rect.width / 2, rect.height / 2);
}

function viewportReset() {
    zoomScale = 1; panX = 0; panY = 0;
    viewportApplyTransform();
}
{
    function startPan(e) {
        if (e.button === 2 || (e.button === 0 && (spaceHeld || currentMode === 'mouse'))) {
            if (e.button === 0 && currentMode === 'mouse') {
                const tag = e.target.tagName.toLowerCase();
                if (tag === 'button' || tag === 'input' || tag === 'select' || tag === 'textarea') return;
                if (e.target.closest('button') || e.target.closest('.question-column')) return;
                if (e.target.closest('#viewport-controls')) return;
            }
            e.preventDefault();
            isPanning = true;
            rightClickPanning = e.button === 2;
            panStartX = e.clientX - panX;
            panStartY = e.clientY - panY;
            viewportWorkspace.classList.add('panning');
        }
    }

    function onPan(e) {
        if (isPanning) {
            e.preventDefault();
            panX = e.clientX - panStartX;
            panY = e.clientY - panStartY;
            viewportApplyTransform();
        }
    }

    function endPan() {
        if (isPanning) {
            isPanning = false;
            rightClickPanning = false;
            viewportWorkspace.classList.remove('panning');
        }
    }

    viewportWorkspace.addEventListener('mousedown', startPan);
    if (contentArea) contentArea.addEventListener('mousedown', startPan);
    window.addEventListener('mousemove', onPan);
    window.addEventListener('mouseup', endPan);

    viewportWorkspace.addEventListener('wheel', e => {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            const delta = e.deltaY > 0 ? -0.1 : 0.1;
            viewportSetScale(zoomScale + delta, e.clientX, e.clientY);
        }
    }, { passive: false });

    viewportWorkspace.addEventListener('touchstart', e => {
        if (e.touches.length === 2) {
            e.preventDefault();
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            pinchStartDistance = Math.hypot(dx, dy);
            pinchStartScale = zoomScale;
        }
    }, { passive: false });

    viewportWorkspace.addEventListener('touchmove', e => {
        if (e.touches.length === 2) {
            e.preventDefault();
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            const currentDistance = Math.hypot(dx, dy);
            if (pinchStartDistance > 0) {
                const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
                const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
                const newScale = pinchStartScale * (currentDistance / pinchStartDistance);
                viewportSetScale(newScale, midX, midY);
            }
        }
    }, { passive: false });

    viewportWorkspace.addEventListener('touchend', () => {
        pinchStartDistance = 0;
    });

    document.addEventListener('keydown', e => {
        if (e.code === 'Space' && !spaceHeld && document.activeElement.tagName !== 'INPUT') {
            spaceHeld = true;
            if (currentMode !== 'mouse') {
                previousTool = currentMode;
                setTool('mouse');
            }
        }
    });

    document.addEventListener('keyup', e => {
        if (e.code === 'Space') {
            spaceHeld = false;
        }
    });

    viewportWorkspace.addEventListener('contextmenu', e => {
        e.preventDefault();
    });
}