var clickes = 0;
var cl_states = false;

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');
const videoContainer = document.getElementById('video-container');
const watchVideo = document.querySelector("#watch_video");
const embedVideo = document.querySelector("#embed_video");
let link = "https://www.eporner.com/api/v2/video/search/?query=";

// Attach event listeners
searchButton.addEventListener('click', body_click);

// Function to handle the button click
function body_click() {
    if (clickes === 0) {
        clickes += 1;
        console.log('First click:', clickes);
    }
    else if (clickes === 1) {  // Check for specific input value
        if (searchInput.value === '20051003') {
            cl_states = true;
            console.log('State set to true');
        } else {
            console.log('Invalid code entered');
        }
        clickes += 1; // Move to the next stage
    }
    else if (clickes === 2) {  // Perform the search if state is true
        if (cl_states) {
            search_real_time();
        } else {
            console.log('State not set to true');
        }
    }
}

// Real-time search function
function search_real_time() {
    const query = searchInput.value;
    if (query) {
        fetchVideos(query);  // Assuming you have this function elsewhere
    }
    document.querySelector(".form_style").style.height = '10svh';  // Adjust the height of the form
}

// Fetch videos from API
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
