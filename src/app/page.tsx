import { fetchProducts } from "./actions";
import Header from "./components/header";
import InfiniteScroll from "./components/InfiniteScroll";

export default async function Home() {
  const { formatedProducts } = await fetchProducts({});

  return (
    <div className="flex flex-col gap-8">
      <Header/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-10 xl:gap-6 mx-2 md:mx-8 xl:mx-24">
        <InfiniteScroll initialProducts={formatedProducts} />
      </div>
    </div>
  );
}
