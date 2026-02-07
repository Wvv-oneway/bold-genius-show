import { Box, Container } from "@mui/material";
import { pxToVw, fontPx } from "@/utils/useResponsivePx";
import LocalAnimatedText from "@/components/localAnimatedText";

export default function Performance() {
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
          加厚铺铜黑芯，冷静的性能基石
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
          {`在 0.001mm 的竞技精度面前，稳定压倒一切。加厚铜层不仅是散热器，更是信号的稳压器。更厚的铜箔提供了更低的电阻与更强的抗干扰能力，为磁轴的霍尔传感器信号传输提供了电气冗余。无论操作多么剧烈，都能确保每一道指令信号纯净、无损地传输至中枢，让每一次触发都精准如一。`}
        </LocalAnimatedText>
      </Box>
    </Container>
  );
}
