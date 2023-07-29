import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import your desired icon library

const NavigationTab = () => {
    const iconNames = ['home', 'search', 'bell', 'user'];
    const [selectedIconIndex, setSelectedIconIndex] = useState(0);

    const handleIconPress = (index) => {
        setSelectedIconIndex(index);
    };

    return (
        <View style={styles.container}>
            {iconNames.map((name, index) => (
                <TouchableOpacity
                    key={index}
                    style={[styles.iconContainer, index < iconNames.length - 1 ? styles.borderRight : null]}
                    onPress={() => handleIconPress(index)}
                >
                    <Icon name={name} size={24} color="white" />
                    {index === selectedIconIndex && <View style={styles.underline} />}
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default NavigationTab;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: 60,
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative', // To allow positioning of the underline
    },
    borderRight: {
        borderRightWidth: 1,
        borderRightColor: 'white',
    },
    underline: {
        position: 'absolute',
        bottom: -10, // Adjust this value to control the distance of the underline from the icon
        left: '35%',
        width: 24, // Adjust this value to control the width of the underline
        height: 2,
        backgroundColor: 'white',
    },
});
