import { Box, Container, Typography } from "@mui/material";
import { pxToVw, fontPx } from "@/utils/useResponsivePx";
import LocalAnimatedText from "@/components/localAnimatedText";
import addIcon from "../../images/addCircle.png";
import product1 from "../../images/product1.png";
import product2 from "../../images/product2.png";
import product3 from "../../images/product3.png";
import product4 from "../../images/product4.png";
import switchImg from "../../images/switch.png";
import outside from "../../images/detail5.png";
import { useState } from "react";
import "./index.css";

export default function Details() {
  const colorArr = [
    { color: "#CED7DE", name: "月光银", img: product1 },
    { color: "#EBEEF3", name: "云上舞白", img: product2 },
    { color: "#817D89", name: "深空灰", img: product3 },
    { color: "#C091CB", name: "普罗旺斯紫", img: product4 },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(colorArr[0].color);

  const detailList = [
    {
      title: "颜色",
      content: (
        <Box
          sx={{
            width: "455px",
            height: "164px",
            borderRadius: "20px",
            backgroundColor: "rgba(195, 195, 195, 0.2)",
            marginBottom: "20px",
            opacity: 0,
            transform: "translateY(12px)",
            animation: "fadeUp 420ms cubic-bezier(0.22,1,0.36,1) forwards",
          }}
        >
          <Typography
            variant="h3"
            style={{
              fontSize: fontPx(18),
              lineHeight: fontPx(36),
              paddingTop: "24px",
              paddingLeft: "32px",
            }}
          >
            颜色
          </Typography>
          <Typography
            variant="h6"
            style={{
              fontSize: fontPx(18),
              lineHeight: fontPx(32),
              paddingLeft: "32px",
            }}
          >
            四款精致颜色可选。
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingTop: "13px",
              paddingLeft: "32px",
            }}
          >
            {colorArr.map((item, index) => (
              <Box
                key={index}
                onClick={() => {
                  setSelectedColor(item.color);
                }}
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  marginRight: "6px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxSizing: "border-box",
                  border:
                    item.color === selectedColor
                      ? "2px solid #E26B18"
                      : "2px solid transparent",
                }}
              >
                <Box
                  sx={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: item.color,
                  }}
                />
              </Box>
            ))}
            <Box
              sx={{
                width: "93px",
                height: "1px",
                marginLeft: "31px",
                marginRight: "12px",
                backgroundColor: "#CCCCD4",
              }}
            />
            <Typography
              style={{
                color: "#9394A1",
                fontSize: fontPx(16),
                lineHeight: fontPx(32),
                fontWeight: 400,
                whiteSpace: "nowrap",
                animation: "textFade 260ms ease-out",
              }}
            >
              {colorArr.find((item) => item.color === selectedColor).name}
            </Typography>
          </Box>
        </Box>
      ),
    },
    {
      title: "芯片",
      content: (
        <Box
          sx={{
            borderRadius: "20px",
            backgroundColor: "rgba(195, 195, 195, 0.2)",
            marginBottom: "20px",
            opacity: 0,
            transform: "translateY(12px)",
            animation: "fadeUp 420ms cubic-bezier(0.22,1,0.36,1) forwards",
            py: "24px",
            paddingLeft: "32px",
            paddingRight: "32px",
          }}
        >
          <Typography
            variant="h3"
            style={{
              fontSize: fontPx(18),
              lineHeight: fontPx(36),
            }}
          >
            芯片
          </Typography>
          <Typography
            variant="h6"
            style={{
              fontSize: fontPx(18),
              lineHeight: fontPx(32),
              maxWidth: "397px",
            }}
          >
            搭载全新 XS 147 600
            旗舰控制芯片，算力满血释放。相较于传统方案，输入延迟大幅降低
            40%。在毫秒必争的竞技场上，指令传输快如闪电，拒绝任何由于“芯”有余而力不足造成的卡顿。
          </Typography>
        </Box>
      ),
    },
    {
      title: "轴体",
      content: (
        <Box
          sx={{
            borderRadius: "20px",
            backgroundColor: "rgba(195, 195, 195, 0.2)",
            marginBottom: "20px",
            opacity: 0,
            transform: "translateY(12px)",
            animation: "fadeUp 420ms cubic-bezier(0.22,1,0.36,1) forwards",
            py: "24px",
            paddingLeft: "32px",
            paddingRight: "32px",
          }}
        >
          <Typography
            variant="h3"
            style={{
              fontSize: fontPx(18),
              lineHeight: fontPx(36),
            }}
          >
            轴体
          </Typography>
          <Typography
            variant="h6"
            style={{
              fontSize: fontPx(18),
              lineHeight: fontPx(32),
              maxWidth: "397px",
            }}
          >
            告别传统机械轴的弹片摩擦声与顿挫感。定制黑耀磁轴采用霍尔效应触发技术，轴心仿佛在磁场中悬浮运作。按下即触发，回弹跟手，为您带来如切黄油般丝滑的线性手感，每一次触底都是享受。
          </Typography>
        </Box>
      ),
    },
    {
      title: "声音",
      content: (
        <Box
          sx={{
            borderRadius: "20px",
            backgroundColor: "rgba(195, 195, 195, 0.2)",
            marginBottom: "20px",
            opacity: 0,
            transform: "translateY(12px)",
            animation: "fadeUp 420ms cubic-bezier(0.22,1,0.36,1) forwards",
            py: "24px",
            paddingLeft: "32px",
            paddingRight: "32px",
          }}
        >
          <Typography
            variant="h3"
            style={{
              fontSize: fontPx(18),
              lineHeight: fontPx(36),
            }}
          >
            声音
          </Typography>
          <Typography
            variant="h6"
            style={{
              fontSize: fontPx(18),
              lineHeight: fontPx(32),
              maxWidth: "397px",
            }}
          >
            声音在不同密度的材料中传导效果迥异，介质密度越高，震动传导越凝实。我们在
            PCB
            表面采用了全裸露铺覆红铜工艺。利用红铜极高的物理密度作为传导介质，有效抑制
            PCB 共振产生的杂音，让每一次敲击声都沉稳、纯净，直抵人心。
          </Typography>
        </Box>
      ),
    },
    {
      title: "外壳",
      content: (
        <Box
          sx={{
            borderRadius: "20px",
            backgroundColor: "rgba(195, 195, 195, 0.2)",
            marginBottom: "20px",
            opacity: 0,
            transform: "translateY(12px)",
            animation: "fadeUp 420ms cubic-bezier(0.22,1,0.36,1) forwards",
            py: "24px",
            paddingLeft: "32px",
            paddingRight: "32px",
          }}
        >
          <Typography
            variant="h3"
            style={{
              fontSize: fontPx(18),
              lineHeight: fontPx(36),
            }}
          >
            芯片
          </Typography>
          <Typography
            variant="h6"
            style={{
              fontSize: fontPx(18),
              lineHeight: fontPx(32),
              maxWidth: "397px",
            }}
          >
            我们甄选定制细砂纹粉末进行静电喷粉，并辅以 #170
            氧化锆陶瓷砂阳极氧化处理。每一次触摸，都能感受到如丝绸般细腻的阻尼感。
          </Typography>
        </Box>
      ),
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
      }}
    >
      <LocalAnimatedText
        variant="h3"
        style={{
          fontSize: fontPx(32),
          lineHeight: fontPx(48),
          marginTop: "84px",
        }}
      >
        细节速览
      </LocalAnimatedText>
      <Box
        sx={{
          width: "1568px",
          height: "730px",
          backgroundColor: "#fff",
          borderRadius: "20px",
          marginTop: "48px",
          marginBottom: "64px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <Box
          sx={{
            marginTop: "115px",
            marginLeft: "72px",
          }}
        >
          {detailList.map((item, index) => {
            if (index === selectedIndex) {
              return item.content;
            }
            return (
              <Box
                sx={{
                  width: "164px",
                  height: "64px",
                  borderRadius: "40px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(195, 195, 195, 0.2)",
                  marginBottom: "20px",
                }}
                onClick={() => {
                  setSelectedIndex(index);
                }}
              >
                <Box
                  component="img"
                  src={addIcon}
                  alt="interact"
                  sx={{
                    width: "32px",
                    height: "32px",
                  }}
                />
                <Typography
                  variant="h3"
                  style={{
                    fontSize: fontPx(18),
                    lineHeight: fontPx(42),
                    marginLeft: "8px",
                    fontWeight: 500,
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            );
          })}
        </Box>
        {selectedIndex === 0 && (
          <Box
            component="img"
            src={colorArr.find((item) => item.color === selectedColor).img}
            alt="product"
            sx={{
              width: "688px",
              height: "660px",
              //   marginRight: "177px",
              position: "absolute",
              bottom: 0,
              right: "177px",
            }}
          />
        )}
        {selectedIndex === 2 && (
          <Box
            component="img"
            src={switchImg}
            alt="switch"
            sx={{
              width: "632px",
              height: "594px",
              //   marginRight: "177px",
              marginTop: "68px",
              marginRight: "220px",
            }}
          />
        )}
        {selectedIndex === 4 && (
          // 外壳
          <Box
            component="img"
            src={outside}
            alt="switch"
            sx={{
              width: "632px",
              height: "594px",
              //   marginRight: "177px",
              position: "absolute",
              bottom: 0,
              right: "237px",
            }}
          />
        )}
      </Box>
    </Container>
  );
}
