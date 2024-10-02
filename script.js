// Função para carregar os materiais salvos do Local Storage
function loadMaterials() {
    // Recupera os materiais do Local Storage ou inicializa como array vazio
    const materials = JSON.parse(localStorage.getItem('materials')) || [];
    const materialList = document.getElementById('materialList');
    
    // Itera sobre cada material e cria um item de lista
    materials.forEach(material => {
        const listItem = document.createElement('li'); // Cria um novo elemento li
        // Define o HTML do item da lista com um link
        listItem.innerHTML = `<a href="${material.url}" target="_blank" rel="noopener noreferrer">${material.title}</a>`;
        materialList.appendChild(listItem); // Adiciona o item à lista
    });
}

// Adiciona evento ao formulário para salvar novos materiais
document.getElementById('materialForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    const title = document.getElementById('materialTitle').value; // Captura o título
    const url = document.getElementById('materialURL').value; // Captura a URL

    // Verifica se ambos os campos estão preenchidos
    if (title && url) {
        const newMaterial = { title, url }; // Cria um novo objeto material
        
        // Recupera materiais do Local Storage
        const materials = JSON.parse(localStorage.getItem('materials')) || [];
        
        // Adiciona o novo material ao array
        materials.push(newMaterial);
        
        // Salva novamente no Local Storage
        localStorage.setItem('materials', JSON.stringify(materials));
        
        // Adiciona o material à lista exibida
        const listItem = document.createElement('li'); // Cria um novo item li
        listItem.innerHTML = `<a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a>`;
        document.getElementById('materialList').appendChild(listItem); // Adiciona o item à lista
        
        // Limpa o formulário
        document.getElementById('materialForm').reset();
    }
});

// Função para rolar suavemente para a seção de materiais
function scrollToMaterials() {
    document.getElementById('materials').scrollIntoView({ behavior: 'smooth' }); // Rolagem suave para a seção
}

// Carrega os materiais quando a página for carregada
window.onload = loadMaterials; // Chama a função para carregar materiais na inicialização da página
