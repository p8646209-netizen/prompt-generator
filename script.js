// Gemini API Configuration
const GEMINI_API_KEY = 'AIzaSyAzSQ'; // Replace with your actual API key
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

// Tab switching
function switchTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Show selected tab and mark button as active
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// Chat functionality
async function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    
    if (!message) return;
    
    // Display user message
    displayMessage(message, 'user');
    userInput.value = '';
    
    // Show loading indicator
    showLoadingIndicator();
    
    try {
        // Call Gemini API
        const response = await callGeminiAPI(message);
        displayMessage(response, 'ai');
    } catch (error) {
        console.error('Error:', error);
        displayMessage('Sorry, something went wrong. Please check your API key.', 'ai');
    }
}

function displayMessage(message, sender) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = message;
    
    messageDiv.appendChild(contentDiv);
    messagesContainer.appendChild(messageDiv);
    
    // Auto scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showLoadingIndicator() {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ai';
    messageDiv.id = 'loadingMessage';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content loading';
    contentDiv.innerHTML = '<span></span><span></span><span></span>';
    
    messageDiv.appendChild(contentDiv);
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function removeLoadingIndicator() {
    const loading = document.getElementById('loadingMessage');
    if (loading) loading.remove();
}

async function callGeminiAPI(prompt) {
    const requestBody = {
        contents: [
            {
                parts: [
                    {
                        text: prompt
                    }
                ]
            }
        ]
    };

    try {
        const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        removeLoadingIndicator();
        
        if (data.candidates && data.candidates[0] && data.candidates[0].content) {
            return data.candidates[0].content.parts[0].text;
        } else {
            return 'No response received from AI.';
        }
    } catch (error) {
        removeLoadingIndicator();
        throw error;
    }
}

// Prompt Generator functionality
let selectedVideoFile = null;

function handleVideoUpload() {
    const fileInput = document.getElementById('videoFile');
    const file = fileInput.files[0];
    
    if (file) {
        selectedVideoFile = file;
        const fileInfo = document.getElementById('fileInfo');
        fileInfo.textContent = `✅ Selected: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`;
    }
}

async function generatePrompt() {
    if (!selectedVideoFile) {
        alert('Please select a video file first!');
        return;
    }
    
    const promptOutput = document.getElementById('promptOutput');
    promptOutput.value = '⏳ Analyzing video... Please wait...';
    
    try {
        // Read video file as base64
        const base64Video = await fileToBase64(selectedVideoFile);
        
        // Call Gemini API with video analysis prompt
        const analysisPrompt = `Analyze this video and provide a detailed prompt that someone could use to recreate a similar video. Include:
        1. Video length
        2. Style/tone (funny, motivational, educational, trending, etc)
        3. Key elements and hooks
        4. Fast-paced elements, transitions, or special effects
        5. Music/audio style if applicable
        6. Text overlays or captions
        7. Call to action
        8. Trending elements visible
        
        Format the output as a complete, ready-to-use prompt that starts with "Create a [length] video..."`;
        
        const response = await callGeminiAPIWithVideo(base64Video, analysisPrompt);
        promptOutput.value = response;
    } catch (error) {
        console.error('Error:', error);
        promptOutput.value = `❌ Error: ${error.message}\n\nMake sure:\n1. Your API key is correct\n2. The video file is not too large\n3. Check browser console for details`;
    }
}

function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const result = reader.result.split(',')[1];
            resolve(result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

async function callGeminiAPIWithVideo(base64Video, prompt) {
    const requestBody = {
        contents: [
            {
                parts: [
                    {
                        text: prompt
                    },
                    {
                        inline_data: {
                            mime_type: 'video/mp4',
                            data: base64Video
                        }
                    }
                ]
            }
        ]
    };

    try {
        const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        
        if (data.candidates && data.candidates[0] && data.candidates[0].content) {
            return data.candidates[0].content.parts[0].text;
        } else {
            return 'No response received. Check your API key and try again.';
        }
    } catch (error) {
        throw error;
    }
}

function copyPrompt() {
    const promptOutput = document.getElementById('promptOutput');
    
    if (!promptOutput.value) {
        alert('No prompt to copy!');
        return;
    }
    
    navigator.clipboard.writeText(promptOutput.value).then(() => {
        alert('✅ Prompt copied to clipboard!');
    }).catch(() => {
        alert('Failed to copy. Please try again.');
    });
}

// Enter key to send message
document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('userInput');
    if (userInput) {
        userInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                sendMessage();
            }
        });
    }
});
