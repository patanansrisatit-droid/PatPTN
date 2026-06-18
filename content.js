const examPackages = [
    { //ฟ้าเหลืองแดง RC2 Checked!
        "setId": "ฟ้าเหลืองแดง RC2",
        "setTitle": "ฟ้าเหลืองแดง RC2",
        "setCover": "./assets/cover/RC-Test-cover-RC-ฟ้าแดงเหลือง-2-update.webp",
        "questions": [
            {
                "id": 101,
                "groupId": "",
                "questionText": "101: Busan Cosmetics is pleased to _____ Jin-Sook Kim, a new team member in product development.",
                
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
                "questionText": "131:",
                
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
                "questionText": "132:",
                
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
                "questionText": "133:",
                
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
                "questionText": "134:",
                
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
                "questionText": "135:",
                
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
                "questionText": "136:",
                
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
                "questionText": "137:",
                
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
                "questionText": "138:",
                
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
                "questionText": "139:",
                
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
                "questionText": "140:",
                
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
                "questionText": "141:",
                
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
                "questionText": "142:",
                
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
                "questionText": "143:",
                
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
                "questionText": "144:",
                
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
                "questionText": "145:",
                
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
                "questionText": "146:",
                
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
                "questionText": "1: The new marketing campaign ______ by the team last month.",
                "images": [],
                "options": ["was developed", "developed", "has developed", "developing"],
                "correctAnswer": 0,
                "explanation": "เฉลยข้อ A: ประโยคนี้เป็น passive voice ในรูป past simple (by the team) จึงใช้ 'was developed'"
            },
            {
                "id": 2,
                "questionText": "2: All employees are required to attend the training session, ______?",
                "images": [],
                "options": ["aren't they", "don't they", "isn't it", "won't they"],
                "correctAnswer": 0,
                "explanation": "เฉลยข้อ A: Question tag สำหรับ 'are required' ใช้ 'aren't they'"
            },
            {
                "id": 3,
                "questionText": "3: Please read the email below from Mr. Tanaka and choose the correct answer.\n\n---\nDear Team,\n\nI am writing to remind everyone that the deadline for submitting the project reports is next Friday. Please ensure all documents are complete before submission. If you have any questions, feel free to contact me.\n\nBest regards,\nMr. Tanaka\n---\n\nWhat is the purpose of this email?",
                "images": [],
                "options": ["To announce a meeting", "To remind about a deadline", "To request a vacation", "To introduce a new policy"],
                "correctAnswer": 1,
                "explanation": "เฉลยข้อ B: อีเมลมีวัตถุประสงค์เพื่อเตือนกำหนดส่งรายงานโครงการ"
            },
            {
                "id": 4,
                "questionText": "4: According to the email, what should employees do if they have questions?",
                "images": [],
                "options": ["Submit a form", "Contact Mr. Tanaka", "Wait for the meeting", "Ask a colleague"],
                "correctAnswer": 1,
                "explanation": "เฉลยข้อ B: Mr. Tanaka ระบุไว้ในอีเมลว่า 'feel free to contact me'"
            }
        ]
    },
    { // ฟ้าม่วง RC RC2 Checked!
        "setId": "ฟ้าม่วง RC2",
        "setTitle": "ฟ้าม่วง RC2",
        "setCover": "./assets/cover/RC-Test-cover-RC-ฟ้าม่วง-2-update.webp",
        "questions": [
            {
                "id": 101,
                "questionText": "101: This discounted train ticket is _____ only at certain times of the day.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "valid",
                    "validate",
                    "validating",
                    "validation"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะตำแหน่งหลัง is ต้องเป็นคำคุณศัพท์ (adj) แปลว่า ใช้ได้/มีผลบังคับใช้ ส่วนข้อ (B) validate เป็นคำกริยาช่อง 1 ใช้หลัง is ทันทีไม่ได้, (C) validating แปลว่า กำลังตรวจสอบ ซึ่งทำให้ความหมายเพี้ยน, (D) validation เป็นคำนาม แปลว่า การตรวจสอบ ให้ความหมายไม่เหมาะสม"
            },
            {
                "id": 102,
                "questionText": "102: To participate in the Advantage Discount program, _____ the registration form on our Web site.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "reply",
                    "inquire",
                    "complete",
                    "apply"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะเป็นประโยคคำสั่งที่ต้องการคำกริยาขึ้นต้น แปลว่า กรอกข้อมูล (ในฟอร์ม) ส่วนข้อ (A) reply แปลว่า ตอบ ซึ่งปกติมักใช้คู่กับ to, (B) inquire แปลว่า สอบถาม ไม่เกี่ยวกับการกรอก, (D) apply แปลว่า สมัคร มักใช้คู่กับ for"
            },
            {
                "id": 103,
                "questionText": "103: Ms. Srisati is unavailable today _____ she is flying to Mumbai.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "because",
                    "how",
                    "regarding",
                    "sooner"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะต้องการคำเชื่อมที่แปลว่า เพราะว่า เพื่อเชื่อมเหตุผลสองประโยคเข้าด้วยกัน ส่วนข้อ (B) how เป็นคำขยายกริยา, (C) regarding เป็นคำบุพบท แปลว่าเกี่ยวกับ, (D) sooner เป็นคำขยายแปลว่าเร็วขึ้น ทั้งหมดนี้ใช้เชื่อมประโยคไม่ได้"
            },
            {
                "id": 104,
                "questionText": "104: The contract _____ states that the tenants must renew their rental-property agreement by March 1.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "clear",
                    "clearly",
                    "clearer",
                    "cleared"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะตำแหน่งที่อยู่ระหว่างประธานและคำกริยาหลัก (states) ต้องใช้คำขยายกริยา (adv) เพื่อให้ประโยคชัดเจน ส่วนข้อ (A) clear เป็นคำคุณศัพท์ธรรมดา, (C) clearer เป็นการเปรียบเทียบขั้นกว่า, (D) cleared เป็นคำกริยารูปอดีต"
            },
            {
                "id": 105,
                "questionText": "105: Aiko Arts plans to host a reception _____ the artist, Remco Koeman.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "except",
                    "for",
                    "off",
                    "into"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะประโยคต้องการคำบุพบทที่แปลว่า สำหรับ แขกผู้เข้าพักทุกคน ส่วนข้อ (A) except แปลว่า ยกเว้น ซึ่งขัดแย้งกับเนื้อความ, (C) off แปลว่า ออกจาก, (D) into แปลว่า เข้าไปข้างใน ซึ่งใช้กับตัวบุคคลในบริบทนี้ไม่ได้"
            },
            {
                "id": 106,
                "questionText": "106: Unfortunately, replacing the copy machine will cost more than _____ had anticipated.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "we",
                    "us",
                    "our",
                    "ours"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะตำแหน่งนี้ต้องการคำสรรพนามที่ทำหน้าที่เป็นประธานหลักของกลุ่มคำ had anticipated ส่วนข้อ (B) us ทำหน้าที่เป็นกรรมของประโยค, (C) our แปลว่า ของพวกเรา ต้องมีคำนามตามหลัง, (D) ours แปลว่า ของพวกเรา แต่ใช้ลอย ๆ แทนคำนามไปแล้ว"
            },
            {
                "id": 107,
                "questionText": "107: Your Polytonics e-mail account will be set up _____ you arrive on your first day.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "at",
                    "around",
                    "until",
                    "before"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะต้องการคำเชื่อมประโยคแสดงลำดับเวลา แปลว่า ก่อนที่ จะมีการเซ็นสัญญา ส่วนข้อ (C) until แปลว่า จนกว่า ทำให้ความหมายไม่สมเหตุสมผล, (A) at และ (B) around เป็นคำระบุตำแหน่ง/เวลา ใช้เชื่อมประโยคแบบนี้ไม่ได้"
            },
            {
                "id": 108,
                "questionText": "108: Oaza Electronics worked _____ with our team to facilitate the development of the computerized training system.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "hardly",
                    "nearly",
                    "closely",
                    "relatively"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะตำแหน่งหลังคำกริยา (worked) ต้องการคำขยายกริยา แปลว่าทำงาน อย่างใกล้ชิด ส่วนข้อ (A) hardly แปลว่า แทบจะไม่ ซึ่งความหมายตรงข้าม, (B) nearly แปลว่า เกือบจะ ไม่ใช้ขยายคำว่าทำงาน, (D) relatively แปลว่า ค่อนข้าง ใช้กับการเปรียบเทียบระดับ"
            },
            {
                "id": 109,
                "questionText": "109: Financial adviser Jenna Sotulo helps professionals devise a _____ for managing their finances.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "prediction",
                    "gesture",
                    "strategy",
                    "request"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะหลังคำว่า a ต้องตามด้วยคำนามหลัก แปลว่า กลยุทธ์ (ทางด้านการเงิน) ส่วนข้อ (A) prediction แปลว่า การคาดการณ์ ไม่ใช่สิ่งที่เอาไว้ใช้จัดการ, (B) gesture แปลว่า ท่าทาง ไม่เกี่ยวกับเรื่องเงิน, (D) request แปลว่า คำขอ ไม่เข้ากับการวางแผน"
            },
            {
                "id": 110,
                "questionText": "110: Each employee must coordinate with management so that _____ time off can be properly scheduled.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "alone",
                    "individual",
                    "isolating",
                    "separated"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะต้องการคำคุณศัพท์ขยายเวลารับสิทธิ์ แปลว่า รายบุคคล (เวลาลาหยุดของแต่ละคน) ส่วนข้อ (A) alone แปลว่า ตามลำพัง ใช้ขยายช่วงเวลาไม่ได้, (C) isolating และ (D) separated แปลว่า ที่ถูกแยกออก ความหมายไม่สอดคล้องกับการลาหยุด"
            },
            {
                "id": 111,
                "questionText": "111: The cost of building Juniper High Towers exceeded the contractor's original _____ by over £5,000.00.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "estimating",
                    "estimate",
                    "estimated",
                    "estimator"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะหลังคำขยาย (original) ต้องตามด้วยคำนามหลัก แปลว่า การประเมิน ส่วนข้อ (A) estimating เป็นกริยาเติม -ing, (C) estimated เป็นคำขยายรูปอดีต, (D) estimator แปลว่า ผู้ประเมิน (คน) ซึ่งหากแปลจะกลายเป็น สูงกว่าผู้ประเมิน ทำให้ความหมายเพี้ยน"
            },
            {
                "id": 112,
                "questionText": "112: At Links Fine Meats, we pride _____ on providing the highest-quality products on the market.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "oneself",
                    "yourselves",
                    "itself",
                    "ourselves"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะประธานของประโยคคือ we (พวกเรา) จึงต้องใช้คำสะท้อนให้ตรงคู่กันคือ ourselves (ตัวพวกเราเอง) ส่วนข้อ (A) oneself ใช้กับคนทั่วไปที่ไม่เจาะจง, (B) yourselves ใช้กับคุณ (หลายคน), (C) itself ใช้กับสิ่งของหรือสัตว์"
            },
            {
                "id": 113,
                "questionText": "113: _____ he is usually quiet around the office, Mr. Heineman is known for his witty and engaging public speeches.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "Although",
                    "Otherwise",
                    "Despite",
                    "Instead"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะต้องการคำเชื่อมประโยคขัดแย้งที่แปลว่า ถึงแม้ว่า ส่วนข้อ (B) Otherwise แปลว่า มิฉะนั้น ความหมายไม่เข้ากัน, (C) Despite เป็นคำบุพบทใช้เชื่อมประโยคไม่ได้, (D) Instead แปลว่า แทนที่จะ"
            },
            {
                "id": 114,
                "questionText": "114: Ancient Chitimacha baskets are _____ featured in the Louisiana Museum of Archeology.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "prominent",
                    "prominently",
                    "prominence",
                    "prominences"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะตำแหน่งตรงกลางระหว่างกริยาช่วย (is) กับกริยาหลัก (featured) ต้องเป็นคำขยายกริยา (adv) ส่วนข้อ (A) prominent เป็นคำคุณศัพท์, (C) prominence และ (D) prominences เป็นคำนาม"
            },
            {
                "id": 115,
                "questionText": "115: _____ tea and coffee are available in the lobby for all guests of the Farrison Hotel.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "Compliment",
                    "To compliment",
                    "Complimented",
                    "Complimentary"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะต้องการคำคุณศัพท์มาขยายชา (tea) แปลว่า ฟรี/ให้เปล่า ส่วนข้อ (A) Compliment เป็นคำนาม แปลว่า คำชม, (B) To compliment เป็นรูปกริยาแสดงวัตถุประสงค์, (C) Complimented เป็นคำกริยารูปอดีต"
            },
            {
                "id": 116,
                "questionText": "116: _____ representatives of Light Cloud Airlines, flights are rarely overbooked.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "As opposed to",
                    "In addition to",
                    "According to",
                    "Prior to"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะต้องการคำเชื่อมกลุ่มคำที่แปลว่า ตามที่ / สอดคล้องกับ ส่วนข้อ (A) As opposed to แปลว่า ตรงข้ามกับ, (B) In addition to แปลว่า นอกเหนือจาก, (D) Prior to แปลว่า ก่อนหน้า ซึ่งต้องตามด้วยเวลาหรือเหตุการณ์"
            },
            {
                "id": 117,
                "questionText": "117: Mr. Krause will reorganize the supply room _____ the cabinets are delivered.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "overall",
                    "due to",
                    "once",
                    "soon"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะประโยคต้องการคำเชื่อมที่แปลว่า เมื่อ ส่วนข้อ (A) overall เป็นคำคุณศัพท์ทั่วไป, (B) due to แปลว่า เนื่องจาก ต้องตามด้วยกลุ่มคำนาม, (D) soon แปลว่า ในไม่ช้า"
            },
            {
                "id": 118,
                "questionText": "118: By completing employee-satisfaction surveys anonymously, workers can more _____ state their concerns about the workplace.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "wholly",
                    "openly",
                    "favorably",
                    "laboriously"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะตำแหน่งหน้าคำกริยา (state) ต้องการคำขยายกริยา เพื่อสื่อความหมายว่า สามารถระบุข้อกังวลเกี่ยวกับสถานที่ทำงานได้อย่างเปิดเผย (openly) มากขึ้น ส่วนข้อ (A) wholly แปลว่า ทั้งหมด/โดยสิ้นเชิง, (C) favorably แปลว่า ในแง่ดี, (D) laboriously แปลว่า อย่างยากลำบาก ทั้งหมดนี้ความหมายไม่เข้ากับบริบท"
            },
            {
                "id": 119,
                "questionText": "119: The final blueprints must _____ by Ms. Ito after the final draft is produced.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "approve",
                    "be approved",
                    "approving",
                    "to approve"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะหลังคำว่า must ต้องตามด้วยกริยาไม่ผัน และในบริบทนี้พิมพ์เขียว (blueprints) ต้อง ถูกอนุมัติ (เป็นผู้ถูกกระทำ) ส่วนข้อ (A) approve แปลว่าอนุมัติเอง, (C) approving เป็นรูปเติม -ing, (D) to approve มีคำว่า to ซึ่งใช้หลัง must ไม่ได้"
            },
            {
                "id": 120,
                "questionText": "120: This sewing workshop is ideal for beginner tailors _____ professionals who would like to refresh their knowledge.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "but",
                    "either",
                    "as well as",
                    "additionally"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะประโยคต้องการคำเชื่อมธรรมดาที่แปลว่า และ เพื่อรวมสองกลุ่มเข้าด้วยกัน ส่วนข้อ (A) but แปลว่า แต่ แสดงความขัดแย้งซึ่งบริบทนี้ไม่ได้ขัดแย้งกัน, (B) either ต้องใช้คู่กับคำว่า or เสมอ, (D) additionally เป็นคำขยายประโยคใหม่"
            },
            {
                "id": 121,
                "questionText": "121: All posters and flyers must be removed from the bulletin board _____ 48 hours after the event has occurred.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "within",
                    "among",
                    "unless",
                    "while"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะต้องการคำระบุเวลาที่แปลว่า ภายใน (ตามด้วยจำนวนเวลา เช่น ภายใน 5 วัน) ส่วนข้อ (B) among แปลว่า ท่ามกลาง ใช้กับกลุ่มคนหรือของหลายสิ่ง, (C) unless แปลว่า เว้นแต่ว่า, (D) while แปลว่า ในขณะที่ ทั้งสองข้อนี้ต้องตามด้วยประโยคยาว"
            },
            {
                "id": 122,
                "questionText": "122: The _____ technology used in pots by Claypol Housewares keeps the handles from getting too hot to touch.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "warm",
                    "frequent",
                    "unattached",
                    "innovative"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะต้องการคำคุณศัพท์ขยายหม้อหุงข้าว แปลว่า มีนวัตกรรมใหม่/ล้ำสมัย ส่วนข้อ (A) warm แปลว่า อบอุ่น ไม่เกี่ยวกับเทคโนโลยี, (B) frequent แปลว่า บ่อย ใช้กับเหตุการณ์, (C) unattached แปลว่า ไม่ได้ติดกัน ไม่เกี่ยวกับคุณสมบัติสินค้า"
            },
            {
                "id": 123,
                "questionText": "123: There are a number of free Web-based _____ that provide tips for locating information in historical databases.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "tutorials",
                    "tutoring",
                    "tutored",
                    "tutor"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะข้อความนี้ระบุถึง การให้คำปรึกษา/สอนพิเศษ และมีคำว่า a number of นำหน้า จึงต้องใช้คำนามรูปพหูพจน์ ส่วนข้อ (B) tutoring เป็นคำนามประเภทการเรียน, (C) tutored เป็นคำขยายรูปอดีต, (D) tutor เป็นคำนามเอกพจน์ (คนเดียว) ไม่สอดคล้องกับกริยาในประโยค"
            },
            {
                "id": 124,
                "questionText": "124: The person hired must be able to adapt _____ to changes in work assignments and schedules.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "readies",
                    "readily",
                    "readiness",
                    "ready"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะอยู่หน้าคำกริยา (adapt) จึงต้องใช้คำขยายกริยา (adv) เพื่อบอกลักษณะการปรับตัว ส่วนข้อ (A) readies เป็นคำกริยา, (C) readiness เป็นคำนาม แปลว่าความพร้อม, (D) ready เป็นคำคุณศัพท์ทั่วไป"
            },
            {
                "id": 125,
                "questionText": "125: Organizational behavior specialist Ray Majory believes a good sense of humor in a leader can increase the quality of _____ in the team.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "declaration",
                    "statement",
                    "message",
                    "communication"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะหลังคำว่า of ต้องเป็นคำนามที่สื่อถึงระบบหรือกระบวนการภายในทีม แปลว่า การสื่อสาร ส่วนข้อ (A) declaration แปลว่า การประกาศทางการ, (B) statement แปลว่า คำแถลง/คำพูด, (C) message แปลว่า ข้อความ ทั้งหมดนี้เจาะจงเกินไปและไม่ใช่ภาพรวมของระบบ"
            },
            {
                "id": 126,
                "questionText": "126: Portsmouth's agricultural industry has always found ways to _____ itself by growing different crops and finding new markets.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "reinvest",
                    "reuse",
                    "reassess",
                    "reinvent"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะโครงสร้างประโยคระบุวัตถุประสงค์ (to + กริยาช่อง 1) สื่อถึงการ สร้างใหม่ / เปลี่ยนแปลงตัวเอง ส่วนข้อ (A) reinvest แปลว่า ลงทุนใหม่ มักใช้กับเรื่องเงิน, (B) reuse แปลว่า นำกลับมาใช้ใหม่ ใช้กับสิ่งของ, (C) reassess แปลว่า ประเมินใหม่ ความหมายไม่ลึกซึ้งเท่ากับการเปลี่ยนแปลง"
            },
            {
                "id": 127,
                "questionText": "127: While some countries have made huge investments in the Caribbean lately, others have reduced _____.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "themselves",
                    "theirs",
                    "their",
                    "they"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะต้องการคำสรรพนามที่แสดงความเป็นเจ้าของ แปลว่า เงินลงทุนของประเทศอื่น ๆ (ย่อมาจากคำว่า their investments) ส่วนข้อ (A) themselves ใช้เมื่อประธานและกรรมเป็นสิ่งเดียวกัน, (C) their ต้องมีคำนามตามหลังเสมอ, (D) they ทำหน้าที่เป็นประธานหลัก"
            },
            {
                "id": 128,
                "questionText": "128: The ethics committee cited the potential benefits of the research project while _____ its high cost.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "acknowledging",
                    "to acknowledge",
                    "has acknowledged",
                    "acknowledge"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะเป็นการย่อประโยคบอกเวลา (ขณะที่กำลังทำสิ่งนั้นอยู่) จึงใช้รูปกริยาเติม -ing หลัง while ส่วนข้อ (B) to acknowledge แปลว่าเพื่อที่จะ, (C) has acknowledged และ (D) acknowledge เป็นคำกริยาเต็มประโยคซึ่งจุดนี้ไม่ต้องการกริยาแท้เพิ่ม"
            },
            {
                "id": 129,
                "questionText": "129: The report describes the environmental impact on lakes and rivers of using _____ energy sources.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "together",
                    "hopeful",
                    "regulatory",
                    "renewable"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะวางหน้าแหล่งพลังงาน จึงต้องใช้คำคุณศัพท์ที่เจาะจงประเภท แปลว่า พลังงานหมุนเวียน/ทดแทน ส่วนข้อ (A) together แปลว่าด้วยกัน, (B) hopeful แปลว่ามีความหวัง มักใช้กับคน, (C) regulatory แปลว่าเกี่ยวกับกฎข้อบังคับ"
            },
            {
                "id": 130,
                "questionText": "130: Any decorations on the ceilings or walls must be fully removed, including any material used to _____ them to the surfaces.",
                "audioUrl": "",
                "images": [],
                "options": [
                    "adhere",
                    "attract",
                    "construct",
                    "sustain"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะมีสำนวน used to ที่แปลว่าเคยชิน หรือใช้ในบริบทที่แปลว่า ยึดติดอยู่กับ ส่วนข้อ (B) attract แปลว่าดึงดูด, (C) construct แปลว่าสร้าง, (D) sustain แปลว่าค้ำจุน/รักษาไว้ ซึ่งความหมายไม่เข้ากับคำว่าติดอยู่กับที่"
            },
            {
                "id": 131,
                "questionText": "131:",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 31-34.png"
                ],
                "options": [
                    "is to introduce",
                    "was introducing",
                    "has introduced",
                    "would have introduced"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะประโยคหลักยังไม่มีคำกริยาแท้ และเนื้อความพูดถึงเหตุการณ์ทั่วไปในปัจจุบัน จึงเลือกกริยาปัจจุบันธรรมดา ส่วนข้อ (A) รูปประโยคผิดหลักการวางกริยาซ้อน, (B) เป็นรูปอดีตที่กำลังทำอยู่, (D) เป็นรูปเงื่อนไขสมมุติอดีตซึ่งไม่เข้ากับบริบท"
            },
            {
                "id": 132,
                "questionText": "132:",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 31-34.png"
                ],
                "options": [
                    "precise",
                    "precisely",
                    "precision",
                    "preciseness"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะตำแหน่งที่อยู่หน้าคำกริยา (monitors) ต้องใช้คำขยายกริยา (adv) แปลว่า ตรวจสอบ อย่างแม่นยำ ส่วนข้อ (A) precise เป็นคำคุณศัพท์, (C) precision และ (D) preciseness เป็นคำนาม แปลว่าความแม่นยำ"
            },
            {
                "id": 133,
                "questionText": "133:",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 31-34.png"
                ],
                "options": [
                    "inventory",
                    "scheduling",
                    "vendors",
                    "ingredients"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะหลังคำกริยา (see) ต้องเป็นคำนามที่ระบบนี้เข้าไปตรวจสอบขยายความ แปลว่า สินค้าคงคลัง/สต๊อกสินค้า ส่วนข้อ (B) scheduling แปลว่าการจัดตาราง, (C) vendors แปลว่าผู้ขาย, (D) ingredients แปลว่าส่วนผสม"
            },
            {
                "id": 134,
                "questionText": "134:",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 31-34.png"
                ],
                "options": [
                    "This system ensures that shoppers can always find what they want.",
                    "This computer sends data to store security staff.",
                    "The Mombasa store is gaining more and more customers.",
                    "The most popular item at Incredible Cravings is the chocolate croissant."
                ],
                "correctAnswer": 0,
                "explanation": "เพราะเนื้อหาพูดถึงประโยชน์ของระบบเซ็นเซอร์อัจฉริยะ ซึ่งช่วยเตือนและจัดการเรื่องการเติมสต๊อกสินค้าให้พอดี ส่วนข้อ (B) ส่งข้อมูลให้ รปภ., (C) มีลูกค้าเพิ่มขึ้น, (D) สินค้าขายดี เป็นข้อมูลที่ไม่เกี่ยวข้องกับระบบตรวจสต๊อก"
            },
            {
                "id": 135,
                "questionText": "135:",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 35-38.png"
                ],
                "options": [
                    "Equally",
                    "Rather",
                    "In general",
                    "As a result"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะต้องการคำขยายขึ้นต้นประโยคเพื่อบอกสถานการณ์ทั่วไป แปลว่า โดยทั่วไปแล้ว ส่วนข้อ (A) Equally แปลว่าในทำนองเดียวกัน, (B) Rather แปลว่าค่อนข้างจะ, (D) As a result แปลว่าส่งผลให้"
            },
            {
                "id": 136,
                "questionText": "136:",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 35-38.png"
                ],
                "options": [
                    "This is true for both residential and commercial moves.",
                    "Therefore, allow one to two weeks for your shipment to arrive.",
                    "Most moving companies are based in large cities.",
                    "Moving is stressful at any time of the year."
                ],
                "correctAnswer": 0,
                "explanation": "เพราะเนื้อความด้านหลังคุยเรื่องความยืดหยุ่นของเวลา ซึ่งสัมพันธ์และเชื่อมโยงกับการย้ายออฟฟิศทั้งสองประเภท ส่วนข้อ (B) บอกให้รอ 1-2 สัปดาห์, (C) พูดถึงที่ตั้งบริษัทขนย้าย, (D) บอกว่าการย้ายบ้านเครียดตลอดปี ทั้งหมดนี้ไม่สอดคล้องกับบริบทความยืดหยุ่น"
            },
            {
                "id": 137,
                "questionText": "137:",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 35-38.png"
                ],
                "options": [
                    "frustrating",
                    "similar",
                    "beneficial",
                    "unusual"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะหลังคำว่า can be ต้องเป็นคำคุณศัพท์ที่บอกผลลัพธ์ในแง่ดี แปลว่า เป็นประโยชน์/ส่งผลดี ส่วนข้อ (A) frustrating แปลว่าน่าผิดหวังซึ่งตรงข้ามกับบริบท, (B) similar แปลว่าคล้ายคลึงกัน, (D) unusual แปลว่าไม่ปกติ ซึ่งไม่เกี่ยวกับการวางแผนงานที่ดี"
            },
            {
                "id": 138,
                "questionText": "138:",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 35-38.png"
                ],
                "options": [
                    "reduced",
                    "reduces",
                    "reducing",
                    "reduce"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะประโยคยังไม่มีคำกริยาแท้ และประธานคือ you (คุณ) ในเหตุการณ์ปัจจุบันทั่วไป จึงใช้กริยาช่อง 1 แบบไม่เติม s ส่วนข้อ (A) reduced เป็นรูปอดีต, (B) reduces เป็นรูปเติม s, (C) reducing เป็นรูปเติม -ing"
            },
            {
                "id": 139,
                "questionText": "139:",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 39-42.png"
                ],
                "options": [
                    "provided",
                    "provides",
                    "will provide",
                    "providing"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะเป็นการลดรูปประโยคขยาย โดยที่ประธาน (งานอีเวนต์) เป็นผู้ให้สิ่งนั้นเอง จึงเปลี่ยนกริยาเป็นรูปเติม -ing ส่วนข้อ (A) provided, (B) provides, (C) will provide ผิดหลักการลดรูปประโยคซ้อน"
            },
            {
                "id": 140,
                "questionText": "140:",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 39-42.png"
                ],
                "options": [
                    "late",
                    "well",
                    "still",
                    "yet"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะต้องการคำขยายที่แปลว่า ณ ขณะนี้ / ปัจจุบันนี้ ในบริบทที่บอกว่างานใหญ่ที่สุดเท่าที่เคยมีมา ส่วนข้อ (A) late แปลว่าสาย, (B) well แปลว่าดี, (C) still แปลว่ายังคง ซึ่งไม่เข้ากับโครงสร้างเปรียบเทียบขั้นสุด"
            },
            {
                "id": 141,
                "questionText": "141:",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 39-42.png"
                ],
                "options": [
                    "The event will take place August 6 to 8 at the Durham Convention Center.",
                    "Changes to the schedule will be announced in the coming weeks.",
                    "Most reviews of the event have been positive.",
                    "It is not necessary to provide a credit card number at this time."
                ],
                "correctAnswer": 0,
                "explanation": "เพราะเนื้อหาประโยคนี้ให้ข้อมูลระบุวัน เวลา และสถานที่จัดงาน ซึ่งจำเป็นอย่างยิ่งสำหรับผู้ที่สนใจจะเข้าร่วมงาน ส่วนข้ออื่น ๆ ไม่สอดคล้องกับป้ายประกาศเชิญชวน"
            },
            {
                "id": 142,
                "questionText": "142:",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 39-42.png"
                ],
                "options": [
                    "vehicle",
                    "space",
                    "upgrade",
                    "date"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะหลังคำว่า your ต้องเป็นคำนามที่จองได้ในงานแสดงสินค้า แปลว่า พื้นที่ (บูธแสดงสินค้า) ส่วนข้อ (A) vehicle แปลว่ายานพาหนะ, (C) upgrade แปลว่าการอัปเกรด, (D) date แปลว่าวันเวลา ซึ่งไม่ใช่สิ่งที่จะมาจับจองพื้นที่กัน"
            },
            {
                "id": 143,
                "questionText": "143:",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 43-46.png"
                ],
                "options": [
                    "left out",
                    "put down",
                    "let go",
                    "shut off"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะประโยคระบุถึงระบบน้ำประปาที่ ต้องถูกปิด (เป็นผู้ถูกกระทำ) จึงใช้รูปกริยาช่อง 3 ส่วนข้อ (A) left out แปลว่าตกหล่น, (B) put down แปลว่าวางลง, (C) let go แปลว่าปล่อยไป ซึ่งไม่เกี่ยวกับการปิดวาล์วน้ำ"
            },
            {
                "id": 144,
                "questionText": "144:",
                "questionText": "141: ข้อสอบประเภทเลือกประโยคที่เหมาะสมเติมลงในช่องว่าง ข้อ 141]",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 43-46.png"
                ],
                "options": [
                    "needed",
                    "in need of",
                    "a need for",
                    "necessary"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะต้องการสื่อความหมายว่า กำลังเป็นที่ต้องการ โดยวางไว้ตามหลัง verb to be ส่วนข้อ (A) needed เป็นรูปอดีต, (C) a need for มักใช้ตามหลังโครงสร้าง There is, (D) necessary เป็นคำคุณศัพท์ทั่วไป แปลว่าจำเป็น"
            },
            {
                "id": 145,
                "questionText": "145:",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 43-46.png"
                ],
                "options": [
                    "The total cost is still not known.",
                    "The hours of operation are subject to change.",
                    "Sales are expected to increase steadily.",
                    "The work will be done in several stages."
                ],
                "correctAnswer": 3,
                "explanation": "เพราะเนื้อความตอนท้ายสรุปและบอกกำหนดการชัดเจนว่า โครงการทั้งหมดจะใช้เวลาทำรวมทั้งสิ้น 3 เดือน จึงสอดคล้องกับการอธิบายว่าแบ่งทำเป็นระยะ ๆ"
            },
            {
                "id": 146,
                "questionText": "146:",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 43-46.png"
                ],
                "options": [
                    "essential",
                    "temporary",
                    "expensive",
                    "unexpected"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะตามหลังคำว่า are ต้องเป็นคำคุณศัพท์ที่บอกเหตุผลของการซ่อมแซม แปลว่า จำเป็น/เลี่ยงไม่ได้ ส่วนข้อ (B) temporary แปลว่าชั่วคราว, (C) expensive แปลว่าแพง, (D) unexpected แปลว่าไม่คาดคิด"
            },
            {
                "id": 147,
                "questionText": "147: What is NOT a requirement for the job?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 47-48.png"
                ],
                "options": [
                    "Personal tools",
                    "Carpentry skills",
                    "A driver's license",
                    "Plumbing experience"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะในใบประกาศระบุคำว่า preferred ซึ่งหมายถึง ถ้ามีจะพิจารณาเป็นพิเศษแต่ไม่บังคับ จึงไม่ใช่ข้อกำหนดตายตัว ส่วนข้ออื่น ๆ เป็นกฎเกณฑ์หรือทักษะที่ระบุว่าจำเป็นต้องมี"
            },
            {
                "id": 148,
                "questionText": "148: What is suggested about the job?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 47-48.png"
                ],
                "options": [
                    "It will start on June 4.",
                    "It is a temporary position.",
                    "It takes place in an office.",
                    "It will involve training other workers."
                ],
                "correctAnswer": 1,
                "explanation": "เพราะในข้อความระบุช่วงเวลารับประกันงานไว้ชัดเจนคือ ตั้งแต่เดือนกรกฎาคมถึงกันยายน ซึ่งนับรวมได้ 3 เดือนพอดี เป็นตำแหน่งชั่วคราว ส่วนวันที่ 4 มิถุนายนคือวันสุดท้ายที่ส่งใบสมัคร ไม่ใช่วันเริ่มงาน"
            },
            {
                "id": 149,
                "questionText": "149: What is indicated about the package?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 49-50.png"
                ],
                "options": [
                    "It was damaged during shipping.",
                    "It must be picked up at the post office.",
                    "It could not be delivered previously.",
                    "It does not require a signature."
                ],
                "correctAnswer": 2,
                "explanation": "เพราะหัวข้อเขียนว่าเป็นการส่งของครั้งที่สอง (second attempt) แสดงว่าก่อนหน้านี้เคยมาส่งแล้วแต่ไม่สำเร็จเนื่องจากไม่มีคนเซ็นรับ ส่วนข้ออื่น ๆ ไม่มีข้อมูลสนับสนุนในเนื้อหา"
            },
            {
                "id": 150,
                "questionText": "150: What is Ms. Park asked to do?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 49-50.png"
                ],
                "options": [
                    "Obtain a tracking number",
                    "Contact a delivery company",
                    "Leave a document in her mailbox",
                    "Pay an overnight delivery fee"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะในข้อความแจ้งว่า โปรดโทรหาเราเพื่อนัดวันเวลาเข้ารับของหรือให้ไปส่งใหม่อีกครั้ง ซึ่งก็คือการติดต่อบริษัทขนส่งสินค้า"
            },
            {
                "id": 151,
                "questionText": "151: At 8:32 A.M., what does Mr. Chun most likely mean when he writes, \"No idea\"?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 51-52.png"
                ],
                "options": [
                    "He does not know when the event begins.",
                    "He does not know whether the cables are connected.",
                    "He does not know where to deliver a message.",
                    "He does not know why the equipment is not working."
                ],
                "correctAnswer": 3,
                "explanation": "เพราะสำนวน No idea เป็นการตอบประโยคก่อนหน้าว่า ไม่รู้เลย ว่าทำไมเครื่องโปรเจกเตอร์หรืออุปกรณ์ถึงเปิดไม่ติด"
            },
            {
                "id": 152,
                "questionText": "152: What will Ms. Lind most likely do next?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 51-52.png"
                ],
                "options": [
                    "Call for technical support",
                    "Purchase a new projector",
                    "Go to the conference room",
                    "Make a short presentation"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะแชตของ Hannah (Ms. Lind) ระบุว่า ขอเวลาฉันสักหนึ่งนาทีเพื่อเดินไปที่ห้องนั้น แสดงว่าเธอกำลังจะเดินไปช่วยดูความเรียบร้อยให้ที่ห้องประชุม"
            },
            {
                "id": 153,
                "questionText": "153: What is the purpose of the notice?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 53-55.png"
                ],
                "options": [
                    "To advertise new job openings",
                    "To publicize an upcoming event",
                    "To confirm a change in schedule",
                    "To announce an employee promotion"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะเนื้อหาประกาศเชิญชวนคนในชุมชนให้มาร่วมกิจกรรม ฟังการอ่านบทกวี (poetry reading) ที่ร้านหนังสือ ซึ่งเป็นการประชาสัมพันธ์กิจกรรมที่กำลังจะเกิดขึ้น"
            },
            {
                "id": 154,
                "questionText": "154: Who is Mr. Lefevre?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 53-55.png"
                ],
                "options": [
                    "A café manager",
                    "A writing professor",
                    "A university student",
                    "A professional writer"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะในข้อความเขียนแนะนำตัวไว้ว่า Richard Lefevre เป็น หนึ่งในนักเรียนวิชาเขียนเชิงสร้างสรรค์ของเขา จึงหมายถึงเขายังเป็นนักศึกษาของมหาวิทยาลัยอยู่"
            },
            {
                "id": 155,
                "questionText": "155: What are members of the public invited to do?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 53-55.png"
                ],
                "options": [
                    "Submit a writing sample for consideration",
                    "Apply for a position in person",
                    "Enroll in a creative-writing class",
                    "Purchase a book released in June"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะกติการะบุให้ผู้ที่สนใจส่งบทกวีที่แต่งเองและยังไม่เคยได้รับการตีพิมพ์มาทางอีเมลเพื่อรับการพิจารณาคัดเลือก (writing sample)"
            },
            {
                "id": 156,
                "questionText": "156: What is mentioned about Really Real?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 56-58.png"
                ],
                "options": [
                    "It must approve all reviews.",
                    "It does not verify product information.",
                    "It will not advertise by e-mail.",
                    "It charges a fee for registration."
                ],
                "correctAnswer": 2,
                "explanation": "เพราะในข้อตกลงมีคำสัญญาอย่างชัดเจนว่า คุณจะไม่ได้รับอีเมลโฆษณาสินค้าใด ๆ ทั้งสิ้นหลังจากกรอกข้อมูลรีวิวบนเว็บไซต์นี้"
            },
            {
                "id": 157,
                "questionText": "157: What does Really Real's service allow companies to do?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 56-58.png"
                ],
                "options": [
                    "Advertise new offerings",
                    "Improve their products",
                    "Contact consumers directly",
                    "Host an online store"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะระบุผลประโยชน์ว่า ผู้ผลิตสินค้าจะได้เข้าใจแนวโน้มความต้องการและคำติชมของผู้บริโภคเพื่อนำไปปรับปรุงและพัฒนาสินค้าให้ดียิ่งขึ้น"
            },
            {
                "id": 158,
                "questionText": "158: In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? \"Beginning in January, we plan to include furniture as well.\"",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 56-58.png"
                ],
                "options": [
                    "[1]",
                    "[2]",
                    "[3]",
                    "[4]"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะประโยคก่อนหน้าบอกว่า ปัจจุบันเว็บนี้จำกัดการรีวิวเฉพาะกลุ่มเครื่องใช้ไฟฟ้าและอิเล็กทรอนิกส์ การนำประโยคที่บอกว่าจะเพิ่มหมวดหมู่เฟอร์นิเจอร์มาวางต่อท้ายตรงช่อง [2] จึงสอดคล้องที่สุด"
            },
            {
                "id": 159,
                "questionText": "159: What did Ms. Garza ask Caivano Printing Services to do?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 59-60.png"
                ],
                "options": [
                    "Call her when an order is ready",
                    "Use certain colors in a printing job",
                    "Ensure that text is visible from a distance",
                    "Reprint posters to correct a mistake that was made"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะคำสั่งบอกให้ขยายขนาดรูปภาพ (enlarge image) เพื่อทดสอบดูว่าจะสามารถอ่านข้อความหรือตัวหนังสือได้ชัดเจนจากระยะ 3 เมตรหรือไม่ (visible from a distance)"
            },
            {
                "id": 160,
                "questionText": "160: What is true about the posters?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 59-60.png"
                ],
                "options": [
                    "They are not a standard size.",
                    "Ms. Garza still owes money for them.",
                    "Each conference participant will receive one of them.",
                    "Ms. Garza will pick them up the day before a conference."
                ],
                "correctAnswer": 3,
                "explanation": "เพราะเมื่อดูวันที่ระบุในเอกสาร จะพบว่าพนักงานจะไปรับของวันที่ 1 ตุลาคม ส่วนงานนิทรรศการหรือคอนเฟอเรนซ์จะเริ่มวันที่ 2 ตุลาคม ซึ่งก็คือไปรับล่วงหน้าหนึ่งวันพอดี"
            },
            {
                "id": 161,
                "questionText": "161: What is NOT indicated about Young Roboticists Canada?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 61-63.png"
                ],
                "options": [
                    "Its participants have received university scholarships.",
                    "It teaches children how to build robots.",
                    "It prepares children for international competitions.",
                    "It gives young students the chance to work in a laboratory."
                ],
                "correctAnswer": 2,
                "explanation": "เพราะในบทความไม่มีการพูดถึงเกณฑ์หรือการเตรียมตัวเพื่อส่งเด็กไปแข่งในระดับเวทีการแข่งขันนานาชาติเลย ส่วนข้ออื่น ๆ มีระบุไว้ในรายละเอียดของกิจกรรมค่ายหุ่นยนต์"
            },
            {
                "id": 162,
                "questionText": "162: What is mentioned about the instructors?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 61-63.png"
                ],
                "options": [
                    "They provide references for their students.",
                    "They give tours of their laboratories.",
                    "They are involved in research.",
                    "They have written many publications."
                ],
                "correctAnswer": 2,
                "explanation": "เพราะข้อความทิ้งท้ายเขียนบอกว่า ให้เข้าไปที่หน้าเว็บ Instructors เพื่อศึกษาเพิ่มเติมเกี่ยวกับงานวิจัย (research) ของอาจารย์แต่ละท่าน"
            },
            {
                "id": 163,
                "questionText": "163: What are parents asked to do?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 61-63.png"
                ],
                "options": [
                    "Complete scholarship applications",
                    "Check course requirements",
                    "Attend an information session",
                    "Purchase some equipment"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะคำแนะนำระบุเตือนผู้ปกครองให้ตรวจสอบรายละเอียดและเงื่อนไขของแต่ละวิชาให้ดี เพื่อให้แน่ใจว่าบุตรหลานมีคุณสมบัติผ่านเกณฑ์ขั้นต่ำก่อนลงเรียน"
            },
            {
                "id": 164,
                "questionText": "164: What information does Mr. Sento ask for?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 64-67.png"
                ],
                "options": [
                    "The floor plan of the office",
                    "The color selection for the walls",
                    "The quality of the blinds",
                    "The design of the flooring materials"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะเนื้อหาในอีเมลเขียนเน้นย้ำว่า ต้องการให้ช่วยเลือกรูปแบบ ลวดลาย หรือดีไซน์ของวัสดุที่จะนำมาใช้ปูพื้นห้องน้ำ (flooring materials)"
            },
            {
                "id": 165,
                "questionText": "165: At 11:17 A.M., what does Mr. Han most likely mean when he writes, \"Never mind\"?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 64-67.png"
                ],
                "options": [
                    "He is not concerned with the estimated cost.",
                    "He has changed his mind about the color choice.",
                    "Ms. Charbel is no longer talking on the phone.",
                    "Mr. Sento does not need to install the blinds."
                ],
                "correctAnswer": 2,
                "explanation": "เพราะประโยค สายนั้นใช้เวลาน้อยกว่าที่ฉันคิดไว้ซะอีก (ต่อจากคำว่า Never mind) สื่อว่าคนที่กำลังรอสายอยู่นั้น คุยโทรศัพท์เสร็จเรียบร้อยและวางสายไปแล้ว จึงไม่ต้องกังวลเรื่องการรอคอย"
            },
            {
                "id": 166,
                "questionText": "166: What is a promise Mr. Sento made to Ms. Charbel?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 64-67.png"
                ],
                "options": [
                    "He will obtain some information for her.",
                    "He will put her in touch with his flooring contractor.",
                    "He will complete the work by the end of the week.",
                    "He will take the furniture out of a delivery truck."
                ],
                "correctAnswer": 0,
                "explanation": "เพราะข้อความระบุว่า ฉันจะไปเช็กกับช่างปูพื้นก่อน และจะนำคำตอบหรือข้อมูลกลับมาแจ้งให้คุณทราบภายในสิ้นวันนี้"
            },
            {
                "id": 167,
                "questionText": "167: Why most likely is the work being done?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 64-67.png"
                ],
                "options": [
                    "A new business is opening soon.",
                    "An office space is going to be sold.",
                    "A business wanted to update its work space.",
                    "A property owner needed to remove some damaged materials."
                ],
                "correctAnswer": 2,
                "explanation": "เพราะประโยคเปิดเรื่องระบุว่า เป็นการปรับปรุง ปรับเปลี่ยนรูปแบบสถานที่ทำงาน หรือสำนักงานแบบดั้งเดิมให้มีความเป็นออฟฟิศที่ทันสมัยยิ่งขึ้น (update its work space)"
            },
            {
                "id": 168,
                "questionText": "168: What is indicated about Tim?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 68-71.png"
                ],
                "options": [
                    "He wants to work at a bicycle shop.",
                    "He is a member of a sports team.",
                    "He found something at the park.",
                    "His father works as a clerk."
                ],
                "correctAnswer": 1,
                "explanation": "เพราะเด็กชาย (Tim) บอกว่าเขาเดินขายช็อกโกแลตแท่งเพื่อหาเงินสมทบทุนไปซื้อชุดยูนิฟอร์มใหม่ให้แก่ทีมฟุตบอลของโรงเรียนมัธยมต้น ซึ่งแสดงว่าเขาเป็นหนึ่งในสมาชิกทีมกีฬา"
            },
            {
                "id": 169,
                "questionText": "169: What was NOT included in the wallet?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 68-71.png"
                ],
                "options": [
                    "Cash",
                    "Credit cards",
                    "A photograph",
                    "A driver's license"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะในเนื้อความระบุว่าในกระเป๋ามีเงินสด (ธนบัตรใบใหญ่), บัตรเครดิต และรูปถ่ายครอบครัว แต่ไม่มีส่วนใดที่เอ่ยถึงใบขับขี่รถยนต์เลย"
            },
            {
                "id": 170,
                "questionText": "170: What did Tim receive as a reward?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 68-71.png"
                ],
                "options": [
                    "A new bicycle",
                    "Clothes",
                    "A donation",
                    "Candy"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะเจ้าของกระเป๋าตังค์เหมาซื้อช็อกโกแลตที่เหลือทั้งหมด และยังมอบเงินพิเศษจำนวน $50 ให้เพื่อเข้ากองทุนซื้อชุดกีฬาของเด็ก ซึ่งก็คือเงินบริจาค/รางวัลช่วยเหลือ (donation)"
            },
            {
                "id": 171,
                "questionText": "171: The word \"deed\" in paragraph 6, line 1, is closest in meaning to",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 68-71.png"
                ],
                "options": [
                    "act",
                    "law",
                    "sale",
                    "property"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะคำว่า deed ในวลี a good deed หมายถึง พฤติกรรม หรือการกระทำความดี ซึ่งมีความหมายใกล้เคียงกับคำว่า act (การกระทำ) มากที่สุด"
            },
            {
                "id": 172,
                "questionText": "172: Who most likely is Mr. Ruzinski?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 72-75.png"
                ],
                "options": [
                    "A salesperson",
                    "An accountant",
                    "An insurance agent",
                    "A software designer"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะในอีเมลระบุว่า พวกเขาทำหน้าที่ดูแล ตรวจสอบระบบการเงิน และจัดทำเอกสารทางบัญชีสิ้นปีให้แก่บริษัทคู่ค้า จึงหมายถึงเขาทำงานในตำแหน่งนักบัญชี"
            },
            {
                "id": 173,
                "questionText": "173: What has Ms. Alves requested?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 72-75.png"
                ],
                "options": [
                    "Permission to reassign an employee",
                    "Instructions for handling new clients",
                    "An evaluation of the team's effectiveness",
                    "A record of the current inventory"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะผู้เขียนระบุว่า ได้ขออนุญาตและแจ้งหัวหน้างานของเขาแล้ว และหัวหน้ายินยอมที่จะให้ยืมตัวหรือโยกย้ายเขามาช่วยงานชั่วคราว (reassign an employee)"
            },
            {
                "id": 174,
                "questionText": "174: Why does Ms. Alves offer to meet with Mr. Ruzinski?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 72-75.png"
                ],
                "options": [
                    "To demonstrate a software program",
                    "To review his recent performance",
                    "To plan the hiring of new employees",
                    "To share tips on meeting deadlines"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะระบุข้อเสนอชัดเจนว่า ยินดีที่จะนัดพบปะกันเพื่อสอน อธิบาย หรือสาธิตวิธีการใช้งานระบบซอฟต์แวร์บัญชีตัวใหม่นี้ให้ (demonstrate a software program)"
            },
            {
                "id": 175,
                "questionText": "175: In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? \"He says your team can take over your work for the time being.\"",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 72-75.png"
                ],
                "options": [
                    "[1]",
                    "[2]",
                    "[3]",
                    "[4]"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะคำว่า he สรรพนามในประโยคอ้างถึงหัวหน้าทีม (คุณ Hyun Shik) ที่เพิ่งกล่าวชื่อไปในประโยคก่อนหน้า การนำมาวางต่อท้ายในตำแหน่งช่อง [3] จึงสอดคล้องที่สุดตามหลักโครงสร้าง"
            },
            {
                "id": 176,
                "questionText": "176: What is indicated about Give-and-Take Bookstore?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 76-80 (1).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 76-80 (2).png"
                ],
                "options": [
                    "It has two locations in Delford.",
                    "It supports community projects.",
                    "It is located next to Delford Park.",
                    "It sells both new and used books."
                ],
                "correctAnswer": 1,
                "explanation": "เพราะในกฎระบุไว้ว่า รายได้ 10% จากยอดขายทั้งหมดจะถูกจัดสรรนำไปบริจาคเพื่อช่วยเหลือโครงการพัฒนาชุมชนท้องถิ่นต่าง ๆ"
            },
            {
                "id": 177,
                "questionText": "177: According to the Web site, what do book donors receive?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 76-80 (1).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 76-80 (2).png"
                ],
                "options": [
                    "A free book",
                    "A £3 cash payment",
                    "A merchandise credit",
                    "A 10 percent discount coupon"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะระบุสิทธิประโยชน์ว่า ผู้ที่นำหนังสือมามอบให้จะได้รับผลตอบแทนกลับคืนไปในรูปแบบของ เครดิตสำหรับใช้ซื้อสินค้าภายในร้านค้า (merchandise credit) คิดเป็น 20% ของราคาประเมิน"
            },
            {
                "id": 178,
                "questionText": "178: In the e-mail, the word \"arrange\" in paragraph 1, line 2, is closest in meaning to",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 76-80 (1).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 76-80 (2).png"
                ],
                "options": [
                    "put away",
                    "place in order",
                    "do a favor for",
                    "make preparations"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะคำว่า arrange ในบริบทของการจัดหารถมารับพัสดุ แปลว่า เตรียมการ / จัดเตรียม ซึ่งมีความหมายเดียวกับคำว่า make preparations"
            },
            {
                "id": 179,
                "questionText": "179: What store policy was waived for Mr. Plum?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 76-80 (1).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 76-80 (2).png"
                ],
                "options": [
                    "The distance traveled to collect books",
                    "The genres of books that are accepted for donation",
                    "The condition of books that are given to the store",
                    "The minimum number of books that can be picked up"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะตามนโยบายปกติจะวิ่งบริการรับฟรีเฉพาะระยะไม่เกิน 10 กม. แต่เนื่องจากบริจาคเป็นจำนวนมากถึง 100 เล่ม ร้านจึงยอมละเว้นเกณฑ์และขับรถออกไปรับนอกพื้นที่ไกลเป็นพิเศษ"
            },
            {
                "id": 180,
                "questionText": "180: In the e-mail, what is Mr. Plum asked to do?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 76-80 (1).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 76-80 (2).png"
                ],
                "options": [
                    "Seal books in a box",
                    "Deliver books by 2 P.M.",
                    "Provide a list of book titles",
                    "Organize books by category"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะในเนื้อความจดหมายมีข้อร้องขอรบกวนให้ช่วยจัดกลุ่ม แยกประเภทของหนังสือ (genre/category) ไว้ให้เรียบร้อยก่อนที่เจ้าหน้าที่จะขับรถไปถึง"
            },
            {
                "id": 181,
                "questionText": "181: Who most likely is Ms. Myers?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 81-85 (1).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 81-85 (2).png"
                ],
                "options": [
                    "An exhibitor at the museum",
                    "A museum services representative",
                    "A first-time visitor to the museum",
                    "A current museum member"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะจดหมายส่งถึงสมาชิกปัจจุบันเพื่อเปิดรับฟังความเห็นและคำแนะนำติชมต่าง ๆ ไปปรับปรุงสถานที่ และในแบบฟอร์มระบุว่าเธอมาเยือนหลายรอบแล้ว"
            },
            {
                "id": 182,
                "questionText": "182: In the e-mail, the word \"meet\" in paragraph 1, line 3, is closest in meaning to",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 81-85 (1).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 81-85 (2).png"
                ],
                "options": [
                    "get together",
                    "be introduced",
                    "join",
                    "satisfy"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะวลี meet your needs หมายถึง ตอบสนองความต้องการ คืนความพึงพอใจให้แก่ผู้ใช้บริการ ซึ่งตรงกับความหมายของคำว่า satisfy"
            },
            {
                "id": 183,
                "questionText": "183: What was recently improved at the museum?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 81-85 (1).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 81-85 (2).png"
                ],
                "options": [
                    "Exhibition halls",
                    "Dining facilities",
                    "Ticketing procedures",
                    "Parking"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะในข้อความที่ตอบกลับมามีการชื่นชมและเอ่ยถึงโซนร้านกาแฟ คาเฟ่ ที่เพิ่งได้รับการปรับปรุงตกแต่งซ่อมแซมเสร็จใหม่ ๆ ซึ่งจัดอยู่ในหมวดหมู่ Dining facilities"
            },
            {
                "id": 184,
                "questionText": "184: What activity at the museum is Ms. Myers least likely to participate in?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 81-85 (1).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 81-85 (2).png"
                ],
                "options": [
                    "Eating in the cafés",
                    "Attending lectures",
                    "Shopping for gifts",
                    "Seeing the special exhibitions"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะในตารางคะแนนความถี่การร่วมกิจกรรม ตรงหัวข้อการฟังบรรยายช่วงเที่ยง (Noontime Lectures) ช่องที่เธอติ๊กเลือกคือ Never (ไม่เคยร่วมเลย)"
            },
            {
                "id": 185,
                "questionText": "185: When did Ms. Myers visit the museum?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 81-85 (1).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 81-85 (2).png"
                ],
                "options": [
                    "In April",
                    "In June",
                    "In July",
                    "In September"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะในเนื้อความอีเมลเขียนระบุว่า ดีใจและขอบคุณอย่างยิ่งที่คุณได้มาร่วมงานนิทรรศการเกี่ยวกับการเดินเรือที่จัดขึ้นเมื่อเดือนเมษายน (April)"
            },
            {
                "id": 186,
                "questionText": "186: What vehicle was Ms. Martinez unable to reserve?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 86-90 (1).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 86-90 (2).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 86-90 (3).png"
                ],
                "options": [
                    "An economy vehicle",
                    "A standard vehicle",
                    "A premium vehicle",
                    "An oversize vehicle"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะข้อมูลแจ้งเตือนระบุว่ารถยนต์ขนาดใหญ่ห้าที่นั่งเกิดหมดกะทันหัน ซึ่งเมื่อเทียบตามเกณฑ์ตารางรถยนต์แล้วคือประเภท Premium vehicle"
            },
            {
                "id": 187,
                "questionText": "187: What is the purpose of the e-mail?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 86-90 (1).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 86-90 (2).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 86-90 (3).png"
                ],
                "options": [
                    "To stop a payment",
                    "To question a charge",
                    "To cancel a reservation",
                    "To complain about a service"
                ],
                "correctAnswer": 1,
                "explanation": "เพราะจุดประสงค์หลักคือการส่งอีเมลมาโต้แย้ง ทักท้วง และสอบถามเหตุผลว่าทำไมระบบยังหักเงินค่าประกันและค่าธรรมเนียม ทั้งที่กดยกเลิกไปล่วงหน้าแล้ว"
            },
            {
                "id": 188,
                "questionText": "188: In the e-mail, the word \"Shortly\" in paragraph 1, line 2, is closest in meaning to",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 86-90 (1).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 86-90 (2).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 86-90 (3).png"
                ],
                "options": [
                    "soon",
                    "still",
                    "rudely",
                    "concisely"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะคำว่า shortly after มีความหมายว่า หลังจากนั้นไม่นาน หรือในเวลาอันรวดเร็ว ซึ่งมีความหมายเหมือนกับคำว่า soon"
            },
            {
                "id": 189,
                "questionText": "189: What is probably true about Ms. Martinez?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 86-90 (1).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 86-90 (2).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 86-90 (3).png"
                ],
                "options": [
                    "She does not have a valid driver's license.",
                    "She did not need to travel to Istanbul.",
                    "She canceled her reservation before August 27.",
                    "She wanted a colleague to drive the rental vehicle."
                ],
                "correctAnswer": 2,
                "explanation": "เพราะเนื่องจากตามกฎระบุว่าจะต้องเสียค่าปรับ $50 หากยกเลิกก่อนวันเวลานัดรับรถจริง ซึ่งกำหนดการนัดรับรถของเธอคือวันที่ 27 สิงหาคม แปลว่าเธอต้องกดยกเลิกไปก่อนหน้านั้นแน่นอน"
            },
            {
                "id": 190,
                "questionText": "190: What is indicated about Stellar Auto Rental?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 86-90 (1).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 86-90 (2).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 86-90 (3).png"
                ],
                "options": [
                    "It provides local maps at no additional cost.",
                    "It charges $100 per week for auto insurance.",
                    "It has a membership program for frequent customers.",
                    "It requires a payment upon reservation of a vehicle."
                ],
                "correctAnswer": 3,
                "explanation": "เพราะเนื่องจากในตารางนโยบายระบุเงื่อนไขการหักเงินมัดจำส่วนต่างหากลูกค้ายกเลิกดีล แสดงให้เห็นว่าระบบการจองรถของที่นี่ ต้องมีขั้นตอนหักเงินหรือจ่ายเงินล่วงหน้าบางส่วนตอนกดจอง"
            },
            {
                "id": 191,
                "questionText": "191: What information about Norview City is mentioned in the interview?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 91-95 (1).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 91-95 (2).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 91-95 (3).png"
                ],
                "options": [
                    "The size of its population",
                    "The number of its municipal employees",
                    "A list of its community services",
                    "A description of its communications network"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะบทความระบุตัวเลขชัดเจนเกี่ยวกับประชากรในท้องถิ่นที่ขยายตัวพุ่งสูงขึ้นอย่างก้าวกระโดดจากอดีต 20,000 คน มาเป็นเกือบ 50,000 คนในปัจจุบัน (The size of its population)"
            },
            {
                "id": 192,
                "questionText": "192: In the letter to the editor, the word \"conducted\" in paragraph 1, line 1, is closest in meaning to",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 91-95 (1).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 91-95 (2).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 91-95 (3).png"
                ],
                "options": [
                    "determined",
                    "behaved",
                    "administered",
                    "designated"
                ],
                "correctAnswer": 2,
                "explanation": "เพราะคำว่า conducted ในบริบทของการจัดทำแบบสำรวจความเห็นประชาชน มีความหมายว่า ดำเนินงาน / จัดการทำ ซึ่งตรงกับความหมายของคำว่า administered"
            },
            {
                "id": 193,
                "questionText": "193: What most likely is true about the letter to the editor?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 91-95 (1).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 91-95 (2).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 91-95 (3).png"
                ],
                "options": [
                    "It was written by a business owner.",
                    "It was discussed at July's public hearing.",
                    "It was read aloud on a radio program.",
                    "It was published in April."
                ],
                "correctAnswer": 3,
                "explanation": "เพราะเนื่องจากจดหมายฉบับนี้มีการระบุเขียนพาดพิง อ้างอิงถึงตัวเลขผลโพลความเห็นของประชาชนที่พึ่งประกาศเปิดเผยออกมาเมื่อวันที่ 14 เมษายน จึงสรุปได้ว่าจัดพิมพ์ในช่วงเดือนเมษายน"
            },
            {
                "id": 194,
                "questionText": "194: What is the purpose of the article?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 91-95 (1).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 91-95 (2).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 91-95 (3).png"
                ],
                "options": [
                    "To describe a change in public opinion",
                    "To release information about a new community center",
                    "To predict the outcome of a public hearing",
                    "To explain the reason for a survey"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะภาพรวมโครงเรื่องเป็นการอธิบายให้เห็นว่า ความคิดเห็นของคนในชุมชนมีทิศทางปรับเปลี่ยนไปอย่างไร จากช่วงแรกที่ต่อต้านจนเริ่มเปิดใจและกลับมาให้การยอมรับโครงการมากขึ้น"
            },
            {
                "id": 195,
                "questionText": "195: What most likely did the city council do to get more support for the IRI?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 91-95 (1).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 91-95 (2).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 91-95 (3).png"
                ],
                "options": [
                    "It improved the quality of government-sponsored programs.",
                    "It used the media to provide more information to the public.",
                    "It reduced the tax rate it had initially proposed.",
                    "It contacted more than half of Norview City's residents."
                ],
                "correctAnswer": 2,
                "explanation": "เพราะในเนื้อหาระบุว่า แผนในคราวแรกทางสภาเมืองตั้งใจจะเพิ่มอัตราภาษีท้องถิ่นขึ้น 1.5% แต่เมื่อโดนคัดค้าน จึงยอมถอยและปรับลดระดับตัวเลขลงมาเหลือเก็บเพิ่มแค่ 0.5% เพื่อลดแรงกดดันของชาวเมือง"
            },
            {
                "id": 196,
                "questionText": "196: What is suggested about Ms. Singh?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 96-100 (1).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 96-100 (2).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 96-100 (3).png"
                ],
                "options": [
                    "She is a financial consultant for Comet Investing Group.",
                    "She is an experienced financial professional.",
                    "She gave a speech at City Business Expo last year.",
                    "She provides one-on-one training for managers."
                ],
                "correctAnswer": 1,
                "explanation": "เพราะรายละเอียดในประวัติการทำงานระบุชัดเจนว่าเธอควบตำแหน่งผู้บริหารระดับสูง (President/CEO) ของกลุ่มสถาบันทางการเงินหลายแห่งพร้อมกัน แสดงว่าเป็นผู้เชี่ยวชาญที่มีประสบการณ์สูง"
            },
            {
                "id": 197,
                "questionText": "197: In the online profile, the phrase \"Drawing on\" in paragraph 1, line 3, is closest in meaning to",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 96-100 (1).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 96-100 (2).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 96-100 (3).png"
                ],
                "options": [
                    "making use of",
                    "removing from",
                    "attract to",
                    "marking up"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะวลี Drawing on her extensive experience แปลว่า การดึงเอาหรือหยิบยกประสบการณ์ที่มีมาอย่างยาวนานออกมาใช้ประโยชน์ ซึ่งมีความหมายเดียวกับวลี making use of (การนำมาใช้)"
            },
            {
                "id": 198,
                "questionText": "198: What presentation by Ms. Singh did Mr. Beaumont attend?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 96-100 (1).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 96-100 (2).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 96-100 (3).png"
                ],
                "options": [
                    "Sustaining Imagination",
                    "Overcoming Financial Obstacles",
                    "The Future of Finance",
                    "How to Be a Dynamic Leader"
                ],
                "correctAnswer": 0,
                "explanation": "เพราะในจดหมายระบุว่าเขาเดินทางไปฟังงานบรรยายวิชาการ ซึ่งหัวข้อการพูดเรื่องนี้ถูกจัดขึ้นที่ตึกอาคารของสถาบัน Makey School of Business ซึ่งเมื่อสอบถามตารางเวลาแล้วคือหัวข้อ Sustaining Imagination"
            },
            {
                "id": 199,
                "questionText": "199: When did Ms. Singh most likely present at City Business Expo?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 96-100 (1).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 96-100 (2).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 96-100 (3).png"
                ],
                "options": [
                    "On March 7",
                    "On March 8",
                    "On March 9",
                    "On March 10"
                ],
                "correctAnswer": 3,
                "explanation": "เพราะเมื่อตรวจสอบกำหนดการจัดงานนิทรรศการ (7-10 มีนาคม) และระบุข้อมูลในแชตว่าเขาเลือกที่จะเข้าไปรับฟังใน วันสุดท้ายของการจัดงานพอดี ซึ่งก็คือวันที่ 10 มีนาคม"
            },
            {
                "id": 200,
                "questionText": "200: What critique did Mr. Katoa provide?",
                "audioUrl": "",
                "images": [
                    "./assets/images/ฟ้าม่วง RC2/BP 96-100 (1).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 96-100 (2).png",
                    "./assets/images/ฟ้าม่วง RC2/BP 96-100 (3).png"
                ],
                "options": [
                    "The registration process took longer than expected.",
                    "The opportunities for networking were limited.",
                    "The venue for the expo was not ideal.",
                    "The tips from the speakers were not practical."
                ],
                "correctAnswer": 2,
                "explanation": "เพราะเขาระบุข้อติชมบ่นไว้ว่า ห้องโถงจัดนิทรรศการหลักไม่ค่อยเหมาะสมเท่าไหร่ ห้องเวิร์กช็อปสัมมนาก็ค่อนข้างเล็กเกินไป และร้านขายอาหารมีไม่เพียงพอ ซึ่งทั้งหมดเกี่ยวกับเรื่องสถานที่จัดงาน (venue)"
            }
        ]   
    }
];

window.addEventListener('DOMContentLoaded', () => {
    console.log('examPackages:', typeof examPackages);
    console.log('examData:', typeof examData);
});
