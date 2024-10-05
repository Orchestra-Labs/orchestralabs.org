import React from 'react';
import { Link } from 'react-router-dom';

import { Article } from '@/types';

type ArticleSlideProps = {
  data: Article;
};

export const ArticleSlide: React.FC<ArticleSlideProps> = ({ data }) => {
  return (
    <article className="rounded-2xl bg-background-article flex flex-col max-w-[280px] cursor-pointer overflow-hidden md:max-w-[348px] xl:max-w-[424px]">
      <Link to={data.link} target="_blank" rel="noopener noreferrer">
        {/* Ensure the image has a fixed height and consistent width */}
        <img
          className="rounded-t-2xl w-full h-[180px] object-cover md:h-[220px] xl:h-[260px]"
          src={data.image}
          alt="Article"
        />
        <div className="p-5 border border-[#27272d] border-t-0 rounded-b-2xl md:p-25px xl:p-7.5">
          <span className="text-storm-grey font-semibold text-[8px]/[14px] pt-1 md:text-[11px]/[20px] xl:text-[14px]/[25px]">
            {data.createdAt}
          </span>
          <h3 className="text-white font-semibold text-body-xs line-clamp-3 mt-2 min-h-15 md:text-lg xl:text-h4 xl:min-h-[102px]">
            {/* Apply ellipsis for text overflow */}
            <span className="block overflow-hidden text-ellipsis whitespace-nowrap">
              {data.title}
            </span>
          </h3>
        </div>
      </Link>
    </article>
  );
};
