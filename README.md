# 🤖 AI Chatbot + Prompt Generator

A powerful web application that combines an AI chatbot powered by Google Gemini with an intelligent video-to-prompt generator. Upload any viral video and get an exact prompt to recreate similar content!

## ✨ Features

### 💬 AI Chatbot
- Real-time chat with Google Gemini AI
- Better than ChatGPT - powered by advanced language models
- Free to use (powered by Google's free tier)
- Clean, intuitive interface
- Chat history in session
- Keyboard shortcuts (Enter to send, Shift+Enter for new line)

### 🎬 Prompt Generator
- Upload any video file (MP4, WebM, etc.)
- AI analyzes video content, style, and structure
- Generates exact prompts that include:
  - Video length
  - Style/tone (funny, motivational, educational, trending, etc.)
  - Key hooks and elements
  - Fast-paced effects and transitions
  - Music/audio style
  - Text overlays and captions
  - Call to action
  - Trending elements
- Copy prompts with one click
- Use generated prompts on any platform

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Google Gemini API key (free)

### Step 1: Get Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Click "Create API Key"
3. Copy your API key

### Step 2: Update the API Key

1. Open `script.js`
2. Find this line (Line 2):
   ```javascript
   const GEMINI_API_KEY = 'AIzaSyAzSQ'; // Replace with your actual API key
   ```
3. Replace `'AIzaSyAzSQ'` with your actual API key:
   ```javascript
   const GEMINI_API_KEY = 'YOUR_ACTUAL_API_KEY_HERE';
   ```

### Step 3: Open the Website

1. Download all files or clone this repository
2. Open `index.html` in your web browser
3. Done! 🎉

## 📖 How to Use

### Chatbot Tab
1. Click the **💬 Chat** tab
2. Type your question or message
3. Press **Enter** or click **Send**
4. Wait for AI response
5. Continue the conversation

### Prompt Generator Tab
1. Click the **🎬 Prompt Generator** tab
2. Select a video file from your computer
3. Click **Generate Prompt from Video**
4. Wait for AI to analyze the video
5. Review the generated prompt
6. Click **Copy Prompt** to copy to clipboard
7. Use the prompt on any content creation platform!

## 🎯 Use Cases

### For Content Creators
- **Recreate Viral Videos**: Upload a viral video and get exact instructions to create similar content
- **Content Inspiration**: Generate prompts from videos you find inspiring
- **Platform-Specific Content**: Generate prompts for TikTok, YouTube, Instagram, Facebook, etc.
- **Batch Content Creation**: Generate multiple prompts and create content efficiently

### For AI Chatbot
- **General Questions**: Ask anything!
- **Content Ideas**: Get ideas for your next video
- **Script Writing**: Get help writing scripts
- **Brainstorming**: Collaborate with AI on content strategy

## 🔧 Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **API**: Google Gemini API
- **Video Processing**: Browser-native FileReader API
- **Storage**: Browser LocalStorage (optional enhancement)

## 📱 Browser Compatibility

- ✅ Chrome/Chromium (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Mobile browsers (some limitations with video upload)

## ⚙️ Configuration

### Video File Size Limits
- **Recommended**: Max 50MB per video
- **Optimal**: 5-20MB for faster processing

### API Rate Limits
Google Gemini Free tier includes:
- 60 requests per minute
- 1500 requests per day
- Sufficient for personal use

## 🐛 Troubleshooting

### "Invalid API Key" Error
- Check that you've replaced the API key in `script.js`
- Make sure there are no extra spaces or quotes
- Regenerate the key at Google AI Studio

### Video Upload Not Working
- Use MP4 format (most compatible)
- Check file size (max 50MB)
- Try a different video
- Clear browser cache and try again

### Slow Response Times
- Larger videos take longer to analyze
- Check your internet connection
- Google's servers may be temporarily busy
- Try again in a few moments

### API Quota Exceeded
- You've reached the daily limit
- Wait until tomorrow (UTC)
- Or upgrade to paid Gemini API

## 📝 Tips & Tricks

### Best Results for Prompt Generation
1. Use clear, well-lit videos
2. Upload videos with obvious visual elements
3. Include videos with text overlays (AI can read them)
4. Shorter videos process faster

### Chatbot Tips
1. Ask specific questions for better answers
2. You can ask follow-up questions
3. Use shift+enter for multi-line messages
4. The AI remembers context in your conversation

## 🔒 Privacy & Security

- ✅ All processing is client-side (your browser)
- ✅ Videos are sent to Gemini API only for analysis
- ✅ No data is stored on our servers
- ✅ Your API key stays in your browser
- ⚠️ Keep your API key private!

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Found a bug? Have a feature idea? Feel free to open an issue or submit a pull request!

## 📞 Support

- Check troubleshooting section above
- Visit [Google Gemini API Docs](https://ai.google.dev/)
- Open an issue on GitHub

## 🎓 Learn More

- [Google Gemini API](https://ai.google.dev/)
- [Web APIs Documentation](https://developer.mozilla.org/en-US/docs/Web/API)
- [Video Content Creation Tips](https://www.youtube.com/results?search_query=viral+video+creation)

---

**Made with ❤️ for content creators**

**Start creating viral content today!** 🚀
