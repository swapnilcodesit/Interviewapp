
export default async function Users() {
    
  const users = await fetch(`https://jsonplaceholder.typicode.com/posts`);
 const posts = await users.json();


  return (

    <div>
      {!posts ? (
        <div>loading...</div>
      ) : (
        <div>
          {/* {posts?.map((post) => {
            return <div>{post.title}</div>;
          })} */}
          {
            posts ? typeof posts : "error"
          }
        </div>
      )}
    </div>
  );
};


