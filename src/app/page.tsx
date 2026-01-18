import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  console.log(products);
  return (
    <div>
      <section className="w-full bg-sky-300 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
          <div className="max-w-md space-y-4 md:grid-cols-1">
            <h2 className="text-3xl font-bold tracking-tight  md:text-4xl">
              Welcome to My Ecommerce
            </h2>
            <p className="text-neutral-600">Discover the latest products</p>
            <Button className="default bg-enerald-400">
              <Link
                href="products"
                className="inline-flex items-center justify-center text-white rounded-full px-6 py-3"
              >
                Browse All Products
              </Link>
            </Button>
          </div>
        <div className="md:grid-cols-1">
            <Image
            alt="Banner Image"
            className="rounded"
            width={450}
            height={450}
            src={products.data[0].images[0]}
          />
        </div>
        </div>
      </section>
      <Carousel />
    </div>
  );
}
