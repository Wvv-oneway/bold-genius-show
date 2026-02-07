import { Typography, Container, Box, useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import LocalAnimatedText from "@/components/localAnimatedText";
import reason1 from "../../images/reason1.png";
import reason2 from "../../images/reason2.png";
import reason3 from "../../images/reason3.png";
import "./index.css";
import { fontPx, pxToVw } from "@/utils/useResponsivePx";
import ArrowIcon from "@/svgIcon/arrow";

export default function Why() {
  const reasonInfo = [
    {
      bgImg: reason1,
      title: "卓越",
      subTitle: "触感即是品质",
      content:
        "每一次触碰，都是对品质的致敬。汲取 Apple 设计哲学，以极简线条勾勒极致美感。\n我们不只是制造输入工具，更是在打造桌面上的极简艺术品。",
    },
    {
      bgImg: reason2,
      title: "极致",
      subTitle: "毫秒级极客性能",
      content:
        "全系标配碳纤维定位板与加厚黑芯 PCB，结合磁轴科技实现 0.001mm 的 RT 调节精度。\n用数据定义“天才”般的性能。快人一步的竞技体验。",
    },
    {
      bgImg: reason3,
      title: "创新",
      subTitle: "可视化交互革命",
      content:
        "拒绝枯燥，让输入“活”起来。独创的点阵屏交互系统，将每一次敲击转化为指尖绽放的烟花与律动。\n支持自定义动画与音效反馈，让键盘不仅是外设，更是你表达个性的互动窗口。",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const reasonBoxRef = useRef(null);
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(false);
  const isScrollMode = useMediaQuery("(max-width:1200px)");

  // 保存卡片ref
  // cardRefs.current = [];

  const scrollToIndex = (index) => {
    if (!scrollRef.current || !cardRefs.current[index]) return;
    const newIndex = Math.max(0, Math.min(index, cardRefs.current.length - 1));
    scrollRef.current.scrollTo({
      left: cardRefs.current[newIndex].offsetLeft,
      behavior: "smooth",
    });
    setCurrentIndex(newIndex);
  };

  const scrollNext = () => {
    if (currentIndex < reasonInfo.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };
  const scrollPrev = () => scrollToIndex(currentIndex - 1);

  // 监听滚动更新currentIndex
  useEffect(() => {
    if (!scrollRef.current) return;

    const handleScroll = () => {
      const scrollLeft = scrollRef.current.scrollLeft;
      let nearestIndex = 0;
      let minDistance = Infinity;
      cardRefs.current.forEach((card, idx) => {
        const distance = Math.abs(card.offsetLeft - scrollLeft);
        if (distance < minDistance) {
          minDistance = distance;
          nearestIndex = idx;
        }
      });
      setCurrentIndex(nearestIndex);
    };

    const el = scrollRef.current;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  // 视口监听逻辑
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setIsVisible(entries[0].isIntersecting),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    if (reasonBoxRef.current) observer.observe(reasonBoxRef.current);
    return () =>
      reasonBoxRef.current && observer.unobserve(reasonBoxRef.current);
  }, []);

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1920px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: "124px",
        px: `clamp(0px, ${pxToVw(176)}, 176px) !important`,
      }}
    >
      <div className="why-title">
        <LocalAnimatedText
          variant="h3"
          style={{ fontSize: fontPx(32), lineHeight: fontPx(48) }}
        >
          为什么选择 Bold Genius
        </LocalAnimatedText>
        <LocalAnimatedText
          variant="h6"
          style={{
            textAlign: "center",
            marginTop: "24px",
            fontSize: fontPx(18),
            lineHeight: fontPx(30),
          }}
        >
          我们相信键盘不仅是输入工具，更是桌面上的互动艺术品。
        </LocalAnimatedText>
        <LocalAnimatedText
          variant="h6"
          style={{
            textAlign: "center",
            fontSize: fontPx(18),
            lineHeight: fontPx(30),
          }}
        >
          只为那些不满足于平庸，渴望在功能性与美观性之间找到完美平衡的创造者而生。
        </LocalAnimatedText>
      </div>

      <div
        className="why-box"
        ref={(el) => {
          reasonBoxRef.current = el;
          scrollRef.current = el;
        }}
        style={{
          width: "100%",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(38px)",
          transition: "opacity 1s ease-out, transform 1s ease-out",
          transitionDelay: "0.5s",
          overflowX: isScrollMode ? "auto" : "visible",
          scrollSnapType: isScrollMode ? "x mandatory" : "none",
          display: "flex",
          justifyContent: isScrollMode ? "flex-start" : "center",
        }}
      >
        {reasonInfo.map((item, index) => (
          <div
            key={`reason_${index}`}
            ref={(el) => el && cardRefs.current.push(el)}
            className="reason-box"
            style={{
              flex: isScrollMode
                ? "0 0 100%"
                : activeIndex === index
                  ? "0 0 960px"
                  : "1 1 506px",
            }}
            onMouseEnter={() => !isScrollMode && setActiveIndex(index)}
            onMouseLeave={() => !isScrollMode && setActiveIndex(-1)}
          >
            <img src={item.bgImg} className="reason-img" mode="aspectFit" />
            {activeIndex !== index && !isScrollMode && (
              <div className="reason-img-mask" />
            )}
            <div
              className="reason-content"
              style={
                activeIndex === index || isScrollMode
                  ? { marginTop: activeIndex === index ? "350px" : "auto" }
                  : {}
              }
            >
              <div className="reason-content-title">
                <Typography
                  sx={{
                    whiteSpace: "nowrap",
                    fontSize: fontPx(24),
                    fontWeight: 500,
                    lineHeight: fontPx(18),
                    color:
                      activeIndex === index
                        ? "#F75E01"
                        : "rgba(255, 255, 255, 0.5)",
                  }}
                >
                  {item.title}
                </Typography>
                <div className="reason-content-title-line" />
              </div>
              <Typography
                sx={{
                  fontSize: fontPx(24),
                  fontWeight: 500,
                  lineHeight: fontPx(18),
                  color: "#fff",
                  marginTop: "24px",
                  whiteSpace: "nowrap",
                }}
              >
                {item.subTitle}
              </Typography>
              <Typography
                sx={{
                  fontSize: fontPx(16),
                  fontWeight: 400,
                  lineHeight: fontPx(28),
                  color: "rgba(255, 255, 255, 0.5)",
                  marginTop: "24px",
                  opacity: activeIndex === index || isScrollMode ? 1 : 0,
                  transition: "opacity 0.4s ease",
                  transitionDelay: activeIndex === index ? "0.4s" : "0s",
                  whiteSpace: "pre-line",
                }}
              >
                {item.content}
              </Typography>
            </div>
          </div>
        ))}
      </div>

      {isScrollMode && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            position: "absolute",
            bottom: "-50px",
            right: pxToVw(176),
          }}
        >
          <ArrowIcon
            onClick={() => scrollPrev()}
            sx={{
              color: "#000000",
              width: "28px",
              height: "28px",
              marginRight: "12px",
              transform: "rotate(90deg)",
              cursor: "pointer",
            }}
          />
          <ArrowIcon
            onClick={() => scrollNext()}
            sx={{
              color: "#000000",
              width: "28px",
              height: "28px",
              marginRight: "12px",
              transform: "rotate(-90deg)",
              cursor: "pointer",
            }}
          />
        </Box>
      )}
    </Container>
  );
}
