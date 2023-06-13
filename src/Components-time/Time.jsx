import React, {Fragment, useEffect, useState} from 'react'

export const Time = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

    useEffect(() => {
        console.log("I am useEffect and I got Invoked");
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleString())
        }, 1000);

        return () => {
            clearInterval(interval)
            console.log(
            `The Time component is going to be unmounted at ${ new Date().toLocaleString()}`
            );
            };
}, []);
    return (
    <Fragment>
        <h1>{currentTime}</h1>
    </Fragment>
  )
}
