import { Box, Container } from "@mui/material";
import { fontPx, pxToVw } from "@/utils/useResponsivePx";
import LocalAnimatedText from "@/components/localAnimatedText";

export default function Flagship() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        maxWidth: "1920px",
        px: `clamp(0px, ${pxToVw(176)}, 176px) !important`,
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <LocalAnimatedText
          variant="h3"
          style={{
            fontSize: fontPx(32),
            lineHeight: fontPx(48),
          }}
        >
          极致堆料，每一克，皆是旗舰分量
        </LocalAnimatedText>
        <LocalAnimatedText
          variant="h6"
          style={{
            marginTop: "24px",
            fontSize: fontPx(18),
            lineHeight: fontPx(32),
            maxWidth: "460px",
          }}
        >
          到手即满配的诚意 我们将客制化领域的顶级配置，变为 BOX63
          的全系标配。碳纤维定位板的韧性支撑，配合加厚铺铜黑芯 PCB
          的扎实基底，构建出无可挑剔的内胆架构。无需繁琐的后续改装，开箱即刻享受顶级手感。
        </LocalAnimatedText>
      </Box>
    </Container>
  );
}
