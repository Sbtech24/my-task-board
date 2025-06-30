"use client"

import { useState } from "react"


const tasksArray = [
    {name:"Task in progress",desc:"in progress",status:"In progress"},
    {name:"Task completed",desc:"in progress",status:"Completed"},
    {name:"Task won't do",desc:"in progress",status:"Won't do"},
]
const addTask =()=>{


}

export default function Tasks(){
    const [data,setdata] = useState(tasksArray)
    return(
    <div>
    <div>
        {data.map((item,i)=>(
            <div key={i}>
                <h1>{item.name}</h1>
            </div>
        ))}
    </div>

    <button>Add New Task</button>
</div>
)
}