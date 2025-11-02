import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function ModalScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.modalBox}>
        <Text style={styles.title}>Information</Text>
        <Text style={styles.message}>
          This is a modal window. You can use it to show details, warnings, or confirmations.
        </Text>
        <TouchableOpacity onPress={() => router.back()} style={styles.button}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#1e1e1e",
    padding: 20,
    borderRadius: 8,
    width: "85%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#666",
    marginBottom: 12,
  },
  message: {
    fontSize: 16,
    color: "#ccc",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2d6cdf",
    paddingVertical: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
});