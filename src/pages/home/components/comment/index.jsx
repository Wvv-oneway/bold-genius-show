import {
  Box,
  Container,
  Rating,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import avatarBg from "../../images/avatar.png";
import "./index.css";
import { fontPx, pxToVw } from "@/utils/useResponsivePx";
import LocalAnimatedText from "@/components/localAnimatedText";
import ArrowIcon from "@/svgIcon/arrow";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#FAC833",
    marginRight: "4px",
  },
});

export default function Comment() {
  const commentInfo = [
    {
      userName: "Alex Chen",
      position: "职业电竞选手",
      comment:
        "“0.001mm 的精度不是营销噱头，它是真正的物理外挂。 我从未体验过如此跟手的急停感。磁轴的RT调节范围让我在FPS游戏中获得了肉眼可见的优势。碳纤维定位板带来的回弹反馈极其干脆，这就是我一直在寻找的「胜利的触感」。”",
      star: 5,
    },
    {
      userName: "蘑菇",
      position: "设计总监",
      comment:
        "“终于有一款能完美融入我 Apple Studio Display 桌面的机械键盘。它的线条极简到了极致，但点阵屏的交互又给它注入了灵魂。这种「可视化输入」的体验非常奇妙，既保持了极简的克制，又在敲击间充满了趣味性。静电喷粉的触感细腻得像艺术品。”",
      star: 5,
    },
    {
      userName: "Mark Roberts",
      position: "科技博主",
      comment:
        "“从拆封的那一刻起，你就知道这不仅仅是 3C 产品。Bold Genius 对「到手即满配」的理解令人惊讶。加厚铜 PCB 加上定制的 PC 雾透键帽，声音和手感都无可挑剔。尤其是那个 #170 氧化锆陶瓷砂的表面处理，每一次指尖接触都是一种享受。”",
      star: 5,
    },
  ];

  const stringAvatar = (name) => {
    return `${name.split(" ")[0]?.[0]}${name.split(" ")[1]?.[0] ? name.split(" ")[1][0] : ""}`;
  };

  // 1. 容器引用：监听评论容器是否进入视口
  const commentBoxRef = useRef(null);
  // 2. 标记动画是否已触发（避免重复执行）
  const [animateTriggered, setAnimateTriggered] = useState(false);
  const scrollRef = useRef(null);
  const isScrollMode = useMediaQuery("(max-width:1600px)");
  const showArrow = isScrollMode;

  const scrollNext = () => {
    scrollRef.current.scrollBy({
      left: 424, // 400 + gap
      behavior: "smooth",
    });
  };

  const scrollPrev = () => {
    scrollRef.current.scrollBy({
      left: -424, // 400 + gap
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // 容器进入视口 → 激活动画
        if (entry.isIntersecting) {
          setAnimateTriggered(true);
          // 移除：observer.unobserve(entry.target); // 删掉这行，取消只监听一次的限制
        } else {
          // 可选：离开视口时重置动画状态（让下次进入能重新触发）
          setAnimateTriggered(false);
        }
      },
      { threshold: 0.1 }, // 容器10%进入视口时触发
    );

    if (commentBoxRef.current) {
      observer.observe(commentBoxRef.current);
    }

    // 组件卸载时取消监听（避免内存泄漏）
    return () => {
      if (commentBoxRef.current) {
        observer.unobserve(commentBoxRef.current);
      }
      // 可选：停止观察所有目标（更彻底的清理）
      observer.disconnect();
    };
  }, []); // 依赖项改为空数组，仅组件挂载时创建一次 observer

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        maxWidth: "1920px",
        marginBottom: "112px",
        flexDirection: "column",
        justifyContent: "center",
        px: `clamp(0px, ${pxToVw(176)}, 176px) !important`,
      }}
    >
      <Box
        sx={{
          marginTop: "112px",
          // marginLeft: {
          //   lg: "176px",
          // },
        }}
      >
        <LocalAnimatedText
          variant="h3"
          style={{
            fontSize: fontPx(32),
            lineHeight: fontPx(48),
          }}
        >
          极客玩家测评
        </LocalAnimatedText>
        <LocalAnimatedText
          variant="h6"
          style={{
            mt: "20px",
            fontSize: fontPx(18),
            lineHeight: fontPx(30),
          }}
        >
          深受职业玩家、创作者和发烧友信赖，他们拒绝在速度或美学上做出妥协。
        </LocalAnimatedText>
      </Box>
      <Box
        sx={{
          width: "100%",
          // px: {
          //   lg: "176px",
          // },
          marginTop: "60px",
          boxSizing: "border-box",
        }}
        ref={commentBoxRef}
      >
        <Box
          className="comments-scroll"
          ref={scrollRef}
          sx={{
            overflowX: isScrollMode ? "auto" : "visible",
            scrollSnapType: isScrollMode ? "x mandatory" : "none",
          }}
        >
          <div className="comments-track">
            {commentInfo.map((item, index) => {
              const userName = stringAvatar(item.userName);
              return (
                <Box
                  key={`comment_${index}`}
                  style={{
                    flex: isScrollMode ? "0 0 400px" : "1 1 0",
                    maxWidth: isScrollMode ? "400px" : "498px",
                    minWidth: isScrollMode ? "400px" : "0",
                    scrollSnapAlign: "start",
                    height: "429px",
                    backgroundColor: "#fff",
                    borderRadius: "20px",
                    // 动画核心样式
                    opacity: animateTriggered ? 1 : 0,
                    transform: animateTriggered
                      ? "translateY(0)"
                      : "translateY(38px)",
                    transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
                    transitionDelay: `${index * 0.2}s`, // 依次延迟：0s → 0.2s → 0.4s
                  }}
                >
                  <StyledRating
                    readOnly
                    defaultValue={5}
                    sx={{
                      marginTop: "48px",
                      marginLeft: "48px",
                      fontSize: "28px",
                    }}
                  />
                  <Box
                    sx={{
                      width: "calc(100% - 96px)",
                      height: "216px",
                      margin: "20px auto 0",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: "#6F7175",
                        lineHeight: "36px",
                        fontWeight: 400,
                      }}
                    >
                      {item.comment}
                    </Typography>
                  </Box>
                  <Box className="comment-user">
                    <div className="comment-user-avatar">
                      <img className="comment-user-avatar-bg" src={avatarBg} />
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#E26B18",
                          lineHeight: "18px",
                          fontWeight: 700,
                        }}
                      >
                        {userName}
                      </Typography>
                    </div>
                    <div className="comment-user-info">
                      <Typography
                        sx={{
                          fontSize: "16px",
                          color: "#2A343E",
                          lineHeight: "18px",
                          fontWeight: 400,
                        }}
                      >
                        {item.userName}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#9394A1",
                          lineHeight: "18px",
                          fontWeight: 400,
                          marginTop: "8px",
                        }}
                      >
                        {item.position}
                      </Typography>
                    </div>
                  </Box>
                </Box>
              );
            })}
          </div>
        </Box>
      </Box>
      {showArrow && (
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
              "&:hover": {
                color: "#E26B18",
              },
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
              "&:hover": {
                color: "#E26B18",
              },
            }}
          />
        </Box>
      )}
    </Container>
  );
}
