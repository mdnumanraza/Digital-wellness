const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)
    const username = user.username;
    const image = user.image;
    const desc = user.desc;
    const coin = user.coin;

    res.status(200).json({username , email,image,desc, coin, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {username, email, password,image, desc,coin} = req.body

  try {
    const user = await User.signup(username,email, password,image, desc,coin)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({username, email, image, desc, coin, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}


// Update user by ID
const updateUser = async (req, res) => {
  const userId = req.params.id;
  const updateData = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true, // Return the updated user
      runValidators: true, // Run data validation defined in the UserModel
    });

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return the updated user data
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update user's coin by ID
const updateCoin = async (req, res) => {
  const userId = req.params.id;
  const { coin } = req.body; // Assuming you send the new coin value in the request body

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { coin }, // Update only the 'coin' field
      {
        new: true, // Return the updated user
        runValidators: true, // Run data validation defined in the UserModel
      }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return the updated user data
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Get user by ID
const getUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return user data
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await User.findByIdAndDelete(userId); // Delete the user by ID

    // Optionally, you can send a success message or status
    res.status(204).json(); // Respond with no content (204 status code)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



module.exports = { signupUser, loginUser  , getUser, updateUser,getAllUsers ,updateCoin, deleteUser }