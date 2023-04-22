import React, { useState } from 'react'
import PlusSVG from '../../Includes/img/svg/PlusSVG'
import MyToDo from '../../components/MyToDo/MyToDo'
import NewToDo from '../../components/newToDo/NewToDo'

function App() {

    const testData = [{
        title:"Aufräumen",
        date:"22.04.2023",
        task:"Zimmer aufräumen und Fenster putzen",
        prio:"1"
    },
    {
        title:"HZ-Software",
        date:"28.04.2023",
        task:"Software fertigstellen",
        prio:"2"
    },
    {
        title:"Bayram Feiern",
        date:"05.04.2023",
        task:"Feiern mit der Familie ",
        prio:"3"
    }
]

    const [appData,setAppData] = useState(testData)

const getPrioColor = (prio) =>{
    switch (prio) {
        case "1":
            return "bg-green-500"
        case "2":
            return "bg-yellow-500"
        case "3":
            return "bg-red-500"
        default:
            return "bg-blue-500";
    }
}



return (
    <div className='container bg-slate-500 pb-10 mx-auto'>
        <h1 className='text-center text-white text-4xl font-bold mt-10 '>You're ToDo APP</h1>
        <NewToDo />
        <MyToDo appData={appData} />
    </div>
)}

export default App