import { FontAwesome } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { router } from "expo-router";
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'react-native';

export default function RootLayout() {

  const CustomDrawerContent = () => {

    return (
      <DrawerContentScrollView>
        <DrawerItem
          icon={({ color }) => <FontAwesome size={28} name="user" color={color} />}
          label="Usuário"
          onPress={() => router.push('/user')}
        />
      </DrawerContentScrollView>
    )
  }

  return (
    <>
    <StatusBar barStyle={'light-content'} />
      <Drawer
      drawerContent={() =>  <CustomDrawerContent />}
      screenOptions={{
        headerStyle: { backgroundColor: "gray"},
        headerTintColor: "#fff",
        //headerShown: false,
      }}>
        <Drawer.Screen name="(tabs)" options={{ headerShown: false}}/>
        {/* Tem que ser a ultima página ndo Stack.Screen para funcionar a página notfound */}
        <Drawer.Screen name="+not-found" options={{headerTitle: "Erro"}} />
    </Drawer>
    </>
  );
}
