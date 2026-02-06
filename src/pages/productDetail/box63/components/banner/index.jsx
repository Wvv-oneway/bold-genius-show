import { Box, Button, Container, Typography } from "@mui/material";
import bgImg from "../../images/banner.png";
import { fontPx } from "@/utils/useResponsivePx";

export default function Banner() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        maxWidth: "1920px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component="img"
        src={bgImg}
        alt="box 63"
        mode="widthFix"
        sx={{
          width: "100%",
          height: {
            xs: "500px",
            sm: "500px",
            md: "500px",
            lg: "974px",
            xl: "974px",
          },
          objectFit: "cover",
          objectPosition: "center center",
          display: "block",
          position: "relative",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          top: {
            xl: "108px",
            lg: "108px",
            md: "58px",
            sm: "58px",
            xs: "58px",
          },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: fontPx(56),
            lineHeight: fontPx(48),
            fontWeight: 700,
          }}
        >
          三子星 BOX 63
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: fontPx(32),
            lineHeight: fontPx(48),
            fontWeight: 500,
            marginTop: "32px",
          }}
        >
          更多，也更强
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          bottom: {
            xl: "128px",
            lg: "128px",
            md: "58px",
            sm: "58px",
            xs: "58px",
          },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: "136px",
            height: "56px",
            borderRadius: "6px",
            fontSize: fontPx(18),
            lineHeight: fontPx(24),
            fontWeight: 500,
          }}
        >
          立即购买
        </Button>
      </Box>
    </Container>
  );
}
