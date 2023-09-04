import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as Animatable from "react-native-animatable"
import { useNavigation } from '@react-navigation/native';

export default function Components() {
const navigation = useNavigation();

  return (
  <View style={styles.container}>
    <View style={styles.header}>
      <Animatable.Image 
      animation="flipInY"
      source={require("../assets/logo.png")}
      style={{width: "100%"}}
      resizeMode='contain'
      />
    </View>

    <Animatable.View  animation="fadeInUp" delay={600} style={styles.containerForm}>
      <Text style={styles.title}>Monitore, organize seus gastos de qualquer lugar!</Text>
      <Text style={styles.text}>Faça o login para começar</Text>
      <TouchableOpacity 
      style={styles.button}
      onPress={() => navigation.navigate("Sigin")}
      >
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
    </Animatable.View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38a68d",
  },
  header: {
   flex: 2,
    paddingTop: 13,
    backgroundColor: "#38a68d",
    justifyContent: "center",
    alignItems: "center"
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingEnd: "5%",
    paddingStart: "5%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    paddingTop: 15,
    marginBottom: 15,
  },
  text: {
    color: "#a1a1a1"
  },
  button: {
    backgroundColor: "#38a68d",
    position: "absolute",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    bottom: "15%",
    width: "60%",
    borderRadius: 50,
    paddingVertical: 8,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  }
})