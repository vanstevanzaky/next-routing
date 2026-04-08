import { useRouter } from "next/router";
import useSWR from "swr";
import TampilanProduk from "../../views/produk";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const kategori = () => {
  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  return (
    <div>
      <TampilanProduk products={isLoading ? [] : data?.data || []} />
    </div>
  );
};

export default kategori;