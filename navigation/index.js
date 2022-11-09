import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Albun } from "../screens/Albuns";
import { Biografia } from "../screens/Biografia";
import { Home } from "../screens/Home";
import { Noticias } from "../screens/Noticias";

//const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export const RootNavigation = () => {
  return (
    <Tab.Navigator
      activeColor="#3e2465"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#F0F8FF" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Albuns"
        component={Albun}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="album" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Noticias"
        component={Noticias}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="newspaper-variant-multiple" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Sobre"
        component={Biografia}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="information-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};