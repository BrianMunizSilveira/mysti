// Simula os dados dos vídeos
const videos = [
    {
        title: "Mic Consertado 👍",
        thumbnail: "https://i.ytimg.com/vi/XYfA3VEYh-k/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB\u0026rs=AOn4CLBy1TCXzN2PVgZsGA9bT24dxdgPtg",
        description: "Agora a frequência volta ao normal👍",
        link: "https://www.youtube.com/watch?v=XYfA3VEYh-k"
    },
    {
        title: "Dois idiotas sobrevivendo no OneBlock ‪@Luxzin‬",
        thumbnail: "https://i.ytimg.com/vi/V--ugV8aaAM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB\u0026rs=AOn4CLDEF8qmMGgBETWT-fm_FKnOF3yXvw",
        description: "Só os assuntos aleatórios e Robertinho do grau sumiu KKKKK Espero que gostem!",
        link: "https://www.youtube.com/watch?v=V--ugV8aaAM"
    },
    {
        title: "Será Que Você Pode Me Ajudar?",
        thumbnail: "https://i.ytimg.com/vi/l_czDYXSfO8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB\u0026rs=AOn4CLC0fwjvnvPJtH5oQmRXtdaCWRJdbg",
        description: "Hoje resolvi aprender redstone com um nerdola do Minecraft, o ‪@Luxzin‬💡💥 Será que vou explodir tudo? 😂",
        link: "https://www.youtube.com/watch?v=l_czDYXSfO8"
    }
];

// Carrega os vídeos na página
function loadVideos() {
    const videoGrid = document.querySelector('.video-grid');
    videos.forEach(video => {
        const videoCard = `
                    <div class="video-card">
                        <a href="${video.link}" target="_blank"><img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail"></a>
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