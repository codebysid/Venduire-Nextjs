import { AiFillHeart } from "react-icons/ai";
import { useContext } from "react";
import Favourites from "./Favourites";
import { LikesContext } from "@/Context/DarkMode";
import ProductCard from "./ProductCard";

const Products = ({ response }) => {
  const { likes, setLikes } = useContext(LikesContext);

  const updateLikes = (id) => {
    if (likes.includes(id)) {
      setLikes((prev) =>
        prev.filter((ele) => {
          return ele !== id;
        })
      );
    } else setLikes((prev) => (prev ? [...prev, id] : [id]));
  };

  return (
    <div className="flex flex-row w-9/12">
      <div className="flex flex-row flex-wrap gap-6 justify-around items-center w-11/12">
        {response.data?.products.items.map((ele, key) => {
          let id = ele.id;
          return (
            <div key={key}>
              <div
                className="cursor-pointer relative"
                onClick={() => updateLikes(id)}
              >
                <ProductCard ele={ele} />
                {likes.includes(ele.id) ? (
                  <AiFillHeart
                    className="starIcon absolute top-10"
                    fill="#dc143c"
                    strokeWidth={50}
                    stroke="black"
                  />
                ) : (
                  <AiFillHeart
                    className="starIcon absolute top-10"
                    fill="gray"
                    stroke="white"
                    strokeWidth={50}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
      {likes.length > 0 && <Favourites response={response} />}
    </div>
  );
};

export default Products;
