import { CircleCheckBig, Circle } from 'lucide-react';

interface CheckBoxProps {
    state: boolean;
    text: string;
    onClick: () => void;
  }

  const CheckBox: React.FC<CheckBoxProps> = ({ state, text, onClick }) => {
  return (
    <li className={`flex gap-2 h-16 cursor-pointer h-[54px] items-center px-4 bg-stone-200 ${state ? 'line-through':''}`} onClick={onClick} >
      {state ? <CircleCheckBig /> : <Circle />} {text}
    </li>
  );
};

export default CheckBox;
