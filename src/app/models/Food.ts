export interface Food {
  id: number;
  name: string;
  protein: number;
  carbs: number;
  fats: number;
  calories?: number;
  dateTime?: Date;
  icon?: string;
}
