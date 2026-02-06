const DESIGN_WIDTH = 1920;

/**
 * px → vw
 */
const pxToVw = (px: number, designWidth = DESIGN_WIDTH) =>
  `${(px / designWidth) * 100}vw`;

/**
 * 字体：clamp(min, vw, max)
 */
const fontPx = (
  px: number,
  options?: {
    min?: number;
    max?: number;
  },
) => {
  const min = options?.min ?? Math.max(12, px * 0.75);
  const max = options?.max ?? px;
  return `clamp(${min}px, ${pxToVw(px)}, ${max}px)`;
};

/**
 * 间距 / 位移 / 宽高：直接 vw
 */
const spacePx = (px: number) => pxToVw(px);

const sizePx = (px: number) => pxToVw(px);

/**
 * 容器左右留白：clamp(0, vw, px)
 */
const containerPx = (px: number) =>
  `clamp(0px, ${pxToVw(px)}, ${px}px)`;

export {
  pxToVw,
  fontPx,
  spacePx,
  sizePx,
  containerPx,
};