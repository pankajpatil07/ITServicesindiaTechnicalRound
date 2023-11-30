import React, { useState, useMemo } from "react";
import CheckboxList from "./components/CheckboxList";
import RadioList from "./components/RadioList";

const ProductArray = [
  {
    type: "radioButton",
    data: [
      {
        _id: 0,
        title: "pet care",
        price: 10,
        quantity: 1,
        selected: false,
      },
      {
        _id: 1,
        title: "car wash",
        price: 15,
        quantity: 5,
        selected: false,
      },
    ],
  },
  {
    type: "checkBox",
    data: [
      {
        _id: 0,
        title: "hair cut",
        price: 30,
        quantity: 2,
        selected: false,
      },
      {
        _id: 1,
        title: "home clinging",
        price: 20,
        quantity: 4,
        selected: false,
      },
      {
        _id: 2,
        title: "car Wash",
        price: 290,
        quantity: 1,
        selected: false,
      },
      {
        _id: 3,
        title: "ac Repair",
        price: 10,
        quantity: 2,
        selected: false,
      },
    ],
  },
];

const App = () => {
  const [items, setItems] = useState(ProductArray);
  const [total, setTotal] = useState(0);

  const handleToggle = (type, itemId) => {
    setItems((prevItems) =>
      prevItems.map((group) => ({
        ...group,
        data: group.data.map((item) =>
          item._id === itemId
            ? { ...item, selected: !item?.selected }
            : type === group?.type
            ? { ...item, selected: false }
            : item
        ),
      }))
    );
  };

  useMemo(() => {
    const newTotal = items.reduce(
      (groupTotal, group) =>
        groupTotal +
        group.data.reduce(
          (itemTotal, item) =>
            item?.selected
              ? itemTotal + item?.price * item?.quantity
              : itemTotal,
          0
        ),
      0
    );

    setTotal(newTotal);
  }, [items]);

  return (
    <div>
      <h2>Select Item</h2>
      <RadioList
        items={items.find((group) => group.type === "radioButton")?.data || []}
        handleToggle={(itemId) => handleToggle("radioButton", itemId)}
      />
      <h2>Select Category</h2>
      <CheckboxList
        items={items.find((group) => group.type === "checkBox")?.data || []}
        handleToggle={(itemId) => handleToggle("checkBox", itemId)}
      />
      <h1>Total: ${total}</h1>
    </div>
  );
};

export default App;
