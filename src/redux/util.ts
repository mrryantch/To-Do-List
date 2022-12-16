import { TicketType, Status } from "../data";

export function removeItem(array: Array<TicketType>, item: number) {
  for (var i in array) {
    if (array[i].key === item) {
      array.splice(parseInt(i), 1);
      break;
    }
  }
}

export function updateStatus(array: Array<TicketType>, item: number) {
  for (var i in array) {
    if (array[i].key === item) {
      if (array[i].status === Status.Active) {
        array[i].status = Status.Done;
        break;
      }
      if (array[i].status === Status.Done) {
        array[i].status = Status.Active;
        break;
      }
    }
  }
}

export function updateContent(
  array: Array<TicketType>,
  item: number,
  newContent: string
) {
  for (var i in array) {
    if (array[i].key === item) {
      array[i].content = newContent;
    }
  }
}
