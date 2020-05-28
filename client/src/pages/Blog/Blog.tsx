import React from 'react';
import { useParams } from 'react-router-dom';
import { PlainBanner } from '../../components/Banner';
import BlogList from '../../components/Blog';
import useApi from '../../hooks/useApi';
import { BlogList as BlogListTypes } from '../../types/response';
import Loader from '../../components/Loader/Loader';
import usePagination from '../../hooks/usePagination';
import PaginateButtons from '../../components/PaginateButtons';

const Blog: React.FunctionComponent = () => {
  const { data, loading } = useApi<BlogListTypes>({
    endpoint: `${process.env.REACT_APP_API_URL}blog`,
    fetchOnMount: true,
    initialData: {
      code: 0,
      data: [],
    },
  });
  const { number = '1' } = useParams();
  const maxPage = Math.ceil(data.data.length / 6);
  const currentPage = parseInt(number) <= maxPage && parseInt(number) > 0 ? parseInt(number) : 1;
  const { next, prev, jump, currentData } = usePagination(data.data, 6, currentPage, maxPage);
  return (
    <>
      <PlainBanner
        title="Welcome to our blog"
        text="Stay updated with the latest travel stories, tips and insights shared by our community."
        isTitleColorRed
      />
      {loading ? (
        <Loader />
      ) : (
        <>
          <BlogList list={currentData()} />
          <PaginateButtons
            totalPages={maxPage}
            preHandler={prev}
            nextHandler={next}
            jumpHandler={jump}
            displayNext={currentPage < maxPage}
            displayPrev={currentPage > 1}
            currentPage={currentPage}
          />
        </>
      )}
    </>
  );
};

export default Blog;
