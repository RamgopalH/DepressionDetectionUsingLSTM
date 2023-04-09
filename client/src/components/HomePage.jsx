import React from 'react'

const HomePage = (props) => {
  const changePage = ()=> {
    console.log("Page Changes");
    props.changePage("Audio");
  }
  return (
    <main className="flex-grow" >
        <article className=' grid h-full grid-cols-main grid-rows-main'>
        <div className=' flex h-full border-l border-white/10 bg-imagesection bg-cover bg-center bg-no-repeat'>
        </div>
        <div className=' h-full border-l border-white/10 grid justify-items-center'>
        <div className='p-3 h-full w-full text-white p-5 mx-auto mb-10 my-auto font-Roboto text-lg grid content-around justify-items-center'>
        <h1 className='my-5 font-Roboto text-xl italic align-middle'>Team Members:</h1>
          <h1 className='my-3 font-Roboto text-lg'>Ramgopal Hariharan [20BCE0249]</h1>
          <h1 className='my-3 font-Roboto text-lg'>Navaneeth Narayanan [20BCE0559]</h1>
        </div>
        </div>
        <div className=' h-full border-t  border-white/10 p-3 text-white text-center grid justify-items-center'>
          <h1 className='my-5 font-Roboto text-xl italic align-middle'>Web Based Depression Detection Application using Recurring Neural Networks and Speech Analysis</h1>
          <h1 className='my-5 font-Roboto text-lg align-middle'>Human Computer Interaction - CSE 4015</h1>
        </div>
        <div className=' h-full border-l border-t border-white/10 grid justify-items-center'>
          <button onClick={changePage} className='p-3 h-full w-full text-white border-0 rounded-xl p-5 border-gray-50 mx-auto mb-10 my-auto font-Roboto text-lg'>To App &gt;</button>
        </div>
        </article>
       
    </main>
)}

export default HomePage