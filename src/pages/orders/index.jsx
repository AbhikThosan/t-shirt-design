import { Provider } from "react-redux";
import OrdersTable from "../../features/orderList/components/ordersTable";
import ordersStore from "../../features/store/ordersStore";

function Orders() {
  return (
    <>
      <h4 className="text-3xl font-semibold mt-5 ml-5">Orders</h4>
      <Provider store={ordersStore}>
        <OrdersTable />
      </Provider>
    </>
  );
}

export default Orders;
