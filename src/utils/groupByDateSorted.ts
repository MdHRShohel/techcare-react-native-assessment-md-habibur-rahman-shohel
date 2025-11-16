// Helper function to group transactions by date
import { Transaction } from '../types/Transaction';

export const groupTransactionsByDate = (transactions: Transaction[]) => {
  const grouped: Record<string, Transaction[]> = {};
  transactions.forEach((tx) => {
    const date = tx.date ? tx.date.toString().split('T')[0] : 'Unknown';
    if (!grouped[date]) grouped[date] = [];
    grouped[date].push(tx);
  });
  return Object.keys(grouped)
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
    .map((date) => ({ title: date, data: grouped[date] }));
};
