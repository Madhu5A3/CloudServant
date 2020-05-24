import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import ServiceScreen from './ServiceScreen';
import { createStackNavigator } from 'react-navigation-stack';
// import { StackNavigator } from 'react-navigation';
import CloudServantDrawer from './CloudServantDrawer';
import { createAppContainer } from 'react-navigation';
// import {} from 'react-navigation';
import UploadCard from './UploadCard';
import { NavigationContainer, StackActions } from '@react-navigation/native';

// const Stack = createStackNavigator();
/*class HomeStackScreen extends Component{
    render(){
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Service" component={ServiceScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}*/
const HomeScreen = ({ navigation }) => {
    // console.log(navigation.navigate('ServiceScreen'))
    // console.log(this.props.navigation.navigate('ServiceScreen'))
    /*handlePress = props => {
        // props.navigation.navigate('ScreenStack')
        console.log(props)
    }*/
    return (
        <View style={styles.homeScreen}>
            <UploadCard style={styles.homeCard}>
                <View style={styles.buttonContainer}>
                    <Button title="REQUEST" onPress={() => navigation.navigate('ServiceScreen')}></Button>
                    <Button title="ORDER" onPress={() => { }}></Button>
                </View>
            </UploadCard>
        </View>
    )
}

/*const HomeServiceNavigator = createStackNavigator({
    Service: {
        screen: ServiceScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Service',
            headerLeft: () => <CloudServantDrawer navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: 'red',
            },
            // headerRight: <BellIcon navigationProps={navigation}/>
        }),
    },
});*/
/*const ScreenStackNavigator = createStackNavigator({
    Service: {
        screen: ServiceScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Service',
            headerLeft: () => <CloudServantDrawer navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: 'red',
            },
            // headerRight: <BellIcon navigationProps={navigation}/>
        }),
    }
})*/

// console.log(ScreenStackNavigator.initialRouteName)
/*export default HomeScreen1 = StackNavigator({
    ScreenStack: {
        screen: ServiceScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Service',
            headerLeft: () => <CloudServantDrawer navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: 'red',
            }
        }),
    }
})*/

// const HomeContainer =createAppContainer(HomeServiceNavigator);

/*export default function HomeScreen (){
    return (
        <HomeContainer />
    );
}*/

const styles = StyleSheet.create({
    homeCard: {
        width: 300, maxWidth: '80%', height: '50%', alignItems: 'center', justifyContent: 'space-around'
    },
    homeScreen: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'center'
    },
    textContainer: {
        fontSize: 20
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 180,
        height: 180,
    }
})

export default HomeScreen;
