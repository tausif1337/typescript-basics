//App.tsx is the main component of the app
import { StyleSheet, SafeAreaView } from "react-native";
import Greetings from "./components/Greetings";

export default function App() {
  const users = [
    { id: 1, name: "Tausif", age: 20, isLoggedIn: true },
    { id: 2, name: "John", age: 21, isLoggedIn: false },
    { id: 3, name: "Jane", age: 22, isLoggedIn: true },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <Greetings users={users} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
