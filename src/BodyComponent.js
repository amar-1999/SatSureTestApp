import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const BodyComponent = ({ data }) => {
    const { width } = Dimensions.get('window')

    return (
        <View>
            <Text style={styles.text}>{data?.title}</Text>
            {data?.categories.map((item, index) => {
                const boxStyle = {
                    width: item.value / width * 14,
                    paddingHorizontal: 25,
                    paddingVertical: 20,
                    backgroundColor: item.color, // Assuming you have a backgroundColor property in your API response for each category
                    marginVertical: 10,
                    borderRadius: 10,
                    elevation: 5, // Assuming you have a width property in your API response for each category
                };
                return (
                    <View key={index} style={[boxStyle]}>
                        <Text style={styles.title}>{item?.title}</Text>
                        <Text style={styles.caption}>Value - {item?.value}</Text>
                    </View>
                )
            })}
        </View>
    )
}

export default BodyComponent

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
    },
    title: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    caption: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
    },
})
