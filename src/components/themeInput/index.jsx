import { FormControl, InputLabel, MenuItem, TextField } from "@mui/material";
import ArrowIcon from "@/svgIcon/arrow";

const Arrow = () => {
  return (
    <ArrowIcon
      sx={{
        color: "#000000",
        width: "24px",
        height: "24px",
        marginRight: "12px",
      }}
    />
  );
};

export default function ThemeInput({ label, required, sx, options }) {
  return (
    <FormControl variant="standard">
      <InputLabel shrink required={required}>
        {label}
      </InputLabel>
      <TextField
        hiddenLabel
        select
        sx={{
          marginBottom: "20px",
          ...sx,
        }}
        SelectProps={{
          IconComponent: Arrow,
        }}
      >
        {options.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
}
