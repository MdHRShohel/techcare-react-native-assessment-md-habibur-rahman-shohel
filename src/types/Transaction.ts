import { CategoryItem, CategoryType } from './categoryType';

export interface Transaction {
  id: string;
  type: CategoryType;
  amount: string | number;
  category: CategoryItem | null;
  date: string;
  note: string;
}

export interface TransactionState {
  transactions: Transaction[];
  addTransaction: (tx: Transaction) => void;
  updateTransaction: (tx: Transaction) => void;
  deleteTransaction: (id: string) => void;
  resetTransactions: () => void;
}
