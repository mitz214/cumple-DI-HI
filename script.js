const enterButton = document.getElementById("entrar");
const ticket = document.getElementById("ticket");
const hero = document.getElementById("inicio");
const welcome = document.getElementById("bienvenida");
const sparklesContainer = document.getElementById("sparkles");
const discoverMessagesButton = document.getElementById("descubrirMensajes");
const messagesSection = document.getElementById("mensajes");
const messageCard = document.getElementById("tarjetaMensaje");
const messageContent = document.getElementById("contenidoMensaje");
const messageNumber = document.getElementById("numeroMensaje");
const messageIcon = document.getElementById("iconoMensaje");
const messageLabel = document.getElementById("etiquetaMensaje");
const previousButton = document.getElementById("mensajeAnterior");
const nextButton = document.getElementById("mensajeSiguiente");
const currentMessageText = document.getElementById("mensajeActual");
const totalMessagesText = document.getElementById("totalMensajes");
const messagesProgress = document.getElementById("progresoMensajes");
const constellationButton = document.getElementById("continuarConstelacion");
const gallerySection = document.getElementById("galeria");
const photoFrame = document.getElementById("marcoFoto");
const albumPhoto = document.getElementById("fotoAlbum");
const photoPlaceholder = document.getElementById("fotoPendiente");
const photoNumber = document.getElementById("numeroFoto");
const photoCaption = document.getElementById("fraseFoto");
const previousPhotoButton = document.getElementById("fotoAnterior");
const nextPhotoButton = document.getElementById("fotoSiguiente");
const currentPhotoText = document.getElementById("fotoActual");
const totalPhotosText = document.getElementById("totalFotos");
const continueSurpriseButton = document.getElementById("continuarSorpresa");
const finalSection = document.getElementById("final");
const vaultButton = document.getElementById("abrirBoveda");
const finalLetter = document.getElementById("cartaFinal");
const finalActions = document.getElementById("accionesFinales");
const restartButton = document.getElementById("volverEmpezar");
const confettiLayer = document.getElementById("confeti");
const backgroundMusic = document.getElementById("musicaFondo");
const musicControl = document.getElementById("controlMusica");
const musicIcon = document.getElementById("iconoMusica");
const musicText = document.getElementById("textoMusica");

let musicFadeInterval;
let currentSong = 0;
let changingSong = false;

const playlist = [
    { src: "enchanted.mp3", title: "Enchanted" },
    { src: "daylight.mp3", title: "Daylight" },
    { src: "long-live.mp3", title: "Long Live" },
    { src: "new-years-day.mp3", title: "New Year's Day" }
];

// Reemplaza únicamente estos textos cuando recibas los mensajes definitivos.
const birthdayMessages = [
    {
        text: "¡Muchísimas felicidades, Liliiii! 🥳💖✨ Espero que hoy sea un día lleno de mucho amor, alegría, momentos bonitos y, sobre todo, que puedas disfrutar muchísimo al lado de todas las personas que te quieren. Te deseo de corazón que este nuevo año de vida venga acompañado de muchas bendiciones, salud, felicidad ,sueños cumplidos y más viajes junt@s🥳🥰",
        label: "ADRIA",
        icon: "✦"
    },
    {
        text: "Muchas felicidades hermanitaaaaaa!!!Espero te la pases de lo mejor,festejando y disfrutando de la vida que te lo mereces, gracias por ser la hermana que eres, espero poder festejar contigo muchos años más a tu lado, sabes que cuentas conmigo toda la vida,te quiero mucho❤️",
        label: "OSCAR",
        icon: "♡"
    },
    {
        text: "Muchas felicidades mi amor, a veces las palabras no pueden expresar realmente lo que uno siente, pero hoy quiero decirte lo importante que eres para mí, no solo por la fecha sino por todo lo que hemos pasado juntos, eres una de las personas más increíbles que conozco, fuerte, capaz, dedicada y empatica, te amo muchísimo, este es un cumpleaños más a tu lado, y será un día muy especial que podemos compartir nosotros y tus seres queridos, siempre estaré apoyándote en tus locuras y proyectos, por qué sé que cuando inicias algo siempre quieres dar lo mejor de ti y eso es un de las cosas que más amo de ti, eres una chingona jamás lo olvides, a pesar de que ya estás más haya de los 30, sigues siendo joven pero por dentro jaja, te amo muchísimo, muchas felicidades y que estés gozando un año más de vida.",
        label: "ISAAC",
        icon: "☾"
    },
    {
        text: "Que este nuevo año esté lleno de amor , salud, grandes aprendizajes y momentos muy felices. Sigue soñando, riendo y siendo siempre tu. Te quiero muchisimooo hija. Feliz cumpleaños 🎊🎂🎁 ",
        label: "PAPÁ",
        icon: "❋"
    },
    {
        text: "Mi preciosa y amada hija Lili: Desde lo más profundo de mi corazón quierro que sepas que, Estoy profundamente orgullosa de ti. Admiro tu fortaleza, como sigues adelante, como enfrentas la vida y como nunca te rindes pero lo que más admiro es ese gran corazón que tienes y tu gran deseo por lograr tus metas. Ser mi hija es la bendición más grande que Dios me dió. Tu existencia me recuerda cada día que vale la pena seguir. Deseo que sigas siendo muy feliz, que todos tus anhelos los hagas realidad, que sigas viajando y celebrando como tu sabes hacerlo, siempre acompañada de Dios. Sigue caminando confiando y demostrando de lo que eres capaz. Te amo con todo mi corazón.",
        label: "continua en la siguiente tarjeta...",
        icon: "☆"
    },
    {
        text: "Feliz Cumpleaños!!! a Tí. Mi cumpleañera favorita, mi compañera de vida, mi mejor compañia, mi guía estrella, mi mejor wedding, la mejor hermana e hija. P.D. Nunca olvides que mamá estará siempre para tí.",
        label: "Con Amor, Mamá",
        icon: "✧"
    }
];

let currentMessage = 0;

// Cuando recibas las fotos, colócalas junto a index.html y escribe aquí
// exactamente el nombre y la extensión de cada archivo.
const albumPhotos = [
    { src: "1.jpeg", caption: "Mi niña más querida, feliz cumpleaños." },
    { src: "2.jpeg", caption: "Con amor, siempre." },
    { src: "3.jpeg", caption: "Toda mi vida contigo." },
    { src: "4.jpeg", caption: "Con todo mi amor." },
    { src: "5.jpeg", caption: "Eres mi tesoro." },
    { src: "6.jpeg", caption: "Mi amor, mi vida." },
    { src: "7.jpeg", caption: "Eres la luz de mi vida." },
    { src: "8.jpeg", caption: "Mi corazón te lleva." },
    { src: "9.jpeg", caption: "Eres mi alegría." },
    { src: "10.jpeg", caption: "Gracias por convertir cada día en un recuerdo especial." },
    { src: "11.jpeg", caption: "Conmigo, cada momento se vuelve más bonito." },
    { src: "12.jpeg", caption: "Eres la razón de mi sonrisa." },
    { src: "13.jpeg", caption: "Siempre contigo, siempre en mi corazón." },
    { src: "14.jpeg", caption: "Te amo más de lo que las palabras pueden decir." },
    { src: "15.jpeg", caption: "Nuestro amor es el mejor regalo." },
    { src: "16.jpeg", caption: "Mi felicidad eres tú." },
    { src: "17.jpeg", caption: "Por siempre y para siempre, contigo." },
    { src: "18.jpeg", caption: "Te deseo un cumpleaños lleno de amor y alegría." },
];

let currentPhoto = 0;

function createSparkles(amount = 42) {
    const fragment = document.createDocumentFragment();

    for (let index = 0; index < amount; index += 1) {
        const sparkle = document.createElement("span");
        sparkle.className = "sparkle";
        sparkle.style.setProperty("--x", `${Math.random() * 100}%`);
        sparkle.style.setProperty("--y", `${Math.random() * 100}%`);
        sparkle.style.setProperty("--size", `${Math.random() * 2.5 + 1}px`);
        sparkle.style.setProperty("--duration", `${Math.random() * 3 + 2}s`);
        sparkle.style.setProperty("--delay", `${Math.random() * -5}s`);
        fragment.appendChild(sparkle);
    }

    sparklesContainer.appendChild(fragment);
}

function enterNewEra() {
    if (hero.classList.contains("is-leaving")) return;

    hero.classList.add("is-leaving");
    enterButton.disabled = true;
    startBackgroundMusic();

    window.setTimeout(() => {
        hero.hidden = true;
        welcome.hidden = false;
        welcome.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 650);
}

function startBackgroundMusic() {
    loadCurrentSong();
    backgroundMusic.volume = 0;

    const playPromise = backgroundMusic.play();
    if (!playPromise) return;

    playPromise
        .then(() => {
            musicControl.hidden = false;
            updateMusicControl(true);
            fadeMusicTo(0.55, 2200);
        })
        .catch(() => {
            // Si el archivo aún no existe, la página continúa funcionando.
            musicControl.hidden = true;
        });
}

function fadeMusicTo(targetVolume, duration) {
    window.clearInterval(musicFadeInterval);

    const initialVolume = backgroundMusic.volume;
    const steps = 30;
    const difference = targetVolume - initialVolume;
    let step = 0;

    musicFadeInterval = window.setInterval(() => {
        step += 1;
        backgroundMusic.volume = Math.min(1, Math.max(0, initialVolume + (difference * step) / steps));

        if (step >= steps) {
            window.clearInterval(musicFadeInterval);
        }
    }, duration / steps);
}

function updateMusicControl(isPlaying) {
    musicIcon.textContent = isPlaying ? "❚❚" : "▶";
    const action = isPlaying ? "Pausar" : "Reproducir";
    musicText.textContent = `${action} · ${playlist[currentSong].title}`;
    musicControl.setAttribute("aria-label", musicText.textContent);
}

function loadCurrentSong() {
    backgroundMusic.src = playlist[currentSong].src;
    backgroundMusic.load();
}

function playNextSong() {
    currentSong = (currentSong + 1) % playlist.length;
    loadCurrentSong();
    backgroundMusic.volume = 0;

    backgroundMusic.play()
        .then(() => {
            changingSong = false;
            updateMusicControl(true);
            fadeMusicTo(0.55, 1200);
        })
        .catch(() => {
            changingSong = false;
            updateMusicControl(false);
        });
}

function toggleMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play()
            .then(() => {
                fadeMusicTo(0.55, 700);
                updateMusicControl(true);
            })
            .catch(() => {});
        return;
    }

    fadeMusicTo(0, 500);
    window.setTimeout(() => {
        backgroundMusic.pause();
        updateMusicControl(false);
    }, 520);
}

backgroundMusic.addEventListener("timeupdate", () => {
    if (!backgroundMusic.duration || changingSong) return;

    const remainingTime = backgroundMusic.duration - backgroundMusic.currentTime;
    if (remainingTime <= 1.5 && !backgroundMusic.paused) {
        changingSong = true;
        fadeMusicTo(0, 1300);
    }
});

backgroundMusic.addEventListener("ended", playNextSong);

function showMessages() {
    welcome.hidden = true;
    messagesSection.hidden = false;
    renderMessage();
    messagesSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderMessage(animate = false) {
    const message = birthdayMessages[currentMessage];
    const updateContent = () => {
        messageContent.textContent = message.text;
        messageNumber.textContent = String(currentMessage + 1).padStart(2, "0");
        messageIcon.textContent = message.icon;
        messageLabel.textContent = message.label;
        currentMessageText.textContent = currentMessage + 1;
        totalMessagesText.textContent = birthdayMessages.length;
        messagesProgress.style.width = `${((currentMessage + 1) / birthdayMessages.length) * 100}%`;
        previousButton.disabled = currentMessage === 0;
        nextButton.hidden = currentMessage === birthdayMessages.length - 1;
        constellationButton.hidden = currentMessage !== birthdayMessages.length - 1;
    };

    if (!animate) {
        updateContent();
        return;
    }

    messageCard.classList.remove("is-changing");
    void messageCard.offsetWidth;
    messageCard.classList.add("is-changing");
    window.setTimeout(updateContent, 190);
}

function changeMessage(direction) {
    const nextIndex = currentMessage + direction;
    if (nextIndex < 0 || nextIndex >= birthdayMessages.length) return;

    currentMessage = nextIndex;
    renderMessage(true);
}

function showGallery() {
    messagesSection.hidden = true;
    gallerySection.hidden = false;
    renderPhoto();
    gallerySection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderPhoto(animate = false) {
    const photo = albumPhotos[currentPhoto];

    const updatePhoto = () => {
        const hasPhoto = Boolean(photo.src.trim());

        albumPhoto.hidden = !hasPhoto;
        photoPlaceholder.hidden = hasPhoto;

        if (hasPhoto) {
            albumPhoto.src = photo.src;
            albumPhoto.alt = `Recuerdo especial ${currentPhoto + 1}`;
        } else {
            albumPhoto.removeAttribute("src");
        }

        photoNumber.textContent = String(currentPhoto + 1).padStart(2, "0");
        photoCaption.textContent = photo.caption;
        currentPhotoText.textContent = currentPhoto + 1;
        totalPhotosText.textContent = albumPhotos.length;
        previousPhotoButton.disabled = currentPhoto === 0;
        nextPhotoButton.hidden = currentPhoto === albumPhotos.length - 1;
        continueSurpriseButton.hidden = currentPhoto !== albumPhotos.length - 1;
    };

    if (!animate) {
        updatePhoto();
        return;
    }

    photoFrame.classList.remove("is-changing");
    void photoFrame.offsetWidth;
    photoFrame.classList.add("is-changing");
    window.setTimeout(updatePhoto, 190);
}

function changePhoto(direction) {
    const nextIndex = currentPhoto + direction;
    if (nextIndex < 0 || nextIndex >= albumPhotos.length) return;

    currentPhoto = nextIndex;
    renderPhoto(true);
}

function showFinale() {
    gallerySection.hidden = true;
    finalSection.hidden = false;
    finalSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function createConfetti(amount = 110) {
    const colors = ["#dcbf7b", "#c77b9c", "#a78bca", "#fff8ee", "#8aa7c9"];
    const fragment = document.createDocumentFragment();

    for (let index = 0; index < amount; index += 1) {
        const piece = document.createElement("span");
        piece.className = "confetti-piece";
        piece.style.setProperty("--x", `${Math.random() * 100}%`);
        piece.style.setProperty("--width", `${Math.random() * 7 + 5}px`);
        piece.style.setProperty("--height", `${Math.random() * 12 + 7}px`);
        piece.style.setProperty("--color", colors[Math.floor(Math.random() * colors.length)]);
        piece.style.setProperty("--duration", `${Math.random() * 3 + 4}s`);
        piece.style.setProperty("--delay", `${Math.random() * 1.5}s`);
        piece.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
        piece.style.setProperty("--rotation", `${Math.random() * 900 - 450}deg`);
        fragment.appendChild(piece);
    }

    confettiLayer.replaceChildren(fragment);
}

function openVault() {
    if (vaultButton.classList.contains("is-opening")) return;

    vaultButton.setAttribute("aria-expanded", "true");
    vaultButton.classList.add("is-opening");

    window.setTimeout(() => {
        vaultButton.hidden = true;
        finalLetter.hidden = false;
        finalActions.hidden = false;
        createConfetti();
    }, 820);
}

enterButton.addEventListener("click", enterNewEra);
ticket.addEventListener("click", enterNewEra);
discoverMessagesButton.addEventListener("click", showMessages);
previousButton.addEventListener("click", () => changeMessage(-1));
nextButton.addEventListener("click", () => changeMessage(1));
constellationButton.addEventListener("click", showGallery);
previousPhotoButton.addEventListener("click", () => changePhoto(-1));
nextPhotoButton.addEventListener("click", () => changePhoto(1));
continueSurpriseButton.addEventListener("click", showFinale);
vaultButton.addEventListener("click", openVault);
restartButton.addEventListener("click", () => window.location.reload());
musicControl.addEventListener("click", toggleMusic);

createSparkles();
