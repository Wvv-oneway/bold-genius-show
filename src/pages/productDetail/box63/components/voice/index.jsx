import { Box, Container } from "@mui/material";
import { pxToVw, fontPx } from "@/utils/useResponsivePx";
import LocalAnimatedText from "@/components/localAnimatedText";

export default function Voice() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        maxWidth: "1920px",
        px: `clamp(0px, ${pxToVw(176)}, 176px) !important`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "112px",
          height: "100vh",
        }}
      >
        <LocalAnimatedText
          variant="h3"
          style={{
            fontSize: fontPx(32),
            lineHeight: fontPx(48),
            textAlign: "center",
          }}
        >
          精密堆叠的声学建筑
        </LocalAnimatedText>
        <LocalAnimatedText
          variant="h6"
          style={{
            textAlign: "center",
            marginTop: "24px",
            fontSize: fontPx(18),
            lineHeight: fontPx(32),
            px: `clamp(0px, ${pxToVw(176)}, 176px) !important`,
            whiteSpace: "pre-line",
            maxWidth: "901px",
          }}
        >
          {`拒绝空腔，满配出发。从加厚铺铜黑芯 PCB 到多层消音填充，我们不惜工本堆叠内部用料。高密度材质层层阻隔杂音与共振，只为还原磁轴触底时那一声纯粹、凝实的“雨滴音”。`}
        </LocalAnimatedText>
      </Box>
    </Container>
  );
}
