import { Box, Container, Typography } from "@mui/material";
import { pxToVw, fontPx } from "@/utils/useResponsivePx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";
import LocalAnimatedText from "@/components/localAnimatedText";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import points1 from "../../images/points1.png";
import points2 from "../../images/points2.png";
import points4 from "../../images/points4.png";
import "./index.css";
import { useRef } from "react";

export default function Points() {
  const swiperRef = useRef(null);

  const swiperList = [
    {
      id: "points_1",
      content: (
        <Box
          sx={{
            height: "660px",
            borderRadius: "20px",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: fontPx(28),
              lineHeight: fontPx(46),
              fontWeight: 500,
              whiteSpace: "pre-line",
              marginLeft: "84px",
              marginRight: "110px",
            }}
          >{`铝合金切削壳体，
                自此，形态再无边界。`}</Typography>
          <Box
            component="img"
            src={points1}
            alt="points1"
            sx={{
              width: "336px",
              height: "538px",
            }}
          />
        </Box>
      ),
    },
    {
      id: "points_2",
      content: (
        <Box
          sx={{
            height: "660px",
            borderRadius: "20px",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={points2}
            alt="points2"
            sx={{
              width: "389px",
              height: "389px",
              marginLeft: "124px",
              marginRight: "53px",
            }}
          />
          <Typography
            sx={{
              fontSize: fontPx(28),
              lineHeight: fontPx(46),
              fontWeight: 500,
              whiteSpace: "pre-line",
            }}
          >{`XS 147 600 芯片，
          强势性能火力全开。`}</Typography>
        </Box>
      ),
    },
    {
      id: "points_3",
      content: (
        <Box
          sx={{
            height: "660px",
            borderRadius: "20px",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: fontPx(28),
              lineHeight: fontPx(46),
              fontWeight: 500,
              whiteSpace: "pre-line",
              marginTop: "133px",
              marginBottom: "17px",
            }}
          >{`全裸露铺覆红铜
积热极速消散，听感凝实纯粹。`}</Typography>
          <Box
            component="img"
            src={points4}
            alt="points4"
            sx={{
              width: "870px",
              height: "316px",
            }}
          />
        </Box>
      ),
    },
    {
      id: "points_4",
      content: (
        <Box
          sx={{
            height: "660px",
            borderRadius: "20px",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: fontPx(28),
              lineHeight: fontPx(46),
              fontWeight: 500,
              whiteSpace: "pre-line",
              marginTop: "133px",
              marginBottom: "17px",
            }}
          >{`全裸露铺覆红铜
积热极速消散，听感凝实纯粹。`}</Typography>
          <Box
            component="img"
            src={points4}
            alt="points4"
            sx={{
              width: "870px",
              height: "316px",
            }}
          />
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
        marginTop: "84px",
      }}
    >
      <LocalAnimatedText
        variant="h3"
        style={{
          fontSize: fontPx(32),
          lineHeight: fontPx(48),
          fontWeight: 500,
          paddingBottom: "48px",
        }}
      >
        重点一览
      </LocalAnimatedText>
      <Box
        sx={{
          width: "940px",
          overflow: "visible",
          position: "relative",
        }}
      >
        <Swiper
          modules={[Pagination, FreeMode]}
          slidesPerView="auto"
          centeredSlides={true}
          centeredSlidesBounds={true}
          spaceBetween={48}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          style={{ paddingBottom: "134px" }}
          allowTouchMove={false} // 禁用鼠标拖动、触摸滑动
          mousewheel={false} // 禁用鼠标滚轮控制滚动
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {swiperList.map((item, index) => {
            return (
              <SwiperSlide
                key={item.id}
                style={{
                  width: "940px",
                }}
                onClick={() => {
                  swiperRef.current?.slideTo(index);
                }}
              >
                {item.content}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Container>
  );
}
