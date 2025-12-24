
import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import { LoaderContext } from "../context/LoaderContext";
import * as Animatable from "react-native-animatable";

export default function Loader() {
  const { loading } = useContext(LoaderContext);

  if (!loading) return null;

  return (
    <Animatable.View 
      animation="fadeIn"
      duration={300}
      style={{ 
        position: "absolute", 
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 9999
      }}
    >
      <Animatable.View
        animation="pulse"
        iterationCount="infinite"
        style={{
          backgroundColor: 'white',
          padding: 30,
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ActivityIndicator size="large" color="#6200EE" />
      </Animatable.View>
    </Animatable.View>
  );
}