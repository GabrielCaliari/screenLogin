import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet  } from 'react-native';
import * as Animatable from "react-native-animatable"

export default function Components() {
 return (
   <View style={styles.container}>
   <View style={styles.header}>
    <Text style={styles.headerText}>Bem vindo(a)</Text>
   </View>
   
    <Animatable.View style={styles.middle} animation="fadeInUp" >
      <Text style={styles.midText}>Email</Text>
      <TextInput 
      placeholder='Digite um email...'
      style={styles.input}
      />
      
      <Text style={styles.midText}>Senha</Text>
      <TextInput 
      placeholder='Sua senha...'
      style={styles.input}/>
     
      <View>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar
          </Text>
      </TouchableOpacity>
      <TouchableOpacity>
         <Text style={{color: "#a1a1a1"}}>Não possui uma conta? Registre-se agora
         </Text>
      </TouchableOpacity>
      </View>
    </Animatable.View>
   </View>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38a69d"
  },
  header: {
   marginTop: "14%",
   marginBottom: "8%",
   paddingStart: "5%",
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  middle: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  midText: {
    fontSize: 25,
    paddingTop: 15,
  },
  input: {
    fontSize: 15, 
    paddingTop: 10, 
    borderBottomWidth: 1
  },
  button: {
    backgroundColor: "#38a68d",
    justifyContent: "center",
    alignItems: "center",
    bottom: "15%",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 40,
  },
  buttonText: {
    color: "#fff",
  }
})