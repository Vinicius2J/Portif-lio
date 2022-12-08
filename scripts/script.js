


function homeAtv() {
    document.getElementById('corpo-principal').style.display = 'flex';
    document.getElementById('projetos').style.display = 'none';
    document.getElementById('redes-sociais').style.display = ('none');
};

function servicesAtv() {
    document.getElementById('corpo-principal').style.display = 'none';
    document.getElementById('projetos').style.display = 'flex';
    document.getElementById('redes-sociais').style.display = ('none');
};

function contactAtv() {
    document.getElementById('corpo-principal').style.display = 'none';
    document.getElementById('projetos').style.display = 'none';
    document.getElementById('redes-sociais').style.display = ('flex');
};