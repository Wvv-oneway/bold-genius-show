import {
  Modal,
  Box,
  Button,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";
import ThemeModal from "@/components/themeModal";
import { fontPx } from "@/utils/useResponsivePx";
import ThemeInput from "../../themeInput";

const SelectCityModal = forwardRef((_, ref) => {
  const [show, setShow] = useState(false);

  const open = () => setShow(true);
  const close = () => setShow(false);

  useImperativeHandle(ref, () => ({
    open: () => open(),
    close: () => close(),
  }));

  return (
    <div>
      <ThemeModal open={show} onClose={close} title="选定您的地点">
        <Box
          sx={{
            width: "696px",
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
              marginTop: "8px",
            }}
          >
            为了让我们更准确地估计您的订单预计送达日期，请尽可能提供准确的所在地区。
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "28px",
            }}
          >
            <ThemeInput
              label="国家 / 地区："
              required
              sx={{
                width: "280px",
                marginRight: "24px",
              }}
              options={[
                {
                  value: "1",
                  label: "中国",
                },
              ]}
            />
            <ThemeInput
              label="省份："
              required
              sx={{
                width: "280px",
              }}
              options={[
                {
                  value: "1",
                  label: "湖北",
                },
              ]}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ThemeInput
              label="城市："
              required
              sx={{
                width: "280px",
                marginRight: "24px",
              }}
              options={[
                {
                  value: "1",
                  label: "武汉",
                },
              ]}
            />
            <Button
              variant="contained"
              sx={{
                width: "280px",
                height: "56px",
                borderRadius: "10px",
              }}
            >
              确定
            </Button>
          </Box>
        </Box>
      </ThemeModal>
    </div>
  );
});

export default SelectCityModal;
