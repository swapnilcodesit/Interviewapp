import React, { useImperativeHandle, useRef } from 'react'

const Refs = ( props , ref) => {

    const newRef = useRef(25)


     function handleClick() {
    newRef.current = newRef.current + 1;
    alert('You clicked ' + newRef.current + ' times!');
  }
  
    //useImperativeHandle(ref , ()=>{} ,[])
  
    return (
    <div>
      {newRef.current}
      <button onClick={handleClick
    //     ()=>{
    //     newRef.current = newRef.current + 1
    //   }
    }
      >Increase</button>
    </div>
  )
}

export default Refs
