import { FaUserCircle } from "react-icons/fa";

const transactions = [
  { id: 1, name: "John Doe", status: "Pending", date: "14.02.2024", amount: "$3,200" },
  { id: 2, name: "John Doe", status: "Done", date: "14.02.2024", amount: "$3,200" },
  { id: 3, name: "John Doe", status: "Cancelled", date: "14.02.2024", amount: "$3,200" },
  { id: 4, name: "John Doe", status: "Pending", date: "14.02.2024", amount: "$3,200" },
];

const statusColors = {
  Pending: "bg-yellow-500/20 text-yellow-500",
  Done: "bg-green-500/20 text-green-500",
  Cancelled: "bg-red-500/20 text-red-500",
};

export default function TransactionsPage() {
  return (
    <div className="p-6 bg-gray-900  text-white rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Latest Transactions</h1>

      <div className="overflow-x-auto bg-gray-800 rounded-xl shadow-md">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-400 border-b border-gray-700">
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Status</th>
              <th className="py-3 px-6">Date</th>
              <th className="py-3 px-6">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                <td className="flex items-center gap-3 py-4 px-6">
                  <FaUserCircle className="text-blue-500 text-2xl" />
                  <span>{txn.name}</span>
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`px-3 py-1 rounded-lg text-sm font-medium ${statusColors[txn.status]}`}
                  >
                    {txn.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-300">{txn.date}</td>
                <td className="py-4 px-6 text-blue-400 font-semibold">{txn.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
