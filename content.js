const examPackages = [
    { //ฟ้าเหลืองแดง RC2
        "setId": "ฟ้าเหลืองแดง RC2",
        "setTitle": "ฟ้าเหลืองแดง RC2",
        "setCover": "./assets/cover/RC-Test-cover-RC-ฟ้าแดงเหลือง-2-update.webp",
        "questions": [
            {
                "id": 101,
                "groupId": "",
                "questionText": "101: Busan Cosmetics is pleased to _____ Jin-Sook Kim, a new team member in product development.",
                "audioUrl": "",
                "images": [],
                "options": [
                "welcoming",
                "welcome",
                "welcomed",
                "welcomes"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะ pleased to เป็น infinitive with to ต้องใช้ verb ช่อง 1 ไม่ผัน ส่วนข้อ (A) welcoming เป็น gerund, (C) welcomed เป็น past participle, (D) welcomes เป็น verb เติม s จึงใช้ในตำแหน่งนี้ไม่ได้"
            },
            {
                "id": 102,
                "groupId": "",
                "questionText": "102: The seminar will be attended _____ professionals in the food service industry.",
                "audioUrl": "",
                "images": [],
                "options": [
                "of",
                "over",
                "as",
                "by"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะต้องใช้ preposition เชื่อมประโยคกับ professionals by แปลว่า \"โดย\" ส่วนข้อ (A) of=\"ของ, (B) over=\"มากกว่า/เหนือกว่า\", (C) as=\"เช่น/ดังเช่น\" ล้วนผิดความหมาย\"โดย\" (การสัมมนาจะถูกเข้าร่วมโดยผู้เชี่ยวชาญในอุตสาหกรรมบริการอาหาร)"
            },
            {
                "id": 103,
                "groupId": "",
                "questionText": "103: The Human Resources Department will _____ request that employees update their personal contact information for the company's records.",
                "audioUrl": "",
                "images": [],
                "options": [
                "occasionally",
                "previously",
                "recently",
                "lately"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะตำแหน่งระหว่าง will กับ request ต้องเป็น adv ขยายกริยา แปลว่า \"เป็นครั้งคราว\" ส่วนข้อ (B) previously, (C) recently, (D) lately ต่างใช้กับเหตุการณ์ในอดีต ขัดกับ will ที่บอกอนาคต\"เป็นครั้งคราว/บางครั้ง\""
            },
            {
                "id": 104,
                "groupId": "",
                "questionText": "104: All staff members should log in to their time and labor _____ daily to record their hours worked.",
                "audioUrl": "",
                "images": [],
                "options": [
                "accounts",
                "accounted",
                "accountant",
                "accountable"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะตำแหน่งหลัง labor ต้องเป็น noun ที่ labor ขยาย แปลว่า \"บัญชีเวลาและแรงงาน\" ส่วนข้อ (B) accounted/(D) accountable ไม่ใช่ noun, (C) accountant=\"คนทำบัญชี\" ไม่ตรงบริบท"
            },
            {
                "id": 105,
                "groupId": "",
                "questionText": "105: The Humson Company has just started a lunchtime fitness program, and employees are encouraged to _____.",
                "audioUrl": "",
                "images": [],
                "options": [
                "win",
                "order",
                "collect",
                "join"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะ encouraged to + infinitive with to แปลว่า \"เข้าร่วม\" ส่วนข้อ (A) win=\"ชนะ\" ไม่เกี่ยวกับ fitness program, (B) order=\"สั่ง\" ใช้กับสินค้า, (C) collect=\"รวบรวม\" ไม่เข้ากับบริบท"
            },
            {
                "id": 106,
                "groupId": "",
                "questionText": "106: To enroll in any course, either complete the online form _____ register in person at the Greerson Learning Center.",
                "audioUrl": "",
                "images": [],
                "options": [
                "if",
                "and",
                "or",
                "but"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะ either ใช้คู่กับ or เป็น Coordinating conjunction ส่วนข้อ (A) if, (B) and, (D) but ใช้คู่กับ either ไม่ได้"
            },
            {
                "id": 107,
                "groupId": "",
                "questionText": "107: Mr. Yamagata is prepared to assist Ms. Hahn's clients while _____ conducts a training seminar in New York.",
                "audioUrl": "",
                "images": [],
                "options": [
                "hers",
                "she",
                "herself",
                "her"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะ pronoun ต้องเป็นประธานของ conducts แทน Ms. Hahn ส่วนข้อ (A) hers=possessive, (C) herself=reflexive, (D) her=object pronoun ล้วนเป็นประธานไม่ได้"
            },
            {
                "id": 108,
                "groupId": "",
                "questionText": "108: Please return the signed copy of the _____ agreement to the apartment manager's office in the enclosed envelope.",
                "audioUrl": "",
                "images": [],
                "options": [
                "rental",
                "rentable",
                "rented",
                "rents"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะตำแหน่งต้องเป็น adj ขยาย agreement rental=\"สัญญาเช่า\" ส่วนข้อ (B) rentable=\"ซึ่งให้เช่าได้, (C) rented=\"ที่ถูกเช่า\" ล้วนไม่ตรงบริบท, (D) rents เป็น verb ใช้ไม่ได้"
            },
            {
                "id": 109,
                "groupId": "",
                "questionText": "109: Employees who are affiliated with Corman Corporation will be seated _____ the third row of the auditorium.",
                "audioUrl": "",
                "images": [],
                "options": [
                "except",
                "to",
                "among",
                "in"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะ seated in the third row=\"นั่งในแถวที่สาม\" ส่วนข้อ (A) except=\"ยกเว้น\" ใช้บอกข้อยกเว้น, (B) to=\"ไปยัง\" ใช้บอกทิศทาง, (C) among=\"ท่ามกลาง\" ใช้กับกลุ่มคน ไม่ได้ใช้กับตำแหน่งแถว"
            },
            {
                "id": 110,
                "groupId": "group-110",
                "questionText": "110: Yesterday's festival featured some of the most _____ dancers that the Palace Theater has ever hosted.",
                "audioUrl": "",
                "images": [],
                "options": [
                "live",
                "liveliness",
                "lively",
                "livelier"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะตำแหน่งหลัง the most และหน้า dancers ต้องเป็น adj ขั้นสูงสุด แปลว่า \"มีชีวิตชีวา\" ส่วนข้อ (A) live=\"สด\" ไม่ตรงความหมาย, (B) liveliness เป็น noun, (D) livelier เป็น comparative ใช้กับ the most ไม่ได้"
            },
            {
                "id": 111,
                "groupId": "group-111",
                "questionText": "111: Fulsome Flowers' delivery vans must be returned promptly to the store _____ the scheduled deliveries have been completed.",
                "audioUrl": "",
                "images": [],
                "options": [
                "once",
                "soon",
                "often",
                "usually"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะต้องใช้ conjunction เชื่อมสองประโยค once แปลว่า \"เมื่อ\" ส่วนข้อ (B) soon, (C) often, (D) usually เป็น adv ไม่ใช่ conjunction"
            },
            {
                "id": 112,
                "groupId": "group-112",
                "questionText": "112: To ensure stability and safety, it is important to follow the instructions _____ when assembling the office bookshelves.",
                "audioUrl": "",
                "images": [],
                "options": [
                "exactly",
                "exact",
                "exactness",
                "exacting"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะประโยคสมบูรณ์แล้ว การเพิ่มคำต้องเป็น adv exactly แปลว่า \"อย่างถูกต้อง\" ส่วนข้อ (B) exact เป็น adj, (C) exactness เป็น noun, (D) exacting เป็น adj ที่มีความหมายต่างออกไป"
            },
            {
                "id": 113,
                "groupId": "group-113",
                "questionText": "113: At the Podell Automotive plant, Ms. Krystle _____ workers who install rebuilt engines in vehicles.",
                "audioUrl": "",
                "images": [],
                "options": [
                "conducts",
                "explains",
                "invests",
                "oversees"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะยังไม่มี main verb oversees แปลว่า \"ดูแล/กำกับควบคุม\" เหมาะสม ส่วนข้อ (A) conducts=\"ดำเนินการ, (B) explains=\"อธิบาย\", (C) invests=\"ลงทุน\" ล้วนผิดความหมาย"
            },
            {
                "id": 114,
                "groupId": "group-114",
                "questionText": "114: Yakubu Logistics will expand the warehouse loading area in preparation for an _____ in shipping activity.",
                "audioUrl": "",
                "images": [],
                "options": [
                "increased",
                "increase",
                "increases",
                "increasingly"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะ an ต้องตามด้วย noun เอกพจน์ increase แปลว่า \"การเพิ่มขึ้น\" ส่วนข้อ (A) increased เป็น past participle/adj, (C) increases เป็น verb เติม s, (D) increasingly เป็น adv"
            },
            {
                "id": 115,
                "groupId": "group-115",
                "questionText": "115: The High Performance weather gauge is _____ accurate in measuring the level of humidity in the air.",
                "audioUrl": "",
                "images": [],
                "options": [
                "surprising",
                "surprisingly",
                "surprised",
                "surprises"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะตำแหน่งระหว่าง is กับ accurate ต้องเป็น adv ขยาย accurate ส่วนข้อ (A) surprising เป็น present participle/adj, (C) surprised เป็น past participle/adj, (D) surprises เป็น verb เติม s"
            },
            {
                "id": 116,
                "groupId": "group-116",
                "questionText": "116: Ms. Oh's proposal highlights a _____ strategy for decreasing the company's transportation costs in the coming year.",
                "audioUrl": "",
                "images": [],
                "options": [
                "surrounding",
                "securing",
                "relative",
                "comprehensive"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะตำแหน่งหลัง a และหน้า strategy ต้องเป็น adj comprehensive แปลว่า \"ที่ครอบคลุม\" ส่วนข้อ (A) surrounding, (B) securing, (C) relative เป็น adj ที่ความหมายไม่เข้ากับบริบท"
            },
            {
                "id": 117,
                "groupId": "group-117",
                "questionText": "117: To receive _____ updates regarding your journal subscription status, please provide an e-mail address on the order form.",
                "audioUrl": "",
                "images": [],
                "options": [
                "period",
                "periods",
                "periodicals",
                "periodic"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะตำแหน่งต้องเป็น adj ขยาย updates periodic แปลว่า \"เป็นระยะ\" ส่วนข้อ (A) period, (B) periods เป็น noun, (C) periodicals เป็น noun (วารสาร)"
            },
            {
                "id": 118,
                "groupId": "group-118",
                "questionText": "118: _____ when they are away conducting business, members of the sales team are usually available by e-mail.",
                "audioUrl": "",
                "images": [],
                "options": [
                "Both",
                "Even",
                "Ahead",
                "Whether"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะประโยคต้องการ Adverb ขยายคำเชื่อมเพื่อเน้นย้ำความหมาย ซึ่ง Even when แปลว่า \"แม้กระทั่งเมื่อ/ในยามที่\" มีความหมายเข้ากับบริบทที่สุด ส่วนข้อ (A) Both ต้องใช้คู่กับ and, (C) Ahead มักใช้เป็น Adverb บ่งบอกทิศทางหรือเวลาล่วงหน้า, (D) Whether ต้องใช้เชื่อมประโยคเงื่อนไขที่มักมาคู่กับ or not หรือแสดงทางเลือก"
            },
            {
                "id": 119,
                "groupId": "group-119",
                "questionText": "119: There is a coffee machine _____ located on the second floor of the Tabor Building.",
                "audioUrl": "",
                "images": [],
                "options": [
                "conveniently",
                "slightly",
                "considerably",
                "eventually"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะตำแหน่งระหว่างประธาน a coffee machine กับ located ต้องเป็น adv conveniently แปลว่า \"อย่างสะดวก\" ส่วนข้อ (B) slightly=\"เล็กน้อย, (C) considerably=\"อย่างมาก\", (D) eventually=\"ในท้ายที่สุด\" ล้วนผิดความหมาย"
            },
            {
                "id": 120,
                "groupId": "group-120",
                "questionText": "120: The editor granted Ms. Porter a deadline _____ so that some information in her building renovations report could be updated.",
                "audioUrl": "",
                "images": [],
                "options": [
                "extend",
                "extensive",
                "extension",
                "extends"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะ deadline ต้องขยายนาม extension แปลว่า \"การขยายเวลา/เลื่อนกำหนด\" ส่วนข้อ (A) extend เป็น verb, (B) extensive เป็น adj, (D) extends เป็น verb เติม s"
            },
            {
                "id": 121,
                "groupId": "group-121",
                "questionText": "121: Youssouf Electronics' annual charity fund-raising event _____ next Saturday at Montrose Park.",
                "audioUrl": "",
                "images": [],
                "options": [
                "will be held",
                "to hold",
                "to be held",
                "will hold"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะยังไม่มี main verb และ next Saturday บ่งบอก future tense ส่วนข้อ (B) to hold, (C) to be held เป็น infinitive, (D) will hold เป็น active voice ซึ่งผิดหลัก passive voice ที่ต้องการ"
            },
            {
                "id": 122,
                "groupId": "group-122",
                "questionText": "122: The buildings in the Jamison Complex are open until 7:00 P.M. on workdays, but staff with proper _____ may enter at any time.",
                "audioUrl": "",
                "images": [],
                "options": [
                "reinforcement",
                "participation",
                "competency",
                "authorization"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะหลัง with proper ต้องเป็น noun authorization แปลว่า \"การอนุญาต\" ส่วนข้อ (A) reinforcement=\"การสนับสนุน, (B) participation=\"การมีส่วนร่วม\", (C) competency=\"ความสามารถ\" ล้วนผิดความหมาย"
            },
            {
                "id": 123,
                "groupId": "group-123",
                "questionText": "123: Kochi Engineering has proposed the construction of a drainage system _____ to keep the Route 480 highway dry during heavy rain.",
                "audioUrl": "",
                "images": [],
                "options": [
                "was designed",
                "designed",
                "designer",
                "designing"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะลดรูป relative clause จาก passive voice (system that was designed) ส่วนข้อ (A) was designed เป็น main verb, (C) designer เป็น noun, (D) designing เป็น present participle"
            },
            {
                "id": 124,
                "groupId": "group-124",
                "questionText": "124: Customers can obtain coverage for replacement and repair of printers _____ the purchase of an extended warranty.",
                "audioUrl": "",
                "images": [],
                "options": [
                "although",
                "because",
                "since",
                "through"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะต้องใช้ preposition through แปลว่า \"ผ่าน/โดย\" ส่วนข้อ (A) although, (B) because, (C) since เป็น conjunction หรือใช้กับเวลาเท่านั้น"
            },
            {
                "id": 125,
                "groupId": "group-125",
                "questionText": "125: We regret to announce that Mr. Charles Appiah has resigned his position as senior sales manager, _____ next Monday.",
                "audioUrl": "",
                "images": [],
                "options": [
                "effect",
                "effected",
                "effectiveness",
                "effective"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะตำแหน่งหลัง which is ต้องเป็น adj effective แปลว่า \"มีผลบังคับใช้\" ส่วนข้อ (A) effect เป็น noun/verb, (B) effected เป็น verb, (C) effectiveness เป็น noun"
            },
            {
                "id": 126,
                "groupId": "group-126",
                "questionText": "126: The Epsilon 3000 camera allows beginning photographers to enjoy professional-quality equipment, as it is _____ sophisticated yet inexpensive.",
                "audioUrl": "",
                "images": [],
                "options": [
                "gradually",
                "technologically",
                "annually",
                "productively"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะตำแหน่งระหว่าง Verb to be (is) กับ Adjective (sophisticated) ต้องเป็น Adverb ขยาย Adjective คำว่า technologically จึงเหมาะสมที่สุด แปลว่า \"ทางเทคโนโลยี\" ส่วนข้อ (A) gradually = ค่อยๆ, (C) annually = ทุกปี, (D) productively = อย่างมีประสิทธิผล ซึ่งความหมายไม่เข้ากับบริบท\"ทางเทคโนโลยี\" ส่วนข้อ (A) gradually = ค่อยๆ, (C) annually = ทุกปี, (D) productively = อย่างมีประสิทธิผล ซึ่งความหมายไม่เข้ากับบริบท"
            },
            {
                "id": 127,
                "groupId": "group-127",
                "questionText": "127: Yee-Yin Xiong held interviews with numerous clients to determine _____ Echegaray Consulting, Inc., can improve customer service.",
                "audioUrl": "",
                "images": [],
                "options": [
                "unless",
                "in order to",
                "how",
                "as if"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะต้องการคำเชื่อมแสดงวิธีการหรือคำแสดงความสัมพันธ์ในประโยค (Adverb Clause) คำว่า how เข้ากับบริบทที่สุด แปลว่า \"อย่างไร\" (เพื่อกำหนดว่าบริษัทจะสามารถปรับปรุงการบริการลูกค้าได้อย่างไร) ส่วนข้อ (A) unless = เว้นแต่, (B) in order to = เพื่อที่จะ (ต้องตามด้วยกริยาไม่ผันไม่ใช่ประโยค), (D) as if = ราวกับว่า ซึ่งล้วนผิดความหมาย\"อย่างไร\" (เพื่อกำหนดว่าบริษัทจะสามารถปรับปรุงการบริการลูกค้าได้อย่างไร) ส่วนข้อ (A) unless = เว้นแต่, (B) in order to = เพื่อที่จะ (ต้องตามด้วยกริยาไม่ผันไม่ใช่ประโยค), (D) as if = ราวกับว่า ซึ่งล้วนผิดความหมาย"
            },
            {
                "id": 128,
                "groupId": "group-128",
                "questionText": "128: Several letters of reference from local community organizations are required for _____ into the Cypress Beach Business Association.",
                "audioUrl": "",
                "images": [],
                "options": [
                "acquisition",
                "acceptance",
                "prosects",
                "improvement"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะหลัง for ต้องเป็น noun acceptance แปลว่า \"การยอมรับ\" ส่วนข้อ (A) acquisition=\"การเข้าซื้อกิจการ, (C) prospects=\"โอกาส\", (D) improvement=\"การปรับปรุง\" ล้วนผิดความหมาย\"การยอมรับ\" ส่วนข้อ (A) acquisition=\"การเข้าซื้อกิจการ\", (C) prospects=\"โอกาส\", (D) improvement=\"การปรับปรุง\" ล้วนผิดความหมาย"
            },
            {
                "id": 129,
                "groupId": "group-129",
                "questionText": "129: Rather than wearing business attire on Thursdays, staff may choose to wear casual clothing _____.",
                "audioUrl": "",
                "images": [],
                "options": [
                "enough",
                "despite",
                "instead",
                "in case"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะประโยคสมบูรณ์แล้ว ต้องใช้ adv instead แปลว่า \"แทน\" ส่วนข้อ (A) enough=\"เพียงพอ, (B) despite=\"แม้ว่า\" เป็น preposition, (D) in case=\"ในกรณีที่\"\"แทน\" ส่วนข้อ (A) enough=\"เพียงพอ\", (B) despite=\"แม้ว่า\" เป็น preposition, (D) in case=\"ในกรณีที่\""
            },
            {
                "id": 130,
                "groupId": "group-130",
                "questionText": "130: Your _____ registration card provides proof of ownership in case this product is lost or damaged.",
                "audioUrl": "",
                "images": [],
                "options": [
                "frequent",
                "indicative",
                "validated",
                "dispersed"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะตำแหน่งต้องเป็น adj ขยาย registration card validated แปลว่า \"ที่ผ่านการตรวจสอบแล้ว\" ส่วนข้อ (A) frequent=\"บ่อย, (B) indicative=\"ที่บ่งชี้\", (D) dispersed=\"ที่กระจัดกระจาย\" ล้วนผิดความหมาย"
            },
            {
                "id": 131,
                "groupId": "group-131",
                "questionText": "131",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 31-34.png"],
                "options": [
                "Cooperatively",
                "Mutually",
                "Popularly",
                "Essentially"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะตำแหน่งระหว่าง is กับ known ต้องเป็น adv popularly แปลว่า \"อย่างกว้างขวาง\" ส่วนข้อ (A) Cooperatively=\"อย่างร่วมมือ, (B) Mutually=\"ซึ่งกันและกัน\", (D) Essentially=\"โดยพื้นฐาน\" ล้วนผิดความหมาย\""
            },
            {
                "id": 132,
                "groupId": "group-132",
                "questionText": "132",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 31-34.png"],
                "options": [
                "participate",
                "claim",
                "enroll",
                "host"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะยังไม่มี main verb host แปลว่า \"จัด/เป็นเจ้าภาพ\" ส่วนข้อ (A) participate=\"เข้าร่วม, (B) claim=\"เรียกร้อง\", (C) enroll=\"ลงทะเบียน\" ล้วนผิดความหมาย\""
            },
            {
                "id": 133,
                "groupId": "group-133",
                "questionText": "133",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 31-34.png"],
                "options": [
                "We are not currently looking for volunteers.",
                "Contact our office to rent our main hall.",
                "Most of these programs are no longer available.",
                "These include classes in dancing and painting."
                ],
                "correctAnswer": 3,
                "explanation": "เพราะให้ข้อมูลเพิ่มเติมว่าโปรแกรมการศึกษามีชั้นเรียนอะไรบ้าง ส่วนข้อ (A) We are not currently looking for volunteers., (B) Contact our office to rent our main hall., (C) Most of these programs are no longer available. เป็นประโยคที่ไม่เกี่ยวข้องกัน"
            },
            {
                "id": 134,
                "groupId": "group-134",
                "questionText": "134",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 31-34.png"],
                "options": [
                "outdoor",
                "exclusive",
                "athletic",
                "formal"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะต้องเป็น adj ขยาย events outdoor แปลว่า \"กลางแจ้ง\" ส่วนข้อ (B) exclusive=\"พิเศษ, (C) athletic=\"เกี่ยวกับกีฬา\", (D) formal=\"เป็นทางการ\" ล้วนผิดความหมาย"
            },
            {
                "id": 135,
                "groupId": "group-135",
                "questionText": "135",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 35-38.png"],
                "options": [
                "allowed",
                "is allowed",
                "allowing",
                "had been allowed"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะประโยคยังไม่มี main verb และต้องเป็น passive voice ปัจจุบัน ส่วนข้อ (A) allowed เป็น past tense active, (C) allowing เป็น present participle, (D) had been allowed เป็น past perfect passive"
            },
            {
                "id": 136,
                "groupId": "group-136",
                "questionText": "136",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 35-38.png"],
                "options": [
                "able",
                "ably",
                "abled",
                "ability"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะตำแหน่งหลัง should be ต้องเป็น adj able แปลว่า \"สามารถ\" ส่วนข้อ (B) ably เป็น adv, (C) abled เป็น adjective ที่ไม่ใช้เดี่ยวๆ, (D) ability เป็น noun"
            },
            {
                "id": 137,
                "groupId": "group-137",
                "questionText": "137",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 35-38.png"],
                "options": [
                "transfers",
                "suggestions",
                "duties",
                "restrictions"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะหลัง These ต้องเป็น noun restrictions แปลว่า \"ข้อจำกัด\" ส่วนข้อ (A) transfers=\"การเปลี่ยนถ่าย, (B) suggestions=\"คำแนะนำ\", (C) duties=\"หน้าที่\" ล้วนผิดความหมาย"
            },
            {
                "id": 138,
                "groupId": "group-138",
                "questionText": "138",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 35-38.png"],
                "options": [
                "Please inquire at the service desk if it will be permitted on your flight.",
                "It should be stored under the seats when not in use.",
                "Thank you for becoming a member of the flight crew.",
                "Therefore, they will be available for a small additional fee."
                ],
                "correctAnswer": 1,
                "explanation": "เพราะให้คำแนะนำเกี่ยวกับการเก็บสัมภาระถือขึ้นเครื่อง ส่วนข้อ (A) Please inquire at the service desk if it will be permitted on your flight., (C) Thank you for becoming a member of the flight crew., (D) Therefore, they will be available for a small additional fee. เป็นประโยคที่ไม่เกี่ยวข้องกัน"
            },
            {
                "id": 139,
                "groupId": "group-139",
                "questionText": "139",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 39-42.png"],
                "options": [
                "trend",
                "facility",
                "supervisor",
                "position"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะหลัง His new ต้องเป็น noun position แปลว่า \"ตำแหน่ง\" ส่วนข้อ (A) trend=\"แนวโน้ม, (B) facility=\"สิ่งอำนวยความสะดวก\", (C) supervisor=\"ผู้ควบคุมงาน\""
            },
            {
                "id": 140,
                "groupId": "group-140",
                "questionText": "140",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 39-42.png"],
                "options": [
                "He will also be responsible for a staff of 25.",
                "Similarly, he will be relocating to London.",
                "For example, he will be training new employees.",
                "As a result, he will keep his home in Sydney."
                ],
                "correctAnswer": 0,
                "explanation": "เพราะให้ข้อมูลเพิ่มเติมเกี่ยวกับขอบเขตบทบาทใหม่ ส่วนข้อ (B) Similarly, he will be relocating to London., (C) For example, he will be training new employees., (D) As a result, he will keep his home in Sydney. เป็นประโยคที่ไม่เกี่ยวข้องกัน"
            },
            {
                "id": 141,
                "groupId": "group-141",
                "questionText": "141",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 39-42.png"],
                "options": [
                "begins",
                "began",
                "is beginning",
                "will begin"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะพูดถึงอดีตของ Mr. Pak ต้องใช้ past tense ส่วนข้อ (A) begins เป็น present tense, (C) is beginning เป็น present continuous, (D) will begin เป็น future tense"
            },
            {
                "id": 142,
                "groupId": "group-142",
                "questionText": "142",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 39-42.png"],
                "options": [
                "manage",
                "manages",
                "managed",
                "management"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะตำแหน่งต้องเป็น noun ขยาย style management แปลว่า \"การจัดการ\" ส่วนข้อ (A) manage, (B) manages เป็น verb, (C) managed เป็น past tense/past participle"
            },
            {
                "id": 143,
                "groupId": "group-143",
                "questionText": "143",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 43-46.png"],
                "options": [
                "double",
                "doubles",
                "doubling",
                "to double"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะตำแหน่งหลัง Veronica Zettici's และ role ต้องเป็น adj หรือ noun \"สองบทบาท\" ส่วนข้อ (B) doubles เป็นพหูพจน์ของ adj/noun, (C) doubling เป็น gerund, (D) to double เป็น infinitive with to"
            },
            {
                "id": 144,
                "groupId": "group-144",
                "questionText": "144",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 43-46.png"],
                "options": [
                "drawing",
                "hiring",
                "proposal",
                "edition"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะตำแหน่งหลัง your ต้องเป็น noun proposal=\"ข้อเสนอ\" ส่วนข้อ (A) drawing=\"ภาพวาด, (B) hiring=\"การจ้างงาน\", (D) edition=\"ฉบับของสื่อสิ่งพิมพ์\""
            },
            {
                "id": 145,
                "groupId": "group-145",
                "questionText": "145",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 43-46.png"],
                "options": [
                "comparing",
                "compared",
                "to compare",
                "were compared"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะยังไม่มี main verb และต้องการ active voice เปรียบเทียบ ส่วนข้อ (A) comparing เป็น gerund, (C) to compare เป็น infinitive, (D) were compared เป็น passive voice"
            },
            {
                "id": 146,
                "groupId": "group-146",
                "questionText": "146",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 43-46.png"],
                "options": [
                "For example, you might ask her about the next project on her schedule.",
                "Furthermore, it should discuss the distinct skills she brought to each aspect.",
                "In short, your work should be completed in two weeks.",
                "In addition, the article will be published in the April issue."
                ],
                "correctAnswer": 1,
                "explanation": "เพราะให้คำแนะนำเพิ่มเติมเกี่ยวกับทักษะเฉพาะที่ควรกล่าวถึงในบทความ ส่วนข้อ (A), (C), (D) เป็นประโยคที่ไม่เกี่ยวข้องกับบริบท"
            },
            {
                "id": 147,
                "groupId": "group-147",
                "questionText": "147: What is suggested about T-Star Tennis Clinic?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 47-48.png"],
                "options": [
                "It is owned by a famous athlete.",
                "It operates in several countries.",
                "It runs a program for children.",
                "It manufactures tennis equipment."
                ],
                "correctAnswer": 2,
                "explanation": "เพราะข้อความระบุว่าคลินิกมีโปรแกรมสำหรับเด็ก ส่วนข้อ (A), (B), (D) ไม่มีข้อมูลสนับสนุน"
            },
            {
                "id": 148,
                "groupId": "group-148",
                "questionText": "148: What is true about the coupon?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 47-48.png"],
                "options": [
                "It expires at the end of the year.",
                "It applies only to purchases over $30.",
                "It is not valid for online purchases.",
                "It cannot be used on tennis shirts."
                ],
                "correctAnswer": 3,
                "explanation": "เพราะคูปองใช้ได้กับแรคเก็ตและอุปกรณ์เทนนิส ไม่รวมเสื้อผ้า ส่วนข้อ (A) หมดอายุกลางปี, (B) ไม่มีเงื่อนไขขั้นต่ำ $30, (C) ใช้ซื้อออนไลน์ได้"
            },
            {
                "id": 149,
                "groupId": "group-149",
                "questionText": "149: What does Mr. Bilecki indicate he will do?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 49-50.png"],
                "options": [
                "Arrive late to the gym",
                "Teach a class",
                "Cancel a class",
                "Change the instructors' schedules"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะ Bilecki จะเปลี่ยนตารางให้ Suki สอนแทน Paula ส่วนข้อ (A) ไม่มีข้อมูลมาสาย, (B) ไม่ได้สอนเอง, (C) ไม่ได้ยกเลิกคลาส"
            },
            {
                "id": 150,
                "groupId": "group-150",
                "questionText": "150: At 8:58 A.M., what does Ms. Malone most likely mean when she writes, \"That works out perfectly\"?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 49-50.png"],
                "options": [
                "She likes Mr. Bilecki's idea.",
                "She likes exercising in the morning.",
                "She is excited about her new job.",
                "She is happy that she has the day off."
                ],
                "correctAnswer": 0,
                "explanation": "เพราะ \"That works out perfectly\" หมายถึงชอบแนวคิดของ Bilecki ส่วนข้อ (B) ไม่เกี่ยวกับชอบออกกำลังกายเช้า, (C) ไม่มีข้อมูลงานใหม่, (D) เธอแค่สลับคลาสไม่ใช่หยุดทั้งวัน"
            },
            {
                "id": 151,
                "groupId": "",
                "questionText": "151: Where would the notice most likely appear?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 51-52.png"],
                "options": [
                "In an airport terminal",
                "In a hotel lobby",
                "In an office building",
                "In a shopping plaza"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะประกาศกล่าวถึง \"Dear Atrium Hotel Guests\" และระบบในโรงแรม ส่วนข้อ (A), (C), (D) ไม่ใช่สถานที่ที่เกี่ยวข้อง"
            },
            {
                "id": 152,
                "groupId": "",
                "questionText": "152: What is being replaced?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 51-52.png"],
                "options": [
                "The air-conditioning system",
                "The telephone system",
                "The furniture",
                "The elevators"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะข้อความระบุกำลังอัปเกรดระบบปรับอากาศ ส่วนข้อ (B) โทรศัพท์ใช้งานได้ปกติ, (C) ไม่มีข้อมูลเฟอร์นิเจอร์, (D) elevator แค่พูดถึงอุณหภูมิ ไม่ใช่เปลี่ยนลิฟต์"
            },
            {
                "id": 153,
                "groupId": "",
                "questionText": "153: What is suggested about Ms. Agrawal?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 53-54.png"],
                "options": [
                "She lives in Bangalore.",
                "She leads guided tours.",
                "She enjoys bicycling.",
                "She runs a travel Web site."
                ],
                "correctAnswer": 3,
                "explanation": "เพราะ Priti กล่าวถึง \"Your Website\" คือ IndiaTip.net ของ Ms. Agrawal ส่วนข้อ (A) ไม่ได้บอกว่าเธออยู่ Bangalore, (B) ไม่มีข้อมูลนำทัวร์, (C) คนที่ชอบปั่นจักรยานคือ Priti ไม่ใช่ Ms. Agrawal\"Your Website\" คือ IndiaTip.net ของ Ms. Agrawal ส่วนข้อ (A) ไม่ได้บอกว่าเธออยู่ Bangalore, (B) ไม่มีข้อมูลนำทัวร์, (C) คนที่ชอบปั่นจักรยานคือ Priti ไม่ใช่ Ms. Agrawal\"Your Website\" คือ IndiaTip.net ของ Ms. Agrawal ส่วนข้อ (A) ไม่ได้บอกว่าเธออยู่ Bangalore, (B) ไม่มีข้อมูลนำทัวร์, (C) คนที่ชอบปั่นจักรยานคือ Priti ไม่ใช่ Ms. Agrawal"
            },
            {
                "id": 154,
                "groupId": "",
                "questionText": "154: Why is Ms. Doshi writing to Ms. Agrawal?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 53-54.png"],
                "options": [
                "To recommend a travel partner",
                "To promote a book",
                "To critique an article",
                "To update a news story"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะ Ms. Doshi นำเสนอหนังสือเกี่ยวกับเส้นทางปั่นจักรยานของเธอ ส่วนข้อ (A) ไม่ใช่แนะนำเพื่อนร่วมทาง, (C) ไม่ได้วิจารณ์บทความ, (D) ไม่ใช่อัปเดตข่าว"
            },
            {
                "id": 155,
                "groupId": "",
                "questionText": "155: How will Starr Transportation most likely use information they collect from the form?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 55-57.png"],
                "options": [
                "To create effective marketing materials",
                "To plan time-saving driving routes",
                "To determine employee promotions",
                "To improve customer service"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะแบบสำรวจเพื่อ \"better serve our customers\" ส่วนข้อ (A) ไม่เกี่ยวกับการตลาด, (B) ไม่มีข้อมูลเส้นทาง, (C) ไม่ได้ประเมินพนักงาน"
            },
            {
                "id": 156,
                "groupId": "",
                "questionText": "156: What did Mr. Chen indicate about the vehicle?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 55-57.png"],
                "options": [
                "It was a bus.",
                "It was very clean.",
                "It was too large.",
                "It was difficult to drive."
                ],
                "correctAnswer": 1,
                "explanation": "เพราะให้คะแนนความสะอาดยานพาหนะ 4/4 ส่วนข้อ (A) ไม่ได้ระบุว่าเป็นรถบัส, (C) spaciousness=3 ไม่ใช่ใหญ่เกินไป, (D) Mr. Chen เป็นผู้โดยสารไม่ได้ขับ"
            },
            {
                "id": 157,
                "groupId": "",
                "questionText": "157: What does Mr. Chen indicate about the service he received?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 55-57.png"],
                "options": [
                "The trip from Centerville took too long.",
                "The reservation process was confusing.",
                "The driver arrived later than scheduled.",
                "The vehicle was too small to fit his luggage."
                ],
                "correctAnswer": 2,
                "explanation": "เพราะ Mr. Chen บอกว่าคนขับมาพบช้ากว่าที่กำหนด ส่วนข้อ (A) ไม่ได้บอกว่าเดินทางนานเกินไป, (B) คะแนนการจอง=3 ถือว่าดี, (D) ไม่มีข้อมูลสัมภาระ"
            },
            {
                "id": 158,
                "groupId": "",
                "questionText": "158: What is indicated about Blythe House?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 58-60.png"],
                "options": [
                "It is occupied by more than one resident.",
                "It is located near public transportation.",
                "It is immediately available for a new tenant.",
                "It is suitable for residents with cats and dogs."
                ],
                "correctAnswer": 0,
                "explanation": "เพราะค่าไฟแบ่งกันจ่ายกับผู้เช่าคนอื่น แสดงว่ามีผู้เช่ามากกว่าหนึ่งคน ส่วนข้อ (B) ไม่ได้บอกใกล้รถสาธารณะ, (C) Available 1 July ยังไม่พร้อมทันที, (D) No pets allowed"
            },
            {
                "id": 159,
                "groupId": "",
                "questionText": "159: What is included in the rental fee?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 58-60.png"],
                "options": [
                "Electricity costs",
                "Security surveillance",
                "Internet service",
                "Cleaning services"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะ \"Cable television and wireless Internet service included in rent\" ส่วนข้อ (A) ค่าไฟแชร์กับผู้เช่าอื่น, (B) ไม่มีข้อมูลระบบรักษาความปลอดภัย, (D) ไม่มีข้อมูลบริการทำความสะอาด"
            },
            {
                "id": 160,
                "groupId": "",
                "questionText": "160: According to the advertisement, what are renters required to do?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 58-60.png"],
                "options": [
                "Sign a one-year contract",
                "Pay some money before moving in",
                "Provide references from previous landlords",
                "Participate in an interview"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะต้องจ่ายค่าเช่าหนึ่งเดือนและมัดจำสองเดือนก่อนเข้าอยู่ ส่วนข้อ (A) ไม่ได้ระบุสัญญา 1 ปี, (C) ไม่ต้องมี references, (D) ไม่ต้องสัมภาษณ์"
            },
            {
                "id": 161,
                "groupId": "",
                "questionText": "161: What is the article about?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 61-63.png"],
                "options": [
                "The expansion of a chain of stores",
                "Families cutting their food budgets",
                "The relocation of a popular restaurant",
                "Grocery stores changing their prices"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะ Riester's Food Markets ประกาศเปิด 5 สาขาใหม่ใน 2 ปี ส่วนข้อ (B) ไม่ได้พูดถึงครอบครัวลดงบ, (C) ไม่ใช่ร้านอาหารย้ายที่, (D) ไม่ได้เปลี่ยนราคา"
            },
            {
                "id": 162,
                "groupId": "",
                "questionText": "162: What does Mr. Chapworth mention that customers like about Riester's?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 61-63.png"],
                "options": [
                "Its friendly customer service",
                "Its inexpensive pricing",
                "Its home-delivery service",
                "Its prepared foods"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะ Chapworth กล่าวถึง \"hot ready-made meals\" เป็นที่ชื่นชอบของลูกค้า ส่วนข้อ (A) ไม่ได้พูดถึงบริการลูกค้า, (B) ราคาถูกไม่ใช่สิ่งที่ Chapworth กล่าว, (C) ไม่มีบริการส่งถึงบ้าน"
            },
            {
                "id": 163,
                "groupId": "",
                "questionText": "163: In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? \"Two more will open at sites in Manchester and Edinburgh by summer of next year.\"",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 61-63.png"],
                "options": [
                "[1]",
                "[2]",
                "[3]",
                "[4]"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะประโยค \"Two more will open...\" ควรต่อจาก Liverpool May แล้วตามด้วยสาขาที่ยังไม่ได้เลือก ส่วนข้อ [1] ต้องพูดถึงปีนี้ก่อนปีหน้า, [3], [4] อยู่ย่อหน้าที่สองไม่เกี่ยวข้อง"
            },
            {
                "id": 164,
                "groupId": "",
                "questionText": "164: Why was the letter written?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 64-66.png"],
                "options": [
                "To ask for research proposals",
                "To announce that funds have been awarded",
                "To report the results of industry studies",
                "To offer employment"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะจดหมายแจ้งว่า MGSC อนุมัติทุนวิจัย $65,000 ส่วนข้อ (A) ไม่ได้ขอ proposal, (C) ไม่ใช่รายงานผลวิจัย, (D) ไม่ใช่เสนอจ้างงาน"
            },
            {
                "id": 165,
                "groupId": "",
                "questionText": "165: When is a copy of the bank agreement due to MGSC?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 64-66.png"],
                "options": [
                "On April 15",
                "On May 5",
                "On May 13",
                "On June 1"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะเอกสารต้องส่งถึง MGSC ไม่เกิน 1 June ส่วนข้อ (A) April 15 เป็นวันที่คาดว่าธนาคารจะอนุมัติ, (B) May 5 เป็นวันที่ MGSC จะส่งสัญญา, (C) May 13 เป็นวันที่ Mr. Johnson ไม่อยู่"
            },
            {
                "id": 166,
                "groupId": "",
                "questionText": "166: What is indicated about the MGSC contract?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 64-66.png"],
                "options": [
                "It includes an itemized list of costs.",
                "It will be reviewed once a year.",
                "It requires the submission of reports.",
                "It is included with the letter."
                ],
                "correctAnswer": 2,
                "explanation": "เพราะสัญญากำหนดให้ส่งรายงานความก้าวหน้าทุกสามเดือน ส่วนข้อ (A) ไม่มีรายการค่าใช้จ่าย, (B) ไม่มีการ review รายปี, (D) สัญญาจะส่งให้หลังวันที่ 5 May"
            },
            {
                "id": 167,
                "groupId": "",
                "questionText": "167: What is suggested about Ms. Kulp?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 64-66.png"],
                "options": [
                "She is in charge of approving grant applications.",
                "She has conducted research similar to that of Ms. Ortiz.",
                "She is an employee of Akuna Allied Bank.",
                "She works with Mr. Johnson."
                ],
                "correctAnswer": 3,
                "explanation": "เพราะ Ms. Kulp ทำงานกับ Mr. Johnson ที่ MGSC ทำให้ติดต่อแทนได้ ส่วนข้อ (A) ไม่ได้มีอำนาจอนุมัติทุน, (B) ไม่มีข้อมูลการวิจัยของ Ms. Kulp, (C) เธอทำงานที่ MGSC ไม่ใช่ธนาคาร"
            },
            {
                "id": 168,
                "groupId": "",
                "questionText": "168: At 9:38 A.M., what does Ms. Lo mean when she writes, \"I'd like your input\"?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 68-71.png"],
                "options": [
                "She needs some numerical data.",
                "She needs some financial contributions.",
                "She wants to develop some projects.",
                "She wants to gather some opinions."
                ],
                "correctAnswer": 3,
                "explanation": "เพราะ \"I'd like your input\" หมายถึงขอความคิดเห็นว่าสามารถเร่งส่งสินค้าได้หรือไม่ ส่วนข้อ (A) ไม่ใช่ข้อมูลตัวเลข, (B) ไม่เกี่ยวกับการเงิน, (C) ไม่ใช่การพัฒนาโปรเจกต์"
            },
            {
                "id": 169,
                "groupId": "",
                "questionText": "169: For what type of company does Ms. Lo most likely work?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 68-71.png"],
                "options": [
                "A package delivery business",
                "A furniture manufacturer",
                "An art supply store",
                "A construction firm"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะขั้นตอน production frames, cushions, fabric บ่งชี้ว่าเป็นบริษัทผลิตเฟอร์นิเจอร์ ส่วนข้อ (A) ไม่ใช่บริษัทขนส่ง, (C) ไม่ใช่ร้านอุปกรณ์ศิลปะ, (D) ไม่ใช่บริษัทก่อสร้าง"
            },
            {
                "id": 170,
                "groupId": "",
                "questionText": "170: According to the discussion, whose department must complete their work first?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 68-71.png"],
                "options": [
                "Mr. Belmore's department",
                "Ms. Kimura's department",
                "Ms. Ochoa's department",
                "Mr. Ralston's department"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะ Mia Ochoa บอกว่า \"initially you need the designs\" แผนกออกแบบต้องเสร็จก่อน ส่วนข้อ (A) Bill เป็นขั้นตอนสุดท้าย, (B) Kimura ต้องรอแบบ, (D) Ralston ต้องรอ designs และ fabric"
            },
            {
                "id": 171,
                "groupId": "",
                "questionText": "171: What will Ms. Wilson most likely tell Mr. Tran?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 68-71.png"],
                "options": [
                "That she can meet his request for rush work",
                "That there will be an extra charge for completing his order",
                "That his order will be ready for delivery on Friday",
                "That she will meet him at her office next Monday"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะ Wilson สามารถแจ้ง Mr. Tran ว่าสามารถเร่งส่งสินค้าให้ได้วันจันทร์ ส่วนข้อ (B) ไม่มีค่าใช้จ่ายเพิ่ม, (C) ไม่ใช่วันศุกร์, (D) ไม่มีการนัดพบลูกค้า"
            },
            {
                "id": 172,
                "groupId": "",
                "questionText": "172: Why is Ms. Hendley writing to Mr. Vogel?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 72-75.png"],
                "options": [
                "To invite him to become an honorary library member",
                "To request advice about computer installation",
                "To ask him to purchase new books for the library",
                "To express appreciation for his donations"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะ Ms. Hendley ขอบคุณ Mr. Vogel ที่บริจาคคอมพิวเตอร์ กระดาษ และหมึก ส่วนข้อ (A) ไม่ได้เชิญเป็นสมาชิกกิตติมศักดิ์, (B) ไม่ได้ขอคำแนะนำติดตั้ง, (C) ไม่ได้ขอให้ซื้อหนังสือ"
            },
            {
                "id": 173,
                "groupId": "",
                "questionText": "173: What is suggested about the Highbrook Library?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 72-75.png"],
                "options": [
                "It is going to close for renovation.",
                "It has increased the hours it is open.",
                "It will be hosting a fund-raising event.",
                "It is considering adding a meeting room."
                ],
                "correctAnswer": 1,
                "explanation": "เพราะเงินบริจาคทำให้ขยายเวลาเปิดถึง 20:00 น. ส่วนข้อ (A) ไม่ได้ปิดปรับปรุง, (C) ไม่มีงานระดมทุน, (D) กำลังพิจารณาเพิ่ม cafe ไม่ใช่ meeting room"
            },
            {
                "id": 174,
                "groupId": "",
                "questionText": "174: What is indicated about the computers at Highbrook Library?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 72-75.png"],
                "options": [
                "They are for library members only.",
                "They need to be updated.",
                "They are free for members to use.",
                "They cannot be reserved."
                ],
                "correctAnswer": 2,
                "explanation": "เพราะสมาชิกใช้คอมพิวเตอร์ฟรี 2 ชั่วโมง ส่วนข้อ (A) คนไม่ใช่สมาชิกก็ใช้ได้ (เสียเงิน), (B) ไม่ได้บอกว่าต้องอัปเดต, (D) ต้องจองล่วงหน้าได้"
            },
            {
                "id": 175,
                "groupId": "",
                "questionText": "175: In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? \"This policy also helps students who want to use library resources after school.\"",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 72-75.png"],
                "options": [
                "[1]",
                "[2]",
                "[3]",
                "[4]"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะ \"This policy\" หมายถึงนโยบายขยายเวลาปิด ช่วยนักเรียนใช้หลังเลิกเรียน ส่วนข้อ [1], [2], [4] ไม่เหมาะสมตามเนื้อหา"
            },
            {
                "id": 176,
                "groupId": "",
                "questionText": "176: What is the purpose of the e-mail?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 76-80 (1).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 76-80 (2).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 76-80 (3).png"
                ],
                "options": [
                "To ask for market research volunteers",
                "To inform employees of an upcoming project",
                "To share the details of a sales report",
                "To promote a consulting firm"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะอีเมลแจ้งทีมเกี่ยวกับโครงการผลิตของเล่นไม้ใหม่ ส่วนข้อ (A) ไม่ได้ขออาสาสมัครวิจัย, (C) ไม่ใช่รายงานยอดขาย, (D) ไม่ได้โปรโมตบริษัทที่ปรึกษา"
            },
            {
                "id": 177,
                "groupId": "",
                "questionText": "177: In the e-mail, the word \"response\" in paragraph 1, line 2, is closest in meaning to",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 76-80 (1).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 76-80 (2).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 76-80 (3).png"],
                "options": [
                "answer",
                "reaction",
                "recognition",
                "confirmation"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะ \"response to our toys\" = การตอบรับ/ปฏิกิริยาจากตลาด ส่วนข้อ (A) answer=\"คำตอบ\", (C) recognition=\"การยอมรับ\", (D) confirmation=\"การยืนยัน\""
            },
            {
                "id": 178,
                "groupId": "",
                "questionText": "178: What is NOT mentioned about Aswebo Toys?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 76-80 (1).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 76-80 (2).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 76-80 (3).png"],
                "options": [
                "It sells products made by hand.",
                "It operates internationally.",
                "It will introduce a new electronic toy next year.",
                "It is a growing company."
                ],
                "correctAnswer": 2,
                "explanation": "เพราะไม่มีข้อมูลว่าจะเปิดตัวของเล่นอิเล็กทรอนิกส์ใหม่ปีหน้า ส่วนข้อ (A) มี \"handcrafted wooden toys, (B) มี \"success in international markets\", (D) มียอดขายเติบโตและขยายสินค้า\"handcrafted wooden toys\", (B) มี \"success in international markets\", (D) มียอดขายเติบโตและขยายสินค้า"
            },
            {
                "id": 179,
                "groupId": "",
                "questionText": "179: What is suggested about the toys that were used in the research?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 76-80 (1).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 76-80 (2).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 76-80 (3).png"],
                "options": [
                "They are designed for use by children up to five years old.",
                "They are currently manufactured by competitor companies.",
                "They were given to survey participants to keep.",
                "They were shown to children."
                ],
                "correctAnswer": 0,
                "explanation": "เพราะสินค้าปัจจุบันสำหรับเด็ก birth to age five ส่วนข้อ (B) ไม่ได้ผลิตโดยคู่แข่ง, (C) ไม่ได้ให้ผู้เข้าร่วมเก็บไว้, (D) แสดงให้ผู้ปกครองดูไม่ใช่เด็ก"
            },
            {
                "id": 180,
                "groupId": "",
                "questionText": "180: According to the report, what toy were the research participants the least enthusiastic about?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 76-80 (1).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 76-80 (2).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 76-80 (3).png"],
                "options": [
                "The puzzle",
                "The educational game",
                "The building set",
                "The board game"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะ building set มีคะแนนความสนใจน้อยที่สุดในตาราง ส่วนข้อ (A) puzzle, (B) educational game, (D) board game มีคะแนนสูงกว่า"
            },
            {
                "id": 181,
                "groupId": "",
                "questionText": "181: For whom is the Web page information most likely intended?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 81-85 (1).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 81-85 (2).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 81-85 (3).png"],
                "options": [
                "IAIC members",
                "Newsletter editors",
                "Publication directors",
                "Students of industrial chemistry"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะเว็บเพจเชิญสมาชิก IAIC ส่งบทความและ impressions ส่วนข้อ (B) ไม่ใช่บรรณาธิการ, (C) ไม่ใช่ผู้อำนวยการสิ่งพิมพ์, (D) สมาชิกต้อง certified industrial chemists"
            },
            {
                "id": 182,
                "groupId": "",
                "questionText": "182: According to the Web page information, what is true about the newsletter?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 81-85 (1).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 81-85 (2).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 81-85 (3).png"],
                "options": [
                "A section of it will be discontinued.",
                "Larger print will be used.",
                "It will be issued every month.",
                "It will be published in color."
                ],
                "correctAnswer": 3,
                "explanation": "เพราะจดหมายข่าวจะมี layout \"colorful\" ใหม่ ส่วนข้อ (A) มีเพิ่มส่วนใหม่ Member Views and News ไม่ได้ยกเลิก, (B) ไม่ได้บอกขนาดตัวอักษร, (C) ไม่ได้ระบุความถี่\"colorful\" ใหม่ ส่วนข้อ (A) มีเพิ่มส่วนใหม่ Member Views and News ไม่ได้ยกเลิก, (B) ไม่ได้บอกขนาดตัวอักษร, (C) ไม่ได้ระบุความถี่"
            },
            {
                "id": 183,
                "groupId": "",
                "questionText": "183: On the Web page, the word \"impressions\" in paragraph 2, line 1, is closest in meaning to",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 81-85 (1).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 81-85 (2).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 81-85 (3).png"],
                "options": [
                "characteristics",
                "imitations",
                "feelings",
                "effects"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะ \"impressions about meetings\" = ความรู้สึก/ความประทับใจ ส่วนข้อ (A) characteristics=\"ลักษณะ\", (B) imitations=\"การเลียนแบบ\", (D) effects=\"ผลกระทบ\"\"impressions about meetings\" = ความรู้สึก/ความประทับใจ ส่วนข้อ (A) characteristics=\"ลักษณะ, (B) imitations=\"การเลียนแบบ\", (D) effects=\"ผลกระทบ\""
            },
            {
                "id": 184,
                "groupId": "",
                "questionText": "184: What is suggested about Dr. Liu's submission?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 81-85 (1).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 81-85 (2).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 81-85 (3).png"],
                "options": [
                "It explains how to become an IAIC member.",
                "It will appear with one other submission.",
                "It will appear in the autumn issue of the newsletter.",
                "It was sent to Mr. Harper on June 30."
                ],
                "correctAnswer": 2,
                "explanation": "เพราะ Dr. Liu ส่ง submission วันที่ June 18 ก่อน deadline June 30 ทัน autumn issue ส่วนข้อ (A) ไม่ใช่คำแนะนำการสมัครสมาชิก, (B) ต้องลดความยาวให้มีที่สำหรับ 3 ชิ้นอื่น, (D) ส่งวันที่ 18 ไม่ใช่ 30"
            },
            {
                "id": 185,
                "groupId": "",
                "questionText": "185: What is Dr. Liu asked to do?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 81-85 (1).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 81-85 (2).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 81-85 (3).png"],
                "options": [
                "Provide details about a meeting",
                "Shorten his submission",
                "Include contact information with an article",
                "Arrange a chapter meeting"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะ Mr. Harper ขอให้แก้ไข submission ให้สั้นลงเหลือ 300 คำ ส่วนข้อ (A) ไม่ต้องเพิ่มรายละเอียด, (C) ไม่ต้องใส่ข้อมูลติดต่อ, (D) ไม่ต้องจัดประชุม"
            },
            {
                "id": 186,
                "groupId": "",
                "questionText": "186: What activity can be customized?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 86-90 (1).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 86-90 (2).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 86-90 (3).png"],
                "options": [
                "Monday's activity",
                "Tuesday's activity",
                "Wednesday's activity",
                "Thursday's activity"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะ Thursday's activity \"can be tailored to include vegetarian recipes only\" ส่วนข้อ (A) Monday surfing, (B) Tuesday flower garlands, (C) Wednesday history tour ไม่ได้ระบุว่าปรับเปลี่ยนได้"
            },
            {
                "id": 187,
                "groupId": "",
                "questionText": "187: What is the purpose of the e-mail?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 86-90 (1).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 86-90 (2).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 86-90 (3).png"],
                "options": [
                "To introduce two new employees",
                "To respond to a guest inquiry",
                "To make changes to a schedule",
                "To arrange training courses for staff"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะอีเมลแจ้งเปลี่ยนผู้สอนชั่วคราววันที่ 10-16 ก.พ. ส่วนข้อ (A) ไม่ใช่แนะนำพนักงานใหม่, (B) ไม่ใช่ตอบคำถามแขก, (D) ไม่ใช่จัดฝึกอบรม"
            },
            {
                "id": 188,
                "groupId": "",
                "questionText": "188: In the comment form, the word \"skip\" in paragraph 1, line 3, is closest in meaning to",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 86-90 (1).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 86-90 (2).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 86-90 (3).png"],
                "options": [
                "jump",
                "miss",
                "pay for",
                "look over"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะ \"skip the activity\" = พลาด/ไม่ได้เข้าร่วม ส่วนข้อ (A) jump=\"กระโดด\", (C) pay for=\"จ่ายเงิน\", (D) look over=\"ตรวจสอบ\"\"skip the activity\" = พลาด/ไม่ได้เข้าร่วม ส่วนข้อ (A) jump=\"กระโดด, (C) pay for=\"จ่ายเงิน\", (D) look over=\"ตรวจสอบ\""
            },
            {
                "id": 189,
                "groupId": "",
                "questionText": "189: Who taught the course enjoyed by Ms. Toivanen and her daughter?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 86-90 (1).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 86-90 (2).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 86-90 (3).png"],
                "options": [
                "Ms. Agbayani",
                "Ms. Choi",
                "Ms. Okimoto",
                "Ms. Wang"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะ Ms. Toivanen ชอบคลาสทำพวงมาลัยดอกไม้ ซึ่งสอนโดย Ms. Choi สอนแทน Ms. Agbayani ส่วนข้อ (A) Ms. Agbayani ปกติสอนแต่ไม่อยู่ช่วงนั้น, (C) Okimoto สอนทัวร์ที่ไม่ได้เข้าร่วม, (D) Wang สอนทำอาหาร"
            },
            {
                "id": 190,
                "groupId": "",
                "questionText": "190: What are Ms. Toivanen's children planning to do in Morocco?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 86-90 (1).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 86-90 (2).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 86-90 (3).png"],
                "options": [
                "Go surfing",
                "Learn Moroccan crafts",
                "Take a tour",
                "Make Moroccan food"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะลูกๆ เรียนโต้คลื่นกับ Mr. Kalena และจะนำไปใช้ที่ Morocco ส่วนข้อ (B), (C), (D) ไม่สอดคล้องกับสิ่งที่เรียน"
            },
            {
                "id": 191,
                "groupId": "",
                "questionText": "191: Why most likely is Mr. Giordano closing his business?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 91-95 (1).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 91-95 (2).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 91-95 (3).png"],
                "options": [
                "Because he wants to retire",
                "Because he lost business to a new shopping center",
                "Because he cannot afford to make needed repairs",
                "Because he plans to open a different kind of business"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะมี shopping center ใหม่ทำให้ธุรกิจเล็กหลายแห่งปิดตัว ส่วนข้อ (A) ไม่ได้บอกว่าเกษียณ, (C) ไม่มีข้อมูลซ่อมร้าน, (D) คนที่จะเปิดร้านใหม่คือ Ribisi ไม่ใช่ Giordano"
            },
            {
                "id": 192,
                "groupId": "",
                "questionText": "192: What is indicated about Mr. Ribisi's bakery?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 91-95 (1).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 91-95 (2).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 91-95 (3).png"],
                "options": [
                "It opened on April 23.",
                "It was once owned by Mr. Giordano.",
                "It is located on River Road.",
                "It is giving away free pastries."
                ],
                "correctAnswer": 2,
                "explanation": "เพราะร้าน Ribisi อยู่ที่ Plaza Shopping Center ซึ่งตั้งอยู่บน River Road ส่วนข้อ (A) April 23 เป็นวันที่ Taste of Italy ปิด, (B) Ribisi เป็นพนักงานไม่ใช่เจ้าของเดิม, (D) Taste of Italy แจกคัพเค้กฟรีไม่ใช่ร้าน Ribisi"
            },
            {
                "id": 193,
                "groupId": "",
                "questionText": "193: In the review, the word \"kept\" in paragraph 1, line 3, is closest in meaning to",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 91-95 (1).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 91-95 (2).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 91-95 (3).png"],
                "options": [
                "held",
                "continued",
                "saved",
                "gave"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะ \"kept commenting\" = ยังคงชมต่อไปเรื่อยๆ ส่วนข้อ (A) held=\"จัด/ถือ\", (C) saved=\"เก็บไว้\", (D) gave=\"ให้\"\"kept commenting\" = ยังคงชมต่อไปเรื่อยๆ ส่วนข้อ (A) held=\"จัด/ถือ, (C) saved=\"เก็บไว้\", (D) gave=\"ให้\"\"kept commenting\" = ยังคงชมต่อไปเรื่อยๆ ส่วนข้อ (A) held=\"จัด/ถือ\", (C) saved=\"เก็บไว้\", (D) gave=\"ให้\""
            },
            {
                "id": 194,
                "groupId": "",
                "questionText": "194: What is suggested about the Plaza Shopping Center?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 91-95 (1).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 91-95 (2).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 91-95 (3).png"],
                "options": [
                "It has generated a lot of income for Pineville City.",
                "It has attracted business for local family-owned stores.",
                "It was financed by Mayor Portofino.",
                "It was built in downtown Pineville City."
                ],
                "correctAnswer": 0,
                "explanation": "เพราะ Plaza Shopping Center ทำให้ภาษีขายของเมืองเพิ่ม 25% ส่วนข้อ (B) ตรงกันข้ามทำให้ธุรกิจท้องถิ่นปิดตัว, (C) ไม่มีข้อมูล mayor เป็นคนสนับสนุน, (D) อยู่บน River Road ไม่ใช่ downtown"
            },
            {
                "id": 195,
                "groupId": "",
                "questionText": "195: According to her statement, why does Ms. Portofino have a positive view of the Plaza Shopping Center?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 91-95 (1).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 91-95 (2).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 91-95 (3).png"],
                "options": [
                "Because it has a good bookstore",
                "Because it was completed ahead of schedule",
                "Because it offers discounts on expensive products",
                "Because it provides city residents with jobs"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะ Ms. Portofino กล่าวว่า new businesses bring \"new jobs\" ส่วนข้อ (A), (B), (C) ไม่ใช่เหตุผลที่เธอกล่าว\"new jobs\" ส่วนข้ออื่นไม่ใช่เหตุผลที่เธอกล่าว"
            },
            {
                "id": 196,
                "groupId": "",
                "questionText": "196: What does the notice suggest about the exhibition?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 96-100 (1).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 96-100 (2).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 96-100 (3).png"],
                "options": [
                "It portrays a city from a unique perspective.",
                "It is made entirely of recycled materials.",
                "It includes historical artifacts.",
                "It is inspired by a popular novel."
                ],
                "correctAnswer": 0,
                "explanation": "เพราะงานของ Goodman แสดงภาพลอนดอนในมุมที่ไม่เหมือนใคร ส่วนข้อ (B) ใช้ recycled material เป็นบางส่วน, (C) ไม่ใช่ historical artifacts, (D) ไม่ได้ inspired โดยนิยาย"
            },
            {
                "id": 197,
                "groupId": "",
                "questionText": "197: What is implied in the notice?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 96-100 (1).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 96-100 (2).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 96-100 (3).png"],
                "options": [
                "The museum exhibition will open with a lecture.",
                "Guided audio tours of the exhibition are available for an additional fee.",
                "Visitors to the exhibition are encouraged to experience it in a particular order.",
                "Mr. Goodman is supervising a building restoration project."
                ],
                "correctAnswer": 2,
                "explanation": "เพราะผู้เข้าชมจะได้เห็นลอนดอนเรียงตามลำดับเวลาจาก 2000 ปีก่อนถึงปัจจุบัน ส่วนข้อ (A) lecture ที่ Cornwall Hall ไม่ใช่เปิดนิทรรศการ, (B) ไม่มีข้อมูล audio tour, (D) Goodman ไม่ได้ควบคุมการบูรณะ"
            },
            {
                "id": 198,
                "groupId": "",
                "questionText": "198: Where most likely did Ms. Finch hear Mr. Goodman speak?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 96-100 (1).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 96-100 (2).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 96-100 (3).png"],
                "options": [
                "At a meeting of the Historic Building Conservation Society",
                "At the Center of Contemporary Art",
                "At Marson and Co. headquarters",
                "At an event at Cornwall Hall"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะ Ms. Finch น่าจะได้ฟัง Goodman พูดที่ Cornwall Hall วันที่ 9 May ส่วนข้อ (A) ไม่มีข้อมูล Goodman เคยบรรยายให้สมาคมอนุรักษ์, (B), (C) ไม่มีข้อมูล"
            },
            {
                "id": 199,
                "groupId": "",
                "questionText": "199: What is suggested about Mr. Goodman?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 96-100 (1).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 96-100 (2).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 96-100 (3).png"],
                "options": [
                "He has agreed to a contract with Ms. Finch.",
                "He will meet with Ms. Finch in Paris.",
                "He is returning from Brussels next week.",
                "He is selling some of his paintings."
                ],
                "correctAnswer": 1,
                "explanation": "เพราะ Goodman อยู่ปารีสและ Finch จะเดินทางไปปารีสสัปดาห์หน้า ส่วนข้อ (A) ยังไม่มีการเซ็นสัญญา, (C) จะเดินทางไป Brussels ไม่ใช่กลับมา, (D) ไม่มีข้อมูลขายภาพวาด"
            },
            {
                "id": 200,
                "groupId": "",
                "questionText": "200: In what field do Ms. Finch and Mr. Goodman share some expertise?",
                "audioUrl": "",
                "images": ["./assets/images/ฟ้าแดงเหลือง RC2/BRY 96-100 (1).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 96-100 (2).png",
                    "./assets/images/ฟ้าแดงเหลือง RC2/BRY 96-100 (3).png"],
                "options": [
                "English history",
                "Creative writing",
                "Contemporary art",
                "Museum management"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะ Goodman เชี่ยวชาญประวัติศาสตร์ลอนดอนและ Finch เขียนนิยายประวัติศาสตร์ลอนดอน ส่วนข้อ (B) Goodman ไม่ใช่นักเขียน, (C) Finch ไม่ใช่ศิลปินร่วมสมัย, (D) ไม่มีใครเชี่ยวชาญ museum management"
            }
        ]
    },
    { // ฟ้าม่วง LC
        "setId": "ฟ้าม่วง LC",
        "setTitle": "ฟ้าม่วง LC2",
        "setCover": "./assets/cover/LC-Test-cover-ฟ้าม่วง-2-update.webp",
        "questions": [
            {
                "id": 1,
                "questionText": "The new marketing campaign ______ by the team last month.",
                "images": [],
                "options": ["was developed", "developed", "has developed", "developing"],
                "correctAnswer": 0,
                "explanation": "เฉลยข้อ A: ประโยคนี้เป็น passive voice ในรูป past simple (by the team) จึงใช้ 'was developed'"
            },
            {
                "id": 2,
                "questionText": "All employees are required to attend the training session, ______?",
                "images": [],
                "options": ["aren't they", "don't they", "isn't it", "won't they"],
                "correctAnswer": 0,
                "explanation": "เฉลยข้อ A: Question tag สำหรับ 'are required' ใช้ 'aren't they'"
            },
            {
                "id": 3,
                "questionText": "Please read the email below from Mr. Tanaka and choose the correct answer.\n\n---\nDear Team,\n\nI am writing to remind everyone that the deadline for submitting the project reports is next Friday. Please ensure all documents are complete before submission. If you have any questions, feel free to contact me.\n\nBest regards,\nMr. Tanaka\n---\n\nWhat is the purpose of this email?",
                "images": [],
                "options": ["To announce a meeting", "To remind about a deadline", "To request a vacation", "To introduce a new policy"],
                "correctAnswer": 1,
                "explanation": "เฉลยข้อ B: อีเมลมีวัตถุประสงค์เพื่อเตือนกำหนดส่งรายงานโครงการ"
            },
            {
                "id": 4,
                "questionText": "According to the email, what should employees do if they have questions?",
                "images": [],
                "options": ["Submit a form", "Contact Mr. Tanaka", "Wait for the meeting", "Ask a colleague"],
                "correctAnswer": 1,
                "explanation": "เฉลยข้อ B: Mr. Tanaka ระบุไว้ในอีเมลว่า 'feel free to contact me'"
            }
        ]
    },
    { // ฟ้าม่วง RC
        "setId": "ฟ้าม่วง RC2",
        "setTitle": "ฟ้าม่วง RC2",
        "setCover": "./assets/cover/RC-Test-cover-RC-ฟ้าม่วง-2-update.webp",
        "questions": [
            {
                "id": 100,
                "questionText": "The new marketing campaign ______ by the team last month.",
                "images": [],
                "options": ["was developed", "developed", "has developed", "developing"],
                "correctAnswer": 0,
                "explanation": "เฉลยข้อ A: ประโยคนี้เป็น passive voice ในรูป past simple (by the team) จึงใช้ 'was developed'"
            },
            {
                "id": 101,
                "questionText": "All employees are required to attend the training session, ______?",
                        "images": [],
                        "options": ["aren't they", "don't they", "isn't it", "won't they"],
                        "correctAnswer": 0,
                        "explanation": "เพราะ pleased to เป็น infinitive with to ต้องใช้ verb ช่อง 1 ไม่ผัน ส่วนข้อ (A) welcoming เป็น gerund, (C) welcomed เป็น past participle, (D) welcomes เป็น verb เติม s จึงใช้ในตำแหน่งนี้ไม่ได้"
                    },
                    {
                        "id": 102,
                        "questionText": "Please read the email below from Mr. Tanaka and choose the correct answer.\n\n---\nDear Team,\n\nI am writing to remind everyone that the deadline for submitting the project reports is next Friday. Please ensure all documents are complete before submission. If you have any questions, feel free to contact me.\n\nBest regards,\nMr. Tanaka\n---\n\nWhat is the purpose of this email?",
                        "images": [],
                        "options": ["To announce a meeting", "To remind about a deadline", "To request a vacation", "To introduce a new policy"],
                        "correctAnswer": 1,
                        "explanation": "เพราะต้องใช้ preposition เชื่อมประโยคกับ professionals by แปลว่า \"โดย\" ส่วนข้อ (A) of=\"ของ, (B) over=\"มากกว่า/เหนือกว่า\", (C) as=\"เช่น/ดังเช่น\" ล้วนผิดความหมาย"
                    },
                    {
                        "id": 103,
                        "questionText": "According to the email, what should employees do if they have questions?",
                        "images": [],
                        "options": ["Submit a form", "Contact Mr. Tanaka", "Wait for the meeting", "Ask a colleague"],
                        "correctAnswer": 1,
                        "explanation": "เพราะตำแหน่งระหว่าง will กับ request ต้องเป็น adv ขยายกริยา แปลว่า \"เป็นครั้งคราว\" ส่วนข้อ (B) previously, (C) recently, (D) lately ต่างใช้กับเหตุการณ์ในอดีต ขัดกับ will ที่บอกอนาคต"
                    }
                ]
            }
        ];

window.addEventListener('DOMContentLoaded', () => {
    console.log('examPackages:', typeof examPackages);
    console.log('examData:', typeof examData);
});
