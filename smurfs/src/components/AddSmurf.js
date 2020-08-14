import React, { useState, useEffect } from 'react'
import { addSmurfToList } from '../store/actions/smurfAction'
import { connect } from 'react-redux'
import axios from 'axios'

const blankSmurf = {
    name: '',
    age: 0,
    height: '',
}

const AddSmurf = (props) => {
    // useEffect(() => {
    //     props.fetchSmurfs()
    // }, [])
    const [newSmurf, setSmurf] = useState(blankSmurf)

    const onChange = (event) => {
        setSmurf({
            ...newSmurf,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(props,'this is props in addsmurf file')
        props.addSmurfToList(newSmurf)
    }
    

    return (
        <div>
            <h3>Add Smurf</h3>
            <form onSubmit={onSubmit}>
                <h4>Name</h4>
                <input
                    type="text"
                    name="name"
                    value={newSmurf.name}
                    onChange={onChange}
                />
                <h4>Age</h4>
                <input
                    type="text"
                    name="age"
                    value={newSmurf.age}
                    onChange={onChange}
                />
                <h4>height</h4>
                <input
                    type="text"
                    name="height"
                    value={newSmurf.height}
                    onChange={onChange}
                />
                <button type="submit">Add to List</button>
            </form>

        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         smurf: state.smurf
//     }
// }

export default connect(null, { addSmurfToList })(AddSmurf);