import { Container, Box, useMediaQuery } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
import productImg from "../../images/productImg.png";
import LocalAnimatedText from "@/components/localAnimatedText";
import "./index.css";
import { fontPx, pxToVw } from "@/utils/useResponsivePx";
import { useEffect, useRef, useState } from "react";

export default function VideoShow() {
  // const theme = useTheme();
  // const isTablet = useMediaQuery("(max-width:1400px)");
  const isMobile = useMediaQuery("(max-width:900px)");

  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // 视口监听逻辑
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setIsVisible(entries[0].isIntersecting),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    if (imgRef.current) observer.observe(imgRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => imgRef.current && observer.unobserve(imgRef.current);
  }, []);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        maxWidth: "1920px",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        gap: isMobile ? "40px" : "80px",
        px: isMobile ? 2 : `clamp(0px, ${pxToVw(176)}, 176px)`,
      }}
    >
      <Box
        ref={imgRef}
        component="img"
        src={productImg}
        alt="productImg"
        sx={{
          width: `clamp(320px, 60vw, 1135px)`,
          marginTop: isMobile ? 0 : "81px",
          order: isMobile ? 2 : 1,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateX(0)" : "translateX(-60px)",
          transition: "opacity 1s ease-out, transform 1s ease-out",
          transitionDelay: "0.3s",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          order: isMobile ? 1 : 2, //  小屏时排第一
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <LocalAnimatedText
          variant="h3"
          style={{
            fontSize: fontPx(32),
            lineHeight: fontPx(48),
            whiteSpace: "pre-line",
          }}
        >
          {`细腻锆砂，阳极氧化。
          成就温润如玉的触感`}
        </LocalAnimatedText>
        <LocalAnimatedText
          variant="h6"
          style={{
            marginTop: "52px",
            fontSize: fontPx(18),
            lineHeight: fontPx(30),
          }}
        >
          每一次敲击，都是与精密工艺的对话。
        </LocalAnimatedText>
        <LocalAnimatedText
          variant="h6"
          style={{
            fontSize: fontPx(18),
            lineHeight: fontPx(30),
            maxWidth: "496px",
          }}
        >
          一体成型的铝合金CNC机身，历经阳极氧化与静电喷粉的精细表面处理，带来了肌肤般细腻、均匀的触感，让输入成为一种沉浸享受。
        </LocalAnimatedText>
      </Box>
    </Container>
  );
}
