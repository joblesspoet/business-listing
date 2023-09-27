import { CategoryType } from "@/mock-data/categories";
import Image from "next/image";
import React from "react";

export type CategoryItemType = {
  item: CategoryType;
  onCategorySelect: (category: string) => void;
};
export const Category: React.FC<CategoryItemType> = ({
  item,
  onCategorySelect,
}) => {
  const handleCategorySelect = () => {
    onCategorySelect(item.name);
  };
  return (
    <div
      key={item.id}
      className="border-[1px] w-[60px] p-4 bg-white 
        rounded-full z-10 hover:border-red-600 hover:scale-110 
        transition-all cursor-pointer"
      onClick={handleCategorySelect}
    >
      <Image
        key={`image_${item.id}`}
        src={item.icon}
        alt={item.name}
        height={30}
        width={30}
      />
    </div>
  );
};
