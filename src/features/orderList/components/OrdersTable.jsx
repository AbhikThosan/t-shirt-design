import { useState, useEffect } from "react";
import { useGetOrdersDataQuery } from "../../slices/apiOrdersSlice";

const OrdersTable = () => {
  const [search, setSearch] = useState("");
  const [currentSearch, setCurrentSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSearch(search);
      setCurrentPage(1);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  const { data, isLoading, isError } = useGetOrdersDataQuery({
    search: currentSearch,
    page: currentPage,
  });

  const handleSearch = () => {
    setCurrentSearch(search);
    setCurrentPage(1);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data...</p>;

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const totalPages = data?.last_page || 1;

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex gap-4 items-center">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </div>

      <div className="border rounded-lg overflow-hidden shadow-sm">
        <table className="w-full table-fixed">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-2/6 px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="w-2/6 px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="w-2/6 px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data?.data?.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900 truncate">
                  {item.id}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 truncate">
                  {item.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 truncate">
                  {item.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-3 py-2 rounded-lg border ${
            currentPage === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white hover:bg-gray-50 text-gray-700"
          }`}
        >
          &lt;
        </button>

        {generatePageNumbers().map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`px-3 py-2 rounded-lg border ${
              currentPage === number
                ? "bg-blue-500 text-white"
                : "bg-white hover:bg-gray-50 text-gray-700"
            }`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === data?.last_page}
          className={`px-3 py-2 rounded-lg border ${
            currentPage === data?.last_page
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white hover:bg-gray-50 text-gray-700"
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default OrdersTable;
