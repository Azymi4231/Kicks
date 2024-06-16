import { products } from "../../product/pages/product-constans";

export async function getStaticPaths() {
  // Generujemy ścieżki dla wszystkich produktów
  const paths = products.map((product) => ({
    params: { id: product.id },
  }));

  // Pre-renderujemy tylko te ścieżki podczas budowania
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Pobieramy dane produktu na podstawie ID
  const product = products.find((p) => p.id === params.id);

  // Jeśli produkt nie zostanie znaleziony, zwróć pusty obiekt props i notFound: true
  if (!product) {
    return {
      notFound: true,
    };
  }

  // Przekazujemy dane produktu jako props
  return { props: { product } };
}

const TestPage = ({ product }) => {
  console.log(product);
  return (
    <div>
      <h1>{product.id}</h1>

      {/* Możesz dodać więcej informacji o produkcie tutaj */}
    </div>
  );
};

export default TestPage;
