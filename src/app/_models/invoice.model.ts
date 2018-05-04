export class Invoice {
  _id?: string;
  ownerId?: string;
  amountOriginal: number;
  amountPrivate: number;
  amountToSplit: number;
  month: number;
  year: number;
  date: Date;
}
