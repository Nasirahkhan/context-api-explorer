
import React, { useContext } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

export default function ProductDetailScreen({ route }) {
  const { item } = route.params;
  const { colors } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollContainer: {
      padding: 20,
    },
    imageContainer: {
      width: '100%',
      height: 300,
      borderRadius: 12,
      marginBottom: 20,
      overflow: 'hidden',
      backgroundColor: colors.card,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 10,
    },
    price: {
      fontSize: 22,
      color: colors.primary,
      fontWeight: 'bold',
      marginBottom: 15,
    },
    description: {
      fontSize: 16,
      color: colors.text,
      lineHeight: 24,
      marginBottom: 15,
    },
    category: {
      fontSize: 14,
      color: colors.textSecondary,
      marginBottom: 5,
    },
    brand: {
      fontSize: 14,
      color: colors.textSecondary,
      marginBottom: 20,
    },
    rating: {
      fontSize: 16,
      color: colors.text,
      fontWeight: '500',
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: item.thumbnail }} 
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.category}>Category: {item.category}</Text>
        <Text style={styles.brand}>Brand: {item.brand}</Text>
        <Text style={styles.rating}>Rating: {item.rating} ⭐</Text>
      </View>
    </ScrollView>
  );
}