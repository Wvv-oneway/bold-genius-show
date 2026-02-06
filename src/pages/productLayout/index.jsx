import { Outlet } from "react-router-dom";

export default function ProductLayout() {
  return (
    <div>
      {/* 未来可以加：面包屑 / Tabs / 左侧产品树 */}
      <Outlet />
    </div>
  );
}
