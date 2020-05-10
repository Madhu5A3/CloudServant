import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen';
import NotificationScreen from './components/NotificationScreen';
import BellIcon from 'react-bell-icon';
import ServiceScreen from './components/ServiceScreen';
import CloudServantDrawer from './components/CloudServantDrawer';
import CallMeScreen from './components/CallMeScreen';
import UploadScreen from './components/UploadScreen';
import PlaceOrderScreen from './components/PlaceOrderScreen';
import NotificationIconComponent from './components/NotificationIconComponent';

const ServiceScreenStackDrawer = createStackNavigator({
  ServiceScreen: {
    screen: ServiceScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Service',
      headerLeft: () => <CloudServantDrawer navigationProps={navigation} />,
      headerRight: () => <NotificationIconComponent navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF4136',
      },
      // headerRight: <BellIcon navigationProps={navigation}/>
    }),
  }
});

const CallMeScreenStackDrawer = createStackNavigator({
  CallMeScreen: {
    screen: CallMeScreen,
    navigationOptions: ({navigation}) => ({
      title: 'CallMeScreen',
      headerStyle:{
        backgroundColor: '#FF4136',
      }
    }),
    headerRight: () => <NotificationIconComponent navigationProps={navigation} />,
  }
})

const PlaceOrderScreenStackDrawer = createStackNavigator({
  PlaceOrderScreen: {
    screen: PlaceOrderScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Place Order Screen',
      headerStyle: {
        backgroundColor: '#FF4136'
      }
    }),
    headerRight: () => <NotificationIconComponent navigationProps={navigation} />,
  }
})

const UploadScreenStackDrawer = createStackNavigator({
  UploadScreen:{
    screen: UploadScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Upload Screen',
      headerStyle: {
        backgroundColor: '#FF4136',
      },
    }),
    headerRight: () => <NotificationIconComponent navigationProps={navigation} />,
  }
})
const HomeScreenStackDrawer = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: () => <CloudServantDrawer navigationProps={navigation} />,
      headerRight: () => <NotificationIconComponent navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF4136',
      },
      headerTintColor: '#fff',
      // headerRight: <BellIcon navigationProps={navigation}/>
    }),
  }
})
/*const ScreenStackNavigator = createStackNavigator({
  ScreenStack: {
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

const NotificationScreenStackDrawer = createStackNavigator({
  Notification: {
    screen: NotificationScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Notifications',
      headerLeft: () => <CloudServantDrawer navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF4136',
      },
    }),
    headerRight: () => <NotificationIconComponent navigationProps={navigation} />,
  }
})


const CloudServantStackDrawerNavigator = createDrawerNavigator({
  HomeScreen: {
    screen: HomeScreenStackDrawer,
    navigationOptions: {
      drawerLabel: 'Home Label',
    },
  },
  NotificationScreen: {
    screen: NotificationScreenStackDrawer,
    navigationOptions: {
      drawerLabel: 'Notification Label',
    },
  },
  ServiceScreen: {
    screen: ServiceScreenStackDrawer,
    navigationOptions: {
      drawerLabel: 'Service Label'
    }
  },
  CallMeScreen:{
    screen: CallMeScreenStackDrawer,
    navigationOptions: {
      drawerLabel: 'Call Me Screen Label'
    }
  },
  UploadScreen:{
    screen: UploadScreenStackDrawer,
    navigationOptions:{
      drawerLabel: 'Upload Screen Label'
    }
  },
  PlaceOrderScreen:{
    screen: PlaceOrderScreenStackDrawer
  }
},
);

/*const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  imageContainer: {
    width: 25, height: 25, marginLeft: 5
  }
})*/

// const App = createAppContainer(CloudServantStack);
// export default App;
const AppDrawer = createAppContainer(CloudServantStackDrawerNavigator);
export default AppDrawer;