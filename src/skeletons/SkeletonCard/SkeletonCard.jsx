import { Skeleton } from "antd";
import SkeletonImage from "antd/es/skeleton/Image";
import React from "react";

function SkeletonCard() {
  return (
    <div className="bg-dark-10 rounded-xl border border-dark-15 p-4 flex flex-col gap-4">
      <SkeletonImage
        active
        className="!w-full !h-56 sm:!h-64 desktop:!h-[328px]"
      />
      <Skeleton active className="skeleton-card" />
    </div>
  );
}

export default SkeletonCard;
