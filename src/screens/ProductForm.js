import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

export default function ProductForm({ onAddProduct, onCancel }) {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [nameError, setNameError] = useState("");
  const [priceError, setPriceError] = useState("");

  //Dropdown
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Makanan", value: "Makanan" },
    { label: "Minuman", value: "Minuman" },
    { label: "Minuman Bersoda", value: "Minuman Bersoda" },
  ]);

  const handleAddProduct = () => {
    if (name.trim() === "" || price.trim() === "") {
      Alert.alert("Error", "Nama dan Harga produk harus diisi");
    } else if (name.length < 3 || name.length > 50) {
      setNameError("Nama Produk harus antara 3 sampai 50 karakter");
    } else if (parseFloat(price) < 1) {
      setPriceError("Harga minimal 1 Rupiah");
    } else {
      const newProduct = {
        category,
        data: [{ name, price }],
      };
      onAddProduct(newProduct);
      setCategory("");
      setName("");
      setPrice("");
    }
  };

  const isErrorView = (errorValidation) => {
    if (errorValidation) {
      return (
        <Text style={{ color: "red", marginBottom: 7 }}>{errorValidation}</Text>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoSection}>
        <Image
          style={{
            width: "80%",
            height: 150,
          }}
          source={require("../assets/add_task.png")}
        />
      </View>
      <View style={{ flex: 4, paddingHorizontal: 15 }}>
        <View style={styles.form}>
          <View style={styles.headerForm}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Tambah Data Product
            </Text>
          </View>
          <Text style={styles.label}>Kategori</Text>
          {/* <TextInput
            onChangeText={(val) => {
              setCategory(val);
            }}
            value={category}
            style={styles.input}
          /> */}
          <DropDownPicker
            style={[styles.input]}
            placeholder="Pilih Kategori"
            dropDownContainerStyle={{
              borderColor: "transparent",
              borderWidth: 0,
            }}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={(val) => {
              setValue(val)
              setCategory(val)
            }}
            setItems={setItems}
          />
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(val) => {
              setName(val);
              setNameError("");
            }}
          />
          {isErrorView(nameError)}
          <Text style={styles.label}>Price</Text>
          <TextInput
            value={price}
            onChangeText={(val) => {
              setPrice(val);
              setPriceError("");
            }}
            style={styles.input}
            keyboardType="numeric"
          />
          {isErrorView(priceError)}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 6,
            }}
          >
            <TouchableOpacity style={styles.btn} onPress={onCancel}>
              <Text style={{ color: "white" }}>Batal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text
                style={{ color: "white" }}
                onPress={() => handleAddProduct()}
              >
                Tambah
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoSection: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    backgroundColor: "#e6e6e6",
    padding: 25,
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  headerForm: {
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 0.5,
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
    backgroundColor: "white",
  },
  btn: {
    backgroundColor: "#233d90",
    padding: 10,
    borderRadius: 10,
  },
});
