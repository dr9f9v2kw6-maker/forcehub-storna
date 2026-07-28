function copyIP() {
    const ip = "ForeHub.pl";

    navigator.clipboard.writeText(ip).then(() => {
        alert("✅ IP serwera zostało skopiowane: " + ip);
    }).catch(() => {
        alert("Skopiuj ręcznie: " + ip);
    });
}

// Animacja pojawiania się kart
window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {
            card.style.transition = "0.6s";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 150);
    });
});
