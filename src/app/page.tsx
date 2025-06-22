import { fetchProducts } from "./actions";
import InfiniteScroll from "./components/InfiniteScroll";

export default async function Home() {
  const { formatedProducts } = await fetchProducts({});

  return (
    <div className=" mx-auto mt-20 pt-8 px-8 xl:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10 xl:gap-6">
        <InfiniteScroll initialProducts={formatedProducts} />
      </div>
    </div>
  );
}
