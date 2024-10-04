import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "@shared/state/store";
import { fetchProducts } from "./homeSlice";

const useHomeViewModel = () => {
  const dispatch = useAppDispatch();
  const { products, loading, error, page, hasMore } = useSelector(
    (state: RootState) => state.home,
  );

  useEffect(() => {
    dispatch(fetchProducts(page));
  }, [dispatch]);

  const loadMore = () => {
    if (!loading && hasMore) {
      dispatch(fetchProducts(page));
    }
  };

  return {
    products,
    loading,
    error,
    loadMore,
  };
};

export default useHomeViewModel;
