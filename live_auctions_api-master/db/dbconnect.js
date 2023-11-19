const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    const uri = 'mongodb+srv://mern-project:ly70wGksedkat8Eu@cluster0.3yp3ohu.mongodb.net/?retryWrites=true&w=majority'; // Update with your MongoDB URI
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

module.exports = connectDb;

