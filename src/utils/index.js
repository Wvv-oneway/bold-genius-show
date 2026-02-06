/**
 * 四舍五入保留4位小数（基于Math.round实现）
 * @param {number} num - 待处理的数值
 * @returns {number} 四舍五入后保留4位小数的结果
 */
const roundToFourDecimals = (num) => {
  // 容错处理：非数值直接返回NaN
  if (isNaN(num)) {
    return NaN;
  }
  const multiplier = 10 ** 4; // 等价于10000，幂运算更易读
  // 核心逻辑：放大→四舍五入→还原
  return Math.round(num * multiplier) / multiplier;
};

// 计算字体大小
export const fontPx = (pxNum, screenWidth = 1920) => {
  const vw = roundToFourDecimals((pxNum / screenWidth) * 100) + "vw";

  return {
    xl: `${pxNum}px`,
    lg: `${pxNum - 2}px`,
    md: vw,
    sm: vw,
    xs: vw,
  };
};

// 跳转function
export const navigateTo = (url) => {
  window.location.href = url;
};

// 返回指定页面
export const navigateBack = (url) => {
  window.history.back(url);
};
