const { faker } = require('@faker-js/faker');
const fs = require('fs');

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

const generatePosts = (count) => {
  const posts = [];

  for (let i = 1; i <= count; i++) {
    const userID = faker.number.int({ min: 0, max: 20 });

    posts.push({
      postID: `post-${i}`,
      userID: `user-${userID}`,
      title: faker.lorem.words(faker.number.int({ min: 4, max: 10 })),
      totalUpvotes: faker.number.int({ min: 0, max: 100 }),
      totalDownvotes: faker.number.int({ min: 0, max: 20 }),
      totalComments: faker.number.int({ min: 0, max: 50 }),
      createTime: faker.date.past().getTime(),
      feed: 1,
      media: `video-${i}`,
      mediaThumbnail: `thumbnail-${i}`,
      sensitive: faker.datatype.boolean(),
      mediaType: faker.number.int({ min: 0, max: 1 }),
      hashtags: faker.helpers.arrayElements(
        tags,
        faker.number.int({ min: 2, max: 5 }),
      ),
      userUsername: faker.internet.userName(),
      userAvatar: `avatar-${userID}`,
    });
  }
  return posts;
};

const generateTopics = (count) => {
  const topics = [];

  for (let i = 1; i <= count; i++) {
    const userID = faker.number.int({ min: 0, max: 20 });

    topics.push({
      topicID: `topic-${i}`,
      userID: `user-${userID}`,
      title: faker.lorem.words(
        faker.number.int({ min: 2, max: 5 }),
      ).toUpperCase(),
      media: `media-topic-${i}`,
      totalMembers: faker.number.int({ min: 10, max: 100 }),
      description: faker.lorem.sentences(
        faker.number.int({ min: 1, max: 2 }),
      ),
      userUsername: faker.internet.userName(),
      userAvatar: `avatar-${userID}`,
    });
  }
  return topics;
};

const generateTags = () => tags.map((tag, index) => ({
  name: tag,
  icon: `icon-${tag.toLowerCase()}`,
  starred: faker.datatype.boolean(),
}));
;

const generateMockData = () => {
  const mockData = {
    posts: generatePosts(100),
    topics: generateTopics(20),
    tags: generateTags(),
  };
  fs.writeFileSync('mock-api/db.json', JSON.stringify(mockData, null, 2));
};

generateMockData();
