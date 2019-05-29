export class Task {
  _id?: string;
  reporterId: string;
  assigneeId?: string;
  note?: string;
  dueTo?: Date;
  categoryId?: string;
}
