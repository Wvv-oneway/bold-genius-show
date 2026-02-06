import { Container } from "@mui/material";
import TopBanner from "./components/topBanner";
import NewProduct from "./components/newProduct";
import BigBang from "./components/bigBang";
import VideoShow from "./components/videoShow";
import Why from "./components/why";
import Comment from "./components/comment";

export default function Home() {
  return (
    <>
      <TopBanner />
      <NewProduct />
      <BigBang />
      <VideoShow />
      <Why />
      <Comment />
    </>
  );
}
