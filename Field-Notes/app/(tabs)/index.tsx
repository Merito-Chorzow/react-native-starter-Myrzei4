import { View, Text, FlatList, TouchableOpacity, Image } from "react-native"
import { Link } from "expo-router"
import { useNotes } from "../../context/NotesContext"

export default function NotesList() {
  const { notes } = useNotes()

  return (
    <View style={{ flex: 1, backgroundColor: "#121212", padding: 16 }}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={{ pathname: "/note/[id]", params: { id: item.id } }} asChild>
            <TouchableOpacity style={{ padding: 12, borderBottomWidth: 1, borderBottomColor: "#333" }}>
              <Text style={{ color: "#fff", fontSize: 16 }}>{item.title}</Text>
              {item.imageUri && (
                <Image
                  source={{ uri: item.imageUri }}
                  style={{ width: 80, height: 80, marginTop: 8, borderRadius: 6 }}
                />
              )}
            </TouchableOpacity>
          </Link>
        )}
      />
      <Link href="/note/new" asChild>
        <TouchableOpacity
          style={{
            backgroundColor: "#2d6cdf",
            padding: 16,
            borderRadius: 6,
            marginTop: 16,
          }}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>Add Note</Text>
        </TouchableOpacity>
      </Link>
    </View>
  )
}