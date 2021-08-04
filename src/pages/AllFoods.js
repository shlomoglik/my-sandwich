import { useContext, useState } from "react";
import { Card, Row, Spinner } from "react-bootstrap";
import Sandwich from "../components/Sandwich";
import SandwichAdd from "../components/SandwichAdd";
import FoodContext from "../context/FoodsContext";
import FoodsPackContext from "../context/FoodsPackContext";
import { sortDocsBy } from "../utils/list";

export default function AllFoods() {
  const foodsCtx = useContext(FoodContext);
  const selectedFoodsCtx = useContext(FoodsPackContext);
  const stages = {
    select: "select",
    pack: "pack",
  };
  const [stage, setStage] = useState(stages.select);

  return (
    <>
      <Card>
        <Card.Title>בחירת כריך</Card.Title>
        <Row className="gap-1 p-1">
          {foodsCtx.loading && <Spinner animation="border" />}
          {foodsCtx.foods
            .sort(sortDocsBy("title", "string"))
            .map(({ id, index, description, title, img }) => (
              <Sandwich key={id} id={id} title={title} img={img} />
            ))}
          <SandwichAdd key="newOne" title={"+ הוסף חדש"} addToBox={false} />
        </Row>
      </Card>

      <Row>
        {selectedFoodsCtx.selecedFoods.length > 0 &&
          selectedFoodsCtx.map((food) => {})}
      </Row>
    </>
  );
}
