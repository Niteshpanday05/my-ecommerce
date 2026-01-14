import { stripe } from "@/lib/stripe"

export default async function CheckoutPage() {
    const products = await stripe.products.list({
        expand:["data.default_price"],
        limit: 5,
    })

console.log(products);
    return(
        <div>
            this is checkout page
        </div>
    )
}