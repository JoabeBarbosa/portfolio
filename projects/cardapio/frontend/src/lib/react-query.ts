import { QueryClient } from "@tanstack/react-query";
//---
export const queryClient = new QueryClient({
   defaultOptions: {
    queries: {
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
    },
   }, 
});
//--- Query keys
export const queryKeys = {
    pratos: {
        all: ["pratos-data"] as const,
        detail: (id: string) => ["pratos-data",id] as const
    },
};