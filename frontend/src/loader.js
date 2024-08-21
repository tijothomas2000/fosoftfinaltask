import axios from "axios";

export const singlePageLoader = async ({ params }) => {
    const response = await axios.get('https://dummyjson.com/recipes/' + params.id);
    return response.data;
}