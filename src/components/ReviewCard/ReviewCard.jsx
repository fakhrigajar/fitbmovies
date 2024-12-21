import { Flex } from "antd";
import React, { useState } from "react";
import StarIcon from "../../assets/icons/StarIcon";

function ReviewCard({ review }) {
  const [isContentExpanded, setIsContentExpanded] = useState(false);

  const words = review.content.split(" ");
  const shortContent = words.slice(0, 20).join(" "); // First 20 words
  const isLongContent = words.length > 20;

  const date = new Date(review?.created_at);
  const formattedReviewDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-dark-06 border border-dark-15 p-5 sm:p-[30px] rounded-xl flex flex-col gap-4">
      <Flex className="flex-col sm:flex-row sm:items-center justify-between">
        <div>
          <h1 className="!text-white sm:text-lg text-xs">{review.author}</h1>
          <p className="text-gray-60 sm:text-xs text-[8px]">
            {formattedReviewDate}
          </p>
        </div>

        <div className="hidden sm:block">
          {review.author_details.rating !== null && (
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  color={
                    index < Math.floor(review.author_details.rating / 2)
                      ? "#E50000"
                      : "#999999"
                  }
                />
              ))}
              {review.author_details.rating}
            </div>
          )}
        </div>
      </Flex>
      <div className="text-[10px] sm:text-base">
        {isContentExpanded ? review.content : `${shortContent}...`}
        {isLongContent && "..."}
        {isLongContent && (
          <button
            onClick={() => setIsContentExpanded(!isContentExpanded)}
            className="text-gray-60"
          >
            {isContentExpanded ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </div>
  );
}

export default ReviewCard;
