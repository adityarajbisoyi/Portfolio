// Portfolio context for the AI
const PORTFOLIO_CONTEXT = `
You are an AI assistant for Aditya Raj Bisoyi's portfolio website. 

ABOUT ADITYA RAJ BISOYI:
- Full-stack developer with 3+ years of experience
- Creator, Developer, Designer
- Specializes in React, Node.js, Python, TypeScript, MongoDB, PostgreSQL, Docker, AWS, Three.js
- Has completed 50+ projects across various domains
- Works on e-commerce, AI/ML, mobile applications, and blockchain projects
- Passionate about transforming complex problems into elegant solutions
- Uses cutting-edge technology and innovative thinking

PORTFOLIO FEATURES:
- Clean professional design with dark theme
- Smooth animations using Framer Motion
- Profile photo display
- Interactive AI assistant
- Functional contact form powered by Formspree
- Curated project showcase
- Responsive design for all devices

TONE & PERSONALITY:
- Professional yet friendly
- Enthusiastic about technology
- Helpful and informative
- Encouraging potential collaborations

Always provide helpful, accurate information about Aditya's skills, projects, and how to get in touch.
`

// Free AI API alternatives (when available)
const FREE_AI_APIS = {
  HUGGING_FACE: 'https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium',
}

class AIService {
  constructor() {
    this.openai = null
    this.initialize()
  }

  initialize() {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY
    
    if (!apiKey || apiKey === 'your_openai_api_key_here') {
      console.log('Using enhanced fallback AI system - no API key needed.')
      return
    }

    try {
      import('openai').then(({ default: OpenAI }) => {
        this.openai = new OpenAI({
          apiKey: apiKey,
          dangerouslyAllowBrowser: true
        })
        console.log('OpenAI API initialized successfully.')
      }).catch(error => {
        console.warn('OpenAI package not available, using fallback:', error)
      })
    } catch (error) {
      console.error('Failed to initialize OpenAI:', error)
    }
  }

  async generateResponse(userMessage) {
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

    return this.getSmartResponse(userMessage)
  }

  getSmartResponse(userMessage) {
    const message = userMessage.toLowerCase()
    const responses = []

    if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
      responses.push(
        "Aditya has an impressive portfolio. He has built web applications with React, mobile apps, AI/ML projects, blockchain solutions, and IoT dashboards. Each project showcases different technical skills - from e-commerce platforms to machine learning models. Which area interests you most?",
        "His projects span multiple domains: full-stack web apps, React Native mobile applications, Python AI projects, blockchain smart contracts, and Node.js APIs. Would you like to know about a specific technology or project type?",
        "The project showcase includes everything from modern web development to cutting-edge AI implementations. Aditya excels at turning complex problems into elegant solutions. What kind of project are you curious about?"
      )
    }
    
    else if (message.includes('skill') || message.includes('technology') || message.includes('tech') || message.includes('stack')) {
      responses.push(
        "Aditya's tech stack is impressive. Frontend: React, TypeScript, Three.js for 3D graphics. Backend: Node.js, Python, Express. Databases: MongoDB, PostgreSQL. Cloud: AWS, Docker. Plus AI/ML with TensorFlow and blockchain development.",
        "His technology stack is constantly evolving. Currently mastering React, Node.js, Python, TypeScript, MongoDB, PostgreSQL, Docker, AWS, Three.js, and more. He stays current with industry trends and loves learning new technologies.",
        "The skill set includes full-stack development, 3D web graphics, AI/ML integration, cloud deployment, and blockchain technology. Aditya believes in using the right tool for each job - efficiency meets innovation."
      )
    }
    
    else if (message.includes('contact') || message.includes('hire') || message.includes('work together') || message.includes('collaborate')) {
      responses.push(
        "You can reach out through the contact form on this page. Aditya typically responds within 24 hours and is always excited to discuss new opportunities.",
        "Great choice! Use the contact form below, and Aditya will get back to you quickly. He is passionate about working on innovative projects and building lasting professional relationships.",
        "Send a message through the contact form on this page - Aditya responds promptly and is always enthusiastic about new collaborations, whether freelance work, full-time opportunities, or exciting side projects."
      )
    }
    
    else if (message.includes('experience') || message.includes('background') || message.includes('years')) {
      responses.push(
        "With 3+ years of experience and 50+ completed projects, Aditya has worked across e-commerce, AI/ML, mobile apps, and blockchain. He is passionate about creating innovative, user-centric solutions that make a real impact.",
        "His journey includes diverse domains: e-commerce platforms, machine learning models, mobile applications, and blockchain solutions. Every project is an opportunity to learn, grow, and deliver exceptional results.",
        "3+ years of building impactful solutions. From startup MVPs to enterprise applications, Aditya has built everything from AI-powered apps to complex web platforms. Experience meets innovation in every project."
      )
    }
    
    else if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('greet')) {
      responses.push(
        "Hello! Welcome to Aditya's portfolio. I can help you explore his projects, learn about his skills, or connect you two. What would you like to discover?",
        "Hi there! This portfolio showcases Aditya's ability to solve complex problems with elegant digital solutions. Feel free to ask me anything about his work, experience, or how to get in touch.",
        "Hey! You have found a great developer's portfolio. I am here to help you navigate Aditya's work - from web experiences to AI integrations. What interests you most?"
      )
    }
    
    else if (message.includes('theme') || message.includes('design')) {
      responses.push(
        "This portfolio features a clean, professional design with smooth animations and a focus on readability. Every element is crafted to showcase Aditya's attention to both functionality and visual impact.",
        "The design philosophy here is minimalism meets professionalism. Dark backgrounds, subtle accents, and smooth transitions create an engaging experience that lets the work speak for itself.",
        "Great eye for design! The clean aesthetic reflects Aditya's approach to development: thoughtful, precise, and user-focused. Every detail serves a purpose."
      )
    }
    
    else if (message.includes('ai') || message.includes('artificial intelligence') || message.includes('chatbot')) {
      responses.push(
        "I am an AI assistant built to help visitors navigate this portfolio. Aditya built me to showcase his AI integration skills and provide a better user experience.",
        "I am a smart assistant powered by context-aware response systems. This demonstrates Aditya's practical approach: building robust solutions that work reliably in any scenario.",
        "I represent accessible AI - combining intelligent processing with practical engineering. Aditya believes AI should be powerful yet practical, just like this portfolio."
      )
    }

    const defaultResponses = [
      "That is an interesting question! I am here to help you learn about Aditya's portfolio, technical skills, projects, and how to connect with him. What specific aspect would you like to explore?",
      "Great question! Feel free to ask me about Aditya's projects, technical expertise, experience, the design, or how to get in touch. I am here to help.",
      "I would love to help you discover more about this portfolio. Try asking about specific technologies, project types, Aditya's background, or anything else you are curious about."
    ]

    const responseArray = responses.length > 0 ? responses : defaultResponses
    return responseArray[Math.floor(Math.random() * responseArray.length)]
  }
}

export default new AIService()
