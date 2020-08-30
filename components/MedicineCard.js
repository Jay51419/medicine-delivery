import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import Color from '../config/Color'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const MedicineCard = ({ onPress, name, price, numberOfPieces, image, data, navigation }) => {
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Info', { data: [data] })} >
            <View style={{
                width: 130,
                height: 180,
                backgroundColor: 'rgba(0,0,255,0.1)',
                marginHorizontal: 15,
                marginVertical: 5,
                borderRadius: 10,
                borderWidth: 1.5,
                borderColor: 'rgba(0,0,0,0.1)',
            }} >
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50%',
                }} >
                    <Image source={{ uri: `http://chintan27.pythonanywhere.com/${image}` }}
                        resizeMode={'contain'}
                        style={{
                            width: 60,
                            height: 60,
                        }} />
                </View>
                <View style={{
                    height: '50%',
                    paddingLeft: 10,
                    paddingRight: 10
                }} >
                    <Text style={{
                        fontFamily: 'Poppins',
                        fontSize: 15

                    }} >{name.length <= 15 ? name : `${name.slice(0, 15)}...`}</Text>
                    <Text style={{
                        fontSize: 8,
                        color: Color.grey,
                        fontFamily: 'Poppins'
                    }} >Tablets .{numberOfPieces} pieces</Text>
                    <Text style={{
                        fontFamily: 'Poppins',
                        fontSize: 12,
                        marginTop: 5

                    }} >${price}</Text>
                </View>

            </View>
        </TouchableWithoutFeedback>
    )
}

export default MedicineCard
