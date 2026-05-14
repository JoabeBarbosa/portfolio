import { useQuery } from "@tanstack/react-query";
import fetchData from "../services/getPratos";
import { queryKeys } from "../lib/react-query";
//---
export function usePratoData(){
    const query = useQuery({
        queryKey: queryKeys.pratos.all,
        queryFn: fetchData,
        retry: 2,
    });
    //---
    return {
        ...query,
        data: query.data?.data,
    }
}