// GROQ API — used as fallback when no rule matches
// Where it's used: called in Chatbot.jsx when matchRule() returns null
// To remove: comment out the askGroq() call in Chatbot.jsx handleSend()

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'

const SYSTEM_PROMPT = `You are PreetBot, an AI assistant for Preet Makadiya's portfolio website.
Answer questions ONLY about Preet Makadiya. Keep answers concise (2-3 sentences max).

About Preet:
- Full name: Preet Makadiya (also known as Preet Patel)
- Location: Rajkot, Gujarat, India
- Education: B.Tech Computer Engineering, PDEU (2023-Present)
- Skills: Cybersecurity (Kali, Metasploit, Burp Suite), AI/ML (TensorFlow, PyTorch), Full Stack (React, Django), Design (Photoshop, Canva)
- Internships: Cyber Forensics at Forensic Knight, Data Science at Zidio Development
- Projects: SentinelAI, AEGIS, CareerPilot AI, Swagat Caterers EMS, GATE Master, Coastal Threat Alert
- Certifications: HackingFlix, Oracle AI, DCSC, Deloitte, Mastercard, AIG
- Contact: makadiyapreeta1@gmail.com | +91 81602 38745

If asked anything unrelated to Preet, say: "I can only answer questions about Preet Makadiya!"
`

export async function askGroq(userMessage) {
  const apiKey = process.env.REACT_APP_GROQ_API_KEY
  if (!apiKey) return null

  try {
    const res = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userMessage },
        ],
        max_tokens: 150,
        temperature: 0.5,
      })
    })
    const data = await res.json()
    return data.choices?.[0]?.message?.content || null
  } catch (err) {
    return null
  }
}
