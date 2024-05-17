import React, { useState } from 'react'
import Notice from './Notice'



function Announce() {

    const [Noticed, setNoticed] = useState(false)

  return (
    <div className='bottom-0 right-0'>
    <button onClick={() => {setNoticed(true)}} className='rounded-full relative h-16 w-16 text-xl bg-[#28186b] [box-shadow:12px_12px_20px_#aaaaaa,_-8px_-8px_20px_#aaaaaa] text-white overflow-hidden flex items-center justify-center' >        
      <img src="../../src/assets/ann_logo.png" className='filter absolute invert left-2' alt="" />
    </button>
    {Noticed && <Notice onClose= {() => {setNoticed(false)}} />}
    </div>
  )
}

export default Announce