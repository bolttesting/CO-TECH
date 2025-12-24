# CoTech - High-Precision BLE Location Tracking (RTLS)

A modern React application showcasing CoTech's Bluetooth AoA technology for real-time location tracking.

## Features

- **Modern React + TypeScript** - Built with Vite for fast development
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Full-Screen Sections** - Each section fills the viewport for optimal viewing
- **Interactive Components** - Video modals, infographic viewers, and smooth scrolling
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Color Scheme** - Uses brand colors: #fbcc14 (yellow), #2563eb (blue), #ffffff (white)

## Getting Started

### Prerequisites

- Node.js (v22.11.0 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Technology.tsx  # Technology overview
│   ├── TechDeepDive.tsx # Video section
│   ├── UseCaseDemos.tsx # Use case demos with video modals
│   ├── VisualSolutions.tsx # Visual infographics (grid layout)
│   ├── ProvenResults.tsx  # Case studies
│   └── Contact.tsx     # Contact form
├── data/               # Data files
│   └── industryData.ts # Industry use case data
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## Key Improvements

1. **Better Visual Layout** - Replaced sliding carousel with a responsive grid layout for infographics
2. **Full-Screen Sections** - Each section fills the viewport height for better user experience
3. **Contact Form** - Added comprehensive contact form from parent company
4. **Color Matching** - Updated all colors to match brand guidelines
5. **Parent Company Link** - Connected header link to https://thecoconsultants.com/

## Technologies Used

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Inter Font (Google Fonts)

## License

© 2025 CoTech | An extension of The CoConsultants Group
