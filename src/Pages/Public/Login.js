import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom'
import { Validation } from '../../functions/Validation.js';
import Cookies from 'universal-cookie';
import axios from 'axios';






function Login() {


    const navigate = useNavigate()
    const cookies = new Cookies()
    const token = cookies.get('token')

    const [inputData,setInputData]=useState()

// useEffect(() => {
//         (async()=>{
//             try{
//                 if(token !== undefined  && token !== "" ){
//                     await  Validation()
//                     navigate('/dashboard')
//                 }
//                 return
//             } catch (error) {
//                 navigate('/')
//             }
//         })() 
//     }, [token])


const inputListener = (e) => {
    const {name,value}=e.target
    setInputData({...inputData,[name]:value})
}
    
const onEnterKey =(e)=> {
    if(e.key === 'Enter'){
        submit()
    }
}


const submit = async () =>{
    await axios.post(process.env.REACT_APP_BASE_URL + '/login/login.php',inputData)
        .then((response)=>{
            const requestedData = response.data
            // const options = {
            //     // httpOnly: true, //TODO im Online Betrieb auskommentieren
            //     // secure: true,
            //     path:'/',
            //     expires: new Date(Date.now() +  1000*60*60*5) 
            // }
            navigate('/dashboard')
        })
        .catch((error)=>{
            alert("Messages.loginFailed.message")
        })
}


return (
<> 
    {/* {loading === LoadingState.Active && <LoadingScreen text={LoadingMessages.Login}/>} */}
    <div className="mx-9 mt-20 mb-10 flex justify-center items-center flex-col">
        <div className="md:max-w-lg">
            <Card imgSrc="" className='p-5' >
                <h1 className="my-8 text-2xl font-bold text-blue-600  text-center">Loggen Sie sich bitte mit Ihren Anmeldedaten an</h1>
                <div className="relative">
                    <input type="text" id="floating_outlined-username" name="user" onChange={inputListener} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="floating_outlined-username" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">MitarbeiterID</label>
                </div>
                <div className="relative">
                    <form>
                        <input type="text" autoComplete='true' id="floating_outlined-pw" name="pw" onKeyDown={(e)=>onEnterKey(e)}  onChange={inputListener} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="floating_outlined-pw" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Passwort</label>
                    </form>
                </div>

                <button  className="btn btn-green" onClick={()=>submit()} >Login</button>
            </Card>
        </div>
    </div>
</>)}

export default Login