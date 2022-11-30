


function homeAtv() {
    document.getElementById('home-atv').src="../images/Home-Ativado.png";
    document.getElementById('services-atv').src="../images/Services-Black.png";
    document.getElementById('contact-atv').src="../images/contact-black.png";

    document.getElementById('corpo-principal').style.display = 'flex';
    document.getElementById('projetos').style.display = 'none';
    document.getElementById('redes-sociais').style.display = ('none');
};

function servicesAtv() {
    document.getElementById('home-atv').src="../images/Home-Black.png";
    document.getElementById('services-atv').src="../images/services-ativado.png";
    document.getElementById('contact-atv').src="../images/contact-black.png";

    document.getElementById('corpo-principal').style.display = 'none';
    document.getElementById('projetos').style.display = 'flex';
    document.getElementById('redes-sociais').style.display = ('none');
};

function contactAtv() {
    document.getElementById('home-atv').src="../images/Home-Black.png";
    document.getElementById('services-atv').src="../images/Services-Black.png";
    document.getElementById('contact-atv').src="../images/contact-ativado.png";

    document.getElementById('corpo-principal').style.display = 'none';
    document.getElementById('projetos').style.display = 'none';
    document.getElementById('redes-sociais').style.display = ('flex');
};