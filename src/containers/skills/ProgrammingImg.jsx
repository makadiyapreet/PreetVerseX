import React, { Component } from "react";

export default class ProgrammingImg extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <svg
        id="developer-illustration"
        xmlns="http://www.w3.org/2000/svg"
        width="1200"
        height="820"
        viewBox="0 0 1200 820"
      >
        <title>Developer Illustration</title>

        {/* Ground Shadow */}
        <ellipse
          cx="600"
          cy="780"
          rx="220"
          ry="26"
          fill={theme.dark}
          opacity="0.15"
        />

        {/* LEFT CLUSTER */}
        <g transform="translate(60, 80)">
          {/* Python block */}
          <rect
            x="40"
            y="0"
            rx="14"
            width="180"
            height="120"
            fill={theme.compImgHighlight}
            stroke={theme.text}
            strokeWidth="2"
          />
          <text x="80" y="70" fontSize="26" fontWeight="700" fill={theme.text}>
            Python
          </text>

          {/* Code window */}
          <rect
            x="0"
            y="160"
            rx="14"
            width="260"
            height="160"
            fill={theme.compImgHighlight}
            stroke={theme.text}
            strokeWidth="2"
          />
          <rect x="20" y="190" width="180" height="10" rx="5" fill={theme.text} opacity="0.18"/>
          <rect x="20" y="215" width="140" height="10" rx="5" fill={theme.text} opacity="0.12"/>
          <rect x="20" y="240" width="200" height="10" rx="5" fill={theme.imageHighlight} opacity="0.10"/>

          {/* Database block */}
          <rect
            x="80"
            y="360"
            rx="14"
            width="160"
            height="120"
            fill={theme.compImgHighlight}
            stroke={theme.text}
            strokeWidth="2"
          />
          <circle cx="160" cy="410" r="26" fill={theme.imageHighlight} opacity="0.20" />
          <rect x="115" y="440" width="90" height="10" rx="5" fill={theme.text} opacity="0.10"/>
        </g>

        {/* RIGHT CLUSTER */}
        <g transform="translate(920, 80)">
          {/* C++ block */}
          <rect
            x="-20"
            y="0"
            rx="14"
            width="200"
            height="120"
            fill={theme.compImgHighlight}
            stroke={theme.text}
            strokeWidth="2"
          />
          <text x="40" y="70" fontSize="26" fontWeight="700" fill={theme.text}>
            C++
          </text>

          {/* MySQL window */}
          <rect
            x="-60"
            y="160"
            rx="14"
            width="260"
            height="160"
            fill={theme.compImgHighlight}
            stroke={theme.text}
            strokeWidth="2"
          />
          <rect x="-20" y="200" width="140" height="10" rx="5" fill={theme.text} opacity="0.15"/>
          <rect x="-20" y="225" width="200" height="10" rx="5" fill={theme.text} opacity="0.10"/>
          <rect x="-20" y="250" width="120" height="10" rx="5" fill={theme.imageHighlight} opacity="0.12"/>

          {/* Backend block */}
          <rect
            x="-40"
            y="360"
            rx="14"
            width="200"
            height="160"
            fill={theme.compImgHighlight}
            stroke={theme.text}
            strokeWidth="2"
          />
          <text x="10" y="395" fontSize="20" fontWeight="700" fill={theme.text}>
            Backend
          </text>
          <circle cx="60" cy="450" r="20" fill={theme.imageHighlight} opacity="0.15"/>
          <circle cx="140" cy="450" r="20" fill={theme.jacketColor} opacity="0.20"/>

          {/* Django/Frontend small block */}
          <rect
            x="-20"
            y="550"
            rx="10"
            width="160"
            height="100"
            fill={theme.compImgHighlight}
            stroke={theme.text}
            strokeWidth="2"
          />
          <text x="20" y="610" fontSize="18" fill={theme.text}>
            Django / Frontend
          </text>
        </g>

        {/* CENTER CHARACTER (Semi-3D Developer) */}
        <g transform="translate(420, 120)">
          {/* Legs */}
          <rect x="70" y="360" width="50" height="180" rx="8" fill={theme.dark} />
          <rect x="150" y="360" width="50" height="180" rx="8" fill={theme.jacketColor} />

          {/* Shoes */}
          <ellipse cx="95" cy="545" rx="38" ry="10" fill={theme.dark} opacity="0.25" />
          <ellipse cx="175" cy="545" rx="38" ry="10" fill={theme.dark} opacity="0.25" />

          {/* Torso */}
          <rect x="50" y="200" width="200" height="180" rx="20" fill={theme.jacketColor} />
          <rect x="75" y="230" width="150" height="130" rx="14" fill={theme.compImgHighlight} opacity="0.10" />

          {/* Arms */}
          <rect x="20" y="230" width="40" height="140" rx="12" fill={theme.jacketColor} />
          <rect x="250" y="230" width="40" height="140" rx="12" fill={theme.jacketColor} />

          {/* Head */}
          <g transform="translate(80,70)">
            <ellipse cx="70" cy="0" rx="50" ry="56" fill="#ffe0c7" />
            <path
              d="M30 0 C 60 -34, 110 -34, 140 0 C120 -20, 90 -28, 60 -20 C48 -16, 38 -10, 30 0Z"
              fill={theme.dark}
            />
          </g>
        </g>

        {/* Soft overall lighting gradient */}
        <defs>
          <linearGradient id="devSoftLight" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={theme.imageHighlight} stopOpacity="0.05" />
            <stop offset="100%" stopColor={theme.dark} stopOpacity="0.03" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="1200" height="820" fill="url(#devSoftLight)" opacity="0.85" />
      </svg>
    );
  }
}
