import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./Home";
import Orders from "./Orders";

const Stack = createStackNavigator();

function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#fff'
                    }
                }}
            >
                <Stack.Screen name="Home" component={Home} /> 
                <Stack.Screen name="Orders" component={Orders} />     
            </Stack.Navigator>
        </NavigationContainer>
    )
    
}

export default Routes;