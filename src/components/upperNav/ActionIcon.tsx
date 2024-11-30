const ActionIcon = ({ icon, onClick }: { icon: string; onClick: () => void }) => {
  return (
    <button
      type="button"
      name={`Action icon button of ${icon} `}
      onClick={onClick}
      className="glassyEffect-lg cursor-pointer  flex justify-center items-center rounded-full p-1 md:p-2"
    >
      <img alt="Action icon" src={icon} />
    </button>
  );
};

export default ActionIcon;
