const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Simple chatbot responses (in production, integrate with AI service)
const responses = {
  'fever': 'If you have a fever, rest and stay hydrated. If temperature exceeds 101°F or persists, consult a healthcare provider.',
  'headache': 'For headaches, try rest, hydration, and over-the-counter pain relievers. Persistent headaches should be evaluated by a doctor.',
  'diabetes': 'Diabetes management includes regular monitoring, proper diet, exercise, and medication compliance. Always follow your healthcare provider\'s advice.',
  'blood pressure': 'Monitor your blood pressure regularly. Normal range is usually below 120/80. Consult your doctor if readings are consistently high.',
  'default': 'I understand your concern. For personalized medical advice, please consult with a healthcare professional. I can help you track symptoms and find resources.'
};

router.post('/message', auth, async (req, res) => {
  try {
    const { message } = req.body;
    const lowercaseMessage = message.toLowerCase();
    
    let response = responses.default;
    
    // Simple keyword matching (in production, use NLP/AI)
    for (const [keyword, reply] of Object.entries(responses)) {
      if (lowercaseMessage.includes(keyword)) {
        response = reply;
        break;
      }
    }
    
    res.json({ 
      message: response,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ message: 'Error processing chat message', error: error.message });
  }
});

module.exports = router;


