import Sandwich from "../components/Sandwich";
import SandwichAdd from "../components/SandwichAdd";
import { sandwichData } from "../data";

export default function AllFoods() {
  return (
    <>
      {sandwichData.map(({ id, title, img }) => (
        <Sandwich key={id} id={id} title={title} img={img} />
      ))}
      <SandwichAdd key={sandwichData.length+1} id={sandwichData.length+1} title={"+ הוסף חדש"} addToBox={false} />
    </>
  );
}
