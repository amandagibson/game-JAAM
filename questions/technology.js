const technology = [
  {
    q: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Program Utility",
      "Control Processing User",
    ],
    answer: 0,
  },
  {
    q: "Which language is primarily used to style web pages?",
    options: ["Python", "HTML", "CSS", "SQL"],
    answer: 2,
  },
  {
    q: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperText Machine Link",
    ],
    answer: 1,
  },
  {
    q: "Which company developed the Windows operating system?",
    options: ["Apple", "Google", "IBM", "Microsoft"],
    answer: 3,
  },
  {
    q: "What does RAM stand for?",
    options: [
      "Random Access Memory",
      "Read Access Module",
      "Rapid Application Memory",
      "Run Access Machine",
    ],
    answer: 0,
  },
  {
    q: "Which of these is a programming language?",
    options: ["HTTP", "Java", "HTML", "FTP"],
    answer: 1,
  },
  {
    q: "What does URL stand for?",
    options: [
      "Universal Reference Link",
      "Unified Resource Locator",
      "Uniform Resource Locator",
      "Universal Routing Language",
    ],
    answer: 2,
  },
  {
    q: "Which device is used to input text into a computer?",
    options: ["Monitor", "Printer", "Speaker", "Keyboard"],
    answer: 3,
  },
  {
    q: "What does GPU stand for?",
    options: [
      "Graphics Processing Unit",
      "General Program Utility",
      "Global Processing User",
      "Graphical Power Unit",
    ],
    answer: 0,
  },
  {
    q: "Which company developed the Android operating system?",
    options: ["Microsoft", "Google", "Apple", "Intel"],
    answer: 1,
  },
  {
    q: "What is the primary function of an operating system?",
    options: [
      "Create websites only",
      "Edit photos only",
      "Manage computer hardware and software",
      "Browse the internet only",
    ],
    answer: 2,
  },
  {
    q: "Which of these is a web browser?",
    options: [
      "Microsoft Excel",
      "Adobe Photoshop",
      "Visual Studio Code",
      "Mozilla Firefox",
    ],
    answer: 3,
  },
  {
    q: "What does HTTP stand for?",
    options: [
      "HyperText Transfer Protocol",
      "High Transfer Text Program",
      "Hyper Transfer Technology Process",
      "Host Text Transfer Platform",
    ],
    answer: 0,
  },
  {
    q: "Which storage device typically has no moving mechanical parts?",
    options: ["DVD drive", "SSD", "Floppy disk drive", "Hard disk drive"],
    answer: 1,
  },
  {
    q: "What is the main purpose of a firewall?",
    options: [
      "Increase screen brightness",
      "Store documents",
      "Filter network traffic for security",
      "Improve typing speed",
    ],
    answer: 2,
  },
  {
    q: "Which company makes the iPhone?",
    options: ["Samsung", "Huawei", "Google", "Apple"],
    answer: 3,
  },
  {
    q: "What does AI stand for?",
    options: [
      "Artificial Intelligence",
      "Automated Internet",
      "Advanced Interface",
      "Applied Integration",
    ],
    answer: 0,
  },
  {
    q: "Which language is commonly used for data analysis and machine learning?",
    options: ["HTML", "Python", "CSS", "XML"],
    answer: 1,
  },
  {
    q: "What is cloud computing?",
    options: [
      "Weather forecasting with satellites",
      "Saving files only on USB drives",
      "Using remote computing resources over a network",
      "Repairing computer hardware",
    ],
    answer: 2,
  },
  {
    q: "Which unit is commonly used to measure processor clock speed?",
    options: ["Liter", "Pixel", "Volt", "Hertz"],
    answer: 3,
  },
  {
    q: "What does USB stand for?",
    options: [
      "Universal Serial Bus",
      "Unified System Board",
      "Universal Storage Base",
      "User Service Bus",
    ],
    answer: 0,
  },
  {
    q: "Which protocol is commonly used to securely browse websites?",
    options: ["FTP", "HTTPS", "SMTP", "Telnet"],
    answer: 1,
  },
  {
    q: "What is the main function of DNS?",
    options: [
      "Encrypt files",
      "Compress images",
      "Translate domain names into IP addresses",
      "Create passwords",
    ],
    answer: 2,
  },
  {
    q: "Which of these is an example of an input device?",
    options: ["Projector", "Speaker", "Monitor", "Mouse"],
    answer: 3,
  },
  {
    q: "What does IoT stand for?",
    options: [
      "Internet of Things",
      "Integration of Technology",
      "Input of Tools",
      "Interface of Terminals",
    ],
    answer: 0,
  },
  {
    q: "Which company develops the Java programming language?",
    options: ["Meta", "Oracle", "Netflix", "Adobe"],
    answer: 1,
  },
  {
    q: "What is an algorithm?",
    options: [
      "A computer screen",
      "A type of processor",
      "A set of steps to solve a problem",
      "A network cable",
    ],
    answer: 2,
  },
  {
    q: "Which file extension is commonly used for JavaScript files?",
    options: [".java", ".py", ".html", ".js"],
    answer: 3,
  },
  {
    q: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Standard Question Logic",
      "System Quality Link",
      "Sequential Queue Language",
    ],
    answer: 0,
  },
  {
    q: "Which of these is a relational database management system?",
    options: ["Photoshop", "MySQL", "Firefox", "PowerPoint"],
    answer: 1,
  },
  {
    q: "What is the purpose of version control software?",
    options: [
      "Increase internet speed",
      "Remove all software bugs",
      "Track changes to files over time",
      "Protect a screen from damage",
    ],
    answer: 2,
  },
  {
    q: "Which tool is widely used for version control?",
    options: ["Docker", "Figma", "Jenkins", "Git"],
    answer: 3,
  },
  {
    q: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Automated Program Installation",
      "Advanced Processing Internet",
      "Application Protocol Integration",
    ],
    answer: 0,
  },
  {
    q: "Which programming language is primarily used to develop Android applications with the Android SDK?",
    options: ["CSS", "Kotlin", "SQL", "Bash"],
    answer: 1,
  },
  {
    q: "What is the purpose of an IP address?",
    options: [
      "Measure computer temperature",
      "Store passwords",
      "Identify a device or network interface on an IP network",
      "Increase memory capacity",
    ],
    answer: 2,
  },
  {
    q: "Which of these is a popular web development library for building user interfaces?",
    options: ["NumPy", "Pandas", "TensorFlow", "React"],
    answer: 3,
  },
  {
    q: "What does VPN stand for?",
    options: [
      "Virtual Private Network",
      "Verified Public Node",
      "Visual Program Network",
      "Variable Protected Name",
    ],
    answer: 0,
  },
  {
    q: "Which of these is an example of malware?",
    options: ["Spreadsheet", "Ransomware", "Text editor", "Web browser"],
    answer: 1,
  },
  {
    q: "What is phishing?",
    options: [
      "Improving Wi-Fi coverage",
      "Compressing files",
      "Tricking people into revealing sensitive information",
      "Updating an operating system",
    ],
    answer: 2,
  },
  {
    q: "Which practice helps create a stronger password?",
    options: [
      "Using your name only",
      "Reusing one password everywhere",
      "Using 123456",
      "Using a long, unique password",
    ],
    answer: 3,
  },
  {
    q: "What is two-factor authentication?",
    options: [
      "Using two different verification factors",
      "Creating two usernames",
      "Installing two browsers",
      "Using two monitors",
    ],
    answer: 0,
  },
  {
    q: "Which technology enables wireless communication over short distances between devices?",
    options: ["Ethernet", "Bluetooth", "HDMI", "SATA"],
    answer: 1,
  },
  {
    q: "What does 5G refer to in mobile communications?",
    options: [
      "Five gigabytes of storage",
      "Five graphics processors",
      "The fifth generation of mobile network technology",
      "A fifth-generation computer",
    ],
    answer: 2,
  },
  {
    q: "Which component supplies electrical power to a desktop computer's internal parts?",
    options: ["GPU", "RAM", "SSD", "Power supply unit"],
    answer: 3,
  },
  {
    q: "What does BIOS traditionally stand for?",
    options: [
      "Basic Input/Output System",
      "Binary Internet Operating Service",
      "Basic Integrated Online Software",
      "Boot Input Organization Setup",
    ],
    answer: 0,
  },
  {
    q: "Which company manufactures the Ryzen series of processors?",
    options: ["NVIDIA", "AMD", "Apple", "Qualcomm"],
    answer: 1,
  },
  {
    q: "What is the main role of a computer's motherboard?",
    options: [
      "Print documents",
      "Display web pages",
      "Connect and allow communication between components",
      "Store cloud backups",
    ],
    answer: 2,
  },
  {
    q: "Which of these is a popular Linux distribution?",
    options: ["iOS", "Windows 11", "macOS", "Ubuntu"],
    answer: 3,
  },
  {
    q: "What is open-source software?",
    options: [
      "Software whose source code is available under a license permitting inspection and often modification",
      "Software that only runs online",
      "Software that cannot be modified",
      "Software that always requires a subscription",
    ],
    answer: 0,
  },
  {
    q: "Which command lists files and directories in a typical Linux terminal?",
    options: ["mkdir", "ls", "touch", "pwd"],
    answer: 1,
  },
  {
    q: "Which command creates a new Git branch and switches to it?",
    options: ["git merge", "git status", "git switch -c", "git push"],
    answer: 2,
  },
  {
    q: "What does IDE stand for in software development?",
    options: [
      "Internet Data Exchange",
      "Integrated Device Engine",
      "Internal Development Extension",
      "Integrated Development Environment",
    ],
    answer: 3,
  },
  {
    q: "Which of these is an IDE?",
    options: ["Visual Studio", "Google Drive", "VLC Media Player", "Spotify"],
    answer: 0,
  },
  {
    q: "What is debugging?",
    options: [
      "Designing a logo",
      "Finding and fixing software defects",
      "Installing a printer",
      "Upgrading a monitor",
    ],
    answer: 1,
  },
  {
    q: "What does JSON stand for?",
    options: [
      "Java Standard Object Network",
      "Joined System Output Notation",
      "JavaScript Object Notation",
      "Java Source Open Network",
    ],
    answer: 2,
  },
  {
    q: "Which data structure follows the Last In, First Out principle?",
    options: ["Queue", "Tree", "Graph", "Stack"],
    answer: 3,
  },
  {
    q: "Which data structure follows the First In, First Out principle?",
    options: ["Queue", "Stack", "Heap", "Binary tree"],
    answer: 0,
  },
  {
    q: "What is an example of a compiled programming language?",
    options: ["HTML", "C++", "CSS", "Markdown"],
    answer: 1,
  },
  {
    q: "Which symbol is commonly used for strict equality in JavaScript?",
    options: ["=", "==", "===", "!="],
    answer: 2,
  },
  {
    q: "Which keyword declares a block-scoped variable that can be reassigned in JavaScript?",
    options: ["static", "define", "constant", "let"],
    answer: 3,
  },
  {
    q: "What does CSS primarily control?",
    options: [
      "The presentation and styling of web pages",
      "Database queries",
      "Server hardware",
      "Network routing",
    ],
    answer: 0,
  },
  {
    q: "Which HTML element is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: 1,
  },
  {
    q: "Which HTTP method is commonly used to retrieve a resource?",
    options: ["DELETE", "PATCH", "GET", "POST"],
    answer: 2,
  },
  {
    q: "Which HTTP status code generally means 'Not Found'?",
    options: ["200", "301", "500", "404"],
    answer: 3,
  },
  {
    q: "What is responsive web design?",
    options: [
      "Design that adapts to different screen sizes and devices",
      "Design that works only on desktops",
      "A method for speeding up keyboards",
      "A database backup technique",
    ],
    answer: 0,
  },
  {
    q: "Which technology allows JavaScript to run outside a web browser?",
    options: ["Bootstrap", "Node.js", "HTML5", "Sass"],
    answer: 1,
  },
  {
    q: "What is npm commonly used for?",
    options: [
      "Managing computer power",
      "Editing videos",
      "Managing JavaScript packages",
      "Creating hardware drivers",
    ],
    answer: 2,
  },
  {
    q: "What does DOM stand for in web development?",
    options: [
      "Data Output Mode",
      "Digital Object Manager",
      "Document Orientation Method",
      "Document Object Model",
    ],
    answer: 3,
  },
  {
    q: "Which of these is a JavaScript testing framework?",
    options: ["Jest", "MySQL", "Apache", "Figma"],
    answer: 0,
  },
  {
    q: "What is the purpose of Docker?",
    options: [
      "Designing user interfaces only",
      "Packaging and running applications in containers",
      "Creating spreadsheets",
      "Managing email accounts",
    ],
    answer: 1,
  },
  {
    q: "Which platform is widely used for hosting Git repositories?",
    options: ["Dropbox", "Zoom", "GitHub", "Canva"],
    answer: 2,
  },
  {
    q: "What is continuous integration (CI)?",
    options: [
      "Connecting computers with Bluetooth",
      "Combining multiple monitors",
      "Backing up files once a year",
      "Frequently integrating code changes and validating them with automated checks",
    ],
    answer: 3,
  },
  {
    q: "What is the main purpose of a database index?",
    options: [
      "Speed up certain data retrieval operations",
      "Delete duplicate applications",
      "Encrypt every database field automatically",
      "Increase monitor resolution",
    ],
    answer: 0,
  },
  {
    q: "Which database is commonly classified as a document-oriented NoSQL database?",
    options: ["PostgreSQL", "MongoDB", "SQLite", "Microsoft SQL Server"],
    answer: 1,
  },
  {
    q: "What does CRUD stand for?",
    options: [
      "Create, Run, Update, Deploy",
      "Connect, Read, Upload, Download",
      "Create, Read, Update, Delete",
      "Configure, Restore, Undo, Develop",
    ],
    answer: 2,
  },
  {
    q: "Which language is commonly used to query relational databases?",
    options: ["CSS", "PHP", "Swift", "SQL"],
    answer: 3,
  },
  {
    q: "What is data encryption?",
    options: [
      "Transforming data into a form that requires the appropriate key to recover its readable content",
      "Deleting files permanently",
      "Making files larger",
      "Moving files to another folder",
    ],
    answer: 0,
  },
  {
    q: "What is a hash function commonly used for in computer security?",
    options: [
      "Increasing screen resolution",
      "Producing a fixed-length digest from input data",
      "Compressing every video",
      "Assigning IP addresses",
    ],
    answer: 1,
  },
  {
    q: "Which of these is an example of symmetric encryption?",
    options: [
      "RSA",
      "Diffie-Hellman",
      "AES",
      "Elliptic-curve digital signatures",
    ],
    answer: 2,
  },
  {
    q: "What is a DDoS attack designed to do?",
    options: [
      "Improve website performance",
      "Create a secure backup",
      "Update software automatically",
      "Overwhelm a service with traffic from multiple sources",
    ],
    answer: 3,
  },
  {
    q: "What does CAPTCHA help websites do?",
    options: [
      "Distinguish likely human users from automated programs",
      "Increase storage capacity",
      "Encrypt all network traffic",
      "Create database tables",
    ],
    answer: 0,
  },
  {
    q: "Which technology is commonly used to record transactions in a decentralized, tamper-resistant ledger?",
    options: ["Bluetooth", "Blockchain", "CSS", "SMTP"],
    answer: 1,
  },
  {
    q: "What is cryptocurrency?",
    options: [
      "A physical banknote",
      "A computer operating system",
      "A digital asset that uses cryptographic techniques",
      "A type of computer monitor",
    ],
    answer: 2,
  },
  {
    q: "What is a smart contract in blockchain technology?",
    options: [
      "A contract printed on special paper",
      "An AI-powered email",
      "A password manager",
      "Code that executes predefined rules on a blockchain",
    ],
    answer: 3,
  },
  {
    q: "Which technology enables devices to determine their geographic position using satellite signals?",
    options: ["GPS", "NFC", "USB", "NTP"],
    answer: 0,
  },
  {
    q: "What does NFC stand for?",
    options: [
      "Network File Control",
      "Near Field Communication",
      "New Frequency Channel",
      "National Fiber Connection",
    ],
    answer: 1,
  },
  {
    q: "Which technology is commonly used for contactless payments with a phone?",
    options: ["VGA", "SATA", "NFC", "VGA"],
    answer: 2,
  },
  {
    q: "What is augmented reality (AR)?",
    options: [
      "A completely simulated environment replacing the real world",
      "A technique for compressing files",
      "A type of cloud database",
      "Technology that overlays digital content onto the real world",
    ],
    answer: 3,
  },
  {
    q: "What is virtual reality (VR)?",
    options: [
      "Technology that creates an immersive, computer-generated environment",
      "A physical storage device",
      "A programming language",
      "A network security protocol",
    ],
    answer: 0,
  },
  {
    q: "Which of these is a common application of machine learning?",
    options: [
      "Manually assembling a keyboard",
      "Recommending movies based on user preferences",
      "Replacing all computer hardware",
      "Charging a laptop battery",
    ],
    answer: 1,
  },
  {
    q: "What is a neural network inspired by?",
    options: [
      "The structure of computer cables",
      "The design of databases",
      "The interconnected neurons of biological nervous systems",
      "The layout of websites",
    ],
    answer: 2,
  },
  {
    q: "What is generative AI designed to do?",
    options: [
      "Only store existing files",
      "Only repair physical devices",
      "Only measure network speed",
      "Generate new content such as text, images, audio, or code",
    ],
    answer: 3,
  },
  {
    q: "Which of these is an example of a large language model application?",
    options: [
      "Generating a text summary from a document",
      "Increasing a processor's clock speed physically",
      "Replacing a broken screen",
      "Manufacturing a network cable",
    ],
    answer: 0,
  },
  {
    q: "What is edge computing?",
    options: [
      "Computing only in outer space",
      "Processing data closer to where it is generated",
      "Storing every file on a central DVD",
      "Designing curved monitors",
    ],
    answer: 1,
  },
  {
    q: "Which renewable energy source can power data centers?",
    options: ["Diesel only", "Coal only", "Solar energy", "Gasoline only"],
    answer: 2,
  },
  {
    q: "What is quantum computing based on?",
    options: [
      "Mechanical gears",
      "Ordinary decimal arithmetic only",
      "Optical disks",
      "Quantum-mechanical phenomena such as superposition and entanglement",
    ],
    answer: 3,
  },
  {
    q: "Which technology is used to manufacture many modern computer chips?",
    options: [
      "Semiconductor fabrication",
      "Paper printing",
      "Magnetic tape recording",
      "Mechanical typewriting",
    ],
    answer: 0,
  },
  {
    q: "What is the primary function of an accelerometer in a smartphone?",
    options: [
      "Connect to cellular networks",
      "Measure acceleration and help detect movement or orientation changes",
      "Store photos",
      "Encrypt messages",
    ],
    answer: 1,
  },
  {
    q: "Which technology is commonly used to connect a monitor to a computer for digital video?",
    options: ["RJ11", "PS/2", "HDMI", "SATA"],
    answer: 2,
  },
  {
    q: "What does Wi-Fi primarily provide?",
    options: [
      "A way to print without ink",
      "A replacement for computer memory",
      "A method for charging every device wirelessly",
      "Wireless networking",
    ],
    answer: 3,
  },
  {
    q: "What is the purpose of a router in a computer network?",
    options: [
      "Forward packets between networks",
      "Display graphics",
      "Compile source code",
      "Cool the processor",
    ],
    answer: 0,
  },
  {
    q: "Which network type typically covers a small personal area around an individual?",
    options: ["WAN", "PAN", "MAN", "SAN"],
    answer: 1,
  },
  {
    q: "What does LAN stand for?",
    options: [
      "Long Access Network",
      "Linked Application Node",
      "Local Area Network",
      "Large Automated Network",
    ],
    answer: 2,
  },
  {
    q: "Which protocol is commonly used to send email between mail servers?",
    options: ["HTTP", "SSH", "SNMP", "SMTP"],
    answer: 3,
  },
  {
    q: "What does FTP traditionally stand for?",
    options: [
      "File Transfer Protocol",
      "Fast Text Processing",
      "Folder Tracking Program",
      "File Transmission Platform",
    ],
    answer: 0,
  },
  {
    q: "Which technology is commonly used to securely access a remote command-line session?",
    options: ["HTTP", "SSH", "POP3", "DHCP"],
    answer: 1,
  },
  {
    q: "What is the main purpose of DHCP?",
    options: [
      "Encrypt websites",
      "Transfer email",
      "Automatically assign IP configuration to network devices",
      "Compile applications",
    ],
    answer: 2,
  },
  {
    q: "Which of these is a common file format for compressed archives?",
    options: [".mp3", ".html", ".exe", ".zip"],
    answer: 3,
  },
];
