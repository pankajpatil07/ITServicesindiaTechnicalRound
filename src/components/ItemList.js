import React from 'react';

const ItemList = ({ items, handleToggle, type }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item._id}>
          <input
            type={type === 'checkbox' ? 'checkbox' : 'radio'}
            name={type === 'radio' ? 'radioGroup' : undefined}
            checked={item.selected}
            onChange={() => handleToggle(item._id)}
          />
          {item.title} - Price: ${item.price} - Quantity: {item.quantity}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
