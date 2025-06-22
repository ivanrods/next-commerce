"use client";

import { useCartStore } from "@/store";
import { ProductType } from "@/types/ProductType";

export default function AddCart({ product }: { product: ProductType }) {
  const { addProduct } = useCartStore();

  return (
    <button
      onClick={() => addProduct(product)}
      className="rounded-md bg-indigo-400 text-white font-semibold px-3.5 py-2.5 text-sm text-center"
    >
      Adicionar ao Carrinho
    </button>
  );
}
