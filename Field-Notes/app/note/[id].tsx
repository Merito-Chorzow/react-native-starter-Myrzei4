import { useLocalSearchParams } from "expo-router";
import { useNotes } from "../../context/NotesContext";
import { View, Text } from "react-native";

export default function NoteDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { notes } = useNotes();
  const note = notes.find(n => n.id === id);

  if (!note) {
    return (
      <View style={{ flex: 1, padding: 16, backgroundColor: "#121212" }}>
        <Text style={{ color: "#fff" }}>Note not found</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#121212" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
        {note.title}
      </Text>
      <Text style={{ marginTop: 8, color: "#ddd" }}>{note.desc}</Text>
    </View>
  );
}