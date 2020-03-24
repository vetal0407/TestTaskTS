import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'

import Track from '../Track/Track'

import { AlbumI, TrackI } from "../../interfaces/trackInterfaces"

import styles from './styles'

type Props = {
    album: AlbumI
}

const Album: React.FC<Props> = ({ album }) => {
    return (
        <>
            <View style={styles.headerWrapper}>
                <Image
                    style={styles.image}
                    source={{uri: album.cover.url}}
                />
                <Text style={styles.title}>
                    {album.title}
                </Text>
            </View>
            {
                album.tracks.map((track: TrackI) => <Track
                    key={track.key}
                    track={track}
                />)
            }
        </>
    )
}

export default Album
