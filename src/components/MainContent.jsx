import { useState } from "react";
import FoodItemList from "../database/food";
import OrderItemList from "../database/OrderList";
import OrderSection from "./OrderSection";
import OrderSummary from "./OrderSummary";

const MainContent = () => {
  const [price, setPrice] = useState(0);
  const [foodItem, setFoodItem] = useState(FoodItemList);
  const [order, setOrder] = useState(OrderItemList);
  const [customerName, setCustomerName] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const handleFoodSelect = (index) => {
    const selectedItem = foodItem[index];

    selectedItem.isSelect = !selectedItem.isSelect;

    const newPrice = selectedItem.isSelect
      ? price + selectedItem.price
      : price - selectedItem.price;

    setFoodItem(foodItem);
    setPrice(newPrice);
  };

  function handleFoodOrder() {
    const selectedItems = foodItem.filter((item) => item.isSelect);
    const count = selectedItems.length;

    if (!customerName.trim()) {
      alert("Please enter a customer name");
      return;
    }

    if (count === 0) {
      alert("Please add at least one food item");
      return;
    }

    const maxId =
      order.length > 0 ? Math.max(...order.map((order) => order.id)) : -1;

    const newOrder = {
      id: maxId + 1,
      customerName: customerName,
      amount: price,
      itemCount: count,
      pendingStatus: false,
    };

    setOrder((prevOrders) => [...prevOrders, newOrder]);
    setCustomerName("");
    setFoodItem((prevItems) =>
      prevItems.map((item) => ({ ...item, isSelect: false }))
    );
    setPrice(0);
  }

  const handleDelete = (id) => {
    setOrder((prevItems) => prevItems.filter((item) => item.id != id));
  };

  const handlePending = (id) => {
    setOrder((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, pendingStatus: !item.pendingStatus } : item
      )
    );
  };

  const handleFilterOptionChange = (newStatus) => {
    setFilterStatus(newStatus);
  };

  const filteredOrder = order
    .filter((item) => {
      if (filterStatus === "Pending") return !item.pendingStatus;
      if (filterStatus === "Delivered") return item.pendingStatus;
      return true;
    })
    .sort((a, b) => b.id - a.id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <OrderSection
        onFoodSelect={handleFoodSelect}
        foodItem={foodItem}
        price={price}
        onOrderClick={handleFoodOrder}
        customerName={customerName}
        onCustomerNameChange={setCustomerName}
      />
      <OrderSummary
        orderList={filteredOrder}
        onDelete={handleDelete}
        onPending={handlePending}
        onFilterOptionChange={handleFilterOptionChange}
      />
    </div>
  );
};

export default MainContent;
