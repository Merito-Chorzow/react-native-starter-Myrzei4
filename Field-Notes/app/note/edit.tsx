import { useState } from "react";
import { useNotes } from "../../context/NotesContext";
import { useLocalSearchParams, useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

export default function EditNote() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { notes, updateNote } = useNotes();
  const router = useRouter();
  const note = notes.find(n => n.id === id);

  const [title, setTitle] = useState(note?.title || "");
  const [desc, setDesc] = useState(note?.desc || "");
  const [image, setImage] = useState<string | undefined>(note?.imageUri);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const save = () => {
    if (!note) return;
    updateNote(note.id, title, desc, image);
    router.back();
  };

  if (!note) {
    return (
      <View style={{ flex: 1, padding: 16, backgroundColor: "#121212" }}>
        <Text style={{ color: "#fff" }}>Note not found</Text>
      </View>
    );
  }

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
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: "100%", height: 200, marginBottom: 12, borderRadius: 6 }}
        />
      )}
      <TouchableOpacity
        onPress={pickImage}
        style={{ backgroundColor: "#444", padding: 12, borderRadius: 6, marginBottom: 12 }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>Pick Image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={save}
        style={{ backgroundColor: "#2d6cdf", padding: 12, borderRadius: 6 }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}