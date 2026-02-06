import { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";

export default function LocalAnimatedText({ children, style, variant = "h3" }) {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // 视口监听逻辑
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setIsVisible(entries[0].isIntersecting),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    if (textRef.current) observer.observe(textRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => textRef.current && observer.unobserve(textRef.current);
  }, []);

  return (
    <Typography
      ref={textRef}
      variant={variant}
      sx={{
        // 动画核心：根据isVisible切换状态
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(38px)",
        transition: "opacity 1s ease-out, transform 1s ease-out",
        transitionDelay: "0.3s",
        ...style,
      }}
    >
      {children}
    </Typography>
  );
}
