export interface TicketType {
  key: number;
  content: string;
  status: Status;
}

export enum Status {
  Active = "Active",
  Done = "Done",
}
