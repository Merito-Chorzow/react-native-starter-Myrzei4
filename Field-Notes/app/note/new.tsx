import { useState } from "react";
import { useNotes } from "../../context/NotesContext";
import { useRouter } from "expo-router";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function NoteForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { addNote } = useNotes();
  const router = useRouter();

  const save = () => {
    if (!title.trim()) return;
    addNote(title, desc);
    router.back();
  };

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#121212" }}>
      <Text style={{ color: "#fff", marginBottom: 8 }}>Title</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={{
          borderWidth: 1,
          borderColor: "#555",
          marginBottom: 12,
          padding: 8,
          color: "#fff",
        }}
        placeholder="Enter title"
        placeholderTextColor="#777"
      />
      <Text style={{ color: "#fff", marginBottom: 8 }}>Description</Text>
      <TextInput
        value={desc}
        onChangeText={setDesc}
        style={{
          borderWidth: 1,
          borderColor: "#555",
          marginBottom: 12,
          padding: 8,
          color: "#fff",
          minHeight: 80,
        }}
        placeholder="Enter description"
        placeholderTextColor="#777"
        multiline
      />
      <TouchableOpacity
        onPress={save}
        style={{ backgroundColor: "#2d6cdf", padding: 12, borderRadius: 6 }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}