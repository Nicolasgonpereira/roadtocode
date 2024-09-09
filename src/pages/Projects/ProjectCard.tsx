import { FaGithub } from 'react-icons/fa';
import { IoRadio } from "react-icons/io5";
import styled from 'styled-components';
import HardSkillCard from '../../components/HardSkillCard';
import { formatDate } from '../Blog/BlogCard';

const Article = styled.article<{$boxAlign:string;}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  justify-content: center;
  width: 80%;
  max-width: 100%;

  @media screen and (max-width:768px) {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1rem;
  width: 300px;
  max-width: 300px;
  min-height: 300px;
  height: 185px;
  max-height: 185px;
  min-height: 185px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  width: 100%;

  @media screen and (max-width:768px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin: 0 1rem;
`;

const Summary = styled.p`
  margin: 1rem 0;
  text-align: justify;
`;

const DateWrapper = styled.p`
  color: #c4c4c7;
  margin: 0 0;
`;

const SkillUsedWrapper = styled.div<{$boxAlign:string;}>`
  display: flex;
  justify-content: ${props=>props.$boxAlign ==='right'?'end':''};
  align-items: center;
  margin-top: 1rem;

  @media screen and (max-width:768px) {
    justify-content: center;
  }
`

const ButtonGitHub = styled.button<{disabled?: boolean}>`
  box-sizing: content-box;
  border: none;
  width: 40px;
  height: 40px;
  margin: 0 1rem;
  cursor: ${props=>props.disabled?'default':'pointer'};
  opacity: ${props=>props.disabled?0.5:''};
`

const ButtonLive = styled.button`
  box-sizing: content-box;
  border: none;
  width: 40px;
  height: 40px;
  margin: 0 0;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 1rem;
`

const InfoWrapper = styled.div`
  
`


interface Props {
  title: string;
  github: string;
  live: string;
  description: string;
  date: string;
  image: string;
  tech: Array<string>;
}

export default function ProjectCard({projectInfo, align}:{projectInfo:Props, align:'left'|'right'}) {
    return (
    <Article $boxAlign={align}>
      <TitleWrapper>
        <Title>{projectInfo.title}</Title>
        <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          <ButtonGitHub as={projectInfo.github===""?'button':'a'} href={projectInfo.github} target='_blank' disabled={projectInfo.github===""}>
            <FaGithub style={{width:'40px',height:'40px'}} />
          </ButtonGitHub>
          <ButtonLive as={'a'} href={projectInfo.live} target='_blank'>
            <IoRadio style={{width:'40px',height:'40px'}} />
          </ButtonLive>
        </div>
      </TitleWrapper>
      <ContentWrapper>
          <ImageWrapper>
              <img src={`${projectInfo.image}`} alt ={`Captura de tela do app ${projectInfo.title}`} width='300px' height='185px' style={{borderRadius:'1rem'}} />
          </ImageWrapper>
          <InfoWrapper>
            <Summary>{projectInfo.description}</Summary>
            <DateWrapper>{formatDate(projectInfo.date)}</DateWrapper>
            <SkillUsedWrapper $boxAlign={align}>
              {projectInfo.tech.map(e=>(
                <HardSkillCard key={e} tech={e}/>
              ))}
            </SkillUsedWrapper>
          </InfoWrapper>
      </ContentWrapper>
    </Article>
  );
}
