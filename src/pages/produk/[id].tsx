import { useRouter } from "next/router";

const DetailProduk = () => {
//   const router = useRouter();
//   const { id } = router.query;
const { query } = useRouter();

  return (
    <div>
      <h1>Detail Produk</h1>
      <p>ID Produk: {query.id}</p>
    </div>
  );
};

export default DetailProduk;