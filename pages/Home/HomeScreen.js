import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTab from './tabs/HomeTab';
import MyGoalsTab from './tabs/MyGoalsTab';

const Tab = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                initialRouteName: "Home"
            }}
        >
            <Tab.Screen name="Home" component={HomeTab} />
            <Tab.Screen name="MyGoals" component={MyGoalsTab} />
        </Tab.Navigator>
    );
}

export default HomeScreen