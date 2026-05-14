import type { AxiosResponse } from "axios";
import type { PratoDTO } from "../interfaces/PratoDTO";
import api from "./api";
//---
const fetchData = async (): Promise<AxiosResponse<PratoDTO[]>> => {
    const response = await api.get<PratoDTO[]>("/prato");
    //---
    return response;
}

export default fetchData;