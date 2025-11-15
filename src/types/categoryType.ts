/* eslint-disable @typescript-eslint/no-explicit-any */
export type CategoryType = 'expense' | 'income';

export interface CategoryItem {
  id: string;
  label: string;
  type: CategoryType;
  icon: any;
}
