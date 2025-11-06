import { View, Text, FlatList, StyleSheet } from "react-native";

interface UserProps {
    id: number;
    name: string;
    age: number;
    isLoggedIn: boolean;
}

interface UserListProps {
  users: UserProps[];
  count: number;
}

export default function Greetings({ users, count }: UserListProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <Text>{item.name} you are {item.age} years old</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={styles.count}>Count: {count}</Text>
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
});