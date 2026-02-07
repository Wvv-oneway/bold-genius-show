import { Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import TopBanner from "./components/topBanner";
import NewProduct from "./components/newProduct";
import BigBang from "./components/bigBang";
import VideoShow from "./components/videoShow";
import Why from "./components/why";
import Comment from "./components/comment";
import { useEffect } from "react";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "comment") {
      const el = document.getElementById("comment-section");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

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
