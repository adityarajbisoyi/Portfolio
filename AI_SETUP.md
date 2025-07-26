# AI Chatbot Setup

## Overview
The portfolio now features a real AI-powered chatbot using OpenAI's GPT technology!

## Features
- 🤖 **Real AI Responses**: Powered by OpenAI's GPT-3.5-turbo
- 🎭 **Transformers Personality**: AI trained on portfolio context
- 🔄 **Fallback System**: Works even without API key
- 💬 **Natural Conversations**: Ask anything about Aditya's work
- 🚀 **Performance**: Optimized response times

## Setup Instructions

### 1. Get OpenAI API Key
1. Visit [OpenAI Platform](https://platform.openai.com)
2. Create an account and get your API key
3. Add billing information (required for API access)

### 2. Configure Environment
1. Copy `.env.local` file (already created)
2. Replace `your_openai_api_key_here` with your actual API key:
   ```
   VITE_OPENAI_API_KEY=sk-your-actual-api-key-here
   ```

### 3. Test the Chatbot
1. Run `npm run dev`
2. Click the chatbot icon in bottom-right corner
3. Ask questions like:
   - "Tell me about Aditya's projects"
   - "What technologies does he use?"
   - "How can I contact him?"
   - "What's your favorite Transformer?"

## Security Notes
⚠️ **IMPORTANT**: The current setup exposes the API key in the browser (for development only)

For production, you should:
1. Create a backend API endpoint
2. Handle OpenAI requests on the server
3. Never expose API keys in client-side code

## How It Works
1. **AIService**: Manages OpenAI communication
2. **Context**: AI trained on portfolio information
3. **Fallback**: Uses rule-based responses if API fails
4. **UI**: Seamless integration with existing chat interface

## Customization
Edit `src/services/aiService.js` to:
- Modify the AI's personality
- Add more portfolio context
- Adjust response parameters
- Update fallback responses

Enjoy your new AI assistant! 🚀
