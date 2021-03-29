import React, { Fragment, useState } from 'react'


export const Activity = (props) => {

    const prueba = [{ algo: props.location.Activity }];
    const [activity, setActivity]  = useState(
        window.localStorage.getItem('valor')
    )
    const setLocalStorage= value=>{
        try{
            setActivity(prueba[0].algo)
            window.localStorage.setItem('valor', prueba[0].algo.activityProps);
        }catch (error){
            console.error(error)
        }
    }

    localStorage.setItem('myData', prueba[0].algo.activityProps);

    console.log(window.localStorage.getItem('valor'))
    

    return (
        <Fragment>
            <div className="App">

               <h1>{prueba[0].algo.activityProps}</h1>
            </div>
        </Fragment>

    )
}
