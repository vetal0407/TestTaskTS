import React from 'react'
import {
    Text,
    TouchableOpacity
} from 'react-native'

import SoundPlayer from 'react-native-sound-player'

import { TrackI } from "../../interfaces/trackInterfaces"

import styles from './styles'

type Props = {
    track: TrackI
}

const Track: React.FC<Props> = ({ track }) => {

    function playTrack(url) {
        try {
            SoundPlayer.playUrl(url)
        } catch (e) {
            console.log(`cannot play the sound file`, e)
        }
    }

    return (
        <TouchableOpacity onPress={() => playTrack(track.media.mp3.url) }>
            <Text style={styles.track}>
                {track.title}
            </Text>
        </TouchableOpacity>
    )
}

export default Track
