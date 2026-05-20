import React, { Component } from "react";

export default class CyberSecurityImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        id="cyber-security-illustration"
        xmlns="http://www.w3.org/2000/svg"
        width="1200"
        height="820"
        viewBox="0 0 1200 820"
      >
        <title>Cyber Security Illustration</title>

        {/* Ground shadow */}
        <ellipse
          cx="600"
          cy="780"
          rx="220"
          ry="24"
          fill={theme.dark}
          opacity="0.12"
        />

        {/* Left cluster - Kali/Burp/Wireshark */}
        <g transform="translate(60, 50)">
          {/* Kali card */}
          <rect
            x="0"
            y="0"
            rx="12"
            ry="12"
            width="220"
            height="140"
            fill={theme.compImgHighlight}
            stroke={theme.text}
            strokeWidth="2"
          />
          <text
            x="16"
            y="28"
            fontSize="18"
            fontWeight="700"
            fill={theme.text}
            fontFamily="Google Sans, Arial"
          >
            Kali Linux
          </text>
          <rect x="16" y="46" width="100" height="56" rx="6" fill={theme.dark} opacity="0.08"/>
          <path d="M16 108 L120 108" stroke={theme.text} strokeWidth="3" opacity="0.12"/>

          {/* Burp card (below) */}
          <rect
            x="0"
            y="170"
            rx="12"
            ry="12"
            width="220"
            height="140"
            fill={theme.compImgHighlight}
            stroke={theme.text}
            strokeWidth="2"
          />
          <text x="16" y="196" fontSize="18" fontWeight="700" fill={theme.text}>
            Burp Suite
          </text>
          <g transform="translate(16,214)">
            <circle cx="36" cy="30" r="30" fill={theme.jacketColor} opacity="0.12" />
            <rect x="80" y="10" width="90" height="10" rx="4" fill={theme.text} opacity="0.14" />
            <rect x="80" y="30" width="60" height="10" rx="4" fill={theme.text} opacity="0.08" />
          </g>

          {/* Wireshark card (below second) */}
          <rect
            x="0"
            y="340"
            rx="12"
            ry="12"
            width="220"
            height="120"
            fill={theme.compImgHighlight}
            stroke={theme.text}
            strokeWidth="2"
          />
          <text x="16" y="366" fontSize="18" fontWeight="700" fill={theme.text}>
            Wireshark
          </text>
          <g transform="translate(16,384)">
            <circle cx="40" cy="20" r="20" fill={theme.imageHighlight} opacity="0.12" />
            <rect x="80" y="6" width="110" height="10" rx="4" fill={theme.text} opacity="0.12" />
            <rect x="80" y="26" width="70" height="10" rx="4" fill={theme.text} opacity="0.08" />
          </g>
        </g>

        {/* Right cluster - Metasploit/OWASP/Nmap */}
        <g transform="translate(920, 50)">
          {/* Metasploit card */}
          <rect
            x="0"
            y="0"
            rx="12"
            ry="12"
            width="220"
            height="140"
            fill={theme.compImgHighlight}
            stroke={theme.text}
            strokeWidth="2"
          />
          <text x="16" y="28" fontSize="18" fontWeight="700" fill={theme.text}>
            Metasploit
          </text>
          <g transform="translate(16,46)">
            <rect x="0" y="0" width="56" height="56" rx="8" fill={theme.jacketColor} />
            <rect x="68" y="6" width="120" height="12" rx="6" fill={theme.text} opacity="0.12" />
            <rect x="68" y="28" width="80" height="10" rx="4" fill={theme.text} opacity="0.08" />
          </g>

          {/* OWASP card (below) */}
          <rect
            x="0"
            y="170"
            rx="12"
            ry="12"
            width="220"
            height="140"
            fill={theme.compImgHighlight}
            stroke={theme.text}
            strokeWidth="2"
          />
          <text x="16" y="196" fontSize="18" fontWeight="700" fill={theme.text}>
            OWASP Top 10
          </text>
          <g transform="translate(16,214)">
            <rect x="0" y="0" width="180" height="64" rx="8" fill={theme.dark} opacity="0.06" />
            <circle cx="150" cy="32" r="24" fill={theme.imageHighlight} opacity="0.12" />
          </g>

          {/* Nmap card (below second) */}
          <rect
            x="0"
            y="340"
            rx="12"
            ry="12"
            width="220"
            height="120"
            fill={theme.compImgHighlight}
            stroke={theme.text}
            strokeWidth="2"
          />
          <text x="16" y="366" fontSize="18" fontWeight="700" fill={theme.text}>
            Nmap
          </text>
          <g transform="translate(16,384)">
            <rect x="0" y="6" width="160" height="10" rx="6" fill={theme.text} opacity="0.12" />
            <rect x="0" y="26" width="120" height="10" rx="6" fill={theme.text} opacity="0.08" />
            <rect x="0" y="46" width="90" height="10" rx="6" fill={theme.text} opacity="0.06" />
          </g>
        </g>

        {/* Central character group */}
        <g id="character" transform="translate(300, 40)">
          {/* Left torso shadow */}
          <path
            d="M300 180 C 280 220, 260 360, 300 540 L 420 540 C 460 360, 440 220, 420 180 Z"
            fill={theme.dark}
            opacity="0.06"
          />

          {/* Character main body (semi-3D blocks) */}
          <g transform="translate(120,40)">
            {/* legs */}
            <rect x="80" y="380" width="44" height="160" rx="6" fill={theme.jacketColor} />
            <rect x="160" y="380" width="44" height="160" rx="6" fill={theme.dark} />
            {/* shoes */}
            <ellipse cx="102" cy="556" rx="34" ry="10" fill={theme.dark} opacity="0.18" />
            <ellipse cx="182" cy="556" rx="34" ry="10" fill={theme.dark} opacity="0.18" />

            {/* torso */}
            <rect x="62" y="140" width="170" height="240" rx="16" fill={theme.jacketColor} />
            {/* shirt panel */}
            <rect x="80" y="170" width="130" height="160" rx="12" fill={theme.compImgHighlight} opacity="0.12" />
            {/* pocket */}
            <rect x="128" y="188" width="34" height="26" rx="6" fill={theme.dark} opacity="0.06" />

            {/* left arm */}
            <g transform="translate(18,160) rotate(-8 30 30)">
              <rect x="0" y="20" width="36" height="120" rx="12" fill={theme.jacketColor} />
              <rect x="-6" y="132" width="48" height="22" rx="10" fill={theme.dark} opacity="0.08" />
            </g>
            {/* right arm */}
            <g transform="translate(238,160) rotate(8 -30 30)">
              <rect x="-36" y="20" width="36" height="120" rx="12" fill={theme.jacketColor} />
              <rect x="-42" y="132" width="48" height="22" rx="10" fill={theme.dark} opacity="0.08" />
            </g>

            {/* head base */}
            <g transform="translate(90,60)">
              <ellipse cx="80" cy="0" rx="48" ry="52" fill="#ffcfb4" />
              <ellipse cx="80" cy="2" rx="48" ry="52" fill={theme.dark} opacity="0.04" />
              {/* hair */}
              <path
                d="M38 0 C 60 -28, 100 -28, 124 0 C120 -6, 104 -24, 86 -20 C68 -16, 54 -6, 38 0Z"
                fill={theme.dark}
                opacity="0.9"
              />
            </g>

            {/* collar */}
            <rect x="120" y="200" width="10" height="24" rx="3" fill={theme.text} opacity="0.08" />

            {/* small tech card floating near right hand */}
            <g transform="translate(260,220)">
              <rect x="0" y="0" rx="10" width="140" height="86" fill={theme.compImgHighlight} stroke={theme.text} strokeWidth="1.5"/>
              <text x="12" y="24" fontSize="14" fontWeight="700" fill={theme.text}>Scan</text>
              <rect x="12" y="36" width="110" height="12" rx="6" fill={theme.imageHighlight} opacity="0.12"/>
              <rect x="12" y="56" width="80" height="10" rx="6" fill={theme.text} opacity="0.08"/>
            </g>
          </g>
        </g>

        {/* Small connecting lines to cards for depth */}
        <line x1="280" y1="220" x2="200" y2="120" stroke={theme.text} strokeWidth="1" opacity="0.06" />
        <line x1="920" y1="220" x2="760" y2="120" stroke={theme.text} strokeWidth="1" opacity="0.06" />
        <line x1="320" y1="420" x2="160" y2="380" stroke={theme.text} strokeWidth="1" opacity="0.04" />
        <line x1="870" y1="420" x2="1020" y2="380" stroke={theme.text} strokeWidth="1" opacity="0.04" />

        {/* subtle overlay gradient to give semi-3D feel */}
        <defs>
          <linearGradient id="softGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={theme.imageHighlight} stopOpacity="0.06" />
            <stop offset="100%" stopColor={theme.dark} stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="1200" height="820" fill="url(#softGrad)" opacity="0.85" />

      </svg>
    );
  }
}
