export const getTotalAmount = (arr) => {
  const total = arr.reduce((prevAmount, currentItem) => {
    return (prevAmount += currentItem.price);
  }, 0);
  return total;
};
export const getTotalDelivered = (arr) => {
  const total = arr.reduce((prevAmount, currentItem) => {
    if (currentItem.isDelivered) {
      return prevAmount+=1;
    } else {
      return prevAmount;
    }
  }, 0);
  return total;
};
export const getTotalUnDelivered = (arr) => {
  const total = arr.reduce((prevAmount, currentItem) => {
    if (currentItem.isDelivered === false) {
      return prevAmount+=1;
    } else {
      return prevAmount;
    }
  }, 0);
  return total;
};
export const getTotalItemCount = (arr,itemName) => {
  const total = arr.reduce((prevAmount, currentItem) => {
    if (currentItem.name === itemName) {
      return prevAmount+=1;
    } else {
      return prevAmount;
    }
  }, 0);
  return total;
};

