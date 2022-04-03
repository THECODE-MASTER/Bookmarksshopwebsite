import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
/* import db from "../config";
import firebase from "firebase"; */

export default class LoginScreen extends Component{
    constructor(){
        super()
        this.state={
            emailId:"",
            password:"",
            firstName:"",
            lastName:"",
            address:"",
            phone:"",
            confirmpassword:"",
            placeholdertext:"This is a Placeholder",            
        }
    }
    tac=()=>{
      alert("Terms and Conditions: This App is in development and all beta testers if any cannot share these files with someone else not included in the beta program./n By clicking on sign up u have agreed to the terms and conditions. Copyright© TheBestAstroNOT 2022")
      console.log("Terms and Conditions Displayed Copyright© TheBestAstroNOT - 2022 JAN 1")
    }
    ShowSignUpPopUp=()=>{
      return(
        
        <Modal
        animationType="fade"
        transparent={true}
        /*visible={this.state.isModalVisible} "TO ENABLE"*/>
          <View style={styles.modalContainer}>
        <TextInput style={styles.formTextInput} placeholder="Enter your First Name" onChangeText={text=>{
              console.log("First Name Set")
              this.setState({
                firstName: text,
              }
              )
            }}/>
            <TextInput style={styles.formTextInput} placeholder="Enter your Last Name" onChangeText={text=>{
              console.log("Last Name Set")
              this.setState({
                lastName: text,
              }
              )
            }}/>
        <TextInput style={styles.formTextInput} placeholder="Enter your Email ID" onChangeText={text=>{
              console.log("EmailID Set")
              this.setState({
                emailId: text,
              }
              )
            }}/>
            <TextInput style={styles.formTextInput} placeholder="Enter your Password" secureTextEntry={true} onChangeText={text=>{
              console.log("Password Set")
              this.setState({
                password: text,
              }
              )
            }}/>
            <TextInput style={styles.formTextInput} placeholder="Enter your Password again" secureTextEntry={true} onChangeText={text=>{
              console.log("Password Set again")
              this.setState({
                confirmpassword: text,
              }
              )
            }}/>
            <TextInput style={styles.formTextInput} placeholder="Enter your Phone Number" onChangeText={text=>{
              console.log("Phone Number Set")
              this.setState({
                phone: text,
              }
              )
            }}/>
            <TextInput style={styles.formTextInput} placeholder="Enter your Address" onChangeText={text=>{
              console.log("Address Set")
              this.setState({
                address: text,
              }
              )
            }}/>
            <TouchableOpacity onPress={()=>this.tac()}>
              <Text>
                Sign Up
              </Text>
            </TouchableOpacity>
            </View>
        </Modal>
        
      )
    }
    render(){
    return(
        <View>
        
          {this.ShowSignUpPopUp()}
            <TextInput style={styles.loginBox} placeholder="Enter your Email ID" onChangeText={text=>{
              console.log("EmailID Added")
              this.setState({
                emailId: text,
              }
              )
            }}/>
            <TextInput style={styles.loginBox} placeholder="Enter your Password" secureTextEntry={true} onChangeText={text=>{
              console.log("Password Added")
              this.setState({
                password: text,
              }
              )
            }}/>
            <Text>
              {this.state.placeholdertext}
            </Text>
              
         
            
        </View>
    )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F8BE85",
      alignItems: "center",
      justifyContent: "center"
    },
    profileContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    title: {
      fontSize: 65,
      fontWeight: "300",
      paddingBottom: 30,
      color: "#ff3d00"
    },
    loginBox: {
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor: "#ff8a65",
      fontSize: 20,
      margin: 10,
      paddingLeft: 10
    },
    KeyboardAvoidingView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    modalTitle: {
      justifyContent: "center",
      alignSelf: "center",
      fontSize: 30,
      color: "#ff5722",
      margin: 50
    },
    modalContainer: {
      flex: 1,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#00ced1",
      marginRight: 30,
      marginLeft: 30,
      marginTop: 80,
      marginBottom: 80
    },
    formTextInput: {
      width: "75%",
      height: 35,
      alignSelf: "center",
      borderColor: "#ffab91",
      borderRadius: 10,
      borderWidth: 1,
      marginTop: 20,
      padding: 10
    },
    registerButton: {
      width: 200,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderRadius: 10,
      marginTop: 30
    },
    registerButtonText: {
      color: "#ff5722",
      fontSize: 15,
      fontWeight: "bold"
    },
    cancelButton: {
      width: 200,
      height: 30,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 5
    },
  
    button: {
      width: 300,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 25,
      backgroundColor: "#ff9800",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8
      },
      shadowOpacity: 0.3,
      shadowRadius: 10.32,
      elevation: 16,
      padding: 10
    },
    buttonText: {
      color: "#ffff",
      fontWeight: "200",
      fontSize: 20
    }
  });
  