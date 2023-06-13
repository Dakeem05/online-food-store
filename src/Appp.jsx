import "./Appp.module.css";
import { Time } from "./Components-time/Time";

import React, {useState} from 'react'

function Appp() {
    const [open, setOpen] = useState(true)
    const closeTime = () =>{
        setOpen(!open)
    }
  return (
    <div>
        {open &&(
            <>
                <Time/>
                <button onClick={closeTime}> Close Time </button>
            </>
        )}
        {!open && (
            <>
            <h1>Time display closed</h1>
            <button onClick={closeTime}> Open Time </button>
            </>
        )}
    </div>
  )
}

export default Appp