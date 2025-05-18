import OrderCount from "./OrderCount";
import SearchFilter from "./SearchFilter";

const OrderSummary = ({
  orderList,
  onDelete,
  onPending,
  onFilterOptionChange,
}) => {
  // const sortedOrderItems = [...OrderItemList].sort((a, b) => b.id - a.id);
  // const [orderList, setOrderList] = useState(sortedOrderItems);

  return (
    <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
      <OrderCount orderList={orderList} />

      <div>
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-4">Order Reports</h2>

          <SearchFilter onFilterOptionChange={onFilterOptionChange} />
        </div>
        <div className="bg-cardbg rounded-lg p-4">
          <div className="reports-container">
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-sm">
                  <th className="pb-3 font-medium">ID</th>
                  <th className="pb-3 font-medium">Customer Name</th>
                  <th className="pb-3 font-medium">Items</th>
                  <th className="pb-3 font-medium">Amount</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {orderList.map((orderItem) => (
                  <tr key={orderItem.id} className="border-t border-gray-700">
                    <td className="py-3">{orderItem.id + 1}</td>
                    <td className="py-3">{orderItem.customerName}</td>
                    <td className="py-3">{orderItem.itemCount}</td>
                    <td className="py-3">{orderItem.amount}</td>
                    <td className="py-3">
                      <span
                        className={`${
                          orderItem.pendingStatus
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {orderItem.pendingStatus ? "DELIVERED" : "PENDING"}
                      </span>
                    </td>
                    <td className="py-3">
                      <button
                        onClick={() => onDelete(orderItem.id)}
                        className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300"
                      >
                        Delete
                      </button>
                      {!orderItem.pendingStatus && (
                        <button
                          onClick={() => onPending(orderItem.id)}
                          className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300"
                        >
                          DELIVER
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
