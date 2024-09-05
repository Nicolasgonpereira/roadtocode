import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { apiroot } from "../../App";
import BlogCard from "./BlogCard";

const BlogWrapper = styled.main`
    box-sizing: border-box;
    width: 100%;
    padding: 0 15%;
    margin: 40px 0;
`
export interface Post {
    id?: string;
    title: string;
    slug: string;
    content: string;
    summary: string;
    published_at: string;
    techs: Array<string>;
    image_url: string;
    thumb_url: string;
}

export interface PostList {
    items: Array<Post>,
    count:number
}

const ButtonShowMore = styled.button<{disabled?: boolean}>`
  box-sizing: content-box;
  border: 1px solid #fff;
  border-radius: 24px;
  background-color: #1f2028;
  width: 120px;
  height: 40px;
  margin: 0 1rem;
  cursor: ${props=>props.disabled?'default':'pointer'};
  opacity: ${props=>props.disabled?0.5:''};

  ${props=> !props.disabled &&
    `
        &:hover {
        background-color: #fff;
        color: #1f2028;
        }
        transition: background-color 0.3s ease, color 0.3s ease;
    `}
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export default function Blog() {

    const [posts, setPosts] = useState<PostList>();

    useEffect(()=>{
        const fetchData = async () => {
            const data = await axios.get(`${apiroot}/api/postslist`).then(res=>res.data);
            setPosts(data);
        }
        fetchData()
    },[])

    return (
        <BlogWrapper>
            {posts && posts.items.map((e,index)=>(
                <BlogCard key={index} post={e} align={index%2===0?"left":"right"} />
            ))}
            <ButtonWrapper>
                <ButtonShowMore>Ver mais</ButtonShowMore>
            </ButtonWrapper>
        </BlogWrapper>
    )
}

