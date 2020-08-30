import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useDeviceOrientation } from '@react-native-community/hooks'
import Color from '../config/Color'
import Header from '../components/Header'
import Input from '../components/Input'
import Catalog from '../components/Catalog'
import Popularheader from '../components/Popularheader'
import MedicineCard from '../components/MedicineCard'

const HomeScreen = ({ navigation }) => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://chintan27.pythonanywhere.com/medicine/')
            .then(res => res.json())
            .then((res) => setData(res))
            .catch(err => console.log(err))
    }, [])
    const portrait = useDeviceOrientation().portrait
    return (
        <View style={{ flex: 1, backgroundColor: Color.light }} >
            <View
                style={{
                }} >
                {portrait && <Header location={'London'} name='Samanta' />}
            </View>
            <View style={{ paddingHorizontal: 20, marginTop: 15 }}>
                <Input />
            </View>
            <ScrollView
                bounces={false}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                style={{ paddingHorizontal: 20, marginTop: 15, marginBottom: 5 }}>
                <View style={{ marginTop: 40 }}>
                    <Catalog />
                </View>
                <Popularheader />
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }} >
                    {data.map(e => (
                        <MedicineCard
                            key={e.id}
                            name={e.name}
                            image={e.image}
                            price={e.price}
                            numberOfPieces={e.amountperpack}
                            data={e}
                            navigation={navigation}
                        />

                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen
