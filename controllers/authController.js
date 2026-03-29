const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("SECRET:", process.env.JWT_SECRET);

    const { name, email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const user = await User.create({ name, email, password });

    const token = require('jsonwebtoken').sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(201).json({ token });

  } catch (err) {
    console.log("ERROR:", err);   // 🔥 IMPORTANT
    res.status(500).json({ msg: err.message });
  }
};

exports.login = async(req,res)=>{
  try{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(400).json({msg:"User not found"});

    const match = await bcrypt.compare(password,user.password);
    if(!match) return res.status(400).json({msg:"Invalid credentials"});

    const token = jwt.sign({id:user._id,role:user.role}, process.env.JWT_SECRET,{expiresIn:'1h'});
    res.json({token});
  }catch{
    res.status(500).json({msg:"Server error"});
  }
};
