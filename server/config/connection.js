const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/connect-2-call', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection; 
