# 🤖 Transformers Portfolio Website

A futuristic, Transformers movie-inspired portfolio website featuring dark themes, 3D animations, holographic effects, and an AI chatbot assistant.

## ✨ Features

### AC1: Transformers Movie Theme
- **Dark Background**: Immersive dark theme with metallic and cybernetic aesthetics
- **3D & Robotic Animations**: Interactive 3D elements using Three.js
- **Metallic Sound Effects**: Dynamic audio feedback on button clicks and interactions
- **Loading Screen**: Rotating gears that form a cube animation
- **Holographic Profile**: Stunning holographic effect for profile photo

### AC2: AI Chatbot
- **PRIME Assistant**: Interactive AI chatbot for user assistance
- **Smart Responses**: Context-aware responses about projects, skills, and contact
- **Real-time Chat**: Smooth chat interface with typing indicators
- **Futuristic Design**: Cyberpunk-themed chat UI

## 🚀 Technology Stack

- **Frontend**: React 18 with Vite
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion
- **Styling**: Styled Components
- **Typography**: Orbitron font family
- **Audio**: Web Audio API for sound effects

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── LoadingScreen.jsx    # Rotating gears loading animation
│   ├── Portfolio.jsx        # Main portfolio container
│   ├── HolographicProfile.jsx # Holographic profile photo effect
│   ├── Navigation.jsx       # Futuristic navigation bar
│   ├── Hero.jsx            # Hero section with 3D elements
│   ├── About.jsx           # About section with skills
│   ├── Projects.jsx        # Projects showcase with filters
│   ├── Contact.jsx         # Contact form and information
│   ├── ChatBot.jsx         # AI assistant chatbot
│   └── SoundManager.jsx    # Audio effects management
├── App.jsx                 # Main application component
├── main.jsx               # React entry point
└── index.css              # Global styles
```

## 🎨 Design Features

### Visual Effects
- Holographic scanning effects
- Neon glow animations
- Metallic surface textures
- 3D geometric elements
- Particle systems
- Gradient overlays

### Interactive Elements
- Hover animations with sound
- Click feedback with metallic sounds
- Smooth scrolling navigation
- Responsive 3D objects
- Dynamic loading states

### Accessibility
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Responsive design
- High contrast colors

## 🤖 AI Chatbot Features

The PRIME Assistant can help with:
- Information about projects and technologies
- Technical skills and experience details
- Contact information and availability
- Portfolio navigation assistance
- General questions about the developer

## 🔧 Customization

### Adding Your Profile Photo
Replace the placeholder in `HolographicProfile.jsx` with your actual photo to see the holographic effect in action.

### Updating Project Information
Modify the projects array in `Projects.jsx` to showcase your own work.

### Customizing Colors
Update the theme object in `App.jsx` to change the color scheme.

### Sound Effects
Adjust audio parameters in `SoundManager.jsx` to customize sound effects.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile devices
- Various screen sizes and orientations

## 🌟 Performance Optimizations

- Lazy loading of 3D components
- Optimized animations with Framer Motion
- Efficient Three.js rendering
- Minimized bundle size
- Progressive enhancement

## 🚀 Deployment

The project can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Build command: `npm run build`
Output directory: `dist`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

*Transform your ideas into digital reality* 🚀+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
