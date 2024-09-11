import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { apiroot } from '../../App'
import { Post } from './Blog'
import { formatDate } from './BlogCard'
import PostContent from './PostContent'

const PageWrapper = styled.main`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 15%;
    margin: 40px 0;
`

const Image = styled.img`
    width: 600px;
    /* aspect-ratio: 3.5 / 1; */
    margin: 0 0 1rem 0;
`

const PostWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 0 5%;
`

const Title = styled.h1`
    margin: 0 0 1rem 0;
`

const Date = styled.p`
    color: #c4c4c7;
    margin: 0 0;
`

export default function PostBlog() {

    const {blogslug} = useParams();

    const [post, setPost] = useState<Post>();

    useEffect(()=> {
        const fetchData = async () =>{
            const data = await axios.get(`${apiroot}/api/post/${blogslug}`).then(res=>res.data);
            setPost(data);
        };
        fetchData();
    },[blogslug])

    return(
        <PageWrapper>
            {post && 
            <>
            <Image src={post.image_url} alt="ilustração do post" />
            <PostWrapper>
                <Title>{post.title}</Title>
                <Date>
                    Publicado em: {formatDate(post.published_at)}
                </Date>
                <PostContent content={post.content} />
            </PostWrapper></>}
        </PageWrapper>
    )
}
