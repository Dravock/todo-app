import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom'
import { Validation } from '../../functions/Validation.js';
import Cookies from 'universal-cookie';
import axios from 'axios';
import Messages from '../../Includes/enums/Messages.js';
import todoIMG from '../../Includes/img/png/todo-lists-g22b7f43d5_1280.jpg';


function Login() {


    const navigate = useNavigate()
    const cookies = new Cookies()
    const token = cookies.get('token')

    const [inputData,setInputData]=useState()
    const [visible,setVisible]=useState("hidden")


useEffect(() => {
        (async()=>{
            try{
                if(token !== undefined  && token !== "" ){
                    await  Validation()
                    navigate('/app')
                }
                return
            } catch (error) {
                navigate('/')
            }
        })() 
    }, [token])


const inputListener = (e) => {
    const {name,value}=e.target
    setInputData({...inputData,[name]:value})
}

const submit = async (e) =>{
    e.preventDefault()
    await axios.post(process.env.REACT_APP_BASE_URL + '/login/login.php',inputData)
        .then((response)=>{
            const requestedData = response.data
            const options = {
                httpOnly: true, //TODO im Online Betrieb auskommentieren
                secure: true,
                path:'/todo-app/',
                expires: new Date(Date.now() +  1000*60*60*5) 
            }
            cookies.set("token",requestedData)
            navigate('/app')
        })
        .catch((error)=>{
            showBox()
        })
}

const showBox =()=>{
    setVisible("block")
}

const closeBox=()=>{
    setVisible("hidden")
}



return (
<> 
    {/* {loading === LoadingState.Active && <LoadingScreen text={LoadingMessages.Login}/>} */}
    <div className={`bg-red-500 py-4 ${visible}`} onClick={()=>closeBox()}>
        <h3 className={`text-center font-bold text-lg `}>Wrong Password or Username 😔</h3>
    </div>

    <div className="mx-9 mt-20 mb-10 flex justify-center items-center flex-col">
        <div className="md:max-w-lg">
            <Card imgSrc={todoIMG} className='p-5' >
                <h1 className="mb-4 sm:mb-8 text-2xl font-bold text-blue-600  text-center">Please enter you're login credentials</h1>
                <div className="relative">
                    <input type="text" id="floating_outlined-username" name="email" onChange={inputListener} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="floating_outlined-username" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">E-Mail</label>
                </div>
                <div className="relative">
                    <form onSubmit={submit}>
                        <input type="password" autoComplete='true' id="floating_outlined-pw" name="password" onChange={inputListener} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="floating_outlined-pw" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Passwort</label>
                    </form>
                </div>
                <button type='submit' onClick={submit} className="bg-green-500 mx-auto hover:bg-green-400 w-40 rounded py-2 font-bold" >Login</button>
            </Card>
        </div>
    </div>
</>)}

export default Login