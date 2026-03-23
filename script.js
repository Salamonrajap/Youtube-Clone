// login directory

if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "login.html";
}




//api key video

const videoList = document.getElementById("videoList");

async function loadVideos(){

try{

const response = await fetch(
"https://api.pexels.com/videos/popular?per_page=12",
{
headers:{
Authorization: CONFIG.API_KEY
}
}
);

const data = await response.json();

displayVideos(data.videos);

}catch(error){
console.error("Error fetching videos",error);
}

}

function displayVideos(videos){

videoList.innerHTML = "";

videos.forEach(video => {

const videoFile = video.video_files[0].link;
const thumbnail = video.image;

const myPhoto = "photo.jpg";

const videoCard = `
<div class="video-card">

<div class="thumbnail-container">
<video class="thumbnail" controls poster="${thumbnail}">
<source src="${videoFile}" type="video/mp4">
</video>
</div>

<div class="video-info">

<img src="${myPhoto}" class="channel-icon">

<div class="video-details">
<p class="video-title">Sample Video</p>
<p class="channel-name">${video.user.name}</p>
<p class="views">100K views</p>
</div>

</div>

</div>
`;

videoList.innerHTML += videoCard;

});

}

loadVideos();



//suidebar logic

const menuButton=document.querySelector(".menu-button");

menuButton.addEventListener("click",()=>{
document.body.classList.toggle("sidebar-hidden");
})

//logout logic

function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}


//crud operation


const titleInput = document.getElementById("musicTitle");
const artistInput = document.getElementById("musicArtist");
const linkInput = document.getElementById("musicLink");

const addBtn = document.getElementById("addBtn");
const list = document.getElementById("musicList");

let editId = null;

let musicData = getData();

function getData(){
return JSON.parse(localStorage.getItem("music")) || [];
}


function saveData() {
  localStorage.setItem("music", JSON.stringify(musicData));
}


addBtn.addEventListener("click", handleSubmit);

function handleSubmit() {

  const title = titleInput.value.trim();
  const artist = artistInput.value.trim();
  const link = linkInput.value.trim();

  if (!title || !artist || !link) {
    alert("Fill all fields");
    return;
  }

  if (editId) {

    musicData = musicData.map(m =>
      m.id === editId
        ? { ...m, title, artist, link }
        : m
    );

    editId = null;
    addBtn.textContent = "Add Music";

  } else {
   
    musicData.push({
      id: Date.now(),
      title,
      artist,
      link
    });
  }

  titleInput.value = "";
  artistInput.value = "";
  linkInput.value = "";
  titleInput.focus();

  saveData();
  render();
}

function deleteMusic(id) {
  const confirmDelete = confirm("Are you sure to delete?");
  if (!confirmDelete) return;
  musicData = musicData.filter(m => m.id !== id);
  saveData();
  render();
}


function editMusic(id) {

  const item = musicData.find(m => m.id === id);

  titleInput.value = item.title;
  artistInput.value = item.artist;
  linkInput.value = item.link;

  editId = id;
  addBtn.textContent = "Update Music";
  titleInput.focus();
}


function render(data = musicData) {

  if (data.length === 0) {
    list.innerHTML = "<p>No music found</p>";
    return;
  }

  list.innerHTML = "";

  data.forEach(m => {

    const card = document.createElement("div");
    card.className = "music-card-new";

    const title = document.createElement("h3");
    title.textContent = m.title;

    const artist = document.createElement("p");
    artist.textContent = m.artist;

    card.addEventListener("click", () => {
      window.open(m.link, "_blank");
    });

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      editMusic(m.id);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteMusic(m.id);
    });

    card.appendChild(title);
    card.appendChild(artist);
    card.appendChild(editBtn);
    card.appendChild(deleteBtn);

    list.appendChild(card);
  });
}

render();


//search 

const searchInput = document.getElementById("searchInput");
searchBtn.addEventListener("click", handleSearch);
function handleSearch() {

  const value = searchInput.value.toLowerCase();

  const filtered = musicData.filter(m =>
    m.title.toLowerCase().includes(value) ||
    m.artist.toLowerCase().includes(value)
  );

  render(filtered);
}