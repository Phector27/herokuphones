const Joi = require('@hapi/joi')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = require("express").Router()
const User = require("../models/User.model")

const schemaRegister = Joi.object({
  name: Joi.string().min(6).max(255).required(),
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required()
})

const schemaLogin = Joi.object({
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required()
})

router.post("/register", async (req, res) => {
  const { email, password, name } = req.body
  const { error } = schemaRegister.validate(req.body)

  if (error) {
    return res.status(400).json(
        {error: error.details[0].message}
    )
  }

  const isEmailExist = await User.findOne({ email });
  if (isEmailExist) {
    return res.status(400).json({ message: "Email already exists" })
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  const user = new User({
    name,
    email,
    password: hashedPass,
  })
  try {
      const savedUser = await user.save()
      res.json({
        error: null,
        data: savedUser
    })
  } catch (error) {
    res.status(400).json({message: error.message})
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const { error } = schemaLogin.validate(req.body);

  if (error) return res.status(400).json({ error: error.details[0].message })
  
  const user = await User.findOne({ email })
  if (!user) return res.status(400).json({ error: 'User not found' })

  const validPassword = await bcrypt.compare(password, user.password)
  if (!validPassword) return res.status(400).json({ error: 'Wrong password' })

  jwt.sign({ user }, process.env.TOKEN_SECRET,  (err, token) => {
    err && res.status(400).json({ error: err.message })
    
    res.header('auth-token', token).json({
      error: null,
      data: { token },
      isAdmin: user.role === 'admin'
    })
  })
})

module.exports = router
