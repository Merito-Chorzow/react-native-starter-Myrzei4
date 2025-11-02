import { useNotes } from "../../context/NotesContext";
import { Link } from "expo-router";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

export default function Home() {
  const { notes } = useNotes();

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#121212" }}>
      <FlatList
        data={notes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Link href={`/note/${item.id}`}>
            <Text style={{ fontSize: 18, color: "#fff", marginVertical: 8 }}>
              {item.title}
            </Text>
          </Link>
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: "#333" }} />
        )}
        ListEmptyComponent={
          <Text style={{ color: "#aaa", marginTop: 20 }}>No notes yet</Text>
        }
      />
      <Link href="/note/new" asChild>
        <TouchableOpacity
          style={{
            backgroundColor: "#2d6cdf",
            padding: 12,
            marginTop: 16,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>Add Note</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}