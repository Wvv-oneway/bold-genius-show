import { Modal, Box, Button, Typography, TextField } from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";
import ThemeModal from "@/components/themeModal";
import { fontPx } from "@/utils/useResponsivePx";

const ResetPasswordModal = forwardRef((_, ref) => {
  const [show, setShow] = useState(false);
  const [emailError, setEmailError] = useState({
    status: false, // 是否显示错误
    message: "", // 错误提示文字
  });

  const open = () => setShow(true);
  const close = () => {
    setShow(false);
    setEmailError({
      status: false,
      message: "",
    });
  };

  useImperativeHandle(ref, () => ({
    open: () => open(),
    close: () => close(),
  }));

  // 邮箱格式校验正则表达式（通用标准格式）
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // 输入框内容变化时的处理函数
  const handleEmailChange = (e) => {
    const inputValue = e.target.value;

    // 如果输入框不为空且格式错误，显示错误提示
    if (inputValue && !emailRegex.test(inputValue)) {
      setEmailError({
        status: true,
        message: "请输入有效的电子邮箱格式",
      });
    } else {
      // 格式正确或为空时，清空错误提示
      setEmailError({
        status: false,
        message: "",
      });
    }
  };

  return (
    <div>
      <ThemeModal open={show} onClose={close} title="重置密码">
        <Box
          sx={{
            width: "576px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: fontPx(16),
              lineHeight: fontPx(32),
              marginTop: "4px",
            }}
          >
            我们将向您发送一封电子邮件，请输入邮箱重设登录密码。
          </Typography>

          <TextField
            hiddenLabel
            placeholder="电子邮箱"
            onBlur={handleEmailChange}
            error={emailError.status}
            helperText={emailError.message}
            sx={{
              width: "464px",
              marginTop: "36px",
              marginBottom: "40px",
            }}
            type="email"
          />

          <Button
            variant="contained"
            sx={{
              width: "464px",
              height: "56px",
              borderRadius: "10px",
            }}
          >
            发送代码
          </Button>

          <Typography
            sx={{
              color: "#E26B18",
              fontSize: fontPx(16),
              lineHeight: fontPx(16),
              marginTop: "24px",
              cursor: "pointer",
            }}
            onClick={() => close()}
          >
            取消
          </Typography>
        </Box>
      </ThemeModal>
    </div>
  );
});

export default ResetPasswordModal;
