import { Container } from "@mui/material";
import ExplodedLayer from "@/components/explodedLayer";
import keyboard1 from "../../images/keyboard1.png";
import keyboard2 from "../../images/keyboard2.png";
import keyboard3 from "../../images/keyboard3.png";
import keyboard4 from "../../images/keyboard4.png";
import keyboard5 from "../../images/keyboard5.png";
import keyboard6 from "../../images/keyboard6.png";
import keyboard7 from "../../images/keyboard7.png";
import keyboard8 from "../../images/keyboard8.png";
import keyboard9 from "../../images/keyboard9.png";
import LocalAnimatedText from "@/components/localAnimatedText";
import { fontPx, pxToVw } from "@/utils/useResponsivePx";
import "./index.css";
export default function BigBang() {
  const layers = [
    {
      id: "layer1",
      title: "键帽",
      description: "PC丝印喷油",
      imageUrl: keyboard1,
      zIndex: 8,
      yRange: -200,
      explainPosition: 44,
    },
    {
      id: "layer2",
      title: "轴体",
      description: "定制黑耀轴",
      imageUrl: keyboard2,
      zIndex: 7,
      yRange: -140,
      explainPosition: 101,
    },
    {
      id: "layer3",
      title: "上壳",
      description: "铝合金切削成型",
      imageUrl: keyboard3,
      zIndex: 6,
      yRange: -80,
      explainPosition: 136,
    },
    {
      id: "layer4",
      title: "定位板",
      description: "碳纤维定位板",
      imageUrl: keyboard4,
      zIndex: 5,
      yRange: -20,
      explainPosition: 128,
    },
    {
      id: "layer5",
      title: "PORON夹心棉",
      description: "罗杰斯油性慢回弹",
      imageUrl: keyboard5,
      zIndex: 4,
      yRange: 40,
      explainPosition: 112,
    },
    {
      id: "layer6",
      title: "轴下垫",
      description: "ipex*8轴下垫",
      imageUrl: keyboard6,
      zIndex: 3,
      yRange: 100,
      explainPosition: 112,
    },
    {
      id: "layer7",
      title: "PCB与PET垫",
      description: "正反铺铜黑芯PCB",
      imageUrl: keyboard7,
      zIndex: 2,
      yRange: 160,
      explainPosition: 128,
    },
    {
      id: "layer8",
      imageUrl: keyboard8,
      zIndex: 1,
      yRange: 220,
    },
    {
      id: "layer9",
      imageUrl: keyboard9,
      zIndex: 9,
      yRange: 220,
      title: "底壳",
      description: "铝合金一体成型",
      explainPosition: 148,
    },
  ];

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        maxWidth: "1920px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <ExplodedLayer
        layers={layers}
        header={
          <div className="bigbang-title">
            <LocalAnimatedText
              variant="h3"
              style={{
                fontSize: fontPx(32),
                lineHeight: fontPx(48),
              }}
            >
              硬核内核，层层不凡
            </LocalAnimatedText>
            <LocalAnimatedText
              variant="h6"
              style={{
                textAlign: "center",
                marginTop: "24px",
                fontSize: fontPx(18),
                lineHeight: fontPx(30),
                px: `clamp(0px, ${pxToVw(176)}, 176px) !important`,
              }}
            >
              多层消音填充配合Gasket软弹结构，有效由内而外消减共振。
            </LocalAnimatedText>
            <LocalAnimatedText
              variant="h6"
              style={{
                textAlign: "center",
                fontSize: fontPx(18),
                lineHeight: fontPx(30),
                px: `clamp(0px, ${pxToVw(176)}, 176px) !important`,
              }}
            >
              每一次落指，都是键帽、轴体与内部声学套件的完美协奏，提供如一的稳固回弹与软弹手感。
            </LocalAnimatedText>
          </div>
        }
      />
    </Container>
  );
}
