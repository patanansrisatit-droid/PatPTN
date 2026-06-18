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
    { // ฟ้าม่วง LC Checked!
        "setId": "ฟ้าม่วง LC",
        "setTitle": "ฟ้าม่วง LC2",
        "setCover": "./assets/cover/LC-Test-cover-ฟ้าม่วง-2-update.webp",
        "questions": [
  {
    "id": 1,
    "groupId": "group-1",
    "questionText": "1: ",
    "images": ["./assets/images/ฟ้าม่วง LC2/BP 1.png"],
    "options": [
      "She's folding a piece of paper.",
      "She's smelling flowers in a garden.",
      "She's holding a book in her hands.",
      "She's closing up a box."
    ],
    "correctAnswer": 2,
    "explanation": "เฉลยข้อ C: เพราะภาพเป็นผู้หญิงกำลังถือหนังสืออยู่ในมือ ส่วนข้อ (A) folding แปลว่ากำลังพับ ซึ่งเธอไม่ได้พับกระดาษ (B) smelling แปลว่ากำลังดม ซึ่งเธอไม่ได้ดมดอกไม้ และ (D) closing up แปลว่ากำลังปิด แต่กล่องยังเปิดอยู่",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/1.mp3",
    "hideOptions": true
  },
  {
    "id": 2,
    "groupId": "group-2",
    "questionText": "2: ",
    "images": ["./assets/images/ฟ้าม่วง LC2/BP 2.png"],
    "options": [
      "He's looking at a picture.",
      "She's opening her handbag.",
      "They're fixing a railing.",
      "They're walking down some steps."
    ],
    "correctAnswer": 3,
    "explanation": "เฉลยข้อ D: เพราะภาพเป็นชายหญิงกำลังเดินลงบันได ส่วนข้อ (A) looking at แปลว่ากำลังมอง แต่ผู้ชายกำลังเดินลงบันได (B) opening แปลว่ากำลังเปิด แต่ผู้หญิงไม่ได้เปิดกระเป๋า และ (C) fixing แปลว่ากำลังซ่อม แต่ไม่มีใครซ่อมราวบันได",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/2.mp3",
    "hideOptions": true
  },
  {
    "id": 3,
    "groupId": "group-3",
    "questionText": "3: ",
    "images": ["./assets/images/ฟ้าม่วง LC2/BP 3.png"],
    "options": [
      "One of the men is taking off his backpack.",
      "One of the men is reading a brochure.",
      "Some people are assembling a table.",
      "Some people are rearranging chairs."
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะภาพมีผู้ชายกำลังอ่านโบรชัวร์ ส่วนข้อ (A) taking off แปลว่ากำลังถอด แต่ไม่ได้ถอดกระเป๋า (C) assembling แปลว่ากำลังประกอบ แต่โต๊ะตั้งเรียบร้อยแล้ว และ (D) rearranging แปลว่ากำลังจัดเก้าอี้ใหม่ แต่ไม่มีใครจัดเก้าอี้",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/3.mp3",
    "hideOptions": true
  },
  {
    "id": 4,
    "groupId": "group-4",
    "questionText": "4: ",
    "images": ["./assets/images/ฟ้าม่วง LC2/BP 4.png"],
    "options": [
      "A server is setting up an umbrella.",
      "A sign is being carried across a walkway.",
      "Cars have been parked in the shade.",
      "Customers are seated at a cafe."
    ],
    "correctAnswer": 2,
    "explanation": "เฉลยข้อ C: เพราะภาพมีรถจอดใต้ร่มเงาต้นไม้ ส่วนข้อ (A) setting up แปลว่ากำลังติดตั้ง แต่ไม่มีพนักงานกางร่ม (B) being carried แปลว่ากำลังถูกถือ แต่ป้ายตั้งอยู่กับที่ และ (D) seated แปลว่ากำลังนั่ง แต่เก้าอี้ว่างไม่มีลูกค้า",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/4.mp3",
    "hideOptions": true
  },
  {
    "id": 5,
    "groupId": "group-5",
    "questionText": "5: ",
    "images": ["./assets/images/ฟ้าม่วง LC2/BP 5.png"],
    "options": [
      "A drawer has been pulled open.",
      "Files are being stored on shelves.",
      "A monitor is being mounted on a wall.",
      "A light has been hung from the ceiling."
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะภาพมีแฟ้มเอกสารถูกเก็บบนชั้นวาง ส่วนข้อ (A) drawer แปลว่าลิ้นชัก แต่ลิ้นชักปิดอยู่ (C) mounted แปลว่ากำลังติดตั้ง แต่จอวางบนโต๊ะ และ (D) hung แปลว่าถูกแขวน แต่โคมไฟตั้งบนโต๊ะ",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/5.mp3",
    "hideOptions": true
  },
  {
    "id": 6,
    "groupId": "group-6",
    "questionText": "6: ",
    "images": ["./assets/images/ฟ้าม่วง LC2/BP 6.png"],
    "options": [
      "A man is standing near a construction site.",
      "A worker is climbing a ladder.",
      "A row of trees has been planted alongside a fence.",
      "Vehicles are transporting materials to a building."
    ],
    "correctAnswer": 0,
    "explanation": "เฉลยข้อ A: เพราะภาพมีชายยืนใกล้พื้นที่ก่อสร้าง ส่วนข้อ (B) climbing แปลว่ากำลังปีน แต่ไม่มีใครปีนบันได (C) planted แปลว่าถูกปลูก แต่ไม่เห็นการปลูกต้นไม้ใหม่ และ (D) transporting แปลว่ากำลังขนส่ง แต่ไม่มีรถกำลังขนวัสดุ",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/6.mp3",
    "hideOptions": true
  },
  {
    "id": 7,
    "groupId": "group-7",
    "questionText": "7: Mark your answer on your answer sheet.",
    "options": [
      "The store's having a sale.",
      "It's on my computer.",
      "No, not recently."
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะคำถามถามว่า จะหาข้อมูลการขายล่าสุดได้จากที่ไหน ซึ่งข้อนี้ตอบตรงประเด็นว่าข้อมูลอยู่ในคอมพิวเตอร์ ส่วนข้อ (A) เป็นกับดักเปลี่ยนหัวข้อเรื่องการลดราคา และข้อ (C) ปฏิเสธแต่ไม่บอกตำแหน่ง",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/7.mp3",
    "transcript": "Where can I find the most recent sales data?",
    "hideOptions": true
  },
  {
    "id": 8,
    "groupId": "group-8",
    "questionText": "8: Mark your answer on your answer sheet.",
    "options": [
      "This Saturday at eight P.M.",
      "It was better than the last one.",
      "It hasn't yet."
    ],
    "correctAnswer": 0,
    "explanation": "เฉลยข้อ A: เพราะคำถามถามว่า การแสดงครั้งต่อไปของกลุ่มแดนซ์จะมีเมื่อไหร่ ซึ่งข้อนี้บอกเวลาชัดเจนว่าเป็นวันเสาร์นี้ตอนสองทุ่ม ส่วนข้อ (B) เป็นการแสดงความเห็น และข้อ (C) บอกว่ายังไม่มีแต่ไม่ได้ระบุเวลา",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/8.mp3",
    "transcript": "When is the next performance of the City Dance Troupe?",
    "hideOptions": true
  },
  {
    "id": 9,
    "groupId": "group-9",
    "questionText": "9: Mark your answer on your answer sheet.",
    "options": [
      "I had a relaxing vacation.",
      "OK, I'm free after six.",
      "A tent and a sleeping bag."
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะเป็นการตอบรับคำชวนวางแผนไปตั้งแคมป์คืนนี้ โดยบอกว่าตัวเองว่างหลังหกโมงเย็น ส่วนข้อ (A) พูดถึงวันหยุดที่ผ่านมา และข้อ (C) พูดถึงสิ่งของซึ่งไม่ตรงคำถาม",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/9.mp3",
    "transcript": "Let's plan our camping trip tonight.",
    "hideOptions": true
  },
  {
    "id": 10,
    "groupId": "group-10",
    "questionText": "10: Mark your answer on your answer sheet.",
    "options": [
      "It's in the supply cabinet.",
      "A newer version.",
      "Pablo's in charge of that."
    ],
    "correctAnswer": 2,
    "explanation": "เฉลยข้อ C: เพราะตอบคำถามที่ถามว่า ลูกค้าจะมาเยือนในเดือนนี้ใช่ไหม โดยบอกว่าปาโบลเป็นคนดูแลรับผิดชอบเรื่องนั้น ส่วนข้อ (A) เกี่ยวกับตู้เก็บของ และข้อ (B) เกี่ยวกับเวอร์ชันใหม่ซึ่งไม่เกี่ยวข้อง",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/10.mp3",
    "transcript": "Isn't the client visit this month?",
    "hideOptions": true
  },
  {
    "id": 11,
    "groupId": "group-11",
    "questionText": "11: Mark your answer on your answer sheet.",
    "options": [
      "To be closer to my family.",
      "Probably in February.",
      "Yes, it's been open for a while."
    ],
    "correctAnswer": 0,
    "explanation": "เฉลยข้อ A: เพราะตอบเหตุผลของคำถามที่ว่า ทำไมถึงย้ายไปสาขาซานฟรานซิสโก โดยบอกว่าต้องการไปอยู่ใกล้ชิดกับครอบครัว ส่วนข้อ (B) บอกเวลา และข้อ (C) ตอบรับแต่ไม่บอกเหตุผล",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/11.mp3",
    "transcript": "Why are you transferring to the San Francisco branch?",
    "hideOptions": true
  },
  {
    "id": 12,
    "groupId": "group-12",
    "questionText": "12: Mark your answer on your answer sheet.",
    "options": [
      "They're due soon.",
      "Almost every room has one.",
      "We've just had a cancellation!"
    ],
    "correctAnswer": 2,
    "explanation": "เฉลยข้อ C: เพราะตอบคำถามที่ถามว่า มีห้องพักว่างสำหรับคืนนี้ไหม โดยแจ้งว่าเพิ่งมีการยกเลิกห้องพักทำให้มีห้องว่าง ส่วนข้อ (A) พูดถึงกำหนดส่ง และข้อ (B) พูดถึงสิ่งของในห้อง",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/12.mp3",
    "transcript": "Do you have any hotel rooms available for tonight?",
    "hideOptions": true
  },
  {
    "id": 13,
    "groupId": "group-13",
    "questionText": "13: Mark your answer on your answer sheet.",
    "options": [
      "That flower arrangement is lovely.",
      "Thanks, but I'll drive myself there.",
      "A glass of water would be great."
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะเป็นการปฏิเสธข้อเสนอที่จะจัดรถรับส่งไปสนามบินอย่างมีมารยาท โดยบอกว่าจะขับรถไปเอง ส่วนข้อ (A) และ (C) เป็นกับดักคำพ้องเสียงหรือคำที่เกี่ยวข้องแต่ไม่ตรงประเด็น",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/13.mp3",
    "transcript": "Would you like me to arrange a shuttle to the airport?",
    "hideOptions": true
  },
  {
    "id": 14,
    "groupId": "group-14",
    "questionText": "14: Mark your answer on your answer sheet.",
    "options": [
      "Yes, I sent her an e-mail about it.",
      "The Town Plaza Cafe.",
      "It's served with a side salad."
    ],
    "correctAnswer": 0,
    "explanation": "เฉลยข้อ A: เพราะตอบคำถามที่ถามว่า มาร์ต้ารู้เรื่องที่จองมื้อเที่ยงไว้ตอนบ่ายโมงหรือยัง โดยยืนยันว่ารู้แล้วเพราะส่งอีเมลแจ้งไปแล้ว ส่วนข้อ (B) บอกชื่อคาเฟ่ และข้อ (C) พูดถึงสลัดเคียง",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/14.mp3",
    "transcript": "Does Marta know that we've made a lunch reservation for one o'clock?",
    "hideOptions": true
  },
  {
    "id": 15,
    "groupId": "group-15",
    "questionText": "15: Mark your answer on your answer sheet.",
    "options": [
      "Yes, I'll update my contact list.",
      "You can call Mr. Yamamoto.",
      "The one in the financial center."
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะตอบคำถามที่ถามว่า ควรติดต่อใครเพื่อเช่าสำนักงานในตึกนี้ โดยระบุชื่อบุคคลว่าให้โทรหาคุณยามาโมโตะ ส่วนข้อ (A) และ (C) เป็นกับดักคำศัพท์และไม่ระบุตัวบุคคล",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/15.mp3",
    "transcript": "Who should I contact to rent an office in this building?",
    "hideOptions": true
  },
  {
    "id": 16,
    "groupId": "group-16",
    "questionText": "16: Mark your answer on your answer sheet.",
    "options": [
      "No, not this time.",
      "I was at another meeting.",
      "Twenty pages long."
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะให้เหตุผลว่าทำไมถึงไม่ได้ดูหรือให้ความเห็นต่อการนำเสนอได้ โดยบอกว่าติดประชุมอื่นอยู่ ส่วนข้อ (A) เป็นการปฏิเสธไม่ชัดเจน และข้อ (C) บอกความยาวหน้ากระดาษ",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/16.mp3",
    "transcript": "What did you think of my presentation?",
    "hideOptions": true
  },
  {
    "id": 17,
    "groupId": "group-17",
    "questionText": "17: Mark your answer on your answer sheet.",
    "options": [
      "No, I don't use it often.",
      "It should be fixed by noon.",
      "Over by the copier."
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะตอบคำถามที่ถามว่า อินเทอร์เน็ตจะกลับมาใช้งานได้อีกเมื่อไหร่ โดยระบุกรอบเวลาชัดเจนว่าควรจะซ่อมเสร็จตอนเที่ยง ส่วนข้อ (A) บอกว่าไม่ค่อยได้ใช้ และข้อ (C) บอกตำแหน่งตู้สำเนา",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/17.mp3",
    "transcript": "When will our Internet service be working again?",
    "hideOptions": true
  },
  {
    "id": 18,
    "groupId": "group-18",
    "questionText": "18: Mark your answer on your answer sheet.",
    "options": [
      "I had a conference call all morning.",
      "Ms. Yang is a reporter.",
      "Thanks, I can wait."
    ],
    "correctAnswer": 0,
    "explanation": "เฉลยข้อ A: เพราะให้เหตุผลว่าทำไมยังทำร่างรายงานไม่เสร็จ โดยบอกว่าติดประชุมโทรศัพท์ตลอดทั้งเช้า ส่วนข้อ (B) พูดถึงผู้สื่อข่าว และข้อ (C) บอกว่ารอได้",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/18.mp3",
    "transcript": "Have you finished the draft of the report yet?",
    "hideOptions": true
  },
  {
    "id": 19,
    "groupId": "group-19",
    "questionText": "19: Mark your answer on your answer sheet.",
    "options": [
      "It's 555-0126.",
      "A ticket to Amsterdam.",
      "No, I have it right here."
    ],
    "correctAnswer": 2,
    "explanation": "เฉลยข้อ C: เพราะตอบคำถามที่ถามว่า ไม่ได้ลืมโทรศัพท์มือถือไว้บนรถไฟใช่ไหม โดยปฏิเสธว่าไม่ได้ลืมและบอกว่าโทรศัพท์อยู่ตรงนี้เลย ส่วนข้อ (A) บอกเบอร์โทร และข้อ (B) พูดถึงตั๋วไปอัมสเตอร์ดัม",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/19.mp3",
    "transcript": "You didn't leave your mobile phone on the train, did you?",
    "hideOptions": true
  },
  {
    "id": 20,
    "groupId": "group-20",
    "questionText": "20: Mark your answer on your answer sheet.",
    "options": [
      "He's retiring in May.",
      "That's a very nice place.",
      "Yes, we could do it this afternoon."
    ],
    "correctAnswer": 2,
    "explanation": "เฉลยข้อ C: เพราะตอบรับคำขอให้เปลี่ยนยางรถยนต์ โดยแจ้งว่าสามารถจัดการให้ได้ในช่วงบ่ายวันนี้ ส่วนข้อ (A) เป็นกับดักคำพ้องเสียงเรื่องการเกษียณ และข้อ (B) พูดถึงสถานที่ที่สวยงาม",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/20.mp3",
    "transcript": "Could you please replace the tires on my car?",
    "hideOptions": true
  },
  {
    "id": 21,
    "groupId": "group-21",
    "questionText": "21: Mark your answer on your answer sheet.",
    "options": [
      "She'll be here by nine.",
      "Yes, I was invited.",
      "In the lobby."
    ],
    "correctAnswer": 0,
    "explanation": "เฉลยข้อ A: เพราะตอบคำถามที่ถามว่า วิทยากรหลักจะมาถึงตอนกี่โมง โดยให้กรอบเวลาชัดเจนว่าจะมาถึงก่อนเก้าโมง ส่วนข้อ (B) บอกว่าได้รับเชิญ และข้อ (C) บอกสถานที่ในล็อบบี้",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/21.mp3",
    "transcript": "What time should we expect the keynote speaker to arrive?",
    "hideOptions": true
  },
  {
    "id": 22,
    "groupId": "group-22",
    "questionText": "22: Mark your answer on your answer sheet.",
    "options": [
      "A small construction firm.",
      "No, was it announced?",
      "He's a department head."
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะตอบคำถามที่ถามว่า ได้ยินข่าวเรื่องการควบรวมกิจการหรือยัง โดยบอกว่าไม่เคยได้ยินและถามกลับว่ามีประกาศแล้วหรือ ส่วนข้อ (A) และ (C) พูดถึงบริษัทและตำแหน่งงานที่ไม่ตรงประเด็น",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/22.mp3",
    "transcript": "Did you hear the news about the merger?",
    "hideOptions": true
  },
  {
    "id": 23,
    "groupId": "group-23",
    "questionText": "23: Mark your answer on your answer sheet.",
    "options": [
      "I didn't know we were hiring anyone.",
      "At the reception desk.",
      "It was paid for in cash."
    ],
    "correctAnswer": 0,
    "explanation": "เฉลยข้อ A: เพราะแสดงความประหลาดใจและไม่รู้เรื่องการจ้างงานเมื่อถูกถามว่า งบประมาณรวมการจ้างผู้ช่วยหนึ่งหรือสองคน ส่วนข้อ (B) บอกสถานที่ และข้อ (C) บอกวิธีชำระเงินด้วยเงินสด",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/23.mp3",
    "transcript": "Does our budget include funding for one assistant or two?",
    "hideOptions": true
  },
  {
    "id": 24,
    "groupId": "group-24",
    "questionText": "24: Mark your answer on your answer sheet.",
    "options": [
      "They don't have a private dining room.",
      "A direct flight to India.",
      "Can I get you some more rice?"
    ],
    "correctAnswer": 0,
    "explanation": "เฉลยข้อ A: เพราะชี้ข้อจำกัดของร้านอาหารอินเดียเมื่อมีคนบอกว่าร้านใหญ่พอสำหรับจัดงานปาร์ตี้ประจำปี โดยบอกว่าร้านนั้นไม่มีห้องทานอาหารส่วนตัว ส่วนข้อ (B) พูดถึงเที่ยวบิน และข้อ (C) ถามเรื่องข้าว",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/24.mp3",
    "transcript": "That Indian restaurant is big enough for our annual party.",
    "hideOptions": true
  },
  {
    "id": 25,
    "groupId": "group-25",
    "questionText": "25: Mark your answer on your answer sheet.",
    "options": [
      "Isn't it in two hours?",
      "Michael's not using his today.",
      "Some updated software."
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะตอบคำถามที่ถามว่า มีคอมพิวเตอร์ให้ใช้ระหว่างรอซ่อมเครื่องเก่าไหม โดยแนะนำให้ใช้ของไมเคิลได้เพราะวันนี้เขาไม่ได้ใช้ ส่วนข้อ (A) ถามเวลา และข้อ (C) พูดถึงซอฟต์แวร์",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/25.mp3",
    "transcript": "Is there a computer available to use while mine is being repaired?",
    "hideOptions": true
  },
  {
    "id": 26,
    "groupId": "group-26",
    "questionText": "26: Mark your answer on your answer sheet.",
    "options": [
      "Just the new sales director.",
      "I plan to do both.",
      "It starts at three o'clock."
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะตอบคำถามที่ให้เลือกระหว่างเตรียมเอกสารแจกหรือสไลด์โชว์สำหรับเวิร์กชอป โดยบอกว่าวางแผนจะทำทั้งสองอย่าง ส่วนข้อ (A) พูดถึงผู้อำนวยการ และข้อ (C) บอกเวลาเริ่มงาน",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/26.mp3",
    "transcript": "Will you prepare handouts or a slide show for your workshop?",
    "hideOptions": true
  },
  {
    "id": 27,
    "groupId": "group-27",
    "questionText": "27: Mark your answer on your answer sheet.",
    "options": [
      "It isn't a company I've heard of.",
      "Yes—I hope we can participate by phone.",
      "The attendance sheet."
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะยืนยันตามคำถามที่ว่า การประชุมจัดที่ปูซานใช่ไหม โดยตอบรับและบอกว่าหวังว่าจะได้เข้าร่วมผ่านทางโทรศัพท์ ส่วนข้อ (A) พูดถึงบริษัท และข้อ (C) พูดถึงใบลงชื่อเข้าร่วม",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/27.mp3",
    "transcript": "The meeting's in Busan, isn't it?",
    "hideOptions": true
  },
  {
    "id": 28,
    "groupId": "group-28",
    "questionText": "28: Mark your answer on your answer sheet.",
    "options": [
      "An empty corner lot.",
      "Leave the door open.",
      "Let me check my calendar."
    ],
    "correctAnswer": 2,
    "explanation": "เฉลยข้อ C: เพราะตอบคำถามขอให้พาชมอสังหาริมทรัพย์ในวันพฤหัสบดี โดยบอกว่าขอเช็คปฏิทินงานก่อนว่าว่างไหม ส่วนข้อ (A) พูดถึงที่ดินว่าง และข้อ (B) บอกให้เปิดประตูทิ้งไว้",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/28.mp3",
    "transcript": "Can you give me a tour of the property on Thursday?",
    "hideOptions": true
  },
  {
    "id": 29,
    "groupId": "group-29",
    "questionText": "29: Mark your answer on your answer sheet.",
    "options": [
      "There are three hundred brochures.",
      "Don't worry, it's later than last year.",
      "We'll choose the cheapest one."
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะตอบคำถามที่ถามว่า มีเวลากี่วันในการจัดงานประชุม โดยบอกว่าไม่ต้องกังวลเพราะปีนี้จัดช้ากว่าปีที่แล้วทำให้มีเวลามากกว่า ส่วนข้อ (A) บอกจำนวนโบรชัวร์ และข้อ (C) บอกว่าจะเลือกอันที่ถูกที่สุด",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/29.mp3",
    "transcript": "How many days do we have to organize the convention?",
    "hideOptions": true
  },
  {
    "id": 30,
    "groupId": "group-30",
    "questionText": "30: Mark your answer on your answer sheet.",
    "options": [
      "That's not what Susan said.",
      "Yes, it's attracting more customers.",
      "The product display areas."
    ],
    "correctAnswer": 0,
    "explanation": "เฉลยข้อ A: เพราะแสดงความเห็นแย้งกับผู้พูดที่บอกว่า ยังไม่พร้อมจ่ายค่าปรับปรุงร้าน โดยอ้างว่าซูซานไม่ได้พูดแบบนั้น ส่วนข้อ (B) พูดถึงการดึงดูดลูกค้า และข้อ (C) พูดถึงพื้นที่แสดงสินค้า",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/30.mp3",
    "transcript": "I don't think we can afford to start the store renovations yet.",
    "hideOptions": true
  },
  {
    "id": 31,
    "groupId": "group-31",
    "questionText": "31: Mark your answer on your answer sheet.",
    "options": [
      "Sure, I'd be happy to.",
      "Actually, we shipped them already.",
      "The manager is new, though."
    ],
    "correctAnswer": 2,
    "explanation": "เฉลยข้อ C: เพราะตอบคำถามที่ถามว่า เคยเจอเซตลูกค้าพวกนี้มาก่อนใช่ไหม โดยบอกว่าผู้จัดการเป็นคนใหม่แต่ลูกค้าคนอื่นเคยพบมาก่อน ส่วนข้อ (A) บอกว่ายินดีทำ และข้อ (B) พูดถึงการจัดส่งสินค้า",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/31.mp3",
    "transcript": "We've met these clients before, haven't we?",
    "hideOptions": true
  },
  {
    "id": 32,
    "groupId": "group-32-34",
    "transcript": "W: Hi Kenji, you weren't at the restaurant staff meeting today so I wanted to let you know that all the servers will be getting new uniforms next month.\nM: OK, should I go to a specific store to buy one or will the restaurant supply them?\nW: I'm going to order black T-shirts with our restaurant logo from a supplier here in town, and I'll take care of the cost. I just need to know your size so I can complete the order.\nM: I usually wear a medium. Thanks!",
    "questionText": "32: Where do the speakers work?",
    "options": [
      "At a department store",
      "At a pharmacy",
      "At a restaurant",
      "At a dry cleaner"
    ],
    "correctAnswer": 2,
    "explanation": "เฉลยข้อ C: เพราะในบทสนทนาผู้หญิงกล่าวถึงการประชุมพนักงานร้านอาหาร และพูดว่าพนักงานเสิร์ฟทุกคนจะได้รับชุดยูนิฟอร์มใหม่ในเดือนหน้า ร้านอาหารจึงเป็นสถานที่ทำงานของพวกเขา",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/32-34.mp3"
  },
  {
    "id": 33,
    "groupId": "group-32-34",
    "transcript": "W: Hi Kenji, you weren't at the restaurant staff meeting today so I wanted to let you know that all the servers will be getting new uniforms next month.\nM: OK, should I go to a specific store to buy one or will the restaurant supply them?\nW: I'm going to order black T-shirts with our restaurant logo from a supplier here in town, and I'll take care of the cost. I just need to know your size so I can complete the order.\nM: I usually wear a medium. Thanks!",
    "questionText": "33: What change does the woman mention?",
    "options": [
      "Employees will have to wear ID badges.",
      "Credit cards will now be accepted.",
      "Work shifts will be more flexible.",
      "Staff will receive different uniforms."
    ],
    "correctAnswer": 3,
    "explanation": "เฉลยข้อ D: เพราะผู้หญิงแจ้งข้อมูลให้ทราบว่า พนักงานเสิร์ฟทุกคนจะได้รับชุดยูนิฟอร์มใหม่ในเดือนหน้า ซึ่งเป็นการเปลี่ยนแปลงเรื่องเครื่องแต่งกายของพนักงาน",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/32-34.mp3"
  },
  {
    "id": 34,
    "groupId": "group-32-34",
    "transcript": "W: Hi Kenji, you weren't at the restaurant staff meeting today so I wanted to let you know that all the servers will be getting new uniforms next month.\nM: OK, should I go to a specific store to buy one or will the restaurant supply them?\nW: I'm going to order black T-shirts with our restaurant logo from a supplier here in town, and I'll take care of the cost. I just need to know your size so I can complete the order.\nM: I usually wear a medium. Thanks!",
    "questionText": "34: What does the woman need to know?",
    "options": [
      "The name of a bank",
      "The size of some clothing",
      "The day of a delivery",
      "The color of an item"
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะผู้หญิงบอกว่าเธอต้องการทราบขนาดไซส์เสื้อผ้าของเคนจิ เพื่อที่จะสั่งซื้อเสื้อยืดสีดำที่มีโลโก้ร้านให้ได้ถูกต้องและดำเนินการสั่งซื้อให้เสร็จสิ้น",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/32-34.mp3"
  },
  {
    "id": 35,
    "groupId": "group-35-37",
    "transcript": "W: Thanks, Frank and Ming, for coming by on such short notice. I just met with our chief financial officer and we need to reduce our company's costs. Our home appliances are selling well, but production costs are still too high.\nM1: Hmm... What about outsourcing some operations? If we hire someone else to do things like warehousing and delivery, it could cut down on our expenses. What do you think, Ming?\nM2: I agree, Frank. It sounds like something we should consider. Tell you what ... I can research some companies and put together a list of names for Thursday. Then we can start compiling some numbers.",
    "questionText": "35: What does the woman want to do?",
    "options": [
      "Reduce the cost of operations",
      "Organize a team-building event",
      "Open a second warehouse",
      "Try an advertising strategy"
    ],
    "correctAnswer": 0,
    "explanation": "เฉลยข้อ A: เพราะผู้หญิงเปิดเผยว่าเธอเพิ่งประชุมกับประธานเจ้าหน้าที่บริหารฝ่ายการเงิน และบริษัทจำเป็นต้องลดค่าใช้จ่ายในการดำเนินงานลง เนื่องจากต้นทุนการผลิตเครื่องใช้ในบ้านยังสูงเกินไป",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/35-37.mp3"
  },
  {
    "id": 36,
    "groupId": "group-35-37",
    "transcript": "W: Thanks, Frank and Ming, for coming by on such short notice. I just met with our chief financial officer and we need to reduce our company's costs. Our home appliances are selling well, but production costs are still too high.\nM1: Hmm... What about outsourcing some operations? If we hire someone else to do things like warehousing and delivery, it could cut down on our expenses. What do you think, Ming?\nM2: I agree, Frank. It sounds like something we should consider. Tell you what ... I can research some companies and put together a list of names for Thursday. Then we can start compiling some numbers.",
    "questionText": "36: What solution does Frank propose?",
    "options": [
      "Hosting a business seminar",
      "Reducing overtime hours",
      "Hiring an outside company",
      "Promoting a product on television"
    ],
    "correctAnswer": 2,
    "explanation": "เฉลยข้อ C: เพราะแฟรงก์เสนอแนะทางแก้ไขปัญหาต้นทุนสูงด้วยการจ้างบริษัทภายนอก หรือการทำเอาต์ซอร์ซิงในการดูแลเรื่องคลังสินค้าและการจัดส่งเพื่อช่วยลดค่าใช้จ่าย",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/35-37.mp3"
  },
  {
    "id": 37,
    "groupId": "group-35-37",
    "transcript": "W: Thanks, Frank and Ming, for coming by on such short notice. I just met with our chief financial officer and we need to reduce our company's costs. Our home appliances are selling well, but production costs are still too high.\nM1: Hmm... What about outsourcing some operations? If we hire someone else to do things like warehousing and delivery, it could cut down on our expenses. What do you think, Ming?\nM2: I agree, Frank. It sounds like something we should consider. Tell you what ... I can research some companies and put together a list of names for Thursday. Then we can start compiling some numbers.",
    "questionText": "37: What will Ming prepare for Thursday?",
    "options": [
      "Some corrected numbers",
      "Some meeting notes",
      "A list of companies",
      "A floor plan"
    ],
    "correctAnswer": 2,
    "explanation": "เฉลยข้อ C: เพราะหมิงเห็นด้วยกับไอเดียของแฟรงก์และบอกว่าจะไปหาข้อมูลเกี่ยวกับบริษัทต่างๆ แล้วรวบรวมรายชื่อบริษัทมานำเสนอในการประชุมวันพฤหัสบดีนี้",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/35-37.mp3"
  },
  {
    "id": 38,
    "groupId": "group-38-40",
    "transcript": "M: Hello, I saw an advertisement for your boat tours. Are there any at the end of September?\nW: Absolutely! They're actually crowded at that time of year because it's the last of the nice weather.\nM: Well, I'm glad I called early, then. I'd like to reserve two seats.\nW: Uh ... all our reservations are done through our Web site. Look for the calendar on the left-hand side. You can't miss it. Then you just choose the date you want.",
    "questionText": "38: What does the woman say about tours in September?",
    "options": [
      "They are held on weekends only.",
      "They are very popular.",
      "Their price will be increased.",
      "They have live music."
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะผู้หญิงบอกว่าทัวร์ล่องเรือในช่วงปลายเดือนกันยายนจะหนาแน่นและมีคนเยอะมาก เนื่องจากเป็นช่วงสุดท้ายที่สภาพอากาศยังดีอยู่ แสดงว่าเป็นช่วงที่ได้รับความนิยมสูงมาก",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/38-40.mp3"
  },
  {
    "id": 39,
    "groupId": "group-38-40",
    "transcript": "M: Hello, I saw an advertisement for your boat tours. Are there any at the end of September?\nW: Absolutely! They're actually crowded at that time of year because it's the last of the nice weather.\nM: Well, I'm glad I called early, then. I'd like to reserve two seats.\nW: Uh ... all our reservations are done through our Web site. Look for the calendar on the left-hand side. You can't miss it. Then you just choose the date you want.",
    "questionText": "39: What does the woman tell the man to do?",
    "options": [
      "Make an online reservation",
      "View a brochure",
      "Provide photo identification",
      "Read some reviews"
    ],
    "correctAnswer": 0,
    "explanation": "เฉลยข้อ A: เพราะผู้หญิงแนะนำให้ผู้ชายไปทำการจองตั๋วผ่านทางเว็บไซต์ของบริษัท โดยให้สังเกตดูปฏิทินที่อยู่ทางด้านซ้ายมือของหน้าเว็บ",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/38-40.mp3"
  },
  {
    "id": 40,
    "groupId": "group-38-40",
    "transcript": "M: Hello, I saw an advertisement for your boat tours. Are there any at the end of September?\nW: Absolutely! They're actually crowded at that time of year because it's the last of the nice weather.\nM: Well, I'm glad I called early, then. I'd like to reserve two seats.\nW: Uh ... all our reservations are done through our Web site. Look for the calendar on the left-hand side. You can't miss it. Then you just choose the date you want.",
    "questionText": "40: What does the woman imply when she says, \"You can't miss it\"?",
    "options": [
      "The tour is highly rated.",
      "A map should be used.",
      "The man must arrive on time.",
      "A calendar is easy to find."
    ],
    "correctAnswer": 3,
    "explanation": "เฉลยข้อ D: เพราะวลีที่ว่าคุณไม่มีทางพลาดมันหรอก หมายถึงปฏิทินบนเว็บไซต์นั้นสังเกตเห็นได้ง่ายมากและสามารถค้นหาเพื่อกดเลือกวันจองทัวร์ได้อย่างสะดวกสบาย",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/38-40.mp3"
  },
  {
    "id": 41,
    "groupId": "group-41-43",
    "transcript": "W: Akira, do you have time to send an e-mail to the staff this afternoon? I'd do it myself but the Board of Trustees meeting starts in ten minutes, and I'm presenting the opening report.\nM: No problem at all. What would you like the memo to say?\nW: The entire law office will close early on Friday, at three P.M. Some contractors are coming in to paint the conference room and lobby walls.\nM: OK, I'll get that out right away.",
    "questionText": "41: What does the woman ask the man to do?",
    "options": [
      "Send an e-mail",
      "Revise a report",
      "Schedule a repair",
      "Hang a painting"
    ],
    "correctAnswer": 0,
    "explanation": "เฉลยข้อ A: เพราะผู้หญิงเปิดบทสนทนาด้วยการถามอากิระว่า พอจะมีเวลาส่งอีเมลแจ้งพนักงานในช่วงบ่ายวันนี้แทนเธอได้หรือไม่ เนื่องจากเธอต้องไปเข้าประชุมบอร์ดบริหาร",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/41-43.mp3"
  },
  {
    "id": 42,
    "groupId": "group-41-43",
    "transcript": "W: Akira, do you have time to send an e-mail to the staff this afternoon? I'd do it myself but the Board of Trustees meeting starts in ten minutes, and I'm presenting the opening report.\nM: No problem at all. What would you like the memo to say?\nW: The entire law office will close early on Friday, at three P.M. Some contractors are coming in to paint the conference room and lobby walls.\nM: OK, I'll get that out right away.",
    "questionText": "42: Why is the woman unable to complete the task?",
    "options": [
      "She has a computer problem.",
      "She has to consult with a coworker.",
      "She has to give a presentation.",
      "She has a business trip."
    ],
    "correctAnswer": 2,
    "explanation": "เฉลยข้อ C: เพราะผู้หญิงไม่ว่างส่งอีเมลด้วยตัวเอง เนื่องจากเธอต้องเข้าร่วมการประชุมคณะกรรมการบริหารในอีกสิบนาทีข้างหน้า และมีหน้าที่ต้องนำเสนอรายงานเปิดการประชุม",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/41-43.mp3"
  },
  {
    "id": 43,
    "groupId": "group-41-43",
    "transcript": "W: Akira, do you have time to send an e-mail to the staff this afternoon? I'd do it myself but the Board of Trustees meeting starts in ten minutes, and I'm presenting the opening report.\nM: No problem at all. What would you like the memo to say?\nW: The entire law office will close early on Friday, at three P.M. Some contractors are coming in to paint the conference room and lobby walls.\nM: OK, I'll get that out right away.",
    "questionText": "43: What will happen on Friday afternoon?",
    "options": [
      "Some furniture will be installed.",
      "Some walls will be painted.",
      "A conference will begin.",
      "A luncheon will take place."
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะในอีเมลที่ฝากส่งระบุว่า สำนักงานกฎหมายจะปิดเร็วขึ้นในวันศุกร์ตอนบ่ายสามโมง เนื่องจากจะมีผู้รับเหมาเข้ามาทาสีห้องประชุมและผนังตรงห้องโถงส่วนหน้า",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/41-43.mp3"
  },
  {
    "id": 44,
    "groupId": "group-44-46",
    "transcript": "M: Hi, it's Jeff from Personnel calling. I'll be conducting the preliminary interviews for the project manager position in your division. Is there anything specific you want the candidates to be able to do?\nW: Well, I know you ask about their education credentials and work experience. But I really need someone who can travel as part of this position.\nM: Yes, I see frequent international and domestic travel in the job requirements, OK? I won't invite anyone for a second interview who isn't interested in that.\nW: Exactly. Oh, by the way, don't forget that I'll be out the week of July sixth on holiday. Please don't schedule suitable candidates to interview with me during that time.",
    "questionText": "44: What are the speakers discussing?",
    "options": [
      "Interviewing job applicants",
      "Making promotion decisions",
      "Preparing for an urgent project",
      "Attracting international clients"
    ],
    "correctAnswer": 0,
    "explanation": "เฉลยข้อ A: เพราะเจฟฟ์จากแผนกบุคคลโทรมาคุยเรื่องการสัมภาษณ์งานรอบแรกสำหรับตำแหน่งผู้จัดการโครงการ เพื่อสอบถามคุณสมบัติเฉพาะเจาะจงที่ผู้สมัครควรมี",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/44-46.mp3"
  },
  {
    "id": 45,
    "groupId": "group-44-46",
    "transcript": "M: Hi, it's Jeff from Personnel calling. I'll be conducting the preliminary interviews for the project manager position in your division. Is there anything specific you want the candidates to be able to do?\nW: Well, I know you ask about their education credentials and work experience. But I really need someone who can travel as part of this position.\nM: Yes, I see frequent international and domestic travel in the job requirements, OK? I won't invite anyone for a second interview who isn't interested in that.\nW: Exactly. Oh, by the way, don't forget that I'll be out the week of July sixth on holiday. Please don't schedule suitable candidates to interview with me during that time.",
    "questionText": "45: What does the woman say staff should be able to do?",
    "options": [
      "Work on weekends",
      "Handle multiple accounts",
      "Speak a foreign language",
      "Travel frequently"
    ],
    "correctAnswer": 3,
    "explanation": "เฉลยข้อ D: เพราะผู้หญิงเน้นย้ำว่าเธอต้องการคนที่สามารถเดินทางไปปฏิบัติงานนอกสถานที่ได้ เนื่องจากตำแหน่งนี้จำเป็นต้องเดินทางทั้งภายในประเทศและต่างประเทศอยู่บ่อยครั้ง",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/44-46.mp3"
  },
  {
    "id": 46,
    "groupId": "group-44-46",
    "transcript": "M: Hi, it's Jeff from Personnel calling. I'll be conducting the preliminary interviews for the project manager position in your division. Is there anything specific you want the candidates to be able to do?\nW: Well, I know you ask about their education credentials and work experience. But I really need someone who can travel as part of this position.\nM: Yes, I see frequent international and domestic travel in the job requirements, OK? I won't invite anyone for a second interview who isn't interested in that.\nW: Exactly. Oh, by the way, don't forget that I'll be out the week of July sixth on holiday. Please don't schedule suitable candidates to interview with me during that time.",
    "questionText": "46: What does the woman remind the man about?",
    "options": [
      "Her letter of recommendation",
      "Her upcoming vacation",
      "A limited budget",
      "A contract deadline"
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะผู้หญิงพูดเตือนความจำเจฟฟ์ว่า สัปดาห์ของวันที่หกกรกฎาคมเธอจะลาพักร้อน ดังนั้นห้ามจัดตารางให้ผู้สมัครที่ผ่านเกณฑ์มาสัมภาษณ์กับเธอในช่วงเวลานั้นเด็ดขาด",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/44-46.mp3"
  },
  {
    "id": 47,
    "groupId": "group-47-49",
    "transcript": "M: Hi, I need some help with this mobile phone that I bought at your shop. Whenever I make a call, I can hear the person on the other end, but that person can't hear me.\nW: Hmm. It sounds like there might be something wrong with the microphone. Have you dropped the phone recently?\nM: No, I haven't. In fact, I just bought it yesterday!\nW: Sometimes there's a manufacturing defect. Let me take a look at your phone to see if that's the case. If it is, then we can give you a brand-new one at no cost.",
    "questionText": "47: What is the man's problem?",
    "options": [
      "He cannot find a file.",
      "He is late for an appointment.",
      "His workplace is very noisy.",
      "His phone is not working properly."
    ],
    "correctAnswer": 3,
    "explanation": "เฉลยข้อ D: เพราะผู้ชายแจ้งปัญหาว่าโทรศัพท์มือถือที่เพิ่งซื้อมาทำงานผิดปกติ โดยเมื่อโทรออกเขาจะได้ยินเสียงปลายสายชัดเจน แต่ปลายสายกลับไม่ได้ยินเสียงของเขาเลย",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/47-49.mp3"
  },
  {
    "id": 48,
    "groupId": "group-47-49",
    "transcript": "M: Hi, I need some help with this mobile phone that I bought at your shop. Whenever I make a call, I can hear the person on the other end, but that person can't hear me.\nW: Hmm. It sounds like there might be something wrong with the microphone. Have you dropped the phone recently?\nM: No, I haven't. In fact, I just bought it yesterday!\nW: Sometimes there's a manufacturing defect. Let me take a look at your phone to see if that's the case. If it is, then we can give you a brand-new one at no cost.",
    "questionText": "48: What does the woman ask the man about?",
    "options": [
      "Who he is trying to contact",
      "When he made a purchase",
      "Whether he damaged a device",
      "What the model number of an item is"
    ],
    "correctAnswer": 2,
    "explanation": "เฉลยข้อ C: เพราะผู้หญิงตั้งข้อสงสัยว่าไมโครโฟนอาจมีปัญหา จึงสอบถามผู้ชายว่าช่วงนี้ได้ทำโทรศัพท์ตกพื้นบ้างหรือไม่ เพื่อเช็คว่าอุปกรณ์ได้รับความเสียหายจากการใช้งานไหม",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/47-49.mp3"
  },
  {
    "id": 49,
    "groupId": "group-47-49",
    "transcript": "M: Hi, I need some help with this mobile phone that I bought at your shop. Whenever I make a call, I can hear the person on the other end, but that person can't hear me.\nW: Hmm. It sounds like there might be something wrong with the microphone. Have you dropped the phone recently?\nM: No, I haven't. In fact, I just bought it yesterday!\nW: Sometimes there's a manufacturing defect. Let me take a look at your phone to see if that's the case. If it is, then we can give you a brand-new one at no cost.",
    "questionText": "49: What does the woman offer to do?",
    "options": [
      "Provide a replacement",
      "Give a discount",
      "Call a supervisor",
      "Check a storage room"
    ],
    "correctAnswer": 0,
    "explanation": "เฉลยข้อ A: เพราะผู้หญิงบอกว่าหากตรวจสอบแล้วพบว่าเป็นข้อบกพร่องที่เกิดจากขั้นตอนการผลิต ทางร้านจะเปลี่ยนเครื่องใหม่แกะกล่องให้ทันทีโดยไม่มีค่าใช้จ่ายใดๆ ทั้งสิ้น",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/47-49.mp3"
  },
  {
    "id": 50,
    "groupId": "group-50-52",
    "transcript": "W: Hello. I've read great reviews of your bakery. You're famous for your strawberry muffins, right? I'd like to try one.\nM: Sorry, we have strawberry muffins only when fresh strawberries are in season. Would you like to try an almond muffin instead?\nW: Sure, and, by any chance, do you offer catering? I'm expecting some clients at the office early Tuesday morning, and I'd like to have some food available.\nM: We don't do formal catering, but if you're in the neighborhood, I can bring your order to your office.\nW: Great, thanks. We're around the corner from here. How about a dozen assorted muffins? Here's the address.",
    "questionText": "50: Why is a product unavailable?",
    "options": [
      "A machine part is broken.",
      "An ingredient is not in season.",
      "A shipment was delayed.",
      "A manufacturer went out of business."
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะพนักงานชายแจ้งว่าขนมมัฟฟินสตรอเบอร์รี่จะมีขายเฉพาะช่วงที่สตรอเบอร์รี่สดอยู่ในฤดูกาลเก็บเกี่ยวเท่านั้น ตอนนี้จึงไม่มีสินค้าชิ้นนี้จำหน่าย",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/50-52.mp3"
  },
  {
    "id": 51,
    "groupId": "group-50-52",
    "transcript": "W: Hello. I've read great reviews of your bakery. You're famous for your strawberry muffins, right? I'd like to try one.\nM: Sorry, we have strawberry muffins only when fresh strawberries are in season. Would you like to try an almond muffin instead?\nW: Sure, and, by any chance, do you offer catering? I'm expecting some clients at the office early Tuesday morning, and I'd like to have some food available.\nM: We don't do formal catering, but if you're in the neighborhood, I can bring your order to your office.\nW: Great, thanks. We're around the corner from here. How about a dozen assorted muffins? Here's the address.",
    "questionText": "51: What does the woman inquire about?",
    "options": [
      "The date of an event",
      "The recipe for some baked goods",
      "The availability of a catering service",
      "The location of a business meeting"
    ],
    "correctAnswer": 2,
    "explanation": "เฉลยข้อ C: เพราะผู้หญิงสอบถามเพิ่มเติมว่าทางร้านมีบริการจัดเลี้ยงอาหารหรือไม่ เนื่องจากเธอจะมีลูกค้ามาเยือนที่สำนักงานในเช้าวันอังคารและต้องการเตรียมอาหารไว้ต้อนรับ",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/50-52.mp3"
  },
  {
    "id": 52,
    "groupId": "group-50-52",
    "transcript": "W: Hello. I've read great reviews of your bakery. You're famous for your strawberry muffins, right? I'd like to try one.\nM: Sorry, we have strawberry muffins only when fresh strawberries are in season. Would you like to try an almond muffin instead?\nW: Sure, and, by any chance, do you offer catering? I'm expecting some clients at the office early Tuesday morning, and I'd like to have some food available.\nM: We don't do formal catering, but if you're in the neighborhood, I can bring your order to your office.\nW: Great, thanks. We're around the corner from here. How about a dozen assorted muffins? Here's the address.",
    "questionText": "52: What will the man most likely do on Tuesday?",
    "options": [
      "Change a display",
      "Buy some supplies",
      "Close a shop early",
      "Make a delivery"
    ],
    "correctAnswer": 3,
    "explanation": "เฉลยข้อ D: เพราะพนักงานชายบอกว่าแม้ร้านจะไม่มีบริการจัดเลี้ยงแบบเป็นทางการ แต่เขสามารถนำมัฟฟินที่สั่งไปส่งให้ที่สำนักงานของผู้หญิงในวันอังคารได้เนื่องจากอยู่ใกล้ๆ กัน",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/50-52.mp3"
  },
  {
    "id": 53,
    "groupId": "group-53-55",
    "transcript": "W: Good afternoon, you've reached customer service at the Oxbridge Water Company. How can I help you?\nM: Hi, I just received my water bill and it's much higher than usual. I think it's because last month one of the pipes in my house broke-my whole ground floor was flooded. I shouldn't have to pay the full amount, should I?\nW: If you can send us a receipt for any repair work related to the leak, it's possible we can reduce the charges. If you're ready, I can give you the address to send that to.",
    "questionText": "53: Where does the woman most likely work?",
    "options": [
      "At a bank",
      "At a home goods store",
      "At a utility company",
      "At an apartment management agency"
    ],
    "correctAnswer": 2,
    "explanation": "เฉลยข้อ C: เพราะผู้หญิงรับสายในนามฝ่ายบริการลูกค้าของบริษัทออกซ์บริดจ์วอเตอร์ ซึ่งเป็นหน่วยงานที่ดูแลและให้บริการด้านระบบสาธารณูปโภคน้ำประปา",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/53-55.mp3"
  },
  {
    "id": 54,
    "groupId": "group-53-55",
    "transcript": "W: Good afternoon, you've reached customer service at the Oxbridge Water Company. How can I help you?\nM: Hi, I just received my water bill and it's much higher than usual. I think it's because last month one of the pipes in my house broke-my whole ground floor was flooded. I shouldn't have to pay the full amount, should I?\nW: If you can send us a receipt for any repair work related to the leak, it's possible we can reduce the charges. If you're ready, I can give you the address to send that to.",
    "questionText": "54: Why is the man calling?",
    "options": [
      "To open an account",
      "To request a fee reduction",
      "To cancel an inspection",
      "To reserve some materials"
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะผู้ชายโทรมาแย้งเรื่องค่าน้ำประปาที่สูงกว่าปกติมากเนื่องจากท่อน้ำในบ้านแตกจนน้ำท่วมชั้นล่าง เขาจึงต้องการขอลดหย่อนค่าบริการและไม่อยากจ่ายเต็มจำนวน",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/53-55.mp3"
  },
  {
    "id": 55,
    "groupId": "group-53-55",
    "transcript": "W: Good afternoon, you've reached customer service at the Oxbridge Water Company. How can I help you?\nM: Hi, I just received my water bill and it's much higher than usual. I think it's because last month one of the pipes in my house broke-my whole ground floor was flooded. I shouldn't have to pay the full amount, should I?\nW: If you can send us a receipt for any repair work related to the leak, it's possible we can reduce the charges. If you're ready, I can give you the address to send that to.",
    "questionText": "55: What does the woman ask the man to send?",
    "options": [
      "A copy of a warranty",
      "A completed survey",
      "A receipt for a repair",
      "A deposit payment"
    ],
    "correctAnswer": 2,
    "explanation": "เฉลยข้อ C: เพราะผู้หญิงแจ้งเงื่อนไขว่า หากผู้ชายส่งใบเสร็จรับเงินค่าซ่อมแซมท่อน้ำที่รั่วมาให้ ทางบริษัทก็อาจจะพิจารณาลดหย่อนและปรับลดค่าบริการค่าน้ำให้ได้",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/53-55.mp3"
  },
  {
    "id": 56,
    "groupId": "group-56-58",
    "transcript": "M: Hi, Molly. How was your trip to meet with Xavier Retailers?\nW: Oh hi, Bryan. It went really well. The retailer really liked our women's footwear line, and they've decided to place an order with us for their department stores nationwide, so it's much bigger than we expected.\nM: Wow, congratulations!\nW: Thanks! Of course, I know you did most of the market analysis. It really helped me convince the client to carry our footwear.\nM: Don't worry - it was my pleasure. Oh, just so you know, there's been a policy change and the receipts from trips can be submitted electronically.\nW: Thanks. I'll take care of that this week.",
    "questionText": "56: What has the woman recently accomplished?",
    "options": [
      "She designed a new line of shoes.",
      "She founded an organization.",
      "She advanced to an executive position.",
      "She secured a large order from a client."
    ],
    "correctAnswer": 3,
    "explanation": "เฉลยข้อ D: เพราะมอลลี่บอกข่าวดีว่า ทริปที่ไปพบกับผู้ค้าปลีกประสบความสำเร็จอย่างมาก โดยลูกค้าตกลงสั่งซื้อรองเท้าสตรีเพื่อไปวางขายในห้างสรรพสินค้าทุกสาขาทั่วประเทศ ซึ่งเป็นคำสั่งซื้อที่ใหญ่มาก",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/56-58.mp3"
  },
  {
    "id": 57,
    "groupId": "group-56-58",
    "transcript": "M: Hi, Molly. How was your trip to meet with Xavier Retailers?\nW: Oh hi, Bryan. It went really well. The retailer really liked our women's footwear line, and they've decided to place an order with us for their department stores nationwide, so it's much bigger than we expected.\nM: Wow, congratulations!\nW: Thanks! Of course, I know you did most of the market analysis. It really helped me convince the client to carry our footwear.\nM: Don't worry - it was my pleasure. Oh, just so you know, there's been a policy change and the receipts from trips can be submitted electronically.\nW: Thanks. I'll take care of that this week.",
    "questionText": "57: What does the woman mean when she says, \"I know you did most of the market analysis\"?",
    "options": [
      "She looks forward to reading a report.",
      "She wants to take on a new task.",
      "She is thankful for the man's help.",
      "She needs some advice from the man."
    ],
    "correctAnswer": 2,
    "explanation": "เฉลยข้อ C: เพราะผู้หญิงต้องการแสดงความขอบคุณต่อไบรอันที่ช่วยทำข้อมูลวิเคราะห์ตลาดให้ ซึ่งข้อมูลเหล่านั้นมีส่วนสำคัญอย่างยิ่งในการช่วยโน้มน้าวใจให้ลูกค้าตกลงสั่งซื้อสินค้า",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/56-58.mp3"
  },
  {
    "id": 58,
    "groupId": "group-56-58",
    "transcript": "M: Hi, Molly. How was your trip to meet with Xavier Retailers?\nW: Oh hi, Bryan. It went really well. The retailer really liked our women's footwear line, and they've decided to place an order with us for their department stores nationwide, so it's much bigger than we expected.\nM: Wow, congratulations!\nW: Thanks! Of course, I know you did most of the market analysis. It really helped me convince the client to carry our footwear.\nM: Don't worry - it was my pleasure. Oh, just so you know, there's been a policy change and the receipts from trips can be submitted electronically.\nW: Thanks. I'll take care of that this week.",
    "questionText": "58: What policy change does the man tell the woman about?",
    "options": [
      "How to book flights",
      "How to submit receipts",
      "How to enter data",
      "How to pay vendors"
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะผู้ชายแจ้งให้ทราบเกี่ยวกับกฎระเบียบใหม่ของบริษัท ว่าตอนนี้พนักงานสามารถยื่นส่งใบเสร็จรับเงินจากการเดินทางไปปฏิบัติงานผ่านระบบอิเล็กทรอนิกส์ได้แล้ว",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/56-58.mp3"
  },
  {
    "id": 59,
    "groupId": "group-59-61",
    "transcript": "M: Good morning, Jee-Eun. How's it going with the brochures for the Sports and Medicine Expo in July? I'm really eager to see what the public thinks about our company's new exercise equipment.\nW: Actually, not well. I printed a few yesterday, and for some reason the ink won't dry! I tried different types of photo paper and tested different printer settings, but no matter what I do ... the ink smears when I touch it.\nM: Strange. Well, since we're not in a hurry, why don't we just get the brochures printed at a place that specializes in this sort of thing? I want to make sure they look great.",
    "questionText": "59: What is the company planning to do in July?",
    "options": [
      "Announce a new president",
      "Participate in a product exhibition",
      "Hold a company picnic",
      "Buy some printing equipment"
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะในบทสนทนาระบุว่า บริษัทกำลังจัดเตรียมโบรชัวร์เพื่อนำไปใช้ในงานแสดงสินค้ากีฬาและการแพทย์ที่จะจัดขึ้นในเดือนกรกฎาคมนี้",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/59-61.mp3"
  },
  {
    "id": 60,
    "groupId": "group-59-61",
    "transcript": "M: Good morning, Jee-Eun. How's it going with the brochures for the Sports and Medicine Expo in July? I'm really eager to see what the public thinks about our company's new exercise equipment.\nW: Actually, not well. I printed a few yesterday, and for some reason the ink won't dry! I tried different types of photo paper and tested different printer settings, but no matter what I do ... the ink smears when I touch it.\nM: Strange. Well, since we're not in a hurry, why don't we just get the brochures printed at a place that specializes in this sort of thing? I want to make sure they look great.",
    "questionText": "60: What problem does the woman mention?",
    "options": [
      "A document is not printing correctly.",
      "Some expenses have not been approved.",
      "Some inventory is not selling well.",
      "An invitation was not received."
    ],
    "correctAnswer": 0,
    "explanation": "เฉลยข้อ A: เพราะจีอึนแจ้งปัญหาว่าโบรชัวร์ที่สั่งพิมพ์ออกมาเมื่อวานนี้มีปัญหาเรื่องน้ำหมึกไม่ยอมแห้ง และเมื่อเอามือไปโดนหมึกก็เลอะเปรอะเปื้อนจนทำให้เอกสารเสียหาย",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/59-61.mp3"
  },
  {
    "id": 61,
    "groupId": "group-59-61",
    "transcript": "M: Good morning, Jee-Eun. How's it going with the brochures for the Sports and Medicine Expo in July? I'm really eager to see what the public thinks about our company's new exercise equipment.\nW: Actually, not well. I printed a few yesterday, and for some reason the ink won't dry! I tried different types of photo paper and tested different printer settings, but no matter what I do ... the ink smears when I touch it.\nM: Strange. Well, since we're not in a hurry, why don't we just get the brochures printed at a place that specializes in this sort of thing? I want to make sure they look great.",
    "questionText": "61: What does the man suggest?",
    "options": [
      "Writing some new product descriptions",
      "Rearranging some photographs",
      "Getting consumer feedback",
      "Using a professional service"
    ],
    "correctAnswer": 3,
    "explanation": "เฉลยข้อ D: เพราะผู้ชายเห็นว่ายังมีเวลาเหลืออีกพอสมควรก่อนถึงวันงาน จึงแนะนำให้ส่งโบรชัวร์ไปพิมพ์กับร้านสิ่งพิมพ์ระดับมืออาชีพที่เชี่ยวชาญเฉพาะทางเพื่อให้งานออกมาสวยงามที่สุด",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/59-61.mp3"
  },
  {
    "id": 62,
    "groupId": "group-62-64",
    "transcript": "M: Hi. I'm one of the new interns here at Manzi Technology. I'm here for the orientation session at nine o'clock.\nW: OK. I just need you to sign in, and I'll find your name tag. What's your name?\nM: Richard Edwards.\nW: Oh, there's a Rhonda Edwards in our public relations department. Are you related to her?\nM: Yes, she's my older sister. Actually, she's the one who told me about this internship. She thought I'd really enjoy working here during my break from university.\nW: I'm sure you will. Well, welcome to Manzi. Here's your name tag. Orientation is upstairs. It's the first room on your left when you get to the top of the staircase.\nM: Thank you.",
    "questionText": "62: Why is the man at Manzi Technology?",
    "images": ["./assets/images/ฟ้าม่วง LC2/BP 62-64.png"],
    "options": [
      "To lead a workshop",
      "To pick up an application form",
      "To have an interview",
      "To start an internship"
    ],
    "correctAnswer": 3,
    "explanation": "เฉลยข้อ D: เพราะริชาร์ดแนะนำตัวเองกับพนักงานต้อนรับว่าเขาเป็นหนึ่งในพนักงานฝึกหัดคนใหม่ที่เดินทางมาร่วมงานปฐมนิเทศที่จะเริ่มขึ้นในเวลาเก้าโมงเช้า",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/62-64.mp3"
  },
  {
    "id": 63,
    "groupId": "group-62-64",
    "transcript": "M: Hi. I'm one of the new interns here at Manzi Technology. I'm here for the orientation session at nine o'clock.\nW: OK. I just need you to sign in, and I'll find your name tag. What's your name?\nM: Richard Edwards.\nW: Oh, there's a Rhonda Edwards in our public relations department. Are you related to her?\nM: Yes, she's my older sister. Actually, she's the one who told me about this internship. She thought I'd really enjoy working here during my break from university.\nW: I'm sure you will. Well, welcome to Manzi. Here's your name tag. Orientation is upstairs. It's the first room on your left when you get to the top of the staircase.\nM: Thank you.",
    "questionText": "63: How did the man learn about Manzi Technology?",
    "options": [
      "From a university professor",
      "From a family member",
      "From a career fair",
      "From an online advertisement"
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะริชาร์ดเล่าว่าพี่สาวของเขาซึ่งทำงานอยู่ในแผนกประชาสัมพันธ์ของบริษัทนี้ เป็นคนแนะนำและบอกข้อมูลเกี่ยวกับโครงการฝึกงานนี้ให้เขาทราบ",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/62-64.mp3"
  },
  {
    "id": 64,
    "groupId": "group-62-64",
    "transcript": "M: Hi. I'm one of the new interns here at Manzi Technology. I'm here for the orientation session at nine o'clock.\nW: OK. I just need you to sign in, and I'll find your name tag. What's your name?\nM: Richard Edwards.\nW: Oh, there's a Rhonda Edwards in our public relations department. Are you related to her?\nM: Yes, she's my older sister. Actually, she's the one who told me about this internship. She thought I'd really enjoy working here during my break from university.\nW: I'm sure you will. Well, welcome to Manzi. Here's your name tag. Orientation is upstairs. It's the first room on your left when you get to the top of the staircase.\nM: Thank you.",
    "questionText": "64: Look at the graphic. Which room will the man go to next?",
    "options": [
      "201",
      "202",
      "203",
      "204"
    ],
    "correctAnswer": 0,
    "explanation": "เฉลยข้อ A: เพราะพนักงานต้อนรับบอกทางว่า ห้องปฐมนิเทศอยู่ชั้นบน โดยเมื่อเดินขึ้นบันไดไปถึงด้านบนแล้ว จะเป็นห้องแรกสุดที่อยู่ทางด้านซ้ายมือ ซึ่งตรงกับห้องหมายเลข 201",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/62-64.mp3"
  },
  {
    "id": 65,
    "groupId": "group-65-67",
    "transcript": "W: Hi, Mr. Polk. Thanks for meeting with me.\nM: Sure. It's a pleasure. So, you're writing an article for Forge Ahead Magazine?\nW: Yes, the piece is about how your car manufacturing plant dramatically changed the way it produces cars. Could you tell me about what you did?\nM: Certainly. Many factory employees are told to never stop the production line-no matter what. Recently I took the opposite approach. Whenever we found a defect, anyone could stop the assembly line and address the problem immediately.\nW: And this transition improved your quality control?\nM: Exactly. In fact, look at this production chart. You'll see that, compared to other factories, cars from this one have far fewer defects.",
    "questionText": "65: Why is the woman meeting with the man?",
    "images": ["./assets/images/ฟ้าม่วง LC2/BP 65-67.png"],
    "options": [
      "To select conference participants",
      "To finalize an agreement",
      "To research a news article",
      "To purchase an automobile"
    ],
    "correctAnswer": 2,
    "explanation": "เฉลยข้อ C: เพราะผู้หญิงแนะนำตัวว่าเธอกำลังเขียนบทความคอลัมน์พิเศษลงในนิตยสารฟอร์จอะเฮด และต้องการมาสัมภาษณ์เก็บข้อมูลเกี่ยวกับโรงงานผลิตรถยนต์ของคุณพอร์ค",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/65-67.mp3"
  },
  {
    "id": 66,
    "groupId": "group-65-67",
    "transcript": "W: Hi, Mr. Polk. Thanks for meeting with me.\nM: Sure. It's a pleasure. So, you're writing an article for Forge Ahead Magazine?\nW: Yes, the piece is about how your car manufacturing plant dramatically changed the way it produces cars. Could you tell me about what you did?\nM: Certainly. Many factory employees are told to never stop the production line-no matter what. Recently I took the opposite approach. Whenever we found a defect, anyone could stop the assembly line and address the problem immediately.\nW: And this transition improved your quality control?\nM: Exactly. In fact, look at this production chart. You'll see that, compared to other factories, cars from this one have far fewer defects.",
    "questionText": "66: What happened recently at Mr. Polk's factory?",
    "options": [
      "Better equipment was installed.",
      "Additional employees were hired.",
      "An office was renovated.",
      "A production process was improved."
    ],
    "correctAnswer": 3,
    "explanation": "เฉลยข้อ D: เพราะคุณพอร์คเล่าว่าเขาได้ปรับปรุงระบบการทำงานในสายการผลิต โดยอนุญาตให้พนักงานทุกคนสามารถสั่งหยุดสายพานการผลิตได้ทันทีหากตรวจพบข้อบกพร่องเพื่อแก้ไขปัญหาทันที",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/65-67.mp3"
  },
  {
    "id": 67,
    "groupId": "group-65-67",
    "transcript": "W: Hi, Mr. Polk. Thanks for meeting with me.\nM: Sure. It's a pleasure. So, you're writing an article for Forge Ahead Magazine?\nW: Yes, the piece is about how your car manufacturing plant dramatically changed the way it produces cars. Could you tell me about what you did?\nM: Certainly. Many factory employees are told to never stop the production line-no matter what. Recently I took the opposite approach. Whenever we found a defect, anyone could stop the assembly line and address the problem immediately.\nW: And this transition improved your quality control?\nM: Exactly. In fact, look at this production chart. You'll see that, compared to other factories, cars from this one have far fewer defects.",
    "questionText": "67: Look at the graphic. Which factory does Mr. Polk most likely manage?",
    "options": [
      "Lanslet",
      "Crowsley",
      "Farson",
      "Harlington"
    ],
    "correctAnswer": 0,
    "explanation": "เฉลยข้อ A: เพราะคุณพอร์คชี้ชวนให้ดูแผนภูมิเปรียบเทียบผลการผลิต ซึ่งแสดงให้เห็นว่าโรงงานภายใต้การดูแลของเขามีอัตราการเกิดชิ้นงานชำรุดหรือข้อบกพร่องน้อยที่สุดเมื่อเทียบกับโรงงานอื่น (Lanslet)",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/65-67.mp3"
  },
  {
    "id": 68,
    "groupId": "group-68-70",
    "transcript": "W: Hello, it's Helen from your lawyer's office calling to make sure you received the contract we sent over.\nM: Hi, yes, and I had time to look it over. There's actually a spelling error on the second line; it should be Milt, M-I-L-T, Industries, not M-A-L-T.\nW: Oh, I'll have that corrected. Did you notice anything else?\nM: Well, I just received the building inspection report, and we learned that the electrical wiring is over fifteen years old. We're worried about having access to enough power to run all our computers and servers.\nW: That's a problem. I'll talk to the sellers about covering the cost of upgrading the electricity.",
    "questionText": "68: Look at the graphic. According to the man, which information is incorrect?",
    "images": ["./assets/images/ฟ้าม่วง LC2/BP 68-70.png"],
    "options": [
      "The type of property",
      "The address",
      "The buyer's name",
      "The seller's name"
    ],
    "correctAnswer": 2,
    "explanation": "เฉลยข้อ C: เพราะผู้ชายตรวจพบข้อผิดพลาดในสัญญาบรรทัดที่สอง โดยมีการสะกดชื่อบริษัทของผู้ซื้อผิดจาก มิลต์ อินดัสทรีส์ เป็น แมลต์ อินดัสทรีส์ ซึ่งเป็นชื่อของฝั่งผู้ซื้อ",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/68-70.mp3"
  },
  {
    "id": 69,
    "groupId": "group-68-70",
    "transcript": "W: Hello, it's Helen from your lawyer's office calling to make sure you received the contract we sent over.\nM: Hi, yes, and I had time to look it over. There's actually a spelling error on the second line; it should be Milt, M-I-L-T, Industries, not M-A-L-T.\nW: Oh, I'll have that corrected. Did you notice anything else?\nM: Well, I just received the building inspection report, and we learned that the electrical wiring is over fifteen years old. We're worried about having access to enough power to run all our computers and servers.\nW: That's a problem. I'll talk to the sellers about covering the cost of upgrading the electricity.",
    "questionText": "69: What does the man say he is worried about?",
    "options": [
      "The proximity of a highway",
      "The condition of an electrical system",
      "The cost of interior decorating",
      "The lack of parking space"
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะผู้ชายแสดงความกังวลหลังจากอ่านรายงานผลการตรวจสอบอาคาร แล้วพบว่าระบบสายไฟในตึกมีอายุการใช้งานนานกว่าสิบห้าปีแล้ว ซึ่งกลัวว่าจะรองรับการใช้คอมพิวเตอร์และเซิร์ฟเวอร์ไม่ไหว",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/68-70.mp3"
  },
  {
    "id": 70,
    "groupId": "group-68-70",
    "transcript": "W: Hello, it's Helen from your lawyer's office calling to make sure you received the contract we sent over.\nM: Hi, yes, and I had time to look it over. There's actually a spelling error on the second line; it should be Milt, M-I-L-T, Industries, not M-A-L-T.\nW: Oh, I'll have that corrected. Did you notice anything else?\nM: Well, I just received the building inspection report, and we learned that the electrical wiring is over fifteen years old. We're worried about having access to enough power to run all our computers and servers.\nW: That's a problem. I'll talk to the sellers about covering the cost of upgrading the electricity.",
    "questionText": "70: What does the woman offer to do?",
    "options": [
      "Negotiate with a seller",
      "Show an alternate property",
      "Study some regulations",
      "Contact a construction company"
    ],
    "correctAnswer": 0,
    "explanation": "เฉลยข้อ A: เพราะทนายความหญิงเสนอตัวที่จะช่วยไปพูดคุยและเจรจาต่อรองกับทางฝั่งผู้ขายอาคาร เพื่อขอให้ฝ่ายผู้ขายเป็นคนออกค่าใช้จ่ายในการปรับปรุงระบบไฟฟ้าในตึกให้",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/68-70.mp3"
  },
  {
    "id": 71,
    "groupId": "group-71-73",
    "transcript": "Before we end this meeting, I'd like to take a minute to recognize Janet Kalasky. She's led our department's marketing efforts for the past five years and has shown a tremendous amount of dedication to the company. Recently, Janet has been focusing on the displays that advertise our new line of smartphones for our booth at next week's trade show. The displays are very impressive, and I suggest that you drop by the staff lounge after this meeting to have a look at them. But first, let's have a round of applause to thank Janet for her work and dedication.",
    "questionText": "71: What is the purpose of the announcement?",
    "options": [
      "To acknowledge a coworker",
      "To introduce a guest",
      "To explain a department policy",
      "To discuss sales techniques"
    ],
    "correctAnswer": 0,
    "explanation": "เฉลยข้อ A: เพราะผู้พูดประกาศในที่ประชุมเพื่อยกย่องและขอบคุณเจเน็ต คาลาสกี้ ที่ทุ่มเททำงานในตำแหน่งฝ่ายการตลาดมาตลอดระยะเวลาห้าปีเต็ม",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/71-73.mp3"
  },
  {
    "id": 72,
    "groupId": "group-71-73",
    "transcript": "Before we end this meeting, I'd like to take a minute to recognize Janet Kalasky. She's led our department's marketing efforts for the past five years and has shown a tremendous amount of dedication to the company. Recently, Janet has been focusing on the displays that advertise our new line of smartphones for our booth at next week's trade show. The displays are very impressive, and I suggest that you drop by the staff lounge after this meeting to have a look at them. But first, let's have a round of applause to thank Janet for her work and dedication.",
    "questionText": "72: What has Janet Kalasky been working on recently?",
    "options": [
      "Finalizing a conference agenda",
      "Developing mobile phone software",
      "Updating training manuals",
      "Creating promotional displays"
    ],
    "correctAnswer": 3,
    "explanation": "เฉลยข้อ D: เพราะผู้พูดกล่าวถึงผลงานล่าสุดของเจเน็ต ว่าเธอได้ทุ่มเทเวลาไปกับการออกแบบและจัดทำสื่อป้ายโฆษณาประชาสัมพันธ์สำหรับสมาร์ทโฟนรุ่นใหม่เพื่อนำไปจัดแสดงในงานสัปดาห์หน้า",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/71-73.mp3"
  },
  {
    "id": 73,
    "groupId": "group-71-73",
    "transcript": "Before we end this meeting, I'd like to take a minute to recognize Janet Kalasky. She's led our department's marketing efforts for the past five years and has shown a tremendous amount of dedication to the company. Recently, Janet has been focusing on the displays that advertise our new line of smartphones for our booth at next week's trade show. The displays are very impressive, and I suggest that you drop by the staff lounge after this meeting to have a look at them. But first, let's have a round of applause to thank Janet for her work and dedication.",
    "questionText": "73: Where does the speaker encourage the listeners to go?",
    "options": [
      "To the security desk",
      "To the employee lounge",
      "To a training session",
      "To a trade show"
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะผู้พูดเชิญชวนให้พนักงานทุกคนแวะไปที่ห้องพักผ่อนของพนักงาน (staff lounge) หลังจากเสร็จสิ้นการประชุม เพื่อร่วมชมผลงานป้ายจัดแสดงที่เจเน็ตตั้งใจทำขึ้นมา",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/71-73.mp3"
  },
  {
    "id": 74,
    "groupId": "group-74-76",
    "transcript": "This is Harold Rosen, with WKRN News, reporting from the newly opened Bradford Opera House. The building is ultramodern, and when plans for its construction were announced, locals expressed their concern about it. It's located right next to historic city hall, the oldest building in the city. But so far, residents who have visited seem to like it. In spite of its modern look, those who have been inside are impressed. The atrium is beautifully decorated, the theater is equipped with a state-of-the-art sound system, and, of course, the music program is spectacular. The schedule for this season's performances can be found on the WKRN Website.",
    "questionText": "74: Where is the speaker reporting from?",
    "options": [
      "A movie theater",
      "An opera house",
      "A shopping mall",
      "A convention center"
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะผู้สื่อข่าวรายงานสถานการณ์สดมาจากหน้าอาคารโรงละครโอเปร่าแบรดฟอร์ดที่เพิ่งเปิดทำการแห่งใหม่ของเมือง",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/74-76.mp3"
  },
  {
    "id": 75,
    "groupId": "group-74-76",
    "transcript": "This is Harold Rosen, with WKRN News, reporting from the newly opened Bradford Opera House. The building is ultramodern, and when plans for its construction were announced, locals expressed their concern about it. It's located right next to historic city hall, the oldest building in the city. But so far, residents who have visited seem to like it. In spite of its modern look, those who have been inside are impressed. The atrium is beautifully decorated, the theater is equipped with a state-of-the-art sound system, and, of course, the music program is spectacular. The schedule for this season's performances can be found on the WKRN Website.",
    "questionText": "75: What does the speaker imply when he says, \"It's located right next to historic city hall, the oldest building in the city\"?",
    "options": [
      "An old building needs to be repaired.",
      "A historic landmark is worth visiting.",
      "A new building contrasts with older ones.",
      "A building is not difficult to get to."
    ],
    "correctAnswer": 2,
    "explanation": "เฉลยข้อ C: เพราะผู้พูดระบุว่าอาคารนี้มีดีไซน์ที่ทันสมัยหลุดโลกแต่กลับตั้งอยู่ติดกับศาลากลางจังหวัดหลังเก่าซึ่งเป็นตึกที่เก่าแก่ที่สุดในเมือง เพื่อสื่อถึงความแตกต่างอย่างสิ้นเชิงทางสถาปัตยกรรม",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/74-76.mp3"
  },
  {
    "id": 76,
    "groupId": "group-74-76",
    "transcript": "This is Harold Rosen, with WKRN News, reporting from the newly opened Bradford Opera House. The building is ultramodern, and when plans for its construction were announced, locals expressed their concern about it. It's located right next to historic city hall, the oldest building in the city. But so far, residents who have visited seem to like it. In spite of its modern look, those who have been inside are impressed. The atrium is beautifully decorated, the theater is equipped with a state-of-the-art sound system, and, of course, the music program is spectacular. The schedule for this season's performances can be found on the WKRN Website.",
    "questionText": "76: What can the listeners do on a Web site?",
    "options": [
      "Purchase event merchandise",
      "Read reviews",
      "Register for a newsletter",
      "View a performance schedule"
    ],
    "correctAnswer": 3,
    "explanation": "เฉลยข้อ D: เพราะในช่วงท้ายของรายงานข่าวระบุว่า ผู้ฟังที่สนใจสามารถเข้าไปตรวจสอบตารางเวลาและกำหนดการแสดงประจำฤดูกาลนี้เพิ่มเติมได้ทางเว็บไซต์ของสำนักข่าว",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/74-76.mp3"
  },
  {
    "id": 77,
    "groupId": "group-77-79",
    "transcript": "Hi , my name is Tomoko. I saw an advertisement for your motorcycle, and I'm interested in purchasing it. But I have a concern about the price. It's a little high considering it's a few years old. Could you lower the price by two hundred dollars? I also read in the ad that you'd be willing to drop the motorcycle off at the buyer's house, but I live an hour away so I don't want to make you drive too far. My friend and I can come pick it up on Saturday, if you accept my offer. Give me a call back tonight at 555-0108. Thanks.",
    "questionText": "77: Why is the speaker calling?",
    "options": [
      "To report an accident",
      "To inquire about an advertisement",
      "To point out a mistake",
      "To give driving directions"
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะโทโมโกะโทรมาสอบถามรายละเอียดหลังจากเห็นข้อความประกาศโฆษณาขายรถจักรยานยนต์มือสอง และเธอมีความสนใจที่จะขอซื้อรถคันดังกล่าว",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/77-79.mp3"
  },
  {
    "id": 78,
    "groupId": "group-77-79",
    "transcript": "Hi , my name is Tomoko. I saw an advertisement for your motorcycle, and I'm interested in purchasing it. But I have a concern about the price. It's a little high considering it's a few years old. Could you lower the price by two hundred dollars? I also read in the ad that you'd be willing to drop the motorcycle off at the buyer's house, but I live an hour away so I don't want to make you drive too far. My friend and I can come pick it up on Saturday, if you accept my offer. Give me a call back tonight at 555-0108. Thanks.",
    "questionText": "78: What does the speaker say she is concerned about?",
    "options": [
      "A selling price",
      "The cost of a delivery",
      "An application requirement",
      "The time of an event"
    ],
    "correctAnswer": 0,
    "explanation": "เฉลยข้อ A: เพราะผู้โทรแสดงความกังวลเกี่ยวกับราคาขายที่ตั้งไว้ โดยมองว่าค่อนข้างสูงเกินไปหน่อยเมื่อพิจารณาจากอายุการใช้งานของรถที่ผ่านมาแล้วหลายปี",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/77-79.mp3"
  },
  {
    "id": 79,
    "groupId": "group-77-79",
    "transcript": "Hi , my name is Tomoko. I saw an advertisement for your motorcycle, and I'm interested in purchasing it. But I have a concern about the price. It's a little high considering it's a few years old. Could you lower the price by two hundred dollars? I also read in the ad that you'd be willing to drop the motorcycle off at the buyer's house, but I live an hour away so I don't want to make you drive too far. My friend and I can come pick it up on Saturday, if you accept my offer. Give me a call back tonight at 555-0108. Thanks.",
    "questionText": "79: What does the speaker offer to do?",
    "options": [
      "Test a product",
      "E-mail a contract",
      "Pick up an item",
      "Provide a photograph"
    ],
    "correctAnswer": 2,
    "explanation": "เฉลยข้อ C: เพราะผู้หญิงเสนอเงื่อนไขว่าหากคนขายยอมลดราคาให้สองร้อยดอลลาร์ เธอและเพื่อนจะขับรถเดินทางมารับรถจักรยานยนต์คันนี้ด้วยตัวเองในวันเสาร์เพื่อไม่ให้คนขายต้องขับมาส่งไกล",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/7 .mp3"
  },
  {
    "id": 80,
    "groupId": "group-80-82",
    "transcript": "OK everyone, this concludes our training on advanced hairstyling techniques. We hope you learned how combining products and tools can help you create new and exciting hairstyles for your clients. You'll notice on the way out that I placed some surveys by the door. And let me remind you that there are only a few openings left for our upcoming workshop on hair coloring, so be sure to sign up soon if you're interested. Have a great afternoon!",
    "questionText": "80: Who most likely are the listeners?",
    "options": [
      "Marketing specialists",
      "Fashion models",
      "Interior designers",
      "Hairstylists"
    ],
    "correctAnswer": 3,
    "explanation": "เฉลยข้อ D: เพราะผู้พูดกล่าวสรุปจบโครงการฝึกอบรมเกี่ยวกับการใช้เทคนิคจัดแต่งทรงผมขั้นสูง และแนะนำเครื่องมือต่างๆ สำหรับสร้างสรรค์ทรงผมใหม่ๆ ให้กับลูกค้าของพวกเขา",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/80-82.mp3"
  },
  {
    "id": 81,
    "groupId": "group-80-82",
    "transcript": "OK everyone, this concludes our training on advanced hairstyling techniques. We hope you learned how combining products and tools can help you create new and exciting hairstyles for your clients. You'll notice on the way out that I placed some surveys by the door. And let me remind you that there are only a few openings left for our upcoming workshop on hair coloring, so be sure to sign up soon if you're interested. Have a great afternoon!",
    "questionText": "81: What does the speaker imply when she says, \"I placed some surveys by the door\"?",
    "options": [
      "Her documents are missing.",
      "She hopes to receive feedback.",
      "Participants should depart promptly.",
      "A task has already been completed."
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะผู้พูดแจ้งว่าเธอได้วางแบบสอบถามความคิดเห็น (surveys) ไว้ที่บริเวณประตูทางออก เพื่อมุ่งหวังที่จะได้รับข้อมูลป้อนกลับและการประเมินผลการฝึกอบรมจากผู้เข้าร่วมทุกคน",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/80-82.mp3"
  },
  {
    "id": 82,
    "groupId": "group-80-82",
    "transcript": "OK everyone, this concludes our training on advanced hairstyling techniques. We hope you learned how combining products and tools can help you create new and exciting hairstyles for your clients. You'll notice on the way out that I placed some surveys by the door. And let me remind you that there are only a few openings left for our upcoming workshop on hair coloring, so be sure to sign up soon if you're interested. Have a great afternoon!",
    "questionText": "82: What does the speaker remind the listeners about?",
    "options": [
      "Contacting clients",
      "Signing up for a workshop",
      "Submitting a personal profile",
      "Taking a brochure"
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะผู้พูดเอ่ยเตือนความจำกลุ่มผู้ฟังว่า ที่นั่งสำหรับเข้าร่วมกิจกรรมเวิร์กชอปเรื่องการทำสีผมที่กำลังจะจัดขึ้นเหลือโควตาอีกไม่มากแล้ว จึงขอให้รีบไปลงชื่อสมัครโดยเร็ว",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/80-82.mp3"
  },
  {
    "id": 83,
    "groupId": "group-83-85",
    "transcript": "Thanks for listening to KQSP Radio. Remember to tune in next Saturday evening for our tenth-anniversary celebration. We'll be playing the top ten songs of the past decade, selected by you, the listeners. There's still time to vote for your favorite song. You can do that by sending a text message to 5143. The songs with the most votes will be played during our show next Saturday evening. And coming up after a short break, we've got a live in-studio interview with pop singer Ezra Ortiz. He'll be telling us about his upcoming world tour.",
    "questionText": "83: According to the speaker, what will happen next Saturday?",
    "options": [
      "A recording session",
      "A fund-raising dinner",
      "A grand opening",
      "An anniversary celebration"
    ],
    "correctAnswer": 3,
    "explanation": "เฉลยข้อ D: เพราะสถานีวิทยุเชิญชวนให้ผู้ฟังติดตามรับฟังการจัดรายการพิเศษฉลองครบรอบปีที่สิบ (tenth-anniversary celebration) ของทางสถานีในค่ำคืนวันเสาร์หน้า",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/83-85.mp3"
  },
  {
    "id": 84,
    "groupId": "group-83-85",
    "transcript": "Thanks for listening to KQSP Radio. Remember to tune in next Saturday evening for our tenth-anniversary celebration. We'll be playing the top ten songs of the past decade, selected by you, the listeners. There's still time to vote for your favorite song. You can do that by sending a text message to 5143. The songs with the most votes will be played during our show next Saturday evening. And coming up after a short break, we've got a live in-studio interview with pop singer Ezra Ortiz. He'll be telling us about his upcoming world tour.",
    "questionText": "84: What does the speaker tell the listeners they can do?",
    "options": [
      "Vote for their favorite songs",
      "Take a quiz",
      "Post questions",
      "Donate money to the radio station"
    ],
    "correctAnswer": 0,
    "explanation": "เฉลยข้อ A: เพราะผู้จัดรายการบอกว่าผู้ฟังยังสามารถร่วมสนุกด้วยการส่งข้อความสั้นทางโทรศัพท์เข้ามาเพื่อร่วมลงคะแนนโหวตเลือกบทเพลงที่ตนเองชื่นชอบที่สุดในรอบทศวรรษได้",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/83-85.mp3"
  },
  {
    "id": 85,
    "groupId": "group-83-85",
    "transcript": "Thanks for listening to KQSP Radio. Remember to tune in next Saturday evening for our tenth-anniversary celebration. We'll be playing the top ten songs of the past decade, selected by you, the listeners. There's still time to vote for your favorite song. You can do that by sending a text message to 5143. The songs with the most votes will be played during our show next Saturday evening. And coming up after a short break, we've got a live in-studio interview with pop singer Ezra Ortiz. He'll be telling us about his upcoming world tour.",
    "questionText": "85: What will Ezra Ortiz be discussing next?",
    "options": [
      "His song-writing process",
      "The release of a new song",
      "An upcoming tour",
      "Music programs in schools"
    ],
    "correctAnswer": 2,
    "explanation": "เฉลยข้อ C: เพราะดีเจแจ้งว่าหลังจากพักโฆษณาสั้นๆ จะมีบทสัมภาษณ์สดของนักร้องเพลงป็อปชื่อดัง เอซรา ออร์ติซ ซึ่งเขาจะมาพูดคุยเปิดใจเกี่ยวกับตารางการเดินสายทัวร์คอนเสิร์ตรอบโลกที่กำลังจะเกิดขึ้น",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/83-85.mp3"
  },
  {
    "id": 86,
    "groupId": "group-86-88",
    "transcript": "Hello, I'm calling from Mahmud's Printers about the business cards your company recently ordered from my printing shop. That's a very big order. So I wanted to talk with you before going through with it. Of course, I'll send you an example of the card before we print so many, but please call me back to confirm the number. Oh, and regarding the color scheme. I don't have the exact pale yellow you want for your logo, so I had to change that. I do have a similar hue, though-I hope you like it. Thanks!",
    "questionText": "86: What does the speaker imply when he says, \"That's a very big order\"?",
    "options": [
      "He cannot fill an order in time.",
      "He will charge more than usual.",
      "He needs a favor from the listener.",
      "He thinks a request may be incorrect."
    ],
    "correctAnswer": 3,
    "explanation": "เฉลยข้อ D: เพราะช่างพิมพ์บอกว่ายอดสั่งทำนามบัตรรอบนี้มีจำนวนเยอะมาก เขาจึงต้องโทรมาตรวจสอบเพื่อความแน่ใจอีกครั้งเพราะเกรงว่าลูกค้าอาจจะใส่จำนวนตัวเลขคลาดเคลื่อนหรือสั่งผิดพลาด",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/86-88.mp3"
  },
  {
    "id": 87,
    "groupId": "group-86-88",
    "transcript": "Hello, I'm calling from Mahmud's Printers about the business cards your company recently ordered from my printing shop. That's a very big order. So I wanted to talk with you before going through with it. Of course, I'll send you an example of the card before we print so many, but please call me back to confirm the number. Oh, and regarding the color scheme. I don't have the exact pale yellow you want for your logo, so I had to change that. I do have a similar hue, though-I hope you like it. Thanks!",
    "questionText": "87: What will the speaker send the listener?",
    "options": [
      "A signed paper",
      "A product sample",
      "A color printer",
      "A catalog"
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะช่างพิมพ์บอกว่าจะทำการจัดส่งตัวอย่างชิ้นงานนามบัตร (product sample / example) ไปให้ลูกค้าตรวจสอบความถูกต้องและดูหน้าตาก่อนที่จะเริ่มเดินเครื่องสั่งพิมพ์จริงในปริมาณมากๆ",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/86-88.mp3"
  },
  {
    "id": 88,
    "groupId": "group-86-88",
    "transcript": "Hello, I'm calling from Mahmud's Printers about the business cards your company recently ordered from my printing shop. That's a very big order. So I wanted to talk with you before going through with it. Of course, I'll send you an example of the card before we print so many, but please call me back to confirm the number. Oh, and regarding the color scheme. I don't have the exact pale yellow you want for your logo, so I had to change that. I do have a similar hue, though-I hope you like it. Thanks!",
    "questionText": "88: What does the speaker say he has changed?",
    "options": [
      "The color of a design",
      "The placement of some information",
      "The time of an appointment",
      "The location of a sign"
    ],
    "correctAnswer": 0,
    "explanation": "เฉลยข้อ A: เพราะผู้พูดแจ้งว่าสีเหลืองอ่อนที่ระบุมาสำหรับทำโลโก้นั้นที่ร้านไม่มีหมึกเฉดที่ตรงเป๊ะ เขาจึงจำเป็นต้องเปลี่ยนไปใช้สีเฉดอื่นที่มีโทนสีใกล้เคียงกันแทน",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/86-88.mp3"
  },
  {
    "id": 89,
    "groupId": "group-89-91",
    "transcript": "Hello , I'm the director of the Human Resources Department, and I'm here to announce a new system for keeping track of your work hours. Instead of scanning employee ID cards at the Security Desk, we have instituted an online system for reporting when you arrive and leave work. Talk to your Human Resources representative during their office hours to get more detailed information about this new process. You'll be glad to know that the new system, which will be fully operational by the beginning of next week, will allow the Payroll Department to send out paychecks faster.",
    "questionText": "89: What is the announcement mainly about?",
    "options": [
      "Finishing a team project",
      "Reporting work hours",
      "Issuing ID badges",
      "Hiring more workers"
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะผู้อำนวยการฝ่ายทรัพยากรบุคคลมาแจ้งเรื่องการเปลี่ยนระบบบันทึกเวลาเข้าและออกจากการทำงานของพนักงาน (reporting work hours) จากเดิมที่ต้องสแกนบัตรที่โต๊ะรักษาความปลอดภัยมาเป็นระบบออนไลน์แทน",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/89-91.mp3"
  },
  {
    "id": 90,
    "groupId": "group-89-91",
    "transcript": "Hello , I'm the director of the Human Resources Department, and I'm here to announce a new system for keeping track of your work hours. Instead of scanning employee ID cards at the Security Desk, we have instituted an online system for reporting when you arrive and leave work. Talk to your Human Resources representative during their office hours to get more detailed information about this new process. You'll be glad to know that the new system, which will be fully operational by the beginning of next week, will allow the Payroll Department to send out paychecks faster.",
    "questionText": "90: According to the speaker, how can employees get more information?",
    "options": [
      "By watching a video",
      "By reading a file",
      "By filling out a form",
      "By speaking with a representative"
    ],
    "correctAnswer": 3,
    "explanation": "เฉลยข้อ D: เพราะในประกาศระบุว่าพนักงานคนใดที่ต้องการรายละเอียดหรือข้อมูลเพิ่มเติมเกี่ยวกับขั้นตอนระบบใหม่นี้ สามารถเข้าไปพูดคุยสอบถามกับตัวแทนฝ่ายบุคคล (representative) ได้ในช่วงเวลาทำการ",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/89-91.mp3"
  },
  {
    "id": 91,
    "groupId": "group-89-91",
    "transcript": "Hello , I'm the director of the Human Resources Department, and I'm here to announce a new system for keeping track of your work hours. Instead of scanning employee ID cards at the Security Desk, we have instituted an online system for reporting when you arrive and leave work. Talk to your Human Resources representative during their office hours to get more detailed information about this new process. You'll be glad to know that the new system, which will be fully operational by the beginning of next week, will allow the Payroll Department to send out paychecks faster.",
    "questionText": "91: What is an advantage of the new system?",
    "options": [
      "Company sales will increase.",
      "Computer security will improve.",
      "Staff will be paid more quickly.",
      "Project timelines will be updated electronically."
    ],
    "correctAnswer": 2,
    "explanation": "เฉลยข้อ C: เพราะผู้พูดชี้แจงข้อดีของระบบบันทึกเวลาออนไลน์ว่า จะช่วยให้ฝ่ายบัญชีและการเงินสามารถประมวลผลข้อมูลและจัดส่งเงินเดือนรวมถึงเช็คค่าจ้างให้แก่พนักงานได้รวดเร็วยิ่งขึ้นกว่าเดิม (paid more quickly)",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/89-91.mp3"
  },
  {
    "id": 92,
    "groupId": "group-92-94",
    "transcript": "Thanks for coming to this product development meeting. As you know, we've recently reduced the amount of packaging we use for our TuckerTreats snack bags, in order to be more eco friendly. But customers aren't happy because our new packaging now offers smaller quantities of Tucker Treats at their original prices, which means they're paying more for less food. Our president, Young Soo Lee, has approved changing the size of the packaging to offer larger quantities of snacks at the original prices. So, your next task is to come up with a new package design to hold the larger quantities, while still using less plastic.",
    "questionText": "92: What department does the speaker most likely work in?",
    "options": [
      "Product Development",
      "Advertising",
      "Legal Affairs",
      "Finance"
    ],
    "correctAnswer": 0,
    "explanation": "เฉลยข้อ A: เพราะผู้พูดกล่าวต้อนรับทุกคนเข้าสู่การประชุมฝ่ายพัฒนาผลิตภัณฑ์ใหม่ (Product Development) ของบริษัท",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/92-94.mp3"
  },
  {
    "id": 93,
    "groupId": "group-92-94",
    "transcript": "Thanks for coming to this product development meeting. As you know, we've recently reduced the amount of packaging we use for our TuckerTreats snack bags, in order to be more eco friendly. But customers aren't happy because our new packaging now offers smaller quantities of Tucker Treats at their original prices, which means they're paying more for less food. Our president, Young Soo Lee, has approved changing the size of the packaging to offer larger quantities of snacks at the original prices. So, your next task is to come up with a new package design to hold the larger quantities, while still using less plastic.",
    "questionText": "93: What are customers' complaints about Tucker Treats?",
    "options": [
      "The ingredient list is inaccurate.",
      "The food amount has decreased.",
      "The packaging is hard to open.",
      "The new flavor does not taste good."
    ],
    "correctAnswer": 1,
    "explanation": "เฉลยข้อ B: เพราะผู้พูดสรุปเรื่องร้องเรียนจากลูกค้าว่า ซองขนมแบบลดโลกร้อนเวอร์ชันใหม่มีปริมาณขนมข้างในน้อยลงแต่กลับขายในราคาเท่าเดิม ทำให้ลูกค้ารู้สึกว่าได้ของน้อยลง (food amount has decreased)",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/92-94.mp3"
  },
  {
    "id": 94,
    "groupId": "group-92-94",
    "transcript": "Thanks for coming to this product development meeting. As you know, we've recently reduced the amount of packaging we use for our TuckerTreats snack bags, in order to be more eco friendly. But customers aren't happy because our new packaging now offers smaller quantities of Tucker Treats at their original prices, which means they're paying more for less food. Our president, Young Soo Lee, has approved changing the size of the packaging to offer larger quantities of snacks at the original prices. So, your next task is to come up with a new package design to hold the larger quantities, while still using less plastic.",
    "questionText": "94: What task does the speaker assign to the listeners?",
    "options": [
      "Creating some designs",
      "Conducting market research",
      "Demonstrating a procedure",
      "Finding potential vendors"
    ],
    "correctAnswer": 0,
    "explanation": "เฉลยข้อ A: เพราะผู้พูดมอบหมายงานชิ้นต่อไปให้ทีมงานไปช่วยกันคิดค้นและออกแบบบรรจุภัณฑ์ซองขนมขนาดใหม่ (Creating some designs) ที่สามารถบรรจุขนมในปริมาณที่มากขึ้นได้โดยยังคงใช้พลาสติกในปริมาณที่ลดลง",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/92-94.mp3"
  },
  {
    "id": 95,
    "groupId": "group-95-97",
    "transcript": "Hi Elizabeth, it's Becca. Thanks a lot for agreeing to water my plants and get the mail at my jewelry store while I'm in Singapore. This is my first buying trip, and I'm excited about finding new materials for my jewelry. I left the keys in an envelope under your door. The key to my store is the longest one with the square top, and the smallest one is for the mailbox. I e-mailed instructions about caring for each of the plants. Don't worry, though-I only have a few. Thanks again for your help, and see you next week.",
    "questionText": "95: Why is the speaker traveling to Singapore?",
    "images": ["./assets/images/ฟ้าม่วง LC2/BP 95-97.png"],
    "options": [
      "To see family",
      "To go sightseeing",
      "To purchase supplies",
      "To meet overseas clients"
    ],
    "correctAnswer": 2,
    "explanation": "เฉลยข้อ C: เพราะเบ็คก้าบอกว่าทริปเดินทางไปสิงคโปร์ในครั้งนี้เป็นทริปจัดซื้อของครั้งแรกของเธอ ซึ่งเธอรู้สึกตื่นเต้นมากที่จะได้ไปเสาะหาวัสดุและวัตถุดิบใหม่ๆ (purchase supplies / materials) มาใช้ในการทำเครื่องประดับของร้าน",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/95-97.mp3"
  },
  {
    "id": 96,
    "groupId": "group-95-97",
    "transcript": "Hi Elizabeth, it's Becca. Thanks a lot for agreeing to water my plants and get the mail at my jewelry store while I'm in Singapore. This is my first buying trip, and I'm excited about finding new materials for my jewelry. I left the keys in an envelope under your door. The key to my store is the longest one with the square top, and the smallest one is for the mailbox. I e-mailed instructions about caring for each of the plants. Don't worry, though-I only have a few. Thanks again for your help, and see you next week.",
    "questionText": "96: Look at the graphic. Which key is for the store?",
    "images": ["./assets/images/ฟ้าม่วง LC2/96.png"],
    "options": [
      "Key #1",
      "Key #2",
      "Key #3",
      "Key #4"
    ],
    "correctAnswer": 2,
    "explanation": "เฉลยข้อ C: เพราะเบ็คก้าระบุรายละเอียดของกุญแจไว้ว่า กุญแจสำหรับเปิดร้านเครื่องประดับจะเป็นลูกที่ยาวที่สุดและมีหัวกุญแจเป็นรูปทรงสี่เหลี่ยม ซึ่งตรงกับคำอธิบายของหมายเลข 3 (Key #3)",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/95-97.mp3"
  },
  {
    "id": 97,
    "groupId": "group-95-97",
    "transcript": "Hi Elizabeth, it's Becca. Thanks a lot for agreeing to water my plants and get the mail at my jewelry store while I'm in Singapore. This is my first buying trip, and I'm excited about finding new materials for my jewelry. I left the keys in an envelope under your door. The key to my store is the longest one with the square top, and the smallest one is for the mailbox. I e-mailed instructions about caring for each of the plants. Don't worry, though-I only have a few. Thanks again for your help, and see you next week.",
    "questionText": "97: What did the speaker send in an e-mail?",
    "options": [
      "Special care instructions",
      "A travel itinerary",
      "Store blueprints",
      "A technology article"
    ],
    "correctAnswer": 0,
    "explanation": "เฉลยข้อ A: เพราะเบ็คก้าแจ้งเพื่อนว่าเธอได้ส่งอีเมลอธิบายขั้นตอนและวิธีการดูแลรักษาต้นไม้แต่ละต้นภายในร้านเอาไว้ให้เรียบร้อยแล้ว (Special care instructions)",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/95-97.mp3"
  },
  {
    "id": 98,
    "groupId": "group-98-100",
    "transcript": "Next week marks the beginning of our holiday clearance sale here at Sarma's Department Store. Now, since this is such an important event, I'll be asking each of you to work an extra shift or two over the course of the week. We really need a total team effort in order to make this sale a success. This is the coupon that'll be printed in local newspapers. You'll notice that we're offering the largest discount on the merchandise that, truthfully, has not been selling very well this season. We'll be actively promoting it to reduce our inventory and make room for the new merchandise that we'll be receiving in April.",
    "questionText": "98: What does the speaker ask the listeners to do?",
    "images": ["./assets/images/ฟ้าม่วง LC2/BP 98-100.png"],
    "options": [
      "Take inventory",
      "Decorate the store",
      "Work extra hours",
      "Hand out coupons"
    ],
    "correctAnswer": 2,
    "explanation": "เฉลยข้อ C: เพราะผู้จัดการห้างสรรพสินค้าเอ่ยปากขอความร่วมมือให้พนักงานทุกคนช่วยเข้าเวรทำงานล่วงเวลาเพิ่มขึ้นอีกหนึ่งถึงสองกะ (Work extra hours / extra shift) ในช่วงสัปดาห์หน้าเนื่องจากเป็นช่วงเทศกาลเซลล์ครั้งใหญ่",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/98-100.mp3"
  },
  {
    "id": 99,
    "groupId": "group-98-100",
    "transcript": "Next week marks the beginning of our holiday clearance sale here at Sarma's Department Store. Now, since this is such an important event, I'll be asking each of you to work an extra shift or two over the course of the week. We really need a total team effort in order to make this sale a success. This is the coupon that'll be printed in local newspapers. You'll notice that we're offering the largest discount on the merchandise that, truthfully, has not been selling very well this season. We'll be actively promoting it to reduce our inventory and make room for the new merchandise that we'll be receiving in April.",
    "questionText": "99: Look at the graphic. According to the speaker, what merchandise has not sold well?",
    "options": [
      "Shoes",
      "Clothing",
      "Home décor",
      "Luggage"
    ],
    "correctAnswer": 3,
    "explanation": "เฉลยข้อ D: เพราะผู้พูดอธิบายว่าคูปองส่วนลดในหนังสือพิมพ์จะเน้นมอบส่วนลดเปอร์เซ็นต์ที่สูงที่สุดให้กับกลุ่มสินค้าประเภทกระเป๋าเดินทาง (Luggage) ซึ่งเป็นสินค้าที่ทำยอดขายได้ไม่ดีนักในฤดูกาลนี้เพื่อเร่งระบายสต็อกออกไป",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/98-100.mp3"
  },
  {
    "id": 100,
    "groupId": "group-98-100",
    "transcript": "Next week marks the beginning of our holiday clearance sale here at Sarma's Department Store. Now, since this is such an important event, I'll be asking each of you to work an extra shift or two over the course of the week. We really need a total team effort in order to make this sale a success. This is the coupon that'll be printed in local newspapers. You'll notice that we're offering the largest discount on the merchandise that, truthfully, has not been selling very well this season. We'll be actively promoting it to reduce our inventory and make room for the new merchandise that we'll be receiving in April.",
    "questionText": "100: According to the speaker, what will happen in April?",
    "options": [
      "New merchandise will be arriving.",
      "A store department will be expanded.",
      "A Web site will be improved.",
      "Employee work schedules will change."
    ],
    "correctAnswer": 0,
    "explanation": "เฉลยข้อ A: เพราะผู้จัดการแจ้งเหตุผลในการเร่งระบายสินค้าเก่าออกไป ว่าต้องการเคลียร์พื้นที่ในโกดังและหน้าร้านเพื่อเตรียมรองรับกลุ่มสินค้าล็อตใหม่ที่จะเดินทางมาถึงห้างในช่วงเดือนเมษายนที่จะถึงนี้ (New merchandise will be arriving.)",
    "audioUrl": "./assets/audio/ฟ้าม่วง LC2/98-100.mp3"
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