import {
  Typography,
  Container,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import { fontPx, pxToVw } from "@/utils/useResponsivePx";
import banner from "../../images/banner.png";
import arrowIcon from "../../images/icon.png";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function TopBanner() {
  const isBigScreen = useMediaQuery("(max-width:1920px)");
  const navigate = useNavigate();

  return (
    <Container
      maxWidth={false}
      sx={{
        // maxWidth: "1920px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={banner}
        alt="banner"
        sx={{
          width: "100%", // 关键：图片宽度随容器100%自适应缩窄
          height: isBigScreen
            ? {
                xs: "500px",
                sm: "500px",
                md: "500px",
                lg: "902px",
                xl: "902px",
              }
            : "auto", // 保留原高度，可按需调整
          objectFit: "cover", // 关键：保持图片比例，裁剪多余部分（不拉伸）
          objectPosition: "center center", // 核心：图片主体内容水平+垂直居中展示，缩窄时裁剪左右
          display: "block", // 消除图片默认行内间隙（可选）
        }}
      />
      {/* <img src={banner} className="home-banner" mode="widthFix" /> */}
      <Box
        sx={{
          position: "absolute",
          top: isBigScreen ? "211px" : "10.99vw",
          left: isBigScreen
            ? `clamp(0px, ${pxToVw(176)}, 176px) !important`
            : `${(window.innerWidth - 1920) / 2 + 176}px`,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#292929",
            fontSize: fontPx(56, { min: 36 }),
            lineHeight: fontPx(84),
          }}
        >
          BOX 63
        </Typography>
        <Typography
          variant="h1"
          sx={{
            color: "#292929",
            fontSize: fontPx(56, { min: 36 }),
            lineHeight: fontPx(84),
            // 可选：设置最小字体，避免小屏字体过小
            // minFontSize: "24px",
          }}
        >
          磁轴机械键盘
        </Typography>
        <Typography
          sx={{
            width: "450px",
            minWidth: "220px",
            color: "#6F7175",
            fontSize: fontPx(18),
            fontWeight: 400,
            lineHeight: fontPx(36),
            marginTop: "20px",
            // 可选：设置最小字体，避免小屏字体过小
            // minFontSize: "16px",
          }}
        >
          搭载全新磁轴系统，支持0.001-3.4mm动态行程调节。
          加厚铺铜黑芯PCB与碳纤维定位板的满配组合，只为那一瞬的精准。
        </Typography>
        <div className="home-banner-operate">
          <Button
            variant="contained"
            disableRipple
            sx={{
              px: "33px",
              py: "17px",
              fontSize: fontPx(18),
              fontWeight: 500,
              lineHeight: fontPx(24),
              width: "max-content",
              boxShadow: "none",
              borderRadius: "6px",
            }}
          >
            立即购买 — ¥1999
            <img src={arrowIcon} className="arrow-icon" />
          </Button>
          <Button
            disableRipple
            sx={{
              px: "33px",
              py: "17px",
              color: "#6F7175",
              fontSize: fontPx(16),
              fontWeight: 500,
              lineHeight: fontPx(20),
              width: "max-content",
              boxShadow: "none",
              marginLeft: "16px",
              "&:hover": {
                backgroundColor: "unset",
                color: "#E26B18",
              },
              "&:active": {
                backgroundColor: "unset",
                color: "#C96B2A",
              },
            }}
            onClick={() => {
              navigate("/product");
            }}
          >
            查看参数
          </Button>
        </div>
      </Box>
    </Container>
  );
}
