import { fetchUsers } from "@/app/lib/data";
import Link from "next/link";
import {getDate} from '../../lib/utils'
import Image from "next/image";
import { deleteUser } from "@/app/lib/actions";

const statusColors = {
  active: "bg-green-500/20 text-green-400",
  inactive: "bg-red-500/20 text-red-400",
};

export default  async function UsersPage() {

  const users = await fetchUsers()
  return (
    <div className="p-6 bg-gray-900  text-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
        <Link href="/dashboard/users/add" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
          Add New
        </Link>
      </div>

      <div className="overflow-x-auto bg-gray-800 rounded-xl shadow-md user-container">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-400 border-b border-gray-700">
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Created At</th>
              <th className="py-3 px-6">Role</th>
              <th className="py-3 px-6">Status</th>
              <th className="py-3 px-6">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return  (
              
                <tr key={user.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                  <td className="flex items-center gap-3 py-4 px-6">
                    <Image src={user.img} alt={user.name} width={30} height={30} className="rounded-full object-fill w-[30px] h-[30px] shrink-0" />
                    <span>{user.name}</span>
                  </td>
                  <td className="py-4 px-6">{user.email}</td>
                  <td className="py-4 px-6 text-gray-300">{user.createdAt ? getDate(user.createdAt):getDate(user.updatedAt) }</td>
                  <td className="py-4 px-6">{user.role}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-lg text-sm font-medium ${statusColors[user.status?.toLowerCase()]}`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 flex gap-3">
                    <Link href={`users/${user.id}`} className="text-blue-400 hover:text-blue-500 font-medium">View</Link>
                    <form action={deleteUser}>
                     <input type="hidden" name="id" value={user.id} />
                    <button className="text-red-400 hover:text-red-500 font-medium">Delete</button>
                    </form>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
