import { useLocalSearchParams, useRouter, Link } from "expo-router"
import { useNotes } from "../../context/NotesContext"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { useState } from "react"
import { Picker } from "@react-native-picker/picker"
import { translateText } from "../../lib/translate"

export default function NoteDetails() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const { notes, deleteNote } = useNotes()
  const note = notes.find(n => n.id === id)
  const [translated, setTranslated] = useState<string | null>(null)
  const [lang, setLang] = useState("en")
  const router = useRouter()

  const handleTranslate = async () => {
    if (!note) return
    setTranslated("Translating...")
    try {
      const translatedText = await translateText(note.desc, lang)
      setTranslated(translatedText)
    } catch (e) {
      setTranslated("Translation failed")
    }
  }

  const handleDelete = () => {
    if (!note) return
    deleteNote(note.id)
    router.back()
  }

  if (!note) {
    return (
      <View style={{ flex: 1, padding: 16, backgroundColor: "#121212" }}>
        <Text style={{ color: "#fff" }}>Note not found</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#121212" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
        {note.title}
      </Text>
      <Text style={{ marginTop: 8, color: "#ddd" }}>{note.desc}</Text>
      {note.imageUri && (
        <Image
          source={{ uri: note.imageUri }}
          style={{ width: "100%", height: 250, marginTop: 16, borderRadius: 6 }}
        />
      )}

      <Picker
        selectedValue={lang}
        onValueChange={(val) => setLang(val)}
        style={{ color: "#fff", backgroundColor: "#222", marginTop: 20 }}
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Polish" value="pl" />
        <Picker.Item label="German" value="de" />
        <Picker.Item label="French" value="fr" />
        <Picker.Item label="Spanish" value="es" />
      </Picker>

      <TouchableOpacity
        onPress={handleTranslate}
        style={{ backgroundColor: "#2d6cdf", padding: 12, borderRadius: 6, marginTop: 12 }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>Translate</Text>
      </TouchableOpacity>
      {translated && (
        <Text style={{ marginTop: 12, color: "#0f0" }}>{translated}</Text>
      )}

      <View style={{ flexDirection: "row", marginTop: 20, gap: 12 }}>
        <Link href={{ pathname: "/note/edit", params: { id: note.id } }} asChild>
          <TouchableOpacity
            style={{ backgroundColor: "#2d6cdf", padding: 12, borderRadius: 6, flex: 1 }}
          >
            <Text style={{ color: "#fff", textAlign: "center" }}>Edit</Text>
          </TouchableOpacity>
        </Link>
        <TouchableOpacity
          onPress={handleDelete}
          style={{ backgroundColor: "#c62828", padding: 12, borderRadius: 6, flex: 1 }}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}