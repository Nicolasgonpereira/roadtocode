import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 32px 0 0;
`
const ButtonLink = styled.button`
    font-size: 32px;
    padding: 0;
    border: none;
    margin: 0 1rem 0 1rem;
`

export default function Footer() {
    return(
        <footer>
            <FooterContainer>
                <h2>Contatos</h2>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <ButtonLink as={Link} to="https://github.com/Nicolasgonpereira">
                        <FaGithub />
                    </ButtonLink>
                    <ButtonLink as={Link} to="https://www.linkedin.com/in/nicolasgoncalvespereira">
                        <FaLinkedin />
                    </ButtonLink>
                    <ButtonLink as={Link} to="mailto:nicolasgp.ec@gmail.com">
                        <CiMail />
                    </ButtonLink>
                </div>
                <div style={{display:'flex', width:'60%', justifyContent:'center'}}>
                    <p>Desenvolvedor front-end apaixonado por criar interfaces modernas e funcionais.</p>
                </div>
                <p style={{margin:'0', color:"#6b6b6b"}}>
                    © 2024 Nicolas Gonçalves Pereira. Todos os direitos reservados.
                </p>
            </FooterContainer>
        </footer>
    )
}