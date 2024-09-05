import styled from "styled-components"
import HardSkillCard from "../../components/HardSkillCard"

const SkillSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin: 2rem;
    align-items: center;
`


export default function SkillsSection() {
    return(
        <SkillSectionContainer>
            <h2>Habilidades</h2>
            <div style={{display:'flex', alignItems:'center'}}>
                    <HardSkillCard tech={"HTML"} />
                    <HardSkillCard tech={"CSS"} />
                    <HardSkillCard tech={"Git"} />
                    <HardSkillCard tech={"GitHub"} />
                    <HardSkillCard tech={"JavaScript"} />
                    <HardSkillCard tech={"TypeScript"} />
                    <HardSkillCard tech={"React"} />
                    <HardSkillCard tech={"NodeJS"} />
                    <HardSkillCard tech={"NextJS"} />
            </div>
        </SkillSectionContainer>
    )
}