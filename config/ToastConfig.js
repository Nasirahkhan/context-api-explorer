import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

export const toastConfig = {
  success: ({ text1 }) => {
    const { colors } = useContext(ThemeContext);
    
    return (
      <View style={[styles.toast, { backgroundColor: colors.primary }]}>
        <Text style={styles.toastText}>{text1}</Text>
      </View>
    );
  },
  error: ({ text1 }) => {
    return (
      <View style={[styles.toast, { backgroundColor: '#FF3B30' }]}>
        <Text style={styles.toastText}>{text1}</Text>
      </View>
    );
  },
};

const styles = StyleSheet.create({
  toast: {
    height: 50,
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 40,
  },
  toastText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});