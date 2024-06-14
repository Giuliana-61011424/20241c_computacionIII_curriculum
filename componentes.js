class customheader extends HTMLElement{
    constructor( ){
        super( );
        console.log('llamando al constructor')
    }

    connectedCallback(){
        console.log('mostrandose en el html');
        this.render();
    }

    style(){
        this.innerHTML =
        `
        `;
    }

    render( ){
        this.innerHTML += ` 
        <header>
            <a class="nav-button" href="index.html" target="_self">Giuliana Belardo</a>
            <nav>
                <a class="nav-button" href="sobre-mi.html" target="_self">Sobre mí</a>

                <a class="nav-button" href="proyectos.html" target="_self">Proyectos</a>

                <a class="nav-button" href="#contacto" target="_self">Contacto</a>

                <a class="nav-button" href="" target="_self">ESP</a>
            </nav>
        </header>
        `
    }
}

customElements.define('custom-header', customheader)




class customfooter extends HTMLElement{
    constructor( ){
        super( );
        console.log('llamando al constructor')
    }

    connectedCallback(){
        console.log('mostrandose en el html');
        this.render();
    }

    style(){
        this.innerHTML =
        `
        `;
    }

    render( ){
        this.innerHTML += ` 
        <footer>
            <div id="contacto">
                <h2>Trabajemos juntos</h2>
                <form>
                    <input required type="text" id="fname" name="fname" placeholder="Nombre">
                    <input required type="email" id="email" name="email" placeholder="E-mail">
                    <textarea required id="message" name="message" placeholder="Hablame sobre tu proyecto" wrap="hard"></textarea>
                    <input class="primary-negative" type="submit" value="Enviar">
                </form>
            </div>
            <div class="social-media">
                <a href="mailto:giulianabelardo@gmail.com?subject=Consulta%20de%20diseño?body=¡Hola!%20Quiero%20pedir%20un%20presupuesto%20para%20un%20trabajo%20de..." target="_blank"><img src="img/icons/socials-gmail.svg" width="56px" height="56px" alt="Gmail"></a>

                <a href="https://api.whatsapp.com/send/?phone=%2B5491156972132&text&type=phone_number&app_absent=0" target="_blank"><img src="img/icons/socials-whatsapp.svg" width="56px" height="56px" alt="Whatsapp"></a>

                <a href="https://ar.linkedin.com/" target="_blank"><img src="img/icons/socials-linkedin.svg" width="56px" height="56px" alt="Linkedin"></a>

                <a href="https://www.behance.net" target="_blank"><img src="img/icons/socials-behance.svg" width="56px" height="56px" alt="Behance"></a>

                <a href="https://www.instagram.com/" target="_blank"><img src="img/icons/socials-instagram.svg" width="56px" height="56px" alt="Instagram"></a>
            </div>
            <div id="legals">
                <p class="body-small"> ©2024 Giuliana Belardo, All Rights Reserved</p>
                <div>
                    <a href="https://iconos8.es/" target="_blank"><p class="body-small">Icons by icons8.com</p></a>
                    <a href="https://www.freepik.es/video-gratis/fondo-degradado-morado-azul-verde-turquesa-movimiento-6_171562#fromView=resource_detail&position=1&from_element=related_resources" target="_blank"><p class="body-small">Vídeo de freepik</p></a>
                </div>
            </div>
        </footer>
        `
    }
}

customElements.define('custom-footer', customfooter)