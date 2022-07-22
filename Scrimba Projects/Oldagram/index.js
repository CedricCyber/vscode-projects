const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const vangoghPost = document.getElementById("vangogh-post");
const courbetPost = document.getElementById("courbet-post");
const ducreuxPost = document.getElementById("ducreux-post");
const vangoghLikesEl = document.getElementById("vangogh-likes-el");
const vangoghObject = posts[0];

console.log(vangoghObject.likes);
vangoghPost.addEventListener("dblclick", function () {
  vangoghObject.likes += 1;
  vangoghLikesEl.innerText = vangoghObject.likes + " likes";
});

const commentButton = document.getElementById("comment-btn");
const commentDiv = document.getElementById("comment-div");

commentButton.addEventListener("click", function () {
  commentDiv.innerHTML = `
    <input class="margin-left-align" type="text" />
    <button id="comment-btn" class="margin-left-align" type="submit">Send</button> 
    `;
});
/* Render Comment HTML 
<input class="margin-left-align" type="text" />
<button id="comment-btn" class="margin-left-align" type="submit"> 
*/
