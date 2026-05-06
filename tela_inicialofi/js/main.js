// Inicializa Animações
AOS.init({ duration: 1000, once: true });

// Dados de Avaliações
const reviews = [
    { name: "Ana Clara", score: 5, comment: "O teste foi muito assertivo, mudou minha visão." },
    { name: "João Pedro", score: 4, comment: "Plataforma muito profissional, recomendo!" },
    { name: "Lucas Lima", score: 5, comment: "Interface incrível e fácil de usar." }
];

function calculateRating() {
    const total = reviews.length;
    const sum = reviews.reduce((acc, curr) => acc + curr.score, 0);
    const average = (sum / total).toFixed(1);

    document.getElementById('average-score').innerText = average;
    document.getElementById('total-reviews').innerText = total;

    // Renderizar estrelas da média
    document.getElementById('average-stars').innerHTML = generateStars(Math.round(average));

    // Renderizar lista de reviews
    const container = document.getElementById('reviews-container');
    container.innerHTML = reviews.map(r => `
        <div class="bg-white p-3 rounded-4 shadow-sm mb-3 border-start border-primary border-4">
            <div class="d-flex justify-content-between align-items-center">
                <span class="fw-bold text-dark-blue">${r.name}</span>
                <div class="stars-sm">${generateStars(r.score)}</div>
            </div>
            <p class="small text-muted mb-0 mt-1">"${r.comment}"</p>
        </div>
    `).join('');
}

function generateStars(n) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        html += i <= n ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
    }
    return html;
}

// Inicializa ao carregar
window.onload = calculateRating;