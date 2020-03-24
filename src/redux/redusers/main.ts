import {
    FETCH_SONGS_START,
    FETCH_SONGS_SUCCESS,

    FetchSongsTypes
} from '../actionTypes/main'
import { AlbumI } from "../../interfaces/trackInterfaces"

interface InitialState {
    albums: Array<AlbumI>
    isLoading: boolean
}

const initialState: InitialState = {
    albums: [],
    isLoading: true
}

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
                albums: action.albums,
                isLoading: false
            }
        default :
            return state
    }
}
