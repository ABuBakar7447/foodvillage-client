import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';


const useCart = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    // const token = localStorage.getItem('access-token')

    // const { refetch, data: cart = [] } = useQuery({
    //     queryKey: ['carts',user?.email],
    //     enabled: !loading,
    //     queryFn: async () =>{

    //         const res = await fetch(`https://tame-puce-seagull-toga.cyclic.app/carts?email=${user?.email}`, { headers: {
    //             authorization: `bearer ${token}`
    //         }})
    //         return res.json();
    //     },
    //   })





    const {data: cart = [], refetch } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading && !!user?.email, //important line

        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
    })


    return [cart, refetch]

}

export default useCart;