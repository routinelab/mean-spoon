var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/meanSpoon', function() {
    console.log('mongodb connected!');
});
module.exports = mongoose;
