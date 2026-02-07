import { Box, Container } from "@mui/material";
import Banner from "./components/banner";
import Points from "./components/points";
import Center from "./components/center";
import Details from "./components/details";
import Interact from "./components/interact";
import Slug from "./components/slug";
import Worth from "./components/worth";
import Voice from "./components/voice";
import Performance from "./components/performance";
import Flagship from "./components/flagship";

export default function ProductDetail() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        // maxWidth: "1920px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Banner />
      <Points />
      <Center />
      <Details />
      <Interact />
      <Voice />
      <Performance />
      <Slug />
      <Flagship />
      <Worth />
    </Container>
  );
}
