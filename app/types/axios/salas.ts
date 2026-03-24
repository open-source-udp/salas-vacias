export type Room = {
  building: string;
  floor: number;
  room: string;
};
type salaNodeResponse = {
  code: string;
  section: number;
  course: string;
  place: string;
  start: string;
  finish: string;
  day: number;
  teacher: string;
};
export interface NodeResponse {
  node: salaNodeResponse;
}

export interface SalaNode extends salaNodeResponse {
  block: number;
  dayString: string;
  room: Room;
}
