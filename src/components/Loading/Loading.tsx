import React from 'react'
import {
    View,
    Text
} from 'react-native'

import styles from './styles'

const Loading: React.FC = () => {

    return (
        <View style={styles.wrapper}>
            <Text>Loading...</Text>
        </View>
    )
}

export default Loading
