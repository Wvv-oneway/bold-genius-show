import {
  Typography,
  Container,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import "./index.css";
import { navigateTo } from "@/utils";
import { fontPx } from "@/utils/useResponsivePx";
import eyeOpen from "@/assets/eye-open.svg";
import eyeClose from "@/assets/eye-off.svg";
import { useState } from "react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isError, setIsError] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const checkPassword = () => {
    if (!password || !confirmPassword) {
      setIsError(false);
      return;
    }

    setIsError(password !== confirmPassword);
  };

  return (
    <Container maxWidth="1920px">
      <div className="login-body">
        <div className="login-content">
          <Typography
            sx={{
              fontSize: fontPx(32),
              lineHeight: fontPx(48),
              color: "#2A343E",
              fontWeight: 700,
            }}
          >
            欢迎加入 Bold Genius
          </Typography>
          <Typography
            sx={{
              fontSize: fontPx(18),
              lineHeight: fontPx(32),
              color: "#6F7175",
              fontWeight: 400,
              marginTop: "8px",
              marginBottom: "36px",
            }}
          >
            注册您的 Bold Genius 账号
          </Typography>
          <TextField
            hiddenLabel
            placeholder="电子邮箱"
            sx={{
              width: "540px",
              marginBottom: "20px",
            }}
          />
          <TextField
            hiddenLabel
            placeholder="密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              width: "540px",
              marginBottom: "20px",
            }}
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <img
                    src={showPassword ? eyeOpen : eyeClose}
                    style={{
                      width: "24px",
                      height: "24px",
                      cursor: "pointer",
                      // 步骤3：强制图标显示（避免样式层级隐藏）
                      display: "block !important",
                    }}
                    onClick={() => setShowPassword(!showPassword)}
                    alt="切换密码可见性" // 必须加 alt 属性（避免浏览器隐藏无描述图片）
                  />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            error={isError}
            hiddenLabel
            placeholder="确认密码"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            sx={{
              width: "540px",
              marginBottom: "20px",
            }}
            type={showConfirmPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <img
                    src={showConfirmPassword ? eyeOpen : eyeClose}
                    style={{
                      width: "24px",
                      height: "24px",
                      cursor: "pointer",
                      // 步骤3：强制图标显示（避免样式层级隐藏）
                      display: "block !important",
                    }}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    alt="切换密码可见性" // 必须加 alt 属性（避免浏览器隐藏无描述图片）
                  />
                </InputAdornment>
              ),
            }}
            onBlur={checkPassword}
            helperText={isError ? "密码不一致" : ""}
          />
          <Button
            variant="contained"
            sx={{
              width: "540px",
              height: "56px",
              borderRadius: "10px",
              marginTop: "48px",
            }}
            // disabled
          >
            创建账户
          </Button>
          <div className="register-edit-content">
            <Typography
              sx={{
                fontSize: fontPx(16),
                lineHeight: fontPx(16),
                color: "#9394A1",
                fontWeight: 400,
              }}
            >
              已有账户？
            </Typography>
            <Typography
              sx={{
                fontSize: fontPx(16),
                lineHeight: fontPx(16),
                color: "#E26B18",
                fontWeight: 400,
                marginLeft: "12px",
                cursor: "pointer",
              }}
              onClick={() => navigateTo("login")}
            >
              登录
            </Typography>
          </div>
        </div>
      </div>
    </Container>
  );
}
