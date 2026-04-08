import { useEffect, useState } from "react";
import TampilanProduk from '../../views/produk';

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

export default function ProdukPage() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch("/api/produk")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return <TampilanProduk products={products} />;
}