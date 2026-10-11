import fs from 'fs';
import path from 'path';

const svgs = {
  'public/images/coconut-leaf-art/arch-gateway.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="100%" height="100%">
    <defs>
      <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0E2318"/>
        <stop offset="60%" stop-color="#173D2A"/>
        <stop offset="100%" stop-color="#254E36"/>
      </linearGradient>
      <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#96B462"/>
        <stop offset="100%" stop-color="#587438"/>
      </linearGradient>
      <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#F3DC9B"/>
        <stop offset="100%" stop-color="#C9A34E"/>
      </linearGradient>
      <pattern id="wovenPattern" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="#7D9A50" stroke-width="1.5" opacity="0.35"/>
        <path d="M0 0 L40 40 M40 0 L0 40" stroke="#C9A34E" stroke-width="0.8" opacity="0.25"/>
      </pattern>
    </defs>
    <rect width="800" height="1000" fill="url(#skyGrad)"/>
    <rect width="800" height="1000" fill="url(#wovenPattern)" opacity="0.5"/>
    
    <!-- Outer Arch Framework -->
    <path d="M 120 950 L 120 480 Q 400 120 680 480 L 680 950" fill="none" stroke="#A67C2E" stroke-width="16"/>
    <path d="M 180 950 L 180 500 Q 400 200 620 500 L 620 950" fill="none" stroke="#587438" stroke-width="12"/>
    
    <!-- Thoranam Chevron Leaf Strands -->
    <g fill="none" stroke="url(#leafGrad)" stroke-width="8" stroke-linecap="round">
      <path d="M120 900 L180 860 M120 840 L180 800 M120 780 L180 740 M120 720 L180 680 M120 660 L180 620 M120 600 L180 560 M120 540 L180 500"/>
      <path d="M180 900 L120 860 M180 840 L120 800 M180 780 L120 740 M180 720 L120 680 M180 660 L120 620 M180 600 L120 560 M180 540 L120 500"/>
      <path d="M620 900 L680 860 M620 840 L680 800 M620 780 L680 740 M620 720 L680 680 M620 660 L680 620 M620 600 L680 560 M620 540 L680 500"/>
      <path d="M680 900 L620 860 M680 840 L620 800 M680 780 L620 740 M680 720 L620 680 M680 660 L620 620 M680 600 L620 560 M680 540 L620 500"/>
    </g>

    <!-- Arch Top Sunburst / Peacock Motif -->
    <circle cx="400" cy="280" r="60" fill="#C9A34E" opacity="0.85"/>
    <circle cx="400" cy="280" r="45" fill="#173D2A"/>
    <path d="M 400 190 Q 360 250 400 280 Q 440 250 400 190" fill="url(#goldGrad)"/>
    <path d="M 320 220 Q 370 260 400 280 Q 350 280 320 220" fill="url(#leafGrad)"/>
    <path d="M 480 220 Q 430 260 400 280 Q 450 280 480 220" fill="url(#leafGrad)"/>
    
    <!-- Hanging Auspicious Woven Tassels -->
    <g stroke="#C9A34E" stroke-width="2" fill="#7D9A50">
      <line x1="280" y1="360" x2="280" y2="450"/>
      <polygon points="280,450 270,480 290,480"/>
      <line x1="340" y1="320" x2="340" y2="420"/>
      <polygon points="340,420 330,450 350,450"/>
      <line x1="400" y1="340" x2="400" y2="470"/>
      <polygon points="400,470 385,505 415,505"/>
      <line x1="460" y1="320" x2="460" y2="420"/>
      <polygon points="460,420 450,450 470,450"/>
      <line x1="520" y1="360" x2="520" y2="450"/>
      <polygon points="520,450 510,480 530,480"/>
    </g>
    
    <!-- Badge Label Overlay -->
    <rect x="160" y="860" width="480" height="75" rx="6" fill="#0B1A12" fill-opacity="0.9" stroke="#C9A34E" stroke-width="1.5"/>
    <text x="400" y="895" fill="#F8F5ED" font-family="Cormorant Garamond, serif" font-size="24" font-weight="600" text-anchor="middle">TRADITIONAL THORANAM ARCH</text>
    <text x="400" y="920" fill="#C9A34E" font-family="Cinzel, serif" font-size="12" letter-spacing="3" text-anchor="middle">HANDCRAFTED COCONUT LEAF ARTISTRY</text>
  </svg>`,

  'public/images/coconut-leaf-art/sports-meet.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 650" width="100%" height="100%">
    <defs>
      <linearGradient id="bgGrad2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#112A1D"/>
        <stop offset="100%" stop-color="#1D442F"/>
      </linearGradient>
    </defs>
    <rect width="1000" height="650" fill="url(#bgGrad2)"/>
    <!-- Structural Gateway Pillars -->
    <rect x="140" y="180" width="90" height="450" fill="#244D34" stroke="#7D9A50" stroke-width="3"/>
    <rect x="770" y="180" width="90" height="450" fill="#244D34" stroke="#7D9A50" stroke-width="3"/>
    <!-- Overhead Lintel with Woven Chevrons -->
    <rect x="100" y="160" width="800" height="90" fill="#173D2A" stroke="#C9A34E" stroke-width="2"/>
    <!-- Triangular Pediment -->
    <polygon points="100,160 500,40 900,160" fill="#1D4830" stroke="#7D9A50" stroke-width="3"/>
    <circle cx="500" cy="110" r="35" fill="#C9A34E"/>
    <!-- Coconut Frond Woven Strands -->
    <path d="M230 160 L500 50 L770 160" fill="none" stroke="#94B263" stroke-width="6" stroke-dasharray="10 6"/>
    <g fill="none" stroke="#B0CA85" stroke-width="4">
      <path d="M140 220 L230 260 M140 300 L230 340 M140 380 L230 420 M140 460 L230 500"/>
      <path d="M770 220 L860 260 M770 300 L860 340 M770 380 L860 420 M770 460 L860 500"/>
    </g>
    <!-- Label -->
    <rect x="280" y="520" width="440" height="65" rx="4" fill="#0E2318" stroke="#C9A34E" stroke-width="1.5"/>
    <text x="500" y="550" fill="#F8F5ED" font-family="Cormorant Garamond, serif" font-size="22" font-weight="600" text-anchor="middle">SPORTS MEET WELCOME GATEWAY</text>
    <text x="500" y="572" fill="#C9A34E" font-family="Cinzel, serif" font-size="11" letter-spacing="2" text-anchor="middle">BOTANICAL CANOPY INSTALLATION</text>
  </svg>`,

  'public/images/coconut-leaf-art/stage-panel.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700" width="100%" height="100%">
    <rect width="700" height="700" fill="#143323"/>
    <g fill="none" stroke="#7D9A50" stroke-width="3" opacity="0.75">
      <path d="M350 50 L650 350 L350 650 L50 350 Z"/>
      <path d="M350 120 L580 350 L350 580 L120 350 Z"/>
      <path d="M350 190 L510 350 L350 510 L190 350 Z"/>
      <path d="M350 260 L440 350 L350 440 L260 350 Z"/>
    </g>
    <circle cx="350" cy="350" r="55" fill="#C9A34E" stroke="#F8F5ED" stroke-width="2"/>
    <circle cx="350" cy="350" r="25" fill="#173D2A"/>
    <text x="350" y="630" fill="#F8F5ED" font-family="Cormorant Garamond, serif" font-size="20" font-weight="600" text-anchor="middle">WOVEN FLORAL STAGE TAPESTRY</text>
  </svg>`,

  'public/images/event-decoration/stage-decor.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 650" width="100%" height="100%">
    <rect width="1000" height="650" fill="#12281D"/>
    <path d="M 100 0 Q 300 280 500 0 Q 700 280 900 0" fill="none" stroke="#F8F5ED" stroke-width="40" opacity="0.25"/>
    <path d="M 50 0 Q 250 340 500 120 Q 750 340 950 0" fill="none" stroke="#E9E0D0" stroke-width="24" opacity="0.35"/>
    <circle cx="500" cy="300" r="140" fill="none" stroke="#C9A34E" stroke-width="5"/>
    <circle cx="500" cy="300" r="125" fill="none" stroke="#7D9A50" stroke-width="8" stroke-dasharray="12 8"/>
    <rect x="420" y="460" width="160" height="120" rx="4" fill="#1D4330" stroke="#C9A34E" stroke-width="2"/>
    <text x="500" y="525" fill="#F8F5ED" font-family="Cormorant Garamond, serif" font-size="20" text-anchor="middle">CEREMONIAL STAGE</text>
  </svg>`,

  'public/images/event-decoration/welcome-foyer.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="100%" height="100%">
    <rect width="800" height="1000" fill="#163826"/>
    <polygon points="400,180 280,680 520,680" fill="none" stroke="#C9A34E" stroke-width="6"/>
    <rect x="240" y="280" width="320" height="220" rx="8" fill="#F8F5ED" stroke="#C9A34E" stroke-width="3"/>
    <text x="400" y="360" fill="#173D2A" font-family="Cinzel, serif" font-size="16" letter-spacing="3" text-anchor="middle">WELCOME TO</text>
    <text x="400" y="410" fill="#173D2A" font-family="Cormorant Garamond, serif" font-size="32" font-weight="700" text-anchor="middle">THE CELEBRATION</text>
    <circle cx="400" cy="280" r="40" fill="#7D9A50"/>
    <circle cx="400" cy="280" r="20" fill="#C9A34E"/>
    <rect x="160" y="650" width="90" height="180" fill="#1E4833" stroke="#C9A34E" stroke-width="1.5"/>
    <rect x="550" y="650" width="90" height="180" fill="#1E4833" stroke="#C9A34E" stroke-width="1.5"/>
    <circle cx="205" cy="610" r="20" fill="#F3DC9B" opacity="0.8"/>
    <circle cx="595" cy="610" r="20" fill="#F3DC9B" opacity="0.8"/>
  </svg>`,

  'public/images/graphic-design/brand-identity.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 650" width="100%" height="100%">
    <rect width="1000" height="650" fill="#11281D"/>
    <rect x="150" y="120" width="320" height="420" rx="10" fill="#F8F5ED" stroke="#C9A34E" stroke-width="2"/>
    <path d="M310 240 Q 280 180 310 150 Q 340 180 310 240 Z" fill="#173D2A"/>
    <text x="310" y="290" fill="#173D2A" font-family="Cinzel, serif" font-size="18" letter-spacing="3" text-anchor="middle">AATHIRAA</text>
    <text x="310" y="315" fill="#C9A34E" font-family="Cinzel, serif" font-size="12" letter-spacing="2" text-anchor="middle">SOLUTIONS</text>
    <rect x="520" y="160" width="340" height="210" rx="8" fill="#173D2A" stroke="#C9A34E" stroke-width="1.5"/>
    <text x="690" y="250" fill="#F8F5ED" font-family="Cormorant Garamond, serif" font-size="22" text-anchor="middle">CREATIVE IDENTITY</text>
    <text x="690" y="280" fill="#C9A34E" font-family="Plus Jakarta Sans, sans-serif" font-size="12" letter-spacing="1.5" text-anchor="middle">S. ARNOJITH DESIGN PORTFOLIO</text>
  </svg>`,

  'public/images/graphic-design/event-poster.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="100%" height="100%">
    <rect width="800" height="1000" fill="#153624"/>
    <rect x="40" y="40" width="720" height="920" fill="none" stroke="#C9A34E" stroke-width="2"/>
    <rect x="55" y="55" width="690" height="890" fill="none" stroke="#7D9A50" stroke-width="1"/>
    <text x="400" y="180" fill="#C9A34E" font-family="Cinzel, serif" font-size="18" letter-spacing="6" text-anchor="middle">ANNUAL CULTURAL EVENT</text>
    <text x="400" y="260" fill="#F8F5ED" font-family="Cormorant Garamond, serif" font-size="44" font-weight="700" text-anchor="middle">KALAIVIZHA</text>
    <circle cx="400" cy="460" r="140" fill="#1D4932" stroke="#C9A34E" stroke-width="3"/>
    <path d="M400 360 L430 460 L400 560 L370 460 Z" fill="#C9A34E"/>
    <circle cx="400" cy="460" r="50" fill="#7D9A50"/>
    <text x="400" y="720" fill="#F8F5ED" font-family="Plus Jakarta Sans, sans-serif" font-size="18" text-anchor="middle">CREATIVE EVENT PROMOTION POSTER</text>
    <text x="400" y="760" fill="#C9A34E" font-family="Cinzel, serif" font-size="13" letter-spacing="2" text-anchor="middle">TYPOGRAPHY · COMPOSITION · BRANDING</text>
  </svg>`,

  'public/images/graphic-design/invitation-suite.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700" width="100%" height="100%">
    <rect width="700" height="700" fill="#132C1E"/>
    <rect x="80" y="80" width="540" height="540" rx="8" fill="#F8F5ED" stroke="#C9A34E" stroke-width="3"/>
    <path d="M90 90 L160 90 M90 90 L90 160 M610 90 L540 90 M610 90 L610 160" stroke="#C9A34E" stroke-width="3" fill="none"/>
    <path d="M90 610 L160 610 M90 610 L90 540 M610 610 L540 610 M610 610 L610 540" stroke="#C9A34E" stroke-width="3" fill="none"/>
    <text x="350" y="260" fill="#173D2A" font-family="Cinzel, serif" font-size="16" letter-spacing="4" text-anchor="middle">CEREMONIAL INVITATION</text>
    <text x="350" y="330" fill="#173D2A" font-family="Cormorant Garamond, serif" font-size="38" font-style="italic" text-anchor="middle">Grace &amp; Tradition</text>
    <text x="350" y="420" fill="#585F55" font-family="Plus Jakarta Sans, sans-serif" font-size="14" text-anchor="middle">BESPOKE GOLD EMBOSSED STATIONERY</text>
  </svg>`,

  'public/images/technical-services/painting-finishing.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 650" width="100%" height="100%">
    <rect width="1000" height="650" fill="#183D2A"/>
    <rect x="100" y="100" width="800" height="450" fill="#F8F5ED" stroke="#C9A34E" stroke-width="2"/>
    <path d="M200 150 Q 500 200 800 150 L 800 350 Q 500 400 200 350 Z" fill="#315C3B" opacity="0.2"/>
    <circle cx="500" cy="300" r="70" fill="#173D2A" stroke="#C9A34E" stroke-width="2"/>
    <path d="M480 270 L520 270 L520 310 L480 310 Z M500 310 L500 350" stroke="#C9A34E" stroke-width="4" fill="none"/>
    <text x="500" y="440" fill="#173D2A" font-family="Cormorant Garamond, serif" font-size="26" font-weight="600" text-anchor="middle">PRECISION PAINTING &amp; WALL FINISHING</text>
  </svg>`,

  'public/images/technical-services/ceiling-work.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700" width="100%" height="100%">
    <rect width="700" height="700" fill="#11261B"/>
    <g stroke="#7D9A50" stroke-width="2" opacity="0.6">
      <line x1="100" y1="100" x2="600" y2="100"/>
      <line x1="100" y1="250" x2="600" y2="250"/>
      <line x1="100" y1="400" x2="600" y2="400"/>
      <line x1="100" y1="550" x2="600" y2="550"/>
      <line x1="100" y1="100" x2="100" y2="550"/>
      <line x1="250" y1="100" x2="250" y2="550"/>
      <line x1="400" y1="100" x2="400" y2="550"/>
      <line x1="600" y1="100" x2="600" y2="550"/>
    </g>
    <circle cx="175" cy="175" r="25" fill="#F3DC9B" opacity="0.75"/>
    <circle cx="325" cy="325" r="25" fill="#F3DC9B" opacity="0.75"/>
    <circle cx="500" cy="475" r="25" fill="#F3DC9B" opacity="0.75"/>
    <text x="350" y="630" fill="#F8F5ED" font-family="Cormorant Garamond, serif" font-size="20" text-anchor="middle">CEILING FITTING &amp; PANELING</text>
  </svg>`,

  'public/images/branding/aathiraa-logo.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" width="100%" height="100%">
    <defs>
      <linearGradient id="goldLogo" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#C9A34E"/>
        <stop offset="100%" stop-color="#F3DC9B"/>
      </linearGradient>
    </defs>
    <g transform="translate(50, 40)">
      <path d="M50 10 Q 15 50 50 110 Q 85 50 50 10 Z" fill="#315C3B" stroke="#C9A34E" stroke-width="2"/>
      <path d="M50 10 L50 110 M50 40 L30 60 M50 60 L70 80 M50 80 L35 95" stroke="#C9A34E" stroke-width="2" stroke-linecap="round"/>
    </g>
    <text x="180" y="95" fill="#F8F5ED" font-family="Cinzel, serif" font-size="38" font-weight="700" letter-spacing="4">AATHIRAA</text>
    <text x="182" y="130" fill="url(#goldLogo)" font-family="Cinzel, serif" font-size="16" letter-spacing="6">SOLUTIONS</text>
    <text x="182" y="160" fill="#7D9A50" font-family="Plus Jakarta Sans, sans-serif" font-size="12" letter-spacing="1.5">CREATIVE &amp; EVENT SERVICES</text>
  </svg>`,

  'public/images/artist/arnojith-portrait.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="100%" height="100%">
    <rect width="800" height="1000" fill="#12281D"/>
    <circle cx="400" cy="380" r="180" fill="#1E4833" stroke="#C9A34E" stroke-width="3"/>
    <circle cx="400" cy="340" r="85" fill="#315C3B"/>
    <path d="M 230 650 Q 400 480 570 650 L 570 780 L 230 780 Z" fill="#315C3B"/>
    <path d="M 200 400 Q 400 200 600 400" fill="none" stroke="#7D9A50" stroke-width="6" stroke-dasharray="10 8"/>
    <circle cx="400" cy="295" r="12" fill="#C9A34E"/>
    <rect x="160" y="800" width="480" height="120" rx="8" fill="#0B1A12" stroke="#C9A34E" stroke-width="1.5"/>
    <text x="400" y="845" fill="#F8F5ED" font-family="Cormorant Garamond, serif" font-size="30" font-weight="600" text-anchor="middle">S. ARNOJITH</text>
    <text x="400" y="875" fill="#C9A34E" font-family="Cinzel, serif" font-size="12" letter-spacing="2" text-anchor="middle">GRAPHIC DESIGNER &amp; CRAFTSMAN</text>
    <text x="400" y="900" fill="#94B263" font-family="Plus Jakarta Sans, sans-serif" font-size="11" text-anchor="middle">Replace with official artist photograph</text>
  </svg>`
};

for (const [filePath, content] of Object.entries(svgs)) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content.trim(), 'utf8');
  console.log('Created: ' + filePath);
}
