import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
    width: 100%;
    box-sizing: border-box;
`

const NavContainer = styled.nav`
    display: flex;
    align-items: center;
`
const NavList = styled.ul<{ $isOpen?: boolean;}>`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    align-items: center;
    padding: 0 2rem;

    @media screen and (max-width: 768px){
        display: ${props => (props.$isOpen ? "flex" : "none")};
        position: absolute;
        top: 3rem;
        right: 0px;
        flex-direction: column;
        font-size: 2rem;
        width: 100%;
        padding: 1rem;
        background-color: #1f2028;
    }
`

const NavListItem = styled.li`
    margin: 0 1rem;
    list-style: none;
    position: relative;
    
    &:hover{
        ::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -3px;
            display: block;
            background-color:white;
            width: 100%;
            height:3px;
        }
        cursor: pointer;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

const Title = styled.h1`
`

const ButtonMenu = styled.div`
    display: none;
    position: absolute;
    border: none;
    background-color: transparent;
    right: 20px;
    @media screen and (max-width: 768px){
        display: block;
    }
    &:hover{cursor:pointer};
`

export default function Header() {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    function handleOpenMenu() {
        setIsOpen(!isOpen);
    };

    return(
        <HeaderContainer>
            <NavContainer>
                <Title><StyledLink to="/">Nicolas G. Pereira</StyledLink></Title>
                <ButtonMenu onClick={()=>handleOpenMenu()}>
                    {isOpen ?<MdClose style={{width:'3rem', height:'3rem'}}/> : <MdMenu style={{width:'3rem', height:'3rem'}} />}
                </ButtonMenu>
                <NavList $isOpen={isOpen}>
                    {/* <NavListItem><StyledLink to="/about">Sobre</StyledLink></NavListItem> */}
                    <NavListItem><StyledLink to="/projects">Projetos</StyledLink></NavListItem>
                    <NavListItem><StyledLink to="/blog">Blog</StyledLink></NavListItem>
                    <NavListItem><StyledLink to="/admin">Admin</StyledLink></NavListItem>
                    {/* <NavListItem><StyledLink to="/contact">Contato</StyledLink></NavListItem> */}
                </NavList>
            </NavContainer>
        </HeaderContainer>
    )
}