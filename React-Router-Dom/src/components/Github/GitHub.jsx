import  { useEffect, useState } from 'react'

const GitHub = () => {

  const [data , setData]=useState([])

  useEffect(()=>{
    fetch("https://api.github.com/users/avadhkheni")
    .then((res)=>res.json())
    .then((data)=>
     setData(data) 
    ).catch((error)=>{
      console.log(error)
    })
  },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col items-center gap-10'>
       <h1> Github Username : {data.name}</h1>
       <h1> Github followers : {data.followers}</h1>
       <img src={data.avatar_url} alt="Img" className='h-[30vh] w-[30vh]' />
    </div>
  )
}

export default GitHub
