import React, { useState, useEffect } from 'react'
import { fetchSmurfs } from '../store/actions/smurfAction'
import { connect } from 'react-redux'
import axios from 'axios'

const blankSmurf = {
    name: '',
    age: 0,
    height: '',
}

const AddSmurf = () => {
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
        console.log('submit start')
        axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(value => {
            console.log('in submit .then')
            console.log('this is value in submit', value.data)
            setSmurf(...newSmurf, [value.data])
            console.log(value.data, 'value.data in smurf submit')})
        .catch(error => {
            console.log('error', error)})
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

const mapStateToProps = (state) => {
    return {
        smurf: state.smurf,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSmurfs })(AddSmurf);