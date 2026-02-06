import { createTheme } from "@mui/material/styles";
import { fontPx } from "@/utils";

const disableFocusVisible = {
  "&:focus-visible": {
    outline: "none",
  },
};

const theme = createTheme({
  components: {
    // 全局定制 Container 组件
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "none",
          position: "relative",
          display: "flex",
          paddingLeft: 0,
          paddingRight: 0,
          "@media (min-width: 600px)": {
            paddingLeft: 0,
            paddingRight: 0,
          },
          ...disableFocusVisible,
        },
        // 兜底：给全局所有元素禁用（防止非MUI原生元素漏网）
        "& *:focus-visible": {
          outline: "none !important",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "HarmonyOS Sans",
          // 全局兜底：禁用按钮的光标和事件配置
          "&.Mui-disabled": {
            pointerEvents: "auto !important", // 允许光标样式生效
            cursor: "not-allowed !important", // 强制覆盖内置样式
          },
          // ========== 核心：重置 --variant-textBg 变量 ==========
          "--variant-textBg": "transparent !important", // 设为透明，彻底移除
          // 全局兜底：所有按钮的背景相关样式重置
          backgroundColor: "transparent",
          backgroundImage: "none", // 移除默认渐变背景

          // 提升优先级：覆盖 MUI 内置的 text 按钮样式
          "&.MuiButton-text": {
            "&:hover, &:active, &:focus": {
              backgroundColor: "transparent !important", // 强制透明
              boxShadow: "none !important",
            },
          },
        },
        contained: {
          backgroundColor: "#E26B18",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#E27930",
            boxShadow: "none",
            textBg: "none",
            outline: "none",
            // 禁用时 hover 不生效（避免样式冲突）
            "&:disabled": {
              backgroundColor: "rgba(226, 107, 24, 0.5)",
            },
          },
          "&:active": {
            backgroundColor: "#C96B2A",
            boxShadow: "none",
          },
          // ========== 新增：禁用状态样式 ==========
          "&:disabled, &.Mui-disabled": {
            color: "#fff", // 可选：禁用时文字颜色（默认白色，可根据需求调整）
            backgroundColor: "rgba(226, 107, 24, 0.5)", // 强制覆盖内置样式
            boxShadow: "none", // 禁用时无阴影
            cursor: "not-allowed", // 鼠标样式改为“禁止”
            border: "none", // 避免禁用时出现默认边框
          },
        },
      },
    },
    MuiTextField: {
      // TextField 外层容器样式
      styleOverrides: {
        root: {
          // 统一字体（和项目保持一致）
          fontFamily: "HarmonyOS Sans",
          height: "56px",
        },
      },
    },
    // 核心输入框样式（TextField 内部的输入区域）
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: "HarmonyOS Sans",
          fontSize: fontPx(16),
          lineHeight: fontPx(16),
          color: "#2A343E",
          caretColor: "#E26B18",
        },
        input: {
          // 聚焦时取消默认高亮
          "&:focus": {
            outline: "none",
          },
          // 禁用状态样式
          "&:disabled": {
            color: "#9394A1",
            backgroundColor: "#F5F5F5",
          },
        },
      },
    },
    // 带边框的输入框样式（TextField 默认是 outlined 变体）
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // 你的原有代码（保留不动）
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#CCCCD4",
            borderRadius: "10px",
            borderWidth: "1px",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#CCCCD4",
          },
          "&:focus-within .MuiOutlinedInput-notchedOutline": {
            borderColor: "#E26B18",
            borderWidth: "1px",
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "#E30000",
            backgroundColor: "rgba(227, 0, 0, 0.1)",
          },

          // 新增：Select禁用状态的边框样式，和Input禁用对齐
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: "#F5F5F5",
            backgroundColor: "#F5F5F5",
          },
          ...disableFocusVisible,
        },
      },
    },
    // 输入框标签样式
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: "HarmonyOS Sans",
          fontSize: fontPx(16),
          lineHeight: fontPx(16),
          color: "#9394A1",
          letterSpacing: "0.6px",
          // 聚焦状态标签色
          "&.Mui-focused": {
            color: "#E26B18", // 品牌色
          },
          // 错误状态标签色
          "&.Mui-error": {
            borderColor: "#E30000", // 错误边框色
            backgroundColor: "rgba(227, 0, 0, 0.1)",
          },
          ...disableFocusVisible,
          position: "relative", // 为伪元素定位做基础
          // 1. 隐藏默认在后方的*号（::after伪元素）
          "&.Mui-required::after": {
            content: "none", // 清空原生*号内容
          },
          // 2. 新增前方*号（::before伪元素），样式和原生一致
          "&.Mui-required::before": {
            content: '"*"', // 自定义*号
            color: "#E30000", // MUI原生必填红色（和你错误色#E30000接近，也可改为#E30000保持统一）
            marginRight: "6px", // *号和文字之间的间距，可按需调整
            fontSize: fontPx(16), // 和标签字号匹配
            lineHeight: fontPx(16),
          },
          // 兼容shrink浮动标签：*号随标签一起浮动，位置不变
          "& .MuiInputLabel-asterisk": {
            display: "none", // 干掉默认 *
          },
        },
      },
    },
    // 输入框辅助文字样式（如错误提示、说明文字）
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          ...disableFocusVisible,
          fontFamily: "HarmonyOS Sans",
          fontSize: fontPx(16),
          marginTop: "12px",
          marginLeft: 0,
          // 错误状态辅助文字
          "&.Mui-error": {
            color: "#E30000",
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        // 提示窗本体样式
        tooltip: {
          // 核心：修改背景色为 rgba(15, 23, 43, 0.9)
          backgroundColor: "rgba(15, 23, 43, 0.9) !important",
          fontFamily: "HarmonyOS Sans", // 和项目字体统一
          fontSize: fontPx(12),
          padding: "7px 12px",
          borderRadius: "16px", // 圆角：8px
          boxShadow: "none", // 可选：加阴影提升层次感
          color: "#FFFFFF", // 文字色：白色（适配深色背景）
        },
        // 提示窗箭头样式（必须和背景色一致）
        arrow: {
          color: "rgba(15, 23, 43, 0.9) !important",
        },
        // 可选：修改 tooltip 触发区域的样式（如需）
        trigger: {
          pointerEvents: "auto", // 确保禁用元素也能触发 tooltip
        },
      },
    },
    // 重写MUI Modal组件的样式
    MuiModal: {
      styleOverrides: {
        // 核心容器：Modal的根容器（包含遮罩+内容）
        root: {
          // backdropFilter: "blur(0) !important",
          ...disableFocusVisible,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
        // 遮罩层：Modal背后的透明/半透明蒙层
        backdrop: {},
        // 内容容器：包裹Modal内容的外层容器（控制居中、宽高、边距等）
        container: {
          // 让Modal内容在视口中垂直+水平居中（MUI默认已居中，可微调）
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // 解决小屏幕下Modal顶头/贴底问题：添加上下内边距
          padding: "24px 16px",
          // 小屏幕下允许滚动（避免内容超出视口）
          minHeight: "100vh",
          boxSizing: "border-box",
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          ...disableFocusVisible,
        },
      },
    },
    // ===== 新增：Select 选择框核心样式（和Input风格完全对齐） =====
    MuiSelect: {
      styleOverrides: {
        root: {
          // 统一字体，和Input保持一致
          ...disableFocusVisible,
          fontFamily: "HarmonyOS Sans",
          height: "56px",
          // 选中文字颜色，和Input输入文字色一致
          color: "#2A343E",
          // 消除Select默认的内边距偏移，和Input对齐
          padding: "0 14px",
          // 下拉箭头颜色（默认状态），和Input边框色一致
          "& .MuiSelect-icon": {
            color: "#CCCCD4",
            fontSize: fontPx(16),
          },
          // 聚焦/选中时，下拉箭头切换为品牌色
          "&.Mui-focused .MuiSelect-icon": {
            color: "#E26B18",
          },
          // 错误状态下，下拉箭头切换为错误色
          "&.Mui-error .MuiSelect-icon": {
            color: "#E30000",
          },
          // 禁用状态样式，和Input禁用一致
          "&.Mui-disabled": {
            color: "#9394A1",
            "& .MuiSelect-icon": {
              color: "#9394A1",
            },
          },
        },
        // 下拉选中项的容器样式
        select: {
          fontFamily: "HarmonyOS Sans",
          fontSize: fontPx(16),
          lineHeight: fontPx(16),
          // 消除默认的选中项内边距，和Input输入区域对齐
          "&:focus": {
            backgroundColor: "transparent",
            outline: "none",
          },
          // 多行选择的样式兼容（单选择框可忽略，保留无影响）
          "&[multiple]": {
            height: "auto",
            padding: "8px 14px",
          },
        },
      },
    },

    // ===== 新增：Select 下拉菜单容器样式 =====
    MuiMenu: {
      styleOverrides: {
        // 下拉菜单根容器
        root: {
          fontFamily: "HarmonyOS Sans",
          // 下拉菜单圆角，和Input边框圆角一致
          borderRadius: "10px",
          // 消除下拉菜单默认的阴影，可根据需要调整
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          // 下拉菜单z-index，避免被其他组件遮挡
          zIndex: 1500,
        },
        // 下拉菜单项的容器（控制菜单项间距）
        list: {
          padding: "8px 0",
          // 消除默认的滚动条样式（可选）
          "&::-webkit-scrollbar": {
            width: 6,
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: 3,
            backgroundColor: "#E5E5E5",
          },
        },
      },
    },

    // ===== 新增：Select 下拉菜单项样式 =====
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: "HarmonyOS Sans",
          fontSize: fontPx(16),
          lineHeight: fontPx(16),
          color: "#2A343E",
          // 菜单项高，和Select根容器高适配
          height: "44px",
          minHeight: "44px",
          padding: "0 16px",
          // 鼠标悬浮背景色（柔和过渡）
          "&:hover": {
            backgroundColor: "rgba(226, 107, 24, 0.05)",
          },
          // 选中项背景色，用品牌色浅透色，贴合设计风格
          "&.Mui-selected": {
            backgroundColor: "rgba(226, 107, 24, 0.1)",
            color: "#E26B18",
            "&:hover": {
              backgroundColor: "rgba(226, 107, 24, 0.15)",
            },
          },
          // 禁用项样式，和Input禁用一致
          "&.Mui-disabled": {
            color: "#9394A1",
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
        },
      },
    },

    // ===== 补充：Select 空值/placeholder 样式（可选，按需添加） =====
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {
    //       // 你的原有代码（保留不动）
    //       fontFamily: "HarmonyOS Sans",
    //       fontSize: fontPx(16),
    //       lineHeight: fontPx(16),
    //       color: "#2A343E",
    //       caretColor: "#E26B18",
    //     },
    //     input: {
    //       // 你的原有代码（保留不动）
    //       "&:focus": { outline: "none" },
    //       "&:disabled": { color: "#9394A1", backgroundColor: "#F5F5F5" },

    //       // 新增：Select的placeholder/空值文字颜色，和Input标签色一致
    //       '&[data-value=""]': {
    //         color: "#CCCCD4",
    //       },
    //     },
    //   },
    // },
  },
  typography: {
    fontFamily: "HarmonyOS Sans",
    h1: {
      color: "#E26B18",
      fontWeight: 700,
    },
    h3: {
      color: "#2A343E",
      fontWeight: 700,
    },
    h6: {
      color: "#6F7175",
      fontWeight: 400,
    },
  },
});

export default theme;
