import { View, Text, FlatList, StyleSheet } from "react-native";

interface UserProps {
  id: number;
  name: string;
  age: number;
  isLoggedIn: boolean;
}

export default function Greetings({ users }: { users: UserProps[] }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <Text style={styles.userText}>
            {item.name} you are {item.age} years old
            {item.isLoggedIn ? " (Logged In)" : " (Not Logged In)"}
          </Text>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  count: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
  },
  userText: {
    fontSize: 16,
    padding: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 4,
  },
});