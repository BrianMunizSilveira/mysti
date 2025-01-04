// Simula os dados dos vídeos
const videos = [
    {
        title: "2025 Vai ser Diferente.",
        thumbnail: "https://i.ytimg.com/vi/dMYDLSpGwLM/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB-8rFUSH_8XvKXo2BL8yv5B1fmWg",
        description: "O Canal Vai mudar.",
        link: "https://www.youtube.com/watch?v=dMYDLSpGwLM"
    },
    {
        title: "Não Consigo Aprender.",
        thumbnail: "https://i.ytimg.com/vi/7Pr76Wgiius/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDGxU-snvTcTY2dFYEhWM3QVysYVQ",
        description: "É não sei aprender ksksk TDAH? Talvez kkkkk",
        link: "https://www.youtube.com/watch?v=7Pr76Wgiius"
    },
    {
        title: "Será Que Você Pode Me Ajudar?",
        thumbnail: "https://i.ytimg.com/vi/TfUIvk4AjG0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAtWLizLWsz5H_9DrF6XSRp24q7ew",
        description: "É pessoal as coisas não estão fáceis.",
        link: "https://www.youtube.com/watch?v=TfUIvk4AjG0"
    }
];

// Carrega os vídeos na página
function loadVideos() {
    const videoGrid = document.querySelector('.video-grid');
    videos.forEach(video => {
        const videoCard = `
                    <div class="video-card">
                        <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
                        <div class="video-info">
                            <h3 class="video-title">${video.title}</h3>
                            <p>${video.description}</p>
                            <br />
                            <a href="${video.link}" target="_blank" class="video-link">Assistir</a>
                        </div>
                    </div>
                `;
        videoGrid.innerHTML += videoCard;
    });
}

// Subscribe button
document.querySelector('.subscribe-btn').addEventListener('click', () => {
    window.open('https://www.youtube.com/@Mysti07', '_blank');
});

// Carrega os vídeos quando a página carregar
window.addEventListener('load', loadVideos);