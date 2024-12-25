import SkeletonImage from "antd/es/skeleton/Image";
import React from "react";

function SkeletonThumbnail() {
  return (
    <div className="bg-dark-10 rounded-xl border border-dark-15 flex flex-col gap-4 h-[468px] sm:h-[709px] desktop:h-[835px]">
      <SkeletonImage className="!w-full !h-full" active />
    </div>
  );
}

export default SkeletonThumbnail;
