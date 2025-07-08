import { FontAwesome } from "@expo/vector-icons";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <>
        <Tabs
            screenOptions={{
                headerStyle: { backgroundColor: "gray"},
                headerTintColor: "#FFFFFF",
                tabBarActiveTintColor: "blue",
                tabBarInactiveTintColor: "gray",
                headerLeft: () => <DrawerToggleButton tintColor="#FFFFFF"/>
            }}
        >
            <Tabs.Screen name="index" options={{
                title: "Home",
                tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />
            }}/>
            <Tabs.Screen name="settings" options={{
                title: "Configurações",
                tabBarIcon: ({ color }) => <FontAwesome name="cog" size={24} color={color} />
            }}/>
            <Tabs.Screen name="products" options={{
                title: "Produtos",
                tabBarIcon: ({ color }) => <FontAwesome name="shopping-bag" size={24} color={color} />
            }}/>

        </Tabs>
    </>
  );
}