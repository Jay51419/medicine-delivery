import React from 'react'
import { View, Text } from 'react-native'
import Color from '../config/Color'

const Location = () => {
    return (
        <View style={{
            flex: 1
        }}>
            <View style={{
                height: 100,
                width: 100,
                backgroundColor: Color.blue
            }} />
            <View style={{
                height: 100,
                width: 100,
                backgroundColor: Color["dark blue"]
            }} />
            <View style={{
                height: 100,
                width: 100,
                backgroundColor: Color.purple,
                alignSelf: 'flex-end'
            }} />
        </View>
    )
}

export default Location
