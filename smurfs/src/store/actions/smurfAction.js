import axios from 'axios'

export const FETCHING_SMURF_START = 'FETCHING_SMURF_START'
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS'
export const FETCHING_SMURF_ERROR = 'FETCHING_SMURF_ERROR'

export const fetchSmurfs = () => (dispatch) => {
    dispatch({type: FETCHING_SMURF_START})
    axios.get('http://localhost:3333/smurfs')
    .then(value => {
        console.log('fetching start')
        console.log('fetch value', value)
        dispatch({type: FETCHING_SMURF_SUCCESS, payload: value.data})
        console.log('this is value.data')
    })
    .catch(error => {
        console.log('this is an error in fetch', error)
    })
}

const thunk = (store) => (next) => (action) => {
    if (typeof action === 'object') {
        next(action)
    } else if(typeof action === 'function') {
        action(store.dispatch)
    }
}