import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const CallMeScreen = ({ navigation }) => {
    return (
        <View style={styles.CallMeContainer}>
            <View style={styles.textContainer}>
                <Text>Your Request has been accepted, you will receive call from the agent</Text>
            </View>
            <Button title="BACK" onPress={() => navigation.navigate('ServiceScreen')} ></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    CallMeContainer: {
        alignItems: 'center',
        marginTop: 140,
        justifyContent: 'center'
    },
    textContainer: {
        fontSize: 300,
        margin: 50,
        borderBottomColor: 'grey',
        borderColor: 'black'
    }
})

export default CallMeScreen;