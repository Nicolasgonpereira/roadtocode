import { FaGithub } from 'react-icons/fa';
import { IoRadio } from "react-icons/io5";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HardSkillCard from '../../components/HardSkillCard';
import { formatDate } from '../Blog/BlogCard';

const Article = styled.article<{$boxAlign:string;}>`
  display: flex;
  flex-direction: ${props=>props.$boxAlign ==='left'?'row':'row-reverse'};
  align-items: center;
  margin: 2rem 0;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  margin: 0 1rem;
  width: 300px;
  height: 185px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 1rem;
  width: 50%;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin: 0;
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
        <ImageWrapper>
            <img src={`${projectInfo.image}`} alt ={`Captura de tela do app ${projectInfo.title}`} width='100%' height='100%' style={{borderRadius:'1rem'}} />
        </ImageWrapper>
      <ContentWrapper>
          <TitleWrapper>
            <Title>{projectInfo.title}</Title>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
              <ButtonGitHub as={projectInfo.github===""?'':Link} to={projectInfo.github} disabled={projectInfo.github===""?true:false}>
                <FaGithub style={{width:'40px',height:'40px'}} />
              </ButtonGitHub>
              <ButtonLive as={Link} to={projectInfo.live}>
                <IoRadio style={{width:'40px',height:'40px'}} />
              </ButtonLive>
            </div>
          </TitleWrapper>
        <Summary>{projectInfo.description}</Summary>
        <DateWrapper>{formatDate(projectInfo.date)}</DateWrapper>
        <SkillUsedWrapper $boxAlign={align}>
          {projectInfo.tech.map(e=>(
            <HardSkillCard key={e} tech={e}/>
          ))}
        </SkillUsedWrapper>
      </ContentWrapper>
    </Article>
  );
}
