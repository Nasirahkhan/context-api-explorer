
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

export default function ProductListScreen({ navigation }) {
  const { products, fetchProducts, page, hasMore } = useContext(ApiContext);
  const { colors } = useContext(ThemeContext);
  const [search, setSearch] = useState("");
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchProducts(1);
  }, []);

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