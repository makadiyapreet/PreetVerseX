// Rule-based responses — checked FIRST before Groq API
export const rules = [
  {
    patterns: ['who are you', 'who is preet', 'about preet', 'tell me about'],
    response: "I'm Preet Makadiya — a cybersecurity professional, AI/Data Science engineer, and full-stack developer from Rajkot, Gujarat. Currently pursuing B.Tech. in Computer Engineering at PDEU (2023-Present)."
  },
  {
    patterns: ['skills', 'what can you do', 'expertise', 'technologies'],
    response: "Preet's skills span: 🔒 Cybersecurity (Kali Linux, Metasploit, Burp Suite, Wireshark) | 🤖 AI/ML (TensorFlow, PyTorch, Python) | 💻 Full Stack (React, Django, PostgreSQL) | 🎨 Design (Photoshop, Illustrator, Canva)"
  },
  {
    patterns: ['project', 'built', 'portfolio', 'work'],
    response: "Notable projects: SentinelAI (AI-powered WAF), AEGIS (cybersecurity platform), CareerPilot AI (career assistant), Swagat Caterers EMS, GATE Master, Coastal Threat Alert System, and more. Check the Projects tab!"
  },
  {
    patterns: ['internship', 'experience', 'worked'],
    response: "Preet interned as: 🔍 Cyber Forensics Intern at Forensic Knight (Dec 2024 - Jun 2025) and 📊 Data Science Intern at Zidio Development (May 2024 - Jul 2025)."
  },
  {
    patterns: ['education', 'college', 'university', 'pdeu', 'degree'],
    response: "Preet is pursuing B.Tech. in Computer Engineering at Pandit Deendayal Energy University (PDEU), Gandhinagar. Previously completed Higher Secondary at Shakti Higher Secondary School (2021-2023)."
  },
  {
    patterns: ['certif', 'cert', 'course'],
    response: "12+ certifications including: HackingFlix Ethical Hacking, Oracle Cloud AI Foundations, DCSC (Drop Organization), Deloitte Cyber Simulation, Mastercard Cybersecurity, AIG Shields Up, Canva Design, Power BI, and more."
  },
  {
    patterns: ['contact', 'reach', 'email', 'hire', 'collaborate'],
    response: "Reach Preet at: 📧 makadiyapreeta1@gmail.com | 📱 +91 81602 38745 | 💼 linkedin.com/in/preet-makadiya | Or use the Contact page!"
  },
  {
    patterns: ['location', 'where', 'city', 'rajkot', 'gujarat'],
    response: "Preet is based in Rajkot, Gujarat, India. Currently studying at PDEU, Gandhinagar."
  },
  {
    patterns: ['hello', 'hi', 'hey', 'greet', 'good morning', 'good evening'],
    response: "Hey there! 👋 I'm PreetBot — ask me anything about Preet Makadiya's skills, projects, experience, or how to get in touch!"
  },
  {
    patterns: ['cyber', 'hacking', 'security', 'penetration', 'ethical hacker'],
    response: "Preet is an aspiring cybersecurity professional skilled in penetration testing, digital forensics, OSINT, and network security. Check out the ⬡ Cyber Mode tab for the full cyber portfolio!"
  },
  {
    patterns: ['available', 'open to work', 'hiring', 'job', 'opportunity'],
    response: "Preet is currently open to work and looking for cybersecurity, AI/ML, or full-stack opportunities. Drop a message on the Contact page! 🚀"
  },
]

export const defaultResponse = "I'm not sure about that specifically — but you can ask me about Preet's skills, projects, experience, education, or contact info!"

export const matchRule = (input) => {
  const lower = input.toLowerCase()
  for (const rule of rules) {
    if (rule.patterns.some(p => lower.includes(p))) {
      return rule.response
    }
  }
  return null
}
