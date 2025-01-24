const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');
const videoContainer = document.getElementById('video-container');
let link = "https://www.eporner.com/api/v2/video/search/?query=";


function search_real_time(){
    
    const query = searchInput.value;
    if (query) {
        fetchVideos(query);
    }

    document.querySelector(".form_style").style.height = '10svh';

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
                    <a onclick="show_video('${prod.url}')">
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