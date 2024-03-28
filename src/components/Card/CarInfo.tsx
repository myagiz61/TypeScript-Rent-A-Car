type CarInfoProps = {
  icon: string;
  title: string;
};

const CarInfo = ({ icon, title }: CarInfoProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <img src={icon} />
      <p className="text-[14px]">{title}</p>
    </div>
  );
};

export default CarInfo;
