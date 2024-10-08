import { useEffect, useState } from "react"
import { MENU_API_URL} from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [resData, setResData] = useState(null);
    useEffect(() => {
        fetchData();
    });

    const fetchData = async () => {
        const data = await fetch(MENU_API_URL + resId)
        const json = await data.json();
        setResData(json.data);
    }
    return resData;
}

export default useRestaurantMenu;