import { ImageLoadState } from '@fluentui/react';
import React, {useState, useRef, useReducer} from 'react'

const reducer = (state, action) => {
    const { type, payload } = action;
    return { ...state, [type]: payload};
}
function Address() {
    const initialState = {
        fieldState: "",
        fieldCity:"",
        fieldAddress:""
    }
    const fieldStyle= {
        marginTop: "20px",
        float: "left",
        width: "70%",
        Fantasy: 20
    };
    const buttonStyle = {
        marginTop: "20px",
        backgroundColor: "lightBlue",
        width: "30%",
        fontSize: 20,
        cursor: "pointer"
    };
    // const [state, setState] = useState("");
    // const [city, setCity] = useState("");
    // const [address, setAddress] = useState("");

    const addressRef = useRef();

    const [state, dispatch] = useReducer(reducer, initialState)
    const {fieldState, fieldCity, fieldAddress} = state;
    
    const fillAddress = () => {
        dispatch({
            type: "fieldAddress",
            payload:`${fieldCity},${fieldState}`
        })
        addressRef.current.focus();
    }
  return (
    <div style = {{width: "100%"}}>
        <input type="text" placeholder='State' autoFocus value={fieldState} style={fieldStyle} onChange={(e)=> dispatch({type:"fieldState", payload: e.target.value })}/>
        <input type="text" placeholder='City' autoFocus value={fieldCity} style={fieldStyle} onChange={(e)=> dispatch({type: "fieldCity", payload: e.target.value }) }/>
        <button style={buttonStyle} onClick={fillAddress}>Fill Address</button>
        <textarea  placeholder='Address' style={fieldStyle} onChange={(e)=>  dispatch({type: "fieldAddress", payload: e.target.value })} ref={addressRef}/>
    </div>
  )
}

export default Address