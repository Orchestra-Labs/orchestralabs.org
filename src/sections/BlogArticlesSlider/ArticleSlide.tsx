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
        <img className="rounded-t-2xl w-full" src={data.image} alt="Article" />
        <div className="p-5 border border-[#27272d] border-t-0 rounded-b-2xl md:p-25px xl:p-7.5">
          <span className="text-storm-grey font-semibold text-[8px]/[14px] pt-1 md:text-[11px]/[20px] xl:text-[14px]/[25px]">
            {data.createdAt}
          </span>
          <h3 className="text-white font-semibold text-body-xs line-clamp-3 mt-2 min-h-15 md:text-lg xl:text-h4 xl:min-h-[102px]">
            {data.title}
          </h3>
        </div>
      </Link>
    </article>
  );
};
