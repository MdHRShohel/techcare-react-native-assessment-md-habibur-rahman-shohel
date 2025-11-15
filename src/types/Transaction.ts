import { CategoryItem, CategoryType } from './categoryType';

export interface Transaction {
  id: string;
  type: CategoryType;
  amount: number;
  category: CategoryItem | null;
  date: string;
  note: string;
}

export interface TransactionState {
  transactions: Transaction[];
  addTransaction: (tx: Transaction) => void;
  resetTransactions: () => void;
}
