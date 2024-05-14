import React, { useContext } from 'react'
import { store } from '../store/store'

function MockScore() {
 const{selectedMock} = useContext(store)
  return (
    <div className=' w-1/2 px-2'>
        <div className=" h-[60px]  flex justify-between cursor-pointer items-center px-2 rounded-md pr-[20px]">
             <div className=" flex items-center gap-2">
             <div className="avatar">
               <div className="w-12 mask mask-squircle">
                 <img src={selectedMock?.avatar} />
               </div>
             </div>
             <div>
               <h4 className=" text-[15px] font-bold">{selectedMock?.name}</h4>
               <p className=" text-[14px] text-gray-400 font-semibold">{selectedMock?.email}</p>
             </div>
             </div>
             <div className={`font-bold text-xl  ${ 50? 'text-[#04aa64]': 'text-warning'}`} >
             {selectedMock?.score}%
             </div>
           </div>
           <div className='mt-4'>
            <div className=' flex justify-between items-center gap-3'>
              <h2 className=' whitespace-nowrap w-[160px] text-[14px] font-semibold text-gray-400'>Behavioural</h2>
              <progress className={`progress w-56 ${selectedMock.behaviour >=7 ? 'progress-success':'progress-warning'}`} value={selectedMock?.behaviour * 10} max="100"></progress>
              <span className=' px-2 text-sm font-semibold text-success'>{selectedMock?.behaviour}/10</span>
            </div>

            <div className=' flex justify-between items-center gap-3 mt-2'>
              <h2 className=' whitespace-nowrap w-[160px] text-[14px] font-semibold text-gray-400'>Communication</h2>
              <progress className={`progress w-56 ${selectedMock.communication >=7 ? 'progress-success':'progress-warning'}`} value={selectedMock?.communication * 10} max="100"></progress>
              <span className=' px-2 text-sm font-semibold text-success'>{selectedMock?.communication}/10</span>
            </div>

            <div className=' flex justify-between items-center gap-3 mt-2'>
              <h2 className=' whitespace-nowrap w-[160px] text-[14px] font-semibold text-gray-400'>Situation Handling</h2>
              <progress className={`progress w-56 ${selectedMock.situationHandling >=7? 'progress-success':'progress-warning'}`} value={selectedMock?.situationHandling * 10} max="100"></progress>
              <span className=' px-2 text-sm font-semibold text-success'>{selectedMock?.situationHandling}/10</span>
            </div>
           </div>

           <div className='mt-5'>
            <h2 className=' text-md font-bold'>About</h2>
            <p className=' text-sm font-normal text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.ut numquam cum similique modi soluta aspernatur nobis.</p>
           </div>
           <div className='mt-5'>
            <h2 className=' text-md font-bold'>Experience</h2>
            <p className=' text-sm font-normal text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.ut numquam cum similique modi soluta aspernatur nobis.</p>
           </div>
           <div className='mt-5'>
            <h2 className=' text-md font-bold'>Hobbies</h2>
            <p className=' text-sm font-normal text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.ut numquam cum similique modi soluta aspernatur nobis.</p>
           </div>
           <div className='mt-5'>
            <h2 className=' text-md font-bold'>Introduction</h2>
            <p className=' text-sm font-normal text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.ut numquam cum similique modi soluta aspernatur nobis.</p>
           </div>
           <div className=' mt-5 text-center'>
           <button className="btn btn-accent uppercase rounded-lg w-[80%] text-white">Shortlist</button>
           </div>
    </div>
  )
}

export default MockScore