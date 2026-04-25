const movies = [
    { id: 25, title: "Minnal Murali", genre: "Sci-Fi", rating: 4.8, image: "Posters/Minnal Murali 2.jpg", desc: "A village tailor gains extraordinary powers after a lightning strike." },
    { id: 7, title: "LEO", genre: "Action", rating: 4.9, image: "Posters/LEO.PNG", desc: "A cafe owner's quiet life is shattered by his mysterious past." },
    { id: 43, title: "Sita Ramam", genre: "Romance", rating: 4.9, image: "Posters/Seetha Ramam.jpg", desc: "An orphaned soldier's life changes after receiving a letter from Sita." },
    { id: 13, title: "Demonte Colony 2", genre: "Horror", rating: 4.8, image: "Posters/Demonte colony 2.webp", desc: "The darkness returns with more mystery and haunting secrets." },
    { id: 47, title: "Doctor", genre: "Comedy", rating: 4.9, image: "Posters/Doctor.jpg", desc: "A stoic military doctor takes on a kidnapping ring with a quirky team." },
    { id: 23, title: "Intru Netru Naalai", genre: "Sci-Fi", rating: 4.9, image: "Posters/Indru netru naalai.webp", desc: "Two friends discover a time machine and start changing their future." },
    { id: 20, title: "Ambuli", genre: "Horror", rating: 4.5, image: "Posters/Ambuli.jpg", desc: "A mystery set in a cornfield involving an ancient legend." },
    { id: 10, title: "Vikram", genre: "Action", rating: 4.7, image: "Posters/Vikram.jpg", desc: "A black-ops squad on a mission to track down a mysterious killer." },
    { id: 36, title: "Thiruchitrambalam", genre: "Romance", rating: 4.5, image: "Posters/Thiruchitrambalam.jpg", desc: "A simple delivery man navigates life, friendship, and family bonds." },
    { id: 27, title: "24", genre: "Sci-Fi", rating: 4.9, image: "Posters/24.jpg", desc: "A watchmaker finds a device that can control time across three decades." },
    { id: 15, title: "Sabdham", genre: "Horror", rating: 4.9, image: "Posters/Sabdham.jpg", desc: "A chilling tale where sound becomes the biggest enemy." },
    { id: 49, title: "Comali", genre: "Comedy", rating: 4.8, image: "Posters/Comali.jpg", desc: "A man wakes up from a 16-year coma and struggles with the modern world." },
    { id: 12, title: "Kaithi", genre: "Action", rating: 4.5, image: "Posters/Kaithi.jpg", desc: "A prisoner on parole fights to save police officers for his daughter." },
    { id: 22, title: "Pizza", genre: "Horror", rating: 4.7, image: "Posters/Pizza.jpg", desc: "A pizza delivery boy's life turns into a nightmare in a haunted house." },
    { id: 31, title: "Mark Antany", genre: "Sci-Fi", rating: 4.9, image: "Posters/Mark Antany.webp", desc: "A telephone that can call the past leads to chaotic gangster drama." },
    { id: 1, title: "Madharasi", genre: "Action", rating: 4.8, image: "Posters/Madharasi.jpg", desc: "A raw and gritty action saga set in North Chennai." },
    { id: 42, title: "Hi Nanna", genre: "Romance", rating: 4.7, image: "Posters/Hi Nanna.jpg", desc: "An emotional journey of a father and his young daughter." },
    { id: 26, title: "Raja Saab", genre: "Horror", rating: 4.7, image: "Posters/Raja Saab.jpg", desc: "A royal horror story with spine-chilling thrills." },
    { id: 5, title: "Bison", genre: "Action", rating: 4.8, image: "Posters/Bison.jpg", desc: "Strength meets struggle in this intense action drama." },
    { id: 39, title: "Youth", genre: "Romance", rating: 4.9, image: "Posters/Youth.jpg", desc: "A young man finds himself and his love in the city." },
    { id: 11, title: "DD Next Level", genre: "Horror", rating: 4.9, image: "Posters/DD Next Level.jpg", desc: "A group faces terrifying entities in a high-stakes survival." },
    { id: 50, title: "Naanu Rowdy Thaan", genre: "Comedy", rating: 4.7, image: "Posters/Naanu Rowdy thaan.jpg", desc: "A wannabe rowdy falls for a hearing-impaired girl." },
    { id: 28, title: "2.0", genre: "Sci-Fi", rating: 4.5, image: "Posters/2.0.webp", desc: "Chitti returns to fight a powerful entity threatening the world." },
    { id: 33, title: "Tamilukku En ontrai aluthavum", genre: "Sci-Fi", rating: 4.8, image: "Posters/Tamiluku En Ondrai Aluthavum.jpg", desc: "A solar flare cuts off mobile signals during a bomb threat." },
    { id: 4, title: "Kaanthara", genre: "Action", rating: 4.5, image: "Posters/Kaanthara.jpg", desc: "A conflict between humanity and nature rooted in local folklore." },
    { id: 18, title: "UTurn", genre: "Horror", rating: 4.7, image: "Posters/Uturn.jpg", desc: "Accidents at a flyover lead to a mysterious investigation." },
    { id: 35, title: "Sirai", genre: "Romance", rating: 4.9, image: "Posters/Sirai.jpg", desc: "Love blooming in the most restrictive of circumstances." },
    { id: 9, title: "Amaran", genre: "Action", rating: 4.8, image: "Posters/Amaran.jpg", desc: "A heroic tale of bravery and sacrifice on the battlefield." },
    { id: 45, title: "Kadhalum Kandadhu Pogum", genre: "Comedy", rating: 4.8, image: "Posters/Kadhalum Kandadhu Pogum.jpg", desc: "A quirky relationship between a gangster and a corporate girl." },
    { id: 21, title: "kaashmora", genre: "Horror", rating: 4.8, image: "Posters/kaashmora.jpg", desc: "A con artist gets trapped in a real haunted palace with a dark king." },
    { id: 3, title: "Cooli", genre: "Action", rating: 4.9, image: "Posters/Cooli.jpg", desc: "An action-packed mission involving underworld smuggling." },
    { id: 48, title: "Dude", genre: "Comedy", rating: 4.5, image: "Posters/Dude.jpg", desc: "A lighthearted look at modern life and comic friendships." },
    { id: 30, title: "7am Arivu", genre: "Sci-Fi", rating: 4.7, image: "Posters/7am Arivu.jpg", desc: "A medical student tries to revive the genes of an ancient warrior." },
    { id: 16, title: "Aranmanai 4", genre: "Horror", rating: 4.5, image: "Posters/Aranmanai 4.jpg", desc: "The haunted palace returns with more comedy and scares." },
    { id: 37, title: "LIK", genre: "Romance", rating: 4.8, image: "Posters/LIK.jpg", desc: "A modern urban tale about Love, Insurance, and Kindness." },
    { id: 8, title: "Kappan", genre: "Action", rating: 4.5, image: "Posters/Kappan.jpg", desc: "An NSG agent must protect the Prime Minister from threats." },
    { id: 40, title: "Remo", genre: "Romance", rating: 4.5, image: "Posters/Remo.jpg", desc: "A struggling actor disguises as a nurse to win his lady love." },
    { id: 2, title: "Retro", genre: "Action", rating: 4.7, image: "Posters/Retro.jpg", desc: "Old-school justice meets modern-day action." },
    { id: 46, title: "Sixer", genre: "Comedy", rating: 4.7, image: "Posters/Sixer.jpg", desc: "A man with night blindness faces hilarious struggles in daily life." },
    { id: 29, title: "Maatran", genre: "Sci-Fi", rating: 4.8, image: "Posters/Maattrraan.jpg", desc: "Conjoined twins must uncover a massive genetic conspiracy." },
    { id: 41, title: "Don", genre: "Romance", rating: 4.8, image: "Posters/Don.jpg", desc: "A student searches for his talent while falling in love." },
    { id: 14, title: "House Mates ", genre: "Horror", rating: 4.7, image: "Posters/House Mates.jpg", desc: "A group of roommates discover their house is not empty." },
    { id: 34, title: "Thalaivan thalivi", genre: "Romance", rating: 4.7, image: "Posters/Thalaivan Thalaivi.jpg", desc: "A romantic drama exploring the bond between two leaders." },
    { id: 6, title: "Jana Nayagan", genre: "Romance", rating: 4.7, image: "Posters/Jana nayagan.jpg", desc: "Politics and passion collide in this love story." },
    { id: 32, title: "Ra-One", genre: "Sci-Fi", rating: 4.5, image: "Posters/Ra-One.jpg", desc: "A virtual world villain enters the real world to hunt the creator's son." },
    { id: 44, title: "Geetha Govintham", genre: "Romance", rating: 4.5, image: "Posters/Geetha Govintham.jpg", desc: "A comedy of errors leads to an unexpected romantic journey." },
    { id: 19, title: "Connect", genre: "Horror", rating: 4.9, image: "Posters/Connect.jpg", desc: "An exorcism that takes place entirely over a video call." },
    { id: 24, title: "Lokah", genre: "Sci-Fi", rating: 4.5, image: "Posters/Lokah.jpg", desc: "Exploring the deep mysteries of space and parallel life." },
    { id: 17, title: "Katteri", genre: "Horror", rating: 4.8, image: "Posters/Kaatteri.jpg", desc: "A forest-based horror comedy with plenty of twists." },
    { id: 38, title: "With Love", genre: "Romance", rating: 4.7, image: "Posters/With Love.jpg", desc: "Heartfelt emotions and the power of love in everyday life." }
];

function displayMovies(list, targetId) {
    const grid = document.getElementById(targetId);
    if (!grid) return;
    
    grid.innerHTML = "";
    const fragment = document.createDocumentFragment();

    list.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.onclick = () => showDetails(movie.title);
        
        card.innerHTML = `
            <img src="${movie.image}" loading="lazy" onerror="this.src='https://via.placeholder.com/220x330?text=Poster'">
            <div class="movie-info">
                <h4>${movie.title}</h4>
                <p>${movie.genre} | ⭐ ${movie.rating}</p>
            </div>
        `;
        fragment.appendChild(card);
    });
    grid.appendChild(fragment);
}

function showDetails(title) {
    const movie = movies.find(m => m.title === title);
    
    document.getElementById("homeView").style.display = "none";
    document.getElementById("detailsView").style.display = "block";
    
    const content = document.getElementById("selectedMovieContent");
    content.innerHTML = `
        <img src="${movie.image}" class="details-img">
        <div class="info">
            <h1 style="font-size: 3rem; margin: 0;">${movie.title}</h1>
            <p style="color: #E50914; font-size: 1.2rem;">${movie.genre} | ⭐ ${movie.rating}</p>
            <p style="max-width: 600px; line-height: 1.6; color: #ccc;">${movie.desc}</p>
        </div>
    `;

    // Recommendation: அதே ஜானர் படங்கள் (தற்போது பார்ப்பது தவிர)
    const reco = movies.filter(m => m.genre === movie.genre && m.title !== movie.title);
    displayMovies(reco.slice(0, 10), "recoList"); 
    window.scrollTo(0, 0);
}

function goBack() {
    document.getElementById("homeView").style.display = "block";
    document.getElementById("detailsView").style.display = "none";
    window.scrollTo(0, 0);
}

function searchMovie() {
    const term = document.getElementById("searchInput").value.toLowerCase();
    const filtered = movies.filter(m => m.title.toLowerCase().includes(term));
    displayMovies(filtered, "movieGrid");
}

// Initial Load
window.onload = () => displayMovies(movies, "movieGrid");