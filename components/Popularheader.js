import React from 'react'
import { View, Text } from 'react-native'
import Color from '../config/Color'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Popularheader = () => {
    return (
        <View style={{
            height: 60,
            backgroundColor: Color.light,
            width: '100%',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            flexDirection: 'row',
            marginTop: 15,
            alignItems: 'center'
        }} >
            <View style={{

            }} >
                <Text style={{
                    fontFamily: 'Poppins',
                    fontSize: 20
                }} >Popular</Text>
            </View>
            <View>
                <MaterialIcons name='tune' size={25} />
            </View>
        </View>
    )
}

export default Popularheader
