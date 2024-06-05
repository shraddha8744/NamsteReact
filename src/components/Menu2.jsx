import Shimmer from "./Shimmer";
import useMenu from "../utils/useMenu";

const Menu2 = () => {
  const data = useMenu();

  return data.length == 0 ? (
    <Shimmer />
  ) : (
    <div>
      <h1>menu2</h1>
      {data.map((e) => {
        return (
          <>
            <h1>{e.info.name}</h1>
          </>
        );
      })}
    </div>
  );
};

export default Menu2;
