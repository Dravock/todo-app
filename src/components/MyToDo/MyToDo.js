import React from 'react'

function MyToDo(props) {
    const { appData, deleteTD }= props


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
        <div className='bg-white rounded mx-auto mt-10 py-1 w-[95%] sm:w-[75%]'>
            <h2 className=' text-3xl font-bold text-center w-full'>My ToDo's</h2>
        </div>
            {appData && appData.map(({title,date,task,prio,id},index)=>
            <div className='w-[95%] sm:w-[75%] mx-auto  mb-2 bg-white rounded border border-black' key={index}>
                <div className='card-header flex flex-row mb-4'>
                    <span className={`m-1 w-[6%] sm:w-[4%] ${getPrioColor(prio)}`}></span>
                    <h2 className='text-base sm:text-3xl font-bold ml-2 w-[65%] sm:w-[75%] '>{title}</h2>
                    <h2 className='text-base sm:text-3xl font-bold mr-2 w-[25%] text-right'>{date}</h2>
                </div>

                <div className='card-body flex sm:mx-5 mb-4'>
                    <div className='task w-full border border-black '>
                        <ul>
                            <li>
                                <h3 className='text-2xl ml-3 sm:ml-16'>- {task}</h3>
                            </li>
                        </ul>
                    </div>
                    <div className=' button-area w-[20%]  text-center'>
                        {/* <button className="btn  rounded w-[80%]  ">New Date</button> */}
                        <button className="btn btn-red rounded mx-auto w-[80%]" onClick={()=>deleteTD(index,id)}>Delete</button>
                    </div>
                </div>
            </div>
            )}
    </div>
)}

export default MyToDo