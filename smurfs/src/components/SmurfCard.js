import React from 'react'

const SmurfCard = (props) => {
    console.log('props in smurf card', props)
    const {name, age, height} = props.smurf

    return(
        <div>
            <div><h2>Smurf List</h2>
               <p>Name: {name} </p> 
                <p>Age: {age} </p>
                <p>Height: {height}</p>
            </div>
        </div>
        
    )
}

export default SmurfCard