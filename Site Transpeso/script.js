// Animação Morph
const imagens = [
  "src/img-hero/hero.jpeg",
  "src/img-hero/hero1.jpg",
  "src/img-hero/hero2.jpg",
  "src/img-hero/hero3.jpeg"
];
let current = 0;
const img1 = document.querySelector('.hero-img-1');
const img2 = document.querySelector('.hero-img-2');
let showingFirst = true;

setInterval(() => {
  const next = (current + 1) % imagens.length;
  if (showingFirst) {
    img2.src = imagens[next];
    img2.style.opacity = 1;
    img1.style.opacity = 0;
  } else {
    img1.src = imagens[next];
    img1.style.opacity = 1;
    img2.style.opacity = 0;
  }
  showingFirst = !showingFirst;
  current = next;
}, 6000);


// --- JAVASCRIPT PARA LÓGICA DO MODAL DE SERVIÇOS ---


const serviceModal = document.getElementById('modal-serv-open'); 
const modalOverlay = document.getElementById('modal-overlay'); 
const closeButton = document.getElementById('btn-modal-close'); 
const modalImage = serviceModal.querySelector('.modal-img img'); 
const modalTitle = document.getElementById('modal-title'); 
const modalDescription = document.getElementById('modal-description'); 
const modalDetails = document.getElementById('modal-details'); 

const serviceCards = document.querySelectorAll('.service-card');


function openServiceModal(title, description, imageUrl, detailsHtml) {
    modalTitle.textContent = title;
    modalDescription.textContent = description; 
    modalImage.src = imageUrl; 
    modalDetails.innerHTML = detailsHtml; 
    serviceModal.style.display = 'flex'; 
    modalOverlay.style.display = 'block'; 
    document.body.style.overflow = 'hidden'; 
}

function closeServiceModal() {
    serviceModal.style.display = 'none'; 
    modalOverlay.style.display = 'none'; 
    document.body.style.overflow = '';
}


serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.dataset.title || 'Título Padrão';
        const description = card.dataset.description || 'Descrição padrão do serviço.';
        const imageUrl = card.dataset.image || 'https://placehold.co/800x450/A0AEC0/FFFFFF?text=Servico';
        const details = card.dataset.details || '';


        openServiceModal(title, description, imageUrl, details);
    });
});

let btn_modal_orc = document.getElementById('btn-modal-orcamento');

btn_modal_orc.addEventListener('click', closeServiceModal)
closeButton.addEventListener('click', closeServiceModal);


modalOverlay.addEventListener('click', closeServiceModal);


document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && serviceModal.style.display === 'flex') {
        closeServiceModal();
    }
});

//

const frotamodal = document.getElementById('frota-modal-open'); 
const frotamodalOverlay = document.getElementById('frota-overlay'); 
const frotacloseButton = document.getElementById('btn-frota-close'); 
const frotamodalImage = document.getElementById('frota-modal-image');
const frotamodalTitle = document.getElementById('frota-modal-title'); 
const frotamodalDescription = document.getElementById('frota-modal-description'); 
const frotamodalDetails = document.getElementById('frota-modal-details'); 

const frotaCards = document.querySelectorAll('.frota-item');


function openFrotaModal(title, description, imageUrl, detailsHtml) {
    frotamodalTitle.textContent = title;
    frotamodalDescription.textContent = description; 
    frotamodalImage.src = imageUrl; 
    frotamodalDetails.innerHTML = detailsHtml; 
    frotamodal.style.display = 'flex'; 
    frotamodalOverlay.style.display = 'block'; 
    document.body.style.overflow = 'hidden'; 
}

function closeFrotaModal() {
    frotamodal.style.display = 'none'; 
    frotamodalOverlay.style.display = 'none'; 
    document.body.style.overflow = '';
}


frotaCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.dataset.title || 'Título Padrão';
        const description = card.dataset.description || 'Descrição padrão do serviço.';
        const imageUrl = card.dataset.image || 'https://placehold.co/800x450/A0AEC0/FFFFFF?text=Servico';
        const details = card.dataset.details || '';


        openFrotaModal(title, description, imageUrl, details);
    });
});

let btn_frota_orc = document.getElementById('btn-frota-orcamento');

btn_frota_orc.addEventListener('click', closeFrotaModal)
frotacloseButton.addEventListener('click', closeFrotaModal);


frotamodalOverlay.addEventListener('click', closeFrotaModal);


document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && frotamodal.style.display === 'flex') {
        closeFrotaModal();
    }
});