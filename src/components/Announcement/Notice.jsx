import React, { useRef } from 'react'
import { X } from 'lucide-react'
import noticeImg from "../../assets/notice.jpg"

function Notice({onClose}) {
const noticeRef = useRef ();

const closenote = (e) => {
    if( noticeRef.current=== e.target ) {
        onClose();
    }
}
    return (
        <>
            <div ref={noticeRef} onClick={closenote} className=' fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50'>
                <div className=' mt-10 flex flex-col bg-slate-100 pb-5  md:w-1/3 rounded-lg'>
                    <button onClick={onClose} className='place-self-end'><X size={30}/></button>
                    <div>
                        <img src={noticeImg} className=' w-full h-auto object-cover overflow-hidden' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notice
