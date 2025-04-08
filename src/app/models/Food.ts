export interface Food {
  id: number;
  name: string;
  icon?: string;
  protein: number;
  carbs: number;
  fats: number;
  calories?: number;
  creation?: Date;
  modification?: Date;
  favorite?:boolean
}
