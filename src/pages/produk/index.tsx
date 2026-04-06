import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
};

const kategori = () => {
  // const [isLogin, setIsLogin] = useState(false);
  // const { push } = useRouter();

  const [products, setProducts] = useState<ProductType[]>([]);


  const fetchData = () => {
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responsedata) => {
        setProducts(responsedata.data);
      })
      .catch((error) => {
        console.error("Error fetching produk:", error);
      });
  };

  // Panggil fetchData saat halaman pertama kali dimuat
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-xl font-bold">Daftar Produk</h1>
      <button
        onClick={fetchData}
        style={{ marginTop: "10px", marginBottom: "20px", padding: "5px 10px", cursor: "pointer", border: "1px solid black", borderRadius: "5px" }}
      >
        Refresh Data
      </button>

      {products.map((product: ProductType) => (
        <div key={product.id} style={{ marginBottom: "15px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p>Harga: {product.price}</p>
          <p>Ukuran: {product.size}</p>
          <p>Kategori: {product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default kategori;