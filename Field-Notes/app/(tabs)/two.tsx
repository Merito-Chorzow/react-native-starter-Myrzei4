import { View, Text, FlatList } from "react-native"

const languages = [
  { code: "en", name: "English" },
  { code: "pl", name: "Polish" },
  { code: "de", name: "German" },
  { code: "fr", name: "French" },
  { code: "es", name: "Spanish" },
]

export default function TabTwo() {
  return (
    <View style={{ flex: 1, backgroundColor: "#121212", padding: 16 }}>
      <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", marginBottom: 12 }}>
        Available Languages
      </Text>
      <FlatList
        data={languages}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 12,
              borderBottomWidth: 1,
              borderBottomColor: "#333",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>
              {item.name} ({item.code})
            </Text>
          </View>
        )}
      />
    </View>
  )
}