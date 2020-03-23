import {
    FETCH_SONGS_GET,
    FETCH_SONGS_START,
    FETCH_SONGS_SUCCESS,

    FetchSongsTypes
} from '../actionTypes/main'

export const fetchSongsGet = (): FetchSongsTypes => ({type: FETCH_SONGS_GET})
export const fetchSongsStart = (): FetchSongsTypes => ({type: FETCH_SONGS_START})
export const fetchSongsSuccess = (data: any): FetchSongsTypes => ({
    type: FETCH_SONGS_SUCCESS,
    data: data
})
export const fetchSongsError = (e: any): void => console.log(e)
