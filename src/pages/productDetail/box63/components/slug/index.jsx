import { Box, Container } from "@mui/material";
import { fontPx } from "@/utils/useResponsivePx";
import LocalAnimatedText from "@/components/localAnimatedText";
import slug from "../../images/slug.png";

export default function Slug() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        maxWidth: "1920px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={slug}
        alt="interact"
        sx={{
          width: "1920px",
          height: "952px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "108px",
          position: "absolute",
          right: "211px",
        }}
      >
        <LocalAnimatedText
          variant="h3"
          style={{
            fontSize: fontPx(32),
            lineHeight: fontPx(48),
          }}
        >
          XS 147 600 旗舰核芯：唯快，不破
        </LocalAnimatedText>
        <LocalAnimatedText
          variant="h6"
          style={{
            marginTop: "24px",
            fontSize: fontPx(18),
            lineHeight: fontPx(32),
            maxWidth: "549px",
          }}
        >
          毫秒级的胜负手 在该快的地方，绝不妥协。得益于 XS 147 600
          的架构优势，输入延迟相较传统方案大幅 降低
          40%。指令传输如闪电般迅捷，真正实现“手眼心”合一。在毫秒必争的竞技对决中，让您的每一步操作都先发制人，拒绝任何迟滞。
        </LocalAnimatedText>
      </Box>
    </Container>
  );
}
