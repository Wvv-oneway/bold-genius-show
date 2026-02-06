import { Modal, Box, Button, Typography, TextField } from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";
import ThemeModal from "@/components/themeModal";
import { fontPx } from "@/utils/useResponsivePx";

const ResetPasswordModal = forwardRef((_, ref) => {
  const [show, setShow] = useState(false);

  const open = () => setShow(true);
  const close = () => setShow(false);

  useImperativeHandle(ref, () => ({
    open: () => open(),
    close: () => close(),
  }));

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
            placeholder="邮箱地址"
            sx={{
              width: "464px",
              marginTop: "36px",
              marginBottom: "40px",
            }}
            type="text"
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
