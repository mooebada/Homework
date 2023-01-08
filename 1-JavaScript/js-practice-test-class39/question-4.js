/**
 * Your YouTube competitor is really getting popular and it is now possible to favorite videos.
 * You are in charge of writing the algorithm to find the next recommended video to keep the user on the platform.
 *
 * The function will be given a users array, a videos array and the userId for who to provide the next recommended video.
 *
 * A user has the structure:
 * {
 *  id: string,
 *  favoritedVideoIds: Array of strings
 * }
 *
 * A video has the structure:
 * {
 *  id: string,
 *  title: string,
 *  tags: Array of strings
 * }
 *
 * The decision has been made that the way to find the next recommended video is to look at the favorited videos of the user 
 * and look for the video that has the most tags in common with the tags of the videos the user already favorited.
 * 
 * Some tips:
 *
 * First you will need to find out which video's were favorited by the user with the given `userId` parameter
 * Then you will need to grab the tags from the favorited videos.
 * With those tags, you can go through the videos array and find the video that has the most tags in common!
 */

const recommendedNextVideo = (users = [], videos = [], userId = null) => {
  // find the tags of the favourited videos
  

  // create a list of videos that the user has not seen yet!
  

  // find the video with the most tags in common with the favoriteVideo tags
  

  // return the most favorite video id! (So not the whole object, but just the id)
  
};

/**
 * TEST CODE. DO NOT EDIT
 */
const testTags = [
  { id: "t---1", name: "Programming", color: "#c4ef00" },
  { id: "t---2", name: "JavaScript", color: "#ffffff" },
  { id: "t---3", name: "C#", color: "#ffffff" },
  { id: "t---4", name: "Panda", color: "#ffffff" },
  { id: "t---5", name: "Animal", color: "#ffffff" },
];
const testVideos = [
  {
    id: "v---1",
    title: "JavaScript for Beginners",
    tags: ["t---1", "t---2"],
  },
  {
    id: "v---2",
    title: "C# for Beginners",
    tags: ["t---1", "t---3"],
  },
  {
    id: "v---3",
    title: "Cute panda begins to fall over",
    tags: ["t---4", "t---5"],
  },
  {
    id: "v---4",
    title: "9th Symphony in C#",
    tags: ["t---3"],
  },
];
const testUsers = [
  {
    id: "u---1",
    favoritedVideoIds: ["v---2"],
  },
  {
    id: "u---2",
    favoritedVideoIds: ["v---4"],
  },
];
const firstUserRecommendation = recommendedNextVideo(
  testUsers,
  testVideos,
  "u---1"
);
console.assert(
  firstUserRecommendation === "v---1" || firstUserRecommendation === "v---4"
);
console.assert(
  recommendedNextVideo(testUsers, testVideos, "u---2") === "v---2"
);
