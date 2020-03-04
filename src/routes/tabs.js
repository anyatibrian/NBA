import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicicons from 'react-native-vector-icons/Ionicons'
import GameScreen from '../screens/GameScreen'
import NewsScreen from '../screens/NewsScreen'
const Tabs = createBottomTabNavigator()
const tabs = () => {
    return (
        <NavigationContainer independent={true}>
            <Tabs.Navigator initialRouteName={NewsScreen}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let IconName
                        if (route.name === "Games") {
                            IconName = focused ? 'ios-american-football' : 'ios-american-football'
                        } else if (route.name === "News") {
                            IconName = focused ? 'logo-designernews' : 'logo-designernews'
                        }

                        return <Ionicicons name={IconName} color={color} size={size} />
                    }
                })}
                tabBarOptions={{
                    style: {
                        backgroundColor: '#17408b'
                    },
                    activeTintColor: '#ffff',
                    showLabel: false,
                    activeBackgroundColor: '#00194b',
                    inactiveBackgroundColor: '#001338'
                }}
            >
                <Tabs.Screen
                    name="Games"
                    component={GameScreen}
                />
                <Tabs.Screen
                    name="News"
                    component={NewsScreen}
                />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

export default tabs
