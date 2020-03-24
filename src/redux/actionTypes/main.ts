import { AlbumI } from "../../interfaces/trackInterfaces"

export const FETCH_SONGS_GET = "FETCH_SONGS_GET"
export const FETCH_SONGS_START = "FETCH_SONGS_START"
export const FETCH_SONGS_SUCCESS = "FETCH_SONGS_SUCCESS"

interface GetFetchSongs {
    type: typeof FETCH_SONGS_GET
}
interface StartFetchSongs {
    type: typeof FETCH_SONGS_START
}
interface SuccessFetchSongs {
    type: typeof FETCH_SONGS_SUCCESS
    albums: Array<AlbumI>
}

export type FetchSongsTypes =
    GetFetchSongs |
    StartFetchSongs |
    SuccessFetchSongs
