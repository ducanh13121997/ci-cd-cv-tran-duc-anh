import { useGetProductsQuery, useDeleteProductMutation } from "../services/api";

export const ProductList = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

  if (isLoading) return <div>Đang tải...</div>;
  if (error) return <div>Có lỗi xảy ra!</div>;

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      {products?.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Giá: ${product.price}</p>
          <p>{product.description}</p>
          <button onClick={() => deleteProduct(product.id)}>Xóa</button>
        </div>
      ))}
    </div>
  );
};
