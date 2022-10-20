const previous = document.querySelector('#previous');
const play = document.querySelector('#play');
const next = document.querySelector('#next');

const title = document.querySelector('#title');
const image = document.querySelector('#image');

const track = document.createElement('audio');

let index = 0;
let playingSong = false;

let songs = [{
        name: 'Seven',
        path: './songs/seven.mp3',
        image: './images/capa-folklore.png',
    },
    {
        name: 'Mood Ring',
        path: './songs/mood-ring.mp3',
        image: './images/capa-solar.png',
    },
    {
        name: 'Doin Time',
        path: './songs/doin-time.mp3',
        image: './images/LanaDelRey-TopAlbum.jpeg',
    },
    {
        name: 'Levitating',
        path: './songs/levitating.mp3',
        image: './images/future.png',
    },
    {
        name: 'Complicated',
        path: './songs/complicated.mp3',
        image: './images/letgo.png',
    }
];

function loadTrack(index) {
    track.src = songs[index].path;
    title.innerHTML = songs[index].name;
    image.src = songs[index].image;
    track.load();
}

loadTrack(index);

function playSong() {
    track.play();
    playingSong = true;
    play.innerHTML = '<i class="fas fa-pause"></i>';
}

function pauseSong() {
    track.pause();
    playingSong = false;
    play.innerHTML = '<i class="fas fa-play"></i>';
}

function nextSong() {
    if (index < songs.length - 1) {
        index += 1;
        loadTrack(index);
        playSong();
    } else {
        index = 0;
        loadTrack(index);
        playSong();

    }
}

function previousSong() {
    if (index > 0) {
        index -= 1;
        loadTrack(index);
        playSong();

    } else {
        index = songs.length;
        loadTrack(index);
        playSong();
    }
}

function justPlay() {
    if (playingSong == false) {
        playSong();

    } else {
        pauseSong();
    }
}