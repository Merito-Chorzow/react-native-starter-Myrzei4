import { View, Text } from "react-native";

export default function InfoScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#121212", justifyContent: "center", alignItems: "center", padding: 16 }}>
      <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", marginBottom: 12 }}>
        About the App
      </Text>
      <Text style={{ color: "#ddd", fontSize: 16, textAlign: "center" }}>
        The first tab displays your list of notes. 
        You can add new notes, attach photos from the gallery, 
        view details, edit existing notes, and delete them.
      </Text>
    </View>
  );
}