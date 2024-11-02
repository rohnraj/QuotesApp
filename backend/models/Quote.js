const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    
    authorImg:{
        type: String,
    },
    author: {
        type: String,
        required: true // Corrected spelling
    },
    books: {
        type: [String], // Changed to an array of strings
    },
    disc: {
        type: String,
        required: true,
        trim: true
    }
});

// Create the model
const Quote = mongoose.model('Quote', QuoteSchema);

// Export the model
module.exports = Quote;
