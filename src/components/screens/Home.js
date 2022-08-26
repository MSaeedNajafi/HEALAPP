import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

function SettingsScreen({ text, photo }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{text}</Text>
      <Image style={styles.tinyLogo} uri={photo} />
    </View>
  );
}

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={styles.statusBar} />
      <LinearGradient
        colors={["#411a50", "#bb265f"]}
        start={{ x: 0.1, y: 0.5 }}
        end={{ x: 0.65, y: 0.65 }}
        locations={[0.5, 0.5]}
        style={styles.box}
      >
        <Text style={styles.titleText}>OasysNOW</Text>
        <Text style={styles.bodyText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec
          tincidunt praesent semper feugiat nibh sed pulvinar proin. Suspendisse
          ultrices gravida dictum fusce. Quisque id diam vel quam. Consequat
          interdum varius sit amet mattis vulputate enim nulla. Tincidunt
          praesent semper feugiat nibh sed pulvina
        </Text>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={[styles.buttonText, { color: "#411a50" }]}>
            LET'S GET <Text style={styles.buttonText}>STARTED</Text>
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      <View style={{ flex: 1 }}>
        <Text style={[styles.titleText, { color: "black" }]}>ABOUT US</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    flex: 2,
    width: "100%",
    height: "100%",
  },
  buttonStyle: {
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 20,
    marginLeft: 95,
    marginRight: 95,
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#bb265f",
    textAlign: "center",
    fontSize: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  bodyText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "justify",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  statusBar: {
    marginTop: 50,
  },
});

export default Home;
