export class Invoice {
  _id?: string;
  ownerId?: string; // NOTE: for later use if filter by user is required
  amountOriginal: number;
  amountPrivate: number;
  amountToSplit: number;
  month: number;
  year: number;
  date: Date;
}
