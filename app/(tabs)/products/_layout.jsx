import { Stack } from "expo-router";

export default function ProductsLayout() {
  return (
    <>
        <Stack
        screenOptions={{
                headerStyle: { backgroundColor: "gray"},
                headerTintColor: "#FFFFFF",
                headerShown: false, // Esconde o header padrão do Stack
            }}>

            <Stack.Screen name="index" 
            options={{ title: "Produtos", headerShown: false }} />
            <Stack.Screen name="products/[id]"
            options={{ title: "Detalhes do Produto", headerShown: false }} />
        </Stack>
    </>
  )
}