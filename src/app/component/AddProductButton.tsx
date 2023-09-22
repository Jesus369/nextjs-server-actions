"use client"

import React, {useTransition} from "react"
import addProductToDatabase from "../server/serverActions"

function AddProductButton() {
    const [isPending, startTransition] = useTransition()

    const formData = new FormData()
    formData.append("product", "IPhone 15")
    formData.append("price", "1500.00")
    return (
        <button
            className="fixed bottom-10 right-10 bg-green-500 text-white p-2 rounded-md w-48"
             onClick={() => startTransition(() => addProductToDatabase(formData))}>
            {isPending ? "Adding..." : "Add IPhone 15"}
        </button>
    )
}


export default AddProductButton