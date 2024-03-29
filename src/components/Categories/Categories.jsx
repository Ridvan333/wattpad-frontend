import React from "react";
import CategoryCard from "./Category/CategoryCard";
import styles from "./categories.module.css";
import { useSelector, useDispatch } from "react-redux";
import { loadCategories } from "../../redux/features/categories";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Categories = () => {
  const categories = useSelector((state) => state.categories.items);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  if (error) {
    return { error };
  }
  if (loading) {
    return { loading };
  }

  return (
    <div className={styles.category_content}>
      {categories.map((item) => {
        return (
          <Link
            key={item._id}
            className={styles.category}
            to={`/render/category/${item._id}`}
          >
            <CategoryCard item={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
