import { Container, Typography } from "@mui/material";
import { useRef } from "react";
import logoName from "../images/logoName.png";
import weibo from "../images/weibo.png";
import wechat from "../images/wechat.png";
import tiktok from "../images/tiktok.png";
import taobao from "../images/taobao.png";
import { navigateTo } from "@/utils";
import { fontPx, pxToVw } from "@/utils/useResponsivePx";
import globalIcon from "../images/global.png";
import "./index.css";
import SelectCityModal from "./selectCityModal";

export default function Footer() {
  const selectCityModalRef = useRef(null);

  const platformIconArr = [
    {
      icon: wechat,
      name: "wechat",
      link: "",
    },
    {
      icon: weibo,
      name: "weibo",
      link: "",
    },
    {
      icon: taobao,
      name: "taobao",
      link: "",
    },
    {
      icon: tiktok,
      name: "tiktok",
      link: "",
    },
  ];

  const footerMenu = [
    {
      title: "菜单",
      children: [
        {
          title: "首页",
          onClick: () => {
            navigateTo("/");
          },
        },
        {
          title: "产品",
          onClick: () => {
            navigateTo("/product");
          },
        },
        {
          title: "Hub 桌面模块",
          onClick: () => {
            navigateTo("/product");
          },
        },
        {
          title: "配件",
          onClick: () => {
            navigateTo("/product");
          },
        },
        {
          title: "个性键帽",
          onClick: () => {
            navigateTo("/product");
          },
        },
      ],
    },
    {
      title: "支持",
      children: [
        {
          title: "用户手册",
        },
        {
          title: "常见问题",
        },
        {
          title: "质保政策",
        },
        {
          title: "注册及保修",
        },
        {
          title: "驱动下载",
        },
        {
          title: "固件下载",
        },
      ],
    },
    {
      title: "Bold genius",
      children: [
        {
          title: "关于我们",
        },
        {
          title: "联系我们",
        },
        {
          title: "评论",
        },
        {
          title: "QQ群",
        },
      ],
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
      <div className="footer-content">
        <div className="footer-left">
          <img className="footer-logo-name" src={logoName} />
          <Typography
            sx={{
              color: "#6F7175",
              fontSize: fontPx(16),
              fontWeight: 400,
            }}
          >
            设计数字工具与物理艺术的交汇点。 立足极客神，
          </Typography>
          <Typography
            sx={{
              color: "#6F7175",
              fontSize: fontPx(16),
              fontWeight: 400,
            }}
          >
            重定义每一次触碰。
          </Typography>
          <div className="footer-platform">
            {platformIconArr.map((item) => (
              <img
                key={item.name}
                className="footer-platform-img"
                src={item.icon}
              />
            ))}
          </div>
        </div>
        <div className="footer-right">
          {footerMenu.map((item, index) => (
            <div key={`content_${index}`} className="footer-right-box">
              <Typography
                sx={{
                  color: "#2A343E",
                  fontSize: fontPx(16),
                  lineHeight: fontPx(20),
                  fontWeight: 700,
                  marginBottom: "24px",
                }}
              >
                {item.title}
              </Typography>
              {item.children.map((child, childIndx) => (
                <Typography
                  key={`content_child_${childIndx}`}
                  sx={{
                    color: "#6F7175",
                    fontSize: fontPx(16),
                    lineHeight: fontPx(20),
                    fontWeight: 400,
                    marginBottom: "16px",
                    cursor: "pointer",
                  }}
                  onClick={() => child.onClick?.()}
                >
                  {child.title}
                </Typography>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-line" />
      <div className="footer-footer">
        <Typography
          sx={{
            color: "#6F7175",
            fontSize: fontPx(14),
            fontFamily: "Inter",
          }}
        >
          粤ICP备2026010130号 © 2026 Bold genius
        </Typography>
        <div className="footer-footer-right">
          <Typography
            sx={{
              color: "#6F7175",
              fontSize: fontPx(14),
              fontFamily: "Inter",
            }}
          >
            隐私政策
          </Typography>
          <Typography
            sx={{
              color: "#6F7175",
              fontSize: fontPx(14),
              mx: "12px",
              fontFamily: "Inter",
            }}
          >
            |
          </Typography>
          <Typography
            sx={{
              color: "#6F7175",
              fontSize: fontPx(14),
              fontFamily: "Inter",
            }}
          >
            服务条款
          </Typography>
          <div className="global-box">
            <img className="global-icon" src={globalIcon} />
            <Typography
              sx={{
                color: "#6F7175",
                fontSize: fontPx(14),
                fontFamily: "Inter",
                cursor: "pointer",
              }}
              onClick={() => selectCityModalRef.current.open()}
            >
              Wuhan,AH,中国
            </Typography>
          </div>
        </div>
      </div>

      <SelectCityModal ref={selectCityModalRef} />
    </Container>
  );
}
