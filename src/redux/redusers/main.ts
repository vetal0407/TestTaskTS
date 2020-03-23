import {
    FETCH_SONGS_START,
    FETCH_SONGS_SUCCESS,

    FetchSongsTypes
} from '../actionTypes/main'

const initialState = {
    data: null,
    isLoading: true
}

type InitialState = typeof initialState;

export default function mainReducer(state = initialState, action: FetchSongsTypes): InitialState{
    switch (action.type){
        case FETCH_SONGS_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_SONGS_SUCCESS:
            return {
                ...state,
                data: action.data,
                isLoading: false
            }
        default :
            return state
    }
}
