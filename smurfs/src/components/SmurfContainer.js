import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import SmurfCard from './SmurfCard'
import { fetchSmurfs } from '../store/actions/smurfAction'

const SmurfContainer = (props) => {
    useEffect(() => {
        props.fetchSmurfs()
    }, [])


    console.log('props in smurf container', props)

    return (
        <div>
            <p>Smurf Container</p>
            {props.isLoading ? <h3>Loading. . .</h3> : null}
            {props.error ? (<div><h3>Error!</h3><p>{props.error}</p></div>) : null}
            {props.smurf.map((item) => {
                return <SmurfCard
                    smurf={item} key={item.id} />
            })}

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

export default connect(mapStateToProps, {fetchSmurfs})(SmurfContainer);