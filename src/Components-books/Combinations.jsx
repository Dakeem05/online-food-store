import React, {useMemo} from 'react'
import { useFactorial } from './useFactorial';
export const Combinations = React.memo(({countBooks, checkSpace}) => {
    console.log("Combinations component is re-rendered");
    let space ="";
    switch (countBooks) {
        case 1 - 5: space = "Free Space available"; break
;
        case 5 - 10: space = "Perfect"; break;
        case 10 - 15: space = "Need extra storage"; break;
        default: space = "Not Sufficient";    }
    // let arrangments = useMemo(()=>{
    //     console.log("Total number of ways being calculated");
    //mtn_4g_4646C0
    //key 5325599D
    //     let arrs = 1;
    //     for (let i = 2 ; i<= countBooks; i++) {
    //         arrs *= i;
    //     }
    //     return arrs;
    // }, [countBooks])
    const arrangements = useFactorial(countBooks)
  return (
    <div>
        <p>The total number of ways you can arrange book are {arrangements}</p>
        <button onClick={() => checkSpace(space)}>Cheeck Space</button>
    </div>
  ) 
})
