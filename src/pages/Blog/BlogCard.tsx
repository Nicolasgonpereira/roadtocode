import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HardSkillCard from '../../components/HardSkillCard';
import { Post } from './Blog';

const Article = styled.article<{$boxAlign:string;}>`
  display: flex;
  flex-direction: ${props=>props.$boxAlign==='left'?'row':'row-reverse'};
  justify-content: center;
  margin: 2rem 0;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin: 0;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 1rem;
  width: 40%;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1rem;
  width: 300px;

  &:hover {
    cursor: pointer;
  }
  &:hover ~${ContentWrapper} ${Title} {
    text-decoration: underline;
  }
`;

const LinkPost = styled(Link)`
  text-decoration: none;
`

const Summary = styled.p`
  margin: 1rem 0;
`;

const DateWrapper = styled.p`
  color: #c4c4c7;
  margin: 0 0;
`;

const SkillUsedWrapper = styled.div<{$boxalign:string}>`
  display: flex;
  flex-direction: row;
  justify-content: ${props=>props.$boxalign};
  margin-top: 1rem;
`

export default function BlogCard({post, align}:{post:Post, align:'left'|'right'}) {
  
  return (
  <Article $boxAlign={align}>
    <ImageWrapper>
      <LinkPost to={post.slug}>
        <img src={post.thumb_url} alt={`Capa do post ${post.title}`} width='100%' height='100%' style={{borderRadius:'1rem'}} />
      </LinkPost>
    </ImageWrapper>
    <ContentWrapper>
      <LinkPost to={post.slug}>
        <Title>{post.title}</Title>
      </LinkPost>
      <Summary dangerouslySetInnerHTML={{ __html: post.summary}}></Summary>
      <DateWrapper>{formatDate(post.published_at)}</DateWrapper>
      <SkillUsedWrapper $boxalign={align}>
        {post.techs.map(e=>(
          <HardSkillCard key={e} tech={e}/>
        ))}
      </SkillUsedWrapper>
    </ContentWrapper>
  </Article>
  );
}

export function formatDate(data:string) {
  const date = new Date(data)
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return (`${day}/${month}/${year}`)
}