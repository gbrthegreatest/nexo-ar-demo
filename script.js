/*
  PERSONALIZAÇÃO DA LANDING PAGE — NEXO AR
  1. Troque o número abaixo pelo WhatsApp da empresa, com DDI + DDD + número.
     Exemplo fictício: '5541999999999'. Não use o sinal +, espaços ou traços.
  2. Cole a URL completa do Perfil da Empresa no Google, caso exista.
  3. Mantenha os campos vazios durante a demonstração. Os botões mostrarão
     um aviso, evitando enviar mensagens para números que não são seus.
*/
const CONFIG = {
  whatsappNumber: '5541984454299',
  whatsappMessage: 'Olá! Encontrei o site da Nexo Ar e gostaria de solicitar um orçamento.',
  googleBusinessUrl: ''
};

const whatsappAnchors = document.querySelectorAll('[data-whatsapp]');
const serviceButtons = document.querySelectorAll('[data-service]');
const serviceStatus = document.querySelector('#selected-service');
const googleLink = document.querySelector('#google-link');
const dialog = document.querySelector('#setup-dialog');
const dialogMessage = document.querySelector('#dialog-message');
let selectedService = '';

function showNotice(message) {
  dialogMessage.textContent = message;
  if (dialog && typeof dialog.showModal === 'function') dialog.showModal();
  else window.alert(message);
}

const phone = String(CONFIG.whatsappNumber || '').replace(/\D/g, '');
const validPhone = /^55\d{10,11}$/.test(phone);

function whatsappUrl() {
  const extra = selectedService ? ` Tenho interesse no serviço de ${selectedService.toLowerCase()}.` : '';
  return `https://wa.me/${phone}?text=${encodeURIComponent(CONFIG.whatsappMessage + extra)}`;
}

function updateWhatsAppLinks() {
  whatsappAnchors.forEach(link => {
    link.href = validPhone ? whatsappUrl() : '#';
    if (validPhone) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });
}

whatsappAnchors.forEach(link => {
  link.addEventListener('click', event => {
    if (!validPhone) {
      event.preventDefault();
      showNotice('WhatsApp ainda não configurado. Abra o arquivo script.js e preencha whatsappNumber com DDI 55 + DDD + número.');
    }
  });
});

serviceButtons.forEach(button => {
  button.addEventListener('click', () => {
    const sameService = selectedService === button.dataset.service;
    selectedService = sameService ? '' : button.dataset.service;
    serviceButtons.forEach(item => item.setAttribute('aria-pressed', String(item.dataset.service === selectedService)));
    serviceStatus.textContent = selectedService
      ? `Serviço selecionado: ${selectedService}. Clique em “Conversar no WhatsApp”.`
      : 'Selecione um serviço acima para personalizar sua mensagem.';
    updateWhatsAppLinks();
  });
});

if (googleLink) {
  const googleUrl = String(CONFIG.googleBusinessUrl || '').trim();
  if (/^https:\/\//i.test(googleUrl)) {
    googleLink.href = googleUrl;
    googleLink.target = '_blank';
    googleLink.rel = 'noopener noreferrer';
  } else {
    googleLink.addEventListener('click', event => {
      event.preventDefault();
      showNotice('O perfil no Google ainda não foi configurado. Abra script.js e preencha googleBusinessUrl com a URL real do perfil da empresa.');
    });
  }
}

const closeDialog = () => { if (dialog && dialog.open) dialog.close(); };
document.querySelector('#dialog-close')?.addEventListener('click', closeDialog);
document.querySelector('#dialog-ok')?.addEventListener('click', closeDialog);
dialog?.addEventListener('click', event => { if (event.target === dialog) closeDialog(); });
updateWhatsAppLinks();
