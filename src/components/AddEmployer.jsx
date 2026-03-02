import React, { useState } from 'react'

export const AddEmployer = () => {
    const [employer, setEmployer] = useState([])
    const [name, setName] = useState("")
    const [salary, setSalary] = useState(0)
    const handleInput = (e) => {
        e.preventDefault()
        const newEmployer = {
            name: name,
            salary: salary
        }
        setEmployer([...employer, newEmployer])
        setName("")
        setSalary("")
    }

    return (
        <div>
            <form onSubmit={handleInput}>

                <h1>AddEmployer</h1>
                <input type="text" placeholder='Fullname' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder='salary' value={salary} onChange={(e) => setSalary(e.target.value)} />
                <button >add</button>


            </form>
            <div>
                <ul>
                    {
                        employer.map((emp,index)=>
                        {
                            return ( 
                                <li key={index}>
                                    {emp.name}
                                    {emp.salary}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>





        </div>
    )
}
