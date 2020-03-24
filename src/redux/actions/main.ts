import {
    FETCH_SONGS_GET,
    FETCH_SONGS_START,
    FETCH_SONGS_SUCCESS,

    FetchSongsTypes
} from '../actionTypes/main'
import { AlbumI } from "../../interfaces/trackInterfaces"

export const fetchSongsGet = (): FetchSongsTypes => ({type: FETCH_SONGS_GET})
export const fetchSongsStart = (): FetchSongsTypes => ({type: FETCH_SONGS_START})
export const fetchSongsSuccess = (albums: Array<AlbumI>): FetchSongsTypes => ({
    type: FETCH_SONGS_SUCCESS,
    albums
})
export const fetchSongsError = (e: any): void => console.log(e)
