import {
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import ProductDummy from "../utils/ProductDummy";
import ProductCard from "../components/ProductCard";

export default function SectionListExample() {
  const [selectedCategory, setSelectedCategory] = useState("Makanan");

  const groupedProducts = ProductDummy.reduce((emptyObj, product) => {
    if (!emptyObj[product.category]) {
      emptyObj[product.category] = [];
    }

    emptyObj[product.category].push(product);
    return emptyObj;
  }, {});

  // konversi groupOjb kedalam bentuk array untuk disediakan pada sectionList
  const sections = Object.keys(groupedProducts).map((category) => ({
    title: category,
    data: groupedProducts[category],
  }));
  // filter product berdasarkan kategori, jadi ini yang di kirim ke dalam section listnya ya
  const filteredSections = sections.filter(
    (section) => section.title === selectedCategory
  );

  return (
    <View style={{
        flex : 1
    }}>
      {/* ini untuk headernya, atau section button  */}
      <View style={styles.headerSection}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setSelectedCategory("Makanan")}
        >
          <Text>Makanan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setSelectedCategory("Minuman")}
        >
          <Text>Minuman</Text>
        </TouchableOpacity>
      </View>

      {/* untuk list yang ditampilkan menyesuaikan button yang dipilih */}
      <View style={{
        flex : 24
      }}>
        <SectionList
          sections={filteredSections}
          renderItem={({ item }) => (
           <ProductCard/>
          )}
          renderSectionHeader={({ section }) => (
            <View style={{ padding: 10 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                {section.title}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerSection: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    paddingVertical: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    flex : 1
  },
  btn: {
    marginHorizontal: 15,
    backgroundColor: "#ededed",
    borderRadius: 9,
    padding: 7,
  },
});
