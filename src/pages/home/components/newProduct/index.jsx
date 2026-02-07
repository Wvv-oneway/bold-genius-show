import { Typography, Container, Box, useMediaQuery } from "@mui/material";
import { useRef, useState, useEffect } from "react";
import { navigateTo } from "@/utils";
import arrow from "../../images/longArrow.png";
import hub1 from "../../images/hub1.png";
import hub2 from "../../images/hub2.png";
import hubColor1 from "../../images/color1.png";
import hubColor2 from "../../images/color2.png";
import hubColor3 from "../../images/color3.png";
import hubColor4 from "../../images/color4.png";
import "./index.css";
import { fontPx, pxToVw } from "@/utils/useResponsivePx";
import LocalAnimatedText from "@/components/localAnimatedText";
import ArrowIcon from "@/svgIcon/arrow";

export default function NewProduct() {
  const isScrollMode = useMediaQuery("(max-width:1500px)");
  const scrollRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const smallImgProduct = [
    { img: hub1, title: "E-SPORTS HUB", tips: "hub文字描述介绍" },
    { img: hub2, title: "E-SPORTS HUB", tips: "hub文字描述介绍" },
  ];

  const colorArr = ["#CED7DE", "#EBEEF3", "#817D89", "#C091CB"];
  const hubColorImg = [hubColor2, hubColor1, hubColor3, hubColor4];

  // 滚动箭头
  const scrollNext = () => {
    scrollRef.current.scrollBy({
      left: scrollRef.current.clientWidth,
      behavior: "smooth",
    });
  };
  const scrollPrev = () => {
    scrollRef.current.scrollBy({
      left: -scrollRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  // 大屏缩放比例计算
  const DESIGN_WIDTH = 1920;
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setScale(w < DESIGN_WIDTH ? w / DESIGN_WIDTH : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      {/* 标题区 */}
      <Box sx={{ marginTop: "84px", position: "relative" }}>
        <LocalAnimatedText
          variant="h3"
          style={{ fontSize: fontPx(32), lineHeight: fontPx(48) }}
        >
          新品尝鲜
        </LocalAnimatedText>
        <LocalAnimatedText
          variant="h6"
          style={{ mt: "20px", fontSize: fontPx(18), lineHeight: fontPx(30) }}
        >
          定制高品质PC雾透键帽，搭配细腻静电喷粉工艺，触感与观感双重升级。
        </LocalAnimatedText>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            right: 0,
            cursor: "pointer",
          }}
          onClick={() => navigateTo("/product")}
        >
          <Typography sx={{ fontSize: fontPx(16), color: "#2A343E" }}>
            查看全部
          </Typography>
          <img src={arrow} className="long-arrow-icon" />
        </Box>
      </Box>

      {/* 内容区 */}
      <Box
        sx={{
          marginTop: "48px",
          paddingBottom: "84px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {!isScrollMode ? (
          // 🖥️ 大屏缩放模式
          <Box
            sx={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
          >
            <Box
              className="new-product-content"
              sx={{ display: "flex", gap: "36px" }}
            >
              {/* 大卡 */}
              <Box className="new-product-big-card">
                <img
                  src={hubColorImg[selectedIndex]}
                  className="new-product-big-card-img"
                  mode="widthFix"
                />
                <Typography
                  sx={{
                    color: "#E26B18",
                    fontWeight: 700,
                    marginLeft: "40px",
                    fontSize: fontPx(24),
                    lineHeight: fontPx(18),
                  }}
                >
                  BOX 63
                </Typography>
                <Typography
                  sx={{
                    color: "#2A343E",
                    fontWeight: 500,
                    marginLeft: "40px",
                    marginTop: "16px",
                    fontSize: fontPx(20),
                    lineHeight: fontPx(18),
                  }}
                >
                  磁轴机械键盘
                </Typography>
                <Typography
                  sx={{
                    color: "#6F7175",
                    fontWeight: 400,
                    marginLeft: "40px",
                    fontSize: fontPx(14),
                    lineHeight: fontPx(18),
                    marginTop: "24px",
                  }}
                >
                  碳纤维定位板 ｜ 0.001mm RT 极速触发 ｜ 可视化点阵交互
                </Typography>
                <Box className="new-product-color-picker">
                  {colorArr.map((item, index) => (
                    <Box
                      key={`color-picker_${index}`}
                      className={
                        selectedIndex === index
                          ? "new-product-color-picker-dot-selected"
                          : "new-product-color-picker-dot-unselected"
                      }
                      onClick={() => setSelectedIndex(index)}
                    >
                      <Box
                        className="new-product-color-picker-dot"
                        sx={{ backgroundColor: item }}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* 小卡 */}
              <Box
                className="new-product-small-card-content"
                sx={{ display: "flex", flexDirection: "column", gap: "36px" }}
              >
                {smallImgProduct.map((item, index) => (
                  <Box className="new-product-small-card" key={`key_${index}`}>
                    <img
                      src={item.img}
                      className="new-product-small-card-img"
                    />
                    <Typography
                      sx={{
                        color: "#2A343E",
                        fontWeight: 500,
                        marginLeft: "24px",
                        fontSize: fontPx(20),
                        lineHeight: fontPx(18),
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#6F7175",
                        fontWeight: 400,
                        marginTop: "8px",
                        fontSize: fontPx(14),
                        lineHeight: fontPx(18),
                        marginLeft: "24px",
                      }}
                    >
                      {item.tips}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        ) : (
          // 📱 小屏横向滚动模式
          <Box
            className="small-screen-box"
            ref={scrollRef}
            sx={{
              display: "flex",
              gap: "24px",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              paddingBottom: "12px",
            }}
          >
            <Box
              className="new-product-big-card"
              sx={{ flex: "0 0 100%", scrollSnapAlign: "start" }}
            >
              <img
                src={hubColorImg[selectedIndex]}
                className="new-product-big-card-img"
                mode="widthFix"
              />
              <Typography
                sx={{
                  color: "#E26B18",
                  fontWeight: 700,
                  marginLeft: "40px",
                  fontSize: fontPx(24),
                  lineHeight: fontPx(18),
                }}
              >
                BOX 63
              </Typography>
              <Typography
                sx={{
                  color: "#2A343E",
                  fontWeight: 500,
                  marginLeft: "40px",
                  marginTop: "16px",
                  fontSize: fontPx(20),
                  lineHeight: fontPx(18),
                }}
              >
                磁轴机械键盘
              </Typography>
              <Typography
                sx={{
                  color: "#6F7175",
                  fontWeight: 400,
                  marginLeft: "40px",
                  fontSize: fontPx(14),
                  lineHeight: fontPx(18),
                  marginTop: "24px",
                  paddingBottom: "40px",
                }}
              >
                碳纤维定位板 ｜ 0.001mm RT 极速触发 ｜ 可视化点阵交互
              </Typography>
              <Box className="new-product-color-picker">
                {colorArr.map((item, index) => (
                  <Box
                    key={`color-picker_${index}`}
                    className={
                      selectedIndex === index
                        ? "new-product-color-picker-dot-selected"
                        : "new-product-color-picker-dot-unselected"
                    }
                    onClick={() => setSelectedIndex(index)}
                  >
                    <Box
                      className="new-product-color-picker-dot"
                      sx={{ backgroundColor: item }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>

            {smallImgProduct.map((item, index) => (
              <Box
                className="new-product-big-card"
                key={`key_${index}`}
                sx={{ flex: "0 0 100%", scrollSnapAlign: "start" }}
              >
                <img src={item.img} className="new-product-big-card-img" />
                <Typography
                  sx={{
                    color: "#2A343E",
                    fontWeight: 500,
                    marginLeft: "24px",
                    fontSize: fontPx(20),
                    lineHeight: fontPx(18),
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#6F7175",
                    fontWeight: 400,
                    marginTop: "8px",
                    fontSize: fontPx(14),
                    lineHeight: fontPx(18),
                    marginLeft: "24px",
                  }}
                >
                  {item.tips}
                </Typography>
              </Box>
            ))}
          </Box>
        )}

        {/* 小屏箭头 */}
        {isScrollMode && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              position: "absolute",
              // bottom: "30px",
              right: 0,
            }}
          >
            <ArrowIcon
              onClick={scrollPrev}
              sx={{
                color: "#000",
                width: "28px",
                height: "28px",
                marginRight: "12px",
                transform: "rotate(90deg)",
                cursor: "pointer",
                "&:hover": {
                  color: "#E26B18",
                },
              }}
            />
            <ArrowIcon
              onClick={scrollNext}
              sx={{
                color: "#000",
                width: "28px",
                height: "28px",
                marginRight: "12px",
                transform: "rotate(-90deg)",
                cursor: "pointer",
                "&:hover": {
                  color: "#E26B18",
                },
              }}
            />
          </Box>
        )}
      </Box>
    </Container>
  );
}
