import { Box, Container } from "@mui/material";
import { fontPx } from "@/utils/useResponsivePx";
import LocalAnimatedText from "@/components/localAnimatedText";
import dotMatrixScreen from "../../images/screen.png";

export default function Interact() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        maxWidth: "1920px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={dotMatrixScreen}
        alt="interact"
        sx={{
          width: "1040px",
          height: "974px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "108px",
        }}
      >
        <LocalAnimatedText
          variant="h3"
          style={{
            fontSize: fontPx(32),
            lineHeight: fontPx(48),
          }}
        >
          敲击，不仅有声，更有色
        </LocalAnimatedText>
        <LocalAnimatedText
          variant="h6"
          style={{
            marginTop: "24px",
            fontSize: fontPx(18),
            lineHeight: fontPx(32),
            maxWidth: "549px",
          }}
        >
          {`独创的点阵屏交互系统，将你的每一次击键转化为视觉律动。内置拾音律动功能，点阵屏能随环境音效或音乐节奏实时跳动。无论是游戏的激昂枪声，还是背景乐的舒缓节拍，声浪在此刻化作可视的起伏波纹，增强沉浸式交互体验。`}
        </LocalAnimatedText>
      </Box>
    </Container>
  );
}
