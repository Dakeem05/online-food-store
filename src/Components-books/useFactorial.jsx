import React, {useMemo} from 'react'

export const useFactorial = (number) => {
    let factorial = useMemo(()=>{
        let fact = 1;
        for (let i = 2; i <= number; i++) {
            fact *= i;
        }
        return fact;
    }, [number])
  return (
    <div> {factorial}</div>
  )
}
