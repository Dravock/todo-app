import React from 'react'

function MyToDo(props) {
    const { appData }= props


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
    <div className='mt-10'>
        <div className='bg-white rounded mx-auto mt-10 py-1 w-[75%]'>
            <h2 className=' text-3xl font-bold text-center w-full'>My ToDo's</h2>
        </div>
        {appData && appData.map(({title,date,task,prio},index)=>
        <div className='w-[75%] mx-auto  mb-2 bg-white rounded border border-black' key={index}>
            <div className='card-header flex flex-row mb-4'>
                <span className={`w-[3%] ${getPrioColor(prio)}`}></span>
                <h2 className='text-3xl font-bold ml-2 w-[65%] '>{title}</h2>
                <h2 className='text-3xl font-bold mr-2 w-[25%] text-right'>{date}</h2>
            </div>

            <div className='card-body flex mx-5 mb-4'>
                <div className='task w-full border border-black '>
                    <ul>
                        <li>
                            <h3 className='text-2xl ml-16'>- {task}</h3>
                        </li>
                    </ul>
                </div>
                <div className=' button-area w-[20%] border border-black'>
                    <button className="relative btn  rounded align-end w-[80%]">New Date</button>
                    <button className="relative btn btn-red rounded align-end w-[80%]">Delete</button>
                </div>
            </div>
        </div>
        )}
    </div>
)}

export default MyToDo