import { Container, Typography, Divider, Box, Button } from '@mui/material';
import { KeyboardBackspace } from '@mui/icons-material';
import Link from 'next/link';
import { extendedDateFormat } from '../../../utils';

async function getPostById(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();
  return data;
}

type PostProps = {
  params: {
    id: string;
  };
};

async function Post(request: PostProps) {
  const post = await getPostById(request.params.id);
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        <div>
          <Typography
            style={{ textTransform: 'capitalize' }}
            variant="h4"
            sx={{ fontWeight: 700, mb: 2 }}
          >
            {post.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'GrayText' }}>
            {extendedDateFormat()}
          </Typography>
        </div>
      </Box>
      <Divider />
      <Typography variant="body1" sx={{ mt: 2 }}>
        {post.body}
      </Typography>
      <Button
        component={Link}
        href={'/'}
        startIcon={<KeyboardBackspace />}
        variant="contained"
        sx={{ mt: 2 }}
      >
        Voltar
      </Button>
    </Container>
  );
}

export default Post;
