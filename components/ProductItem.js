import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../context/ThemeContext';

const ProductItem = ({ product, onPress }) => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.card,
      marginHorizontal: 16,
      marginVertical: 8,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors.border,
      overflow: 'hidden',
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 16,
    },
    infoContainer: {
      flex: 1,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 4,
    },
    email: {
      fontSize: 14,
      color: colors.textSecondary,
      marginBottom: 4,
    },
    idContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    idText: {
      fontSize: 12,
      color: colors.primary,
      fontWeight: '500',
    },
    arrowIcon: {
      marginLeft: 8,
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <Image source={{ uri: product.avatar }} style={styles.avatar} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>
            {product.first_name} {product.last_name}
          </Text>
          <Text style={styles.email}>{product.email}</Text>
          <View style={styles.idContainer}>
            <Text style={styles.idText}>ID: {product.id}</Text>
            <Icon
              name="chevron-right"
              size={20}
              color={colors.primary}
              style={styles.arrowIcon}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;