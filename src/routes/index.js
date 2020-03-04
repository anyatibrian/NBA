import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import { store } from '../store'
import HeaderLogo from '../components/auth/HeaderLogo'
import Home from '../screens/HomeScreen'
import SingleNewsScreen from '../screens/SingleNewsScreen'
import tabs from './tabs'
const Stack = createStackNavigator()
const AppNavigatior = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            headerStyle: {
                                backgroundColor: '#17408b',
                                display: 'none'
                            },
                            headerTintColor: '#ffff',
                            headerTitleStyle: {
                                fontWeight: '900'
                            },
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="News"
                        component={tabs}
                        options={{
                            headerTitle: HeaderLogo,

                            headerStyle: {
                                backgroundColor: '#17408b',
                            },
                            headerTintColor: '#ffff'
                        }}
                    />
                    <Stack.Screen
                        name="SingleArticle"
                        component={SingleNewsScreen}
                        options={{
                            headerTitle: HeaderLogo,
                            headerStyle: {
                                backgroundColor: '#17408b',
                            },
                            headerTintColor: '#ffff'
                        }}

                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default AppNavigatior