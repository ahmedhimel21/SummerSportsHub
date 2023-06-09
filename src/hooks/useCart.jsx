import { useContext } from "react"
import { AuthContext } from "../Provider/Authproviders"
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

export const useCart = () =>{
  const {user} = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const {refetch,data:cart=[]} = useQuery({
    queryKey: ['carts',user?.email],
    queryFn: async () =>{
      const res = await axiosSecure(`/carts?email=${user?.email}`)
      return res.data;
    },
  })
  return [cart,refetch]
}