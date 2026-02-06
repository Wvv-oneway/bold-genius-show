import { Box, Container, Typography } from "@mui/material";
import { fontPx, pxToVw } from "@/utils/useResponsivePx";
import product1 from "./images/product1.png";
import product2 from "./images/product2.png";
import { navigateTo } from "@/utils";

export default function Product() {
  const productList = [
    {
      name: "BOX 63磁轴体机械键盘",
      description: "碳纤维定位板",
      image: product1,
      link: "/product/box63",
    },
    {
      name: "E-SPORTS HUB",
      description: "桌面模块",
      image: product2,
      link: "/product/esports-hub",
    },
  ];

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        minHeight: "100vh",
        maxWidth: "1920px",
        px: `clamp(0px, ${pxToVw(176)}, 176px) !important`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontSize: fontPx(14),
          lineHeight: fontPx(18),
          mt: "36px",
          mb: "20px",
        }}
      >
        热卖产品
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(400px, 502px))",
          gap: "30px",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        {productList.map((item, index) => (
          <Box
            key={`prod_${index}`}
            sx={{
              width: "100%",
              maxWidth: "502px",
              // height: "318px",
              backgroundColor: "#fff",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              paddingBottom: "24px",
            }}
            onClick={() => {
              navigateTo(item.link);
            }}
          >
            <Box
              component="img"
              src={item.image}
              alt={item.name}
              sx={{
                width: "calc(100% - 64px)",
                borderRadius: "20px 20px 0 0",
                display: "block",
                margin: "24px auto 20px",
                transition: "transform 0.5s ease",
                transformOrigin: "center center",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
            <Typography
              variant="h3"
              sx={{
                fontSize: fontPx(20),
                lineHeight: fontPx(18),
                fontWeight: 500,
                marginLeft: "32px",
              }}
            >
              {item.name}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: fontPx(14),
                lineHeight: fontPx(18),
                marginTop: "12px",
                marginLeft: "32px",
              }}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
