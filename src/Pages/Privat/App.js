import React, { useEffect, useState } from 'react'
import MyToDo from '../../components/MyToDo/MyToDo'
import NewToDo from '../../components/newToDo/NewToDo'
import axios from 'axios'
import { Validation } from '../../functions/Validation'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'
import LoadingState from '../../Includes/enums/LoadingState'
import LoadingScreen from '../../components/loading_spinner/Loadingscreen'
import LoadingMessages from '../../Includes/enums/LoadingMessages'
import Messages from '../../Includes/enums/Messages'
import Header from '../../components/Header/Header'

function App() {
    const cookies = new Cookies()
    const token = cookies.get('token')
    const navigate = useNavigate()

    const [appData,setAppData] = useState()
    const [input,setInput] = useState({title:"",date:"",prio:"",task:""})
    const [loading,setLoading] = useState(LoadingState.Inactive)


useEffect(() => {
        (async()=>{
            setLoading(LoadingState.Active)
            try{
                if( token !== undefined  && token !== "" ){
                    await  Validation()
                    await getAppData()
                    navigate('/app')
                }else{
                    throw 401
                }
            } catch (error) {
                console.log(error,Messages.unauthorized.message)
                navigate('/')
            }
        })() 
    }, [])

const inputListener = (e) =>{
    const {name,value} = e.target
    setInput({...input, [name] : value })
}

const getAppData = async () =>{
    await axios.get(process.env.REACT_APP_BASE_URL+'/data/data.php',{headers: {'Authorization':"Bearer " + token}})
    .then((response)=>{
        setAppData(response.data)
        setLoading(LoadingState.Inactive)
    })
    .catch((err)=>{
        alert(Messages.error)
    })
}

const submit =  (data) =>{
    axios.post(process.env.REACT_APP_BASE_URL+'/data/data.php',data,{headers: {'Authorization':"Bearer " + token}})
    .then((response)=>{
        setLoading(LoadingState.Active)
        setInput({title:"",date:"",prio:"",task:""})
        getAppData()
    })
    .catch((err)=>{
        setLoading(LoadingState.Inactive)
        alert(Messages.error)
    })
    
}

const deleteTodo = (index,row_id) =>{
    const removed = []
    appData.filter(function(item) {
        if(appData[index] !== item){
            removed.push(item)
        }
        return ;
    });
    setAppData(removed)
    axios.delete(process.env.REACT_APP_BASE_URL+`/data/data.php?id=${row_id}`,{headers: {'Authorization':"Bearer " + token}})
    .then((response)=>{

    })
    .catch((err)=>{
        setLoading(LoadingState.Inactive)
        alert("Messages.error")
    })

}


return (
    <>
        {loading === LoadingState.Active && <LoadingScreen text={LoadingMessages.GeneralWaiting}/>}
        <div className='container bg-slate-500  min-h-screen sm:h-full mx-auto pb-2 sm:pb-10 '>
            <Header />
            <NewToDo submit={submit} input={input} inputListener={inputListener} />
            <MyToDo appData={appData} deleteTD={deleteTodo} />
        </div>
    </>
)}

export default App