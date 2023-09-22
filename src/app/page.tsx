import Image from 'next/image'

type Product = {
  product: string;
  price: string;
  id: string;
}

export default async function Home() {

  const res = await fetch("https://650dd2cca8b42265ec2cbb50.mockapi.io/Products", {
    cache: "no-cache"
  })

  const products: Product[] = await res.json()
  console.log(products)
  
  return (
    <main>
      <h1 className="text-3xl text-center font-bold">Products Warehosue</h1>

      <form className="flex flex-col gap-5 max-w-xl mx-auto p-5" action="">
        <input
          className="border border-gray-300 p-2 rounded-md"
          placeholder="Enter Product Name..."
          type="text"/>
        <input 
          className="border border-gray-300 p-2 rounded-md" 
          placeholder="Enter Price Name...."
          type="text"/>
        <button className="border bg-blue-500 text-white p-2 rounded-md">Add Product</button>
      </form>

      <h2 className="font-bold p-5">List of Products</h2>

      <div className="flex flex-wrap gap-5">
        {products.map(product => (
          <div key={product.id} className="p-5 shadow">
            <p>{product.product}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
