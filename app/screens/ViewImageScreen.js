import React from "react";
import { Image, StyleSheet, SafeAreaView, View } from "react-native";

function ViewImageScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 30,
    left: 30,
  },
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#4ecdc4",
    position: "absolute",
    top: 30,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
