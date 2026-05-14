import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postData } from "../services/postPratos";
import { queryKeys } from "../lib/react-query";

//---
export function usePratoMutate(){
    const queryClient = useQueryClient();
    //---
    const mutation = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: queryKeys.pratos.all});
        }
    });
    //---
    return mutation;
}