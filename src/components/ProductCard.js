import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ProductCard() {
  return (
    <View style={styles.card}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn0-production-images-kly.akamaized.net/M63Fm-0RE7Kup8ELu__IRAFJr-U=/0x0:3000x1691/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3910470/original/073110400_1642740733-shutterstock_1854744190.jpg",
          }}
        />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.productName}>Ayam Bakar</Text>
        <Text style={styles.price}>Rp. 25000</Text>
        <Text style={styles.rate}>Rating : 8</Text>
        <Text>Terjual : 20</Text>
        <View style={styles.discountSec}>
          <Text style={styles.discountText}>Hemat 20000</Text>
          <Text style={styles.discountText}>Diskon 20%</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 8,
  },
  cardContent: {
    flex: 1,
    paddingHorizontal: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 10,
  },
  price: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#ff4800",
  },
  rate: {
    fontSize: 14,
    color: "#888",
    marginBottom: 7,
  },
  discountSec: {
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  discountText: {
    padding: 5,
    height: 23,
    backgroundColor: "#edcbbe",
    fontSize: 12,
    borderRadius: 7,
  },
});
