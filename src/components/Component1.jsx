import { useState } from "react";

function Component1(){

    // create your hooks
    // useState hook=>used to update memory in react
    //It captures a state and updates based on some action
    const[likes, setLikes]=useState(0)
    //likes=>Variable
    // setLikes=>function that updates the variable
    // useState()=>stores the intitial value
    return(
        <div>
            <h4>React useState Hooks</h4>
            <button onClick={()=>setLikes(likes+1)}>Like</button>
            <p>You have {likes} likes</p>
        </div>
    )

}
export default Component1;