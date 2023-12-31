import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

const useMenu = () => {
    // const [loading, setLoading]=useState(true);
    // const [menu, setMenu]=useState([]);
    //  useEffect(()=>{
    //     fetch('https://foodvillage-server.vercel.app/menuitems')
    //     .then(res=>res.json())
    //     .then(data => {
    //         setMenu(data);
    //         setLoading(false);
    //     })
    //  } ,[])

    const { data: menu = [], isLoading, refetch } = useQuery({
        queryKey: ['menuitems'],
        queryFn: async () => {
            const res = await fetch('https://foodvillage-server.vercel.app/menuitems')
            return res.json()

        }
    })
    return [menu, isLoading, refetch];
}

export default useMenu;