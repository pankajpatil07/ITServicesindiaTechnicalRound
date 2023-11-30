import React from "react";

const RadioList = React.memo(({ items, handleToggle }) => {
  return (
    <table>
      <tbody>
        {items.map((item) => (
          <tr key={item._id}>
            <td>{item.title}</td>
            <td> ${item.price}</td>
            <td>Quantity: {item.quantity}</td>
            <td>
              <input
                type="radio"
                name="radioGroup"
                checked={item.selected}
                onChange={() => handleToggle(item._id)}
                style={{ display: "block" }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});

export default RadioList;
