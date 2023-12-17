import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "./Screens/DashboardScreen";
import SettingScreen from "./Screens/SettingScreen";
import AppStack from "./AppStack";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          options={{
            headerStyle: {
              backgroundColor: "orange",
            },
          }}
          name="Dashboard"
          component={DashboardScreen}
        />
        <Drawer.Screen
          options={{
            headerStyle: {
              backgroundColor: "orange",
            },
          }}
          name="Settings"
          component={SettingScreen}
        />
        <Drawer.Screen
          options={{
            headerStyle: {
              backgroundColor: "orange",
            },
          }}
          name="HomePage"
          component={AppStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
