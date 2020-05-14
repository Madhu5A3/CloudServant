import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import UploadCard from './UploadCard';

const UploadScreen = ({ navigation }) => {
    /*const [enteredText, setOutputText] = useState('');

    const handleText = setText => {
        setOutputText(setText)
    }*/
    
    return (
        <View style={styles.screen}>
            <UploadCard style={styles.inputContainer}>
                <View style={styles.BrowseContainer}>
                    <Button title="Browse" onPress={() => { console.log('Uploaded File') }}></Button>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="BACK" onPress={() => navigation.navigate('ServiceScreen')}></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title="SUBMIT" onPress={() => { }}></Button>
                    </View>
                </View>
            </UploadCard>
        </View>
    );
};

const styles = StyleSheet.create({
    BrowseContainer: { padding: 10, width: 100 },
    screen: { padding: 20, flex: 1, alignItems: 'center', marginTop: 200 },
    inputContainer: { width: 400, maxWidth: '80%', height: '50%', alignItems: 'center', justifyContent: 'space-around' },
    buttonContainer: {
        flexDirection: 'row', width: '90%', justifyContent: 'space-between'
    },
    button: { width: 100 }
})

export default UploadScreen;