import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "@react-native-material/core";

const App = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Register"
        onPress={() => alert("Register button clicked!")}
        style={styles.button}
      />
      <Button
        title="Login"
        onPress={() => alert("Login button clicked!")}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EFDC21",
  },
  button: {
    marginTop: 20,
    width: "80%",
    backgroundColor: "#E70E0E",
  },
});

export default App;