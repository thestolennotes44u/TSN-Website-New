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
            { title: "Set 1: PC 1", link: "FORM_OR_TEST_LINK" },
			{ title: "Set 1: PC 2", link: "FORM_OR_TEST_LINK" },
			{ title: "Set 1: PC 3", link: "FORM_OR_TEST_LINK" },
			{ title: "Set 1: PC 12", link: "FORM_OR_TEST_LINK" },
			{ title: "Set 1: PC 14", link: "FORM_OR_TEST_LINK" },
            { title: "Set 1: PC 16", link: "FORM_OR_TEST_LINK" }
        ],
        set2: [
            { title: "Set 2: PC 1", link: "FORM_OR_TEST_LINK" },
			{ title: "Set 2: PC 2", link: "FORM_OR_TEST_LINK" },
			{ title: "Set 2: PC 3", link: "FORM_OR_TEST_LINK" },
			{ title: "Set 2: PC 12", link: "FORM_OR_TEST_LINK" },
			{ title: "Set 2: PC 14", link: "FORM_OR_TEST_LINK" },
            { title: "Set 2: PC 16", link: "FORM_OR_TEST_LINK" }
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
        q: "Do we provide online live classes or offline coaching?", 
        a: "No. We do not provide live or offline classes. We host all our lectures on our YouTube channel so you can learn at your own pace and convenience." 
    },
    { 
        q: "Have we covered the entire SAS syllabus?", 
        a: "Not yet. We have covered major portions of PC2, PC12 and PC14 as per new syllabus. We have also covered portions of PC3 (IT Auit, IT Act, IT Rules, OWASP, GIGW etc.) and PC4 (CPWA, Forest Accounts etc.). We are still working to cover the reamining portions ASAP. You can even suggest us a topic which you want us to cover. (Link is under the 'Link' tab."
    },
    { 
        q: "In which language are the video lectures and notes available?", 
        a: "We deliver lectures in a mix of Hindi and English for better clarity, while we provide all PDF notes and Mock Tests in English." 
    },
    { 
        q: "Are our materials enough to pass the exam, or do I need the full manuals?", 
        a: "We design our materials to simplify the core essentials. While they cover high-yield topics, we always recommend using them alongside official manuals for a comprehensive understanding." 
    },
    { 
        q: "Can I download and print the PDF notes from the Library?", 
        a: "Yes. You can download and print any PDF note in the Library for your personal study use." 
    },
    { 
        q: "Why can't I see the 'Join' button on my iPhone/iOS device?", 
        a: "Apple's YouTube app often hides the 'Join' button. To join, please open YouTube in a web browser (Safari or Chrome) on your device or use a desktop/Android phone." 
    },
    { 
        q: "I joined the channel; why can't I see the Members-only videos?", 
        a: "Please ensure you are logged into the same YouTube account you used for the membership. Once logged in, you will find these videos in the 'Members-only' playlist on our channel.Sometime's it's a technical issue at the YouTube's end." 
    },
    { 
        q: "I joined the channel; why can't I access the Mock Tests?", 
        a: "You must fill out the Google Form (link in the YouTube Posts Tab) so we can activate your access." 
    },
    { 
        q: "I filled out the form; why haven't I received access yet?", 
        a: "Granting access may typically take upto 2 to 4 days. Please double-check that you provided the correct email ID in the form. If you are still not able to access, write us a mail." 
    },
	{ 
        q: "Where can I find the Google Form to request Mock Test access?", 
        a: "In the 'Posts Tab' of our YouTube channel." 
    },
    { 
        q: "How many mock tests do we provide per month?", 
        a: "We generally provide two sets of Mock Tests every month (usually around the 1st and 15th) covering different subjects. So one can get at least 2 sets." 
    },
	{ 
        q: "Which subjects are currently covered from Tests?", 
        a: "Currently Mock Tests of PC1, PC2, PC3, PC12, PC14 and PC16 are available. Core Plus level gives access to first three while Audit Plus level gives access to all six." 
    },
    { 
        q: "Can I attempt a Mock Test more than once?", 
        a: "To simulate a real exam environment, we currently limit each mock test link to 01 attempt." 
    },
    { 
        q: "How can I save my attempted mocks to review them later?", 
        a: "After finishing a test, you can use the 'Print to PDF' option in your browser or take screenshots of the result page to save your responses for future review." 
    },
    { 
        q: "Why does my mock test access expire after 30 days?", 
        a: "You simply need to re-submit the form for each new month. The 30 days limit is counted from access given and not from filling the form or joining the level. Also, in most of the cases this duration is a couple of days more than 30 days, but never less than 30 days." 
    },
    { 
        q: "Can I take the mock tests comfortably on my mobile?", 
        a: "Yes. All objective MCQs can be taken on any device. However, one need desktop / laptop for Practical / Descriptive section." 
    },
    { 
        q: "My question is not listed here.", 
        a: "Feel free to reach out to us at <strong>TheStolenNotes4u@gmail.com.</strong>" 
    }
]
};