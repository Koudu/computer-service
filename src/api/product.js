import ItemCard from "./components/ItemCard/ItemCard";

export async function getproduct(limit = 10, start = 0) {
  const respose = await fetch(
    ItemCard();
  );
  const data = await respose.json();
  return data;
}

export async function getPost(postId) {
  const respose = await fetch(
    ItemCard();
  );
  const data = await respose.json();
  return data;
}