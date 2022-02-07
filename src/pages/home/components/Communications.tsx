import { CommunicationProp } from "../types";
import Card from "./Card";
import { ContactProp } from "./../types";
const Communications: React.FC<CommunicationProp> = ({
  data,
  removeItem,
  edit,
}) => {
  return (
    <div>
      {data?.map((el: ContactProp) => (
        <Card key={el?.id} item={el} removeItem={removeItem} edit={edit} />
      ))}
    </div>
  );
};
export default Communications;
