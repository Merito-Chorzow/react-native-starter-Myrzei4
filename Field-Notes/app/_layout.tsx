import { Stack } from "expo-router";
import { NotesProvider } from "../context/NotesContext";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <NotesProvider>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#121212" },
          headerTintColor: "#fff",
          contentStyle: { backgroundColor: "#121212" },
        }}
      />
    </NotesProvider>
  );
}