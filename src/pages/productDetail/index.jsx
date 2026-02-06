import { useParams } from "react-router-dom";
import Box63 from "./box63";

export default function ProductDetail() {
  const { productName } = useParams();

  switch (productName) {
    case "box63":
      return <Box63 />;

    // case "box64":
    //   return <Box64 />;

    default:
      return null;
  }
}
