import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="index" />
      <Stack.Screen name="onboard" />
      <Stack.Screen name="login" />
      <Stack.Screen name="userDetails" />
      <Stack.Screen name="employes" />
      <Stack.Screen name="notification" />
    </Stack>
  );
}
