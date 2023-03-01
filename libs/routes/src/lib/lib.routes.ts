import { Route } from '@angular/router';
import { PostPage } from './posts/post/post.page';
import { PostsPage } from './posts/posts.page';

export const routes: Route[] = [
  {
    path: '',
    component: PostsPage,
  },
  {
    path: ':id',
    component: PostPage,
  },
];
