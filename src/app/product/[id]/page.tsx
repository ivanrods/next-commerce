import AddCart from "@/app/components/AddCart";
import ProductImage from "@/app/components/ProductImage";
import { formatPrice } from "@/lib/utils";
import Stripe from "stripe";

async function getProduct(id: string) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-05-28.basil",
  });
  const produto = await stripe.products.retrieve(id);
  const price = await stripe.prices.list({
    product: produto.id,
  });

  return {
    id: produto.id,
    price: price.data[0].unit_amount,
    name: produto.name,
    image: produto.images[0],
    description: produto.description,
    currency: price.data[0].currency,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ProductPage({ params }: any) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <div className="h-full flex items-center w-full">
      <div className="flex flex-col md:flex-row items-center max-w-7xl xl:mx-auto gap-12 bg-neutral-800 w-full p-8 m-8 rounded-2xl">
        <ProductImage product={product} />
        <div className="flex flex-col gap-8">
          <div >
            <h1 className="text-2xl font-bold text-neutral-200">{product.name}</h1>
            <h2 className="text-xl text-neutral-200 font-bold">
              {formatPrice(product.price)}
            </h2>
          </div>
          <div >
            <p className="text-sm text-neutral-300">{product.description}</p>
          </div>
          <AddCart product={product} />
        </div>
      </div>
    </div>
  );
}
