import { Row } from "react-bootstrap";
import Sandwich from "../components/Sandwich";
import SandwichAdd from "../components/SandwichAdd";
import { sandwichData } from "../data";

export default function AllFoods() {
  return (
    <Row className="gap-1 p-1">
      {sandwichData.map(({ id, title, img }) => (
        <Sandwich key={id} id={id} title={title} img={img} />
      ))}
      <SandwichAdd
        key={sandwichData.length + 1}
        id={sandwichData.length + 1}
        title={"+ הוסף חדש"}
        addToBox={false}
      />
    </Row>
  );
}
