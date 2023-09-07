import {
  Button,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import ProductForm from "./ProductForm";

// flatList (scroolView, Pull to Refresh, keyExtractor, dan lain-lain)
// SectionList (Grouping, Pull to Refresh)
// map, filter

const initialProducts = [
  {
    category: "Makanan", // => header dari section
    data: [
      // data yang ditampilkan berdasarkan kategori
      {
        name: "Nasi Goreng",
        price: 20000,
      },
      {
        name: "Ayam Goreng",
        price: 150000,
      },
    ],
  },
  {
    category: "Minuman", // => header dari section
    data: [
      // data yang ditampilkan berdasarkan kategori
      {
        name: "Teh Hangat",
        price: 5000,
      },
      {
        name: "Jus Alpukat",
        price: 10000,
      },
    ],
  },
  {
    category: "Minuman Bersoda", // => header dari section
    data: [
      // data yang ditampilkan berdasarkan kategori
      {
        name: "Cola",
        price: 5000,
      },
      {
        name: "Sprite",
        price: 15000,
      },
      {
        name: "Fanta",
        price: 3500,
      },
    ],
  },
];

export default function ProductSectionList() {
  const [products,setProducts] = useState(initialProducts)
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [category, setCategory] = useState("Makanan");

  const handleAddProduct = (newProduct) => {
    const updatedProducts = [...products]    
    const categoryIndex = updatedProducts.findIndex(
      category => category.category === newProduct.category
    )
    if (categoryIndex !== -1){      
      updatedProducts[categoryIndex].data.push(...newProduct.data)
    } else {
      updatedProducts.push(newProduct)
    }
    setProducts(updatedProducts)
    setShowAddProduct(false)
  }

  const filteredProducts = products.filter(
    (products) => products.category === category
  );

  setActiveButton = (currentCategory) => {
    return category === currentCategory
      ? { backgroundColor: "#b2adad" }
      : { backgroundColor: "#dfdfdf" };
  };
  return (
    <View style={styles.container}>
      {showAddProduct ? (
       <ProductForm products={products} 
       onAddProduct={handleAddProduct}
       onCancel={() => setShowAddProduct(false)}/>
      ) : (
        <View>
          <Button
            title="Tambah Product"
            onPress={() => setShowAddProduct(true)}
          />
          <View style={styles.headerSection}>
            <TouchableOpacity
              onPress={() => setCategory("Makanan")}
              style={[styles.btn, setActiveButton("Makanan")]}
            >
              <Text>Makanan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, setActiveButton("Minuman")]}
              onPress={() => setCategory("Minuman")}
            >
              <Text>Minuman</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, setActiveButton("Minuman Bersoda")]}
              onPress={() => setCategory("Minuman Bersoda")}
            >
              <Text>Minuman Bersoda</Text>
            </TouchableOpacity>
          </View>
          <View>
            <SectionList
              sections={filteredProducts}
              keyExtractor={(item, index) => item.name + index}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <Text styl={styles.name}>{item.name}</Text>
                  <Text styl={styles.price}>Rp. {item.price}</Text>
                </View>
              )}
              renderSectionHeader={({ section: { category } }) => (
                <View style={styles.header}>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                    {category}
                  </Text>
                </View>
              )}
              contentContainerStyle={{ paddingBottom: 15 }} // untuk menambah padding bawah pada list scrool view
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    margin: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  headerSection: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    paddingVertical: 10,
  },
  btn: {
    backgroundColor: "#dfdfdf",
    marginHorizontal: 15,
    borderRadius: 9,
    padding: 7,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    marginTop: 8,
  },
  header: {
    backgroundColor: "#f0f0f0",
    padding: 8,
  },
});
