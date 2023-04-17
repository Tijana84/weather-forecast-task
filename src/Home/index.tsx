import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate("/search");
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};
