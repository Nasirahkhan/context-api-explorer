

import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import Toast from "react-native-toast-message";

export default function LoginScreen() {
  const { login } = useContext(AuthContext);
  const { colors } = useContext(ThemeContext);
  
  
const [email, setEmail] = useState("george.bluth@reqres.in"); 
const [password, setPassword] = useState("password123"); 
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Please enter email and password',
      });
      return;
    }
    
    console.log("Login attempt with:", { email, password });

    setIsLoading(true);
    const result = await login(email, password);
    console.log("Login result:", result);
    setIsLoading(false);

    if (!result.success) {
      Toast.show({
        type: 'error',
        text1: result.error || 'Invalid credentials',
      });
    } else {
      Toast.show({
        type: 'success',
        text1: 'Login successful!',
      });
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: "center",
      padding: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      color: colors.text,
      marginBottom: 30,
      textAlign: "center",
    },
    input: {
      borderWidth: 1,
      borderColor: colors.border,
      padding: 15,
      borderRadius: 8,
      marginBottom: 15,
      backgroundColor: colors.card,
      color: colors.text,
    },
    button: {
      backgroundColor: colors.primary,
      padding: 15,
      borderRadius: 8,
      alignItems: "center",
      marginTop: 10,
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={colors.textSecondary}
          value={email}
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={colors.textSecondary}
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />

        {isLoading ? (
          <ActivityIndicator size="large" color={colors.primary} />
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        )}

        <Text style={{ color: colors.textSecondary, textAlign: "center", marginTop: 20 }}>
          Demo credentials: {"\n"}
          george.bluth@reqres.in / password123
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}








// import React, { useContext, useState } from "react";
// import { View, Text, Button, TextInput, StyleSheet, ActivityIndicator, Alert } from "react-native";
// import { AuthContext } from "../context/AuthContext";
// import { LoaderContext } from "../context/LoaderContext";

// export default function LoginScreen() {
//   const { login } = useContext(AuthContext);
//   const { loading, setLoading } = useContext(LoaderContext);

//   const [email, setEmail] = useState("nasirahkhan01@gmail.com"); 
//   const [password, setPassword] = useState("nnkk");   

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter email and password");
//       return;
//     }

//     setLoading(true); // Show loader

//     try {
//       const res = await fetch("https://reqres.in/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (res.status === 200) {
//         await login(data.token); // Call context login
//       } else {
//         Alert.alert("Login Failed", data.error || "Unknown error");
//       }
//     } catch (err) {
//       Alert.alert("Error", "Network error");
//     } finally {
//       setLoading(false); // Hide loader
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         autoCapitalize="none"
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         secureTextEntry
//         onChangeText={setPassword}
//       />

//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : (
//         <Button title="Login" onPress={handleLogin} />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex:1, justifyContent:"center", padding:20 },
//   title: { fontSize:26, fontWeight:"bold", marginBottom:20, textAlign:"center" },
//   input: {
//     borderWidth:1,
//     borderColor:"#ccc",
//     padding:10,
//     borderRadius:5,
//     marginBottom:15
//   }
// });
