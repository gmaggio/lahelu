require('dotenv').config();
const { faker } = require('@faker-js/faker');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;
const { API_BASE_URL } = process.env;

app.use(cors());

const tags = [
  'Absurd',
  'Anime',
  'Binatang',
  'Cringe',
  'Dark',
  'Gaming',
  'Lucu',
  'Nostalgia',
  'Rage',
  'Random',
  'Relate',
  'Sad',
  'Sarkas',
  'Sus',
  'Wtf',
];

/* Generate Posts */

const generatePost = () => {
  const userID = faker.number.int({ min: 0, max: 10 });
  const mediaW = faker.number.int({ min: 650, max: 800 });
  const mediaH = faker.number.int({ min: 350, max: 650 });
  const media = faker.image.urlLoremFlickr({
    options: {
      width: mediaW,
      height: mediaH,
    },
  });

  return {
    postID: faker.string.uuid(),
    userID: `user-${userID}`,
    title: faker.lorem.words(faker.number.int({ min: 4, max: 10 })),
    totalUpvotes: faker.number.int({ min: 0, max: 100 }),
    totalDownvotes: faker.number.int({ min: 0, max: 20 }),
    totalComments: faker.number.int({ min: 0, max: 50 }),
    createTime: faker.date.past().getTime(),
    feed: 1,
    mediaWidth: mediaW,
    mediaHeight: mediaH,
    media,
    mediaThumbnail: media,
    sensitive: faker.datatype.boolean(),
    mediaType: faker.number.int({ min: 0, max: 1 }),
    hashtags: faker.helpers.arrayElements(
      tags,
      faker.number.int({ min: 2, max: 5 }),
    ),
    userUsername: faker.internet.userName(),
    userAvatar: faker.image.avatar(),
  };
};

const generatePosts = (limit, page, total) => {
  // Generate the total dataset
  const allPosts = faker.helpers.multiple(generatePost, { count: total });

  // Simulate pagination by slicing the dataset
  const startIndex = (page - 1) * limit;
  const endIndex = Math.min(startIndex + limit, total);
  const posts = allPosts.slice(startIndex, endIndex);

  // Determine if there's a next page
  const hasMore = endIndex < total;
  const nextPage = hasMore ? page + 1 : null;

  return {
    posts,
    nextPage,
    hasMore,
  };
};

/* Generate Topics */

const generateTopics = (count) => {
  const topics = [];

  for (let i = 1; i <= count; i++) {
    const userID = faker.number.int({ min: 0, max: 20 });

    topics.push({
      topicID: `topic-${i}`,
      userID: `user-${userID}`,
      title: faker.lorem
        .words(faker.number.int({ min: 2, max: 5 }))
        .toUpperCase(),
      media: `media-topic-${i}`,
      totalMembers: faker.number.int({ min: 10, max: 100 }),
      description: faker.lorem.sentences(faker.number.int({ min: 1, max: 2 })),
      userUsername: faker.internet.userName(),
      userAvatar: `avatar-${userID}`,
    });
  }
  return topics;
};

/* Generate Tags */

const generateTags = () =>
  tags.map((tag) => ({
    name: tag,
    icon: `icon-${tag.toLowerCase()}`,
    starred: faker.datatype.boolean(),
  }));

/* Generate All Data */

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Mock API',
    endpoints: {
      posts: '/posts',
      topics: '/topics',
      tags: '/tags',
    },
  });
});

/* Dynamic Route for Posts */
app.get('/posts', (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 5;
  const totalPosts = 100;

  const postsData = generatePosts(limit, page, totalPosts);
  res.json(postsData);
});

/* Static Route for Topics */
app.get('/topics', (req, res) => {
  const topicsGenerated = generateTopics(20);
  res.json(topicsGenerated);
});

/* Static Route for Tags */
app.get('/tags', (req, res) => {
  const tagsGenerated = generateTags();
  res.json(tagsGenerated);
});

app.listen(port, () => {
  console.log(
    `Mock API server running at http://localhost:${port} or ${API_BASE_URL}`,
  );
});
