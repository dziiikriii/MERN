import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const ShowMenus = () => {
    const [menu, setMenu] = useState({})
    const [loading, setLoading] = useState(false)
    const {id} = useParams()

useEffect(() => {
    setLoading(true)
    axios
    .get(`http://localhost:5000/menus/${id}`)
    .then((res) => {
        setMenu(res.data)
        setLoading(false)
    })
    .catch((error) => {
        console.log(error)
        setLoading(false)
    })
}, [])

  return (
    <div className='p-4'>
        <BackButton/>
        <h1 className='text-3xl my-4'>Show Menu</h1>

        {loading ? (
            <Spinner/>
        ) : (
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Id</span>
                    <span>{menu._id}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Title</span>
                    <span>{menu.title}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Price</span>
                    <span>{menu.price}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Create Time</span>
                    <span>{new Date(menu.createdAt).toString()}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
                    <span>{new Date(menu.updatedAt).toString()}</span>
                </div>
            </div>
        )}
    </div>
  )
}

export default ShowMenus