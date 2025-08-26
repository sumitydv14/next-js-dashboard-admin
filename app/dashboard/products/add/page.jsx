"use client";
import { addProduct } from "@/app/lib/actions";

export default function AddProductPage() {
  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg user-container">
      <h2 className="text-xl font-bold mb-4">ADD Products</h2>

      <form
        action={addProduct}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center text-4xl">
            📦
          </div>
          <h2 className="mt-4 font-semibold">title</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block font-semibold">Title</label>
            <input
              type="text"
              name="title"
              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Price</label>
            <input
              type="number"
              name="price"
              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Stock</label>
            <input
              type="number"
              name="stock"
              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Color</label>
            <input
              type="text"
              name="color"
              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Size</label>
            <input
              type="text"
              name="size"
              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">img</label>
            <input
              type="text"
              name="img"
              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Description</label>
            <textarea
              name="desc"
              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 p-2 rounded font-bold mt-4"
          >
            add product
          </button>
        </div>
      </form>
    </div>
  );
}
