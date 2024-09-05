import styled from "styled-components"

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin: 0 16px;
    justify-content: center;
    width: 60px;
`

const IMG = styled.img`
    width: 40px;
    height: 40px;
`


export default function HardSkillCard({tech}:{tech:string}){
    return(
        <Container>
            <IMG src={`/assets/techs/${tech}.svg`} alt={`Logo do ${tech}`} />
            <p style={{margin:'8px 0'}}>{tech}</p>
        </Container>
    )
}