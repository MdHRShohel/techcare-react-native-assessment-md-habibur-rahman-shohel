import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Transaction, TransactionState } from '../types/Transaction';

export const useTransactionStore = create(
  persist<TransactionState>(
    (set) => ({
      transactions: [],

      // ➤ ADD
      addTransaction: (tx: Transaction) =>
        set((state) => ({
          transactions: [...state.transactions, tx],
        })),

      // ➤ UPDATE
      updateTransaction: (tx: Transaction) =>
        set((state) => ({
          transactions: state.transactions.map((item) => (item.id === tx.id ? tx : item)),
        })),

      // ➤ DELETE
      deleteTransaction: (id: string) =>
        set((state) => ({
          transactions: state.transactions.filter((t) => t.id !== id),
        })),

      // ➤ RESET ALL
      resetTransactions: () => set({ transactions: [] }),
    }),

    {
      name: 'transaction-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
