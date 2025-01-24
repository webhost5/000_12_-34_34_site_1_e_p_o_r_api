var cl_states = false;

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');
const videoContainer = document.getElementById('video-container');
const watchVideo = document.querySelector("#watch_video");
const embedVideo = document.querySelector("#embed_video");
let link = "https://www.eporner.com/api/v2/video/search/?query=";

// Attach event listener to the search button
searchButton.addEventListener('click', body_click);

function body_click() {
    // First click: Check if the entered value is '20051003'
    if (!cl_states) {  // if cl_states is false (first click)
        if (searchInput.value === '20051003') {
            cl_states = true;  // Set state to true if correct
            console.log('Code correct, cl_states set to true');
        } else {
            alert('Incorrect code, please try again.');
        }
    } else {
        // Second click: If cl_states is true, fetch API data
        const query = searchInput.value;
        if (query) {
            search_real_time(query);
        }
    }
}

// Real-time search function (fetch API and display results)
function search_real_time(query) {
    fetch(link + query)
        .then(response => response.json())
        .then(data => {
            const videos = data.videos;
            renderVideos(videos);  // Call render function to display videos
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
                    <a onclick="show_video('${prod.embed}')">
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

// Show the selected video
function show_video(embed_video) {
    watchVideo.style.display = "flex";
    embedVideo.src = embed_video;
}

// Close the video view
function close_video() {
    embedVideo.src = '';
    watchVideo.style.display = "none";
}
