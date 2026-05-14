import type { AxiosResponse } from "axios";
import api from "./api";
import type { PratoCreateDTO } from "../interfaces/PratoCreateDTO";

//---
export async function postData(data: PratoCreateDTO): Promise<AxiosResponse<PratoCreateDTO>> {
    const response = await api.post<PratoCreateDTO>("/prato",data);
    //---
    return response;
}