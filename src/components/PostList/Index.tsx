import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Numbers, KeyboardArrowRight } from '@mui/icons-material';
import { Typography } from '@mui/material';
import Link from 'next/link';

type BasicListProps = {
  posts: Post[];
};

export default function BasicList({ posts }: BasicListProps) {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
        Todos os posts disponíveis
      </Typography>
      <Typography variant="subtitle1" sx={{ color: 'GrayText' }}>
        Clique sobre o título do post para mais detalhes.
      </Typography>
      <Divider />
      <nav aria-label="posts list">
        <List>
          {posts.map((post) => (
            <ListItem disablePadding key={post.id}>
              <ListItemButton component={Link} href={`/post/${post.id}`}>
                <Numbers sx={{ color: 'primary.main', fontSize: '1.2rem' }} />
                <Typography
                  sx={{
                    mr: 2,
                    color: 'primary.main',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                  }}
                >
                  {post.id}
                </Typography>
                <ListItemText
                  style={{ textTransform: 'capitalize' }}
                  primary={post.title}
                />
                <KeyboardArrowRight sx={{ color: 'primary.main' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
