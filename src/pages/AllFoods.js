import { useContext } from "react";
import { Button, ButtonGroup, Row } from "react-bootstrap";
import Sandwich from "../components/Sandwich";
import SandwichAdd from "../components/SandwichAdd";
import FoodContext from "../context/FoodsContext";
import FoodsPackContext from "../context/FoodsPackContext";
import { sortDocsBy } from "../utils/list";

export default function AllFoods() {
  const foodsCtx = useContext(FoodContext);
  const selectedFoodsCtx = useContext(FoodsPackContext);
  return (
    <>
      <Row className="gap-1 p-1">
        {foodsCtx.foods
          .sort(sortDocsBy("title", "string"))
          .map(({ id, index, description, title, img }) => (
            <Sandwich key={id} id={id} title={title} img={img} />
          ))}
        <SandwichAdd key="newOne" title={"+ הוסף חדש"} addToBox={false} />
      </Row>
      <Row>
        {selectedFoodsCtx.selecedFoods.length > 0 &&
          selectedFoodsCtx.map((food) => {})}
      </Row>
    </>
  );
}
