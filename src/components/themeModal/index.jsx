import { Modal, Box, Button, Typography } from "@mui/material";
import CloseIcon from "@/svgIcon/close";
import { fontPx } from "../../utils";

const defaultFn = () => {};

const ThemeModal = ({ open, onClose = defaultFn, children, title }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "&:focus-visible": {
            outline: "none",
          },
          paddingBottom: "56px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "56px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              width: "28px",
              height: "28px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "24px",
              marginRight: "24px",
            }}
            onClick={onClose}
          >
            <CloseIcon />
          </Box>
        </Box>
        <Typography
          variant="h3"
          sx={{
            fontSize: fontPx(28),
            lineHeight: fontPx(48),
            marginTop: "4px",
            marginBottom: "8px",
          }}
        >
          {title}
        </Typography>
        {children}
      </Box>
    </Modal>
  );
};

export default ThemeModal;
