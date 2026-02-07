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
import { useRef, useState } from "react";
import ResetPasswordModal from "./components/resetPasswordModal";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isError, setIsError] = useState(false);
  const resetPasswordModalRef = useRef(null);

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
            欢迎登录 Bold Genius
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
            管理您的 Bold Genius 账号
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
            error={isError}
            hiddenLabel
            placeholder="密码"
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
            helperText={isError ? "密码不一致" : ""}
          />
          <Button
            variant="contained"
            sx={{
              width: "540px",
              height: "56px",
              borderRadius: "10px",
              marginTop: "20px",
            }}
            // disabled
          >
            登录
          </Button>
          <div className="edit-content">
            <Typography
              sx={{
                fontSize: fontPx(16),
                lineHeight: fontPx(16),
                color: "#9394A1",
                fontWeight: 400,
                cursor: "pointer",
              }}
              onClick={() => navigateTo("register")}
            >
              创建一个账户
            </Typography>
            <Typography
              sx={{
                fontSize: fontPx(16),
                lineHeight: fontPx(16),
                color: "#9394A1",
                fontWeight: 400,
                cursor: "pointer",
              }}
              onClick={() => resetPasswordModalRef.current.open()}
            >
              忘记密码？
            </Typography>
          </div>
        </div>
      </div>

      <ResetPasswordModal ref={resetPasswordModalRef} />
    </Container>
  );
}
