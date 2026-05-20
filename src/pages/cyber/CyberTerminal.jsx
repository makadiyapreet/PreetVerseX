import React, { useState, useEffect, useRef, useCallback } from 'react'
import './CyberTerminal.css'

/* =====================
   FILE SYSTEM
   ===================== */
const fileSystem = {
  'readme.txt': '=== PREET MAKADIYA — CYBER OPERATIVE ===\nB.Tech CSE @ PDEU | CGPA: 8.63\nAspiring Cybersecurity Professional\nType "help" for available commands.',
  'skills.dat': '[LANGUAGES] Python, Java, C/C++, JavaScript, SQL\n[FRAMEWORKS] React.js, Django, Flask, FastAPI, Node.js\n[SECURITY] Wireshark, Nmap, Burp Suite, Kali Linux\n[DATABASES] MySQL, PostgreSQL, MongoDB, SQLite\n[DEVOPS] Docker, Git, Linux, CI/CD\n[AI/ML] TensorFlow, Scikit-learn, Pandas, NumPy',
  'projects.log': '[01] AETRIX — Satellite Environmental Intelligence (Python, ML, ISRO)\n[02] Swagat Caterers — Enterprise Management (React, Node, MongoDB)\n[03] Gate Master — GATE CS Preparation (Android, Java, Firebase)\n[04] AEGIS — Cybersecurity Platform (React, FastAPI, ML)\n[05] CareerPilot AI — Career Assistant (React, Groq, AI)\n[06] SentinelAI — Web Application Firewall (Python, ML, Flask)',
  'certs.enc': '[DCSC] Drop Certified Security Course — 2025\n[OCI] Oracle Cloud Infrastructure AI — 2025\n[GATE] GATE CS Qualified — 2026\n[HF] HackingFlix Cyber Warrior — 2025\n[LF] Linux Foundation Cybersecurity — 2025',
  'contact.key': 'EMAIL: [REDACTED]@protonmail.com\nGITHUB: Visit /cyber/about for links\nLINKEDIN: Visit /cyber/about for links\nSTATUS: Use the portfolio nav to reach contact info.',
  'secret.enc': '[ENCRYPTED] Qsffu jt bxftpnf! (shift: -1)',
  '.bash_history': 'nmap -sV 10.10.10.1\nsqlmap -u http://target.com/login\nhydra -l admin -P rockyou.txt ssh://10.10.10.5\nmsfconsole\nwireshark -i eth0\njohn --wordlist=rockyou.txt hash.txt\ngobuster dir -u http://target.com -w common.txt',
  'network.conf': 'INTERFACE: eth0\nIP: 10.0.2.15\nMASK: 255.255.255.0\nGATEWAY: 10.0.2.1\nDNS: 8.8.8.8, 1.1.1.1\nMAC: 08:00:27:a1:b2:c3\nMTU: 1500',
  'exploit.db': '[CVE-2024-1234] Apache RCE — Critical\n[CVE-2024-5678] OpenSSH Auth Bypass — High\n[CVE-2023-9012] WordPress SQLi — Medium\n[CVE-2023-3456] Node.js Prototype Pollution — High\n[CVE-2024-7890] Linux Kernel LPE — Critical',
}

/* Fortune quotes */
const fortunes = [
  '"The quieter you become, the more you are able to hear." — Kali Linux',
  '"There are only two types of companies: those that have been hacked, and those that will be." — Robert Mueller',
  '"Hackers are breaking the systems for profit. Before it was about intellectual curiosity." — Kevin Mitnick',
  '"Security is not a product, but a process." — Bruce Schneier',
  '"The best way to predict the future is to invent it." — Alan Kay',
  '"In the digital world, the line between offense and defense is razor thin."',
  '"Every lock can be picked. Every wall can be climbed. The question is: how long does it take?"',
  '"Your password is like your toothbrush. Don\'t share it, and change it often."',
  '"The weakest link in the security chain is the human element." — Kevin Mitnick',
  '"Encryption works. Properly implemented strong crypto systems are one of the few things that you can rely on." — Edward Snowden',
]

/* =====================
   COMMAND HANDLERS
   ===================== */
const commandResponses = {
  help: () => [
    { text: '╔═══════════════════════════════════════════════╗', type: 'info' },
    { text: '║           AVAILABLE COMMANDS                  ║', type: 'info' },
    { text: '╠═══════════════════════════════════════════════╣', type: 'info' },
    { text: '║  RECON                                        ║', type: 'info' },
    { text: '║  scan <ip>     — Nmap network scan            ║', type: 'info' },
    { text: '║  ping <host>   — Ping a host                  ║', type: 'info' },
    { text: '║  nslookup <d>  — DNS lookup                   ║', type: 'info' },
    { text: '║  whois <d>     — Domain registration info     ║', type: 'info' },
    { text: '║  trace         — Traceroute to target         ║', type: 'info' },
    { text: '║                                               ║', type: 'info' },
    { text: '║  EXPLOITATION                                 ║', type: 'info' },
    { text: '║  crack         — Crack password hash          ║', type: 'info' },
    { text: '║  exploit <cve> — Run exploit module           ║', type: 'info' },
    { text: '║  decrypt       — Decrypt secret file          ║', type: 'info' },
    { text: '║  bruteforce    — SSH brute force sim          ║', type: 'info' },
    { text: '║  sqli          — SQL injection demo           ║', type: 'info' },
    { text: '║                                               ║', type: 'info' },
    { text: '║  SYSTEM                                       ║', type: 'info' },
    { text: '║  whoami        — Operative identity           ║', type: 'info' },
    { text: '║  ls            — List files                   ║', type: 'info' },
    { text: '║  cat <file>    — Read file contents           ║', type: 'info' },
    { text: '║  pwd           — Print working directory      ║', type: 'info' },
    { text: '║  date          — Show date/time               ║', type: 'info' },
    { text: '║  ifconfig      — Network interface info       ║', type: 'info' },
    { text: '║  status        — System dashboard             ║', type: 'info' },
    { text: '║  neofetch      — System info banner           ║', type: 'info' },
    { text: '║  history       — Command history              ║', type: 'info' },
    { text: '║                                               ║', type: 'info' },
    { text: '║  FUN                                          ║', type: 'info' },
    { text: '║  fortune       — Random hacker quote          ║', type: 'info' },
    { text: '║  matrix        — Enter the Matrix             ║', type: 'info' },
    { text: '║  ssh <host>    — SSH connection sim           ║', type: 'info' },
    { text: '║  clear         — Clear terminal               ║', type: 'info' },
    { text: '╚═══════════════════════════════════════════════╝', type: 'info' },
  ],
  whoami: () => [
    { text: 'OPERATIVE: Preet Makadiya', type: 'success' },
    { text: 'CLEARANCE: Level 4 — Aspiring Cyber Professional', type: 'info' },
    { text: 'AFFILIATION: PDEU — B.Tech CSE (CGPA: 8.63)', type: 'info' },
    { text: 'STATUS: Active', type: 'success' },
    { text: 'SPECIALIZATION: Offensive Security, Digital Forensics, AI/ML', type: 'info' },
    { text: 'UID: 1337  GID: 1337  GROUPS: hackers,dev,ml', type: 'info' },
  ],
  ls: () => [
    { text: 'total 48K', type: 'info' },
    { text: 'drwxr-xr-x  operative  2.1K  readme.txt', type: 'info' },
    { text: 'drwxr-xr-x  operative  1.8K  skills.dat', type: 'info' },
    { text: 'drwxr-xr-x  operative  3.2K  projects.log', type: 'info' },
    { text: '-rw-------  operative  0.8K  certs.enc', type: 'warn' },
    { text: '-rw-------  operative  0.5K  contact.key', type: 'warn' },
    { text: '-r--------  operative  0.2K  secret.enc', type: 'error' },
    { text: '-rw-r--r--  operative  0.6K  .bash_history', type: 'info' },
    { text: '-rw-r--r--  operative  0.4K  network.conf', type: 'info' },
    { text: '-rw-------  operative  0.9K  exploit.db', type: 'error' },
  ],
  status: () => [
    { text: '┌─ SYSTEM STATUS ─────────────────────────┐', type: 'info' },
    { text: '│ FIREWALL:      ████████░░  82%  ACTIVE   │', type: 'success' },
    { text: '│ ENCRYPTION:    ██████████  100% AES-256   │', type: 'success' },
    { text: '│ THREAT LEVEL:  ██░░░░░░░░  LOW            │', type: 'success' },
    { text: '│ IDS/IPS:       ██████████  100% RUNNING   │', type: 'success' },
    { text: '│ VPN:           ████████░░  83%  TUNNEL    │', type: 'success' },
    { text: '│ UPTIME:        ' + Math.floor(Math.random() * 365) + ' days                 │', type: 'info' },
    { text: '│ CONNECTIONS:   ' + Math.floor(Math.random() * 50 + 10) + ' active              │', type: 'info' },
    { text: '│ CPU:           ' + Math.floor(Math.random() * 40 + 20) + '%                    │', type: 'info' },
    { text: '│ MEMORY:        ' + Math.floor(Math.random() * 30 + 40) + '%  4.2G/8.0G         │', type: 'info' },
    { text: '└──────────────────────────────────────────┘', type: 'info' },
  ],
  pwd: () => [{ text: '/home/operative/cyber-ops', type: 'info' }],
  date: () => [{ text: new Date().toString(), type: 'info' }],
  ifconfig: () => [
    { text: 'eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>', type: 'info' },
    { text: '        inet 10.0.2.15  netmask 255.255.255.0  broadcast 10.0.2.255', type: 'info' },
    { text: '        inet6 fe80::a00:27ff:fea1:b2c3  prefixlen 64  scopeid 0x20', type: 'info' },
    { text: '        ether 08:00:27:a1:b2:c3  txqueuelen 1000  (Ethernet)', type: 'info' },
    { text: '        RX packets 45329  bytes 48293021 (48.2 MB)', type: 'info' },
    { text: '        TX packets 31205  bytes 4102845 (4.1 MB)', type: 'info' },
    { text: '', type: 'info' },
    { text: 'tun0: flags=4305<UP,POINTOPOINT,RUNNING,NOARP,MULTICAST>', type: 'success' },
    { text: '        inet 10.10.14.12  netmask 255.255.254.0', type: 'success' },
    { text: '        UP POINTOPOINT RUNNING NOARP MULTICAST  MTU:1500', type: 'success' },
  ],
  neofetch: () => [
    { text: '        ▄▄▄▄▄▄▄▄▄▄▄▄▄       preet@cybersec', type: 'success' },
    { text: '       ██████████████████     ─────────────────────', type: 'success' },
    { text: '      ████▀▀▀▀▀▀▀▀▀▀████     OS:      Kali Linux 2025.1', type: 'info' },
    { text: '     ████              ████   Host:    PreetVerseX Terminal', type: 'info' },
    { text: '    ████   ██    ██   ████    Kernel:  6.1.0-kali9-amd64', type: 'info' },
    { text: '    ████              ████    Shell:   zsh 5.9', type: 'info' },
    { text: '    ████   ████████  ████     DE:      XFCE 4.18', type: 'info' },
    { text: '     ████           ████      CPU:     Intel i7-13700H @ 2.4GHz', type: 'info' },
    { text: '      ████▄▄▄▄▄▄▄████        Memory:  4.2G / 8.0G', type: 'info' },
    { text: '       ██████████████████     Disk:    47G / 120G (39%)', type: 'info' },
    { text: '        ▀▀▀▀▀▀▀▀▀▀▀▀▀        Uptime:  ' + Math.floor(Math.random() * 30 + 1) + ' days', type: 'info' },
    { text: '', type: 'info' },
    { text: '   ████████████████████████   Color Palette:', type: 'info' },
    { text: '   ██ ██ ██ ██ ██ ██ ██ ██   ▓▓ ▓▓ ▓▓ ▓▓ ▓▓ ▓▓ ▓▓ ▓▓', type: 'success' },
  ],
  fortune: () => {
    const q = fortunes[Math.floor(Math.random() * fortunes.length)]
    return [
      { text: '┌──────────────────────────────────────┐', type: 'info' },
      { text: '│  🔮 FORTUNE COOKIE                   │', type: 'info' },
      { text: '├──────────────────────────────────────┤', type: 'info' },
      { text: `│  ${q}`, type: 'success' },
      { text: '└──────────────────────────────────────┘', type: 'info' },
    ]
  },
}

/* =====================
   ANIMATED GENERATORS
   ===================== */
function generateScan(target) {
  const ports = [
    { port: 21, service: 'ftp', state: Math.random() > 0.6 ? 'open' : 'closed' },
    { port: 22, service: 'ssh', state: 'open' },
    { port: 53, service: 'dns', state: Math.random() > 0.5 ? 'open' : 'filtered' },
    { port: 80, service: 'http', state: 'open' },
    { port: 139, service: 'netbios', state: Math.random() > 0.7 ? 'open' : 'filtered' },
    { port: 443, service: 'https', state: 'open' },
    { port: 445, service: 'smb', state: Math.random() > 0.5 ? 'open' : 'filtered' },
    { port: 3306, service: 'mysql', state: Math.random() > 0.5 ? 'open' : 'filtered' },
    { port: 5432, service: 'postgresql', state: Math.random() > 0.7 ? 'open' : 'closed' },
    { port: 8080, service: 'http-proxy', state: Math.random() > 0.5 ? 'open' : 'closed' },
    { port: 8443, service: 'https-alt', state: 'filtered' },
    { port: 27017, service: 'mongodb', state: Math.random() > 0.6 ? 'open' : 'filtered' },
  ]
  const openPorts = ports.filter(p => p.state === 'open').length
  return [
    { text: `Starting Nmap 7.94 ( https://nmap.org ) at ${new Date().toISOString().split('T')[0]}`, type: 'info', delay: 0 },
    { text: `Nmap scan report for ${target}`, type: 'info', delay: 400 },
    { text: `Host is up (0.0${Math.floor(Math.random() * 90 + 10)}s latency).`, type: 'success', delay: 800 },
    { text: `Not shown: ${988 - openPorts} closed/filtered ports`, type: 'info', delay: 1100 },
    { text: 'PORT      STATE      SERVICE        VERSION', type: 'info', delay: 1400 },
    ...ports.map((p, i) => ({
      text: `${String(p.port).padEnd(10)}${p.state.padEnd(11)}${p.service.padEnd(15)}${p.state === 'open' ? 'v' + (Math.random() * 5 + 1).toFixed(1) : ''}`,
      type: p.state === 'open' ? 'success' : p.state === 'filtered' ? 'warn' : 'error',
      delay: 1600 + i * 200,
    })),
    { text: '', type: 'info', delay: 4200 },
    { text: `OS detection: Linux 5.x (96% confidence)`, type: 'info', delay: 4400 },
    { text: `Nmap done: 1 IP address (1 host up) scanned in ${(Math.random() * 5 + 2).toFixed(2)}s`, type: 'info', delay: 4800 },
  ]
}

function generateCrack() {
  const hash = Array.from({ length: 32 }, () => '0123456789abcdef'[Math.floor(Math.random() * 16)]).join('')
  const passwords = ['admin123', 'password1', 'qwerty2024', 'pr33t_h4ck3r', 'letmein!']
  const cracked = passwords[Math.floor(Math.random() * passwords.length)]
  return [
    { text: `Loading hash: ${hash}`, type: 'info', delay: 0 },
    { text: 'Identifying hash type... MD5 detected', type: 'info', delay: 600 },
    { text: 'Loading wordlist: rockyou.txt (14,341,564 entries)', type: 'info', delay: 1000 },
    { text: 'Session..........: hashcat', type: 'info', delay: 1300 },
    { text: 'Status...........: Running', type: 'success', delay: 1500 },
    { text: 'Hash.Type........: MD5', type: 'info', delay: 1700 },
    { text: 'Cracking ██░░░░░░░░░░░░░░░░░░ 8%    (231K/s)', type: 'warn', delay: 2200 },
    { text: 'Cracking ██████░░░░░░░░░░░░░░ 31%   (452K/s)', type: 'warn', delay: 2800 },
    { text: 'Cracking ██████████░░░░░░░░░░ 54%   (614K/s)', type: 'warn', delay: 3400 },
    { text: 'Cracking ██████████████░░░░░░ 72%   (781K/s)', type: 'warn', delay: 3900 },
    { text: 'Cracking ████████████████████ 100%  (1.2M/s)', type: 'success', delay: 4400 },
    { text: '', type: 'info', delay: 4600 },
    { text: `${hash}:${cracked}`, type: 'success', delay: 4800 },
    { text: '', type: 'info', delay: 5000 },
    { text: `[+] CRACKED: "${cracked}"`, type: 'success', delay: 5200 },
    { text: 'Session completed. 1/1 hashes recovered.', type: 'info', delay: 5600 },
  ]
}

function generateTrace() {
  const hops = [
    { hop: 1, ip: '192.168.1.1', ms: '1.2', loc: 'Local Gateway' },
    { hop: 2, ip: '10.0.0.1', ms: '5.4', loc: 'ISP Router' },
    { hop: 3, ip: '72.14.232.1', ms: '12.8', loc: 'Mumbai, IN' },
    { hop: 4, ip: '108.170.251.9', ms: '18.3', loc: 'Chennai, IN' },
    { hop: 5, ip: '209.85.251.9', ms: '24.1', loc: 'Singapore, SG' },
    { hop: 6, ip: '74.125.242.18', ms: '38.7', loc: 'Hong Kong, HK' },
    { hop: 7, ip: '142.250.71.14', ms: '45.3', loc: 'Tokyo, JP' },
    { hop: 8, ip: '8.8.8.8', ms: '52.7', loc: 'Mountain View, US' },
  ]
  return [
    { text: 'traceroute to 8.8.8.8 (8.8.8.8), 30 hops max, 60 byte packets', type: 'info', delay: 0 },
    ...hops.map((h, i) => ({
      text: ` ${String(h.hop).padStart(2)}  ${h.ip.padEnd(20)} ${h.ms}ms  [${h.loc}]`,
      type: 'success',
      delay: 500 + i * 500,
    })),
    { text: '', type: 'info', delay: 4600 },
    { text: 'Trace complete. 8 hops traversed in 52.7ms.', type: 'success', delay: 5000 },
  ]
}

function generateDecrypt() {
  return [
    { text: 'Reading secret.enc...', type: 'info', delay: 0 },
    { text: 'Encrypted: "Qsffu jt bxftpnf!"', type: 'warn', delay: 500 },
    { text: 'Analyzing cipher pattern...', type: 'info', delay: 900 },
    { text: 'Testing ROT-1...  "Preet is awesome!" — English detected!', type: 'info', delay: 1500 },
    { text: 'Decrypting ████████████████████ 100%', type: 'success', delay: 2200 },
    { text: '', type: 'info', delay: 2500 },
    { text: '[+] DECRYPTED: "Preet is awesome!"', type: 'success', delay: 2800 },
    { text: 'Cipher: Caesar | Shift: +1 | Confidence: 98.7%', type: 'info', delay: 3200 },
  ]
}

function generatePing(host) {
  const target = host || 'google.com'
  const ip = '142.250.' + Math.floor(Math.random() * 255) + '.' + Math.floor(Math.random() * 255)
  return [
    { text: `PING ${target} (${ip}): 56 data bytes`, type: 'info', delay: 0 },
    ...[0, 1, 2, 3].map((i) => ({
      text: `64 bytes from ${ip}: icmp_seq=${i} ttl=117 time=${(Math.random() * 30 + 5).toFixed(1)} ms`,
      type: 'success',
      delay: 600 + i * 800,
    })),
    { text: '', type: 'info', delay: 4000 },
    { text: `--- ${target} ping statistics ---`, type: 'info', delay: 4200 },
    { text: `4 packets transmitted, 4 packets received, 0.0% packet loss`, type: 'success', delay: 4400 },
    { text: `round-trip min/avg/max = ${(Math.random() * 5 + 5).toFixed(1)}/${(Math.random() * 10 + 15).toFixed(1)}/${(Math.random() * 15 + 25).toFixed(1)} ms`, type: 'info', delay: 4600 },
  ]
}

function generateNslookup(domain) {
  const target = domain || 'preetversex.netlify.app'
  return [
    { text: `Server:         8.8.8.8`, type: 'info', delay: 0 },
    { text: `Address:        8.8.8.8#53`, type: 'info', delay: 300 },
    { text: '', type: 'info', delay: 500 },
    { text: `Non-authoritative answer:`, type: 'info', delay: 800 },
    { text: `Name:   ${target}`, type: 'success', delay: 1000 },
    { text: `Address: ${Math.floor(Math.random() * 200 + 50)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`, type: 'success', delay: 1200 },
    { text: `Name:   ${target}`, type: 'success', delay: 1400 },
    { text: `Address: 2606:4700:3030::${Math.floor(Math.random() * 9000 + 1000)}`, type: 'success', delay: 1600 },
    { text: '', type: 'info', delay: 1800 },
    { text: `DNS record types found: A, AAAA, CNAME, TXT, MX`, type: 'info', delay: 2000 },
  ]
}

function generateWhois(domain) {
  const target = domain || 'example.com'
  return [
    { text: `Whois lookup for: ${target}`, type: 'info', delay: 0 },
    { text: '─────────────────────────────────────', type: 'info', delay: 400 },
    { text: `Domain Name: ${target.toUpperCase()}`, type: 'success', delay: 600 },
    { text: `Registry Domain ID: D${Math.floor(Math.random() * 900000000 + 100000000)}`, type: 'info', delay: 800 },
    { text: `Registrar: Namecheap, Inc.`, type: 'info', delay: 1000 },
    { text: `Creation Date: 2024-01-15T00:00:00Z`, type: 'info', delay: 1200 },
    { text: `Expiry Date: 2026-01-15T00:00:00Z`, type: 'info', delay: 1400 },
    { text: `Updated Date: 2025-03-22T14:30:00Z`, type: 'info', delay: 1600 },
    { text: `Name Servers:`, type: 'info', delay: 1800 },
    { text: `   ns1.cloudflare.com`, type: 'success', delay: 2000 },
    { text: `   ns2.cloudflare.com`, type: 'success', delay: 2100 },
    { text: `DNSSEC: unsigned`, type: 'warn', delay: 2300 },
    { text: `Status: clientTransferProhibited`, type: 'info', delay: 2500 },
  ]
}

function generateExploit(cve) {
  const target = cve || 'CVE-2024-1234'
  return [
    { text: `[*] Loading exploit module: ${target}`, type: 'info', delay: 0 },
    { text: '[*] Initializing Metasploit Framework v6.3.44', type: 'info', delay: 500 },
    { text: '', type: 'info', delay: 700 },
    { text: `msf6 > use exploit/multi/${target.toLowerCase()}`, type: 'cmd', delay: 900 },
    { text: `msf6 exploit(${target.toLowerCase()}) > set RHOSTS 10.10.10.5`, type: 'cmd', delay: 1200 },
    { text: `RHOSTS => 10.10.10.5`, type: 'info', delay: 1400 },
    { text: `msf6 exploit(${target.toLowerCase()}) > set LHOST 10.10.14.12`, type: 'cmd', delay: 1600 },
    { text: `LHOST => 10.10.14.12`, type: 'info', delay: 1800 },
    { text: `msf6 exploit(${target.toLowerCase()}) > exploit`, type: 'cmd', delay: 2200 },
    { text: '', type: 'info', delay: 2400 },
    { text: '[*] Started reverse TCP handler on 10.10.14.12:4444', type: 'info', delay: 2800 },
    { text: '[*] Sending exploit payload...', type: 'warn', delay: 3200 },
    { text: '[*] Exploit payload delivered (' + Math.floor(Math.random() * 500 + 200) + ' bytes)', type: 'warn', delay: 3800 },
    { text: '[+] Meterpreter session 1 opened (10.10.14.12:4444 -> 10.10.10.5:52841)', type: 'success', delay: 4400 },
    { text: '', type: 'info', delay: 4600 },
    { text: 'meterpreter > [ACCESS DENIED — SIMULATION ONLY]', type: 'error', delay: 5000 },
    { text: '⚠ This is a simulation. No real exploit was executed.', type: 'warn', delay: 5400 },
  ]
}

function generateBruteforce() {
  const users = ['admin', 'root', 'preet', 'operator']
  const attempts = ['password123', 'admin2024', 'qwerty', 'letmein', '123456', 'toor', 'cyber2025']
  return [
    { text: '[*] Hydra v9.5 starting...', type: 'info', delay: 0 },
    { text: '[*] Target: ssh://10.10.10.5:22', type: 'info', delay: 400 },
    { text: `[*] Login: ${users[Math.floor(Math.random() * users.length)]}`, type: 'info', delay: 600 },
    { text: '[*] Wordlist: /usr/share/wordlists/rockyou.txt', type: 'info', delay: 800 },
    { text: '[*] Starting brute force attack...', type: 'warn', delay: 1200 },
    ...attempts.map((pw, i) => ({
      text: `[ATTEMPT] login: admin   password: ${pw}   [${i < attempts.length - 1 ? 'FAILED' : 'SUCCESS'}]`,
      type: i < attempts.length - 1 ? 'error' : 'success',
      delay: 1600 + i * 500,
    })),
    { text: '', type: 'info', delay: 5200 },
    { text: `[+] VALID CREDENTIALS FOUND: admin:${attempts[attempts.length - 1]}`, type: 'success', delay: 5600 },
    { text: `[*] ${attempts.length} attempts in ${(Math.random() * 10 + 5).toFixed(1)}s`, type: 'info', delay: 6000 },
    { text: '⚠ This is a simulation. No real brute force was attempted.', type: 'warn', delay: 6400 },
  ]
}

function generateSQLi() {
  return [
    { text: '[*] Target: http://target.com/login.php', type: 'info', delay: 0 },
    { text: '[*] Parameter: username (POST)', type: 'info', delay: 400 },
    { text: '[*] Testing payloads...', type: 'warn', delay: 800 },
    { text: '', type: 'info', delay: 1000 },
    { text: "Payload: ' OR 1=1 --              [BLOCKED by WAF]", type: 'error', delay: 1400 },
    { text: "Payload: ' UNION SELECT NULL --    [BLOCKED by WAF]", type: 'error', delay: 1800 },
    { text: "Payload: admin'/*                  [200 OK — BYPASSED!]", type: 'success', delay: 2400 },
    { text: '', type: 'info', delay: 2600 },
    { text: '[+] SQL Injection found! Boolean-based blind', type: 'success', delay: 3000 },
    { text: '[*] Extracting database info...', type: 'info', delay: 3400 },
    { text: '[+] Database: target_db', type: 'success', delay: 3800 },
    { text: '[+] Tables: users, sessions, products, orders', type: 'success', delay: 4200 },
    { text: '[+] Columns in users: id, username, password_hash, email', type: 'success', delay: 4600 },
    { text: '', type: 'info', delay: 4800 },
    { text: '[+] Dumping users table (3 entries):', type: 'success', delay: 5200 },
    { text: '    1 | admin   | 5f4dcc3b5aa... | admin@target.com', type: 'info', delay: 5500 },
    { text: '    2 | user01  | e99a18c428c... | user01@target.com', type: 'info', delay: 5700 },
    { text: '    3 | backup  | d8578edf844... | backup@target.com', type: 'info', delay: 5900 },
    { text: '', type: 'info', delay: 6100 },
    { text: '⚠ This is a simulation. No real injection was performed.', type: 'warn', delay: 6400 },
  ]
}

function generateSSH(host) {
  const target = host || '10.10.10.5'
  return [
    { text: `ssh operative@${target}`, type: 'cmd', delay: 0 },
    { text: `The authenticity of host '${target}' can't be established.`, type: 'warn', delay: 600 },
    { text: 'ED25519 key fingerprint is SHA256:' + Array.from({length: 43}, () => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'[Math.floor(Math.random() * 64)]).join(''), type: 'info', delay: 800 },
    { text: 'Are you sure you want to continue connecting (yes/no)? yes', type: 'warn', delay: 1200 },
    { text: `Warning: Permanently added '${target}' (ED25519) to known hosts.`, type: 'warn', delay: 1800 },
    { text: `operative@${target}'s password: ********`, type: 'info', delay: 2200 },
    { text: '', type: 'info', delay: 2600 },
    { text: `Welcome to Ubuntu 22.04.3 LTS (GNU/Linux 5.15.0-89-generic x86_64)`, type: 'success', delay: 3000 },
    { text: '', type: 'info', delay: 3200 },
    { text: ` * System load:  0.12      Users logged in: 1`, type: 'info', delay: 3400 },
    { text: ` * Memory usage: 42%       IPv4 address:    ${target}`, type: 'info', delay: 3600 },
    { text: ` * Disk usage:   39%       Last login: ${new Date(Date.now() - Math.random() * 86400000).toISOString().split('T')[0]}`, type: 'info', delay: 3800 },
    { text: '', type: 'info', delay: 4000 },
    { text: `operative@target:~$ [SESSION SIMULATED — DISCONNECTED]`, type: 'error', delay: 4400 },
    { text: 'Connection to ' + target + ' closed.', type: 'info', delay: 4800 },
  ]
}

function generateMatrix() {
  const chars = 'ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ012345789ABCDEFZ'
  const makeLine = () => Array.from({ length: 60 }, () => chars[Math.floor(Math.random() * chars.length)]).join(' ')
  return [
    { text: 'Wake up, Neo...', type: 'success', delay: 0 },
    { text: 'The Matrix has you...', type: 'success', delay: 800 },
    { text: 'Follow the white rabbit.', type: 'success', delay: 1600 },
    { text: '', type: 'info', delay: 2200 },
    { text: makeLine(), type: 'success', delay: 2600 },
    { text: makeLine(), type: 'success', delay: 2800 },
    { text: makeLine(), type: 'success', delay: 3000 },
    { text: makeLine(), type: 'success', delay: 3200 },
    { text: makeLine(), type: 'success', delay: 3400 },
    { text: makeLine(), type: 'success', delay: 3600 },
    { text: '', type: 'info', delay: 3800 },
    { text: 'Knock, knock, Neo.', type: 'success', delay: 4200 },
  ]
}

/* =====================
   MAIN COMPONENT
   ===================== */
export default function CyberTerminal() {
  const [lines, setLines] = useState([
    { text: '██████╗ ███╗   ███╗    ████████╗███████╗██████╗ ███╗   ███╗', type: 'success' },
    { text: '██╔══██╗████╗ ████║    ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║', type: 'success' },
    { text: '██████╔╝██╔████╔██║       ██║   █████╗  ██████╔╝██╔████╔██║', type: 'success' },
    { text: '██╔═══╝ ██║╚██╔╝██║       ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║', type: 'success' },
    { text: '██║     ██║ ╚═╝ ██║       ██║   ███████╗██║  ██║██║ ╚═╝ ██║', type: 'success' },
    { text: '╚═╝     ╚═╝     ╚═╝       ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝', type: 'success' },
    { text: '', type: 'info' },
    { text: 'PREET MAKADIYA — Cyber Terminal v3.0', type: 'info' },
    { text: '25+ commands available. Type "help" to begin.', type: 'info' },
    { text: '─────────────────────────────────────────────', type: 'info' },
  ])
  const [input, setInput] = useState('')
  const [cmdCount, setCmdCount] = useState(0)
  const [cmdHistory, setCmdHistory] = useState([])
  const [historyIdx, setHistoryIdx] = useState(-1)
  const [isProcessing, setIsProcessing] = useState(false)
  const termBodyRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (termBodyRef.current) termBodyRef.current.scrollTop = termBodyRef.current.scrollHeight
  }, [lines])

  const focusInput = useCallback(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [])

  const addLines = useCallback((newLines) => {
    const immediate = newLines.filter(l => !l.delay)
    const delayed = newLines.filter(l => l.delay)
    if (immediate.length > 0) setLines(prev => [...prev, ...immediate])
    delayed.forEach(line => {
      setTimeout(() => setLines(prev => [...prev, { text: line.text, type: line.type }]), line.delay)
    })
    if (delayed.length > 0) {
      const maxDelay = Math.max(...delayed.map(l => l.delay))
      setTimeout(() => setIsProcessing(false), maxDelay + 200)
    } else {
      setIsProcessing(false)
    }
  }, [])

  const handleCommand = useCallback((cmd) => {
    const trimmed = cmd.trim().toLowerCase()
    const parts = trimmed.split(/\s+/)
    const base = parts[0]
    const arg = parts.slice(1).join(' ')

    setLines(prev => [...prev, { text: `preet@cyber:~$ ${cmd}`, type: 'cmd' }])
    setCmdCount(c => c + 1)
    setCmdHistory(prev => [...prev, cmd])
    setHistoryIdx(-1)
    setIsProcessing(true)

    if (base === 'clear') { setLines([{ text: 'Terminal cleared.', type: 'info' }]); setIsProcessing(false); return }

    // System commands
    if (commandResponses[base]) { addLines(commandResponses[base]()); return }

    // File commands
    if (base === 'cat') {
      if (!arg) { addLines([{ text: 'Usage: cat <filename>', type: 'error' }]); return }
      if (fileSystem[arg]) {
        addLines(fileSystem[arg].split('\n').map(l => ({ text: l, type: 'info' })))
      } else {
        addLines([{ text: `cat: ${arg}: No such file or directory`, type: 'error' }])
      }
      return
    }

    // Animated commands
    if (base === 'scan' || base === 'nmap') { addLines(generateScan(arg || '10.10.10.' + Math.floor(Math.random() * 254 + 1))); return }
    if (base === 'crack' || base === 'hashcat') { addLines(generateCrack()); return }
    if (base === 'trace' || base === 'traceroute') { addLines(generateTrace()); return }
    if (base === 'decrypt') { addLines(generateDecrypt()); return }
    if (base === 'ping') { addLines(generatePing(arg)); return }
    if (base === 'nslookup' || base === 'dig') { addLines(generateNslookup(arg)); return }
    if (base === 'whois') { addLines(generateWhois(arg)); return }
    if (base === 'exploit' || base === 'msfconsole') { addLines(generateExploit(arg)); return }
    if (base === 'bruteforce' || base === 'hydra') { addLines(generateBruteforce()); return }
    if (base === 'sqli' || base === 'sqlmap') { addLines(generateSQLi()); return }
    if (base === 'ssh') { addLines(generateSSH(arg)); return }
    if (base === 'matrix') { addLines(generateMatrix()); return }

    // History
    if (base === 'history') {
      const hist = cmdHistory.length > 0
        ? cmdHistory.map((c, i) => ({ text: `  ${String(i + 1).padStart(4)}  ${c}`, type: 'info' }))
        : [{ text: 'No commands in history yet.', type: 'warn' }]
      addLines(hist)
      return
    }

    // Easter eggs
    if (base === 'sudo') {
      addLines([
        { text: '[sudo] password for visitor: ********', type: 'warn' },
        { text: 'visitor is not in the sudoers file. This incident will be reported.', type: 'error' },
      ]); return
    }
    if (base === 'exit' || base === 'quit') {
      addLines([{ text: 'Nice try! You can\'t escape the matrix.', type: 'warn' }]); return
    }
    if (base === 'rm') {
      addLines([
        { text: 'rm: Permission denied. Nice try though! 😏', type: 'error' },
        { text: 'This incident has been logged.', type: 'warn' },
      ]); return
    }
    if (base === 'cd') {
      addLines([{ text: arg ? `cd: ${arg}: No such directory (you are in a browser, remember?)` : '/home/operative/cyber-ops', type: arg ? 'error' : 'info' }])
      return
    }
    if (base === 'echo') {
      addLines([{ text: arg || '', type: 'info' }]); return
    }
    if (base === 'curl' || base === 'wget') {
      addLines([
        { text: `Connecting to ${arg || 'target'}...`, type: 'info' },
        { text: 'ERROR: Network requests blocked in sandboxed terminal.', type: 'error' },
      ]); return
    }
    if (base === 'man') {
      addLines([{ text: `No manual entry for ${arg || 'undefined'}. Type "help" instead.`, type: 'warn' }]); return
    }
    if (base === 'uname') {
      addLines([{ text: 'Linux cybersec 6.1.0-kali9-amd64 #1 SMP x86_64 GNU/Linux', type: 'info' }]); return
    }
    if (base === 'uptime') {
      addLines([{ text: ` ${new Date().toTimeString().split(' ')[0]} up ${Math.floor(Math.random() * 30 + 1)} days, ${Math.floor(Math.random() * 24)}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')},  1 user,  load average: 0.${Math.floor(Math.random() * 90 + 10)}, 0.${Math.floor(Math.random() * 90 + 10)}, 0.${Math.floor(Math.random() * 90 + 10)}`, type: 'info' }]); return
    }

    addLines([{ text: `Command not found: ${base}. Type "help" for available commands.`, type: 'error' }])
  }, [addLines, cmdHistory])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim() && !isProcessing) {
      handleCommand(input)
      setInput('')
    }
    // Arrow up/down for history
    if (e.key === 'ArrowUp' && cmdHistory.length > 0) {
      e.preventDefault()
      const newIdx = historyIdx < cmdHistory.length - 1 ? historyIdx + 1 : historyIdx
      setHistoryIdx(newIdx)
      setInput(cmdHistory[cmdHistory.length - 1 - newIdx] || '')
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const newIdx = historyIdx > 0 ? historyIdx - 1 : -1
      setHistoryIdx(newIdx)
      setInput(newIdx >= 0 ? cmdHistory[cmdHistory.length - 1 - newIdx] : '')
    }
  }

  const lineColor = (type) => {
    switch (type) {
      case 'success': return '#00FF9C'
      case 'error': return '#FF2D55'
      case 'warn': return '#FFB300'
      case 'cmd': return '#4A9EFF'
      default: return '#8899AA'
    }
  }

  return (
    <div className="cyber-terminal-page">
      <div className="ctp-inner">
        <div className="ctp-layout">
          <div className="ctp-terminal" onClick={focusInput}>
            <div className="ctp-bar">
              <div className="ctp-dots">
                <span className="ctp-dot red" />
                <span className="ctp-dot yellow" />
                <span className="ctp-dot green" />
              </div>
              <span className="ctp-bar-title">preet@cybersec — bash — 80×24</span>
            </div>
            <div className="ctp-body" ref={termBodyRef}>
              {lines.map((line, i) => (
                <div key={i} className="ctp-line" style={{ color: lineColor(line.type) }}>
                  {line.text}
                </div>
              ))}
              <div className="ctp-input-row">
                <span className="ctp-prompt">preet@cyber:~$&nbsp;</span>
                <input
                  ref={inputRef}
                  type="text"
                  className="ctp-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isProcessing}
                  autoFocus
                  spellCheck={false}
                  autoComplete="off"
                />
                <span className="ctp-blink" />
              </div>
            </div>
          </div>

          <div className="ctp-panel">
            <div className="ctp-panel-badge">◆ INTERACTIVE TERMINAL V3.0</div>
            <h2 className="ctp-panel-title">Hacking<br />Simulator</h2>
            <p className="ctp-panel-desc">
              Explore a full penetration testing environment.
              Run scans, crack hashes, exploit targets, brute force
              SSH, dump SQL databases, and trace IP routes.
            </p>

            <div className="ctp-quick">
              <span className="ctp-quick-label">RECON:</span>
              <div className="ctp-quick-grid">
                {['scan', 'ping', 'nslookup', 'whois', 'trace'].map(cmd => (
                  <button key={cmd} className="ctp-quick-btn" onClick={() => { if (!isProcessing) handleCommand(cmd) }}>{cmd}</button>
                ))}
              </div>
            </div>
            <div className="ctp-quick">
              <span className="ctp-quick-label">EXPLOIT:</span>
              <div className="ctp-quick-grid">
                {['crack', 'exploit', 'bruteforce', 'sqli', 'decrypt'].map(cmd => (
                  <button key={cmd} className="ctp-quick-btn exploit" onClick={() => { if (!isProcessing) handleCommand(cmd) }}>{cmd}</button>
                ))}
              </div>
            </div>
            <div className="ctp-quick">
              <span className="ctp-quick-label">SYSTEM:</span>
              <div className="ctp-quick-grid">
                {['neofetch', 'status', 'whoami', 'ifconfig', 'matrix'].map(cmd => (
                  <button key={cmd} className="ctp-quick-btn system" onClick={() => { if (!isProcessing) handleCommand(cmd) }}>{cmd}</button>
                ))}
              </div>
            </div>

            <div className="ctp-stats">
              <div className="ctp-stat">
                <span className="ctp-stat-val">{cmdCount}</span>
                <span className="ctp-stat-lbl">COMMANDS</span>
              </div>
              <div className="ctp-stat">
                <span className="ctp-stat-val">{Object.keys(fileSystem).length}</span>
                <span className="ctp-stat-lbl">FILES</span>
              </div>
              <div className="ctp-stat">
                <span className="ctp-stat-val">L4</span>
                <span className="ctp-stat-lbl">ACCESS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
