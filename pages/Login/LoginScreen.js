import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginWelcomeTab from './tabs/LoginWelcomeTab';
import LoginSigninTab from './tabs/LoginSigninTab';
import LoginRegisterTab from './tabs/LoginRegisterTab';

const Tab = createNativeStackNavigator();

const LoginScreen = ({ navigation }) => {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName = "LoginWelcome"
        >
            <Tab.Screen name="LoginWelcome" component={LoginWelcomeTab} />
            <Tab.Screen name="LoginSignin" component={LoginSigninTab} />
            <Tab.Screen name="LoginRegister" component={LoginRegisterTab} />
        </Tab.Navigator>
    );
}

export default LoginScreen