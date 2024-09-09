import { Link } from "react-router-dom";
import styled from "styled-components";

const HeroSectionContainer = styled.section`
    display: flex;
    flex-direction: roW-reverse;
    width: 100%;
    margin: 60px 0 0;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

const ImgContainer = styled.img`
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 32px;
`

const InfoContainer = styled.div`
    width: 40%;
    max-width: 400px;
    margin: 0 2rem 0 0;

    @media screen and (max-width:768px){
        width: 100%;
        margin: 0;
    }
`

const Title = styled.h2`
    font-size: 1.75rem;
    font-weight: 400;
    text-align: justify;
`

const ButtonContained = styled.button`
    background-color: #fff;
    color: #1f2028;
    border: none;
    border-radius: 1rem;
    height: 2rem;
    font-size: 1.25rem;
    font-weight: 600;
    padding: 1rem;
    text-decoration: none;
    display: flex;
    align-items: center;
`

const ButtonOutline = styled.button`
    background-color: transparent;
    color: #fff;
    border: none;
    border-radius: 1rem;
    height: 2rem;
    font-size: 1.25rem;
    font-weight: 600;
    padding: 1rem;
    text-align: center;
    display: flex;
    align-items: center;
    text-decoration: none;
    &:hover{
        background-color: #fff;
        color: #1f2028;
    };
`

export default function HeroSection() {
    return(
        <HeroSectionContainer>
            <ImgContainer src={'/herosection.jpg'} alt="Foto de Nicolas Gonçalves Pereira" />
            <InfoContainer>
                <Title>
                    Engenheiro civil de formação, migrei para o desenvolvimento de software com foco em front-end. Atualmente cursando Análise e Desenvolvimento de Sistemas. Estou sempre aprendendo e buscando aplicar novas tecnologias e soluções inovadoras.
                </Title>
                <div style={{display:'flex', justifyContent:'space-between', padding:'0'}}>
                    <ButtonContained as={Link} to={"/projects"}>Ver os projetos</ButtonContained>
                    <ButtonOutline as={Link} to={"/blog"} >Ler o blog</ButtonOutline>
                </div>
            </InfoContainer>
        </HeroSectionContainer>
    )
}

