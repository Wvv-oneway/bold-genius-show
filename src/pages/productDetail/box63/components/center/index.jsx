import { Box, Container } from "@mui/material";
import { pxToVw, fontPx } from "@/utils/useResponsivePx";
import LocalAnimatedText from "@/components/localAnimatedText";

export default function Center() {
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
          是键盘，也是您的桌面中心
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
          {`告别接口焦虑与线缆缠绕，一套设备，构建高效桌面秩序。
          BOX63 创新性地将 USB 2.0 高速 Hub 功能融入桌面布局。通过键盘背部的拓展接口，您可以轻松连接无线鼠标接收器、U盘或耳机，无需再弯腰探寻主机背后的插槽。减少桌面线缆，还您一个清爽、无拘束的操作空间。`}
        </LocalAnimatedText>
      </Box>
    </Container>
  );
}
