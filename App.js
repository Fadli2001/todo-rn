import { StyleSheet, View,StatusBar } from "react-native";
import SectionListExample from "./src/screens/SectionListExample";
import ProductCard from "./src/components/ProductCard";
import ProductSectionList from "./src/screens/ProductSectionList";
import ProductForm from "./src/screens/ProductForm";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <SectionListExample/> */}
      {/* <ProductCard/> */}
      <ProductSectionList/>      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
