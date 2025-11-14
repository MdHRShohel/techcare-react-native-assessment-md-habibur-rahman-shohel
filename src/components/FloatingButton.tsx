import { PlusSignIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { TouchableOpacity } from 'react-native';

const FloatingButton = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="bg-plusBtnBg size-[68px] items-center justify-center rounded-full shadow-lg"
    >
      <HugeiconsIcon icon={PlusSignIcon} size={22} className="text-white" />
    </TouchableOpacity>
  );
};

export default FloatingButton;
