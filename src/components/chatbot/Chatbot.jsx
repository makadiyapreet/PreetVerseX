import React, { useState, useRef, useEffect } from 'react'
import { matchRule } from './chatbotData'
import { askGroq } from './groqService'
import './Chatbot.css'

const WELCOME = {
  role: 'bot',
  text: "Hi! I'm PreetBot \u{1F916} Ask me anything about Preet — or tap a topic below!"
}

const MENU_ITEMS = [
  { label: '\u{1F4BB} Skills & Tech Stack', q: "What are Preet's skills?" },
  { label: '\u{1F680} Projects', q: "Tell me about projects" },
  { label: '\u{1F393} Education', q: "What is Preet's education?" },
  { label: '\u{1F4BC} Experience', q: "Tell me about Preet's experience" },
  { label: '\u{1F510} Cybersecurity', q: "Cybersecurity expertise?" },
  { label: '\u{1F4DC} Certifications', q: "What certifications does Preet have?" },
  { label: '\u{1F4DE} Contact Info', q: "How to contact Preet?" },
  { label: '\u{1F464} About Preet', q: "Who is Preet?" },
]

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([WELCOME])
  const [input, setInput] = useState('')
  const [thinking, setThinking] = useState(false)
  const [showMenu, setShowMenu] = useState(true)
  const bottomRef = useRef()

  useEffect(function() {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, thinking])

  var handleSend = function(text) {
    var query = text || input.trim()
    if (!query) return
    setInput('')
    setShowMenu(false)

    var userMsg = { role: 'user', text: query }
    setMessages(function(prev) { return prev.concat([userMsg]) })

    // 1. Try rule-based first
    var ruleAnswer = matchRule(query)
    if (ruleAnswer) {
      setTimeout(function() {
        setMessages(function(prev) { return prev.concat([{ role: 'bot', text: ruleAnswer }]) })
      }, 400)
      return
    }

    // 2. Fallback to Groq API
    setThinking(true)
    askGroq(query).then(function(groqAnswer) {
      setThinking(false)
      var botReply = groqAnswer || "I'm not sure about that! Tap the menu button to see what I can help with."
      setMessages(function(prev) { return prev.concat([{ role: 'bot', text: botReply }]) })
    })
  }

  var handleKeyDown = function(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSend()
    }
  }

  var handleMenuToggle = function() {
    setShowMenu(function(p) { return !p })
  }

  return (
    <React.Fragment>
      {/* Floating Bubble */}
      <button
        className={'chatbot-bubble' + (open ? ' open' : '')}
        onClick={function() { setOpen(function(p) { return !p }) }}
        aria-label={open ? 'Close chatbot' : 'Open chatbot'}
      >
        <span role="img" aria-label="chat">{open ? '\u2715' : '\u{1F4AC}'}</span>
      </button>

      {/* Chat Window */}
      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="bot-avatar" role="img" aria-label="robot">
              {'\u{1F916}'}
            </div>
            <div>
              <div className="bot-name">PreetBot</div>
              <div className="bot-status">
                <span className="bot-status-dot" />
                Online
              </div>
            </div>
            <button
              className="chatbot-close"
              onClick={function() { setOpen(false) }}
              aria-label="Close chat"
            >
              {'\u2715'}
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map(function(m, i) {
              return (
                <div key={i} className={'chat-msg ' + m.role}>
                  {m.text}
                </div>
              )
            })}
            {thinking && (
              <div className="chat-msg bot thinking">
                <span /><span /><span />
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Menu — topic buttons */}
          {showMenu && (
            <div className="chatbot-menu">
              {MENU_ITEMS.map(function(item) {
                return (
                  <button
                    key={item.q}
                    onClick={function() { handleSend(item.q) }}
                    className="menu-chip"
                  >
                    {item.label}
                  </button>
                )
              })}
            </div>
          )}

          <div className="chatbot-input">
            <button
              onClick={handleMenuToggle}
              className="chatbot-menu-btn"
              aria-label="Show menu"
              title="Main Menu"
            >
              {'\u2630'}
            </button>
            <input
              value={input}
              onChange={function(e) { setInput(e.target.value) }}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              aria-label="Chat input"
            />
            <button
              onClick={function() { handleSend() }}
              aria-label="Send message"
              className="chatbot-send"
            >
              {'\u2192'}
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}
