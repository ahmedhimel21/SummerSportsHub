import { useContext } from "react"
import { AuthContext } from "../Provider/Authproviders"
import { useQuery } from "@tanstack/react-query";

export const useCart = () =>{
  const {user} = useContext(AuthContext);
  const {refetch,data:cart=[]} = useQuery({
    queryKey: ['carts',user?.email],
    queryFn: async () =>{
      const res = await fetch(`http://localhost:5000/carts?emil=${user?.email}`)
      return res.json();
    },
  })
  return [cart,refetch]
}