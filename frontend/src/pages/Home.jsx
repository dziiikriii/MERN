import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'
// import { Collection } from 'mongoose'

const Home = () => {
    const [menus, setMenus] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios
        .get('http://localhost:5000/menus')
        .then((res) => {
            setMenus(res.data.data)
            setLoading(false)
        })
        .catch((error) => {
            console.log(error)
            setLoading(false)
        })
    }, [])
  return (
    <div className='p-4'>
        <div className='flex justify-between items-center'>
            <h1 className='text-3xl my-8'>Menu List</h1>
            <Link to='/menus/create'>
                <MdOutlineAddBox className='text-sky-800 text-4xl' />
            </Link>
        </div>
        {loading ? (
            <Spinner/>
        ) : (
            <table className='w-full border-separate border-spacing-2'>
                <thead>
                    <tr>
                        <th className='border border-slate-600 rounded-md'>No</th>
                        <th className='border border-slate-600 rounded-md'>Title</th>
                        <th className='border border-slate-600 rounded-md'>Price</th>
                        <th className='border border-slate-600 rounded-md'>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {menus.map((menu, index) => (
                        <tr key={menu._id} className='h-8'>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {index + 1}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {menu.title}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {menu.price}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                <div className='flex justify-center gap-x-4'>
                                    <Link to={`/menus/details/${menu._id}`}>
                                        <BsInfoCircle className='text-2xl text-green-800'></BsInfoCircle>
                                    </Link>
                                    <Link to={`/menus/edit/${menu._id}`}>
                                        <AiOutlineEdit className='text-2xl text-yellow-800'></AiOutlineEdit>
                                    </Link>
                                    <Link to={`/menus/delete/${menu._id}`}>
                                        <MdOutlineDelete className='text-2xl text-red-800'></MdOutlineDelete>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>
  )
}

export default Home
