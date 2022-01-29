import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Main from "./src/components/Main";
import { NativeBaseProvider } from "native-base";

const App = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Main />
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
