import { withCssResources } from '@storybook/addon-cssresources';
import { storiesOf } from '@storybook/react';
import React from 'react';
import StoryRouter from 'storybook-react-router';

import { Abstract, ArticleRow, ReadMore, Title } from './row';

const article = {
  id: 1,
  title: 'ssss',
  description: 'ssfdsfs reerreerer',
};
storiesOf('Components|Article row', module)
  .addDecorator(StoryRouter())
  .addDecorator(
    withCssResources({
      cssresources: [
        {
          id: `fontawesome`,
          code: `<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>`,
          picked: true,
        },
        {
          id: `whitetheme`,
          code: `<style>.fa { color: #fff }</style>`,
          picked: true,
        },
      ],
    }),
  )
  .add('component', () => <ArticleRow article={article} />)
  .add('row title', () => <Title content={article.title} />)
  .add('row abstact', () => <Abstract content={article.description} />)
  .add('read more', () => <ReadMore id={article.id} />);
