import styled from "styled-components"
import HardSkillCard from "../../components/HardSkillCard"

const SkillSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin: 2rem;
    align-items: center;
`

const SkillWrapper = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width:768px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-content: center;
        place-items: center;

        & > :nth-last-child(1) {
            grid-column: 2 / span 2;
        }
    }
`


export default function SkillsSection() {
    return(
        <SkillSectionContainer>
            <h2>Habilidades</h2>
            <SkillWrapper>
                    <HardSkillCard tech={"HTML"} />
                    <HardSkillCard tech={"CSS"} />
                    <HardSkillCard tech={"Git"} />
                    <HardSkillCard tech={"GitHub"} />
                    <HardSkillCard tech={"JavaScript"} />
                    <HardSkillCard tech={"TypeScript"} />
                    <HardSkillCard tech={"React"} />
                    <HardSkillCard tech={"NodeJS"} />
                    <HardSkillCard tech={"NextJS"} />
            </SkillWrapper>
        </SkillSectionContainer>
    )
}