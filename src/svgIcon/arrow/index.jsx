import { SvgIcon } from "@mui/material";
export default function ArrowIcon(props) {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      sx={{
        cursor: "pointer",
      }}
      {...props}
    >
      <path
        d="M12.0006 13.1714L16.9504 8.22168L18.3646 9.63589L12.0006 15.9999L5.63672 9.63589L7.05093 8.22168L12.0006 13.1714Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
