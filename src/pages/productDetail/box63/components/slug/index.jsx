import { Box, Container } from "@mui/material";
import { fontPx } from "@/utils/useResponsivePx";
import LocalAnimatedText from "@/components/localAnimatedText";
import { useEffect, useRef, useState } from "react";
import slug from "../../images/slug.png";

export default function Slug() {
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
        alignItems: "center",
      }}
    >
      <Box
        ref={imgRef}
        component="img"
        src={slug}
        alt="interact"
        sx={{
          width: "1920px",
          height: "952px",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(38px)",
          transition: "opacity 1s ease-out, transform 1s ease-out",
          transitionDelay: "0.3s",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "108px",
          position: "absolute",
          right: "211px",
        }}
      >
        <LocalAnimatedText
          variant="h3"
          style={{
            fontSize: fontPx(32),
            lineHeight: fontPx(48),
          }}
        >
          XS 147 600 旗舰核芯：唯快，不破
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
          毫秒级的胜负手 在该快的地方，绝不妥协。得益于 XS 147 600
          的架构优势，输入延迟相较传统方案大幅 降低
          40%。指令传输如闪电般迅捷，真正实现“手眼心”合一。在毫秒必争的竞技对决中，让您的每一步操作都先发制人，拒绝任何迟滞。
        </LocalAnimatedText>
      </Box>
    </Container>
  );
}
