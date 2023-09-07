const product = [
    {
      name: "Ayam Bakar",
      category: "Makanan",
      price: 25000,
    },
    {
      name: "Nasi Goreng",
      category: "Makanan",
      price: 20000,
    },
    {
      name: "Teh Manis",
      category: "Minuman",
      price: 50000,
    },
  ];
  
  const groupedProducts = product.reduce((emptyObj, product) => {
    console.log("empty Object", emptyObj);
    if (!emptyObj[product.category]) {
      emptyObj[product.category] = [];
    }
  
    emptyObj[product.category].push(product);
    return emptyObj; 
  },{ });
  
  console.log(groupedProducts);
  