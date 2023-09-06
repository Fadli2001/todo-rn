import { SectionList, StyleSheet, Text, View } from "react-native";
import React from "react";

// const product = [
//   {
//     name: "Ayam Bakar",
//     cateogry: "Makanan",
//     price: 25000,
//   },
//   {
//     name: "Nasi Goreng",
//     cateogry: "Makanan",
//     price: 20000,
//   },
//   {
//     name: "Teh Manis",
//     cateogry: "Minuman",
//     price: 50000,
//   },
// ];

const product = [
  {
    category: "Makanan",
    data: [
      {
        name: "Ayam Bakar",
        price: 25000,
      },
      {
        name: "Nasi Goreng",
        price: 20000,
      },
    ],
  },
  {
    category: "Minuman",
    data: [
      {
        name: "Teh Hangat",
        price: 5000,
      },
      {
        name: "Es Teh Tawar",
        price: 2000,
      },
    ],
  },
];

export default function SectionListExample() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SectionList
        sections={product}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { category } }) => (
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {category}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
