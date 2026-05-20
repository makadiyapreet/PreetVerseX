/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Preet's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Preet Makadiya Portfolio",
    type: "website",
    url: "https://makadiyapreet.github.io/PreetVerseX/", //github pages
  },
};

//Home Page
const greeting = {
  title: "Preet Makadiya",
  logo_name: "PreetMakadiya",
  nickname: "Preet Patel",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1u7jlDUG4J_oc4LjlUv59o8upPBoXnkKN/view?usp=sharing",
  portfolio_repository: "https://github.com/makadiyapreet/PreetVerseX",
  githubProfile: "https://github.com/makadiyapreet",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/makadiyapreet",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/preet-makadiya-13102004-p/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://youtube.com/",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:makadiyapreeta1@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/PreetMakadiya",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/makadiyapreet",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/preet_1310_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      // imagePath: "DataScienceImg.png",
      skills: [
        "⚡ Developing scalable production models for deep learning and statistical use cases",
        "⚡ Experience with computer vision and NLP projects",
        "⚡ Complex quantitative modeling for forecasting and time series analysis",
      ],
      softwareSkills: [
        { skillName: "Tensorflow", fontAwesomeClassname: "logos-tensorflow", style: { backgroundColor: "transparent" } },
        { skillName: "Keras", fontAwesomeClassname: "simple-icons:keras", style: { backgroundColor: "white", color: "#D00000" } },
        { skillName: "PyTorch", fontAwesomeClassname: "logos-pytorch", style: { backgroundColor: "transparent" } },
        { skillName: "Python", fontAwesomeClassname: "ion-logo-python", style: { backgroundColor: "transparent", color: "#3776AB" } },
      ],
    },
    {
  title: "Programming Languages",
  fileName: "",
  imagePath: "ProgrammingImg.png",
  skills: [
    "⚡ Proficient in Python, C, C++ for diverse software development",
    "⚡ Strong knowledge of JavaScript for dynamic web applications",
    "⚡ Experience with React.js for building scalable UI components",
    "⚡ Experience with MySQL for database management",
    "⚡ Skilled in frontend technologies HTML and CSS",
    "⚡ Backend development using Django framework",
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "ion-logo-python", style: { backgroundColor: "transparent", color: "#3776AB" } },
    { skillName: "C", fontAwesomeClassname: "simple-icons:c", style: { backgroundColor: "transparent" } },
    { skillName: "C++", fontAwesomeClassname: "simple-icons:cplusplus", style: { backgroundColor: "transparent" } },
    { skillName: "JavaScript", fontAwesomeClassname: "simple-icons:javascript", style: { color: "#F7DF1E" } },
    { skillName: "React", fontAwesomeClassname: "simple-icons:react", style: { color: "#61DAFB" } },
    { skillName: "MySQL", fontAwesomeClassname: "simple-icons:mysql", style: { color: "#4479A1" } },
    { skillName: "HTML5", fontAwesomeClassname: "simple-icons:html5", style: { color: "#E34F26" } },
    { skillName: "CSS3", fontAwesomeClassname: "fa-css3", style: { color: "#1572B6" } },
    { skillName: "Django", fontAwesomeClassname: "simple-icons:django", style: { color: "#092E20" } },
  ],
  },
    {
      title: "Cybersecurity & Ethical Hacking",
      fileName: "",
      imagePath: "CyberSecurityImg.png",
      skills: [
        "⚡ Experience with Kali Linux and penetration testing tools",
        "⚡ Proficient in Metasploit, Burp Suite, Wireshark, Nmap/Zenmap",
        "⚡ Knowledge of OWASP Top 10 and Web Application Security",
        "⚡ Network Penetration Testing and Vulnerability Assessment",
        "⚡ Basics of Exploit Development and Cryptography Algorithms (Caesar, Vigenère, RSA, AES)",
        "⚡ Hashing Algorithms (MD5, SHA256) and Steganography",
        "⚡ Digital Forensics and OSINT techniques",
        "⚡ Secure Coding Practices",
      ],
      softwareSkills: [
        { skillName: "Kali Linux", fontAwesomeClassname: "simple-icons:kalilinux", style: { color: "#557C94" } },
        { skillName: "Metasploit", fontAwesomeClassname: "simple-icons:metasploit", style: { color: "#A22128" } },
        { skillName: "Burp Suite", fontAwesomeClassname: "simple-icons:portswigger", style: { color: "#F0642F" } },
        { skillName: "Wireshark", fontAwesomeClassname: "simple-icons:wireshark", style: { color: "#0079FF" } },
        { skillName: "Nmap", fontAwesomeClassname: "file-icons:nmap", style: { color: "#7AB800" } },
      ],
    },
    {
      title: "Graphic Design and Video Editing",
      fileName: "DesignImg",
      // imagePath: "DesignImg.png",
      skills: [
        "⚡ Designing creative graphics and logos",
        "⚡ Video editing and post-production",
        "⚡ Experience with popular graphic and video tools",
      ],
      softwareSkills: [
        { skillName: "Adobe Photoshop", fontAwesomeClassname: "logos:adobe-photoshop", style: { color: "#31A8FF" } },
        { skillName: "Adobe Illustrator", fontAwesomeClassname: "logos:adobe-illustrator", style: { color: "#FF7C00" } },
        { skillName: "Adobe Premiere Pro", fontAwesomeClassname: "simple-icons:adobepremierepro", style: { color: "#9999FF" } },
        { skillName: "Canva", fontAwesomeClassname: "simple-icons:canva", style: { color: "#00C4CC" } },
      ],
    },
  ],
};


// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/Preet_Makadiya/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/makadiyapreet1",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/preetpatel_13",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/preet-makadiya",
    },
    {
      siteName: "Udemy",
      iconifyClassname: "simple-icons:udemy",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.udemy.com/user/preet-586/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/preetmakadiya",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Shakti Higher Secondary School",
      subtitle: "Higher Secondary Education in Science Stream",
      logo_path: "shakti_logo.png",
      alt_name: "Gujarat Secondary and Higher Secondary Education Board",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ Completed my higher secondary education with a focus on Physics, Chemistry, Mathematics, and Computer Science.",
        "⚡ Developed a strong foundation in analytical thinking, problem solving, and logical reasoning through core science and math subjects.",
        "⚡ Participated in various academic and co-curricular activities that enhanced my teamwork, creativity, and leadership skills.",
      ],
      website_link: "https://shaktischools.org/",
    },
    {
      title: "Pandit Deendayal Energy University",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "pdeu_logo.png",
      alt_name: "PDEU Gandhinagar",
      duration: "2023 - Present",
      descriptions: [
        "⚡ Core subjects like Data Structures, Algorithms, Operating Systems, Database Management Systems, Computer Architecture, Theory of Computation, Software Engineering, and Design Patterns.",
        "⚡ Specializations including Artificial Intelligence, Deep Learning, Data Science, Cloud Computing, Cyber Security, Cryptography, and Network Security. ",
        "⚡ Frontend and backend web development including Web Technology, Advanced Java, and Full Stack Development concepts.",
        "⚡ Practical labs and projects for applied learning on programming, system design, web development, security, and data mining.",
        "⚡ Electives and advanced topics such as Distributed Systems, Mobile Computing, Real-Time Systems, Digital Forensics, and Big Data Analytics.",
        "⚡ Emphasis on formal verification, software project management, communication skills, and technical writing to prepare students for professional success.",
        "⚡ Additional opportunities like industrial training, technical seminars, and hands-on labs for holistic exposure and skill development.",
      ],
      website_link: "http://pdeu.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    /*
    {
      title: "Deep Learning",
      subtitle: "",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    */
      {
        title: "Ethical Hacking Certification",
        subtitle: "- HackingFlix",
        logo_path: "hackingflix_logo.png",
        certificate_link:
          "https://hackingflix.verified.cv/en/verify/85338496302599?ref=email",
        alt_name: "HackingFlix Verified",
        color_code: "#111111", // deep charcoal to highlight neon green logo
      },
      {
        title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
        subtitle: "- Oracle",
        logo_path: "oracle_logo.png",
        certificate_link:
          "https://catalog-education.oracle.com/pls/certview/sharebadge?id=2AD0189189231C982FE677487E8551740A56DFAECC4AD694133F8A717A8B9DAF",
        alt_name: "Oracle Cloud Infrastructure",
        color_code: "#0A1F44", // dark navy to make red logo pop
      },
      {
        title: "DROP CERTIFIED SECURITY COURSE (DCSC)",
        subtitle: "- The Drop Organization",
        logo_path: "tdo_logo.png",
        certificate_link:
          "https://drive.google.com/file/d/1EOGdnq2OvJcPfWlVgmnWs-Za26L_kDsl/view?usp=sharing",
        alt_name: "The Drop Organization",
        color_code: "#000000"
      },
      {
        title: "Cyber Job Simulation",
        subtitle: "- Deloitte",
        logo_path: "deloitte_logo.png",
        certificate_link: "https://drive.google.com/file/d/1WBC6OPLyD6qXuwJuIoHdP3tjJOxLiVKk/view?usp=sharing",
        alt_name: "Deloitte",
        color_code: "#CDE9B0", // light green tint to make dark green logo stand out
      },
      {
        title: "Cybersecurity Job Simulation",
        subtitle: "- Mastercard & New York Jobs CEO Council (Forage)",
        logo_path: "mastercard_logo.png",
        certificate_link: "https://drive.google.com/file/d/19Mj7nLxA3rHZ0zsBRJ2dEMgNh9MEWy4V/view?usp=sharing",
        alt_name: "Mastercard",
        color_code: "#FCE1DE", // pale coral to highlight red/yellow circles
      },
      {
        title: "Shields Up: Cybersecurity Job Simulation",
        subtitle: "- AIG & New York Jobs CEO Council (Forage)",
        logo_path: "aig_logo.png",
        certificate_link: "https://drive.google.com/file/d/1NA4zw-Y00Ktmftj_mdwAJHpk7fgSXqcW/view?usp=sharing",
        alt_name: "AIG",
        color_code: "#E0EBFF", // soft blue-gray for AIG navy logo
      },
      {
        title: "Graphic Design Essentials",
        subtitle: "- Canva Design School",
        logo_path: "canva_logo.png",
        certificate_link: "https://drive.google.com/file/d/1WA475RJbLrPONCOgWP0To_zQM4-uCjNB/view?usp=sharing",
        alt_name: "Canva",
        color_code: "#121212", // dark neutral to make turquoise logo glow
      },
      {
        title: "Power BI Workshop",
        subtitle: "- OfficeMaster",
        logo_path: "powerbi_logo.png",
        certificate_link: "https://drive.google.com/file/d/1cjsDF1sFv9XAdECz3Z-OYXJ1vA_1KDPR/view?usp=sharing",
        alt_name: "OfficeMaster",
        color_code: "#FFF5CC", // soft yellow tone that complements logo yellow
      },
      {
        title: "Design To Dominate Course",
        subtitle: "- Grow Partner",
        logo_path: "growpartner_logo.png",
        certificate_link:
          "https://drive.google.com/file/d/1IiV9yDVCgW_wbhXJ2EEovmL36jnpDowu/view?usp=sharing",
        alt_name: "Grow Partner",
        color_code: "#FFFFFF", // clean white for dark/navy logo
      },
      {
        title: "Bharatiya Antariksh Hackathon 2025 - Certificate of Acknowledgement",
        subtitle: "- Organized by ISRO & Hack2Skill",
        logo_path: "isro_logo.png",
        certificate_link:
          "https://certificate.hack2skill.com/user/isrobah25/2025H2S06BAH25-P12563",
        alt_name: "ISRO & Hack2Skill",
        color_code: "#101010", // dark base to make orange/blue ISRO logo pop
      },
      {
        title: "Hackout'25 Participation",
        subtitle: "- DAU Annual Festival Committee",
        logo_path: "dau_logo.png",
        certificate_link: "https://drive.google.com/file/d/1ud7Trz6aY-7gP5stWs7mBTZeSI1LEi0x/view?usp=sharing",
        alt_name: "DAU",
        color_code: "#D7E3F4", // pale blue to highlight multicolor triangles
      },
      {
        title: "Sparkathon Converge Appreciation",
        subtitle: "- Walmart Global Tech",
        logo_path: "walmart_logo.png",
        certificate_link: "https://drive.google.com/file/d/1NKjr55zU9d41hedNUttc1JxgfCl-pLaf/view?usp=sharing",
        alt_name: "Walmart Global Tech",
        color_code: "#E3F2FD", // light sky blue to brighten yellow spark
      },    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I’ve worked with startups and organizations in AI, Data Science, Cybersecurity, and Design, blending creativity with deep technical expertise. From developing intelligent models and visual analytics to leading creative initiatives at PDEU, I’m passionate about designing solutions that are both innovative and impactful.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Vice President",
          company: "Society of Mathematics, PDEU",
          company_url: "https://pdpu.ac.in/",
          logo_path: "som_logo.png",
          duration: "Jun 2023 - Present",
          location: "India",
          description:
            "As the Vice President of the Society of Mathematics, I oversee the club’s strategic initiatives, manage operations, and coordinate academic and creative events. I work closely with the team to promote collaboration, innovation, and leadership, fostering an engaging and impactful environment for the student community.",
          color: "#0B5394",
        },
        {
          title: "Graphic Designing Head",
          company: "Society of Mathematics, PDEU",
          company_url: "https://pdpu.ac.in/",
          logo_path: "som_logo.png",
          duration: "Jul 2022 - Apr 2023",
          location: "India",
          description:
            "Led the visual creative direction of the Society of Mathematics Club. I defined the club’s brand identity, developed design guidelines, and created compelling visual content for academic and cultural initiatives. Designed event posters, social media content, and coordinated the club’s overall design communication strategy.",
          color: "#004C97",
        },
        {
          title: "Graphic Designer",
          company: "Adorebits Technology",
          company_url: "https://www.adorebits.com/",
          logo_path: "adorebits_logo.png",
          duration: "May 2023 - Present",
          location: "Remote",
          description:
            "As a Graphic Designer at Adorebits, I contribute to branding, product design, and UI/UX visuals. I focus on building creative assets aligned with client brands, ensuring quality designs for marketing campaigns and digital media projects.",
          color: "#FF6B00",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Cyber Forensics Intern",
          company: "Forensic Knight",
          company_url: "https://forensicknight.com/",
          logo_path: "forensic_knight_logo.png",
          duration: "Dec 2024 - Jun 2025",
          location: "Remote",
          description:
            "Performed digital investigations, forensic analysis, and penetration testing as part of the cybersecurity team. Gained experience in analyzing digital evidence, detecting data breaches, and implementing forensic recovery methods while working across multiple live case simulations.",
          color: "#1E1E1E",
        },
        {
          title: "Data Science Intern",
          company: "Zidio Development",
          company_url: "https://zidio.in/",
          logo_path: "zidio_logo.png",
          duration: "May 2024 - Jul 2025",
          location: "Remote",
          description:
            "Worked on AI-based projects such as Time Series Stock Market forecasting and Image Captioning using ARIMA, Prophet, LSTM, and CNN models. Contributed to data preprocessing, model development, and visualization using Python, TensorFlow, and OpenCV. Delivered end-to-end solutions for predictive analytics and automation.",
          color: "#3E8EDE",
        },
        
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Volunteer Educator",
          company: "Gyandeep Education Trust",
          company_url: "",
          logo_path: "gyandeep_logo.png",
          duration: "May 2024 - July 2024",
          location: "India",
          description:
            "Gyandeep Education Trust is a non-profit organization dedicated to bridging the educational gap for economically disadvantaged individuals. I contributed by teaching foundational literacy, numeracy, and life skills to underprivileged students, empowering them to improve their socio-economic well-being and pursue self-reliance through education.",
          color: "#004E89", // deep blue to represent trust and education
        },
        {
          title: "Volunteer Teacher (CSSI Summer Internship)",
          company: "Shree Savgun Kanya Chatralay",
          company_url: "",
          logo_path: "savgun_logo.png",
          duration: "June 2024 - July 2024",
          location: "India",
          description:
            "As part of my CSSI Summer Internship, I worked with Shree Savgun Kanya Chatralay — a girls’ hostel and school supporting underprivileged students. During a six-day teaching program, I educated and mentored young girls, sharing essential life lessons, academic knowledge, and soft skills to help them become confident and capable individuals.",
          color: "#F06292", // warm pink tone for empowerment and education
        },
        {
          title: "Volunteer Mentor",
          company: "Shree Thakkarbapa Sarvajanik Kumar Chatralay",
          company_url: "",
         logo_path: "thakkarbapa_logo.png",
          duration: "June 2024 - July 2024",
          location: "India",
          description:
            "Contributed as a mentor at Shree Thakkarbapa Sarvajanik Kumar Chatralay, a boys’ hostel supporting education for underprivileged students. Helped guide young boys in academics, personal development, and social responsibility. Focused on character-building, discipline, and teamwork to nurture responsible and compassionate future leaders.",
          color: "#0288D1", // bright blue representing youth and growth
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
        id: "pub-01",
        name: "“Actively exploring research and publication opportunities.”",
        createdAt: "Ongoing",
        description:
          "Currently engaged in continuous learning and exploring avenues to contribute original work through future technical publications.",
        url: "https://github.com/makadiyapreet", 
      
    },
    
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "What People Say",
    profile_image_path: "preet.png",
    description:
      "A glimpse of how collaborators and mentors describe working with me.",
  },
  
  blogSection: {
    title: "Blogs",
    subtitle:
      "I love documenting my tech journey — from AI and machine learning experiments to cybersecurity insights and development tips.",
    link: "https://successstreamers.blogspot.com/2025/11/zero-trust-transforms-security.html",
    avatar_image_path: "blogs_image.svg",
  },  
  
  addressSection: {
    title: "Address",
    subtitle: "Rajkot, Gujarat, India",
    locality: "Rajkot",
    country: "India",
    region: "Gujarat",
    postalCode: "360004",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Rajkot,+Gujarat+360004",
  },
  
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 81602 38745",
  },  
};


// Achievements Section
const achievements = [
  { title: "9+ Projects Built", icon: "🚀", desc: "From AI models to cybersecurity tools and full-stack apps" },
  { title: "12+ Certifications", icon: "🏆", desc: "Across cybersecurity, AI, data science, and design" },
  { title: "2 Internships Completed", icon: "💼", desc: "Cyber Forensics at Forensic Knight, Data Science at Zidio" },
  { title: "Vice President, SOM PDEU", icon: "👑", desc: "Leading the Society of Mathematics strategic initiatives" },
  { title: "ISRO Hackathon Participant", icon: "🛸", desc: "Bharatiya Antariksh Hackathon 2025" },
  { title: "Walmart Sparkathon", icon: "⚡", desc: "Converge track appreciation from Walmart Global Tech" },
];

// Skill Proficiency Bars
const skillBars = {
  categories: [
    {
      title: "Programming",
      bars: [
        { name: "Python", level: 90 },
        { name: "React", level: 80 },
        { name: "Django", level: 75 },
        { name: "C/C++", level: 70 },
        { name: "MySQL", level: 75 },
      ]
    },
    {
      title: "Cybersecurity",
      bars: [
        { name: "Kali Linux", level: 85 },
        { name: "Metasploit", level: 75 },
        { name: "Wireshark", level: 80 },
        { name: "Nmap", level: 80 },
      ]
    },
    {
      title: "AI / ML",
      bars: [
        { name: "TensorFlow", level: 80 },
        { name: "PyTorch", level: 70 },
        { name: "Data Analysis", level: 85 },
      ]
    },
    {
      title: "Design",
      bars: [
        { name: "Photoshop", level: 80 },
        { name: "Illustrator", level: 75 },
        { name: "Canva", level: 90 },
      ]
    },
  ]
};

// Interactive Timeline
const timeline = [
  { year: "2021", title: "Started Higher Secondary", org: "Shakti Higher Secondary School", desc: "Began science stream with Physics, Chemistry, Math & CS" },
  { year: "2022", title: "Graphic Designing Head", org: "Society of Mathematics, PDEU", desc: "Led visual creative direction and brand identity" },
  { year: "2023", title: "B.Tech. in Computer Engineering", org: "Pandit Deendayal Energy University", desc: "Started undergraduate program in Computer Engineering" },
  { year: "2023", title: "Vice President, SOM PDEU", org: "Society of Mathematics", desc: "Overseeing strategic initiatives and managing operations" },
  { year: "2023", title: "Graphic Designer", org: "Adorebits Technology", desc: "Contributing to branding, UI/UX, and product design" },
  { year: "2024", title: "Data Science Intern", org: "Zidio Development", desc: "AI-based forecasting, image captioning, and predictive analytics" },
  { year: "2024-25", title: "Cyber Forensics Intern", org: "Forensic Knight", desc: "Digital investigations, forensic analysis, and penetration testing" },
  { year: "2025", title: "Multiple Certifications", org: "Oracle, ISRO, Deloitte, Mastercard", desc: "Oracle Cloud AI, ISRO Hackathon, cybersecurity job simulations" },
];

// Projects Data
const projects = [
  {
    id: "swagat-caterers",
    name: "Swagat Caterers – Enterprise Catering Management System",
    desc: "A complete digital transformation of a traditional catering business — built over 46 days into a full enterprise platform.",
    longDesc: "Full enterprise catering management system with Django backend, React frontend, PostgreSQL database. Features online booking, menu management, staff scheduling, and analytics dashboard.",
    tags: ["Django", "React", "PostgreSQL", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/makadiyapreet/swagat-caterers",
    live: "",
    date: "2024-12-04",
    featured: true,
    category: "Full Stack",
  },
  {
    id: "sentinelai",
    name: "SentinelAI – Intelligent Web Application Firewall",
    desc: "A production-grade AI-powered Web Application Firewall with full OWASP Top 10 coverage.",
    longDesc: "AI-powered WAF detecting SQL injection, XSS, CSRF, and more. Real-time threat intelligence dashboard with ML-based anomaly detection.",
    tags: ["Python", "FastAPI", "React", "PostgreSQL", "Docker"],
    github: "https://github.com/makadiyapreet/sentinelai",
    live: "",
    date: "2025-07-05",
    featured: true,
    category: "Cybersecurity",
    cyberProject: true,
  },
  {
    id: "careerpilot-ai",
    name: "CareerPilot AI – Advanced AI-Powered Career Assistant",
    desc: "A comprehensive, production-ready career development platform leveraging AI to help with job search and career planning.",
    longDesc: "Full career development platform with AI-powered resume analysis, job matching, interview preparation, and career trajectory planning.",
    tags: ["React", "FastAPI", "Python", "MongoDB", "spaCy"],
    github: "https://github.com/makadiyapreet/careerpilot-ai",
    live: "",
    date: "2025-06-15",
    featured: true,
    category: "AI/ML",
  },
  {
    id: "gate-master",
    name: "GATE MASTER – Comprehensive Web-Based GATE Preparation Platform",
    desc: "A full-stack educational platform for GATE Computer Science aspirants featuring practice zones and realistic mock tests.",
    longDesc: "Comprehensive GATE CS preparation platform with practice zones, mock tests, performance analytics, and topic-wise question banks.",
    tags: ["React", "Django", "Python", "PHP", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/makadiyapreet/gate-master",
    live: "",
    date: "2025-08-28",
    category: "Full Stack",
  },
  {
    id: "geowar-fitness",
    name: "GeoWar-Fitness – Location-Based Territory Capture Game",
    desc: "A location-based fitness game built with Flutter where players compete to capture real-world territory.",
    longDesc: "Mobile fitness game using GPS-based territory capture mechanics. Players walk/run to claim zones, compete with others, and track fitness stats.",
    tags: ["Flutter", "Firebase", "Supabase"],
    github: "https://github.com/makadiyapreet/geowar-fitness",
    live: "",
    date: "2025-03-15",
    category: "Mobile",
  },
  {
    id: "aegis",
    name: "AEGIS – Adaptive Enforcement & Guardian Intelligence System",
    desc: "A unified cybersecurity platform for internship security assessment with three integrated modules.",
    longDesc: "Unified cybersecurity assessment platform with vulnerability scanning, compliance checking, and threat intelligence modules.",
    tags: ["Python", "React", "Tailwind", "Supabase"],
    github: "https://github.com/makadiyapreet/aegis",
    live: "",
    date: "2026-01-10",
    category: "Cybersecurity",
    cyberProject: true,
  },
  {
    id: "aetrix",
    name: "AETRIX – Satellite Environmental Intelligence Platform",
    desc: "All-India Environmental Telemetry & Risk Intelligence X — a smart city platform built for PDEU AETRIX.",
    longDesc: "Environmental monitoring platform using satellite data for air quality, water quality, and natural disaster risk assessment across India.",
    tags: ["React", "Python", "Java", "FastAPI", "PostgreSQL"],
    github: "https://github.com/makadiyapreet/aetrix",
    live: "",
    date: "2025-09-20",
    category: "AI/ML",
  },
  {
    id: "coastal-threat",
    name: "Coastal Threat Alert System",
    desc: "AI-powered real-time early warning platform for India's coastal regions with live sensor data and satellite integration.",
    longDesc: "Real-time coastal threat monitoring using AI with sensor fusion, satellite imagery analysis, and automated alert systems for disaster preparedness.",
    tags: ["Python", "FastAPI", "TensorFlow", "PostgreSQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/makadiyapreet/coastal-threat",
    live: "",
    date: "2025-05-10",
    category: "AI/ML",
  },
  {
    id: "preetversex",
    name: "PreetVerseX – Personal Portfolio Website",
    desc: "A fully responsive and animated personal portfolio built using React.js.",
    longDesc: "Personal portfolio website with theme switching, animated components, skills visualization, and project showcase.",
    tags: ["React", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/makadiyapreet/preetversex",
    live: "https://preetversex.netlify.app",
    date: "2025-11-05",
    category: "Full Stack",
  },
];

// Availability
const availability = {
  isAvailable: true,
  status: "Open to Work",
};

// Testimonials
const testimonials = [
  {
    quote: "Preet has demonstrated exceptional professionalism, strong analytical ability, and a consistent commitment to excellence. His reliability, technical competence, and proactive approach made him a standout contributor throughout the internship.",
    name: "Smit Shah",
    title: "Founder, Forensic Knight",
    photo: null,
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  achievements,
  skillBars,
  timeline,
  projects,
  availability,
  testimonials,
};