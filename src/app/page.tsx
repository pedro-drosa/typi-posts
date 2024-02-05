import PostList from '@/components/PostList/Index';
import { Container } from '@mui/material';

async function GetPosts(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}

async function Home() {
  const posts: Post[] = await GetPosts();
  return (
    <Container maxWidth="md">
      <PostList posts={posts} />
    </Container>
  );
}

export default Home;
