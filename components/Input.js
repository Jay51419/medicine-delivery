import React from 'react'
import { View, Text, TextInput } from 'react-native'
import Color from '../config/Color'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const Input = () => {
    return (
        <View style={{
            flexDirection: 'row',
            width: '100%',
            height: 40,
            backgroundColor: Color["light grey"],
            borderRadius: 10
        }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: 60 }} >
                <MaterialIcons name='search' size={30} color={Color.grey} />
            </View>
            <View>
                <TextInput placeholder='Search for medicine' selectionColor={Color.grey} />
            </View>
        </View>
    )
}

export default Input
