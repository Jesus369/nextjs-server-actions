"use server"
import { revalidateTag } from 'next/cache';
import { Product } from "../../../typings"

const addProductToDatabase = async (e:FormData) => {
    "use server"

    const product = e.get("product")?.toString()
    const price = e.get('price')?.toString()

    if(!product || !price) return

    const newProduct: Product = {
      product,
      price
    }

    await fetch("https://650dd2cca8b42265ec2cbb50.mockapi.io/Products", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json"
      }
    })
    revalidateTag("Products")
  }

  export default addProductToDatabase