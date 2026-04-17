export const quizQuestions: { [key: string]: any[] } = {
  electrician: [
    {
      question: "What is the standard voltage for household electricity in India?",
      options: ["110V", "220V", "240V", "440V"],
      correctAnswer: "220V",
      explanation: "In India, single-phase household electricity is 220V at 50Hz frequency."
    },
    {
      question: "What does MCB stand for in electrical systems?",
      options: ["Main Circuit Board", "Miniature Circuit Breaker", "Multiple Connection Box", "Motor Control Box"],
      correctAnswer: "Miniature Circuit Breaker",
      explanation: "MCB (Miniature Circuit Breaker) is a safety device that automatically switches off electrical circuits during abnormal conditions."
    },
    {
      question: "Which wire is typically used as the earth/ground wire?",
      options: ["Red wire", "Black wire", "Green or Yellow-Green wire", "Blue wire"],
      correctAnswer: "Green or Yellow-Green wire",
      explanation: "Green or Yellow-Green striped wire is the international standard for earth/ground wiring for safety."
    },
    {
      question: "What is the primary purpose of an RCCB (Residual Current Circuit Breaker)?",
      options: [
        "To control voltage fluctuations",
        "To protect against electric shocks",
        "To increase current flow",
        "To reduce electricity bills"
      ],
      correctAnswer: "To protect against electric shocks",
      explanation: "RCCB detects leakage current and trips the circuit to prevent electric shocks and electrocution."
    },
    {
      question: "What tool is used to measure electrical current?",
      options: ["Voltmeter", "Ammeter", "Ohmmeter", "Wattmeter"],
      correctAnswer: "Ammeter",
      explanation: "An ammeter is specifically designed to measure electric current in amperes (A)."
    },
    {
      question: "In a 3-phase system, what is the voltage between any two phases?",
      options: ["220V", "380V", "415V", "440V"],
      correctAnswer: "415V",
      explanation: "In India's 3-phase system, the line-to-line voltage is 415V, while line-to-neutral is 230V."
    },
    {
      question: "What does the color code 'Brown' represent in modern wiring?",
      options: ["Neutral", "Live/Phase", "Earth", "Switched Live"],
      correctAnswer: "Live/Phase",
      explanation: "Brown is the international standard color for live/phase wire in modern electrical installations."
    },
    {
      question: "Which material is NOT a good electrical conductor?",
      options: ["Copper", "Aluminum", "Silver", "Rubber"],
      correctAnswer: "Rubber",
      explanation: "Rubber is an insulator and does not conduct electricity, which is why it's used to coat wires."
    },
    {
      question: "What is the maximum safe current rating for a standard 6A MCB?",
      options: ["4A", "6A", "8A", "10A"],
      correctAnswer: "6A",
      explanation: "A 6A MCB is rated to safely carry up to 6 amperes of current before tripping."
    },
    {
      question: "Why should you never work on live electrical circuits?",
      options: [
        "It's illegal",
        "Risk of electric shock and death",
        "It damages tools",
        "It wastes electricity"
      ],
      correctAnswer: "Risk of electric shock and death",
      explanation: "Working on live circuits poses severe risk of electric shock, burns, and potentially fatal accidents. Always isolate power first."
    }
  ],
  
  plumber: [
    {
      question: "What is the standard size of a bathroom sink drain pipe?",
      options: ["1 inch", "1.25 inches", "1.5 inches", "2 inches"],
      correctAnswer: "1.5 inches",
      explanation: "Bathroom sink drains typically use 1.5-inch pipes as per plumbing standards."
    },
    {
      question: "What tool is used to cut PVC pipes?",
      options: ["Hacksaw", "PVC Cutter", "Both A and B", "Angle Grinder"],
      correctAnswer: "Both A and B",
      explanation: "Both hacksaws and specialized PVC cutters can be used to cut PVC pipes cleanly."
    },
    {
      question: "What does PPR pipe stand for?",
      options: [
        "Plastic Polymer Reinforced",
        "Polypropylene Random Copolymer",
        "Pre-Pressed Rubber",
        "Pressure Pipe Resistant"
      ],
      correctAnswer: "Polypropylene Random Copolymer",
      explanation: "PPR (Polypropylene Random Copolymer) pipes are commonly used for hot and cold water supply."
    },
    {
      question: "Which material is best for hot water supply pipes?",
      options: ["PVC", "PPR/CPVC", "GI pipe", "PEX"],
      correctAnswer: "PPR/CPVC",
      explanation: "PPR and CPVC pipes can withstand high temperatures and are ideal for hot water applications."
    },
    {
      question: "What causes a toilet to continuously run?",
      options: [
        "Faulty flush valve or flapper",
        "High water pressure",
        "Clogged drain",
        "Broken seat"
      ],
      correctAnswer: "Faulty flush valve or flapper",
      explanation: "A continuously running toilet is usually caused by a worn-out flapper or flush valve that doesn't seal properly."
    },
    {
      question: "What is the recommended slope for drainage pipes?",
      options: ["1/4 inch per foot", "1/2 inch per foot", "1 inch per foot", "2 inches per foot"],
      correctAnswer: "1/4 inch per foot",
      explanation: "Drainage pipes should have a slope of 1/4 inch per foot (about 2%) for proper flow."
    },
    {
      question: "Which tool is used to clear clogged drains?",
      options: ["Wrench", "Plunger or Snake", "Hammer", "Level"],
      correctAnswer: "Plunger or Snake",
      explanation: "Plungers and drain snakes (augers) are specifically designed to clear clogs in drains."
    },
    {
      question: "What is Teflon tape used for in plumbing?",
      options: [
        "Fixing leaks permanently",
        "Sealing threaded pipe connections",
        "Insulating pipes",
        "Marking pipes"
      ],
      correctAnswer: "Sealing threaded pipe connections",
      explanation: "Teflon tape (PTFE tape) is wrapped around threaded joints to create a watertight seal."
    },
    {
      question: "Where should the main water shut-off valve be located?",
      options: [
        "In the bathroom",
        "Near the water meter or entry point",
        "In the kitchen",
        "On the roof"
      ],
      correctAnswer: "Near the water meter or entry point",
      explanation: "The main shut-off valve should be easily accessible near where water enters the building."
    },
    {
      question: "What indicates a potential leak in a water pipe?",
      options: [
        "Unusual water meter activity when no water is being used",
        "Loud noises",
        "Cold pipes",
        "Clean water"
      ],
      correctAnswer: "Unusual water meter activity when no water is being used",
      explanation: "If the water meter shows activity when all fixtures are off, it indicates a leak in the system."
    }
  ],

  "graphic-design": [
    {
      question: "What does CMYK stand for in color printing?",
      options: [
        "Cyan, Magenta, Yellow, Key (Black)",
        "Color, Mix, Yellow, Kraft",
        "Creative, Modern, Yellow, Kindle",
        "Cyan, Mix, Yellow, Kraftpaper"
      ],
      correctAnswer: "Cyan, Magenta, Yellow, Key (Black)",
      explanation: "CMYK is the color model used in color printing, with K representing black (key plate)."
    },
    {
      question: "What is the standard resolution for print design?",
      options: ["72 DPI", "150 DPI", "300 DPI", "600 DPI"],
      correctAnswer: "300 DPI",
      explanation: "300 DPI (dots per inch) is the industry standard for high-quality print materials."
    },
    {
      question: "Which file format preserves transparency?",
      options: ["JPEG", "PNG", "BMP", "TIFF only"],
      correctAnswer: "PNG",
      explanation: "PNG format supports transparency through alpha channels, unlike JPEG."
    },
    {
      question: "What is kerning in typography?",
      options: [
        "The space between lines",
        "The space between individual letter pairs",
        "The size of the font",
        "The style of the font"
      ],
      correctAnswer: "The space between individual letter pairs",
      explanation: "Kerning is the adjustment of space between specific pairs of letters for visual balance."
    },
    {
      question: "What is the Golden Ratio approximately equal to?",
      options: ["1.414", "1.618", "2.0", "3.14"],
      correctAnswer: "1.618",
      explanation: "The Golden Ratio (Phi) is approximately 1.618 and is used in design for aesthetically pleasing proportions."
    },
    {
      question: "RGB color mode is primarily used for:",
      options: ["Print design", "Digital/Screen design", "Newspaper", "Textile printing"],
      correctAnswer: "Digital/Screen design",
      explanation: "RGB (Red, Green, Blue) is the color model used for digital displays and screen-based designs."
    },
    {
      question: "What is a vector graphic?",
      options: [
        "Image made of pixels",
        "Image made of mathematical paths",
        "3D image only",
        "Animated image"
      ],
      correctAnswer: "Image made of mathematical paths",
      explanation: "Vector graphics use mathematical equations to define shapes, allowing infinite scaling without quality loss."
    },
    {
      question: "Which Adobe software is primarily for vector graphics?",
      options: ["Photoshop", "Illustrator", "Lightroom", "Premiere Pro"],
      correctAnswer: "Illustrator",
      explanation: "Adobe Illustrator is the industry-standard software for creating and editing vector graphics."
    },
    {
      question: "What is white space (negative space) in design?",
      options: [
        "Empty areas in a design",
        "Areas filled with white color only",
        "Printing errors",
        "Border margins only"
      ],
      correctAnswer: "Empty areas in a design",
      explanation: "White space refers to empty areas in a design that help create balance, focus, and readability."
    },
    {
      question: "What is a common aspect ratio for social media posts?",
      options: ["16:9", "1:1 (Square)", "4:3", "21:9"],
      correctAnswer: "1:1 (Square)",
      explanation: "1:1 square format is commonly used for Instagram and other social media platforms for consistent display."
    }
  ],

  default: [
    {
      question: "What is the most important quality for professional work?",
      options: ["Speed", "Attention to detail", "Low pricing", "Many tools"],
      correctAnswer: "Attention to detail",
      explanation: "Attention to detail ensures quality work and customer satisfaction, which builds long-term success."
    },
    {
      question: "How should you handle a difficult client?",
      options: [
        "Argue back",
        "Listen, communicate clearly, and find solutions",
        "Ignore them",
        "Quit the job"
      ],
      correctAnswer: "Listen, communicate clearly, and find solutions",
      explanation: "Professional communication and problem-solving skills are essential for managing client relationships."
    },
    {
      question: "What should you do before starting any job?",
      options: [
        "Start immediately",
        "Understand requirements and set expectations",
        "Ask for advance payment only",
        "Buy new tools"
      ],
      correctAnswer: "Understand requirements and set expectations",
      explanation: "Clear understanding of requirements and setting proper expectations prevents misunderstandings."
    },
    {
      question: "Why is continuous learning important?",
      options: [
        "It's not important",
        "To stay updated with industry trends and improve skills",
        "Only for beginners",
        "To impress clients only"
      ],
      correctAnswer: "To stay updated with industry trends and improve skills",
      explanation: "Continuous learning helps you stay competitive and deliver better quality work."
    },
    {
      question: "What is the best way to build trust with clients?",
      options: [
        "Low prices only",
        "Deliver quality work on time and communicate honestly",
        "Promise everything",
        "Work very fast"
      ],
      correctAnswer: "Deliver quality work on time and communicate honestly",
      explanation: "Reliability, quality, and honest communication are the foundation of client trust."
    },
    {
      question: "How should you price your services?",
      options: [
        "Always lowest in market",
        "Based on skill level, experience, and market rates",
        "As high as possible",
        "Same as everyone else"
      ],
      correctAnswer: "Based on skill level, experience, and market rates",
      explanation: "Fair pricing reflects your expertise while remaining competitive in the market."
    },
    {
      question: "What should you do if you make a mistake on a job?",
      options: [
        "Hide it",
        "Acknowledge it, take responsibility, and fix it promptly",
        "Blame the client",
        "Abandon the job"
      ],
      correctAnswer: "Acknowledge it, take responsibility, and fix it promptly",
      explanation: "Taking responsibility and fixing mistakes professionally builds credibility and trust."
    },
    {
      question: "Why is safety important in any work?",
      options: [
        "It's just a formality",
        "To prevent injuries and ensure quality work",
        "Only for insurance",
        "It slows down work"
      ],
      correctAnswer: "To prevent injuries and ensure quality work",
      explanation: "Safety protects you, your clients, and ensures professional, quality outcomes."
    },
    {
      question: "How should you handle payment discussions?",
      options: [
        "Avoid discussing money",
        "Be transparent and professional about rates and terms",
        "Always negotiate down",
        "Demand full payment upfront"
      ],
      correctAnswer: "Be transparent and professional about rates and terms",
      explanation: "Clear, professional communication about pricing prevents disputes and builds trust."
    },
    {
      question: "What makes a good portfolio?",
      options: [
        "Quantity over quality",
        "Best quality work showcasing diverse skills",
        "Only expensive projects",
        "Copied work from others"
      ],
      correctAnswer: "Best quality work showcasing diverse skills",
      explanation: "A strong portfolio displays your best work and demonstrates your range of capabilities."
    }
  ]
};
