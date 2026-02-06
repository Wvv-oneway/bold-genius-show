import { Box, Container, Typography } from "@mui/material";
import { fontPx } from "@/utils/useResponsivePx";
import qrCode from "./images/qrCode.png";

export default function Service() {
  return (
    <Container
      maxWidth="1920px"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: fontPx(32),
          lineHeight: fontPx(48),
          marginTop: "56px",
        }}
      >
        服务中心
      </Typography>
      <Box
        sx={{
          width: "915px",
          minWidth: "400px",
          position: "relative",
          marginBottom: "56px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: fontPx(16),
            lineHeight: fontPx(32),
            marginTop: "56px",
            whiteSpace: "pre-line",
          }}
        >
          {`为了高效率且可跟踪的处理您的问题，我们建议您通过邮件联系我们。使用聊天工具或社交媒体可能会导致您的问题被忽略。
            请在邮件中提供尽可能多的信息，以便我们更快地帮助您解决问题。`}
        </Typography>
        <Box
          sx={{
            marginTop: "40px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: fontPx(20),
              lineHeight: fontPx(24),
              fontWeight: 500,
              marginBottom: "12px",
            }}
          >
            客户服务
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: fontPx(16),
              lineHeight: fontPx(32),
              fontWeight: 400,
            }}
          >
            Bold Genius@qq.com
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: fontPx(16),
              lineHeight: fontPx(32),
              fontWeight: 400,
            }}
          >
            有关产品使用上的疑问及问题，请发送邮件至上述邮箱。
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: "40px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: fontPx(20),
              lineHeight: fontPx(24),
              fontWeight: 500,
              marginBottom: "12px",
            }}
          >
            退货、售后服务
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: fontPx(16),
              lineHeight: fontPx(32),
              fontWeight: 400,
            }}
          >
            Bold Genius@qq.com
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: fontPx(16),
              lineHeight: fontPx(32),
              fontWeight: 400,
              whiteSpace: "pre-line",
            }}
          >
            {`有关退货、售后服务的问题，请发送邮件至上述邮箱。
            注意，请注意，请按照对应产品的退货政策和售后服务政策进行操作。不要忘记提供必要的信息。`}
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: "40px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: fontPx(20),
              lineHeight: fontPx(24),
              fontWeight: 500,
              marginBottom: "12px",
            }}
          >
            商务合作
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: fontPx(16),
              lineHeight: fontPx(32),
              fontWeight: 400,
            }}
          >
            Bold Genius@qq.com
          </Typography>
          <img
            src={qrCode}
            alt="qrCode"
            mode="widthFix"
            style={{
              width: "83px",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}
