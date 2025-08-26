"use client";
import addUser from "@/app/lib/actions";

export default function AddUserPage() {
  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg user-container">
      <h2 className="text-xl font-bold mb-4">ADD USER</h2>

      <form
        action={addUser}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Username"
            className="w-full p-2 rounded bg-gray-700 text-white outline-none"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-gray-700 text-white outline-none"
          />
        </div>

        <div> 
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-700 text-white outline-none"
          />
        </div>

        <div>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="w-full p-2 rounded bg-gray-700 text-white outline-none"
          />
        </div>
        <div className="md:col-span-2">
          <input
            type="text"
            name="img"
            placeholder="Image URL"
            className="w-full p-2 rounded bg-gray-700 text-white outline-none"
          />
        </div>

        <div>
          <select
            name="isAdmin"
            className="w-full p-2 rounded bg-gray-700 text-white outline-none"
          >
            <option value="">Is Admin?</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>

        <div>
          <select
            name="isAction"
            className="w-full p-2 rounded bg-gray-700 text-white outline-none"
          >
            <option value="">Is Active?</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <textarea
            name="address"
            placeholder="Address"
            className="w-full p-2 rounded bg-gray-700 text-white outline-none h-28"
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 p-3 rounded text-white font-bold"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
