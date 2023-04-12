// Likes and comment count generator
function randomGen(max, precision) {
  if (precision) {
    return (
      Math.floor(
        Math.random() * (max * precision - 1 * precision) + 1 * precision
      ) /
      (1 * precision)
    );
  }
  if (precision === undefined) {
    return Math.floor(Math.random() * max) + 1;
  }
}

export const suggestionsData = [
  {
    name: "nusi",
    image: undefined,
    info: "Followed by sashi + 9 more",
  },
  {
    name: "dave_plays",
    image: "/profile1.png",
    info: "Followed by ceoGroup1",
  },
  {
    name: "reo_okoli",
    image: undefined,
    info: "Followed by sashi + 19 more",
  },
  {
    name: "elephantgate",
    image: "/profile4.jpg",
    info: "Followed by HBO + 1 more",
  },
  {
    name: "b_breadStores_ng",
    image: "/profile5.jpg",
    info: "Followed by insta_blog + 24 more",
  },
];

export const storyData = [
  {
    image: "/profile1.png",
    name: "nifebimbo",
  },
  {
    image: "/profile2.jpg",
    name: "joyyyeeee",
  },
  {
    image: "/profile8.png",
    name: "js_hub",
  },
  {
    image: "/profile3.png",
    name: "feyi0",
  },
  {
    image: "/profile4.jpg",
    name: "cello",
  },
  {
    image: "/profile10.jpg",
    name: "ai_merchant",
  },
  {
    image: "/profile5.jpg",
    name: "xander.szn",
  },
  {
    image: "/profile6.jpg",
    name: "hbo_fanpage",
  },
  {
    image: "/profile7.jpg",
    name: "nexttrends",
  },
  {
    image: "/profile9.jpg",
    name: "css3_tips",
  },
];

export const notificationData = [
  {
    image: "/profile1.png",
    info: "Carlos, who you might know, is on Instagram",
    timeline: "1d",
    following: false,
  },
  {
    image: "/profile2.jpg",
    info: "Cristiano sent you a message",
    timeline: "3d",
    following: true,
  },
  {
    image: "/profile3.png",
    info: "TraversyMedia is on instagram",
    timeline: "1w",
    following: false,
  },
  {
    image: "/profile4.jpg",
    info: "Sashi posted a new reel",
    timeline: "1h",
    following: true,
  },
  {
    image: "/profile5.jpg",
    info: "nifemi_a, who you might know, is on Instagram",
    timeline: "1d",
    following: false,
  },
  {
    image: "/profile6.jpg",
    info: "HBO posted a new story",
    timeline: "2w",
    following: true,
  },
];

export const feedData = [
  {
    image: "/profile8.png",
    name: "js_hub",
    timeline: "12d",
    contentSrc: "/posts/feed3.jpg",
    likes: Number("59002").toLocaleString(),
    description: "My life rn..",
  },
  {
    image: "/profile2.jpg",
    name: "joyyyeeee",
    timeline: "1w",
    contentSrc: "/posts/feed2.jpg",
    likes: Number("12459002").toLocaleString(),
    description: "Suiiiiiiiiiii",
    verified: true,
  },
  {
    image: "/profile1.png",
    name: "nifebimbo",
    timeline: "42m",
    contentSrc: "/posts/feed1.jpg",
    likes: Number("1002").toLocaleString(),
    description: "I am bored",
  },
  {
    image: "/profile3.png",
    name: "feyi0",
    timeline: "3w",
    contentSrc: "/posts/feed4.mp4",
    likes: Number("122").toLocaleString(),
    description: "funny..",
  },
  {
    image: "/profile4.jpg",
    name: "cello",
    timeline: "7w",
    contentSrc: "/posts/feed5.jpg",
    likes: Number("4567").toLocaleString(),
    description: "Wow, this animal is beautiful",
  },
  {
    image: "/profile5.jpg",
    name: "xander.szn",
    timeline: "1m",
    contentSrc: "/posts/feed7.mp4",
    likes: Number("97421").toLocaleString(),
    description: "",
  },
  {
    image: "/profile10.jpg",
    name: "ai_merchant",
    timeline: "1m",
    contentSrc: "/posts/feed6.mp4",
    likes: Number("6789").toLocaleString(),
    description: "lol",
    verified: true,
  },
];

export const exploreData = [
  {
    image: "/explore/x1.jpg",
    likes: `${randomGen(100, 10).toLocaleString()}K`,
    comments: randomGen(1000).toLocaleString(),
    bundle: true,
  },
  {
    image: "/explore/x2.jpg",
    likes: `${randomGen(100, 10).toLocaleString()}K`,
    comments: randomGen(1000).toLocaleString(),
  },
  {
    image: "/explore/x3.jpg",
    likes: `${randomGen(100, 10).toLocaleString()}K`,
    comments: randomGen(1000).toLocaleString(),
  },
  {
    image: "/explore/x4.jpg",
    likes: `${randomGen(100, 10).toLocaleString()}K`,
    comments: randomGen(1000).toLocaleString(),
  },
  {
    image: "/explore/x5.jpg",
    likes: `${randomGen(100, 10).toLocaleString()}K`,
    comments: randomGen(1000).toLocaleString(),
  },
  {
    image: "/explore/x6.jpg",
    likes: `${randomGen(100, 10).toLocaleString()}K`,
    comments: randomGen(1000).toLocaleString(),
    video: true,
  },
  {
    image: "/explore/x7.jpg",
    likes: `${randomGen(100, 10).toLocaleString()}K`,
    comments: randomGen(1000).toLocaleString(),
    video: true,
  },
  {
    image: "/explore/x8.jpg",
    likes: `${randomGen(100, 10).toLocaleString()}K`,
    comments: randomGen(1000).toLocaleString(),
  },
  {
    image: "/explore/x9.jpg",
    likes: `${randomGen(100, 10).toLocaleString()}K`,
    comments: randomGen(1000).toLocaleString(),
    bundle: true,
  },
  {
    image: "/explore/x10.jpg",
    likes: `${randomGen(100, 10).toLocaleString()}K`,
    comments: randomGen(1000).toLocaleString(),
  },
  {
    image: "/explore/x11.jpg",
    likes: `${randomGen(100, 10).toLocaleString()}K`,
    comments: randomGen(1000).toLocaleString(),
    bundle: true,
  },
  {
    image: "/explore/x12.jpg",
    likes: `${randomGen(100, 10).toLocaleString()}K`,
    comments: randomGen(1000).toLocaleString(),
    bundle: true,
  },
  {
    image: "/explore/x13.jpg",
    likes: `${randomGen(100, 10).toLocaleString()}K`,
    comments: randomGen(1000).toLocaleString(),
  },
  {
    image: "/explore/x14.jpg",
    likes: `${randomGen(100, 10).toLocaleString()}K`,
    comments: randomGen(1000).toLocaleString(),
    video: true,
  },
  {
    image: "/explore/x14.jpg",
    likes: `${randomGen(100, 10).toLocaleString()}K`,
    comments: randomGen(1000).toLocaleString(),
    video: true,
  },
];
