"use strict";
const fetchData = async () => {
    const result = await fetch("https://fakestoreapi.com/products");
    const data = await result.json();
    console.log(data[0]);
    const filteredData = data.map(({ id, title, price, rating: { count } }) => {
        return {
            id,
            title,
            price,
            count
        };
    });
    console.log("filteredData ", filteredData);
};
fetchData();
