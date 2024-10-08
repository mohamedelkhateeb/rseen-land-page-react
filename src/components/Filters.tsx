import React from "react";
import CategorySection from "./CategorySection";
import RangeSlider from "./RangeSlider";
import Dropdown from "./Dropdown";

const Sidebar: React.FC = () => {
  return (
    <aside className="lg:w-[500px] sm:w-[430px] w-[350px] p-3 mx-auto">
      <CategorySection
        title="القسم الرئيسي"
        categories={["المكاتب الهندسية", "مقاولات وديكور"]}
      />
      <CategorySection
        title="القسم الفرعي"
        categories={[
          "مخططات 2D",
          "مخططات 3D",
          "تصميم واجهات خارجية",
          "خدمات تصاميم كاملة",
          "مخططات كاملة",
        ]}
      />
      <RangeSlider
        label="السعر"
        defaultValue={[100, 1000000.0]}
        mes=""
        min={0}
        max={1000}
        step={10}
      />
      <RangeSlider
        label="التقييم"
        defaultValue={[1, 2]}
        mes=""
        min={0}
        max={5}
        step={1}
      />
      <Dropdown />
    </aside>
  );
};

export default Sidebar;
