// Definición de las preguntas del quiz
const allQuestions = {
	
	/*----------------------------------------------------------------------------------------*/	
	/*----------------- CARACTERISTICAS Y CONFIGURACION DE LA AERONAVE V.12 ------------------*/
	/*----------------------------------------------------------------------------------------*/
	
    battery1: {
		title: "Características y Configuración",
		subtitle: "WB A-330/350",
		questions: [
        {
		/* Pregunta 1 */
        question: "1. 2.4.1\nWhat does the amber light on an ACP (AREA CALL PANEL) indicate?",
        options: [
            "A) Emergency call whether it is steady or flashing.",
            "B) Call from a lavatory if it is flashing.",
            "C) Call between CC stations if it is steady.",
            "D) Smoke in the lavatory closest to the ACP that lights up if it is flashing and call from the lavatory if it is steady."
        ],
        answer: 3
    },
    {
        /* Pregunta 2 */
        question: "2. 2.4.2\nHow many lights are displayed on the ACP (AREA CALL PANEL)?",
        options: [
            "A) 3: one amber, one pink and one blue.",
            "B) 5: two amber, two blue and <u>one red</u>.",
            "C) 2: one red and one amber.",
            "D) 5: two amber, one blue and two red."
        ],
        answer: 1
    },
    {
        /* Pregunta 3 */
        question: "3. 2.4.3\nA350 How do we perform a normal call to the cockpit from the cabin attendant stations?",
        options: [
            "A) CAPT.",
            "B) PRIO CAPT.",
            "C) CAPT + SEND.",
            "D) PRIO CAPT + SEND."
        ],
        answer: 2
    },
    {
        /* Pregunta 4 */
        question: "4. 2.4.4\nA350 What does the steady amber light on the crew rests keypad mean?",
        options: [
            "A) The code entered is not correct.",
            "B) Door lock control unit failure.",
            "C) OPEN DOOR button failure.",
            "D) Confirmation of having pressed a key."
        ],
        answer: 1
    },
    {
        /* Pregunta 5 */
        question: "5. 2.4.5\nA350 How are the A350 doors qualified?",
        options: [
            "A) A-A-A-A.",
            "B) A-A-A-C.",
            "C) C-A-A-A.",
            "D) A-C-A-C."
        ],
        answer: 2
    },
    {
        /* Pregunta 6 */
        question: "6. 2.4.6\nA350 What are the slides for doors 1 and 1R like?",
        options: [
            "A) Single-lane slidesrafts.",
            "B) Dual-lane slidesrafts.",
            "C) Single-lane slide and flotation element.",
            "D) Dual-lane slides and flotation element."
        ],
        answer: 0
    },
    {
        /* Pregunta 7 */
        question: "7. 2.4.7\nA350-What does the IFAR system consist of?",
        options: [
            "A) It is the in-flight entertainment system.",
            "B) It is a part of the head end of the inflatable structure of the single-lane sliderafts at doors. It reduces the width of each doorway.",
            "C) It is the FCRC fire detection and extinction system.",
            "D) It is the CCRC fire detection and extinction system."
        ],
        answer: 1
    },
    {
        /* Pregunta 8 */
        question: "8. 2.4.8\nA350-Where is the gust lock on the A350 doors located?",
        options: [
            "A) On the handle of the same door.",
            "B) Under the observation window.",
            "C) Above the pneumatic opening system.",
            "D) A350 doors do not have any gust lock."
        ],
        answer: 0
    },
    {
        /* Pregunta 9 */
        question: "9. 2.4.9\nA350-How do we perform a normal call to the purser from the cabin attendant stations?",
        options: [
            "A) PURS + SEND.",
            "B) By pressing PURS directly.",
            "C) PRIO + PURS.",
            "D) PRIO + PURS + SEND."
        ],
        answer: 0
    },
    {
        /* Pregunta 10 */
        question: "10. 2.4.10\nA350-What can we control from the AAP?",
        options: [
            "A) The entertainment screens.",
            "B) The EVAC CMD button.",
            "C) The lights in the passenger cabin areas, warnings of evacuation signals and warning of smoke in lavatories.",
            "D) Passenger calls from lavatories."
        ],
        answer: 2
    },
    {
        /* Pregunta 11 */
        question: "11. 2.4.11\nWhich components are connected to the CIDS (Cabin Intercommunication Data System)?",
        options: [
            "A) Smoke detectors.",
            "B) WI-FI connectivity.",
            "C) Cockpit door.",
            "D) Flight controls."
        ],
        answer: 0
    },
    {
        /* Pregunta 12 */
        question: "12. 2.4.12\nWhere is the FES located?",
        options: [
            "A) In the after galley.",
            "B) In the CCRC of the A350.",
            "C) In the LDMCRC of the A330.",
            "D) In the toilets."
        ],
        answer: 2
    },
    {
        /* Pregunta 13 */
        question: "13. 2.4.13\nWhich of these passenger announcements have priority over the rest?",
        options: [
            "A) Announcements from the cockpit.",
            "B) Direct PA.",
            "C) Announcements from cabin crew stations.",
            "D) Pre-recorded announcements."
        ],
        answer: 0
    },
    {
        /* Pregunta 14 */
        question: "14. 2.4.14\nWhat does the switch CAPT & PURS/ CAPT set to the CAPT POSITION mean?",
        options: [
            "A) It means that you can activate the emergency lights just from the cockpit.",
            "B) It does not matter where the switch button CAPT & PURS/ CAPT is.",
            "C) In IBERIA flights this switch is not activated.",
            "D) It means that only the captain can initiate the evacuation alert from the cockpit."
        ],
        answer: 3
    },
    {
        /* Pregunta 15 */
        question: "15. 2.4.15\nIn the event of an abnormal or an emergency situation in the cabin, how do you perform an emergency call to cockpit from the cabin attendant stations?",
        options: [
            "A) INTPH + PRIO CAPT.",
            "B) PRIO CAPT+PTT.",
            "C) PRIO CAPT.",
            "D) INTPH+PRIO CAPT+PTT."
        ],
        answer: 2
    },
    {
        /* Pregunta 16 */
        question: "16. 2.4.16\nWhat is the priority order in case of reduction of the crew to 6 cabin crew members?",
        options: [
            "A) 1-2-4-3-2R-3R.",
            "B) 1-2-3-4-2R-3R.",
            "C) 1-2-4-3-3R-2R.",
            "D) 1-2-4-3-1R-2."
        ],
        answer: 2
    },
    {
        /* Pregunta 17 */
        question: "17. 2.4.17\nWhere are the AIPs located?",
        options: [
            "A) They are located near all the cabin crew stations, in the galleys and in the crew rest compartments.",
            "B) They are located near the cockpit door.",
            "C) They are located near the LDMCR.",
            "D) They are located in the galleys."
        ],
        answer: 0
    },
    {
        /* Pregunta 18 */
        question: "18. 2.4.18\nIn case of excessive cabin altitude or depressurization, when will the oxygen masks drop down?",
        options: [
            "A) When the cabin altitude reaches 14,000ft.",
            "B) When the cabin altitude reaches 9,550ft.",
            "C) When the cabin altitude reaches 12,000ft.",
            "D) When the cabin altitude reaches 11,300ft."
        ],
        answer: 0
    },
    {
        /* Pregunta 19 */
        question: "19. 2.4.19\nHow many flotation devices can be found on the A330?",
        options: [
            "A) 2.",
            "B) 4.",
            "C) 6.",
            "D) 8."
        ],
        answer: 0
    },
    {
        /* Pregunta 20 */
        question: "20. 2.4.20\nWhat does the steady blue light on an ACP indicate?",
        options: [
            "A) Emergency call whether it is steady or flashing.",
            "B) Call from a lavatory if it is flashing.",
            "C) Call from a passenger seat.",
            "D) Smoke in the lavatory closest to the ACP that lights up if it is flashing and call from the lavatory if it is steady."
        ],
        answer: 2
    },
    {
        /* Pregunta 21 */
        question: "21. 2.4.21\nFor how many passengers is the A330 certified?",
        options: [
            "A) 440.",
            "B) 375.",
            "C) 314.",
            "D) 292."
        ],
        answer: 1
    },
    {
        /* Pregunta 22 */
        question: "22. 2.4.22\nHow many CABIN ATTENDANT SEATS are on the A330-300?",
        options: [
            "A) 8.",
            "B) 9.",
            "C) 10.",
            "D) 12."
        ],
        answer: 2
    },
    {
        /* Pregunta 23 */
        question: "23. 2.4.23\nHow many CABIN ATTENDANT SEATS are on the A330-200?",
        options: [
            "A) 10.",
            "B) 9.",
            "C) 8.",
            "D) 12."
        ],
        answer: 1
    },
    {
        /* Pregunta 24 */
        question: "24. 2.4.24\nA330-Where is the Cabin Crew Rest Compartment located?",
        options: [
            "A) It is located near galley number one.",
            "B) It is located at the back of the plane.",
            "C) It is located near doors 3L/R in the lavatories area.",
            "D) It is located near the cockpit door."
        ],
        answer: 2
    },
    {
        /* Pregunta 25 */
        question: "25. 2.4.25\nThe cockpit sliding window:",
        options: [
            "A) Cannot be used as a crew emergency exit.",
            "B) Can be opened both from the inside and from the outside.",
            "C) Can only be opened from the inside.",
            "D) Has one rope above the third pilot seat."
        ],
        answer: 2
    },
    {
        /* Pregunta 26 */
        question: "26. 2.4.26\nWhere can we find the manual inflation handle on the exits?",
        options: [
            "A) Ground level right hand side.",
            "B) Ground level left hand side.",
            "C) There is no manual inflation handle.",
            "D) Next to the gust lock release button."
        ],
        answer: 0
    },
    {
        /* Pregunta 27 */
        question: "27. 2.4.27\nWhere can we find information about abnormal slide or door pressures?",
        options: [
            "A) On all aircraft AIPs, along with a flashing red light.",
            "B) On the DOORS/SLIDES page of the FAP, which will be displayed automatically if there is an alert running.",
            "C) On the AAP of the area.",
            "D) On the nearest ACP."
        ],
        answer: 1
    },
    {
        /* Pregunta 28 */
        question: "28. 2.4.28\nWhere are the ACPs located?",
        options: [
            "A) On the cabin wall next to the AIPs.",
            "B) There is one in the cockpit and another for each galley.",
            "C) In the galleys.",
            "D) In the entrance areas and over the aisles."
        ],
        answer: 3
    },
    {
        /* Pregunta 29 */
        question: "29. 2.4.29\nWhere is the type C exit slide located?",
        options: [
            "A) On the door sill.",
            "B) On the overhead bin.",
            "C) On the aircraft fuselage.",
            "D) There is no slide on Type 'C' exits."
        ],
        answer: 0
    },
    {
        /* Pregunta 30 */
        question: "30. 2.4.30\nAbout the Flight Crew Rest Compartment, which answer is correct?",
        options: [
            "A) It is dedicated to rest both passengers and crew members.",
            "B) It is certified as a taxi, takeoff and landing jump seat.",
            "C) Its door must be kept open during the entire flight.",
            "D) There is not any FCRC."
        ],
        answer: 1
    },
    {
        /* Pregunta 31 */
        question: "31. 2.4.31\nA350-The PAX SYS key:",
        options: [
            "A) Turns on the smoke detectors.",
            "B) Is installed on the Flight Attendant Panel (FAP).",
            "C) Turns off the cabin lights.",
            "D) Is located on the RCC."
        ],
        answer: 1
    },
    {
        /* Pregunta 32 */
        question: "32. 2.4.32\nWhat happens if we open an exit door from the outside with the slide armed?",
        options: [
            "A) There is no opening handle.",
            "B) It will deploy the slide.",
            "C) It will automatically disarm the slides.",
            "D) An alarm will be displayed in the cockpit."
        ],
        answer: 2
    },
    {
        /* Pregunta 33 */
        question: "33. 2.4.33\nA350-The number of passengers certified by Airbus is:",
        options: [
            "A) 348.",
            "B) 321.",
            "C) 375.",
            "D) 385."
        ],
        answer: 3
    },
    {
        /* Pregunta 34 */
        question: "34. 2.4.34\nA350 The Galley Power Isolator:",
        options: [
            "A) Switches on/off only the electrical power of ovens.",
            "B) Controls just the Air Cooling Unit (ACU).",
            "C) Switches on/off the electrical power of the entire galley.",
            "D) Locks the trolleys during TTL."
        ],
        answer: 2
    },
    {
        /* Pregunta 35 */
        question: "35. 2.4.35\nThe cabin crew order of priority is:",
        options: [
            "A) 1-2-3-4-3R-4R-2R-1R.",
            "B) 1-2-4-3-4R-3R-1R-2R.",
            "C) 1-2-4-3-3R-2R-4R-1R.",
            "D) 1-3-2-4-4R-2R-3R-1R."
        ],
        answer: 2
    },
    {
        /* Pregunta 36 */
        question: "36. 2.4.36\nWhat panels are controlled by the CIDS (Cabin Intercommunication Data System)?",
        options: [
            "A) FAP, AIP and ACP.",
            "B) FAP, AIP.",
            "C) AIP, ACP.",
            "D) Only the FAP."
        ],
        answer: 0
    },
    {
        /* Pregunta 37 */
        question: "37. 2.4.37\nHow many AAP (ADDITIONAL ATTENDANT PANEL) can be found in the passenger’s cabin of the A330?",
        options: [
            "A) 4.",
            "B) 2.",
            "C) 1.",
            "D) 3."
        ],
        answer: 1
    },
    {
        /* Pregunta 38 */
        question: "38. 2.4.38\nA350 - How many AAP can be found (CRCs included)?",
        options: [
            "A) 2.",
            "B) 3.",
            "C) 4.",
            "D) 1."
        ],
        answer: 2
    },
    {
        /* Pregunta 39 */
        question: "39. 2.4.39\nA350 - How many FAP can be found?",
        options: [
            "A) 1.",
            "B) 2.",
            "C) 3.",
            "D) 4."
        ],
        answer: 1
    },
    {
        /* Pregunta 40 */
        question: "40. 2.4.40\nHow many LED lights can be found on the AIP (ADDITIONAL INFORMATION PANEL)? What colours are they?",
        options: [
            "A) 2 lights; yellow and red.",
            "B) 3 lights; yellow, green and red.",
            "C) 2 lights; green and red.",
            "D) 3 lights; red and yellow."
        ],
        answer: 2
    },
    {
        /* Pregunta 41 */
        question: "41. 2.4.41\nHow does the ACP (AREA CALL PANEL) illuminate when a pax call button is pressed?",
        options: [
            "A) Steady blue.",
            "B) Flashing blue.",
            "C) Steady amber.",
            "D) Flashing amber."
        ],
        answer: 0
    },
    {
        /* Pregunta 42 */
        question: "42. 2.4.42\nHow does the ACP (AREA CALL PANEL) illuminate when a call between cabin crew stations is made?",
        options: [
            "A) Steady red.",
            "B) Flashing red.",
            "C) Steady amber.",
            "D) Flashing amber."
        ],
        answer: 0
    },
    {
        /* Pregunta 43 */
        question: "43. 2.4.43\nWhat communication has the highest priority?",
        options: [
            "A) EMER CALL or PRIO CAPT.",
            "B) INTPH ALL.",
            "C) PA ALL.",
            "D) PA Direct."
        ],
        answer: 0
    },
    {
        /* Pregunta 44 */
        question: "44. 2.4.44\nWhere can we find the emergency lights switches?",
        options: [
            "A) Only on the FAP.",
            "B) Only in the cockpit.",
            "C) Both on the FAP and in the cockpit.",
            "D) There is no activation switch."
        ],
        answer: 2
    },
    {
        /* Pregunta 45 */
        question: "45. 2.4.45\nHow does the 'Slide Armed' indicator illuminate?",
        options: [
            "A) Steady red light.",
            "B) Flashing red light.",
            "C) Steady white light.",
            "D) Flashing white light."
        ],
        answer: 2
    },
    {
        /* Pregunta 46 */
        question: "46. 2.4.46\nIn which position will we find the EVAC CMD switch in the cockpit?",
        options: [
            "A) Captain only.",
            "B) Purser only.",
            "C) Captain and purser.",
            "D) Captain and Maintenance."
        ],
        answer: 0
    },
    {
        /* Pregunta 47 */
        question: "47. 2.4.47\nHow many general water shut-off valves can be found?",
        options: [
            "A) 1 per cabin.",
            "B) 2 per galley.",
            "C) 2 per galley and lavatory.",
            "D) There is no such a valve."
        ],
        answer: 3
    },
    {
        /* Pregunta 48 */
        question: "48. 2.4.48\nWhat happens if the vacuum system is INOP?",
        options: [
            "A) Lavatories will not function during the whole flight.",
            "B) Lavatories will only function whilst on ground.",
            "C) Only lavatory 'A' will function.",
            "D) Lavatories will only work above a certain altitude."
        ],
        answer: 3
    },
    {
        /* Pregunta 49 */
        question: "49. 2.4.49\nWhat two indications can be found on the observation window?",
        options: [
            "A) Ped power and cabin pressure.",
            "B) Slide armed and cabin pressure.",
            "C) Cabin Pressure and seatbelt sign.",
            "D) Only cabin pressure sign."
        ],
        answer: 1
    },
    {
        /* Pregunta 50 */
        question: "50. 2.4.50\nHow does the 'Cabin Pressure' indicator illuminate?",
        options: [
            "A) Steady red light.",
            "B) Flashing red light.",
            "C) Steady white light.",
            "D) Flashing white light."
        ],
        answer: 1
    },
    {
        /* Pregunta 51 */
        question: "51. 2.4.51\nWhat indications do we find when an emergency call from the cockpit is made?",
        options: [
            "A) ACP (AREA CALL PANEL) illuminates flashing red.",
            "B) AIP (AREA INFORMATION PANEL) illuminates the green LED.",
            "C) 1 HIGH tone.",
            "D) A triple low chime."
        ],
        answer: 0
    },
    {
        /* Pregunta 52 */
        question: "52. 2.4.52\nHow many QDMs (QUICK DONNING MASK) can be found in the cockpit?",
        options: [
            "A) 3.",
            "B) 4.",
            "C) 2.",
            "D) 5."
        ],
        answer: 1
    },
    {
        /* Pregunta 53 */
        question: "53. 2.4.53\nA350-What kind of slide is associated to a type 'C' exit?",
        options: [
            "A) Single lane, flotation device.",
            "B) Single lane, slideraft with IFAR (Inflatable Free Aisle Restrictor).",
            "C) Single lane, slideraft.",
            "D) Dual lane, flotation device."
        ],
        answer: 1
    },
    {
        /* Pregunta 54 */
        question: "54. 2.4.54\nHow can the oxygen masks on the PSUs (Passenger Service Unit) be deployed?",
        options: [
            "A) Manually and automatically.",
            "B) Only manually by using the MRT.",
            "C) Only automatically in case of a decompression.",
            "D) Only manually by pressing the 'MASK MAN ON' cockpit switch."
        ],
        answer: 0
    },
    {
        /* Pregunta 55 */
        question: "55. 2.4.55\nWhat is the duration of the PSU (Passenger Service Unit) oxygen?",
        options: [
            "A) 20 min.",
            "B) 17 min.",
            "C) 15 min.",
            "D) 22 min."
        ],
        answer: 3
    },
    {
        /* Pregunta 56 */
        question: "56. 2.4.56\nHow can we select the emergency mode on the QDMs (QUICK DONNING MASK)?",
        options: [
            "A) By pressing the emergency button in the cockpit.",
            "B) By rotating the emergency selector to the emergency position.",
            "C) By pressing the 'press to test' button.",
            "D) There is no such a mode on the QDM."
        ],
        answer: 1
    },
    {
        /* Pregunta 57 */
        question: "57. 2.4.57\nWhen can the CCRC start to be used?",
        options: [
            "A) When it is authorised by the captain.",
            "B) When it is authorised by the purser.",
            "C) Any time after takeoff.",
            "D) Upon completing commercial service."
        ],
        answer: 0
    },
    {
        /* Pregunta 58 */
        question: "58. 2.4.58\nA350 - How many single lane slides can be found?",
        options: [
            "A) 2.",
            "B) 4.",
            "C) 6.",
            "D) 8."
        ],
        answer: 0
    },
    {
        /* Pregunta 59 */
        question: "59. 2.4.59\nA350 - Where can we find the IFAR?",
        options: [
            "A) At door 1.",
            "B) At doors 1.",
            "C) There is no IFAR system on A330 aircrafts.",
            "D) At door 1."
        ],
        answer: 0
    },
    {
        /* Pregunta 60 */
        question: "60. 2.4.60\nHow many emergency exits can be found on the A330?",
        options: [
            "A) 4.",
            "B) 6.",
            "C) 8.",
            "D) 10."
        ],
        answer: 2
    },
    {
        /* Pregunta 61 */
        question: "61. 2.4.61\nA350 - How many Type C doors can be found?",
        options: [
            "A) 2.",
            "B) 4.",
            "C) 6.",
            "D) 8."
        ],
        answer: 0
    },
    {
        /* Pregunta 62 */
        question: "62. 2.4.62\nHow many type 'I' exits can be found on the A330?",
        options: [
            "A) 2.",
            "B) 4.",
            "C) 0.",
            "D) 6."
        ],
        answer: 0
    },
    {
        /* Pregunta 63 */
        question: "63. 2.4.63\nWhat type of exits can be found on the A330?",
        options: [
            "A) 4 type 'C' and 4 type 'A'.",
            "B) 4 type 'I' and 4 type 'III'.",
            "C) 4 type 'I' and 4 type 'C'.",
            "D) 2 type 'I' and 6 type 'A'."
        ],
        answer: 3
    },
    {
        /* Pregunta 64 */
        question: "64. 2.4.64\nWhat kind of slide is associated to a type 'I' exit?",
        options: [
            "A) Single lane, flotation device.",
            "B) Dual lane, flotation device.",
            "C) Single lane, slideraft.",
            "D) Dual lane, slideraft."
        ],
        answer: 0
    },
    {
        /* Pregunta 65 */
        question: "65. 2.4.65\nA350 - How many dual lane slides can be found?",
        options: [
            "A) 4.",
            "B) 6.",
            "C) 8.",
            "D) 0."
        ],
        answer: 1
    },
    {
        /* Pregunta 66 */
        question: "66. 2.4.66\nThe avionic compartment door:",
        options: [
            "A) Is installed in an unpressurized area on the bottom of the fuselage.",
            "B) Can either be opened from the inside or the outside.",
            "C) Can only be opened from the inside.",
            "D) Can only be opened from the outside."
        ],
        answer: 1
    },
    {
        /* Pregunta 67 */
        question: "67. 2.4.67\nWhere is the additional CAS 3S located on the A330-200?",
        options: [
            "A) Next to the required CAS 1R.",
            "B) Inside the after galley.",
            "C) Next to the required CAS 1L.",
            "D) Next to the required CAS 4R."
        ],
        answer: 2
    },
    {
        /* Pregunta 68 */
        question: "68. 2.4.68\nWhere are the additional CAS 3S and 4S located on the A330-300?",
        options: [
            "A) Next to the required CAS 1R.",
            "B) Inside the after galley.",
            "C) Next to the required CAS 1L.",
            "D) Next to the required CAS 4R."
        ],
        answer: 1
    },
    {
        /* Pregunta 69 */
        question: "69. 2.4.69\nA350. Where is the additional CAS 2S located?",
        options: [
            "A) Opposite the required CAS 1L.",
            "B) Inside the after galley.",
            "C) Next to the required CAS 1L.",
            "D) Next to the required CAS 4R."
        ],
        answer: 0
    },
    {
        /* Pregunta 70 */
        question: "70. 2.4.70\nHow many types of galleys do we have?",
        options: [
            "A) European and American galleys.",
            "B) Electrical and manual galleys.",
            "C) Wet and dry galleys.",
            "D) All the galleys are of the same kind."
        ],
        answer: 2
    },
    {
        /* Pregunta 71 */
        question: "71. 2.4.71\nHow must the cockpit door be during the flight?",
        options: [
            "A) It will always be as the captain decides.",
            "B) Always open.",
            "C) The cockpit door is closed and remains locked during the flight.",
            "D) Always closed, by using the manual deadbolt."
        ],
        answer: 2
    },
    {
        /* Pregunta 72 */
        question: "72. 2.4.72\nHow must the FCRC door be during TTL (Taxi, Takeoff and Landing)?",
        options: [
            "A) It is the captain's decision.",
            "B) It is the purser's decision.",
            "C) It must be open and latched if it is empty.",
            "D) It must be closed for TTL unless the compartment is occupied."
        ],
        answer: 3
    },
    {
        /* Pregunta 73 */
        question: "73. 2.4.73\nRegarding the two different models of bassinets, indicate the correct answer:",
        options: [
            "A) These types of baby bassinets are not designed for the installation on the wall of a cabin.",
            "B) Baby bassinets cannot be used during the flight.",
            "C) The baby bassinets are designed either to carry a maximum load of 11 kg (24 lbs) and less than 8 months or 18 kg., depending on the model.",
            "D) Passengers must use their own bassinets."
        ],
        answer: 2
    },
    {
        /* Pregunta 74 */
        question: "74. 2.4.74\nA350. How can we make a call to the FCRC from a cabin crew interphone in normal operation?",
        options: [
            "A) It is not possible to do so.",
            "B) By dialing FCRC + Send.",
            "C) By dialing EMER from any CC interphone.",
            "D) Only the purser can call the FCRC."
        ],
        answer: 0
    },
    {
        /* Pregunta 75 */
        question: "75. 2.4.75\nA350. Where can the DDD (Decompression Deceleration Device) system be found?",
        options: [
            "A) At cockpit door.",
            "B) At FCRC door.",
            "C) At CCRC door.",
            "D) At door 4L."
        ],
        answer: 0
    },
    {
        /* Pregunta 76 */
        question: "76. 2.4.76\nWhere are the different handsets installed?",
        options: [
            "A) In the cockpit, in the FCRC, in the CCRC and at the cabin attendant stations.",
            "B) At galleys, in the FCRC, in the CCRC and at the purser's CAS.",
            "C) In the FCRC, in the CCRC and at all CAS.",
            "D) There is one handset per pilot and per CC available."
        ],
        answer: 0
    },
    {
        /* Pregunta 77 */
        question: "77. 2.4.77\nWhere can a passenger perform a call to a cabin crew member from? (3 sitios)",
        options: [
            "A) From PCU (Power Control Unit), PSU (Passenger Service Unit) and LSU (Lavatory Service Unit).",
            "B) From PSU (Passenger Service Unit) and LSU (Lavatory Service Unit).",
            "C) Passengers cannot perform any call.",
            "D) Only from PSU (Passenger Service Unit)."
        ],
        answer: 0
    },
    {
        /* Pregunta 78 */
        question: "78. 2.4.78\nA350 - Should the slideraft at cabin door 2L be unavailable in case of ditching, which slideraft can be used to replace it if needed?",
        options: [
            "A) 1L.",
            "B) 4R.",
            "C) 3R.",
            "D) All sliderafts on A350 are suitable for any door."
        ],
        answer: 2
    },
    {
        /* Pregunta 79 */
        question: "79. 2.4.79\nWhere can the IFAR (Inflatable Free Aisle Restrictor) system be found on an A330?",
        options: [
            "A) At door 1.",
            "B) At doors 1.",
            "C) There is no IFAR system on A330 aircrafts.",
            "D) At door 1."
        ],
        answer: 2
    },
    {
        /* Pregunta 80 */
        question: "80. 2.4.80\nHow can we reset a current EMER CALL?",
        options: [
            "A) The call function is automatically reset after a time period of 5 minutes.",
            "B) The cabin crew must press the reset button.",
            "C) The cabin crew must press the EMER key to reset it.",
            "D) By just hanging up the handset."
        ],
        answer: 1
    },
    {
        /* Pregunta 81 */
        question: "81. 2.4.81\nIs there any aural alert if the heating system fails in the LDMCRC?",
        options: [
            "A) An aural alert sounds through the LDMCRC loud speakers for approximately 30 seconds.",
            "B) Aural and visual alerts will appear every 20 seconds.",
            "C) There is no aural alert sound when the heating system fails.",
            "D) There is an aural alert within every bunk."
        ],
        answer: 2
    },
    {
        /* Pregunta 82 */
        question: "82. 2.4.82\nA350 - How to cancel the EVAC ALERT in the cabin even if it’s not an Iberia procedure:",
        options: [
            "A) The flight crew can cancel the EVAC ALERT at any time via EVAC CMD pb and the cabin crew by pressing the EVAC RESET key in the assigned areas of the cabin.",
            "B) By pressing the EVAC CMD placed on both FAPs only.",
            "C) By pressing the EVAC CMD on the FAP or any AAP.",
            "D) By pressing the EVAC CMD on the forward FAP only."
        ],
        answer: 0
    },
    {
        /* Pregunta 83 */
        question: "83. 2.4.83\nA350. When oxygen masks from the PSU are automatically deployed, how many masks will drop down?",
        options: [
            "A) All the masks will be dropped down at the same time.",
            "B) Only one mask drops down and hangs by the lanyard and the other masks are retained in the container by a plastic foil.",
            "C) Only two masks drop down and hang by the lanyard and the other masks are retained in the container by a plastic foil.",
            "D) Only three masks drop down and hang by the lanyard and the other masks are retained in the container by a plastic foil."
        ],
        answer: 2
    },
    {
        /* Pregunta 84 */
        question: "84. 2.4.84\nWhen will the exit and locator light sign automatically switch on in normal operation?",
        options: [
            "A) When the landing gears are extended.",
            "B) After a CIDS reset.",
            "C) After a CIDS degradation.",
            "D) When the EMER light switch is pressed."
        ],
        answer: 0
    },
    {
        /* Pregunta 85 */
        question: "85. 2.4.85\nAn amber indication on the smoke detection page means:",
        options: [
            "A) Smoke detector is detecting fire.",
            "B) Smoke detector is detecting smoke.",
            "C) Smoke detector is in normal operation.",
            "D) Smoke detector sensor fault is detected."
        ],
        answer: 3
    },
    {
        /* Pregunta 86 */
        question: "86. 2.4.86\nIf smoke is detected, the SMOKE indicator pb on the AAP comes on:",
        options: [
            "A) Steady red.",
            "B) Flashing red.",
            "C) Steady amber.",
            "D) Flashing amber."
        ],
        answer: 0
	}
	]
},

	/*----------------------------------------------------------------------------------------*/	
	/*----------------------------- EQUIPOS DE EMERGENCIA V.12 -------------------------------*/
	/*----------------------------------------------------------------------------------------*/
	
    battery2: {
		title: "Equipos de Emergéncia",
		subtitle: "WB A-330/350",
		questions: [
        {
		/* Pregunta 1 */
        question: "1. 2.3.1\nHow do we operate the A330 megaphone?",
        options: [
            "A) Hold it and press the ON pb.",
            "B) Hold it close to the mouth and press the 'push to talk' handle switch as you speak.",
            "C) Hold it and speak directly.",
            "D) Hold it and once we have selected the ON pb, press the 'push to talk' handle switch."
        ],
        answer: 1
    },
    {
        /* Pregunta 2 */
        question: "2. 2.3.2\nPreflight check of PBE 15-40F series (Air Liquide):",
        options: [
            "A) Location, quantity, condition indicator (should be green), tamper seal is intact, secured.",
            "B) Location, quantity.",
            "C) Location, quantity, condition indicator (should be white), tamper seal is intact, secured.",
            "D) Location, quantity, operability (press the switch of the handle), secured."
        ],
        answer: 0
    },
    {
        /* Pregunta 3 */
        question: "3. 2.3.3\nWhat different outlets can we find in POCA (Portable Oxygen Cylinder Assembly)?",
        options: [
            "A) 4LPM (litter per minute) or LOW FLOW and 6LPM (litter per minute) or HIGH FLOW.",
            "B) 2LPM (litter per minute) or LOW FLOW and 4LPM (litter per minute) or HIGH FLOW.",
            "C) 5LPM (litter per minute) or LOW FLOW and 8LPM (litter per minute) or HIGH FLOW.",
            "D) 2LPM (litter per minute) or LOW FLOW and 6LPM (litter per minute) or HIGH FLOW."
        ],
        answer: 1
    },
    {
        /* Pregunta 4 */
        question: "4. 2.3.4\nFire extinguisher preflight check:",
        options: [
            "A) Location, quantity, condition indicator, tamper seal is intact, secured.",
            "B) Location, secured. quantity, safety device status, pressure gauge (if available, in the red zone),",
            "C) Location, secured. quantity, safety device status, pressure gauge (if available, in the green zone),",
            "D) Location, quantity, operability (press the switch of the handle), secured."
        ],
        answer: 2
    },
    {
        /* Pregunta 5 */
        question: "5. 2.3.5\nNumber and location of signal bag:",
        options: [
            "A) 1, in the cabin, close to 1 (purser) station.",
            "B) 1, in the cabin, at the rear of the aircraft.",
            "C) 1, in the cockpit.",
            "D) 2, one in the cockpit and one in the cabin close to 1 (purser) station."
        ],
        answer: 2
    },
    {
        /* Pregunta 6 */
        question: "6. 2.3.6\nHow many fire extinguishers are there in the cockpit?",
        options: [
            "A) None.",
            "B) 1.",
            "C) 2.",
            "D) 4."
        ],
        answer: 1
    },
    {
        /* Pregunta 7 */
        question: "7. 2.3.7\nHow many pairs of fireproof gloves are there in the cockpit?",
        options: [
            "A) None.",
            "B) 1.",
            "C) 2.",
            "D) 4."
        ],
        answer: 1
    },
    {
        /* Pregunta 8 */
        question: "8. 2.3.8\nA330 Flashlight preflight check:",
        options: [
            "A) Location, secured. quantity, serviceability (red LED flashing intervals are less than 10 seconds),",
            "B) Location, secured. quantity, serviceability (red LED flashing intervals are more than 10 seconds),",
            "C) Location, quantity, secured.",
            "D) Location, quantity, serviceability (red LED flashing is off), secured."
        ],
        answer: 0
    },
    {
        /* Pregunta 9 */
        question: "9. 2.3.9\nA330 Megaphone preflight check:",
        options: [
            "A) Location, quantity, secured.",
            "B) Location, quantity, operability (red LED flashing is off), secured.",
            "C) Location, quantity, operability (press the switch of the handle), secured.",
            "D) Location, quantity."
        ],
        answer: 2
    },
    {
        /* Pregunta 10 */
        question: "10. 2.3.10\nHow many megaphones are there on the A330 and where are they located?",
        options: [
            "A) 1, close to 1L door.",
            "B) 2, one close to 1L door and one close to 4R door.",
            "C) 3, one close to 1L door, one close to 4R door and one in the cockpit.",
            "D) 2, both close to 2L door."
        ],
        answer: 1
    },
    {
        /* Pregunta 11 */
        question: "11. 2.3.11\nPassenger lifevest preflight check:",
        options: [
            "A) It is not required to check the passenger lifevests.",
            "B) Check that there are enough for the babies in that flight.",
            "C) The control of the passenger lifevests will be done by random sampling.",
            "D) We have to check that every seat has a passenger lifevest."
        ],
        answer: 2
    },
    {
        /* Pregunta 12 */
        question: "12. 2.3.12\nHow many sliderafts are there on A330?",
        options: [
            "A) 6.",
            "B) 4.",
            "C) 8.",
            "D) 2."
        ],
        answer: 0
    },
    {
        /* Pregunta 13 */
        question: "13. 2.3.13\nHow many mini-flares are there in the signalling bag and who is responsible for removing it in an evacuation?",
        options: [
            "A) 4 mini-flares, the captain removes the signalling bag.",
            "B) 15 mini-flares, the captain removes the signalling bag.",
            "C) 4 mini-flares, the first officer removes the signalling bag.",
            "D) 15 mini-flares, the first officer removes the signalling bag."
        ],
        answer: 1
    },
    {
        /* Pregunta 14 */
        question: "14. 2.3.14\nNumber of infant lifevests on the A330:",
        options: [
            "A) 25.",
            "B) 15.",
            "C) 10.",
            "D) 30."
        ],
        answer: 1
    },
    {
        /* Pregunta 15 */
        question: "15. 2.3.15\nAre the 3L and 3R exits slides on the A330 considered sliderafts?",
        options: [
            "A) Yes, they are.",
            "B) No, they are not.",
            "C) No, but they can be used as flotation devices.",
            "D) It depends on if the aircraft is an A330-300 or an A330-200."
        ],
        answer: 0
    },
    {
        /* Pregunta 16 */
        question: "16. 2.3.16\nNumber of fire extinguishers in the A330 FCRC:",
        options: [
            "A) 1.",
            "B) 2.",
            "C) 4.",
            "D) None."
        ],
        answer: 3
    },
    {
        /* Pregunta 17 */
        question: "17. 2.3.17\nNumber of POCA (Portable Oxygen Cylinder Assembly) in the A330 cabin:",
        options: [
            "A) 12.",
            "B) 13.",
            "C) 10.",
            "D) 8."
        ],
        answer: 1
    },
    {
        /* Pregunta 18 */
        question: "18. 2.3.18\nLocation of fireproof gloves on the A330:",
        options: [
            "A) 1 pair in the cockpit, 1 pair in the LDMCRC and 1 pair at 4R station.",
            "B) 1 pair in LDMCRC and one pair at 4R station.",
            "C) 1 pair in the cockpit and one pair in the LDMCRC.",
            "D) 1 pair at 1L station and one pair at 4L station."
        ],
        answer: 0
    },
    {
        /* Pregunta 19 */
        question: "19. 2.3.19\nNumber of portable ELTs (Emergency Locator Transmitter) on the A330:",
        options: [
            "A) 1.",
            "B) 3.",
            "C) 2.",
            "D) None."
        ],
        answer: 2
    },
    {
        /* Pregunta 20 */
        question: "20. 2.3.20\nWhere can we find the volume control on the A330 megaphone?",
        options: [
            "A) Next to the handle switch.",
            "B) Next to the microphone.",
            "C) There is no volume control.",
            "D) On the side of the megaphone."
        ],
        answer: 2
    },
    {
        /* Pregunta 21 */
        question: "21. 2.3.21\nFor how long does the Red Hand Flare 'MK8' burn?",
        options: [
            "A) 5 minutes.",
            "B) 60 seconds.",
            "C) 30 seconds.",
            "D) 2 minutes."
        ],
        answer: 1
    },
    {
        /* Pregunta 22 */
        question: "22. 2.3.22\nWhere can we find the ON switch on the A330 flashlight?",
        options: [
            "A) Next to red led flashing.",
            "B) On the bottom of the flashlight.",
            "C) There is not any ON switch.",
            "D) On the bracket."
        ],
        answer: 2
    },
    {
        /* Pregunta 23 */
        question: "23. 2.3.23\nFor how long does the PBE supply oxygen?",
        options: [
            "A) 15 minutes.",
            "B) 22 minutes.",
            "C) 12 minutes.",
            "D) 30 minutes."
        ],
        answer: 0
    },
    {
        /* Pregunta 24 */
        question: "24. 2.3.24\nWhere is the crowbar on A330 located?",
        options: [
            "A) In the cockpit, in the LDMCR and at station 4R.",
            "B) At station 4R.",
            "C) In the cockpit.",
            "D) In FCRC and in LDMCRC."
        ],
        answer: 2
    },
    {
        /* Pregunta 25 */
        question: "25. 2.3.25\nHow is the light system assembly in the passenger lifevests activated?",
        options: [
            "A) It is automatically activated when the lifevest is inflated.",
            "B) By pressing the ON pb.",
            "C) There is not a light system assembly in the passenger lifevests.",
            "D) It is automatically activated when the battery is immersed in water."
        ],
        answer: 3
    },
    {
        /* Pregunta 26 */
        question: "26. 2.3.26\nWhat are the uses of POCA (PORTABLE OXYGEN CYLINDER ASSEMBLY)?",
        options: [
            "A) These cylinders can be used in case of a depressurization.",
            "B) These cylinders can be used for first aid to cabin occupants and in the case of a depressurization.",
            "C) These cylinders can be used for first aid.",
            "D) These cylinders can be used in case of fire."
        ],
        answer: 1
    },
    {
        /* Pregunta 27 */
        question: "27. 2.3.27\nWhich of the following is isolated to prevent from electric shocks?",
        options: [
            "A) Crash axe.",
            "B) Crowbar.",
            "C) BCF (Portable Fire Extinguisher).",
            "D) PBE (Protective Breathing Equipment)."
        ],
        answer: 0
    },
    {
        /* Pregunta 28 */
        question: "28. 2.3.28\nHow many fire extinguishers are there in the cabin and in the LDMCRC on the A330?",
        options: [
            "A) 1 in the cabin and 8 in the LDMCRC.",
            "B) 8 in the cabin and 2 in the LDMCRC.",
            "C) 10 in the cabin and 1 in the LDMCRC.",
            "D) 8 in the cabin and 1 in the LDMCRC."
        ],
        answer: 3
    },
    {
        /* Pregunta 29 */
        question: "29. 2.3.29\nWhere is the supplementary survival kit on the A330 in zone 2 located?",
        options: [
            "A) In the overhead stowage compartment next to 2L door.",
            "B) In the doghouse next to 2L door.",
            "C) In the overhead stowage compartment next to 3L door.",
            "D) In the closet next to 2L door."
        ],
        answer: 0
    },
    {
        /* Pregunta 30 */
        question: "30. 2.3.30\nWhere is the supplementary survival kit on the A330 in zone 3 located?",
        options: [
            "A) In the overhead stowage compartment next to door 3L.",
            "B) In the closet next to door 2L.",
            "C) There is not a supplementary survival kit at station 3.",
            "D) In the overhead stowage compartment next to door 2L."
        ],
        answer: 2
    },
    {
        /* Pregunta 31 */
        question: "31. 2.3.31\nEMK (Emergency Medical Kit) drugs must be administered by:",
        options: [
            "A) Medical doctors, qualified nurses, paramedics or emergency medical technicians.",
            "B) Medical doctors, qualified nurses, paramedics or emergency medical technicians. Medical students, paramedic students, emergency medical technicians or nurses aids.",
            "C) Medical aids. students, student paramedics, student emergency medical technicians or nurses.",
            "D) The captain."
        ],
        answer: 1
    },
    {
        /* Pregunta 32 */
        question: "32. 2.3.32\nWhat signs do we get when the portable ELT is activated?",
        options: [
            "A) A green LED with a periodic flash and a buzzer.",
            "B) A red LED with a periodic flash and a buzzer.",
            "C) A yellow LED with a periodic flash and a buzzer.",
            "D) A red LED."
        ],
        answer: 1
    },
    {
        /* Pregunta 33 */
        question: "33. 2.3.33\nUse of the fireproof gloves:",
        options: [
            "A) Protect the crew members during the meal service.",
            "B) Protect the crew members from cold.",
            "C) Protect the crew members during the firefighting. They are heat resistant.",
            "D) They are not heat resistant."
        ],
        answer: 2
    },
    {
        /* Pregunta 34 */
        question: "34. 2.3.34\nA350- Where is the crowbar located?",
        options: [
            "A) In the cockpit.",
            "B) There are no crowbars on the A350.",
            "C) In the LDMCRC.",
            "D) In the closet next to door 4R."
        ],
        answer: 0
    },
    {
        /* Pregunta 35 */
        question: "35. 2.3.35\nA350- What does a red flashing LED on the flashlight indicate?",
        options: [
            "A) It indicates the battery is in good condition.",
            "B) It indicates the flashlight is ON.",
            "C) It indicates a battery replacement is needed.",
            "D) There is not any red LED."
        ],
        answer: 2
    },
    {
        /* Pregunta 36 */
        question: "36. 2.3.36\nA350- How many POCA (Portable Oxygen Cylinder Assembly) and attached oxygen masks are there?",
        options: [
            "A) 12 POCA (Portable Oxygen Cylinder Assembly) and 12 masks.",
            "B) 12 POCA (Portable Oxygen Cylinder Assembly) and 24 masks.",
            "C) 9 POCA (Portable Oxygen Cylinder Assembly) and 9 masks.",
            "D) 9 POCA (Portable Oxygen Cylinder Assembly) and 18 masks."
        ],
        answer: 0
    },
    {
        /* Pregunta 37 */
        question: "37. 2.3.37\nA350- How many fire extinguishers are there?",
        options: [
            "A) 1 in the cockpit, 1 in the FCRC and 8 in the cabin.",
            "B) 1 in the cockpit, 1 in the FCRC, 8 in the cabin and 1 in CCRC.",
            "C) 2 in the cockpit, 1 in the FCRC, 8 in the cabin and 1 in CCRC.",
            "D) 1 in the cockpit, 1 in the FCRC, 8 in the cabin and 3 in CCRC."
        ],
        answer: 1
    },
    {
        /* Pregunta 38 */
        question: "38. 2.3.38\nA350- What does a green LED light on the flashlight indicate?",
        options: [
            "A) It indicates a battery replacement is needed.",
            "B) It indicates a normal battery level.",
            "C) There is not any green LED.",
            "D) It indicates the flashlight is ON."
        ],
        answer: 1
    },
    {
        /* Pregunta 39 */
        question: "39. 2.3.39\nA350- The POCA (Portable Oxygen Cylinder Assembly):",
        options: [
            "A) Has 2 outflows, HI and LOW.",
            "B) Has only 1 outflow and crew members can select an oxygen flow rate of 2LPM (liter per minute) or 4LPM (liter per minute).",
            "C) Is smaller than in other aircrafts.",
            "D) Has only 1 outflow of 4LPM (liter per minute)."
        ],
        answer: 1
    },
    {
        /* Pregunta 40 */
        question: "40. 2.3.40\nA350- How many PBE are there?",
        options: [
            "A) 8 in the cabin, 2 in the CCRC, 2 in the FCRC and 1 in the cockpit.",
            "B) 12 in the cabin, 2 in the CCRC, 2 in the FCRC and 1 in the cockpit.",
            "C) 10 in the cabin, 2 in the CCRC, 2 in the FCRC and 3 in the cockpit.",
            "D) 8 in the cabin, 3 in the CCRC, 1 in the FCRC and 1 in the cockpit."
        ],
        answer: 0
    },
    {
        /* Pregunta 41 */
        question: "41. 2.3.41\nA350- Number and preflight check of megaphones:",
        options: [
            "A) 2, location, quantity, operability (red LED is flashing when handle is squeezed) and secured.",
            "B) 1, location, quantity, operability (green LED is flashing when handle is squeezed) and secured.",
            "C) 2, location, quantity, operability (green LED is flashing when handle is squeezed) and secured.",
            "D) 1, location, quantity, operability (red LED is flashing when handle is squeezed) and secured."
        ],
        answer: 2
    },
    {
        /* Pregunta 42 */
        question: "42. 2.3.42\nA350- How many crash axes are there?",
        options: [
            "A) 2, one in the cockpit and one in rear galley checked by 4.",
            "B) 1 in the cockpit.",
            "C) 2, one in the cockpit and one in G2 checked by 4.",
            "D) 2, one in the cockpit and one in CCRC."
        ],
        answer: 1
    },
    {
        /* Pregunta 43 */
        question: "43. 2.3.43\nNumber of PBE on the A330:",
        options: [
            "A) 1 in the cockpit, 2 in the FCRC, 8 in the cabin and 2 in the LDMCR.",
            "B) 8 in the cabin and 2 in the LDMCR.",
            "C) 1 in the cockpit, 10 in the cabin and 2 in the FCRC.",
            "D) 2 in the LDMCR, 1 in the FCRC and 10 in the cabin."
        ],
        answer: 0
    },
    {
        /* Pregunta 44 */
        question: "44. 2.3.44\nLavatory fire extinguisher preflight check:",
        options: [
            "A) Check pressure gauge of the automatic fire extinguisher. The indicator needle must be in the white band.",
            "B) Check pressure gauge of the automatic fire extinguisher. The indicator needle must be in the green band.",
            "C) Location, quantity, condition indicator (should be green), tamper seal is intact, secured.",
            "D) Location, quantity."
        ],
        answer: 1
    },
    {
        /* Pregunta 45 */
        question: "45. 2.3.45\nHow do we activate the portable ELT on land?",
        options: [
            "A) Activate the beacon by switching the beacon's ARM/OFF/ON sw 3-POSITION-SWITCH to the ON position. This switch is placed on the front face of the electronic assy.",
            "B) Activate the beacon by switching the beacon's ARM/OFF/ON sw 3-POSITION-SWITCH to the ARM position. This switch is placed on the front face of the electronic assy.",
            "C) Activate the beacon by switching the beacon's ARM/OFF/ON sw 3-POSITION-SWITCH to the OFF position. This switch is placed on the front face of the electronic assy.",
            "D) It cannot be activated on land."
        ],
        answer: 0
    },
    {
        /* Pregunta 46 */
        question: "46. 2.3.46\nWhat actions will the purser take if a medication is used from EMK?",
        options: [
            "A) If a medication is used, the EMK will be INOPERATIVE and sealed with a RED seal. The captain will be notified in order to write it down in the Technical Logbook and the catering staff shall proceed to change it in the MAD/BCN base.",
            "B) If a medication is used, the EMK will be closed with a YELLOW seal. If only one medication is used, the EMK will be INOPERATIVE and sealed with a RED seal.",
            "C) The purser will write it down in the Cabin Logbook and will inform the captain in order to write it down in the Technical Logbook and the catering staff shall proceed to change it in the MAD/BCN base.",
            "D) If a medication is used, the EMK will be INOPERATIVE and sealed with a BLUE seal."
        ],
        answer: 2
    },
    {
        /* Pregunta 47 */
        question: "47. 2.3.47\nUse of the megaphone:",
        options: [
            "A) The purpose of the megaphone for the cabin crew is to give instructions to the passengers outside the aircraft.",
            "B) The purpose of the megaphone for the cabin crew is to give instructions to the passengers inside the aircraft.",
            "C) The purpose of the megaphone for the cabin crew is to give instructions to the passengers in case of evacuation and in case of Passenger Address (PA) system failures.",
            "D) The purpose of the megaphone for the cabin crew is to give safety instructions to the passengers."
        ],
        answer: 2
    },
    {
        /* Pregunta 48 */
        question: "48. 2.3.48\nIs there any portable protective breathing equipment in the cockpit?",
        options: [
            "A) No, the breathable equipment is fixed.",
            "B) Yes, there are full-face quick-donning masks.",
            "C) Yes, there is one PBE.",
            "D) No, there are only oxygen containers like in the galleys."
        ],
        answer: 2
    },
    {
        /* Pregunta 49 */
        question: "49. 2.3.49\nThe POCA (Portable Oxygen Cylinder Assembly) and its attached masks:",
        options: [
            "A) Can be used for first aid to cabin occupants (passengers and crew) and in the case of a depressurization.",
            "B) Can be used only for first aid to cabin occupants (passengers and crew).",
            "C) Can be used only in the case of a depressurization.",
            "D) Can be used in case of fire in the cabin."
        ],
        answer: 0
    },
    {
        /* Pregunta 50 */
        question: "50. 2.3.50\nA350. How many crash axes are there?",
        options: [
            "A) 2, one in the cockpit and one in G4A checked by CC 4R.",
            "B) 1 in the cockpit.",
            "C) 2, one in the cockpit and one in G4A checked by CC 4.",
            "D) 2, one in the cockpit and one in the CCRC."
        ],
        answer: 2
    },
    {
        /* Pregunta 51 */
        question: "51. 2.3.51\nA350. How many SSK (Supplementary Survival Kits) are there and where are they located?",
        options: [
            "A) 6 for type A doors.",
            "B) 6 for type C doors.",
            "C) 8: 6 for type C doors and 2 for type A doors.",
            "D) 8: 6 for type A doors and 2 for type C doors."
        ],
        answer: 2
    },
    {
        /* Pregunta 52 */
        question: "52. 2.3.52\nWhen does the oxygen start to flow in PBE AVOX?",
        options: [
            "A) When we pass the PBE over the head.",
            "B) When we remove the PBE from the bag.",
            "C) When we pull the actuation ring.",
            "D) When we remove the vacuum bag from the container."
        ],
        answer: 2
    },
    {
        /* Pregunta 53 */
        question: "53. 2.3.53\nIn case of a fire in a hidden area and the crash axe needs to be used, where can we find it on the A330?",
        options: [
            "A) In the FCRC and in the LDMCRC.",
            "B) At 1L station and at station 4R.",
            "C) In the cockpit, in the LDMCR and at station 4R.",
            "D) At station 4R."
        ],
        answer: 2
    },
    {
        /* Pregunta 54 */
        question: "54. 2.3.54\nWho is responsible for and limits the access to the EMK?",
        options: [
            "A) The purser.",
            "B) The captain.",
            "C) Medical qualified personnel.",
            "D) Any crewmember."
        ],
        answer: 1
    },
    {
        /* Pregunta 55 */
        question: "55. 2.3.55\nWhat distance can the heliograph reach?",
        options: [
            "A) The scope (range) of sparkles is about 50 km with sunlight.",
            "B) The scope (range) of sparkles is about 30 km with sunlight.",
            "C) The scope (range) of sparkles is about 10 km with sunlight.",
            "D) There is no heliograph in the signal bag."
        ],
        answer: 1
    },
    {
        /* Pregunta 56 */
        question: "56. 2.3.56\nHow many years does the defibrillator (AED) battery last?",
        options: [
            "A) 4 years.",
            "B) 3 months.",
            "C) 10 years.",
            "D) 1 year."
        ],
        answer: 0
    },
    {
        /* Pregunta 57 */
        question: "57. 2.3.57\nIs it possible to administer drugs from EMK if there is not medically qualified personnel on board?",
        options: [
            "A) No, it is required to be opened by medically qualified personnel.",
            "B) Yes, oral drugs must not be denied in medical emergency situations where no medically qualified persons are on board the flight.",
            "C) Yes, the purser can authorize its opening.",
            "D) Yes, oral drugs and instruments can be used regardless if there are medically qualified persons on board."
        ],
        answer: 0
    },
    {
        /* Pregunta 58 */
        question: "58. 2.3.58\nEMK will be inoperative in the following cases:",
        options: [
            "A) If it is not locked with a padlock, if a medication (consumable item) has been used and if it is opened, no yellow seals remain inside to be re-sealed, when equipment (not consumable item) is used.",
            "B) If it is expired, if it is not locked with a padlock, if a medication (consumable item) has been used.",
            "C) If it is expired, if a medication (consumable item) has been used and if it is opened, no yellow seals remain inside to be re-sealed, when equipment (not consumable item) is used.",
            "D) If it is expired, if a medication (1 consumable item) has been used and if it is opened, no yellow seals remain inside to be re-sealed, when equipment (not consumable item) is used."
        ],
        answer: 2
    },
    {
        /* Pregunta 59 */
        question: "59. 2.3.59\nWhat do the fire extinguisher pre-flight checks consist of?",
        options: [
            "A) Location, quantity, safety seal status and pressure gauge on the green zone.",
            "B) Location, quantity, safety seal status, pressure on the green zone and secured.",
            "C) Location, quantity, safety seal status, pressure gauge on the red zone and secured.",
            "D) Location, pressure gauge on the green zone and expiry date."
        ],
        answer: 1
    },
    {
        /* Pregunta 60 */
        question: "60. 2.3.60\nWhen in use, should the cabin crew monitor the pressure gauge of POCA (Portable Oxygen Cylinder Assembly)?",
        options: [
            "A) Yes and also the mask flow indicator to make sure the oxygen is flowing.",
            "B) It is not necessary to check the pressure.",
            "C) Just monitoring the mask flow indicator is enough.",
            "D) The CC does not have to monitor anything."
        ],
        answer: 0
    },
    {
        /* Pregunta 61 */
        question: "61. 2.3.61\nWhen does the oxygen start to flow in PBE Air Liquide?",
        options: [
            "A) When we remove the vacuum bag from the container.",
            "B) When we shake the PBE downwards.",
            "C) When we remove the PBE from the bag.",
            "D) When we pass the PBE over the head, from back to front."
        ],
        answer: 3
    },
    {
        /* Pregunta 62 */
        question: "62. 2.3.62\nCan we stop the oxygen supply when activated in the PBE Air Liquide?",
        options: [
            "A) Yes, it can be stopped.",
            "B) No, it will continue to supply oxygen.",
            "C) It depends on the flight altitude.",
            "D) If it is running for less than 1 minute, you can stop it."
        ],
        answer: 1
    },
    {
        /* Pregunta 63 */
        question: "63. 2.3.63\nWhat is the maximum operating time of the flashlights?",
        options: [
            "A) 4 hours.",
            "B) 3 hours.",
            "C) At least 3 hours and half.",
            "D) 2 hours."
        ],
        answer: 2
    },
    {
        /* Pregunta 64 */
        question: "64. 2.3.64\nDefibrillator (AED) preflight check:",
        options: [
            "A) Location, safety seal status, 2 package of HeartStart Smart Pads and that the ready green light flashes.",
            "B) Check presence and that the ready green light flashes.",
            "C) Location, presence of HeartStart Smart Pads and that the ready red light flashes.",
            "D) Check presence, the ready amber light flashes, 2 package of HeartStart Smart Pads and infant/child key accessory."
        ],
        answer: 1
    },
    {
        /* Pregunta 65 */
        question: "65. 2.3.65\nWhen should we use the infant/child key?",
        options: [
            "A) If the victim is under 25 kg or 8 years old.",
            "B) If the victim is under 20 kg or 8 years old.",
            "C) If the victim is under 25 kg or 10 years old.",
            "D) If the victim is under 20 kg or 10 years old."
        ],
        answer: 2
    },
    {
        /* Pregunta 66 */
        question: "66. 2.3.66\nWhere must we report that the FAK-1 is inoperative?",
        options: [
            "A) The purser writes the kit condition in the Cabin Defect Logbook, and the catering staff shall proceed to change it in MAD and BCN bases.",
            "B) The purser writes the kit condition in the Cabin Defect Logbook, and informs to the captain in order to write it down in the Technical Logbook, and catering shall proceed to change it in MAD and BCN bases.",
            "C) The captain writes it down in the Technical Logbook and catering shall proceed to change it in MAD and BCN base.",
            "D) The purser writes the kit condition in the Cabin Defect Logbook."
        ],
        answer: 1
    }
	]
},

	/*----------------------------------------------------------------------------------------*/	
	/*----------------------------- PROCEDIMIENTOS NORMALES V.12 -----------------------------*/
	/*----------------------------------------------------------------------------------------*/
	
    battery3: {
		title: "Procedimientos Normales",
		subtitle: "WB A-330/350",
		questions: [
        {
        /* Pregunta 1 */
        question: "1. 2.1.1\nWhat do we have to do if the red cabin pressure indicator flashes?",
        options: [
            "A) To open the door.",
            "B) To disarm the slide and open the door.",
            "C) Not to open the door and report to cockpit crew.",
            "D) To arm the slide and open the door."
        ],
        answer: 2
    },
    {
        /* Pregunta 2 */
        question: "2. 2.1.2\nWhen is a preflight briefing compulsory?",
        options: [
            "A) It is not mandatory.",
            "B) Only at the beginning of a duty period.",
            "C) At the beginning of each duty period or when there is a change of part of the crew and/or aircraft model.",
            "D) Only in international flights."
        ],
        answer: 2
    },
    {
        /* Pregunta 3 */
        question: "3. 2.1.3\nAfter flight crew callout: 'ATTENTION CREW: ARM SLIDES AND CROSSCHECK':",
        options: [
            "A) All cabin crew members must stay at doors.",
            "B) All cabin crew members must stay at doors and start a silent review.",
            "C) All cabin crew members perform the slide arming procedure and crosscheck the opposite door.",
            "D) This callout is not coming from flight crew."
        ],
        answer: 2
    },
    {
        /* Pregunta 4 */
        question: "4. 2.1.4\nDuring refueling/defueling procedure with passengers on board:",
        options: [
            "A) Fasten seatbelts signs must be on.",
            "B) No smoking signs must be off.",
            "C) Cabin crew members must remain at the doors.",
            "D) Cabin crew members do not need to be notified of refueling/defueling."
        ],
        answer: 2
    },
    {
        /* Pregunta 5 */
        question: "5. 2.1.5\nThe door control handle is:",
        options: [
            "A) The handle we use to open/close the door.",
            "B) The system to turn on the galley lights.",
            "C) The handle we use to arm/disarm slides.",
            "D) The handle we use to open/close the safety pin cover."
        ],
        answer: 0
    },
    {
        /* Pregunta 6 */
        question: "6. 2.1.6\nA350 How many CAS are there in the passenger cabin?",
        options: [
            "A) 9.",
            "B) 10.",
            "C) 11.",
            "D) 12."
        ],
        answer: 3
    },
    {
        /* Pregunta 7 */
        question: "7. 2.1.7\nA350 Is it compulsory for passengers to use the third point of the seatbelt at a Business class seat?",
        options: [
            "A) Yes, during all phases of the flight.",
            "B) Only during taxi, takeoff and landing.",
            "C) During takeoff and landing and with the seatbelt signs ON.",
            "D) There are only two points in Business class seats."
        ],
        answer: 1
    },
    {
        /* Pregunta 8 */
        question: "8. 2.1.8\nA350 For unexpected cases, the number of cabin crew can be reduced under the following conditions:",
        options: [
            "A) The operative crewmembers will keep their original seats.",
            "B) The operative crewmembers will reorganize their positions according to the following: 1-4-2-3-3R-4R.",
            "C) According to our maximum capacity of passengers, there is no need to reduce the number to be accepted on board.",
            "D) The operative crewmembers will reorganize their positions according to the following: 1-2-4-3-3R-2R."
        ],
        answer: 3
    },
    {
        /* Pregunta 9 */
        question: "9. 2.1.9\nA350 After hearing the callout 'ATTENTION CREW: ARM SLIDES AND CROSSCHECK', cabin crew members:",
        options: [
            "A) Will take the safety pin, will arm the slide and will place the pin in the same position.",
            "B) Will take the safety pin, will place the lever in an ARMED position and will keep the pin in the assigned pocket under the correspondent CAS.",
            "C) Will take the safety pin, will place the lever in an ARMED position and will keep the pin under the plastic cover next to the lever.",
            "D) Will understand it as a final call to be securely seated by using the harness."
        ],
        answer: 1
    },
    {
        /* Pregunta 10 */
        question: "10. 2.1.10\nA350 Normal cockpit access procedure:",
        options: [
            "A) The crewmember will introduce the assigned code, followed by this symbol # and will wait for 30 seconds for the door to be opened.",
            "B) Once the code introduced, a buzz will sound in the cockpit for 2 seconds accompanied by the message 'DOOR, PLEASE', indicating that there has been an access request.",
            "C) There is only an emergency code procedure registered in the keypad to enter the cockpit.",
            "D) The flight crew will never deny the access to the cockpit."
        ],
        answer: 1
    },
    {
        /* Pregunta 11 */
        question: "11. 2.1.11\nA350 How many demonstration kits can we find?",
        options: [
            "A) 4.",
            "B) 5.",
            "C) 6.",
            "D) 8."
        ],
        answer: 3
    },
    {
        /* Pregunta 12 */
        question: "12. 2.1.12\nA350 Where is the FAK-2 located and who is in charge of checking it?",
        options: [
            "A) Next to the EMK and the defibrillator, associated to the purser checklist.",
            "B) Next to the supplementary survival kit, associated to the 1R checklist.",
            "C) Next to the supplementary survival kit, associated to the 4R checklist.",
            "D) Next to the FAK-1, associated to the 4R checklist."
        ],
        answer: 0
    },
    {
        /* Pregunta 13 */
        question: "13. 2.1.13\nWhen checking the LDMCR, crew member 3 will apply the following procedure regarding the lights whilst on ground:",
        options: [
            "A) They do not need to be checked.",
            "B) They will ask the flight crew to connect them.",
            "C) They will press the CREW REST TEST pb (push button) on the AAP at that compartment.",
            "D) They will press the TEST button under the CRSD cover."
        ],
        answer: 2
    },
    {
        /* Pregunta 14 */
        question: "14. 2.1.14\nWhat must we do if any piece of an emergency equipment is not located where it should?",
        options: [
            "A) It must be placed in its assigned position.",
            "B) Advise Maintenance personnel.",
            "C) Just leave it where you found it; the point is to have it on board.",
            "D) Write it down in the Cabin Logbook."
        ],
        answer: 0
    },
    {
        /* Pregunta 15 */
        question: "15. 2.1.15\nWhen the cockpit crew announces via P.A.: 'CABIN CREW: SECURE CABIN FOR LANDING', what should cabin crew do?",
        options: [
            "A) The purser should activate the CABIN READY button.",
            "B) Cabin crewmembers must take their seats and fasten their seatbelts ASAP.",
            "C) Cabin crew initiates cabin preparation for landing.",
            "D) Cabin lights will be dimmed."
        ],
        answer: 2
    },
    {
        /* Pregunta 16 */
        question: "16. 2.1.16\nWhere must the purser write down the EMK serial number?",
        options: [
            "A) There is no need to be done.",
            "B) In the purser report.",
            "C) In the Cabin Log.",
            "D) In the purser box of the control table."
        ],
        answer: 3
    },
    {
        /* Pregunta 17 */
        question: "17. 2.1.17\nCabin crew number 3 is also in charge of checking the LDMCR. In which position must the entrance hatch be?",
        options: [
            "A) Closed.",
            "B) Open until slide arming procedure.",
            "C) Closed until slide arming procedure.",
            "D) It can be anyhow."
        ],
        answer: 1
    },
    {
        /* Pregunta 18 */
        question: "18. 2.1.18\nDuring refueling/defueling procedure:",
        options: [
            "A) At least one cabin crew member must be stationed at each door and must be prepared for an emergency, if required.",
            "B) In wide body fleet, this can be done with 6 cabin crew.",
            "C) In wide body fleet, this can be done with 6 cabin crew, if the purser is onboard.",
            "D) In wide body fleet, this can be done with 6 cabin crew, if the purser or a senior cabin crew is onboard."
        ],
        answer: 0
    },
    {
        /* Pregunta 19 */
        question: "19. 2.1.19\nIn the unforeseen occurrence in which the required minimum cabin crew is reduced by one cabin crew:",
        options: [
            "A) The purser will designate the position that each cabin crew must occupy, making sure that everyone has the necessary documentation and is updated with their obligations.",
            "B) The nearest cabin crew to the vacant station will proceed with the pre-flight check for both positions.",
            "C) Cabin crew will check the occupied stations only.",
            "D) Cabin crew will check the occupied stations only if there is a SANA/SAFA inspection."
        ],
        answer: 0
    },
    {
        /* Pregunta 20 */
        question: "20. 2.1.20\nWhen cabin checks are completed on ground:",
        options: [
            "A) The purser uses the cabin ready function to inform the flight crew that the cabin is ready for take-off.",
            "B) Cabin crew does not need to communicate that they are ready. 'CABIN CREW: TAKE YOUR SEAT FOR TAKE-OFF' callout is enough.",
            "C) Cabin ready is not needed to communicate. It is considered as a tacit fact.",
            "D) During take-off, the cabin ready is communicated only if the FAP command is operative."
        ],
        answer: 0
    },
    {
        /* Pregunta 21 */
        question: "21. 2.1.21\nCabin door opening normal operation:",
        options: [
            "A) Make sure slide arming lever is disarmed.",
            "B) Make sure slide arming lever is disarmed and cabin pressure visual warning is off.",
            "C) Make sure the slide arming lever is disarmed, slide armed light is off and check outside conditions.",
            "D) Make sure the slide arming lever is disarmed, check outside conditions, cabin pressure visual warning is off, move the door control handle in two steps and check the slide armed light is off, lift the door control handle fully up."
        ],
        answer: 3
    },
    {
        /* Pregunta 22 */
        question: "22. 2.1.22\nSlide disarming procedure:",
        options: [
            "A) Safety pin removed from stowage, slide arming lever plastic cover fully open, slide arming lever moved to disarmed position, safety pin installed, slide arming lever check in disarmed position, slide arming lever plastic cover closed, slides disarmed crosscheck, slides disarmed and crosscheck report to the purser.",
            "B) Cabin crew will check the opposite door only if the crew is reduced from the minimum required.",
            "C) Cabin crew does not require to check the opposite door; the purser can check it at the FAP.",
            "D) It is not necessary to check the opposite door; it is a captain and purser duty."
        ],
        answer: 0
    },
    {
        /* Pregunta 23 */
        question: "23. 2.1.23\nWhat kind of passengers must receive an individual safety briefing?",
        options: [
            "A) Those seated at the last cabin rows.",
            "B) Passengers from connecting flights.",
            "C) Stand by passengers.",
            "D) Visually and hearing impaired passengers."
        ],
        answer: 3
    },
    {
        /* Pregunta 24 */
        question: "24. 2.1.24\n¿Cuántos animales ESAN podrá llevar un pasajero en vuelos con origen o destino USA?",
        options: [
            "A) Uno solamente siempre que lleve bozal.",
            "B) Hasta dos animales por pasajero.",
            "C) Ninguno, se consideran como PETC o AVIH, dependiendo de su tamaño.",
            "D) Depende de la clase en que viaje, hasta dos en Y/C y sólo uno en J/C."
        ],
        answer: 2
    },
    {
        /* Pregunta 25 */
        question: "25. 2.1.25\n¿Cómo procederemos cuando sea necesario abrir una puerta de manera excepcional?",
        options: [
            "A) El TCP responsable de la puerta recibirá comunicación vía interfono para desarmar y abrir la puerta.",
            "B) Cuando se tenga que desarmar una rampa, se desarmarán todas las del avión y se armarán todas a la vez.",
            "C) Debe desarmarse la puerta que vamos a abrir, así como la enfrentada, para evitar confusiones.",
            "D) Se actuará de la forma más rápida posible con el fin de acelerar el procedimiento."
        ],
        answer: 2
    },
	{
        /* Pregunta 26 */
        question: "26. 2.1.26\nPara transitar por la plataforma del aeropuerto es obligatorio que todos los tripulantes:",
        options: [
            "A) Dispongan de un chaleco reflectante.",
            "B) Lleven en su cartera de vuelo una linterna.",
            "C) Dispongan de la acreditación aeroportuaria necesaria.",
            "D) Hayan recibido el curso correspondiente de circulación por parte de AENA."
        ],
        answer: 0
    },
    {
        /* Pregunta 27 */
        question: "27. 2.1.27\nSiempre que estén a bordo las máscaras de oxígeno, los cinturones canguro y los chalecos necesarios, el número máximo de bebés a bordo en Wide Body será:",
        options: [
            "A) 15.",
            "B) 10.",
            "C) No hay limitación.",
            "D) En función del destino."
        ],
        answer: 0
    },
    {
        /* Pregunta 28 */
        question: "28. 2.1.28\n¿Cuántos niños menores de 5 años no acompañados (UM) podrán ser aceptados para volar en Iberia?",
        options: [
            "A) 6 por avión.",
            "B) No hay limitación.",
            "C) Ninguno (N/A).",
            "D) Se recomienda que el número no exceda al de los menores no acompañados entre 5 y 12 años."
        ],
        answer: 2
    },
    {
        /* Pregunta 29 */
        question: "29. 2.1.29\n¿Qué provisión de baterías debe llevar un pasajero que necesite usar un CPO a bordo?",
        options: [
            "A) No es necesario que lleve baterías, ya que puede enchufarlo a la red eléctrica del avión.",
            "B) Para el 150 % de la duración del vuelo.",
            "C) Para el 100 % de la duración del viaje.",
            "D) Para el 150 % de la duración del viaje."
        ],
        answer: 3
    },
    {
        /* Pregunta 30 */
        question: "30. 2.1.30\n¿Cómo suministra Iberia información a los SCP?",
        options: [
            "A) Para no saturarles, Iberia ha decidido informarles, exclusivamente, a la entrada del avión, mediante la entrega de una tarjeta por parte de los TCP.",
            "B) Iberia suministra información a los SCP en la web de la compañía y a través de los puestos de facturación. En la entrada del avión, los TCP entregarán una tarjeta con información para los SCP.",
            "C) La normativa europea obliga exclusivamente a informar al acompañante del SCP e Iberia sigue estas directrices.",
            "D) A través de los TCP, siempre y cuando no hayan sido informados por el personal de tierra."
        ],
        answer: 1
    },
    {
        /* Pregunta 31 */
        question: "31. 2.1.31\n¿Es obligatorio informar a cabina de vuelo acerca de las actividades comerciales que se están realizando en cabina de pasaje a lo largo de todo el vuelo?",
        options: [
            "A) Sí.",
            "B) No.",
            "C) No, salvo para pasar comida a tripulación de vuelo.",
            "D) Sí, sólo si el repostaje ha finalizado."
        ],
        answer: 0
    },
    {
        /* Pregunta 32 */
        question: "32. 2.1.32\n¿Cuántos menores no acompañados de entre 5 años cumplidos y 12 años no cumplidos en la fecha del vuelo podemos llevar?",
        options: [
            "A) Un máximo de 8 menores.",
            "B) No existe limitación.",
            "C) Un máximo de 10 menores.",
            "D) El 10 % de la capacidad del avión."
        ],
        answer: 0
    },
    {
        /* Pregunta 33 */
        question: "33. 2.1.33\nLas mujeres embarazadas presentarán un certificado médico, expedido en los últimos 7 días previos a la fecha del vuelo:",
        options: [
            "A) A partir de la semana 30 de gestación.",
            "B) En todos los casos.",
            "C) Nunca es necesario.",
            "D) A partir de la semana 36 de gestación (32, si es gemelar)."
        ],
        answer: 3
    },
    {
        /* Pregunta 34 */
        question: "34. 2.1.34\nEl número de pasajeros de categorías especiales (SCP) no excederá:",
        options: [
            "A) Del 10 % de la capacidad total del avión.",
            "B) De la mitad del número de puertas a nivel del suelo.",
            "C) Del número de pasajeros capaces de asistirlos en caso de evacuación de emergencia.",
            "D) Del número de tripulantes en exceso de la tripulación mínima requerida."
        ],
        answer: 2
    },
    {
        /* Pregunta 35 */
        question: "35. 2.1.35\nEn rodajes y despegues, como norma general, los PED de mayor tamaño, como ordenadores portátiles:",
        options: [
            "A) Se desconectarán de la toma eléctrica, se apagarán y se estibarán debajo del asiento o en los compartimentos de equipaje.",
            "B) Se apagarán y se estibarán debajo del asiento o en los compartimentos de equipaje, pero pueden seguir conectados a la toma eléctrica hasta la apertura de puertas.",
            "C) No podrán ser utilizados en ninguna fase del vuelo.",
            "D) Se desconectarán de la toma eléctrica y se apagarán, no siendo necesario estibarlos."
        ],
        answer: 0
    },
    {
        /* Pregunta 36 */
        question: "36. 2.1.36\n¿Qué debemos hacer si la señal de cinturones permanece encendida durante un tiempo prolongado?",
        options: [
            "A) Avisar a cockpit para que la apaguen.",
            "B) Efectuar avisos recordatorios cada 15 minutos como máximo.",
            "C) Bloquear los baños para impedir su uso.",
            "D) Interrumpir el servicio, sentarnos y hacer uso del atalaje de seguridad completo."
        ],
        answer: 1
    },
    {
        /* Pregunta 37 */
        question: "37. 2.1.37\n¿En qué momentos deben hacer uso los TCP de los atalajes de seguridad completos?",
        options: [
            "A) Siempre que se encienda la señal de cinturones.",
            "B) Durante las guardias, mientras no estén realizando el chequeo de seguridad en la cabina.",
            "C) Exclusivamente para despegues y aterrizajes.",
            "D) Durante los rodajes de salida y llegada, una vez asegurada la cabina, en las maniobras de despegue y aterrizaje y en cualquier momento en que lo decida el comandante."
        ],
        answer: 3
    },
    {
        /* Pregunta 38 */
        question: "38. 2.1.38\n¿Qué butacas se consideran adyacentes a una salida de emergencia?",
        options: [
            "A) Todas las que se encuentren en la misma fila de la salida de emergencia.",
            "B) Aquellas que se encuentren junto a la salida de emergencia o en las filas anterior o posterior.",
            "C) Aquellas desde las que se puede acceder directamente a la salida de emergencia sin entrar en un pasillo o pasar alrededor de un obstáculo.",
            "D) Exclusivamente la butaca contigua a la salida de emergencia."
        ],
        answer: 2
    },
    {
        /* Pregunta 39 */
        question: "39. 2.1.39\n¿Cuánto tiempo es recomendable que transcurra antes de volar si se ha realizado buceo recreativo?",
        options: [
            "A) 12 horas.",
            "B) 24 horas.",
            "C) 48 horas.",
            "D) No hay restricción."
        ],
        answer: 1
    },
    {
        /* Pregunta 40 */
        question: "40. 2.1.40\n¿Cómo permanecerá la puerta entre cabina de vuelo y cabina de pasaje durante la carga/descarga de combustible con pasaje embarcando, a bordo o desembarcando?",
        options: [
            "A) Cerrada. Las comunicaciones entre ambas cabinas pueden hacerse vía interfono.",
            "B) Es indiferente.",
            "C) Debe permanecer abierta.",
            "D) Si hay alerta de bomberos, no es obligatorio que permanezca abierta."
        ],
        answer: 2
    },
    {
        /* Pregunta 41 */
        question: "41. 2.1.41\n¿Podemos llevar a un niño menor de 12 años separado de un acompañante adulto que esté viajando en otra clase?",
        options: [
            "A) No, está prohibido.",
            "B) Sí, está permitido en cualquier caso.",
            "C) Sí, pero deberá ser considerado como un niño sin acompañar (UM), para asegurar que el niño es asistido en caso de una situación de emergencia.",
            "D) Si al pasajero de al lado no le importa responsabilizarse de él, no hay problema."
        ],
        answer: 2
    },
    {
        /* Pregunta 42 */
        question: "42. 2.1.42\n¿Qué es obligatorio que lleven los perros SVAN para su transporte en cabina?",
        options: [
            "A) Bozal.",
            "B) Correa/arnés.",
            "C) Tienen que ir dentro de un transportín para animales.",
            "D) No es obligatorio que lleven ningún sistema de retención."
        ],
        answer: 1
    },
    {
        /* Pregunta 43 */
        question: "43. 2.1.43\nLa luz de aviso SLIDE ARMED de las puertas:",
        options: [
            "A) Se enciende cuando la rampa correspondiente está armada y se lleva hacia arriba la palanca de control. El rótulo SLIDE ARMED es de color blanco.",
            "B) Se enciende cuando la rampa correspondiente está armada y se lleva hacia arriba la palanca de control. Es de color rojo.",
            "C) Se enciende cuando la rampa correspondiente está armada y se lleva hacia arriba la palanca de control. El aviso saltará en cabina de vuelo, que nos informará de que dicha rampa está armada.",
            "D) Está ubicado en el FAP y en cabina de vuelo."
        ],
        answer: 0
    },
    {
        /* Pregunta 44 */
        question: "44. 2.1.44\n¿Cuándo se ha de reemplazar a un sobrecargo?",
        options: [
            "A) No es necesario reemplazar al sobrecargo, ni en base ni fuera de base.",
            "B) Cuando no haya imaginarias disponibles en base.",
            "C) Cuando haya más de 2 TCP inexpertos.",
            "D) Cuando se incapacite fuera de base será sustituido por el TCP mejor cualificado, que actuará como sobrecargo hasta llegar a base."
        ],
        answer: 3
    },
    {
        /* Pregunta 45 */
        question: "45. 2.1.45\nEn el procedimiento de repostado de combustible con pasajeros a bordo o embarcando, ¿cuál de las siguientes afirmaciones es correcta?",
        options: [
            "A) Se podrá hacer uso sin restricciones de los PED.",
            "B) Las puertas del lado derecho deberán estar cerradas y con las rampas armadas.",
            "C) La puerta de cabina de vuelo deberá permanecer cerrada.",
            "D) La tripulación de vuelo será la mínima requerida."
        ],
        answer: 0
    },
    {
        /* Pregunta 46 */
        question: "46. 2.1.46\n¿Cuál de los siguientes animales puede viajar en cabina de pasaje sin tener en cuenta restricciones de peso ni separación de filas?",
        options: [
            "A) Perros de asistencia (SVAN).",
            "B) Perros de rescate (SVAN).",
            "C) Perros de servicio a pasajeros con discapacidad psiquiátrica (SVAN).",
            "D) Dos animales de la misma camada viajando en un mismo contenedor."
        ],
        answer: 1
    },
    {
        /* Pregunta 47 */
        question: "47. 2.1.47\n¿Cuándo sentaremos a un SCP en salida de emergencia?",
        options: [
            "A) En caso de overbooking.",
            "B) Cuando se trate de un DEPA, siempre que vaya acompañado por dos escoltas mínimo.",
            "C) En ningún caso.",
            "D) Cuando se trate de un DEPU."
        ],
        answer: 2
    },
    {
        /* Pregunta 48 */
        question: "48. 2.1.48\nLos tripulantes no podrán:",
        options: [
            "A) Iniciar un período de actividad aérea con un nivel de alcohol en sangre de más de 0,2 por mil.",
            "B) Iniciar un período de actividad aérea con un nivel de alcohol en sangre de más de 0,5 por mil.",
            "C) Consumir bebidas alcohólicas durante las 9 horas anteriores a la hora de presentación de un período de imaginaria.",
            "D) Consumir bebidas alcohólicas durante las 9 horas anteriores a la hora de presentación para la actividad aérea."
        ],
        answer: 0
    },
    {
        /* Pregunta 49 */
        question: "49. 2.1.49\n¿Cuántos INAD podrán ser aceptados en un vuelo?",
        options: [
            "A) No existe limitación salvo si se presume peligrosidad, que podrán aceptarse un máximo de dos pasajeros por vuelo con dos escoltas de Iberia cada uno.",
            "B) Podrán aceptarse un máximo de dos pasajeros por vuelo con dos escoltas de Iberia cada uno.",
            "C) Podrán aceptarse un máximo de dos, hasta cinco si son familia.",
            "D) No existe ningún tipo de limitación."
        ],
        answer: 0
    },
    {
        /* Pregunta 50 */
        question: "50. 2.1.50\nLos TCP se asegurarán de que los pasajeros de categorías especiales han leído y comprendido el díptico entregado al acceder al avión:",
        options: [
            "A) Antes de dar lista la cabina.",
            "B) Antes del cierre de puertas.",
            "C) Antes del pushback.",
            "D) Antes del aterrizaje."
        ],
        answer: 0
    },
    {
        /* Pregunta 51 */
        question: "51. 2.1.51\n¿Para qué porcentaje del pasaje hace falta oxígeno de primera ayuda después de una despresurización?",
        options: [
            "A) 20 % de los pasajeros transportados.",
            "B) 5 % de los pasajeros transportados.",
            "C) 2 % de los pasajeros transportados.",
            "D) 100 % de los pasajeros transportados."
        ],
        answer: 2
    },
    {
        /* Pregunta 52 */
        question: "52. 2.1.52\n¿Qué sistema utilizarán los TCP para informar al sobrecargo del armado/desarmado y crosscheck de sus respectivas rampas?",
        options: [
            "A) El PA system.",
            "B) El interfono.",
            "C) No es necesaria esta información, puesto que el sobrecargo lo comprueba en el FAP.",
            "D) El sobrecargo realizará una llamada a los diferentes puestos, vía interfono."
        ],
        answer: 0
    },
    {
        /* Pregunta 53 */
        question: "53. 2.1.53\nWhere must the pre-flight briefing take place?",
        options: [
            "A) In a designated briefing room, or on board the aircraft.",
            "B) While walking to the boarding gate.",
            "C) On the bus on the way to the plane.",
            "D) The purser will send it by mail."
        ],
        answer: 0
    },
    {
        /* Pregunta 54 */
        question: "54. 2.1.54\nIf the cockpit door entry is authorized by the flight crew:",
        options: [
            "A) We will listen 'ATTENTION CREW: OPEN DOORS'.",
            "B) The keypad's red light comes on steady, and indicates that the door is unlocked.",
            "C) The keypad's green light comes on steady, and indicates that the door is unlocked.",
            "D) The purser must press the 'cabin ready' key."
        ],
        answer: 2
    },
    {
        /* Pregunta 55 */
        question: "55. 2.1.55\nWhat do we need for cabin preparation before refueling/defueling with passengers on board?",
        options: [
            "A) No smoking signs off.",
            "B) Cabin curtains closed.",
            "C) Seatbelts signs on.",
            "D) Passenger briefing performed."
        ],
        answer: 3
    },
    {
        /* Pregunta 56 */
        question: "56. 2.1.56\nLas comprobaciones de cada TCP de su zona de responsabilidad en la cabina de pasaje se realizarán:",
        options: [
            "A) Cada 15 min.",
            "B) Cada 10 min.",
            "C) Cada 20 min.",
            "D) Cada 30 min."
        ],
        answer: 2
    },
    {
        /* Pregunta 57 */
        question: "57. 2.1.57\nLos TCP en vuelo de familiarización:",
        options: [
            "A) Son TCP que forman parte de la tripulación mínima requerida.",
            "B) Son TCP que viajan en situación.",
            "C) Son TCP que vuelan con familiares.",
            "D) Son TCP en exceso sobre el número mínimo de tripulantes de cabina requeridos."
        ],
        answer: 3
    },
    {
        /* Pregunta 58 */
        question: "58. 2.1.58\nAfter the callout 'ATTENTION CREW: CLOSE DOORS AND PREPARE CABIN FOR TAXI', which elements must be checked at lavatories?",
        options: [
            "A) The flapper of each disposal bin is closed and the water temperature is appropriate.",
            "B) Passenger call buttons are in off position.",
            "C) Lavatories are vacant and secured.",
            "D) The mirror door is locked."
        ],
        answer: 2
    }
    ]
},

	/*----------------------------------------------------------------------------------------*/	
	/*-------------------------- PROCEDIMIENTOS DE EMERGENCIA V.12 ---------------------------*/
	/*----------------------------------------------------------------------------------------*/
	
    battery4: {
		title: "Procedimientos de Emergéncia",
		subtitle: "WB A-330/350",
		questions: [
        {
    
    /* Pregunta 1 */
    question: "1. 2.2.1\nWhat does a NITSA briefing refer to?",
    options: [
        "A) It refers to the briefing from the captain to the purser prior to the flight.",
        "B) To the safety and rescue briefing.",
        "C) To the commercial briefing.",
        "D) To the briefing given by the captain to the purser including nature, intentions, timing, specifics and announcement in the event of an emergency."
    ],
    answer: 1
},
{
    /* Pregunta 2 */
    question: "2. 2.2.2\nA NITSA briefing:",
    options: [
        "A) Is a preflight briefing from the captain to the purser.",
        "B) Is a preflight briefing from the captain to all crew members.",
        "C) Is about commercial task.",
        "D) In a planned emergency landing or ditching, the captain briefs the purser about the nature, intentions, time, specials and the announcement."
    ],
    answer: 1
},
{
    /* Pregunta 3 */
    question: "3. 2.2.3\nWhat does the letter A mean in the acronym NITSA?",
    options: [
        "A) It means to ABBREVIATE the last steps before a possible evacuation.",
        "B) It means to ASSIST passengers with special needs.",
        "C) It means ANNOUNCEMENT, who will inform passengers and when.",
        "D) It means ADJUST seatbelts."
    ],
    answer: 2
},
{
    /* Pregunta 4 */
    question: "4. 2.2.4\nIn the NITSA briefing, the letter T refers to:",
    options: [
        "A) Time (expressed in terms of ETA) available to prepare the cabin.",
        "B) Temperature we will find in the area where EMERGENCY LANDING is to take place.",
        "C) Flight crew member who will make the announcement to the passenger cabin.",
        "D) Expected in-flight turbulence."
    ],
    answer: 0
},
{
    /* Pregunta 5 */
    question: "5. 2.2.5\nWhat is the meaning of the letter N in the acronym NITSA?",
    options: [
        "A) Normal: type of ditching we are going to perform.",
        "B) Nature: kind of emergency we have.",
        "C) Nation: where we are going to make the emergency landing.",
        "D) Number: number of passengers on board."
    ],
    answer: 1
},
{
    /* Pregunta 6 */
    question: "6. 2.2.6\nWhen and for what purpose is a NITSA briefing provided?",
    options: [
        "A) After hearing the callout 'ATTENTION CREW! AT STATIONS!' (x2) to initiate the evacuation.",
        "B) After hearing the callout 'BRACE FOR IMPACT!, ¡POSTURA DE IMPACTO!' to prevent a possible evacuation.",
        "C) Before entering the runway for take-off, for the cabin crew to sit down and fasten their safety harnesses.",
        "D) After hearing the callout 'PURSER TO COCKPIT, PLEASE!' (x2), to prepare the passenger cabin for a possible ditching or emergency landing."
    ],
    answer: 3
},
{
    /* Pregunta 7 */
    question: "7. 2.2.7\nWhat is the meaning of the letter S in the NITSA briefing?",
    options: [
        "A) Safety.",
        "B) Special instructions (supplementary information).",
        "C) Standard procedures.",
        "D) Safeways available."
    ],
    answer: 1
},
{
    /* Pregunta 8 */
    question: "8. 2.2.8\nIn case of depressurization, the crew rest occupants will return to the cabin when the flight crew notify (via P.A.):",
    options: [
        "A) 'CABIN CREW: PASSENGER OXYGEN CHECK!/¡COMPROBACIÓN OXÍGENO PASAJEROS!'",
        "B) 'CABIN CREW: BREATHABLE ATMOSPHERE, SECURE CABIN'/\"ATMÓSFERA RESPIRABLE.\"",
        "C) 'CABIN CREW: PREPARE FOR DESCENT.'",
        "D) 'EMERGENCY DESCENT!/¡DESCENSO DE EMERGENCIA!'"
    ],
    answer: 1
},
{
    /* Pregunta 9 */
    question: "9. 2.2.9\nWhen a HI chime sounds, the cabin lights come on full bright, the exit signs come on, the fasten seatbelt, non smoking/no ped signs come on. What could be happening?",
    options: [
        "A) Depressurization.",
        "B) Turbulence.",
        "C) Ditching.",
        "D) It’s an emergency call from the cockpit."
    ],
    answer: 0
},
{
    /* Pregunta 10 */
    question: "10. 2.2.10\nIn a depressurization with a descent in two or more phases, which callouts will we hear during the intermediate levelling phase?",
    options: [
        "A) 'CABIN CREW: OXYGEN CHECK.'",
        "B) 'CABIN CREW: BREATHABLE ATMOSPHERE, SECURE CABIN!/iATMÓSFERA RESPIRABLE!'",
        "C) 'CABIN CREW: PASSENGER OXYGEN CHECK/iCOMPROBAClÓN OXÍGENO DE PASAJEROS!',",
        "   then 'CABIN CREW: PREPARE FOR DESCENT!'",
        "D) 'EMERGENCY DESCENT!/iDESCENSO DE EMERGENCIA!'"
    ],
    answer: 2
},
{
    /* Pregunta 11 */
    question: "11. 2.2.11\nUpon hearing the callout 'EMERGENCY DESCENT!/iDESCENSO DE EMERGENCIA!', the CABIN CREW:",
    options: [
        "A) Will provide oxygen to passengers who may need it.",
        "B) Shall secure and don the nearest possible mask and give appropriate messages. As soon as possible, check the opening of PSUs and release of masks.",
        "C) Shall take the nearest portable oxygen cylinder with two masks, and by putting one of them on, the crew members shall check that the passengers are using the fixed system masks (PSU) correctly.",
        "D) Will check that all passengers are using seatbelts and that all trolleys in the aisle are secured."
    ],
    answer: 1
},
{
    /* Pregunta 12 */
    question: "12. 2.2.12\nIf the automatic mask drop system fails at 14,000 ft, how can we open the PSUs?",
    options: [
        "A) The masks drop at 11,300 ft.",
        "B) There is no other way to open them.",
        "C) From the cockpit, by selecting MASK MAN ON only.",
        "D) Manually from the cockpit, by selecting the MASK MAN ON switch, or by opening the PSU covers individually with the MRT."
    ],
    answer: 3
},
{
    /* Pregunta 13 */
    question: "13. 2.2.13\nDuring a depressurization, after hearing 'EMERGENCY DESCENT!\"¡DESCENSO DE EMERGENCIA!': which callouts can we hear next?",
    options: [
        "A) 'CABIN CREW: BREATHABLE ATMOSPHERE, SECURE CABIN!/iATMÓSFERA RESPIRABLE!'",
        "B) 'CABIN CREW: PASSENGER OXYGEN CHECK!/iCOMPROBAClÓN OXÍGENO DE PASAJEROS!'",
        "C) 'ATTENTION CREW AT STATIONS!' (x2).",
        "D) 'CABIN CREW REPORT FOR DUTY!' (x2)."
    ],
    answer: 0
},
{
    /* Pregunta 14 */
    question: "14. 2.2.14\nAfter the 30 seconds wait in the emergency flight deck access procedure, for how long will the flight deck door be unlocked?",
    options: [
        "A) 5 minutes.",
        "B) 5 seconds.",
        "C) 3 seconds.",
        "D) The door remains unlocked for a reasonable period of time."
    ],
    answer: 3
},
{
    /* Pregunta 15 */
    question: "15. 2.2.15\nWhich position should a crewmember seated in the opposite direction of travel adopt in the event of an emergency landing?",
    options: [
        "A) Upright position, head against the backrest, legs spread wide and firmly on the floor, hands under the legs.",
        "B) Head inclined towards the chest and legs spread, with feet firmly on the ground.",
        "C) Head bowed, hands supporting the nape of the neck.",
        "D) Knees together and ankles crossed."
    ],
    answer: 0
},
{
    /* Pregunta 16 */
    question: "16. 2.2.16\nIn the event of a rejected take-off, the cabin crew must:",
    options: [
        "A) Leave their seats to further assess conditions and/or passenger reactions immediately.",
        "B) Immediately notify the flight crew the conditions and nature of the emergency.",
        "C) Make an emergency call to the cockpit to obtain information as soon as possible.",
        "D) Remain seated in their jumpseats, until the aircraft comes to a complete stop. If the CABIN CREW suspects or notices the development of an emergency situation, they can leave their jumpseats to further assess any conditions and/or passenger reactions."
    ],
    answer: 3
},
{
    /* Pregunta 17 */
    question: "17. 2.2.17\nAt what point will we act on the C/B without the captain's authorization?",
    options: [
        "A) Never.",
        "B) We will reset the C/B in the event of a fire involving aircraft electrical equipment.",
        "C) For noise issues, we will pull C/B whenever we consider it.",
        "D) We will pull the C/Bs in the event of a fire involving aircraft electrical equipment (galleys, ovens...) and during the preparation of the cabin for an evacuation."
    ],
    answer: 3
},
{
    /* Pregunta 18 */
    question: "18. 2.2.18\nAfter an emergency landing, if an evacuation is necessary due to a suspicious package on board:",
    options: [
        "A) In this situation never evacuate, because handling agents will approach the stairs to proceed with the clearance.",
        "B) All doors shall be used for evacuation, regardless of the situation of the package.",
        "C) The door opposite the package will not be used for evacuation.",
        "D) Evacuation will be always driven through the rear doors."
    ],
    answer: 2
},
{
    /* Pregunta 19 */
    question: "19. 2.2.19\nHow shall we proceed if we open a door in emergency operation and the slide does not automatically inflate?",
    options: [
        "A) We will block the exit, redirect the passengers to another door, with clear and positive orders, managing the crowd with control.",
        "B) We will close the door.",
        "C) We will inform the captain.",
        "D) We must pull the manual inflation handle."
    ],
    answer: 3
},
{
    /* Pregunta 20 */
    question: "20. 2.2.20\nIn moderate or severe turbulence, the flight crew shall turn on the seatbelt signal and issue the following callout:",
    options: [
        "A) 'CABIN CREW: TURBULENCE.'",
        "B) 'ATTENTION CREW AT THE STATIONS!'",
        "C) 'PURSER TO COCKPIT, PLEASE! (x2).",
        "D) They shall only switch on the seatbelt signal. No callouts are needed."
    ],
    answer: 0
},
{
    /* Pregunta 21 */
    question: "21. 2.2.21\nIf we hear 'CABIN CREW: TURBULENCE', what is the first thing we should do?",
    options: [
        "A) Check that passengers have their seatbelts fastened.",
        "B) The cabin crew must immediately sit down, take the nearest seat (including passenger seat) and fasten seatbelt/harness.",
        "C) Half of the crew collects the service and the other half checks that passengers are wearing their seatbelts fastened.",
        "D) Wait for orders from the purser."
    ],
    answer: 1
},
{
    /* Pregunta 22 */
    question: "22. 2.2.22\nWhen smoke is detected in the LDMCR:",
    options: [
        "A) Cabin crew must establish communications with the flight crew and wait for their decisions.",
        "B) Cabin crew must activate the FES (Fire Extinguisher System) straight.",
        "C) The smoke warning is unjustified, so cabin crew will not do anything.",
        "D) The cabin crew must establish communication with the flight crew, silence the chime in all cabin zones, feel for heat and open the crew rest door with caution and search for the presence of smoke/fumes and/or fire."
    ],
    answer: 3
},
{
    /* Pregunta 23 */
    question: "23. 2.2.23\nWhen the flight crew by using the P.A. system announces 'CABIN CREW: TAKE YOUR SEATS':",
    options: [
        "A) The cabin crew must take their seats as soon as possible.",
        "B) The cabin crew can continue with commercial tasks.",
        "C) The cabin crew must immediately sit down.",
        "D) The cabin crew must stow and secure large items first, such as trolleys. Secure the cabin, ensure that the lavatories are unoccupied. Secure the galleys and secure themselves."
    ],
    answer: 3
},
{
    /* Pregunta 24 */
    question: "24. 2.2.24\nWhat does the steady red light on the entry keypad next to the cockpit door indicate?",
    options: [
        "A) It means nothing.",
        "B) A request to enter the cockpit has been made, but the pilots have denied entry and indicates that the door is locked. Emergency access, the buzzer, and the keypad are inhibited for 5 minutes.",
        "C) An emergency request to enter the cockpit has been made, but the pilots have taken no action.",
        "D) After 30 seconds, the keypad's red light comes on steady, and the cabin crew can then push the door open."
    ],
    answer: 1
},
{
    /* Pregunta 25 */
    question: "25. 2.2.25\nOnce the emergency code has been entered to access the cockpit:",
    options: [
        "A) The red light on the entry keypad changes to flashing blue.",
        "B) The red light on the entry keypad changes to flashing green.",
        "C) A buzzer will sound continuously in the cockpit and the keypad's green light flashes. After 30 seconds, the keypad's green light comes on steady, and the cabin crew can then push the door open.",
        "D) The green light on the entry keypad changes from steady to flashing."
    ],
    answer: 2
},
{
    /* Pregunta 26 */
    question: "26. 2.2.26\nThe captain announces: 'PURSER TO COCKPIT PLEASE!' (x2), in order to provide the purser:",
    options: [
        "A) The brace for impact, procedure.",
        "B) Information about weather conditions at destination.",
        "C) Information about flight time.",
        "D) The NITSA briefing."
    ],
    answer: 3
},
{
    /* Pregunta 27 */
    question: "27. 2.2.27\nThe 'PASSENGERS EVACUATE/EVACUACIÓN, EVACUACIÓN, EVACUACIÓN' command shall be given by:",
    options: [
        "A) Repetitively switching on & off 'SEAT BELTS' and 'NO PED' signs.",
        "B) Megaphone or aloud, as the PA will not work.",
        "C) PRIO CAPT.",
        "D) PA system, evacuation alarm, megaphone or aloud."
    ],
    answer: 3
},
{
    /* Pregunta 28 */
    question: "28. 2.2.28\nIn the event of an emergency landing, what will the first officer do once on ground?",
    options: [
        "A) Inform the rescue teams about the incident.",
        "B) As the F/O is the last person to leave the aircraft: she, he will check that all persons have evacuated the aircraft.",
        "C) Count the number of passengers.",
        "D) The First Officer proceeds to the cabin and takes the designated emergency equipment, evacuates the aircraft, by using the nearest available exit, helps passengers on ground and directs them away from the aircraft."
    ],
    answer: 3
},
{
    /* Pregunta 29 */
    question: "29. 2.2.29\nBriefing to ABP (Able Bodied Passenger) that is selected to assist in managing emergency evacuation concerns:",
    options: [
        "A) How to open the door in any emergency and initiate an evacuation.",
        "B) How to serve meals.",
        "C) How to disarm the slide when the crew member in incapacitated.",
        "D) To replace the cabin crew member in case the crew member becomes incapacitated, how to assess conditions outside the aircraft, how to open the exit, how to protect oneself from going overboard, to manually inflate the slide, commands to be used during the evacuation."
    ],
    answer: 3
},
{
    /* Pregunta 30 */
    question: "30. 2.2.30\nThe selection of Able Bodied Passengers (ABPs) may be based on:",
    options: [
        "A) Their ability to understand instructions, their physical ability, and their ability to stay calm.",
        "B) Their assigned seat.",
        "C) If entering the aircraft before the rest.",
        "D) It is not relevant."
    ],
    answer: 0
},
{
    /* Pregunta 31 */
    question: "31. 2.2.31\nWhat can happen if we hear: 'CABIN CREW REPORT FOR DUTY' (x2) in cruise?",
    options: [
        "A) The flight crew does it in case of turbulences.",
        "B) The cabin crew must prepare cabin for an emergency landing.",
        "C) The cabin crew makes this announcement in case of depressurization.",
        "D) The cabin crew is required in any emergency situation like in case of smoke/fire, to warn all cabin crew, after an emergency descent or any other unforeseen occurrence."
    ],
    answer: 3
},
{
    /* Pregunta 32 */
    question: "32. 2.2.32\nAfter listening 'PASSENGERS EVACUATE' 'EVACUACIÓN, EVACUACIÓN, EVACUACIÓN', the cabin crew must shout first of all:",
    options: [
        "A) 'BLOCKED EXIT', 'GO THAT WAY.'",
        "B) 'COME THIS WAY.'",
        "C) 'DO NOT SMOKE.'",
        "D) 'EVACUATE, EVACUATE, SEATBELT OFF!/¡EVACUACIÓN, EVACUACIÓN, DESABRÓCHENSE EL CINTURÓN!'"
    ],
    answer: 3
},
{
    /* Pregunta 33 */
    question: "33. 2.2.33\nIn case of ditching, who is in charge of disconnecting the slide from the plane?",
    options: [
        "A) The cabin crew.",
        "B) Every kind of ABP (Able Body Passenger).",
        "C) Any passenger.",
        "D) It is better not to disconnect the slide."
    ],
    answer: 0
},
{
    /* Pregunta 34 */
    question: "34. 2.2.34\nWhen a fire occurs in an enclosed area such as a lavatory, an overhead bin, a closet or a crew rest area…, how should we act?",
    options: [
        "A) Open the door immediately.",
        "B) Keep the door closed until we are ready to fight the possible fire.",
        "C) Do nothing until we receive captain instructions.",
        "D) Make a P.A. announcement about the fire situation."
    ],
    answer: 1
},
{
    /* Pregunta 35 */
    question: "35. 2.2.35\nIndications in case of smoke/fire in lavatory:",
    options: [
        "A) 'EMERGENCY' message on AIP, pink light on ACP.",
        "B) On FAP: the SMOKE DETECTION page automatically appears and displays the location of the affected lavatory, the SMOKE RESET key comes on steady red, the SMOKE RESET hard key comes on steady. In the cabin: all AIPs indicate the affected lavatory, the related ACP flashes amber, the related lavatory smoke/call indicator flashes amber, the SMOKE/RESET key on the related AAP comes on steady red. A triple low chime sounds every 30 seconds in the cabin.",
        "C) Acoustic alarm sounds in 1L, 2L, 3L and 4L. Red light EVAC on AAP and FAP, 'SMOKE ALERT' message and flashing red light on all AIP.",
        "D) 'SMOKE LAV X' message in the nearest AIP."
    ],
    answer: 1
},
{
    /* Pregunta 36 */
    question: "36. 2.2.36\nWhen smoke is detected in the LDMCR:",
    options: [
        "A) On the respective AAP, the smoke LAV button comes on steady, on the respective ACPs the amber light flashes, all AIPs indicate the affected area and the red indicator comes on flashing, the smoke indicator located next to the staircase door flashes amber.",
        "B) There are no alerts.",
        "C) On the FAP, the smoke reset button comes on and the FAP smoke detection page comes on, on the respective AAP, the smoke LAV button comes on steady, on the respective ACPs the amber light flashes, all AIPs indicate the affected area and the red indicator comes on flashing, the smoke indicator located next to the staircase door flashes amber and a triple low chime sounds every 30 s in the cabin.",
        "D) The captain will inform us about that circumstance."
    ],
    answer: 2
},
{
    /* Pregunta 37 */
    question: "37. 2.2.37\nAccording to the role definitions of the fire procedure, indicate the correct option:",
    options: [
        "A) The firefighter has to protect him/herself in order to attack the fire immediately and, once is out, warn the rest of the crew to ensure that it does not reignite.",
        "B) If there are other CC, they shall be exempted from safety duties and shall continue to perform commercial functions.",
        "C) The communicating CC shall be ready to replace the active CC and exchange functions when required.",
        "D) The assistant CC, in addition to providing extra firefighting equipment, will assist the firefighter CC and remove flammable material from the area, being prepared to stand in as the firefighter when required."
    ],
    answer: 3
},
{
    /* Pregunta 38 */
    question: "38. 2.2.38\nSelect a function associated with 'SUPPORT CABIN CREWMEMBERS', according to the role definition in the fire procedure:",
    options: [
        "A) Fighting the fire.",
        "B) Providing assistance (e.g. to redistribute passengers, calm and reassure passengers).",
        "C) Opening PSU with the MRT at their station.",
        "D) Complete the commercial service that the cabin crew may have not completed."
    ],
    answer: 1
}, 
{
    /* Pregunta 39 */
    question: "39. 2.2.39\nWhat should be done after a fire in a lithium battery has been extinguished and cooled down?",
    options: [
        "A) Roll up the battery with blankets and put it in a wardrobe.",
        "B) Connect it to the nearest socket to check if it works.",
        "C) Immerse it in non-alcoholic liquid.",
        "D) No further action is required once the fire is extinguished."
    ],
    answer: 3
},
{
    /* Pregunta 40 */
    question: "40. 2.2.40\nWhat three roles are defined in the fire procedure?",
    options: [
        "A) The Firefighter, the Informer and the Assistant.",
        "B) The Firefighter, the Communicator and the Assistant.",
        "C) The Firefighter, the Communicator and the Additional.",
        "D) The Active, the Communicator and the Assistant."
    ],
    answer: 1
},
{
    /* Pregunta 41 */
    question: "41. 2.2.41\nIn the fire/smoke procedure in an overhead compartment, how would the firefighter CC determine the temperature and the presence of fire?",
    options: [
        "A) By slightly opening the overhead compartment to insert the extinguisher nozzle.",
        "B) By discharging the extinguisher around the overhead compartment.",
        "C) By using the back of the hand.",
        "D) By quickly opening and closing the overhead compartment as many times as necessary to assess the situation."
    ],
    answer: 2
},
{
    /* Pregunta 42 */
    question: "42. 2.2.42\nAs part of the roles of the cabin crew during firefighting, the communicator:",
    options: [
        "A) Informs the assistant firefighter of everything related to the emergency so that he/she can go to the cockpit and personally inform the flight crewmembers.",
        "B) Maintains the communication link between the cabin and the flight crew, via an interphone that is near the firefighting scene.",
        "C) Must be prepared to replace the firefighter, and exchange roles if required.",
        "D) Once the fire has been extinguished, informs the flight crew about it by interphone."
    ],
    answer: 1
},
{
    /* Pregunta 43 */
    question: "43. 2.2.43\nWhich signals are activated when smoke/fire occurs in a passenger cabin seat?",
    options: [
        "A) Aural alert.",
        "B) Amber light flashing on nearest ACP.",
        "C) Indicator on the aisle side of the seat row comes ON (blue or white).",
        "D) In the passenger seat, no signal is activated in case of fire or smoke."
    ],
    answer: 2
},
{
    /* Pregunta 44 */
    question: "44. 2.2.44\nWhich signals are activated when smoke/fire occurs in a galley?",
    options: [
        "A) Aural alert.",
        "B) Amber light flashing in nearest ACP.",
        "C) None.",
        "D) AIP illuminates red flashing."
    ],
    answer: 3
},
{
    /* Pregunta 45 */
    question: "45. 2.2.45\nAccording to the roles assumed by the cabin crew in the event of a fire, could the communicator replace the assistant firefighter at any time?",
    options: [
        "A) No, she/he could not.",
        "B) Yes, she/he could not.",
        "C) No, unless the firefighter needs to be replaced.",
        "D) Only with the captain's authorization."
    ],
    answer: 0
},
{
    /* Pregunta 46 */
    question: "46. 2.2.46\nIf the source of the fire is located in a lavatory, how should we proceed?",
    options: [
        "A) Open the door where the fire is in order to eliminate the combustion gases.",
        "B) Do not open the door before checking for heat. Move the back of the hand along the door to evaluate the presence/severity of the fire.",
        "C) We will not do anything until we receive instructions from the captain.",
        "D) Make an announcement over the P.A. to inform the passengers of the situation."
    ],
    answer: 1
},
{
    /* Pregunta 47 */
    question: "47. 2.2.47\nDuties of the firefighter crew member during a fire event:",
    options: [
        "A) Provides extra firefighting equipment, removes flammable material from the area and is prepared to replace the firefighter crew member when required.",
        "B) Provides the flight crew a detailed description of the situation in the passenger cabin.",
        "C) Must be prepared to replace the firefighter, and exchange roles if required.",
        "D) Alerts other cabin crewmember, obtains the nearest fire extinguisher (consider the use of a PBE), immediately locates the source of the fire and fights the fire."
    ],
    answer: 3
},
{
    /* Pregunta 48 */
    question: "48. 2.2.48\nCan we open the entrance hatch of the LDMCR after discharging the FES (Fire Extinguishing System)?",
    options: [
        "A) Yes, just to see if it worked.",
        "B) Never.",
        "C) You can if the captain tells you to do so.",
        "D) There is not such a system on the plane."
    ],
    answer: 1
},
{
    /* Pregunta 49 */
    question: "49. 2.2.49\nWhat does the communicator do whithin the firefighting roles?",
    options: [
        "A) Informs the assistant firefighter to go in person to the cockpit.",
        "B) Must inform the flight crew of the fire, maintain the communication link via nearest interphone, provide accurate description of the firefighting effort and of the situation in the cabin.",
        "C) Removes flammable material from the fire area.",
        "D) Fights the fire."
    ],
    answer: 1
},
{
    /* Pregunta 50 */
    question: "50. 2.2.50\nWhat is the FES system?",
    options: [
        "A) The Fire Extinguishing System in the A330 Cabin Crew Rest Compartment.",
        "B) The Fire Extinguishing System in the A330/350 Cabin Crew Rest Compartment.",
        "C) The Fire Extinguishing System in the A350 Cabin Crew Rest Compartment.",
        "D) There is not such a system on the plane."
    ],
    answer: 0
},
{
    /* Pregunta 51 */
    question: "51. 2.2.51\nFunctions of the Assistant Firefighter:",
    options: [
        "A) To locate the source of the fire immediately.",
        "B) To provide extra firefighting equipment, support and coordinate the firefighting effort, remove flammable material from the area, must be prepared to replace the firefighter, and exchange roles, if required.",
        "C) To monitor the affected area.",
        "D) To locate the source of the fire immediately."
    ],
    answer: 1
},
{
    /* Pregunta 52 */
    question: "52. 2.2.52\nWhere can both the main hatch and the emergency hatch of LDMCR be opened from?",
    options: [
        "A) They can be opened from both the inside and from the cabin.",
        "B) Only from the inside.",
        "C) Only from the cabin.",
        "D) The emergency hatch can be opened only from the inside whilst the main hatch can be opened from both the inside and from the cabin."
    ],
    answer: 0
},
{
    /* Pregunta 53 */
    question: "53. 2.2.53\nIn case of planned emergency landing, when should the cabin crew stop shouting the brace for impact command?",
    options: [
        "A) When they feel tired.",
        "B) When the aircraft comes to a complete stop.",
        "C) When passengers seem to be organized.",
        "D) At flight crew discretion."
    ],
    answer: 1
},
{
    /* Pregunta 54 */
    question: "54. 2.2.54\nIn case of fire in the LDMCR, if unable to extinguish the fire with a fire extinguisher, close the main exit hatch and discharge the FES. Consequently:",
    options: [
        "A) The cabin crew can open both hatches to check if the fire is extinguished.",
        "B) The main exit hatch and the emergency hatch must remain closed until arrival.",
        "C) The cabin crew can open the main hatch to check if the fire is extinguished but not the emergency hatch.",
        "D) The cabin crew can open the emergency hatch to check if the fire is extinguished but not the main hatch."
    ],
    answer: 1
},
{
    /* Pregunta 55 */
    question: "55. 2.2.55\nA350. As a cabin crew 3S, my responsibilities/duties in an emergency cabin evacuation are:",
    options: [
        "A) I will open the right exit and assist the evacuation of zone 3. Responsible for taking: flashlights, FAK and SSK.",
        "B) I will open the right exit and assist the evacuation of zone 4. Responsible for taking: ELT, megaphone, flashlights, FAK and SSK.",
        "C) I will help cabin crew 4 with the evacuation.",
        "D) When the situation permits it, I will go to zone 3 for helping with the evacuation. I will give the appropriate message in order to decongest the area as soon as possible."
    ],
    answer: 3
},
{
    /* Pregunta 56 */
    question: "56. 2.2.56\nWhat does EXIT BYPASS mean?",
    options: [
        "A) Exit bypass is a means of maintaining a balance in the passengers' evacuation flow by directing passengers to all alternate usable exits (not necessarily the closest) which are under utilized. This method speeds up the evacuation process and alleviates exits that may become congested.",
        "B) Doors may become congested due to several factors so the cabin crew must attract passengers to unusable exits in order to wait there because this exit is blocked by the cabin crew.",
        "C) It is an unusable exit. Cabin crew does not have to protect it.",
        "D) Exit bypass is a means of maintaining this exit blocked during the evacuation."
    ],
    answer: 0
},
{
    /* Pregunta 57 */
    question: "57. 2.2.57\nWhere are the CC QRH (Cabin Crew Quick Reference Handbook) located?",
    options: [
        "A) In the CAS Emergency Equipment Stowage Compartment.",
        "B) In the PBE compartments.",
        "C) Only in the CAS occupied by required CC.",
        "D) Next to the cabin doors."
    ],
    answer: 0
},
{
    /* Pregunta 58 */
    question: "58. 2.2.58\nWhen will a circuit breaker trip automatically?",
    options: [
        "A) When any electrical equipment is switched off.",
        "B) When a predetermined electrical load is detected.",
        "C) When the CC resets a tripped CB.",
        "D) Within a fire event in a predetermined galley."
    ],
    answer: 1
},
{
    /* Pregunta 59 */
    question: "59. 2.2.59\nActions to take when an overheated PED is plugged to the aircraft power supply:",
    options: [
        "A) To pour water or other non-alcoholic liquids in order to cool it down.",
        "B) To transfer the PED into an appropriate bag.",
        "C) To disconnect the power supply if safe to do so and switch off the ISPSS (PAX SYS sw).",
        "D) To monitor the plugged PED to test if it finally burns."
    ],
    answer: 2
},
{
    /* Pregunta 60 */
    question: "60. 2.2.60\nWhere is the PAX SYS sw located?",
    options: [
        "A) Only on the VCC (A330).",
        "B) On the RCC and on the FAP (A330).",
        "C) Only in the cockpit.",
        "D) In the cockpit, on the VCC (A330) and optionally on the FAP."
    ],
    answer: 3
},
{
    /* Pregunta 61 */
    question: "61. 2.2.61\nWhat kind of verbal commands must the cabin crew use during an evacuation?",
    options: [
        "A) Extensive, as long as the situation requires it.",
        "B) Assertive and positive.",
        "C) Only it will be possible to use body language due to the panic and passengers cries.",
        "D) The captain is the only crewmember authorized to speak to the passengers in an emergency."
    ],
    answer: 1
},
{
    /* Pregunta 62 */
    question: "62. 2.2.62\nHow will the firefighter, the communicator and the assistant firefighter perform their tasks?",
    options: [
        "A) It depends on the type of fire.",
        "B) In correlative order.",
        "C) Simultaneously.",
        "D) The communicator will always be the first to take action."
    ],
    answer: 2
},
{
    /* Pregunta 63 */
    question: "63. 2.2.63\nWhere are the C/Bs of the Video Control Center located?",
    options: [
        "A) On the rear galley roof panel.",
        "B) On the front galley roof panel.",
        "C) Inside the Video Control Center.",
        "D) In the cabin, on the 5001VE overhead panel, near the cockpit door."
    ],
    answer: 3
},
{
    /* Pregunta 64 */
    question: "64. 2.2.64\nA350 What should be done in case of smoke/fumes/fire coming from the RCC, with no RCC MAIN POWER pb-sw available?",
    options: [
        "A) Remove the related breakers in the flight deck.",
        "B) Turn the PAX SYS pb switch off.",
        "C) Remove the related breakers in the rear galley.",
        "D) Turning off electricity is not possible."
    ],
    answer: 1
},
{
    /* Pregunta 65 */
    question: "65. 2.2.65\nWhat should CC do when they hear 'ATTENTION CREW! AT STATIONS!' (x2)?",
    options: [
        "A) Proceed to their emergency stations and fasten their seatbelts under any circumstance.",
        "B) Proceed to the front galley with the QRH to receive further instructions.",
        "C) Proceed to their emergency stations, arm the slide if it is not and fasten their seatbelts, unless the plane is being boarded or disembarked.",
        "D) Proceed to their emergency stations and make an interphone call to cockpit."
    ],
    answer: 2
},
{
    /* Pregunta 66 */
    question: "66. 2.2.66\nA350 Does the lavatory 'RETURN TO SEAT' sign go on in case of a depressurization?",
    options: [
        "A) Yes, and passengers must return to their seats in order to get a mask.",
        "B) Yes, but passengers must stay inside the lavatory.",
        "C) No, 2 masks will immediately drop down from the lavatory ceiling; passengers must stay inside the lavatory.",
        "D) No, but passengers must return to their seats to get a mask anyway."
    ],
    answer: 2
},
{
    /* Pregunta 67 */
    question: "67. 2.2.67\nWhich callout will we hear in case of a precautionary disembarkation?",
    options: [
        "A) 'ATT. CREW: EVACUATE THE AIRCRAFT IMMEDIATELY'.",
        "B) 'CABIN CREW: CLEAR THE AIRCRAFT IMMEDIATELY', 'DESALOJO INMEDIATO DEL AVIÓN.'",
        "C) 'CABIN CREW: PLEASE, EVACUATE THE AIRCRAFT.'",
        "D) 'ATT. CREW: LEAVE THE AIRCRAFT IMMEDIATELY', 'DESALOJO INMEDIATO DEL AVIÓN.'"
    ],
    answer: 1
},
{
    /* Pregunta 68 */
    question: "68. 2.2.68\nAnte cualquier situación de emergencia que requiera la intervención de los TCP, se avisará desde cabina de vuelo mediante el mensaje:",
    options: [
        "A) 'TRIPULACIÓN A SUS PUESTOS' (x2).",
        "B) 'CABIN CREW REPORT FOR DUTY' (x2).",
        "C) 'ATTENTION CREW REPORT FOR DUTY'(x2).",
        "D) 'CABIN CREW TAKE YOUR SEATS'(x2)."
    ],
    answer: 1
},
{
    /* Pregunta 69 */
    question: "69. 2.2.69\nWhat types of turbulence are there?",
    options: [
        "A) Anticipated and unpredictable.",
        "B) Anticipated and severe.",
        "C) Light, medium and magenta.",
        "D) Light, moderate and severe."
    ],
    answer: 3
},
{
    /* Pregunta 70 */
    question: "70. 2.2.70\nWhen can we move a burning electronic device?",
    options: [
        "A) Five minutes after the flames went out.",
        "B) Immediately after the flames have been extinguished.",
        "C) Ten minutes after the flames went out.",
        "D) Do not attempt to pick up and move a smoking or burning device."
    ],
    answer: 3
},
{
    /* Pregunta 71 */
    question: "71. 2.2.71\nIf we find an inoperative door during an evacuation, what callout should we shout?",
    options: [
        "A) 'INOP EXIT, GO THIS WAY', 'SALIDA NO OPERATIVA, POR ALLÍ'.",
        "B) 'BLOCKED EXIT, GO THAT WAY', 'SALIDA NO OPERATIVA, POR ALLÍ'.",
        "C) 'BLOCKED EXIT, GO THAT WAY', 'SALIDA BLOQUEADA, POR ALLÍ'.",
        "D) 'CLOSED EXIT, GO THAT WAY', 'SALIDA CERRADA, POR ALLÍ'."
    ],
    answer: 2
},
{
    /* Pregunta 72 */
    question: "72. 2.2.72\nCallouts from cabin crew to pax in an emergency descent:",
    options: [
        "A) 'EMERGENCY DESCENT!', '¡DESCENSO DE EMERGENCIA!'",
        "B) 'CABIN CREW: BREATHABLE ATMOSPHERE, SECURE CABIN!', '¡ATMÓSFERA RESPIRABLE!'",
        "C) 'PULL THE MASKS DOWN!', '¡TIREN DE LA MÁSCARA!', 'PLACE IT OVER NOSE AND MOUTH!', '¡COLÓQUENLA SOBRE LA NARIZ Y LA BOCA!', 'REMAIN SEATED WITH YOUR SEATBELT FASTENED!', '¡PERMANEZCAN EN SUS ASIENTOS CON EL CINTURÓN DE SEGURIDAD ABROCHADO!'",
        "D) 'ATTENTION CREW! AT STATIONS!' (×2)"
    ],
    answer: 2
},
{
    /* Pregunta 73 */
    question: "73. 2.2.73\nIn what ways can the cockpit indicate to the cabin crew the 'Brace for impact' command?",
    options: [
        "A) Repetitively by switching ON & OFF NO SMOKING signs.",
        "B) Repetitively by switching ON & OFF SEAT BELTS signs.",
        "C) PA System: 'CABIN CREW: TAKE YOUR SEATS FOR IMPACT'.",
        "D) Repetitively by switching ON & OFF SEAT BELTS & NO PED SIGNS, or via PA system: 'BRACE FOR IMPACT!' '¡POSTURA DE IMPACT!'."
    ],
    answer: 3
},
{
    /* Pregunta 74 */
    question: "74. 2.2.74\nCallout of cabin crew to pax required during an evacuation on ground:",
    options: [
        "A) 'CABIN CREW and PASSENGERS REMAIN SEATED!' '¡PERMANEZCAN SENTADOS!'",
        "B) 'ATTENTION CREW, AT STATIONS!' (x3)",
        "C) 'EVACUATE, EVACUATE', '¡EVACUACIÓN, EVACUACIÓN!', 'SEATBELT OFF', '¡DESABRÓCHENSE EL CINTURÓN!', 'LEAVE BAGGAGE!', '¡SIN EQUIPAJE!', 'REMOVE HIGH HEELS!', '¡QUÍTENSE LOS ZAPATOS DE TACÓN!', 'COME THIS WAY!', '¡POR AQUÍ!'",
        "D) 'POR FAVOR ABANDONEN EL AVIÓN A LA MAYOR BREVEDAD POSIBLE, GRACIAS.'"
    ],
    answer: 2
},
{
    /* Pregunta 75 */
    question: "75. 2.2.75\nOLDABC is a mnemotechnical example of:",
    options: [
        "A) Conditions to initiate an evacuation.",
        "B) Silent review.",
        "C) Post evacuation duties.",
        "D) Identifying Able Bodied Passengers (ABPs)."
    ],
    answer: 0
},
{
    /* Pregunta 76 */
    question: "76. 2.2.76\nWhich door will the captain leave the aircraft through in case of evacuation?",
    options: [
        "A) The captain evacuates the aircraft through the forward doors.",
        "B) The flight crew should evacuate the aircraft via the cockpit emergency escape hatch, by using the escape rope.",
        "C) The captain evacuates the aircraft through the after doors, if the situation in the cabin permits. If the captain cannot reach the after doors, s/he must evacuate the aircraft through the nearest usable exit.",
        "D) The captain must evacuate the aircraft through the nearest usable exit."
    ],
    answer: 2
},
{
    /* Pregunta 77 */
    question: "77. 2.2.77\nThe cabin crew may initiate an evacuation:",
    options: [
        "A) If the plane is completely stopped, the flight crew is incapacitated and there is an obvious danger (simultaneously).",
        "B) Never.",
        "C) Whenever it is necessary.",
        "D) When we know that the captain agrees with us."
    ],
    answer: 0
},
{
    /* Pregunta 78 */
    question: "78. 2.2.78\nWhen do we turn on the emergency lights, during a planned evacuation?",
    options: [
        "A) Emergency lights will turn on automatically when the door is opened in evacuation.",
        "B) The emergency lights must be activated by the purser after the callout 'BRACE FOR IMPACT'.",
        "C) The emergency lights are turned on by the captain when giving the evacuation command.",
        "D) The emergency lights must be activated by the purser after the callout 'EVACUATE, EVACUATE'."
    ],
    answer: 1
},
{
    /* Pregunta 79 */
    question: "79. 2.2.79\n¿Qué se entiende por supervivencia?",
    options: [
        "A) La capacidad de adaptación a las circunstancias.",
        "B) Sobrevivir a un aterrizaje de emergencia o amaraje tras abandonar la aeronave.",
        "C) Es sinónimo de resiliencia.",
        "D) Llegar sano y salvo a destino."
    ],
    answer: 1
},
{
    /* Pregunta 80 */
    question: "80. 2.2.80\nIn OLDABC, what is the meaning of the letter 'O'?",
    options: [
        "A) Operation of exits.",
        "B) Oxygen control.",
        "C) Overview of passengers.",
        "D) Overview outside conditions."
    ],
    answer: 0
},
{
    /* Pregunta 81 */
    question: "81. 2.2.81\nIn OLDABC, what is the meaning of the letter 'L'?",
    options: [
        "A) Location of the emergency exit.",
        "B) Location of ABP.",
        "C) Location of emergency equipment.",
        "D) Location of your mobile phone."
    ],
    answer: 2
},
{
    /* Pregunta 82 */
    question: "82. 2.2.82\nIn OLDABC, what is the meaning of the letter 'D'?",
    options: [
        "A) Don a mask.",
        "B) Decide which exit to use.",
        "C) Don a PBE.",
        "D) Drill (brace for impact)."
    ],
    answer: 1
},
{
    /* Pregunta 83 */
    question: "83. 2.2.83\nIn OLDABC, what is the meaning of the letter 'A'?",
    options: [
        "A) Announcement of emergency message.",
        "B) Able-bodied Passengers (ABP/PSP) and SCP.",
        "C) Announcement of abnormal procedure.",
        "D) Attitude."
    ],
    answer: 1
},
{
    /* Pregunta 84 */
    question: "84. 2.2.84\nIn OLDABC, what is the meaning of the letter 'B'?",
    options: [
        "A) Brace for impact.",
        "B) Breath slowly.",
        "C) Brief passengers.",
        "D) Brief crew."
    ],
    answer: 0
},
{
    /* Pregunta 85 */
    question: "85. 2.2.85\nIn OLDABC, what is the meaning of the letter 'C'?",
    options: [
        "A) Call the purser.",
        "B) Contact the flight crew.",
        "C) Come forward.",
        "D) Commands."
    ],
    answer: 1
},
{
    /* Pregunta 86 */
    question: "86. 2.2.86\nEn cuanto a la forma de presentarse la incapacitación, ¿de qué tipos pueden ser?",
    options: [
        "A) Velada y evidente.",
        "B) Total y parcial.",
        "C) Predecible e impredecible.",
        "D) Velada y total."
    ],
    answer: 0
}
]
},
	/*----------------------------------------------------------------------------------------*/	
	/*------------------------------------- MEDICINA V.12 ------------------------------------*/
	/*----------------------------------------------------------------------------------------*/
	
    battery5: {
		title: "MEDICINA",
		subtitle: "WB A-330/350",
		questions: [
        {
    /* Pregunta 1 */
    question: "1. 5.1.1\n¿Cómo se debe de actuar en caso de heridas sangrantes?",
    options: [
        "A) Lavar con agua y jabón, comprimir.",
        "B) Colocar torniquete.",
        "C) 'Pintar' con betadine.",
        "D) Tapar sin hacer daño a las arterias."
    ],
    answer: 0
},
{
    /* Pregunta 2 */
    question: "2. 5.1.2\n¿Qué se pretende con la postura lateral de seguridad (PLS)?",
    options: [
        "A) Asegurar la comodidad del pasajero.",
        "B) Evitar problemas respiratorios.",
        "C) Evitar problemas en los huesos rotos de brazos y piernas.",
        "D) Evitar contracturas musculares cuando se está inconsciente."
    ],
    answer: 1
},
{
    /* Pregunta 3 */
    question: "3. 5.1.3\n¿Qué opción describe un síntoma de dificultad respiratoria?",
    options: [
        "A) Dificultad respiratoria si tose.",
        "B) Dolor torácico.",
        "C) Crisis asmática.",
        "D) Atragantamiento."
    ],
    answer: 3
},
{
    /* Pregunta 4 */
    question: "4. 5.1.4\nLa cadencia con la que se tiene que realizar la RCP es de 30:2, pero en el adulto, ¿cómo se inicia?",
    options: [
        "A) Compresiones siempre primero.",
        "B) Es indiferente.",
        "C) Siempre respiraciones primero.",
        "D) Respiraciones primero sólo si está muy pálido."
    ],
    answer: 0
},
{
    /* Pregunta 5 */
    question: "5. 5.1.5\n¿En qué momento debe realizarse la llamada a ayuda médica?",
    options: [
        "A) El pasajero esté inconsciente.",
        "B) Cuando el pasajero esté inmóvil.",
        "C) Se ha solicitado ayuda a bordo y el pasajero está inconsciente y no respira.",
        "D) Si el pasajero está consciente pero muy pálido."
    ],
    answer: 2
},
{
    /* Pregunta 6 */
    question: "6. 5.1.6\nCuando un pasajero se queja de dolor y solicita una medicación:",
    options: [
        "A) Le pregunto si la ha tomado alguna vez.",
        "B) Le pregunto si es alérgico.",
        "C) Entrego documento de solicitud de medicación.",
        "D) Todas."
    ],
    answer: 3
},
{
    /* Pregunta 7 */
    question: "7. 5.1.7\nUn pasajero que manifiesta agitadamente y sin parar de hablar que no puede respirar la causa más probable es:",
    options: [
        "A) Que estamos ante una descompresión lenta.",
        "B) Que está teniendo un espasmo del diafragma.",
        "C) Que está sufriendo una crisis asmática.",
        "D) Que está sufriendo una crisis de ansiedad."
    ],
    answer: 3
},
{
    /* Pregunta 8 */
    question: "8. 5.1.8\nLa compresiones cardiacas en la RCP:",
    options: [
        "A) Deben ser enérgicas pero respetando las costillas.",
        "B) Deben hacerse de la forma más rápida que podamos.",
        "C) Deben ser eficientes, ininterrumpidas y a un ritmo de 100-120 por minuto.",
        "D) Ninguna es correcta."
    ],
    answer: 2
},
{
    /* Pregunta 9 */
    question: "9. 5.1.9\nLa presurización de cabina es necesaria debido a que en altura:",
    options: [
        "A) Aumenta la presión atmosférica.",
        "B) Hace mucho frío.",
        "C) Por encima de 20000 ft se dejaría de notar el efecto de la gravedad.",
        "D) Disminuye la presión atmosférica porque las moléculas de los gases que componen el aire se separan."
    ],
    answer: 3
},
{
    /* Pregunta 10 */
    question: "10. 5.1.10\nSe debe sospechar un accidente cerebrovascular agudo en una persona:",
    options: [
        "A) Cuando pierde la fuerza en un brazo.",
        "B) Cuando se le altera el habla.",
        "C) Cuando se le tuerce la boca.",
        "D) Todas son correctas."
    ],
    answer: 3
},
{
    /* Pregunta 11 */
    question: "11. 5.1.11\nLa obstrucción de la vía aérea por un cuerpo extraño o atragantamiento puede ser causa de muerte. La persona que se está atragantando tiene gran dificultad para respirar, se echa las manos al cuello, tose y/o puede empezar a presentar coloración violácea:",
    options: [
        "A) Falso, con la tos aumenta la presión torácica y se expulsa el cuerpo extraño.",
        "B) En cualquier caso nunca es causa de muerte.",
        "C) Así es, si no se resuelve con la tos hay que hacer la maniobra de Heimlich.",
        "D) Falso, un atragantamiento impide toser."
    ],
    answer: 2
},
{
    /* Pregunta 12 */
    question: "12. 5.1.12\nLa secuencia con la que se tiene que realizar la resucitación cardiopulmonar básica en el adulto es:",
    options: [
        "A) Aproximación segura, comprobar consciencia, abrir la vía aérea, comprobar si respira, pedir ayuda, 30 compresiones-2 respiraciones-DEA siguiendo instrucciones, continúe RCP 30:2.",
        "B) Actuar lo más rápido posible, comprobando el estado de consciencia, comprobando la respiración, pidiendo ayuda, comprobando la circulación sanguínea, y usando el DEA siguiendo instrucciones y continuar RCP 15:2.",
        "C) Determinar el estado de la consciencia, la respiración y el pulso, pedir ayuda, hacer la RCP básica de 30:2 a un ritmo de 100-110 por minuto y usar el DEA si se dispone y hay personal médico a bordo, continuar RCP hasta el agotamiento del reanimador.",
        "D) Colocar al accidentado en decúbito supino y proceder a aplicar inmediatamente el DEA."
    ],
    answer: 0
},
{
    /* Pregunta 13 */
    question: "13. 5.1.13\nLa hipoxia relacionada con la altitud es la:",
    options: [
        "A) Hipoxia anémica.",
        "B) Hipoxia histotóxica.",
        "C) Hipoxia hipóxica.",
        "D) Hipoxia vascular."
    ],
    answer: 2
},
{
    /* Pregunta 14 */
    question: "14. 5.1.14\nAnte pasajero que nos dice que es diabético y se encuentra pálido, sudoroso, irritable y tembloroso, ¿qué debemos hacer?",
    options: [
        "A) Tranquilizarle, pues ya se le pasará.",
        "B) Pedir ayuda, utilizar el glucómetro para medir glucemia capilar y, si su valor es <70mg/dl, administrar glucosa.",
        "C) Utilizar el glucómetro para medir la glucemia pero no hacer nada, independientemente del valor que indique.",
        "D) Es normal que los diabéticos presenten esos síntomas."
    ],
    answer: 1
},
{
    /* Pregunta 15 */
    question: "15. 5.1.15\nSi un pasajero con antecedentes de asma comienza con un ataque de asma, ¿qué debemos hacer?",
    options: [
        "A) Pedir ayuda.",
        "B) Pedir ayuda, darle golpes por la espalda y administrarle oxígeno.",
        "C) Pedir ayuda. Reconocer que verdaderamente tiene dificultad respiratoria, con ‘pito’ respiratorio, piel azulada y agotamiento. Debemos permitirle el uso del inhalador, animarle a respirar lentamente y administrarle oxígeno."
    ],
    answer: 2
},
{
    /* Pregunta 16 */
    question: "16. 5.1.16\nAnte una lesión en la cabeza puede haber herida y/o alteración de la consciencia:",
    options: [
        "A) Controlar la hemorragia, asegurar con una venda el apósito, ayudar a tumbar a la víctima y pedir ayuda.",
        "B) Usar guantes; si la víctima está inconsciente, abrir la vía aérea y comprobar la respiración; si respira, ponerla en posición de seguridad. Estar preparado para RCP. Contener la hemorragia. Sospechar siempre la posibilidad de una lesión de cuello.",
        "C) Las dos anteriores son correctas."
    ],
    answer: 2
},
{
    /* Pregunta 17 */
    question: "17. 5.1.17\nConvulsiones en adulto. Conducta:",
    options: [
        "A) Proteger a la víctima. Pedir ayuda. No intentar sujetarla. Proteger la cabeza y aflojar la ropa. Una vez que acaben las convulsiones, ponerla en PLS y controlar los signos vitales.",
        "B) Pedir ayuda. Sujetar a la víctima intentando que no se dé golpes. Una vez terminada la convulsión, explicarle lo sucedido.",
        "C) No hacer nada y contar el tiempo de convulsión."
    ],
    answer: 0
},
{
    /* Pregunta 18 */
    question: "18. 5.1.18\nLa secuencia de actuación correcta ante una quemadura es:",
    options: [
        "A) Poner hielo, limpiar con agua y jabon y colocar apósito estéril.",
        "B) Enfriar la quemadura con agua, limpiar con alcohol y dejar al aire.",
        "C) Enfriar la quemadura con agua, limpiar con jabón y agua y aplicar vendaje con gasa.",
        "D) Enfriar la quemadura con agua, secar con gasa estéril, aplicar Linitul y vendaje."
    ],
    answer: 3
},
{
    /* Pregunta 19 */
    question: "19. 5.1.19\nEn la RCP pediátrica:",
    options: [
        "A) Comenzamos con masaje cardíaco.",
        "B) Comenzamos con respiraciones.",
        "C) Es indiferente el orden.",
        "D) Se maneja igual que un adulto."
    ],
    answer: 1
},
{
    /* Pregunta 20 */
    question: "20. 5.1.20\n¿Cuál es el orden correcto en una valoración de estado de consciencia?",
    options: [
        "A) Toma de pulso e inicio de RCP.",
        "B) Estimulación verbal, física y dolorosa y posterior valoración de respiración.",
        "C) Estimulación dolorosa, toma de pulso y valoración de respiración.",
        "D) Colocar en PLS, valoración de respuesta a estímulo verbal, físico y doloroso."
    ],
    answer: 1
},
{
    /* Pregunta 21 */
    question: "21. 5.1.21\nAnte una congestión de vía aérea superior (catarro), ¿qué no es aconsejable?",
    options: [
        "A) Hidratación oral abundante.",
        "B) Maniobras activas para apertura de Trompa Eustaquio.",
        "C) Aplicar gotas vasodilatadoras descongestivas.",
        "D) Baños de vapor previas a vuelo."
    ],
    answer: 1
}
]
},

	/*----------------------------------------------------------------------------------------*/	
	/*--------------------------------------- FTL V.12 ---------------------------------------*/
	/*----------------------------------------------------------------------------------------*/
	
    battery6: {
		title: "FTL",
		subtitle: "WB A-330/350",
		questions: [
        {
    /* Pregunta 1 */
    question: "1. 5.2.1\n¿Qué regulan las FTL?",
    options: [
        "A) Limitaciones del tiempo de vuelo, actividad y requisitos de descanso.",
        "B) Limitaciones de tiempo de vuelo y actividad únicamente.",
        "C) Regulan los requisitos de tripulación mínima requerida según la actividad de vuelo.",
        "D) Limitaciones de los requisitos de descanso únicamente."
    ],
    answer: 0
},
{
    /* Pregunta 2 */
    question: "2. 5.2.2\n¿Dónde encontramos la reglamentación relativa a FTL?",
    options: [
        "A) MO(B) Capítulo 7.",
        "B) MO(A) Capítulo 7.",
        "C) MO(B) Capítulo 12.",
        "D) MO(A) Capítulo 12."
    ],
    answer: 1
},
{
    /* Pregunta 3 */
    question: "3. 5.2.3\nUn miembro de la tripulación se encuentra aclimatado:",
    options: [
        "A) Cuando su ritmo circadiano no está sincronizado con la zona horaria en la que se encuentra.",
        "B) Cuando su ritmo circadiano está sincronizado con la zona horaria en la que se encuentra.",
        "C) Cuando ha podido descansar 2.45 horas en el crew rest.",
        "D) Sincronizado con la zona horaria del país de destino."
    ],
    answer: 1
},
{
    /* Pregunta 4 */
    question: "4. 5.2.4\nUn tripulante se considera aclimatado a una zona horaria:",
    options: [
        "A) Con una diferencia de hasta 4 h en relación con la hora local de su punto de partida.",
        "B) Con una diferencia de hasta 3 h en relación con la hora local de su punto de partida.",
        "C) Con una diferencia de hasta 2 h en relación con la hora local de su punto de partida.",
        "D) No depende de la zona horaria sino del descanso mínimo."
    ],
    answer: 2
},
{
    /* Pregunta 5 */
    question: "5. 5.2.5\nEs responsabilidad del tripulante:",
    options: [
        "A) Definir si se prefiere un tipo de horario temprano o tardío.",
        "B) Modificar el horario de la rotación cuando se supere la actividad diurna.",
        "C) Cumplir las disposiciones relativas a horarios irregulares de conformidad con el patrón asignado por la autoridad nacional.",
        "D) Programar y utilizar sus períodos de descanso adecuadamente."
    ],
    answer: 3
},
{
    /* Pregunta 6 */
    question: "6. 5.2.6\n¿Qué dos tipos de horario irregular hay?",
    options: [
        "A) Tipo temprano y tipo tardío.",
        "B) Tipo nocturno y tipo diurno.",
        "C) Aclimatado y no aclimatado.",
        "D) Europeo y americano."
    ],
    answer: 0
},
{
    /* Pregunta 7 */
    question: "7. 5.2.7\nEl horario irregular tipo tardío en el caso de una actividad que termina tarde es el que lo hace entre…:",
    options: [
        "A) Las 5:00 y las 6:59.",
        "B) Las 22:00 y las 8:00.",
        "C) Las 2:00 y las 4:59.",
        "D) Las 00:00 y las 1:59."
    ],
    answer: 1
},
{
    /* Pregunta 8 */
    question: "8. 5.2.8\nLa actividad nocturna es aquella en la que el período de actividad invade una parte del período entre:",
    options: [
        "A) Las 2:00 y las 4:59 de la zona horaria en que está aclimatada la tripulación.",
        "B) Las 2:00 y las 4:59 de la zona horaria en que no está aclimatada la tripulación.",
        "C) Las 14:00 y las 4:59 de la zona horaria en que está aclimatada la tripulación.",
        "D) Las 14:00 y las 4:59 de la zona horaria en que no está aclimatada la tripulación."
    ],
    answer: 0
},
{
    /* Pregunta 9 */
    question: "9. 5.2.9\n¿Qué significa FDP?",
    options: [
        "A) Forward Detection Panel.",
        "B) Future Document Program.",
        "C) Flight Duty Period.",
        "D) Flight Duty Policies."
    ],
    answer: 2
},
{
    /* Pregunta 10 */
    question: "10. 5.2.10\nEl período de descanso en base será como mínimo:",
    options: [
        "A) La duración del período de actividad precedente o 10 horas.",
        "B) La duración del período de actividad precedente.",
        "C) La duración del período de actividad precedente o 12 horas.",
        "D) La duración del período de actividad precedente más 2.5 horas."
    ],
    answer: 0
},
{
    /* Pregunta 11 */
    question: "11. 5.2.11\nEl período de descanso fuera de base será como mínimo:",
    options: [
        "A) La duración del período de actividad precedente.",
        "B) La duración del período de actividad precedente o 10 horas, 14 horas cuando el vuelo anterior haya implicado el cruce de al menos 4 husos horarios.",
        "C) La duración del período de actividad precedente o 12 horas.",
        "D) La duración del período de actividad precedente más 2.5 horas."
    ],
    answer: 1
},
{
    /* Pregunta 12 */
    question: "12. 5.2.12\n¿Qué es un tripulante de cabina?",
    options: [
        "A) Cualquier tripulante debidamente cualificado.",
        "B) Tripulante que sea parte de la tripulación de vuelo.",
        "C) Tripulante con licencia de vuelo y certificado médico clase 1.",
        "D) Tripulante debidamente cualificado, que no sea parte de la tripulación de vuelo designado por el operador para llevar a cabo tareas relacionadas con la seguridad de los pasajeros."
    ],
    answer: 3
},
{
    /* Pregunta 13 */
    question: "13. 5.2.13\nUna actividad que comienza temprano es un período de actividad que comienza entre:",
    options: [
        "A) Las 5:00 y las 6:59.",
        "B) Las 0:00 y las 1:59.",
        "C) Las 2:00 y las 4:59.",
        "D) Depende del número de sectores programados."
    ],
    answer: 0
},
{
    /* Pregunta 14 */
    question: "14. 5.2.14\nLa fase de mínimo rendimiento del ritmo circadiano es el período comprendido entre:",
    options: [
        "A) Las 00:00 y las 23:59 horas de la zona horaria en la que está aclimatado un tripulante.",
        "B) Las 00:00 y las 23:59 horas de la zona horaria en la que aún no está aclimatado un tripulante.",
        "C) Las 2:00 y las 5:59 horas de la zona horaria en la que está aclimatado un tripulante.",
        "D) Las 2:00 y las 5:59 horas de la zona horaria en la que aún no está aclimatado un tripulante."
    ],
    answer: 2
},
{
    /* Pregunta 15 */
    question: "15. 5.2.15\nEl tiempo máximo de trabajo anual será de 2.000 horas, de las cuales el tiempo de vuelo total no podrá exceder de:",
    options: [
        "A) 1.500 horas.",
        "B) 975 horas.",
        "C) 950 horas.",
        "D) 900 horas."
    ],
    answer: 0
},
{
    /* Pregunta 16 */
    question: "16. 5.2.16\n¿Qué diferencia hay entre la fatiga y el cansancio?",
    options: [
        "A) No hay diferencia, son dos formas de definir los mismos síntomas.",
        "B) La fatiga se produce en el trabajo y el cansancio en el ámbito personal.",
        "C) La fatiga es acumulativa y se produce durante un período prolongado de tiempo y el cansancio casi siempre es pasajero y se puede atribuir a causas concretas.",
        "D) La fatiga se supera en menos tiempo que el cansancio."
    ],
    answer: 2
},
{
    /* Pregunta 17 */
    question: "17. 5.2.17\nDurante los períodos de actividad aérea, Iberia proporciona la oportunidad de que los tripulantes puedan disponer de comida y bebida cuando dicha actividad de vuelo exceda:",
    options: [
        "A) Las 5 horas de duración.",
        "B) Las 6 horas de duración.",
        "C) Las 7 horas de duración.",
        "D) Las 8 horas de duración."
    ],
    answer: 1
},
{
    /* Pregunta 18 */
    question: "18. 5.2.18\nDurante el período de actividad aérea, el tripulante dispone para comer de al menos:",
    options: [
        "A) 30 minutos.",
        "B) 25 minutos.",
        "C) 20 minutos.",
        "D) 15 minutos."
    ],
    answer: 3
},
{
    /* Pregunta 19 */
    question: "19. 5.2.19\n¿Qué es un medio de notificación discreto?",
    options: [
        "A) El que interrumpe el descanso del tripulante.",
        "B) Todo medio de notificación empleado por el operador que no interrumpe el descanso continuado de un tripulante.",
        "C) El medio que establece el comandante para la comunicación entre la cabina de vuelo y la cabina de pasaje durante el descanso controlado.",
        "D) El medio de comunicación establecido por el operador para comunicar los períodos de imaginaria a los tripulantes."
    ],
    answer: 1
},
{
    /* Pregunta 20 */
    question: "20. 5.2.20\n¿Qué es un medio de notificación indiscreto?",
    options: [
        "A) El que no interrumpe el descanso continuado del tripulante.",
        "B) El que se establece en los lugares de pernocta para comunicar al tripulante la hora de recogida.",
        "C) Aquel medio de notificación empleado por el operador que precisa la cooperación del tripulante para dejar constancia de la recepción de una notificación y que, por tanto, tiene el potencial de romper el descanso continuado.",
        "D) El establecido por el comandante para comunicar a los TCP el fin de su período de descanso en vuelo."
    ],
    answer: 2
},
{
    /* Pregunta 21 */
    question: "21. 5.2.21\n¿A partir de qué momento puede Iberia utilizar un medio de comunicación indiscreto para comunicarse con sus tripulantes sin que se considere que está interrumpiendo su descanso en base?",
    options: [
        "A) Hasta 2 horas después de haber finalizado su actividad.",
        "B) Desde 3 horas antes de iniciar un período de actividad.",
        "C) 90 minutos antes de la hora de firma o 30 minutos antes de la hora de recogida, según corresponda.",
        "D) En el momento que el operador considere oportuno para que la operación no se vea afectada."
    ],
    answer: 2
},
{
    /* Pregunta 22 */
    question: "22. 5.2.22\n¿A partir de qué momento puede Iberia utilizar un medio de comunicación indiscreto para comunicarse con sus tripulantes sin que se considere que está interrumpiendo su descanso fuera de base?",
    options: [
        "A) 30 minutos antes de la hora de recogida.",
        "B) 2 horas antes de la hora de recogida.",
        "C) Hasta 1 hora después de haber finalizado la actividad previa.",
        "D) Hasta 30 minutos después de la llegada de la tripulación al lugar de descanso."
    ],
    answer: 1
},
{
    /* Pregunta 23 */
    question: "23. 5.2.23\nAl programar períodos de descanso a sus tripulantes, Iberia tiene que garantizar:",
    options: [
        "A) Al menos 8 horas de sueño, 1 hora para satisfacer sus necesidades fisiológicas y el tiempo necesario para los traslados.",
        "B) Al menos 6 horas de sueño.",
        "C) No hay un tiempo mínimo de descanso.",
        "D) El tiempo imprescindible para el traslado al hotel, el aseo personal y 4 horas de sueño."
    ],
    answer: 0
},
{
    /* Pregunta 24 */
    question: "24. 5.2.24\nAl finalizar los descansos en vuelo:",
    options: [
        "A) Se procederá a apagar la luz del CCRC.",
        "B) Los TCP se reincorporan al servicio sin necesidad de notificar que ya están todos operativos.",
        "C) El sobrecargo informará al comandante o al piloto al mando de que todos los TCP están operativos.",
        "D) El sobrecargo entrará al CCRC para comprobar que ya no queda nadie."
    ],
    answer: 2
},
{
    /* Pregunta 25 */
    question: "25. 5.2.25\n¿Cuál es el número mínimo de TCP operativos durante los descansos en vuelo?",
    options: [
        "A) 4 en A330 y 4 en A350.",
        "B) 5 en ambas flotas.",
        "C) 4 en A330 y 5 en A350.",
        "D) El número establecido por el comandante en cada vuelo."
    ],
    answer: 0
},
{
    /* Pregunta 26 */
    question: "26. 5.2.26\nDurante las guardias, ¿quién es el TCP operativo?",
    options: [
        "A) Quien decida el Comandante.",
        "B) El que se encuentra en el CCRC.",
        "C) Todos los TCP se consideran operativos.",
        "D) El que se encuentra en vigilia."
    ],
    answer: 3
},
{
    /* Pregunta 27 */
    question: "27. 5.2.27\n¿En qué circunstancias y en qué flota está autorizado el uso de una instalación de Clase 2 para el descanso de la tripulación de cabina?",
    options: [
        "A) En A350 cuando el CCRC esté completo.",
        "B) Tanto en A330 como en A350 cuando el CCRC se encuentre inoperativo.",
        "C) Exclusivamente en A330 cuando el LDMCRC se encuentre inoperativo.",
        "D) AESA no ha autorizado el uso de una instalación de Clase 2 a Iberia."
    ],
    answer: 2
},
{
    /* Pregunta 28 */
    question: "28. 5.2.28\n¿Cuál es el procedimiento para nombrar al sustituto del sobrecargo durante el período de descanso en vuelo de éste?",
    options: [
        "A) Viene reflejado en la Declaración General.",
        "B) El sobrecargo propone a un miembro de la tripulación como su sustituto al comandante para su aprobación.",
        "C) Se nombra al miembro de la tripulación más antiguo en la flota.",
        "D) Será siempre el TCP que ocupe el puesto 1R."
    ],
    answer: 1
},
{
    /* Pregunta 29 */
    question: "29. 5.2.29\n¿Se puede reducir el número mínimo de TCP operativos durante los períodos de descanso en vuelo en caso de operar con una tripulación inferior a la mínima requerida?",
    options: [
        "A) Sí, siempre que lo autorice el comandante.",
        "B) Sí, con autorización del Jefe de Día.",
        "C) Sí, siempre que el sobrecargo considere que los TCP que quedan operativos tienen la suficiente experiencia.",
        "D) No, en ningún caso habrá menos de 4 TCP operativos."
    ],
    answer: 3
}
]
},

	/*----------------------------------------------------------------------------------------*/	
	/*----------------------------- SMS V.12 -------------------------------*/
	/*----------------------------------------------------------------------------------------*/
	
    battery7: {
		title: "SMS",
		subtitle: "WB A-330/350",
		questions: [
        {
    /* Pregunta 1 */
    question: "1. 5.3.1\nEl SMS gestiona un modelo de seguridad en el que:",
    options: [
        "A) Se reconoce que las personas con entrenamiento no pueden cometer errores involuntarios.",
        "B) Se reconoce que las personas pueden cometer errores involuntarios y desarrolla las técnicas para evitarlos.",
        "C) Se encarga de la protección medioambiental.",
        "D) Se intenta implantar la cultura injusta."
    ],
    answer: 1
},
{
    /* Pregunta 2 */
    question: "2. 5.3.2\nCon el objetivo de promover una actitud autocrítica, resistente a la complacencia, buscando la mejora permanente y obtener el necesario aprendizaje de los errores, incidentes y accidentes, la compañía adopta el concepto de “Cultura Justa”, que se basa en que cuando un tripulante cometa errores:",
    options: [
        "A) Será tratado de forma justa, coherente, objetiva y oportuna, incluso si esos errores han producido resultados negativos.",
        "B) Será tratado de forma justa si los resultados de sus errores son positivos.",
        "C) Será apartado del ejercicio de sus funciones profesionales.",
        "D) No se tolera cometer errores."
    ],
    answer: 0
},
{
    /* Pregunta 3 */
    question: "3. 5.3.3\nSi en la comprobación de nuestros equipos de emergencia detectamos un equipo defectuoso, además de anotarlo en la hoja de control de equipos de emergencia, entre otras cosas, ¿qué más podemos hacer?",
    options: [
        "A) Se reportará vía CORUSON.",
        "B) Lo comentaremos con el coordinador de vuelo.",
        "C) Se notificará al CCO.",
        "D) El SC enviará un mensaje urgente con el Ipad."
    ],
    answer: 0
},
{
    /* Pregunta 4 */
    question: "4. 5.3.4\nUna vez identificados los peligros, el siguiente paso o acción es la evaluación del índice de riesgo a través de:",
    options: [
        "A) La consecuencia del peligro.",
        "B) El coste que suponga dicho riesgo a la operación.",
        "C) La probabilidad de que ocurra.",
        "D) La probabilidad y la gravedad de las consecuencias del peligro."
    ],
    answer: 3
},
{
    /* Pregunta 5 */
    question: "5. 5.3.5\nPara que un riesgo tolerable en zona amarilla sea aceptable, es necesario que se implementen medidas mitigadoras. ¿Cuál es el objetivo de estas medidas mitigadoras?",
    options: [
        "A) Implementar planes que mitiguen el riesgo de cada peligro, hasta que alcancen un nivel aceptable de seguridad operacional.",
        "B) Implementar planes que preferiblemente mitiguen el riesgo.",
        "C) Los riesgos intolerables están exentos de la implementación de medidas.",
        "D) La implementación de barreras de seguridad está asociada a la experiencia de la tripulación."
    ],
    answer: 0
},
{
    /* Pregunta 6 */
    question: "6. 5.3.6\nComo señala OACI, la notificación precisa y oportuna de información relevante relacionada con peligros, accidentes o incidentes es fundamental para la gestión de la seguridad operacional. ¿De qué depende el éxito de un sistema de notificación?",
    options: [
        "A) De la comunicación entre el personal de primera línea y la organización y de que el sistema sea confidencial, seguro y de fácil acceso, entre otras cosas.",
        "B) De la comunicación entre el personal de primera línea y la organización.",
        "C) De la seguridad con la que reportan los tripulantes.",
        "D) De la confidencialidad y anonimato del sistema."
    ],
    answer: 0
},
{
    /* Pregunta 7 */
    question: "7. 5.3.7\nIberia Operadora reconoce que la mejor posición para observar e identificar situaciones potencialmente inseguras o deficientes es la de:",
    options: [
        "A) El personal de primera línea operativa.",
        "B) Los oficiales de seguridad de vuelo.",
        "C) Los oficiales de seguridad de cabina.",
        "D) El personal del departamento de Seguridad Aeroportuaria de Iberia."
    ],
    answer: 0
},
{
    /* Pregunta 8 */
    question: "8. 5.3.8\n¿Cuál es el principal objetivo de los procedimientos de notificación?",
    options: [
        "A) La atribución de culpa a los individuos.",
        "B) La mejora de la seguridad.",
        "C) Conocer el historial del notificador.",
        "D) Mejorar la comunicación entre empresa y trabajadores."
    ],
    answer: 1
},
{
    /* Pregunta 9 */
    question: "9. 5.3.9\nReportaremos eventos relacionados con fatiga:",
    options: [
        "A) Llamando al servicio médico.",
        "B) Reportandoposible. vía CORUSON en el apartado de fatiga, dando la información lo más detallada.",
        "C) Informando vía Glad2link.",
        "D) Los eventos relacionados con fatiga no se reportan."
    ],
    answer: 1
},
{
    /* Pregunta 10 */
    question: "10. 5.3.10\nCORUSON es:",
    options: [
        "A) La nueva App de la compañía para gestionar cambios de programaciones supervisada por FTL.",
        "B) Es un buzón de sugerencias comerciales.",
        "C) El sistema de reporte de SMS que utilizaremos para notificar eventos relacionados con la seguridad operacional.",
        "D) Es la nueva sección de la revista 'Hola Iberia'."
    ],
    answer: 2
},
{
    /* Pregunta 11 */
    question: "11. 5.3.11\nEl sistema de transporte aéreo no puede estar completamente libre de peligros y riesgos asociados.",
    options: [
        "A) Depende de la compañía aérea.",
        "B) Depende de la Agencia de Seguridad Estatal.",
        "C) Verdadero.",
        "D) Falso."
    ],
    answer: 2
},
{
    /* Pregunta 12 */
    question: "12. 5.3.12\nLa consecuente 'Cultura del Reporte' es la herramienta que proporciona a Iberia visión de las tendencias y de los riesgos latentes y posibilita su mitigación antes de que pasen a ser causa de un accidente.",
    options: [
        "A) Verdadero.",
        "B) Falso.",
        "C) Depende del anonimato del reporte.",
        "D) Depende del castigo al que se someta al notificador."
    ],
    answer: 0
},
{
    /* Pregunta 13 */
    question: "13. 5.3.13\nLos empleados que informen sobre accidentes, sucesos, deficiencias de seguridad o amenazas con afección, real o potencial, sobre la seguridad operacional, no podrán sufrir, por el hecho de informar, efectos adversos en su puesto de trabajo, salvo en los supuestos en que se acredite:",
    options: [
        "A) Su excelencia profesional.",
        "B) Que realizó un reporte en inglés.",
        "C) No es necesario acreditar nada.",
        "D) Mala fe en su actuación."
    ],
    answer: 3
},
{
    /* Pregunta 14 */
    question: "14. 5.3.14\n¿A quién informaremos acerca de todo episodio relacionado con la utilización incorrecta de PED (incluyendo humo o fuego) por parte de pasajeros o tripulantes?",
    options: [
        "A) Dirección de TCP y AESA.",
        "B) AESA y Dirección de Calidad y SMS.",
        "C) Dirección de TCP, Dirección de Operaciones Vuelo y EASA.",
        "D) Dirección de TCP y SMS."
    ],
    answer: 1
},
{
    /* Pregunta 15 */
    question: "15. 5.3.15\n¿Cuál es la definición de 'Cultura Justa' que Iberia incorpora a su política de Seguridad Operacional?",
    options: [
        "A) Aquella en la que se castigue a los operadores y demás personal de primera línea por sus acciones, omisiones o decisiones cuando sean acordes con su experiencia y capacitación, pero en la cual no se toleren la negligencia grave, las infracciones intencionadas ni los actos destructivos.",
        "B) Aquella en la que no se castigue a los operadores y demás personal de primera línea por sus acciones, omisiones o decisiones cuando sean acordes con su experiencia y capacitación, pero en la cual se toleren la negligencia grave, las infracciones intencionadas ni los actos destructivos.",
        "C) Aquella en la que no se castigue a los operadores y demás personal de primera línea por sus acciones, omisiones o decisiones cuando sean acordes con su experiencia y capacitación, pero en la cual no se toleren la negligencia grave, las infracciones intencionadas ni los actos destructivos.",
        "D) La cultura basada en hechos justos independientemente de la experiencia y capacitación de los trabajadores."
    ],
    answer: 2
},
{
    /* Pregunta 16 */
    question: "16. 5.3.16\nUna de las bases para que la Cultura de Seguridad Operacional funcione es que el reporte sea:",
    options: [
        "A) Contestado.",
        "B) En inglés.",
        "C) Confidencial.",
        "D) Contado entre compañeros en el avión."
    ],
    answer: 2
},
{
    /* Pregunta 17 */
    question: "17. 5.3.17\nCualquier empleado de la compañía puede notificar directamente a SMS los peligros que observe que afecten a la seguridad:",
    options: [
        "A) Verdadero.",
        "B) Falso.",
        "C) Solo los sobrecargos pueden reportar directamente a SMS.",
        "D) Solo los comandantes pueden reportar directamente a SMS."
    ],
    answer: 0
},
{
    /* Pregunta 18 */
    question: "18. 5.3.18\nPara medir el riesgo, medimos los siguientes parámetros:",
    options: [
        "A) Repetición del riesgo/soluciones posibles.",
        "B) Probabilidad/severidad.",
        "C) Rapidez de la acción/severidad.",
        "D) Si es solucionable o no."
    ],
    answer: 1
},
{
    /* Pregunta 19 */
    question: "19. 5.3.19\n¿Podemos encontrar la información relativa a los procedimientos de Seguridad Operacional en la documentación oficial de la compañía?",
    options: [
        "A) No podemos encontrarla, es confidencial.",
        "B) Sí, en el Manual de Gestión de Seguridad Operacional (IBSMM).",
        "C) Sí, en el Manual de Operaciones parte A, capítulo 7.",
        "D) Sí, en los SmsNews de la página corporativa."
    ],
    answer: 1
},
{
    /* Pregunta 20 */
    question: "20. 5.3.20\n¿Cómo puedo realizar notificaciones relacionadas con la seguridad operacional?",
    options: [
        "A) En los formularios que encontramos en el aeropuerto.",
        "B) Haciendo uso de la herramienta CORUSON.",
        "C) A través del número 900 que está disponible las 24 h.",
        "D) Escribiendo a mi gestora correspondiente."
    ],
    answer: 1
},
{
    /* Pregunta 21 */
    question: "21. 5.3.21\nEs obligación de todos los empleados:",
    options: [
        "A) Contar los problemas entre compañeros.",
        "B) Notificar peligros y eventos de seguridad y reportar cualquier información relevante.",
        "C) Asumir que no se puede cambiar nada.",
        "D) Llevar un control estadístico de los eventos ocurridos en su flota."
    ],
    answer: 1
}
]
},
};


/// Manejamos el login con usuario y pass

// Almacena un hash de la contraseña en lugar de la contraseña en texto plano.
// Definición de las credenciales predeterminadas
// Definición de las credenciales predeterminadas
const DEFAULT_CREDENTIALS = {
    username: "IBERIA",
    password: "DNTpreguntasIB2025"  // Contraseña predeterminada (puedes cambiarla)
};

// Función para calcular un hash básico de la contraseña ingresada
// (Este hash no es seguro, es solo para evitar mostrar la contraseña directamente)
function hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        hash = ((hash << 5) - hash) + password.charCodeAt(i);
        hash |= 0; // Forzar conversión a 32 bits
    }
    return hash.toString(16); // Devuelve el hash como hexadecimal
}

// Manejo de la autenticación
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    const usernameInput = document.getElementById("username").value.trim();
    const passwordInput = document.getElementById("password").value;

    // Comprobamos que el nombre de usuario y la contraseña sean correctos
    if (usernameInput === DEFAULT_CREDENTIALS.username && hashPassword(passwordInput) === hashPassword(DEFAULT_CREDENTIALS.password)) {
        // Si la autenticación es exitosa
        document.getElementById("login-message").style.color = "green";
        document.getElementById("login-message").textContent = "¡Inicio de sesión exitoso!";

        // Mostrar el contenido del quiz y ocultar el formulario
        document.getElementById("quiz-content").style.display = "block";
        document.getElementById("login-container").style.display = "none";
    } else {
        // Si las credenciales no coinciden
        document.getElementById("login-message").style.color = "red";
        document.getElementById("login-message").textContent = "Usuario o contraseña incorrectos.";
    }
});








let currentBattery = null;
let currentQuestionIndex = 0; // Índice de la pregunta actual
let score = 0; // Puntuación del usuario
let incorrectAnswers = 0; // Contador de respuestas incorrectas

// Función para cargar preguntas de la batería seleccionada
function loadQuestions(batteryKey) {
    currentBattery = batteryKey; // Establece la batería actual
    currentQuestionIndex = 0; // Reinicia el índice de la pregunta
    score = 0; // Reinicia la puntuación
    incorrectAnswers = 0; // Reinicia el contador de respuestas incorrectas

    // Actualizar el título y subtítulo
    const titleElement = document.getElementById("title");
    const subtitleElement = document.getElementById("subtitle"); // Asegúrate de agregar un elemento para el subtítulo en tu HTML

    titleElement.textContent = allQuestions[currentBattery].title;
    subtitleElement.textContent = allQuestions[currentBattery].subtitle; // Actualiza el subtítulo

    loadQuestion(); // Carga la primera pregunta
}

// Cargar la pregunta actual
function loadQuestion() {
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const feedbackContainer = document.getElementById('feedback');

    // Verificar que la batería actual tenga preguntas
    if (!allQuestions[currentBattery] || currentQuestionIndex < 0 || currentQuestionIndex >= allQuestions[currentBattery].length) {
        console.error("Error: Pregunta no válida.");
        return;
    }

    // Obtener la pregunta actual
    const currentQuestion = allQuestions[currentBattery].questions[currentQuestionIndex];

    // Actualizar el texto de la pregunta
    questionContainer.textContent = currentQuestion.question;

    // Limpiar opciones previas y feedback
    optionsContainer.innerHTML = '';
    feedbackContainer.textContent = '';

    // Generar dinámicamente las opciones
    currentQuestion.options.forEach((option, index) => {
        const button = createOptionButton(option, index);
        optionsContainer.appendChild(button);
    });

    updateNavigationButtons(); // Actualizar los botones de navegación
}

// Crear un botón de respuesta
function createOptionButton(optionText, index) {
    const button = document.createElement('button');
    button.textContent = optionText;
    button.classList.add('option');
    button.addEventListener('click', () => checkAnswer(index, button));
    return button;
}

// Verificar la respuesta seleccionada
function checkAnswer(selectedIndex, button) {
    const currentQuestion = allQuestions[currentBattery].questions[currentQuestionIndex];

    // Añadir clase correcta o incorrecta
    if (selectedIndex === currentQuestion.answer) {
        button.classList.add('correct'); // Respuesta correcta
        score++; // Incrementar puntuación
        showFeedback("¡Correcto!"); // Mostrar feedback
    } else {
        button.classList.add('incorrect'); // Respuesta incorrecta
        incorrectAnswers++; // Incrementar el número de respuestas incorrectas
        const correctLetter = String.fromCharCode(currentQuestion.answer + 65); // A, B, C, D
        showFeedback("Incorrecto. Respuesta correcta: " + correctLetter); // Mostrar respuesta correcta

        // Marcar la opción correcta en verde
        const correctButton = document.querySelectorAll('.option')[currentQuestion.answer];
        if (correctButton) {
            console.log("Botón correcto encontrado:", correctButton);
            correctButton.classList.add('correct'); // Añadir clase correcta a la opción correcta
        } else {
            console.error("No se encontró el botón correcto.");
        }
    }

    // Deshabilitar todas las opciones
    document.querySelectorAll('.option').forEach(option => (option.disabled = true));
}

// Mostrar feedback al usuario
function showFeedback(message) {
    const feedbackContainer = document.getElementById('feedback');
    feedbackContainer.textContent = message; // Actualizar el texto de feedback
}

// Actualizar los botones de navegación
function updateNavigationButtons() {
    document.getElementById('prev-button').disabled = currentQuestionIndex === 0; 
    document.getElementById('next-button').disabled = currentQuestionIndex >= allQuestions[currentBattery].length - 1;
}

// Manejo de los botones de navegación
document.getElementById('prev-button').addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(); // Cargar la pregunta anterior
    }
});

document.getElementById('next-button').addEventListener('click', () => {
    if (currentQuestionIndex < allQuestions[currentBattery].questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(); // Cargar la siguiente pregunta
    } else {
        showFinalScore(); // Mostrar puntuación final al terminar el quiz
    }
});

// Manejo del botón de salida
document.getElementById('exitButton').addEventListener('click', function() {
    // Redirigir a una página de inicio o cerrar la aplicación
    window.location.href = 'index.html'; // Cambia 'index.html' a la página que desees
});

// Mostrar la puntuación final al terminar el quiz
function showFinalScore() {
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const feedbackContainer = document.getElementById('feedback');

    // Limpiar las opciones y la pregunta
    questionContainer.textContent = `Has completado la batería de preguntas. Tu puntuación es: ${score} de ${allQuestions[currentBattery].questions.length}.`;
    feedbackContainer.textContent = `Has fallado ${incorrectAnswers} preguntas.`; // Mostrar número de preguntas falladas
    optionsContainer.innerHTML = ''; // Limpiar opciones

    // Crear un botón para reiniciar el quiz
	const restartButton = document.createElement('button');
	restartButton.textContent = 'Hacerlo de Nuevo';
	restartButton.classList.add('boton_reinicio'); // Agregar la clase del botón
	restartButton.addEventListener('click', restartQuiz);
	optionsContainer.appendChild(restartButton);
}

// Reiniciar el quiz
function restartQuiz() {
    currentQuestionIndex = 0; // Reiniciar el índice de la pregunta
    score = 0; // Reiniciar la puntuación
    incorrectAnswers = 0; // Reiniciar el contador de respuestas incorrectas
    loadQuestion(); // Cargar la primera pregunta
}
