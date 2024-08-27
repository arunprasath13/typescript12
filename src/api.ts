interface RatingTypes {
    rate: number;
    count: number;
}
interface FetchDataTypes {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: RatingTypes;
}
const fetchData = async () => {
    const result = await fetch("https://fakestoreapi.com/products")
    const data:FetchDataTypes[] = await result.json()
    console.log(data[0])
    const filteredData = data.map(({id, title, price, rating: {count}})=>{
        return {
            id,
            title,
            price,
            count
        }
    })
    console.log("filteredData ", filteredData)
}
fetchData()
