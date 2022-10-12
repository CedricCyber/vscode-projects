// User Data Arrays
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

// -------------------------------------------------//
// Vangogh Section

// Element grabbers (Vangogh Post)
const vangoghPost = document.getElementById("vangogh-post");
const vangoghHeart = document.getElementById("vangogh-heart");
const vangoghLikesEl = document.getElementById("vangogh-likes-el");
const vangoghObject = posts[0];
let liked = false;

// refactored function (Add/Remove likes on click/Apply filled heart png)
function addRemoveLikes(userObject, userLikesEl, userHeart) {
  if (liked === false) {
    userObject.likes += 1;
    userLikesEl.innerText = userObject.likes + " likes";
    liked = true;
    userHeart.src = "images/icon-heart-filled.png";
  } else {
    userObject.likes -= 1;
    userLikesEl.innerText = userObject.likes + " likes";
    liked = false;
    userHeart.src = "images/icon-heart.png";
  }
}

// Add like when post is Double click (Vangogh Post)
vangoghPost.addEventListener("dblclick", function () {
  addRemoveLikes(vangoghObject, vangoghLikesEl, vangoghHeart);
});

// Add like when heart icon is Single Click (Vangogh Post)
vangoghHeart.addEventListener("click", function () {
  addRemoveLikes(vangoghObject, vangoghLikesEl, vangoghHeart);
});

// Element grabbers (vangogh-comment-section)
const vangoghCommentButton = document.getElementById("vangogh-comment-button");
const vangoghCommentInput = document.getElementById("vangogh-comment-input");
const vangoghUserComment = document.getElementById("vangogh-user-comment");
const vangoghComments = document.getElementById("vangogh-comments");
const vangoghSubmitButton = document.getElementById("vangogh-submit-button");
// Mock User Name for comments
username = "Bestboss2749";

// Refactored comment Functions for multi-use
function renderComment(section) {
  section.style.display = "block";
}

function submitComment(section, person, commentValue) {
  section.style.display = "none";
  person.innerHTML += `
  <h2 class="inline-block margin-left-align">${username}</h2>
  <h3 class="inline-block margin-left-none">
          ${commentValue.value}
          </h3>
          <br>
  `;
  commentValue.value = "";
}

// Display Comment input feild on click (vangogh)
vangoghCommentButton.addEventListener("click", function () {
  renderComment(vangoghCommentInput);
});

// Hide Comment input feild on click & render comment (vangogh)
vangoghSubmitButton.addEventListener("click", function () {
  submitComment(vangoghCommentInput, vangoghComments, vangoghUserComment);
});

// ------------------------------------------------//
// Courbet Section//

// Element grabbers (Courbet Post)
const courbetPost = document.getElementById("courbet-post");
const courbetHeart = document.getElementById("courbet-heart");
const courbetLikesEl = document.getElementById("courbet-likes-el");
const courbetObject = posts[1];

// Add like when post is Double click (Courbet Post)
courbetPost.addEventListener("dblclick", function () {
  addRemoveLikes(courbetObject, courbetLikesEl, courbetHeart);
});

// Add like when heart icon is Single Click (Courbet Post)
courbetHeart.addEventListener("click", function () {
  addRemoveLikes(courbetObject, courbetLikesEl, courbetHeart);
});

// Element grabbers (courbet-comment-section)
const courbetCommentButton = document.getElementById("courbet-comment-button");
const courbetCommentInput = document.getElementById("courbet-comment-input");
const courbetUserComment = document.getElementById("courbet-user-comment");
const courbetComments = document.getElementById("courbet-comments");
const courbetSubmitButton = document.getElementById("courbet-submit-button");

// Display Comment input feild on click (courbet)
courbetCommentButton.addEventListener("click", function () {
  renderComment(courbetCommentInput);
});
// Hide Comment input feild on click & render comment (courbet)
courbetSubmitButton.addEventListener("click", function () {
  submitComment(courbetCommentInput, courbetComments, courbetUserComment);
});

// -------------------------------------------------------//
// Ducreux Section

// Element grabbers (Ducreux Post)
const ducreuxPost = document.getElementById("ducreux-post");
const ducreuxHeart = document.getElementById("ducreux-heart");
const ducreuxLikesEl = document.getElementById("ducreux-likes-el");
const ducreuxObject = posts[2];

// Add like when post is Double click (Ducreux Post)
ducreuxPost.addEventListener("dblclick", function () {
  addRemoveLikes(ducreuxObject, ducreuxLikesEl, ducreuxHeart);
});

// Add like when heart icon is Single Click (Decreux Post)
ducreuxHeart.addEventListener("click", function () {
  addRemoveLikes(ducreuxObject, ducreuxLikesEl, ducreuxHeart);
});

// Element grabbers (ducreux-comment-section)
const ducreuxCommentButton = document.getElementById("ducreux-comment-button");
const ducreuxCommentInput = document.getElementById("ducreux-comment-input");
const ducreuxUserComment = document.getElementById("ducreux-user-comment");
const ducreuxComments = document.getElementById("ducreux-comments");
const ducreuxSubmitButton = document.getElementById("ducreux-submit-button");

// Display Comment input feild on click (ducreux)
ducreuxCommentButton.addEventListener("click", function () {
  renderComment(ducreuxCommentInput);
});
// Hide Comment input feild on click & render comment (ducreux)
ducreuxSubmitButton.addEventListener("click", function () {
  submitComment(ducreuxCommentInput, ducreuxComments, ducreuxUserComment);
});
