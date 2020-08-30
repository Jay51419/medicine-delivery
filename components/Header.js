import React from 'react'
import { View, Text, Image } from 'react-native'
import Color from '../config/Color'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Header = ({ location, name }) => {
    return (
        <View style={{ height: 100, width: '100%' }} >
            <View style={{ flexDirection: 'row', paddingTop: 25, paddingLeft: 15 }} >
                <MaterialIcons name='map' size={20} color={Color.grey} />
                <Text style={{ fontSize: 15, color: Color.grey, paddingLeft: 5 }} >{location}</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 10, paddingLeft: 15, justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }} >
                    <Text style={{ fontSize: 25, color: Color.dark }}>Hi, </Text>
                    <Text style={{ fontSize: 25, color: Color.dark, fontFamily: 'Poppins', fontWeight: '600' }}>{`${name} !`}</Text>
                </View>
                <Image source={{ uri: 'https://picsum.photos/200' }} style={{ width: 40, height: 40, borderRadius: 20, marginRight: 15 }} />
            </View>
        </View>
    )
}

export default Header
