import React, { Fragment } from 'react'


export const Course = (props) => {
    const NoAuth = "Acceso no autorizado";

    if (localStorage.getItem('Activity') != '' && localStorage.getItem('Activity') != { NoAuth } && localStorage.getItem('Activity') != null) {
        if (props.location.Activity) {
            localStorage.removeItem('Activity');
            const prop = [{ algo: props.location.Activity }];
            let activity = prop[0].algo.activityProps;
            localStorage.setItem('Activity', prop[0].algo.activityProps);
        }
        console.log("si");
    } else {
        console.log("no");
        localStorage.setItem('Activity', NoAuth);
    }
    console.log(localStorage.getItem('Activity'))










    return (
        <Fragment>
            <div className="App">

                <h1>{window.localStorage.getItem('Activity')}</h1>
            </div>
        </Fragment>

    )
}
export default Course;

