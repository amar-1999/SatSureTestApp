import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import NavigationTab from './NavigationTab'
import BodyComponent from './BodyComponent'
const HomeScreen = ({ data }) => {
    return (
        <View>
            <View
                style={{
                    height: '10%',
                    backgroundColor: '#116366',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Header data={data} />
            </View>
            <View
                style={{
                    height: '80%',
                    backgroundColor: '#F0F0F0',
                    padding: 15,
                }}>
                <BodyComponent data={data} />
            </View>
            <View
                style={{
                    height: '10%',
                    backgroundColor: '#116366',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <NavigationTab />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})