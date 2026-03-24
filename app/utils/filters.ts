import { SalaNode } from "../types/axios/salas";
import allRoomsJSON from "./buildings.json";
import { convertHourToBlock } from "./time";

/**
 * Return Empty Rooms from a building and day
 * @param buildingKey Actualmente solo existe 'E441' y 'V432' como edificios
 * @param rooms  lista de salas, se debe filtrar  por edificio antes de pasar la lista
 * @param block  número de bloque actual
 */
export const searchEmptyRooms = (
  buildingKey: string,
  rooms: SalaNode[],
  block: number
) => {
  // buildingRooms tiene todos los pisos y salas de un edificio (buildingKey)
  let allRooms = JSON.parse(JSON.stringify(allRoomsJSON)) as Record<
    string,
    Record<string, string[]>
  >;

  const buildingRooms = allRooms[buildingKey];
  rooms = filterByBlock(block, rooms);

  rooms.forEach((current) => {
    let room = current.room;

    if (buildingRooms[room.floor].includes(room.room)) {
      // delete room from buildingRooms
      const index = buildingRooms[room.floor].indexOf(room.room);
      buildingRooms[room.floor].splice(index, 1);
    }
  });
  console.log("REDI PAPITO", `${buildingKey}-${block}`, buildingRooms);
  return buildingRooms;
};
export const filterByBuilding = (
  building: string,
  rooms: SalaNode[]
): SalaNode[] => {
  const filteredRooms = rooms.filter((room) => room.room.building === building);
  return filteredRooms;
};

export const filterByDay = (day: number, rooms: SalaNode[]): SalaNode[] => {
  const filteredRooms = rooms.filter((room) => Number(room.day) === day);
  return filteredRooms;
};

export const filterByBlock = (block: number, rooms: SalaNode[]): SalaNode[] => {
  // rooms contiene 'start' que nos puede decir en que bloque está
  const today = new Date().getDay();
  const filterByToday = filterByDay(today, rooms);
  const filteredRooms = filterByToday.filter((room) => {
    const startBlock = convertHourToBlock(room.start);
    return startBlock == block;
  });
  return filteredRooms;
};

/*
 * la función searchEmptyRoomsByDay devuelve un mapa con las salas vacías de un edificio en un día específico.
 * Esta función retorna la cantidad de salas vacías
 */
export const countEmptyRooms = (
  buildingKey: string,
  room: SalaNode[],
  block: number
) => {
  const emptyMap = searchEmptyRooms(buildingKey, room, block);
  let count = 0;
  for (const key in emptyMap) {
    count += emptyMap[key].length;
  }
  return count;
};
