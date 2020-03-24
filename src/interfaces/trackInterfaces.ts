export interface AlbumI {
    id: string
    title: string
    isAvailable: boolean
    isFree: boolean
    isFeatured: boolean
    banner: {}
    cover: {
        url: string
        thumbnail: string
        resolutions: []
    }
    headphones: boolean
    descriptionHTML: string
    tracks: Array<TrackI>
}

export interface TrackI {
    key: string
    title: string
    order: number
    duration: number
    media: {
        mp3: {
            url: string
            headUrl: string
        }
    }
    isAvailable: boolean
}
