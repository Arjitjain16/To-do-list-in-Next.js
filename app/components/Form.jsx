
import React, { useState } from 'react';
const Form = () => {
    const [Title , setTitle] = useState('')
    const [Desc , setDesc] = useState('')
    const [task, setTask] = useState([])

    function submitHandler(e){
        e.preventDefault()
        setTask([...task ,{Title , Desc}])
        setTitle('')
       setDesc('')
    }
    function deleteHandler(i){
        let copytask = [...task]
        copytask.splice(i,1)
        setTask(copytask)
    }


   let rendertask = <h1>No task is there</h1>

   if (task.length >0){
    rendertask = task.map((t,i)=> {
        return (
            <li className='flex items-center justify-around mb' key={i}>
                <div className='flex items-center gap-[7vmax]'>
                    <h5>{t.Title}</h5>
                    <h6>{t.Desc}</h6>
                </div>
                <button className='bg-black text-white text-[10px] px-2 rounded' onClick={() =>{
                    deleteHandler(i)
                }}>
                    Remove
                </button>
            </li>
        )
    })
   }

  return (
    <div>
      <form onSubmit={submitHandler} className='flex items-center flex-row'>
        <div>
            <input type="text" placeholder='Enter your title' className='border-black border-2 m-9 px-6 py-2' 
            value={Title}
            onChange={(e) =>{
                setTitle(e.target.value)
            }}
            />

        </div>
        <div>
            <input type="text" placeholder='Enter your description' className='border-black border-2 m-9 px-6 py-2' value={Desc}
            onChange={(e)=>{
                setDesc(e.target.value)
            }}
            />
        </div>
        <button type='submit' className='m-9 px-4 py-2 bg-black text-white'>sumit</button>
      </form>
      <hr />

      <div className='bg-slate-400 py-4 px-7 text-center text-2xl mb-3'>
            {rendertask}
      </div>
    </div>
  );
}

export default Form;
