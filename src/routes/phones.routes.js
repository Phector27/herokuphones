const router = require('express').Router()
const Model = require('../models/Phone.model')

router.post('/createOne', async (req, res) => {
  const { id, name, manufacturer, description, color, price, imageFileName, screen, processor, ram } = req.body
  const data = new Model({
    id,
    name,
    manufacturer,
    description,
    color,
    price,
    imageFileName,
    screen,
    processor,
    ram
  })

  try {
    const dataToSave = await data.save()
    res.status(200).json(dataToSave)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
})

router.get('/getAll', async (req, res) => {
  try{
    const data = await Model.find()
    res.json(data)
  } catch(error){
    res.status(500).json({message: error.message})
  }
})

router.get('/getOne/:id', async (req, res) => {
  try{
    const data = await Model.findById(req.params.id)
    if (data === null) {
      return res.status(404).json({ message: 'Cannot find data' })
    }
    res.json(data)
  } catch(error){
    res.status(500).json({message: error.message})
  }
})

router.patch('/update/:id', async (req, res) => {
  try {
    const id = req.params.id
    const updatedData = req.body
    const options = { new: true }

    const result = await Model.findByIdAndUpdate(
        id, updatedData, options
    )

    if (!result) {
      return res.status(404).json({ message: 'Cannot find data' })
    }

    res.send(result)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id
    const data = await Model.findByIdAndDelete(id)
    if (!data) {
      return res.status(404).json({ message: 'Cannot find data' })
    }
    res.json({message: `Document with ${data.name} has been deleted..`, id})
  } catch (error) {
      res.status(400).json({ message: error.message })
  }
})

module.exports = router