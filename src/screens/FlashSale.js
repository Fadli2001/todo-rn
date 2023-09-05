import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "../components/Card";

export default function FlashSale() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Flash <Text style={{ color: "orange", fontWeight: "500" }}>Sale</Text>
        </Text>
      </View>
      <View>
        <ScrollView
          horizontal={true}
          style={styles.cardSection}
          showsHorizontalScrollIndicator={false}
        >
           <Card price={80000} stock={0} discount={20}>
            <Image
              style={styles.cardImage}
              source={{
                uri: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/93/MTA-107632801/oem_oem_full01.jpg",
              }}
            />
          </Card>
          <Card price={25000} stock={15} discount={15}>
            <Image
              style={styles.cardImage}
              source={{
                uri: "https://s3.bukalapak.com/img/81202232992/s-463-463/1177d427_dc9b_4689_81cf_38d908e7e71e.jpg.webp",
              }}
            />
          </Card>
          <Card price={60000} stock={19} discount={15}>
            <Image
              style={styles.cardImage}
              source={{
                uri: "https://dynamic.zacdn.com/Wr66u7_8iPjt1bXojS135pMowmA=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/hamlin-9113-8370252-1.jpg",
              }}
            />
          </Card>
          <Card price={15000} stock={10} discount={10}>
            <Image
              style={styles.cardImage}
              source={{
                uri: "https://asset.kompas.com/crops/TBKISRHc1Iso-Tc7EBfobDI0gnY=/120x80:1080x720/750x500/data/photo/2022/09/21/632ac69e2990c.jpg",
              }}
            />
          </Card>
          <Card price={78000} stock={27} discount={25}>
            <Image
              style={styles.cardImage}
              source={{
                uri: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//101/MTA-53734870/no_brand_jaket_wanita_termurah_berkualitas_-_one_bear_jaket_baseball_full01_h6e48zzs.jpg",
              }}
            />
          </Card>
         
        </ScrollView>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  cardSection: {
    height: 190,
    display: "flex",
    padding: 2,
    flexDirection: "row",
  },
  title: {
    fontWeight: "bold",
    padding: 9,
    color: "red",
    fontSize: 20,
  },
  cardImage: {
    height: 150,
    width: "100%",
  },
});
