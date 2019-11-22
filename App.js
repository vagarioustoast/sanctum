import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Image, Button } from "react-native";

export default function App() {
  const [location, setLocation] = useState("");
  return (
    <View style={styles.container}>
      <View>
        <Text>Sanctum</Text>
      </View>
      <Text>find your peace</Text>
      <View>
        <TextInput style={styles.searchButton} placeholder="search.." />
        <Button title="Go"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff8c00",
    alignItems: "center",
    justifyContent: "center"
  },
  appTitle: {
    justifyContent: "flex-start"
  },
  searchButton: {
    borderBottomColor: "#000"
  }
});
