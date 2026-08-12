// ========================================
// MENU MOBILE
// ========================================

// Seleciona o botão do menu
const menuBtn = document.querySelector(".menu-btn");

// Seleciona o menu
const menu = document.querySelector(".menu");

// Quando clicar no botão
menuBtn.addEventListener("click", () => {

    // Adiciona ou remove a classe "ativo"
    menu.classList.toggle("ativo");

});