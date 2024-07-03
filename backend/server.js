const express = require('express');
const app = express();
require('dotenv').config();
const bcrypt = require('bcryptjs');
const cors = require('cors');
const mongoose = require('mongoose');

const stripe = require('stripe')(process.env.SECRET_KEY);
// Middleware
app.use(express.json());
app.use(cors({ origin: '*' }));

// MongoDB Connection
mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  address: String,
  orders: [{
    name: String,
    product: String,
    address: String
  }],
  Transactions: [{
    Type: String,
    product: String,
    amount: Number,
    date: Date,
    status: Boolean
  }]
});

const User = mongoose.model('User', userSchema);

// Stripe Checkout Endpoint
app.post('/checkout', async (req, res) => {
  try {
    const { items } = req.body; // Destructure items from req.body
    if (!items || !Array.isArray(items)) {
      return res.status(400).json({ error: 'Invalid items format' });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: items.map(item => ({
        price_data: {
          currency: 'inr',
          product_data: {
            name: item.name
          },
          unit_amount: item.price * 100 // Stripe expects amount in cents
        },
        quantity: item.quantity
      })),
      success_url: 'http://localhost:3000/success', // Replace with your success URL
      cancel_url: 'http://localhost:3000/cancel' // Replace with your cancel URL
    });

    // Log the session details
    console.log('Session created: ', session);

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session: ', error);
    res.status(500).json({ error: error.message });
  }
});

// User Registration Endpoint
app.post('/api/v1/auth/register', async (req, res) => {
  const { name, email, password, phone, address  } = req.body;
  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into database
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    });

    await newUser.save();

    res.json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ success: false, message: 'Failed to register user' });
  }
});

// User Login Endpoint
app.post('/api/v1/auth/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Retrieve user from database by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    
    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Incorrect password' });
    }

    // Handle successful login
    res.json({ success: true, message: 'Login successful', user: user.name, phone:user.phone, address:user.address,email:email});
    console.log("logged in" + user)
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ success: false, message: 'Failed to login' });
  }
});

app.put('/orders', async (req, res) => {
  const { email, name, product, address } = req.body;
  try {
    // Find user by email and push new order to the orders array
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { $push: { orders: { name, product, address } } },
      { new: true } // Return the updated document
    );
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'Order added successfully', user: updatedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.put('/transactions', async (req, res) => {
  const { email ,type, product ,amount , date ,status } = req.body;
  try {
    // Find user by email and push new order to the orders array
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { $push: { Transactions: {type,product,amount,date,status} } },
      { new: true } // Return the updated document
    );
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'Order added successfully', user: updatedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.get('/yourorders', async (req, res) => {
  const { email } = req.query; // Changed from req.params to req.query
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'Successful', data: user.orders });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error\n' });
  }
});


app.get('/transactionhistory', async (req, res) => {
  const { email } = req.query; // Changed from req.params to req.query
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    console.log("inTransaction"+user.Transactions);
    res.status(200).json({ message: 'Successful', data: user.Transactions });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});



// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  
});
