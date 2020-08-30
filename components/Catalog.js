import React from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import Color from '../config/Color'

const Catalog = () => {
    return (
        <View style={{
            width: '100%',
            height: 150,
            backgroundColor: 'rgba(102, 153, 204,0.2)',
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        }} >
            <View style={{ width: '50%', height: '100%', justifyContent: 'center', paddingLeft: 20, }} >
                <Text style={{ fontFamily: 'Poppins', fontSize: 17 }} >We will deliver you medicines</Text>
                <TouchableHighlight style={{
                    backgroundColor: Color.blue,
                    width: 100,
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    top: 20
                }}>
                    <Text style={{ color: Color.light, }}>Catalog</Text>
                </TouchableHighlight>
            </View>
            <View style={{ width: '50%', alignItems: 'flex-end' }} >
                <Image resizeMode={'center'} source={require('../assets/images/man.png')} style={{ width: 140, height: 200 }} />
            </View>

        </View>
    )
}

export default Catalog
