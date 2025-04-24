const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

const getData = (url: string): Promise<FetchedCommentDTO[]> => {
  return fetch(url)
    .then((response) => response.json() as Promise<FetchedCommentDTO[]>)
    .catch((err) => {
      throw new Error(`Ошибка HTTP запроса. Статус: ${err.status}`);
    });
};

getData(COMMENTS_URL)
  .then((comments) => {
    comments.forEach((comment) => {
      console.log(`ID: ${comment.id}, Email: ${comment.email}`);
    });
  })
  .catch((err) => {
    console.error("Ошибка:", err);
  });

interface FetchedCommentDTO {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
