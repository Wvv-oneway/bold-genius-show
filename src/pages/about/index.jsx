import { Box, Container, Typography } from "@mui/material";
import { fontPx } from "@/utils/useResponsivePx";
import signature from "./images/signature.png";

export default function About() {
  return (
    <Container
      maxWidth="1920px"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: fontPx(32),
          lineHeight: fontPx(48),
          marginTop: "56px",
        }}
      >
        关于 Bold Genius
      </Typography>
      <Box
        sx={{
          width: "915px",
          minWidth: "400px",
          position: "relative",
          marginBottom: "56px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: fontPx(16),
            lineHeight: fontPx(32),
            marginTop: "56px",
            whiteSpace: "pre-line",
          }}
        >
          {`Bold Genius诞生于对“够用就好”的强烈不满。当传统机械键盘在物理触点上停滞不前时，我们选择了一条更艰难的路。
          我们是一群狂热的极客、工程师和电竞玩家，我们的目标很明确:消除人与数字世界之间最后的一丝延迟。
          
          我们认为键盘不仅仅是一把键盘，它更是是你指尖的延伸。我们摒弃了传统的触发机制，全面拥抱磁轴技术。深受Apple极简设计美学的后发，Bold Genius致力于探索“物体”与“空间”的关系。我们痴迷于材质的混搭艺术。在光影流转间，字符清晰饱满，透出一种朦胧的科技美感。新我们不仅是在制造电子产品，更是在打磨一件可以放置在美术馆里的工业设计品。

          我们认为，键盘是桌面上最重要的创作工具。因此，Bold Genius剔除了一切繁杂的线条，只保留最纯粹的几何形态。我们用静电喷粉与阳极氧化工艺，赋予冷冰冰的金属以温润的触感，旨在让每一次触摸都成为一种享受。
          
          输入，本该是一件有趣的事。独创的点阵屏交互系统，将你的每一次击键转化为视觉律动。无论是状态显示还是自定义烟花特效，BoldGenius 都在以赛博朋克的方式回应你的每一次操作。

          我们的承诺打破界限，重塑标准。BoldGenius，我们不制造外设，我们制造胜率。与我们一起，在极简中发现不凡。让我们重新定义你的桌面空间。
          
          Bold Genius，让敲击变成一件有趣的事!`}
        </Typography>
        <img
          src={signature}
          alt="signature"
          style={{
            height: "112px",
            position: "absolute",
            bottom: "-64px",
            right: "-1px",
          }}
          mode="heightFix"
        />
      </Box>
    </Container>
  );
}
