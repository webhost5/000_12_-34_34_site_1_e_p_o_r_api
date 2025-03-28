const searchInput = document.getElementById('search-input');
const searchInput2 = document.getElementById('search-input2');
const searchButton = document.getElementById('search-btn');
const videoContainer = document.getElementById('video-container');
let link = "https://www.eporner.com/api/v2/video/search/?query=";

let clicks_false = 0;

// Real-time search handler
function search_real_time() {
    const query = searchInput.value;
    if (query) {
        fetchVideos(query);
    }
    document.querySelector(".form_style").style.height = '10svh';
}

// Fetch videos from the API
function fetchVideos(query) {
    fetch(link + query)
        .then(response => response.json())
        .then(data => {
            const videos = data.videos;
            renderVideos(videos);
        })
        .catch(error => console.error("Error fetching data:", error));
}

// Render videos to the screen
function renderVideos(videos) {
    videoContainer.innerHTML = ''; // Clear previous results
    videos.forEach(prod => {
        const videoCard = document.createElement('div');
        videoCard.classList.add('col-md-12', 'col-lg-4', 'mb-4', 'mt-5', 'mb-lg-0');

        videoCard.innerHTML = `
            <div class="card text-black">
                <img src="${prod.default_thumb.src}" class="card-img-top" alt="Video Thumbnail" />
                <div class="card-body">
                    <div class="text-center mt-1">
                        <h4 class="card-title">${prod.title}</h4>
                    </div>
                    <a onclick="show_video('${prod.id}', '${prod.embed}', '${prod.default_thumb.src}', '${prod.title}')">
                        <div class="btn btn-danger bg-danger text-light w-100 p-3 mx-n3 mb-4" style="background-color: #eff1f2;">
                            <h5 class="mb-0 text-center hover-shadow">Watch now <span>${prod.length_min} Min</span></h5>
                        </div>
                    </a>
                </div>
            </div>
        `;
        videoContainer.appendChild(videoCard);
    });
}

// Show selected video in the embedded player
function show_video(id, embed_video, thumbnail, title) {
    document.querySelector("#watch_video").style.display = "flex";
    document.querySelector("#embed_video").src = embed_video;
    // save_video(id, embed_video, thumbnail, title);
}

// Close video player
function close_video() {
    document.querySelector("#embed_video").src = '';
    document.querySelector("#watch_video").style.display = "none";
}

// Save video to sessionStorage
// function save_video(id, embed_video, thumbnail, title) {
//     sessionStorage.setItem('id_' + id, JSON.stringify({ thumbnail, embed_video, title }));
// }

// Handle the search input2 logic
function search() {
    if (clicks_false <= 7) {
        if (searchInput2.value === '20051003') {
            if (clicks_false >= 7) {
                setTimeout(() => {
                    searchInput2.style.display = "none";
                    document.querySelector(".google_img").style.display = "none";
                    searchInput.style.display = "flex";
                }, 3000);
            }
        } else {
            clicks_false++;
        }
    } else if (clicks_false >= 7) {
        parent.location = 'https://www.google.com/';
    }
}
