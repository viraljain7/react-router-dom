import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <div className="bg-slate-500 h-[100px] font-bold capitalize">
      User:: {userid}
    </div>
  );
};

export default User;
