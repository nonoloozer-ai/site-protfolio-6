document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            var id = this.getAttribute('href');
            if (id.length < 2) return;
            var alvo = document.querySelector(id);
            if (alvo) {
                e.preventDefault();
                alvo.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Ano atual no rodapé
    var ano = document.getElementById('ano');
    if (ano) ano.textContent = new Date().getFullYear();

    // Formulário de contato: abre o app de email com a mensagem pronta
    // Troque o email abaixo pelo seu
    var EMAIL_DESTINO = 'seuemail@exemplo.com';
    var form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var d = new FormData(form);
            var assunto = 'Contato pelo portfólio: ' + d.get('assunto');
            var corpo = 'Nome: ' + d.get('nome') + '\n' +
                        'Email: ' + d.get('email') + '\n\n' +
                        d.get('mensagem');
            window.location.href = 'mailto:' + EMAIL_DESTINO +
                '?subject=' + encodeURIComponent(assunto) +
                '&body=' + encodeURIComponent(corpo);
        });
    }
});
