const competenceContainer = document.getElementById("competence-container");

// Fetch the competence data
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        // Iterate over the data to create cards
        data.forEach(item => {
            const cardDiv = document.createElement('div');
            cardDiv.className = "col-md-4 mb-4";

            cardDiv.innerHTML = `
                <div class="card" onclick="showVideo('${item.videoSrc}')">
                    <img src="${item.img}">
                </div>
            `;
            competenceContainer.appendChild(cardDiv);
        });

        // Function to show the video when a card is clicked
        window.showVideo = function (videoSrc) {
            const videoPlayer = document.getElementById("video-player");
            document.querySelector(".video-container").style.display = "flex";
            videoPlayer.src = videoSrc;
            videoPlayer.play();
        };
    })
    .catch(error => {
        console.error("Error fetching data: " + error);
    });


    function close_video(){
        document.querySelector("#video-player").src = "";
        document.querySelector("#video-container").style.display = "none";
    }