const tweetBtn = document.querySelector("#tweet-btn");
const countletters = document.querySelector("#countletter");
const input = document.querySelector("#tweet-input");

tweetBtn.onclick = function () {
  const input = document.querySelector("#tweet-input");

  const thetweets = document.querySelector("#thetweets");
  const postContainer = document.createElement("div");
  const thetweetsHeader = document.createElement("div");
  const tweetImgdiv = document.createElement("div");
  const tweetImg = document.createElement("img");
  const tweetContainer = document.createElement("div");
  const userName = document.createElement("div");
  const myNamespan = document.createElement("span");
  const userNamespan = document.createElement("span");
  const deleteIcon = document.createElement("i");
  const tweetContain = document.createElement("div");
  const paraghraph = document.createElement("p");
  const likeAndretweet = document.createElement("div");
  const likeSpan = document.createElement("span");
  const retweetSpan = document.createElement("span");
  const likeIcon = document.createElement("i");
  const retweetIcon = document.createElement("i");

  thetweetsHeader.setAttribute("class", "thetweetHead");
  tweetImgdiv.setAttribute("class", "tweet-img");
  tweetContainer.setAttribute("class", "tweet-container");
  userName.setAttribute("class", "userNamer");
  myNamespan.setAttribute("class", "myName");
  userNamespan.setAttribute("class", "userName");
  deleteIcon.setAttribute("class", "fas fa-ellipsis-h");
  deleteIcon.setAttribute("id", "deleteBtn");
  tweetContain.setAttribute("class", "tweetcontain");
  paraghraph.setAttribute("class", "paraghraph");
  likeAndretweet.setAttribute("class", "likeAndretweet");
  likeSpan.setAttribute("class", "likeSpan");

  retweetSpan.setAttribute("class", "retweetSpan");

  likeIcon.setAttribute("class", "far fa-heart");
  likeIcon.setAttribute("id", "likeBtnid");
  retweetIcon.setAttribute("class", "fas fa-retweet");
  retweetIcon.setAttribute("id", "retweetBtn");

  tweetImg.src = "./Assets/profile-img.jpg";

  myNamespan.textContent = "Mahmoud";
  userNamespan.textContent = "@MahmoudJD";
  paraghraph.textContent = input.value;
  likeSpan.textContent = "";
  retweetSpan.textContent = "";

  tweetImgdiv.appendChild(tweetImg);
  thetweetsHeader.appendChild(tweetImgdiv);

  tweetContainer.appendChild(myNamespan);
  tweetContainer.appendChild(userNamespan);
  tweetContainer.appendChild(userName);
  tweetContainer.appendChild(deleteIcon);
  thetweetsHeader.appendChild(tweetContainer);

  tweetContain.appendChild(paraghraph);
  tweetContainer.appendChild(tweetContain);

  likeSpan.appendChild(likeIcon);
  likeAndretweet.appendChild(likeSpan);

  retweetSpan.appendChild(retweetIcon);
  likeAndretweet.appendChild(retweetSpan);

  postContainer.appendChild(thetweetsHeader);
  postContainer.appendChild(likeAndretweet);

  thetweets.appendChild(postContainer);

  count = 0;
  likeIcon.onclick = function () {
    // console.log(likecount.this)
    count += 1;
    this.innerHTML = count;
    if (count >= 1) {
      likeIcon.style.color = "red";
      paraghraph.style.color = "red";
    }
  };

  countr = 0;
  retweetIcon.onclick = function () {
    countr += 1;
    this.innerHTML = countr;
    const postCopy = postContainer.cloneNode(true);
    //  console.log(postCopy.children)
    thetweets.appendChild(postCopy);
  };

  countr = 0;
  deleteIcon.onclick = function () {
    postContainer.remove();
  };
  let itemsArray = JSON.parse(localStorage.getItem("items")) || [];
  let obj = { neme: "Mahmoud", tweet: input.value };
  itemsArray.push(obj);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  console.log(input);
  console.log(input.value);
};

input.onkeypress = (event) => {
  const value = event.target.value;
  if (value !== "" && value.length <= 250) {
    tweetBtn.style.opacity = 1;
    const countletter = document.querySelector("#countletter");
    countletter.style.display = "block";
    countletter.textContent = 250 - value.length;
  }
};

// input.onkeypress=(e)=>{
//     let element=e.target;
//     let currentlenght=element.innerText.length;

//     if(currentlenght<= 0){
//         countletters.style.display="none"
//     }else{
//         countletters.style.display="block"
//     }
// }

{
  /* <div class="thetweets">

        <div class="thetweetHead">
          <div class="tweet-img"><img src="./Assets/profile-img.jpg" /></div>
         <div class=tweet-container>11
          <div class="userName">
            <span class="myName"> Mahmoud</span>
            <span class="userName"> @MahmoudJD</span>
            <i class="fas fa-ellipsis-h"></i>
          </div>
         
          <div class="tweetcontain">
            <p>
              It's all about execution. If you can do things in just a slightly
              different way, it's already worth doing - and no matter what, you
              will still learn from the experience.
            </p>
          </div>
         </div>
         
          
        </div>
        
        

        <div class="likeAndretweet">
          <span><i class="far fa-heart"></i>15</span>
          <span><i class="fas fa-retweet"></i>10</span>
        </div>
      </div> */
}
