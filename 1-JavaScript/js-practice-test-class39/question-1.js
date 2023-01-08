/**
 * You are working on the UI of your app, but the backend that will provide your data is not ready yet, so you decide to write some dummy data.
 * You can then use this data in your frontend code, and later, when the backend is ready you can replace it with a request to get that data.
 *
 * You are building a video sharing app and want to have an array of videos that adheres to the following:
 * - The array should be called `videos`
 * - Each item should have a property called `description` which describes what the video is about
 * - The array needs to have at least 1 item that has the `views` property set to 0
 * - The array needs to have at least 1 item that has the `views` property set to 22
 */



/**
 * TEST CODE. DO NOT EDIT
 */
console.assert(videos.some((video) => video.views === 0));
console.assert(videos.some((video) => video.views === 22));

videos.forEach((video) => {
  console.assert(typeof video.description === "string");
});
