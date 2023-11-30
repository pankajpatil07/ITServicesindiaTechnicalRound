import React from "react";

const CheckboxList = React.memo(({ items, handleToggle }) => {
  return (
    <div>
      <table>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td> ${item.price}</td>
              <td>Quantity: {item.quantity}</td>
              <td>
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => handleToggle(item._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default CheckboxList;
