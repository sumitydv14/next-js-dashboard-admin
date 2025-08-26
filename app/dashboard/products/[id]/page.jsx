import {fetchProduct} from '@/app/lib/data'
import {updateProduct} from '@/app/lib/actions' 


export default async function ProductForm({ params }) {
  const { id } = params;

  const product = await fetchProduct(id)

  if (!product) return <p className="text-white">Loading...</p>;

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg product-form-container">
      <h1 className="text-2xl font-bold mb-6">Edit Product</h1>

      <form
        action={updateProduct}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-800 p-6 rounded-lg shadow-lg"
      >
         <input type="hidden" name="id" value={product._id} />
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center text-4xl">
            📦
          </div>
          <h2 className="mt-4 font-semibold">{product.title}</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block font-semibold">Title</label>
            <input
              type="text"
              name="title"
              defaultValue={product.title}
              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Price</label>
            <input
              type="number"
              name='price'
              defaultValue={product.price}
              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Stock</label>
            <input
              type="number"
              name="stock"
              defaultValue={product.stock}
              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Color</label>
            <input
              type="text"
              name="color"
              defaultValue={product.color}
              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Size</label>
            <input
              type="text"
              name="size"
              defaultValue={product.size}
              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Description</label>
            <textarea
              name="desc"
              defaultValue={product.desc}
              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 p-2 rounded font-bold mt-4"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
