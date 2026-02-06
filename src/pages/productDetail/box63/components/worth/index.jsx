import { Box, Container, Typography } from "@mui/material";
import { pxToVw, fontPx } from "@/utils/useResponsivePx";
import LocalAnimatedText from "@/components/localAnimatedText";
import worth1 from "../../images/worth1.png";
import worth2 from "../../images/worth2.png";
import worth3 from "../../images/worth3.png";
import worth4 from "../../images/worth4.png";
import worth5 from "../../images/worth5.png";
import worth6 from "../../images/worth6.png";

export default function Worth() {
  const list = [
    {
      icon: worth1,
      title: "XS 147 600 旗舰强芯",
      content:
        "搭载全新一代控制芯片，算力满血释放。相比传统方案，输入延迟大幅降低 40%，极速响应快人一步。",
    },
    {
      icon: worth2,
      title: "0.001mm RT 精度",
      content:
        "支持 0.001-3.4mm 磁轴触发范围调节。配合 0.001mm 的调节精度，实现急停急起，精准匹配您的电竞手感。",
    },
    {
      icon: worth3,
      title: "可视化点阵屏",
      content:
        "创新点阵交互视窗，支持打字烟花特效、拾音律动及自定义动画。信息状态实时显示，交互体验不再单调。",
    },
    {
      icon: worth4,
      title: "定制黑耀磁轴",
      content:
        "采用霍尔效应触发技术，线性手感顺滑无杂音。亿次按键寿命，出厂精润，保证长期使用的一致性与稳定性。",
    },
    {
      icon: worth5,
      title: "铺铜黑芯 PCB",
      content:
        "PCB 采用全裸露加厚铺铜工艺。利用红铜高密度特性，有效提升散热效率，同时让敲击声更加沉稳、凝实。",
    },
    {
      icon: worth6,
      title: "CNC 铝合金精雕",
      content:
        "全铝合金一体成型机身，表面经 #170 氧化锆陶瓷砂喷涂处理。线条硬朗，触感细腻温润，尽显旗舰质感。",
    },
  ];

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        maxWidth: "1920px",
        px: `clamp(0px, ${pxToVw(176)}, 176px) !important`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <LocalAnimatedText
        variant="h3"
        style={{
          fontSize: fontPx(32),
          lineHeight: fontPx(48),
          textAlign: "center",
          whiteSpace: "pre-line",
          marginTop: "112px",
        }}
      >
        {`BOX 63 值不值？
          绝对值`}
      </LocalAnimatedText>
      <LocalAnimatedText
        variant="h6"
        style={{
          textAlign: "center",
          marginTop: "24px",
          fontSize: fontPx(18),
          lineHeight: fontPx(32),
        }}
      >
        诚意满分，让每一分都超值。
      </LocalAnimatedText>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 318px))",
          gap: "72px 170px",
          justifyContent: "center",
          width: "100%",
          marginTop: "98px",
        }}
      >
        {list.map((item, index) => {
          return (
            <Box key={`worth_${index}`} sx={{ width: "318px" }}>
              <Box
                component="img"
                src={item.icon}
                alt={item.title}
                sx={{
                  width: "72px",
                  height: "72px",
                  marginTop: "16px",
                  marginLeft: "35px",
                }}
              />
              <Typography
                variant="h3"
                sx={{
                  fontSize: fontPx(20),
                  lineHeight: fontPx(18),
                  marginTop: "24px",
                  marginLeft: "20px",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: fontPx(16),
                  lineHeight: fontPx(21),
                  marginTop: "16px",
                  maxWidth: "282px",
                  marginLeft: "20px",
                }}
              >
                {item.content}
              </Typography>
            </Box>
          );
        })}
      </Box>
      <Typography
        variant="h6"
        sx={{
          fontSize: fontPx(16),
          lineHeight: fontPx(21),
          marginTop: "101px",
          marginBottom: "24px",
        }}
      >
        Bold Genius，让敲击变成一件有趣的事！
      </Typography>
    </Container>
  );
}
