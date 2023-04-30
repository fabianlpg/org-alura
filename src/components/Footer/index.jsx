import "./Footer.css";

const Footer = () => {
    return <footer className="footer" style={{ backgroundImage: "url(/img/footer.png)"}}>
        <div className="redes">
            <a href='https://www.aluracursos.com/' target="_blank" rel="noreferrer"> 
                <img src="/img/facebook.png" alt="Facebook"/>
            </a>
            <a href='https://www.aluracursos.com/' target="_blank" rel="noreferrer"> 
                <img src="/img/twitter.png" alt="twitter" />
            </a>
            <a href='https://www.aluracursos.com/' target="_blank" rel="noreferrer"> 
                <img src="/img/instagram.png" alt="instagram" />
            </a>
        </div>
        <a href="/public/index.html" className="imgFooter">
            <img src='/img/Logo.png' alt='org' />    
        </a> 
        <strong>Desarrollado por Fabian</strong>
    </footer>
}

export default Footer;