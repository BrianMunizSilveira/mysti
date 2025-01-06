class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        // Selecionando elementos do DOM
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        // Vinculando o contexto do 'this' aos métodos
        this.handleClick = this.handleClick.bind(this);
        this.closeMenuOnResize = this.closeMenuOnResize.bind(this);
        this.closeMenuOnLinkClick = this.closeMenuOnLinkClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            // Se já existe uma animação, remove. Caso contrário, adiciona
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                // Calcula o delay da animação baseado no índice do link
                const delay = index / 7 + 0.3;
                link.style.animation = `navLinkFade 0.5s ease forwards ${delay}s`;
            }
        });
    }

    handleClick() {
        // Toggle das classes active
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();

        // Adiciona/remove scroll bloqueado no body quando menu está aberto
        document.body.style.overflow = this.navList.classList.contains(this.activeClass)
            ? 'hidden'
            : 'initial';
    }

    closeMenuOnResize() {
        // Fecha o menu se a tela for redimensionada além do breakpoint mobile
        if (window.innerWidth > 768) {
            this.navList.classList.remove(this.activeClass);
            this.mobileMenu.classList.remove(this.activeClass);
            document.body.style.overflow = 'initial';

            // Remove as animações dos links
            this.navLinks.forEach(link => {
                link.style.animation = "";
            });
        }
    }

    closeMenuOnLinkClick() {
        // Fecha o menu quando um link é clicado
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.navList.classList.remove(this.activeClass);
                this.mobileMenu.classList.remove(this.activeClass);
                document.body.style.overflow = 'initial';
            });
        });
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
        window.addEventListener('resize', this.closeMenuOnResize);
        this.closeMenuOnLinkClick();
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);
mobileNavbar.init();