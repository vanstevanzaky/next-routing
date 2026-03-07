import { useRouter } from "next/router";

const CategoryPage = () => {
    const { query } = useRouter();
    const { slug } = query;

    return (
        <div>
            <h1>Halaman Kategori</h1>
            <ul>
                {Array.isArray(slug) && slug.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p>
                Kategori: {slug ? slug[0] : "Semua Kategori"}
            </p>
        </div>
    );
};

export default CategoryPage;
