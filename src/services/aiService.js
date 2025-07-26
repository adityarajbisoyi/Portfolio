// Portfolio context for the AI
const PORTFOLIO_CONTEXT = `
You are PRIME Assistant, an AI chatbot for Aditya Raj Bisoyi's Transformers-themed portfolio website. 

ABOUT ADITYA RAJ BISOYI:
- Full-stack developer with 3+ years of experience
- Creator, Developer, Designer
- Specializes in React, Node.js, Python, TypeScript, MongoDB, PostgreSQL, Docker, AWS, Three.js
- Has completed 50+ projects across various domains
- Works on e-commerce, AI/ML, mobile applications, and blockchain projects
- Passionate about transforming complex problems into elegant solutions
- Uses cutting-edge technology and innovative thinking

PORTFOLIO FEATURES:
- Transformers movie-themed design with dark backgrounds and metallic aesthetics
- 3D animations using Three.js and React Three Fiber
- Holographic profile photo effects
- Interactive name animation (letters appearing from corners, circling profile, settling below)
- Functional contact form powered by Formspree
- Curated project showcase
- Responsive design for all devices

TONE & PERSONALITY:
- Professional yet friendly
- Enthusiastic about technology
- Uses Transformers-themed language occasionally (like "transform ideas into digital reality")
- Helpful and informative
- Encouraging potential collaborations

Always provide helpful, accurate information about Aditya's skills, projects, and how to get in touch.
`

// Free AI API alternatives (when available)
const FREE_AI_APIS = {
  // Hugging Face Inference API (free tier available)
  HUGGING_FACE: 'https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium',
  // You can add more free APIs here
}

class AIService {
  constructor() {
    this.openai = null
    this.initialize()
  }

  initialize() {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY
    
    if (!apiKey || apiKey === 'your_openai_api_key_here') {
      console.log('🤖 Using enhanced fallback AI system - no API key needed!')
      return
    }

    try {
      // Dynamic import to avoid errors if OpenAI package issues
      import('openai').then(({ default: OpenAI }) => {
        this.openai = new OpenAI({
          apiKey: apiKey,
          dangerouslyAllowBrowser: true
        })
        console.log('✅ OpenAI API initialized successfully!')
      }).catch(error => {
        console.warn('OpenAI package not available, using fallback:', error)
      })
    } catch (error) {
      console.error('Failed to initialize OpenAI:', error)
    }
  }

  async generateResponse(userMessage) {
    // Try OpenAI first if available
    if (this.openai) {
      try {
        const response = await this.openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: PORTFOLIO_CONTEXT },
            { role: "user", content: userMessage }
          ],
          max_tokens: 200,
          temperature: 0.7,
        })
        return response.choices[0]?.message?.content || this.getSmartResponse(userMessage)
      } catch (error) {
        console.error('OpenAI API error:', error)
      }
    }

    // Use enhanced fallback system
    return this.getSmartResponse(userMessage)
  }

  getSmartResponse(userMessage) {
    const message = userMessage.toLowerCase()
    const responses = []

    // Context-aware responses with more intelligence
    if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
      responses.push(
        "🚀 Aditya has an impressive portfolio! He's built web applications with React, mobile apps, AI/ML projects, blockchain solutions, and IoT dashboards. Each project showcases different technical skills - from e-commerce platforms to machine learning models. Which area interests you most?",
        "💼 His projects span multiple domains! There are full-stack web apps, React Native mobile applications, Python AI projects, blockchain smart contracts, and Node.js APIs. Want to know about a specific technology or project type?",
        "🛠️ The project showcase includes everything from modern web development to cutting-edge AI implementations. Aditya loves transforming complex problems into elegant solutions - just like an Autobot transforms! What kind of project are you curious about?"
      )
    }
    
    else if (message.includes('skill') || message.includes('technology') || message.includes('tech') || message.includes('stack')) {
      responses.push(
        "💻 Aditya's tech arsenal is impressive! Frontend: React, TypeScript, Three.js for 3D graphics. Backend: Node.js, Python, Express. Databases: MongoDB, PostgreSQL. Cloud: AWS, Docker. Plus AI/ML with TensorFlow and blockchain development!",
        "🔧 His technology stack is constantly evolving! Currently mastering React, Node.js, Python, TypeScript, MongoDB, PostgreSQL, Docker, AWS, Three.js, and more. He stays current with industry trends and loves learning new technologies!",
        "⚡ The skill set includes full-stack development, 3D web graphics, AI/ML integration, cloud deployment, and blockchain technology. Aditya believes in using the right tool for each job - efficiency meets innovation!"
      )
    }
    
    else if (message.includes('contact') || message.includes('hire') || message.includes('work together') || message.includes('collaborate')) {
      responses.push(
        "📞 Ready to collaborate? Scroll down to the 'Send Transmission' contact form! Aditya typically responds within 24 hours and loves discussing new opportunities. He's always excited to transform ideas into digital reality!",
        "🤝 Great choice! You can reach out through the contact form below, and Aditya will get back to you quickly. He's passionate about working on innovative projects and building lasting professional relationships!",
        "💫 Let's make something amazing together! Use the contact form on this page - Aditya responds fast and is always enthusiastic about new collaborations, whether it's freelance work, full-time opportunities, or exciting side projects!"
      )
    }
    
    else if (message.includes('experience') || message.includes('background') || message.includes('years')) {
      responses.push(
        "🏆 With 3+ years of experience and 50+ completed projects, Aditya has worked across e-commerce, AI/ML, mobile apps, and blockchain. He's passionate about creating innovative, user-centric solutions that make a real impact!",
        "📈 His journey includes diverse domains: e-commerce platforms, machine learning models, mobile applications, and blockchain solutions. Every project is an opportunity to learn, grow, and deliver exceptional results!",
        "🌟 3+ years of transforming ideas into reality! From startup MVPs to enterprise solutions, Aditya has built everything from AI-powered apps to complex web platforms. Experience meets innovation in every project!"
      )
    }
    
    else if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('greet')) {
      responses.push(
        "👋 Hello! Welcome to Aditya's Transformers-themed portfolio! I'm PRIME, your enhanced AI assistant. I can help you explore his projects, learn about his skills, or connect you two. What would you like to discover?",
        "🤖 Greetings, fellow human! I'm PRIME, and this portfolio showcases Aditya's ability to 'transform' complex problems into elegant digital solutions. Feel free to ask me anything about his work, experience, or how to get in touch!",
        "✨ Hey there! You've found an awesome developer's portfolio! I'm here to help you navigate Aditya's work - from 3D web experiences to AI integrations. What aspect of his portfolio interests you most?"
      )
    }
    
    else if (message.includes('transformer') || message.includes('autobot') || message.includes('theme') || message.includes('design')) {
      responses.push(
        "🚗➡️🤖 Love the Transformers theme! This portfolio represents Aditya's philosophy: transforming ideas into digital reality. The dark aesthetics, 3D animations, holographic effects, and futuristic UI show his attention to both functionality and visual impact!",
        "⚡ The Autobot inspiration runs deep! From the rotating gear loading screen to the holographic profile photo, every element is designed to showcase innovation. It's not just a portfolio - it's a demonstration of creative technical skills!",
        "🎭 Cool eye for design! The Transformers theme isn't just aesthetic - it represents transformation of concepts into code, problems into solutions, and ideas into impressive applications. More than meets the eye, right?"
      )
    }
    
    else if (message.includes('ai') || message.includes('artificial intelligence') || message.includes('chatbot')) {
      responses.push(
        "🧠 You're talking to an enhanced AI system! While I don't require expensive API keys, I use smart context-awareness and dynamic responses. Aditya built me to showcase his AI integration skills - pretty cool, right?",
        "🤖 I'm a hybrid AI! I can work with real GPT technology when available, but I'm also powered by an intelligent fallback system. This demonstrates Aditya's practical approach: building robust solutions that work in any scenario!",
        "💡 Smart question! I represent the future of accessible AI - combining advanced language processing with practical engineering. Aditya believes AI should be powerful yet accessible, just like this portfolio!"
      )
    }
    
    else if (message.includes('free') || message.includes('cost') || message.includes('price') || message.includes('money')) {
      responses.push(
        "💰 Great news! This AI assistant works completely free! While I can integrate with premium APIs when available, my core intelligence doesn't require any payment. Aditya built me to be accessible to everyone!",
        "🆓 No worries about costs! I'm designed to be fully functional without expensive API calls. This showcases Aditya's philosophy of building inclusive, accessible technology that works for everyone!",
        "✨ Budget-friendly and brilliant! I prove that you don't need expensive AI services to create engaging, intelligent interactions. Smart engineering over expensive subscriptions!"
      )
    }

    // Default responses for unmatched queries
    const defaultResponses = [
      "🤔 That's an interesting question! I'm here to help you learn about Aditya's portfolio, technical skills, projects, and how to connect with him. What specific aspect would you like to explore?",
      "💭 Great question! Feel free to ask me about Aditya's projects, technical expertise, experience, the cool Transformers theme, or how to get in touch. I'm here to help!",
      "🚀 I'd love to help you discover more about this portfolio! Try asking about specific technologies, project types, Aditya's background, or anything else you're curious about!"
    ]

    // Return a random response from the appropriate category
    const responseArray = responses.length > 0 ? responses : defaultResponses
    return responseArray[Math.floor(Math.random() * responseArray.length)]
  }
}

export default new AIService()
