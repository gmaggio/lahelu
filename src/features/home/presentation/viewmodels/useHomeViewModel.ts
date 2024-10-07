import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '@shared/state/store';
import { fetchPosts } from './homeSlice';

const useHomeViewModel = () => {
  const dispatch = useAppDispatch();
  const { posts, loading, error, page, hasMore } = useSelector(
    (state: RootState) => state.home,
  );

  const isInitialLoad = useRef(true);

  useEffect(() => {
    if (isInitialLoad.current && page === 1) {
      dispatch(fetchPosts(page));
      isInitialLoad.current = false;
    }
  }, [dispatch, page]);

  const loadMore = () => {
    if (!loading && hasMore) {
      dispatch(fetchPosts(page));
    }
  };

  return {
    posts,
    loading,
    error,
    loadMore,
  };
};

export default useHomeViewModel;
