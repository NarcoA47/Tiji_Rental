import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function More() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://tiji-dev.herokuapp.com/api/v1/category/'); // Update with your actual URL
      setCategories(response.data.results); // Assuming response data has a 'results' field due to pagination
    } catch (error) {
      console.error('Error fetching categories:', error.response ? error.response.data : error.message);
      setError('Failed to fetch categories');
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  const handleAllCategoriesPress = () => {
    setSelectedCategory(null); // Show all categories by setting selectedCategory to null
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.itemContainer}>
        <TouchableOpacity
          style={[styles.item, !selectedCategory && styles.selectedItem]}
          onPress={handleAllCategoriesPress}
        >
          <Text>All ({categories.length})</Text>
        </TouchableOpacity>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[styles.item, selectedCategory && selectedCategory.id === category.id && styles.selectedItem]}
            onPress={() => handleCategoryPress(category)}
          >
            <Text>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {selectedCategory && (
        <View style={styles.categoryDetails}>
          <Text style={styles.categoryText}>ID: {selectedCategory.id}</Text>
          <Text style={styles.categoryText}>Name: {selectedCategory.name}</Text>
          <Text style={styles.categoryText}>Description: {selectedCategory.description}</Text>
        </View>
      )}
      {!selectedCategory && (
        <View style={styles.categoryDetails}>
          <Text style={styles.categoryText}>Showing all categories</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    margin: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
  },
  itemContainer: {
    flexDirection: 'row',
  },
  item: {
    borderWidth: 1,
    borderColor: '#383838',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  selectedItem: {
    backgroundColor: '#dcdcdc',
  },
  categoryDetails: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#e8e8e8',
  },
  categoryText: {
    fontSize: 16,
    color: '#383838',
  },
  errorText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'red',
  },
});
