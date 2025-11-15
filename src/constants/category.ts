import {
  Briefcase01Icon,
  Bus01Icon,
  Car01Icon,
  Chart01FreeIcons,
  CreditCardIcon,
  GiftCard02Icon,
  HeartCheckIcon,
  Home01Icon,
  KitchenUtensilsIcon,
  LighthouseIcon,
  MoneyBag01Icon,
  PartyIcon,
  ShoppingBag01Icon,
} from '@hugeicons/core-free-icons';
import { CategoryItem } from '../types/categoryType';

// Unified category array
export const categories: CategoryItem[] = [
  // Expense
  { id: 'food', label: 'Food & Dining', type: 'expense', icon: KitchenUtensilsIcon },
  { id: 'shopping', label: 'Shopping', type: 'expense', icon: ShoppingBag01Icon },
  { id: 'transport', label: 'Transport', type: 'expense', icon: Bus01Icon },
  { id: 'health', label: 'Health', type: 'expense', icon: HeartCheckIcon },
  { id: 'housing', label: 'Housing', type: 'expense', icon: Home01Icon },
  { id: 'gifts', label: 'Gifts', type: 'expense', icon: GiftCard02Icon },
  { id: 'entertainment', label: 'Entertainment', type: 'expense', icon: PartyIcon },
  { id: 'utilities', label: 'Utilities', type: 'expense', icon: LighthouseIcon },
  { id: 'vehicle', label: 'Vehicle', type: 'expense', icon: Car01Icon },

  // Income
  { id: 'salary', label: 'Salary', type: 'income', icon: Briefcase01Icon },
  { id: 'freelance', label: 'Freelance', type: 'income', icon: MoneyBag01Icon },
  { id: 'business', label: 'Business', type: 'income', icon: Chart01FreeIcons },
  { id: 'bonus', label: 'Bonus', type: 'income', icon: CreditCardIcon },
];
