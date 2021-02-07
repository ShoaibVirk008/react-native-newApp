import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { header, routes, headers } from '../../constants';
import { Home, Promos, Chat } from '../../../screens/mainFlow';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTopTab from '../customTopTab'
const AppStack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();



const MainTopTab = () => {
    return (
        <TopTab.Navigator
            tabBar={(props) => <CustomTopTab {...props} />}
        // initialRouteName={routes.home}
        >
            <TopTab.Screen name={routes.promos} component={Promos} />
            <TopTab.Screen name={routes.home} component={Home} />
            <TopTab.Screen name={routes.chat} component={Chat} />
        </TopTab.Navigator>
    );
}


const AppNavigation = () => {
    return (
        <AppStack.Navigator
            screenOptions={headers.screenOptions}
            initialRouteName={routes.welcome}
        >
            {/* <AppStack.Screen name={routes.signin} component={Home}
                options={{
                    headerShown: false,
                    //title: 'Sign In'
                }}
            /> */}
            <AppStack.Screen name={routes.mainTopTab} component={MainTopTab}
                options={{
                    headerShown: false,
                    //title: 'Sign In'
                }}
            />
        </AppStack.Navigator>
    )
}

export default AppNavigation