import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import your desired icon library for the menu icon

const Header = ({ data }) => {
    const handleCallPress = () => {
        if (data?.mobileNo) {
            Linking.openURL(`tel:${data.mobileNo}`);
        }
    };

    return (
        <View style={styles.container}>
            {/* View for the menu icon, takes 15% of the complete View */}
            <View style={styles.menuIconContainer}>
                <Icon name="bars" size={20} color="white" />
            </View>

            {/* View for the name and mobile number, takes 85% of the complete View */}
            <View style={styles.contentContainer}>
                <View style={styles.row}>
                    <Icon name="user" size={14} color="white" style={styles.icon} />
                    <Text style={styles.text}>{data?.name}</Text>
                </View>
                <TouchableOpacity style={styles.row} onPress={handleCallPress}>
                    <Icon name="mobile" size={14} color="white" style={styles.icon} />
                    <Text style={[styles.text, { textDecorationLine: 'underline' }]}>{data?.mobileNo}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 15,
    },
    menuIconContainer: {
        width: '15%',
    },
    contentContainer: {
        width: '85%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    text: {
        color: 'white',
        fontSize: 14,
        marginLeft: 8,
    },
    icon: {
        marginRight: 8,
    },
});
