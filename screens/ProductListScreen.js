
import { useContext, useEffect, useState, useCallback } from "react";
import { 
  View, 
  FlatList, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ActivityIndicator,
  RefreshControl 
} from "react-native";
import { ApiContext } from "../context/ApiContext";
import { ThemeContext } from "../context/ThemeContext";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ProductListScreen({ navigation }) {
  const { products, fetchProducts, page, hasMore } = useContext(ApiContext);
 const { colors, dark, toggleTheme } = useContext(ThemeContext);
  const [search, setSearch] = useState("");
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // useEffect(() => {
  //   fetchProducts(1);
  // }, []);
 useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity 
          onPress={toggleTheme}
          style={{ marginRight: 15 }}
        >
          <Icon 
            name={dark ? "wb-sunny" : "nights-stay"} 
            size={24} 
            color={colors.text} 
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation, dark, colors.text, toggleTheme]);
  const handleLoadMore = useCallback(() => {
    if (hasMore && !loadingMore) {
      setLoadingMore(true);
      fetchProducts(page + 1).finally(() => {
        setLoadingMore(false);
      });
    }
  }, [hasMore, page, loadingMore]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchProducts(1).finally(() => {
      setRefreshing(false);
    });
  }, []);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const renderFooter = () => {
    if (!loadingMore) return null;
    return (
      <View style={{ paddingVertical: 20 }}>
        <ActivityIndicator size="small" color={colors.primary} />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
       <TouchableOpacity
      onPress={toggleTheme}
      style={{
        margin: 16,
        padding: 12,
        backgroundColor: colors.primary,
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <Icon 
        name={dark ? "wb-sunny" : "nights-stay"} 
        size={20} 
        color="#fff" 
        style={{ marginRight: 8 }}
      />
      <Text style={{ color: '#fff', fontWeight: 'bold' }}>
        {dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </Text>
    </TouchableOpacity>
      <TextInput
        placeholder="Search"
        placeholderTextColor={colors.textSecondary}
        onChangeText={setSearch}
        style={{
          margin: 16,
          padding: 12,
          backgroundColor: colors.card,
          color: colors.text,
          borderRadius: 8,
        }}
      />

      <FlatList
        data={filtered}
        keyExtractor={item => item.id.toString()}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[colors.primary]}
            tintColor={colors.primary}
          />
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", { item })}
            style={{
              backgroundColor: colors.card,
              marginHorizontal: 16,
              marginVertical: 8,
              padding: 16,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'bold' }}>
              {item.title}
            </Text>
            <Text style={{ color: colors.textSecondary, marginTop: 4 }}>
              ${item.price}
            </Text>
          </TouchableOpacity>
        )}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
}