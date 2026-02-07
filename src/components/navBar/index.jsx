import { Button, Box, Tooltip } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import logoName from "../images/logoName.png";
import search from "../images/search.png";
import UserIcon from "@/svgIcon/user";
import "./index.css";

// 导航菜单列表
const navItems = [
  { label: "首页", path: "/" },
  { label: "产品", path: "/product" },
  { label: "驱动" },
  { label: "关于", path: "/about" },
  { label: "服务中心", path: "/service" },
];

export default function Navbar() {
  // 获取当前路由（用于判断激活状态）
  const location = useLocation();
  const navigate = useNavigate();
  // 响应式判断（是否为移动端）
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // 切换抽屉菜单
  // const toggleDrawer = (open) => () => {
  //   setDrawerOpen(open);
  // };

  // 渲染导航项（区分移动端/桌面端）
  const renderNavItems = () => {
    return navItems.map((item) => {
      const isActive =
        item.path === "/product"
          ? location.pathname.startsWith("/product")
          : location.pathname === item.path;

      return (
        <Button
          key={item.label}
          component={Link}
          to={item.path}
          disableRipple
          className={isActive ? "active" : ""}
          sx={{
            color: isActive ? "#E26B18" : "#6f7175",
            fontWeight: 500,
            fontSize: "16px",
            height: "72px",
            padding: "0 22px",
            "&:hover": {
              backgroundColor: "unset",
              color: "#E26B18",
            },
            "&:active": {
              backgroundColor: "unset",
              color: "#C96B2A",
            },
          }}
        >
          {item.label}
        </Button>
      );
    });
  };

  return (
    <>
      <div className="nav-bar">
        <div
          className="nav-logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} className="nav-logo-img" />
          <img src={logoName} className="nav-logo-name" />
        </div>

        {/* 桌面端导航项 */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {renderNavItems()}
        </Box>

        <div className="nav-operate">
          <Tooltip title="搜索" arrow>
            <img src={search} className="nav-icon" />
          </Tooltip>
          <Link to="/login">
            {/* <img src={user} className="nav-icon" /> */}
            <Tooltip title="账号登录" arrow>
              <UserIcon
                sx={{
                  marginLeft: "28px",
                  color: "#2A343E",
                  "&:hover": {
                    color: "#E26B18",
                  },
                }}
              />
            </Tooltip>
          </Link>
        </div>
      </div>

      {/* 移动端抽屉菜单 */}
      {/* <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List sx={{ pt: 0 }}>{renderNavItems(true)}</List>
        </Box>
      </Drawer> */}
    </>
  );
}
