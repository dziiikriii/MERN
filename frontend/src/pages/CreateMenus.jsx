import React, {useState} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import { Collection } from 'mongoose'

const CreateMenus = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleSaveMenu = () => {
        const data = {
            title, price
        }
        setLoading(true)
        axios.post('http://localhost:5000/menus', data)
        .then(() => {
            setLoading(false)
            navigate('/')
        })
        .catch((error) => {
            setLoading(false)
            alert('An error happened. Please check console')
            console.log(error)
        })
    }

  return (
    <div className='p-4'>
        <BackButton/>
        <h1 className='text-3xl my-4'>Create Menu</h1>
        {loading ? <Spinner/> : ''}
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
            <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='border-2 border-gray-500 px4 py2 w-full' />
            </div>
            <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Price</label>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className='border-2 border-gray-500 px4 py2 w-full' />
            </div>
            <button className='p-2 bg-sky-300 m-8' onClick={handleSaveMenu}>Save</button>
        </div>
    </div>
  )
}

export default CreateMenus