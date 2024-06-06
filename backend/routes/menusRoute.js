import express from 'express'
import {Menu} from '../models/menuModel.js'

const router = express.Router()

// router.get('/', (req, res) => {
//     console.log(req)
//     return res.status(234).send('Welcome to MERN Stack Tutorial')
// })

router.post('/', async (req, res) => {
    try {
        if (!req.body.title || !req.body.price) {
            return res.status(400).send({
                message: 'Send all required fields: title, price',
            })
        }

        const newMenu = {
            title: req.body.title,
            price: req.body.price
        }
        
        const menu = await Menu.create(newMenu)

        return res.status(201).send(menu)
    } catch (error) {
        console.log(error.message)
        response.status(500).send({message: error.message})
    }
})

// get menus from db
router.get('/', async (req, res) => {
    try {
        const menus = await Menu.find({})
        return res.status(200).json({
            count: menus.length,
            data: menus
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message:error.message})
    }
})

// get single menu by id from db
router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const menu = await Menu.findById(id)
        return res.status(200).json(menu)
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message:error.message})
    }
})

// update book
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.title || !req.body.price) {
            return res.status(400).send({
                message: 'Send all required fields: title, price',
            })
        }

        const {id} = req.params
        const result = await Menu.findByIdAndUpdate(id, req.body)
        if(!result) {
            return res.status(404).json({message: 'Menu not found'})
        }

        return res.status(200).send({message: 'Menu updated successfully'})
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message})
    }
})

// delete menu
router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const result = await Menu.findByIdAndDelete(id)

        if(!result) {
            return res.status(404).json({message: 'Menu not found'})
        }

        return res.status(200).send({message: 'Menu deleted successfully'})
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message})
    }
})

export default router