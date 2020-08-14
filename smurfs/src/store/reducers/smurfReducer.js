import {FETCHING_SMURF_SUCCESS, FETCHING_SMURF_START, FETCHING_SMURF_ERROR, ADDING_NEW_SMURF} from '../actions/smurfAction'

const initialState = {
    smurf: [],
    error:'',
    isLoading: false
}

const blankSmurf = {
    name: '',
    age: 0,
    height: '',
}

const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_SMURF_START:
            return{
                ...state,
                isLoading: true,
            }
        case FETCHING_SMURF_ERROR:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        case FETCHING_SMURF_SUCCESS:
            return{
                ...state,
                isLoading: false,
                smurf: action.payload
            }
        case ADDING_NEW_SMURF:
            return{
                ...state,
                smurf: action.payload
            }
        default:
            return state
    }
}

export default smurfReducer