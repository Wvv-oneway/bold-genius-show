import React, { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { fontPx } from "@/utils/useResponsivePx";

const DESIGN_VIEWPORT = 974;
const EXPLODE_VIEW_HEIGHT = 600;
const BOTTOM_SAFE = 70;
const FADE_SCROLL_PX = 700;
const BASE_WIDTH = 1920;

const ExplodedLayer = ({ layers = [], header, showDetailOffset = 5 }) => {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const containerRef = useRef(null);
  const explodeScrollRange = EXPLODE_VIEW_HEIGHT;

  // const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(DESIGN_VIEWPORT);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showDetail, setShowDetail] = useState(false);
  const [scale, setScale] = useState(1);

  /* 视口高度自适应 */
  useEffect(() => {
    const resize = () => {
      setViewportHeight(Math.min(window.innerHeight, DESIGN_VIEWPORT));
      setScale(window.innerWidth > 1920 ? 1 : window.innerWidth / BASE_WIDTH);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* 滚动驱动（只在 sticky 期间吃滚动） */
  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      if (rect.top > -showDetailOffset) {
        setShowDetail(false);
      } else {
        setShowDetail(true);
      }

      // rect.top === 0 → sticky 刚开始
      const scrolled = Math.max(0, -rect.top);

      setScrolled(scrolled);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* 爆炸映射 */
  // const maxY = Math.max(...layers.map((l) => Math.abs(l.yRange)));
  const explodeLimit = (EXPLODE_VIEW_HEIGHT - BOTTOM_SAFE) / 2;
  const progress = React.useMemo(
    () => Math.min(1, scrolled / explodeScrollRange),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [scrolled],
  );
  const fadeProgress = React.useMemo(
    () => Math.min(1, scrolled / FADE_SCROLL_PX),
    [scrolled],
  );

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        height:
          Math.max(viewportHeight, EXPLODE_VIEW_HEIGHT * scale) +
          explodeScrollRange,
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: 0,
          // height: stickyHeight,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // overflow: "hidden",
        }}
      >
        {/* header 锁住 */}
        {header}

        {/* 爆炸图视窗 */}
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            width: BASE_WIDTH,
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              height: EXPLODE_VIEW_HEIGHT,
              width: "100%",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {layers.map((layer, index) => {
              const offset = Math.max(
                -explodeLimit,
                Math.min(explodeLimit, layer.yRange * progress),
              );
              const isFadeLayer = [1, 6].includes(index);
              const easeOut = (t) => 1 - Math.pow(1 - t, 3);
              const fadeOpacity = isFadeLayer ? easeOut(fadeProgress) : 1;
              const fontFadeOpacity = easeOut(fadeProgress);

              return (
                <Box
                  key={layer.id}
                  sx={{
                    position: "absolute",
                    width: "988px",
                    height: 180,
                    zIndex: layer.zIndex,
                    transform: `translateY(${offset}px)`,
                    transition: "transform 0.2s linear",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${layer.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      opacity: fadeOpacity,
                      transition: "opacity 0.1s linear",
                    }}
                  />

                  {/* 细节 */}
                  {showDetail && layer.title && (
                    <Box
                      sx={{
                        width: "450px",
                        height: "40px",
                        position: "absolute",
                        top: `${layer.explainPosition}px`,
                        left: "791px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        zIndex: 11,
                        opacity: fontFadeOpacity,
                        transition: "opacity 0.1s linear",
                      }}
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(-1)}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          marginTop: "8px",
                          marginRight: "12px",
                        }}
                      >
                        <Box
                          sx={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            backgroundColor:
                              activeIndex === index ? "#E26B18" : "#CCCCD4",
                          }}
                        />
                        <Box
                          sx={{
                            width: "293px",
                            height: "1px",
                            backgroundColor:
                              activeIndex === index ? "#E26B18" : "#CCCCD4",
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#2A343E",
                            fontSize: fontPx(16),
                            lineHeight: fontPx(18),
                            marginBottom: "8px",
                          }}
                        >
                          {layer.title}
                        </Typography>
                        {activeIndex === index && (
                          <Typography
                            sx={{
                              color: "#E26B18",
                              fontSize: fontPx(14),
                              lineHeight: fontPx(18),
                            }}
                          >
                            {layer.description}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  )}
                </Box>
              );
            })}
          </Box>
          <Box sx={{ height: BOTTOM_SAFE }} />
        </div>
      </Box>
    </Box>
  );
};

export default ExplodedLayer;
