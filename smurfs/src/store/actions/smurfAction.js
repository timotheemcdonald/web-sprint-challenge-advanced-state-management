import axios from 'axios'

export const FETCHING_SMURF_START = 'FETCHING_SMURF_START'
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS'
export const FETCHING_SMURF_ERROR = 'FETCHING_SMURF_ERROR'
// export const ADDING_NEW_SMURF_START = 'ADDING_NEW_SMURF_START'
// export const ADDING_NEW_SMURF = 'ADDING_NEW_SMURF'

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

// export const addSmurfToList = () => (dispatch) => {
//     axios.post('http://localhost:3333/smurfs')
//     .then(value => {
//         console.log('posting smurf test')
//         dispatch({type: ADDING_NEW_SMURF_START, payload: value.data})
//         console.log('after posting new smurf', value)
//     })
//     .catch(error => {
//         console.log('error posting smurf', error)
//     })
// }

const thunk = (store) => (next) => (action) => {
    if (typeof action === 'object') {
        next(action)
    } else if(typeof action === 'function') {
        action(store.dispatch)
    }
}