import axios from "axios";
import { convertDayToString, convertHourToBlock } from "../utils/time";
import { convertToRoomType } from "../utils/utils";
import { NodeResponse, SalaNode } from "../types/axios/salas";

export const getSalas = async (): Promise<SalaNode[]> => {
  const url = "https://salas.docencia-eit.cl/data.json";
  try {
    const res = await axios.get(url);
    const data: NodeResponse[] = res.data.data ? res.data.data.allSalasUdps.edges : res.data;
    const salas: SalaNode[] = data.map((sala) => {
      return {
        ...sala.node,
        block: convertHourToBlock(sala.node.start),
        dayString: convertDayToString(sala.node.day),
        room: convertToRoomType(sala.node.place),
      };
    });
    return salas;
  } catch (error) {
    console.log("error on get salas", error);
    return [];
  }
};
