// app/dashboard/products/page.tsx
import { getDate } from "@/app/lib/utils";
import Link from "next/link";
import React from "react";
import {fetchProducts} from '../../lib/data'
import { deleteProduct } from "@/app/lib/actions";

export default async function ProductsPage() {

  const products = await fetchProducts();

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link href="/dashboard/products/add" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
          Add New
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-gray-800 rounded-lg shadow">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Description</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Created At</th>
              <th className="px-6 py-3">Stock</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((product, index) => {
                return(
                  <tr key={index} className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="px-6 py-4 font-medium">{product.title}</td>
                  <td className="px-6 py-4">{product.desc}</td>
                  <td className="px-6 py-4">{product.price}</td>
                  <td className="px-6 py-4">{getDate(product.createdAt)}</td>
                  <td className="px-6 py-4">
                    <span className="bg-green-700 text-white px-2 py-1 rounded text-xs">
                      {product.stock}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    <Link href={`/dashboard/products/${product.id}`} className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm">
                      View
                    </Link>
                    <form action={deleteProduct}>
                       <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm">
                           Delete
                       </button>
                    </form>
                  </td>
                </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
