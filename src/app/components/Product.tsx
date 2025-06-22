import { ProductType } from "@/types/ProductType";
import ProductImage from "./ProductImage";
import { formatPrice } from "@/lib/utils";
import AddCart from "./AddCart";
import Link from "next/link";

type ProductProps = {
  product: ProductType;
};
export default function Product({ product }: ProductProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="flex flex-col shadow-lg h-96 bg-neutral-800 text-gray-300 p-5 rounded-2xl">
        <div className="relative max-h-72 flex-1">
          <ProductImage product={product} fill />
        </div>
        <div className="flex justify-between font-bold mt-2">
          <p className="w-40 truncate ">{product.name}</p>
          <p className="text-md text-indigo-400">
            {formatPrice(product.price)}
          </p>
        </div>
         <p className="w-40 truncate line-clamp-1 mb-2 text-sm">{product.description}</p>
        <AddCart product={product} />
      </div>
    </Link>
  );
}
