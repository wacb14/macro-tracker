export interface Food {
  id: number;
  name: string;
  icon?: string;
  protein: number;
  carbs: number;
  fats: number;
  calories?: number;
  dateTime?: Date;
}
