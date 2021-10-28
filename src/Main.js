/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { ScrollView, SafeAreaView, View, Text, Image, Button, FlatList, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { decremented, incremented, incrementedByAmount } from './features/counter/counter-slice';
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice'

export default function Main() {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const [numDogs, setNumDogs] = useState(10)


    const { data = [], isFetching } = useFetchBreedsQuery(numDogs)

    return (
        <SafeAreaView>

            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View>
                    <Text>Redux Toolkit demo : {count}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Button onPress={() => {
                            dispatch(incremented())
                        }} title='increment' />
                        <Button onPress={() => {
                            dispatch(decremented())
                        }} title='decrement' />
                        <Button onPress={() => {
                            dispatch(incrementedByAmount(10))
                        }} title='incrementByAmount' />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
                        <Text>No of dogs fetch</Text>

                        <Button onPress={() => { setNumDogs(5) }} title='5' />
                        <Button onPress={() => { setNumDogs(10) }} title='10' />
                        <Button onPress={() => { setNumDogs(15) }} title='15' />
                        <Button onPress={() => { setNumDogs(20) }} title='20' />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 5 }}>
                        <Text style={{ fontWeight: '800' }}>Name</Text>
                        <Text style={{ fontWeight: '800' }}>Picture</Text>
                    </View>
                    <ActivityIndicator
                        style={isFetching ? { display: 'flex' } : { display: 'none' }}
                        size='large' color='#0000FF' />
                    <FlatList
                        style={isFetching ? { display: 'none' } : { display: 'flex' }}
                        columnWrapperStyle={{ flexWrap: 'wrap', flex: 1, }}
                        numColumns={2}
                        data={data}
                        renderItem={({ item, index }) =>
                            <View
                                key={item.id}
                                style={{ width: 140, }}>
                                <Image source={{ uri: item.image.url }} style={{ height: 100, width: 130, resizeMode: 'contain' }} />
                                <Text >{item.name}</Text>
                            </View>
                        }
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
