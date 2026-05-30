const DATA = {
    // 1. Social & External Links
    youtubeLink: "https://youtube.com/@TheStolenNotes", // Apna sahi handle daalein

    // 2. The Home Page Quote
    quote: {
        text: "You have to dream before your dreams can come true",
        author: "Dr. A. P. J. Abdul Kalam"
    },

    // 3. Library Content
    // Types: "video" (Play Icon), "manual" (Book Icon), "note" (Page Icon)
    // isNew: true karne par ye automatically Library ke niche 'Recently Added' mein dikhega
    library: [
        { type: "video", title: "Govt Audit (PC-2)", link: "https://www.youtube.com/playlist?list=PLC253KEw47ttruAZpayM1AXEIoZFqf9zp", isNew: true },
        { type: "video", title: "Performance Audit (PC-12)", link: "https://www.youtube.com/playlist?list=PLC253KEw47tv-12cAG5HF03GBAQOpiYMa", isNew: false },
        { type: "video", title: "Compliance Audit (PC-12)", link: "https://www.youtube.com/playlist?list=PLC253KEw47tvaHhl84Rer_JattxrBZqgq", isNew: true },
        { type: "video", title: "Financial Audit (PC-14)", link: "https://www.youtube.com/playlist?list=PLC253KEw47tsnBktdhGjdjXgMi-hKy0RB", isNew: false },
        { type: "note", title: "Govt Audit (PC-2)", link: "https://drive.google.com/drive/folders/11deh1RO_27eeFuuhXBlS0qVnMOeAKNR2?usp=drive_link", isNew: false },
		{ type: "note", title: "Performance Audit (PC-12)", link: "https://drive.google.com/drive/folders/1wTLX_r9iNUr6V9X8WiLWj50nP1IRAz3R?usp=drive_link", isNew: true },
		{ type: "note", title: "Compliance Audit (PC-12)", link: "https://drive.google.com/drive/folders/1uSJYiTMnC9nANcq3kpmh_W8M6_jFyiEI?usp=drive_link", isNew: false },
		{ type: "note", title: "Financial Audit (PC-14)", link: "https://drive.google.com/drive/folders/1uZqhWN5mtzQUdszFQUzFJHHbIpWb3Wdw?usp=drive_link", isNew: true },
		{ type: "manual", title: "CAG's DPC Act 1971", link: "https://cag.gov.in/uploads/media/DPC2014new-20201008140628.pdf", isNew: false },
		{ type: "manual", title: "Regulation 2020", link: "https://cag.gov.in/uploads/media/Regulations-Audit-Accounts-2020-0628cb207042fa3-15123011.pdf", isNew: false },
		{ type: "manual", title: "CAG's Auditing Standard", link: "https://cag.gov.in/uploads/media/Auditing-Standards-new-20200624145444.pdf", isNew: false }
    ],

    // 4. Mock Tests
    // Pen icon (🖊️) humne fix kiya tha
    mocks: {
        set1: [ 
            { title: "Set 1: PC 1", link: "https://testmoz.com/q/15105684" },
			{ title: "Set 1: PC 2", link: "https://testmoz.com/q/15098712" },
			{ title: "Set 1: PC 3", link: "https://testmoz.com/q/15102106" },
			{ title: "Set 1: PC 12", link: "https://testmoz.com/q/15099752" },
			{ title: "Set 1: PC 14", link: "https://testmoz.com/q/15101928" },
            { title: "Set 1: PC 16", link: "https://testmoz.com/q/15102076" }
        ],
        set2: [ 
            { title: "Set 2: PC 1", link: "https://testmoz.com/q/15151028" },
			{ title: "Set 2: PC 2", link: "https://testmoz.com/q/15147968" },
			{ title: "Set 2: PC 3", link: "https://testmoz.com/q/15151084" },
			{ title: "Set 2: PC 12", link: "https://testmoz.com/q/15150382" },
			{ title: "Set 2: PC 14", link: "https://testmoz.com/q/15150900" },
            { title: "Set 2: PC 16", link: "https://testmoz.com/q/15150966" }
        ]
    },

    // 5. Important Links (Support Tab)
    impLinks: [
        { title: "Feedback on Previous Exam", link: "https://docs.google.com/forms/d/e/1FAIpQLSem9UOxNZvR164S2ZSjoBxBM8ePBIjme_8u4vmw4fpmXrYOJg/viewform?usp=header" },
		{ title: "Suggest a Topic to Cover", link: "https://docs.google.com/forms/d/e/1FAIpQLSek1DWtOo6wopDZUPLzzDfaZ3Cg4o2a9BnjaT330Y0qr9-xFQ/viewform?usp=header" },
		{ title: "Official Circulars", link: "https://cag.gov.in/en/exam-wing-circulars" },
        { title: "Syllabus & Books", link: "https://cag.gov.in/en/examination/examination-books" }
        
    ],

    // 6. FAQs (Support Tab)
    faqs: [
    {
        q: "What is the difference between CORE, AUDIT, CORE PLUS and AUDIT PLUS?",
        a: "CORE and AUDIT memberships provide access to exclusive members-only videos. CORE covers Common Papers, while AUDIT covers both Common Papers and Audit Papers. CORE PLUS and AUDIT PLUS include all the benefits of their respective memberships along with access to Mock Tests."
    },
    {
        q: "Do we provide online live classes or offline coaching?",
        a: "No. We do not provide live or offline classes. We host all our lectures on our YouTube channel so you can learn at your own pace and convenience."
    },
    {
        q: "Have we covered the entire SAS syllabus?",
        a: "Not yet. We have covered major portions of PC2, PC12 and PC14 as per the revised syllabus. We have also covered portions of PC3 (IT Audit, IT Act, IT Rules, OWASP, GIGW etc.) and PC4 (CPWA, Forest Accounts etc.). We are working hard to cover the remaining portions ASAP. You can even suggest a topic you want us to cover via the link available under the 'Links' tab."
    },
    {
        q: "In which language are the video lectures and notes available?",
        a: "We deliver lectures in a mix of Hindi and English for better clarity, while all PDF notes and Mock Tests are provided in English."
    },
    {
        q: "Can I rely solely on The Stolen Notes materials for the SAS examination?",
        a: "We design our materials to simplify the core essentials and focus on high-yield topics. However, we always recommend referring to the official manuals and source material for comprehensive preparation."
    },
    {
        q: "Can I download and print the PDF notes from the Library?",
        a: "Yes. You can download and print any PDF note available in the Library for your personal study use."
    },
    {
        q: "Why can't I see the 'Join' button on my iPhone/iOS device?",
        a: "If you are unable to find the 'Join' button on mobile app, please open YouTube in a web browser or use a desktop/laptop. Once joined, you may access using your YouTube app."
    },
    {
        q: "I joined the channel; why can't I see the Members-only videos?",
        a: "Please ensure that you are logged into the same YouTube account that you used to purchase the membership. Once logged in, you can find the videos in the Members-only playlists on our channel. Sometimes, it may also be a temporary technical issue on YouTube's end."
    },
    {
        q: "How long will I retain access to membership benefits?",
        a: "You will continue to enjoy membership benefits as long as your YouTube membership remains active."
    },
    {
        q: "How do I get access to the Mock Tests and how long does it take?",
        a: "Once you join CORE PLUS or AUDIT PLUS, access to the relevant Mock Tests is granted automatically. However, it may take anywhere from a few hours to a couple of days for the access to be fully activated."
    },
    {
        q: "Which e-mail ID should I enter while attempting the Mock Tests?",
        a: "Please enter the same Google account e-mail ID that was used to join the YouTube membership."
    },
    {
        q: "Which subjects are currently covered for Mock Tests?",
        a: "Currently, Mock Tests of PC1, PC2, PC3, PC12, PC14 and PC16 are available. CORE PLUS provides access to PC1, PC2 and PC3, while AUDIT PLUS provides access to all six papers."
    },
    {
        q: "How many Mock Test sets do we provide every month?",
        a: "We generally release new Mock Test sets around the 1st and 15th of every month. The exact number of tests and subjects covered may vary."
    },
    {
        q: "Can I attempt a Mock Test more than once?",
        a: "To simulate a real examination environment, each Mock Test link is currently limited to one attempt."
    },
    {
        q: "Can I take the Mock Tests on my mobile phone?",
        a: "Yes. All objective MCQ tests can be attempted on mobile devices. However, for Practical or Descriptive sections, a desktop or laptop is recommended."
    },
    {
        q: "How can I save my attempted Mock Tests for future review?",
        a: "After completing a test, you can use your browser's 'Print to PDF' feature or take screenshots of the result page to save your responses for future reference."
    },
    {
        q: "How long do I have access to the Mock Tests?",
        a: "You can access the Mock Tests as long as your CORE PLUS or AUDIT PLUS membership remains active."
    },
    {
        q: "I am unable to access a PDF, Link or Mock Test. What should I do?",
        a: "Please wait for some time and try again. If the issue persists, write to us at <strong>TheStolenNotes4u@gmail.com</strong> along with relevant details and screenshots."
    },
    {
        q: "My question is not listed here.",
        a: "Feel free to reach out to us at <strong>TheStolenNotes4u@gmail.com</strong>."
    }
]
};