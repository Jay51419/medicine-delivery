import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableHighlight, Dimensions, ScrollView, TouchableWithoutFeedback } from 'react-native'
import { PanGestureHandler } from "react-native-gesture-handler";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useDeviceOrientation } from '@react-native-community/hooks'
import Color from '../config/Color'
const InfoScreen = (props) => {
    const [portrait, setPortrait] = useState(true)
    useEffect(() => {
        if (Dimensions.get('window').width < Dimensions.get('window').height) {
            setPortrait(true)
        } else {
            setPortrait(false)
        }
    })
    const { navigation } = props
    const { height, width } = Dimensions.get('screen')
    const currentData = props.route.params['data'][0]
    const minHeight = 1 / 1.6 * height
    const maxHeight = height - 100
    const [currentHeight, setHeight] = useState(minHeight)

    let onGestureEvent = event => {
        const y = event.nativeEvent.translationY
        const changeY = 5
        y < 0 ? setHeight(maxHeight) : setHeight(minHeight)
    }
    return (
        portrait ? (
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                <View style={{
                    width: '100%',
                    height: 60,
                    justifyContent: 'center',
                    backgroundColor: 'rgba(102, 153, 204,0.2)'

                }}>
                    <TouchableWithoutFeedback onPress={() => navigation.goBack()} >
                        <MaterialIcons name='arrow-back' size={30} color={Color.dark} style={{
                            marginHorizontal: 10
                        }} />
                    </TouchableWithoutFeedback>

                </View>
                <View style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(102, 153, 204,0.2)',
                    position: 'absolute',
                    top: 60,
                    paddingTop: 20,
                }} >
                    <Image source={{ uri: `http://chintan27.pythonanywhere.com/${currentData.image}` }}
                        resizeMode={'contain'}
                        style={{
                            width: '100%',
                            height: 150
                        }} />
                </View>
                <View style={{
                    height: currentHeight,
                    width: '100%',
                    alignSelf: 'flex-end',
                    position: 'absolute',
                    zIndex: 20,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    backgroundColor: Color.light,
                }} >
                    <PanGestureHandler
                        onGestureEvent={onGestureEvent}
                        onHandlerStateChange={onGestureEvent}>
                        <View style={{ alignItems: 'center', height: 40 }}>
                            {/* <MaterialIcons name={`${currentHeight !== minHeight ? 'expand-more' : 'expand-less'}`} size={25} /> */}
                            <View style={{
                                height: 5,
                                width: 50,
                                borderRadius: 20,
                                backgroundColor: Color["grey"],
                                marginTop: 10,
                                opacity: 0.5
                            }} />
                        </View>
                    </PanGestureHandler>
                    <ScrollView>
                        <View style={{ paddingHorizontal: 15 }} >
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: '100%',
                                alignItems: 'center'
                            }}>
                                <View>
                                    <Text style={{
                                        fontFamily: 'Poppins',
                                        fontSize: 25

                                    }} >{currentData.name}</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        color: Color.grey,
                                        fontFamily: 'Poppins'
                                    }} >Tablets .{currentData.amountperpack} pieces</Text>
                                </View>
                                <View>
                                    <MaterialIcons name={'favorite-border'} size={30} />
                                </View>
                            </View>
                            <View style={{ marginVertical: 20, flexDirection: 'row' }} >
                                <Text style={{
                                    fontFamily: 'Poppins',
                                    fontSize: 30,

                                }} >${currentData.price}</Text>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 40 }} >
                                    <Text style={{ fontSize: 10, fontFamily: 'Poppins', }} >{currentData.remaininginstock} in stock</Text>
                                    <View>
                                        <View style={{
                                            height: 8,
                                            width: 90,
                                            borderRadius: 20,
                                            backgroundColor: Color["grey"],
                                            opacity: 0.5
                                        }} />
                                        <View style={{
                                            height: 8,
                                            width: 50,
                                            borderRadius: 20,
                                            backgroundColor: Color["green"],
                                            position: 'absolute'
                                        }} />
                                    </View>
                                </View>
                            </View>
                            <View >
                                <View style={{ flexDirection: 'row' }} >
                                    <View style={{ width: width / 2 }} >
                                        <Text style={{
                                            fontFamily: 'Poppins',
                                            fontSize: 13,
                                            color: Color.grey
                                        }} >Dosage form</Text>
                                        <Text style={{
                                            fontFamily: 'Poppins',
                                            fontSize: 18,
                                            color: Color.dark
                                        }} >{currentData.type}</Text>
                                    </View>
                                    <View style={{ width: width / 2 }} >
                                        <Text style={{
                                            fontFamily: 'Poppins',
                                            fontSize: 13,
                                            color: Color.grey
                                        }} >Active Substance</Text>
                                        <Text style={{
                                            fontFamily: 'Poppins',
                                            fontSize: 18,
                                            color: Color.dark
                                        }} >{currentData.name}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginVertical: 30 }} >
                                    <View style={{ width: width / 2 }} >
                                        <Text style={{
                                            fontFamily: 'Poppins',
                                            fontSize: 13,
                                            color: Color.grey
                                        }} >Dosage</Text>
                                        <Text style={{
                                            fontFamily: 'Poppins',
                                            fontSize: 18,
                                            color: Color.dark
                                        }} >{currentData.amountperdosage} g</Text>
                                    </View>
                                    <View style={{ width: width / 2 }} >
                                        <Text style={{
                                            fontFamily: 'Poppins',
                                            fontSize: 13,
                                            color: Color.grey
                                        }} >Manufacturer</Text>
                                        <Text style={{
                                            fontFamily: 'Poppins',
                                            fontSize: 18,
                                            color: Color.dark,
                                            paddingRight: 17
                                        }} >{currentData.manufacturer}</Text>
                                    </View>

                                </View>
                            </View>
                            <View style={{ width: '100%', alignItems: 'center' }}>
                                <TouchableHighlight style={{
                                    backgroundColor: Color.blue,
                                    width: '98%',
                                    height: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 15,
                                    marginTop: 10
                                }}>
                                    <Text style={{ color: Color.light, fontSize: 15, fontFamily: 'Poppins' }}>Add to cart</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
            : (
                <View style={{ flex: 1 }}>
                    <View style={{
                        width: '100%',
                        height: 60,
                        justifyContent: 'center',
                        backgroundColor: Color.light

                    }}>
                        <TouchableWithoutFeedback onPress={() => navigation.goBack()} >
                            <MaterialIcons name='arrow-back' size={30} color={Color.dark} style={{
                                marginHorizontal: 10
                            }} />
                        </TouchableWithoutFeedback>
                    </View>
                    <ScrollView style={{ backgroundColor: Color.light }} >
                        <View style={{ paddingHorizontal: 15 }} >
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: '100%',
                                alignItems: 'center'
                            }}>
                                <View>
                                    <Text style={{
                                        fontFamily: 'Poppins',
                                        fontSize: 25

                                    }} >{currentData.name}</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        color: Color.grey,
                                        fontFamily: 'Poppins'
                                    }} >Tablets .{currentData.amountperpack} pieces</Text>
                                </View>
                                <View>
                                    <MaterialIcons name={'favorite-border'} size={30} />
                                </View>
                            </View>
                            <View style={{ marginVertical: 20, flexDirection: 'row' }} >
                                <Text style={{
                                    fontFamily: 'Poppins',
                                    fontSize: 30,

                                }} >${currentData.price}</Text>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 40 }} >
                                    <Text style={{ fontSize: 10, fontFamily: 'Poppins', }} >{currentData.remaininginstock} in stock</Text>
                                    <View>
                                        <View style={{
                                            height: 8,
                                            width: 90,
                                            borderRadius: 20,
                                            backgroundColor: Color["grey"],
                                            opacity: 0.5
                                        }} />
                                        <View style={{
                                            height: 8,
                                            width: 50,
                                            borderRadius: 20,
                                            backgroundColor: Color["green"],
                                            position: 'absolute'
                                        }} />
                                    </View>
                                </View>
                            </View>
                            <View >
                                <View style={{ flexDirection: 'row' }} >
                                    <View style={{ width: width / 2 }} >
                                        <Text style={{
                                            fontFamily: 'Poppins',
                                            fontSize: 13,
                                            color: Color.grey
                                        }} >Dosage form</Text>
                                        <Text style={{
                                            fontFamily: 'Poppins',
                                            fontSize: 18,
                                            color: Color.dark
                                        }} >{currentData.type}</Text>
                                    </View>
                                    <View style={{ width: width / 2 }} >
                                        <Text style={{
                                            fontFamily: 'Poppins',
                                            fontSize: 13,
                                            color: Color.grey
                                        }} >Active Substance</Text>
                                        <Text style={{
                                            fontFamily: 'Poppins',
                                            fontSize: 18,
                                            color: Color.dark
                                        }} >{currentData.name}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginVertical: 30 }} >
                                    <View style={{ width: width / 2 }} >
                                        <Text style={{
                                            fontFamily: 'Poppins',
                                            fontSize: 13,
                                            color: Color.grey
                                        }} >Dosage</Text>
                                        <Text style={{
                                            fontFamily: 'Poppins',
                                            fontSize: 18,
                                            color: Color.dark
                                        }} >{currentData.amountperdosage} g</Text>
                                    </View>
                                    <View style={{ width: width / 2 }} >
                                        <Text style={{
                                            fontFamily: 'Poppins',
                                            fontSize: 13,
                                            color: Color.grey
                                        }} >Manufacturer</Text>
                                        <Text style={{
                                            fontFamily: 'Poppins',
                                            fontSize: 18,
                                            color: Color.dark,
                                            paddingRight: 17
                                        }} >{currentData.manufacturer}</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableHighlight style={{
                                backgroundColor: Color.blue,
                                width: '98%',
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 15,
                                bottom: 10
                            }}>
                                <Text style={{ color: Color.light, fontSize: 15, fontFamily: 'Poppins' }}>Add to cart</Text>
                            </TouchableHighlight>

                        </View>
                    </ScrollView>
                </View>
            )
    )




}

export default InfoScreen
