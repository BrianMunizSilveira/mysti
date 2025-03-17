// Simula os dados dos vídeos
const videos = [
    {
        title: "Five Nights at Freddy’s Pela Primeira Vez — Mysti",
        thumbnail: "https://i.ytimg.com/vi/-v1A8nZPus0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCyVcuvqCxCquFUYwOMf1410JjDEA",
        description: "Se quiserem mais FNAF, trago para vocês!",
        link: "https://www.youtube.com/watch?v=-v1A8nZPus0"
    },
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

// Função para buscar vídeos do canal
async function fetchVideos() {
    const apiKey = 'AIzaSyDk6X0KW0Jpx7bMIwfyBfo9n7b0pEcj8Vo';
    const channelId = 'UCZI8ehZkyxWwiOQv3pZ-RAw'; // Substitua pelo ID do canal
    const maxResults = 6; // Número de vídeos a serem exibidos

    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.items; // Retorna a lista de vídeos
    } catch (error) {
        console.error('Erro ao buscar vídeos:', error);
        return [];
    }
}

// Função para exibir os vídeos na página
async function loadVideos() {
    const videos = await fetchVideos();
    const videoGrid = document.querySelector('.video-grid');

    if (videos.length === 0) {
        videoGrid.innerHTML = '<p>Nenhum vídeo encontrado.</p>';
        return;
    }

    videos.forEach(video => {
        const videoCard = `
            <div class="video-card">
                <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.title}" class="video-thumbnail">
                </a>
                <div class="video-info">
                    <h3 class="video-title">${video.snippet.title}</h3>
                    <p>${video.snippet.description}</p>
                    <br />
                    <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank" class="video-link">Assistir</a>
                </div>
            </div>
        `;
        videoGrid.innerHTML += videoCard;
    });
}

// Carrega os vídeos quando a página carregar
window.addEventListener('load', loadVideos);

// Carrega os vídeos quando a página carregar
window.addEventListener('load', loadVideos);