import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';

export default function RootLayout() {


  return (
    <>
    <StatusBar barStyle={'light-content'} />
      <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "gray"},
        headerTintColor: "#fff",
        //headerShown: false,
      }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* Tem que ser a ultima página ndo Stack.Screen para funcionar a página notfound */}
        <Stack.Screen name="+not-found" options={{headerTitle: "Erro"}} />
    </Stack>
    </>
  );
}
