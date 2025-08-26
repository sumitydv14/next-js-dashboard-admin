import { fetchUser } from "@/app/lib/data";
import {updateUser} from '@/app/lib/actions'


export default  async function UserForm({ params }) {
  const { id } = params;

  const user = await fetchUser(id);

  return (
    <div className="bg-gray-900 text-white p-6 user-container">
      <h1 className="text-2xl font-bold mb-6">Edit User</h1>

      <form
         action={updateUser}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-800 p-6 rounded-lg shadow-lg"
      >
          <input type="hidden" name="id" value={user._id} />

        <div className="flex flex-col items-center">
          <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center text-4xl">
            👤
          </div>
          <h2 className="mt-4 font-semibold">{user.name}</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block font-semibold">Username</label>
            <input
              type="text"
              name="name"
              defaultValue={user?.name || ""}
              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email || ""}

              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Phone</label>
            <input
              type="tel"
              name="phone"
              defaultValue={user?.phone || ""}

              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Address</label>
            <textarea
              name="address"
              defaultValue={user?.address || ""}

              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Is Admin</label>
            <select name="role" defaultValue={user?.role || "User"} className="w-full p-2 bg-gray-700 rounded">
                <option value="User">User</option>
               <option value="Admin">Admin</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold">Is Active</label>
            <select name="status" defaultValue={user?.status || "Active"} className="w-full p-2 bg-gray-700 rounded">
               <option value="Active">Active</option>
               <option value="Inactive">Inactive</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded font-bold mt-4"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
