export const numberT0Currency = (number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(number);
};

export const numberToCurrency = (number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(number);
};

export const getRandomData = (response) => {
  if (!response) return;
  let randomProductArray = [];
  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(
      Math.random() * response?.data?.products?.totalItems
    );
    randomProductArray.push(response.data.products.items[randomNum]);
  }
  randomProductArray = [...new Set(randomProductArray)];
  return randomProductArray;
};
