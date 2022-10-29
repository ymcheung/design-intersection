export interface queryProps {
  slug: {
    current: string;
  };
  title: string;
  cover: {
    mainImage: {
      asset: {
        url: string;
      }
    };
    alt?: string;
  };

  description: string;
  _updatedAt: string;
  publishedTime: string;
  tags: [{
    slug: string
  }];
}

export interface postsProps {
  posts: [{
    slug: string;
    title: string;
    cover: {
      url: string;
      alt?: string;
    }
    description: string;
    modifiedTime: string;
    publishedTime: string;
    tags: string[];
  }]
}
