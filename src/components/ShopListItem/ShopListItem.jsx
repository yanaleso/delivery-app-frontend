function ShopListItem({ shop: { name, imageUrl } }) {
  return (
    <>
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
    </>
  );
}

export default ShopListItem;
