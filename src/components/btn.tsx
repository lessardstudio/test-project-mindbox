
interface BtnProps {
    state: boolean;
    text: string;
    onClick: () => void;
  }

  const Btn: React.FC<BtnProps> = ({ state, text, onClick }) => {
  return (
    <div className={`btn cursor-pointer px-2 py-1 rounded-md ${state ? 'bg-[#000]/10':''}`} onClick={onClick}>
        {text}
    </div>
  );
};

export default Btn;