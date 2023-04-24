import React from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

function Header() {

    const cookies = new Cookies()
    const navigate = useNavigate()

const logout =()=>{
    cookies.remove('token', { path: '/todo-app' });
    cookies.remove('token', { path: '/' });
    navigate('/')
}

return (
    <div className='flex bg-white'>
        <div className='w-1/5 items'>
        </div>
        <div className='w-full '>
        <h1 className='text-center text-lg sm:text-4xl font-bold mt-1 ml-8 sm:ml-15'>You're ToDo App</h1>
        </div>
        <div className='w-1/5 '>
            <button className='bg-red-500 rounded px-1 m-1 sm:mt-2 sm:ml-6 font-bold' onClick={() =>logout()}>Logout</button>
        </div>
    </div>
)}

export default Header