import { useState } from "react";
import styled from "styled-components";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import { AddNewPost, AddNewProject } from "../../utils/API";
import { Post } from "../Blog/Blog";
import BlogCard from "../Blog/BlogCard";
import PostContent from "../Blog/PostContent";
import { IProject } from "../Projects/Projects";

const AdminWrapper = styled.main`
    box-sizing: border-box;
    width: 100%;
    padding: 0 15%;
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const AddButtonWrapper = styled.div`
    margin: 1rem;
    width: 200px;
    display: flex;
    justify-content: center;
`

const Button = styled.button`
    box-sizing: content-box;
    margin: 0 1rem;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 1rem;
    height: 2rem;
    padding: 0.5rem;
    align-content: center;
    font-weight: 600;

    &:hover {
        background-color: #fff;
        color: #1f2028;
        cursor: pointer;
    }
`

const AddingWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 200px;

    input {
        border:1px solid;
        border-radius: 3px;
    }

    textarea {
        border:1px solid;
        border-radius: 3px;
    }
`;

const ButtonContained = styled.button`
    border: 1px solid;
    border-radius: 5px;
    line-height: 1.5;
    font-weight: 600;
    color: #1f2028;
    background-color: #fff;

    &:hover {
        cursor: pointer;
    }
`;

const ButtonOutlined = styled.button`
    border: none;
    border-radius: 5px;
    line-height: 1.5;

    &:hover{
        cursor: pointer;
    }
`

export default function Admin() {

    const [isAddingPost, setIsAddingPost] = useState<boolean>(false);
    const [isAddingProject, setIsAddingProject] = useState<boolean>(false);
    const [techs,setTechs] = useState<string>('');
    const [formDataPost, setFormDataPost] = useState<Post>({
        title: '',
        slug: '',
        content: '',
        summary: '',
        published_at: '',
        techs: [],
        image_url: '',
        thumb_url: ''
    });
    const [formDataProject, setFormDataProject] = useState<IProject>({
        id:'',
        title: '',
        github: '',
        live: '',
        description: '',
        date: '',
        image: '',
        tech: []
    })

    const handleOnChangePost = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormDataPost({
            ...formDataPost, [name]:value
        });
    };

    const handleOnChangeProject = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormDataProject({
            ...formDataProject, [name]:value
        });
    };

    const handleOnChangeTechPost = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTechs(e.target.value);
        const ArrayTechs = e.target.value.replace(/["']/g, '')
                                .split(',')
                                .map(tech=>tech.trim());
        setFormDataPost({
            ...formDataPost, techs:ArrayTechs
        });
    };

    const handleOnChangeTechProject = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTechs(e.target.value);
        const ArrayTechs = e.target.value.replace(/["']/g, '')
                                .split(',')
                                .map(tech=>tech.trim());
        setFormDataProject({
            ...formDataProject, tech:ArrayTechs
        });
    };

    const handleSubmitPost = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsAddingPost(false);
        AddNewPost(formDataPost);
        setFormDataPost({
            title: '',
            slug: '',
            content: '',
            summary: '',
            published_at: '',
            techs: [],
            image_url: '',
            thumb_url: ''
        });
    };

    const handleSubmitProject = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsAddingProject(false);
        AddNewProject(formDataProject);
        setFormDataProject({
            id:'',
            title: '',
            github: '',
            live: '',
            description: '',
            date: '',
            image: '',
            tech: []
        });
    };

    return (
        <AdminWrapper>
            <AddButtonWrapper>
                <Button onClick={()=>{setIsAddingPost(true); setIsAddingProject(false)}}>Adicionar Post</Button>
                <Button onClick={()=>{setIsAddingProject(true);setIsAddingPost(false)}}>Adicionar Projeto</Button>
            </AddButtonWrapper>
            {isAddingPost &&
                <AddingWrapper>
                    <form onSubmit={handleSubmitPost}>
                        <Input
                            type="text"
                            label="Title"
                            name="title"
                            value={formDataPost.title}
                            onChange={handleOnChangePost}
                            required />
                        <Input
                            type="text"
                            label="Slug"
                            name="slug"
                            value={formDataPost.slug}
                            onChange={handleOnChangePost}
                            required />
                        <Input
                            type="text"
                            label="Summary"
                            name="summary"
                            value={formDataPost.summary}
                            onChange={handleOnChangePost}
                            required />
                        <TextArea
                            type="text"
                            label="Content"
                            name="content"
                            value={formDataPost.content}
                            onChange={handleOnChangePost}
                            required />
                        <Input
                            type="text"
                            label="Image URL"
                            name="image_url"
                            value={formDataPost.image_url}
                            onChange={handleOnChangePost}
                            required />
                        <Input
                            type="text"
                            label="Thumb URL"
                            name="thumb_url"
                            value={formDataPost.thumb_url}
                            onChange={handleOnChangePost}
                            required />
                        <Input
                            type="text"
                            label="Techs"
                            name="techs"
                            value={techs}
                            onChange={handleOnChangeTechPost}
                            required />
                        <div style={{display:'flex',justifyContent:'flex-end', width:'100%'}}>
                            <ButtonContained type='submit'>Salvar</ButtonContained>
                            <ButtonOutlined onClick={()=>setIsAddingPost(false)}>Cancelar</ButtonOutlined>
                        </div>
                    </form>
                </AddingWrapper>
            }
            {isAddingProject &&
                <AddingWrapper>
                    <form onSubmit={handleSubmitProject}>
                        <Input
                            type="text"
                            label="Title"
                            name="title"
                            value={formDataProject.title}
                            onChange={handleOnChangeProject}
                            required />
                        <Input
                            type="text"
                            label="Github"
                            name="github"
                            value={formDataProject.github}
                            onChange={handleOnChangeProject}
                            required />
                        <Input
                            type="text"
                            label="Live"
                            name="live"
                            value={formDataProject.live}
                            onChange={handleOnChangeProject}
                            required />
                        <Input
                            type="text"
                            label="Description"
                            name="description"
                            value={formDataProject.description}
                            onChange={handleOnChangeProject}
                            required />
                        <Input
                            type="text"
                            label="Date"
                            name="date"
                            value={formDataProject.date}
                            onChange={handleOnChangeProject}
                            required />
                        <Input
                            type="text"
                            label="Image URL"
                            name="image"
                            value={formDataProject.image}
                            onChange={handleOnChangeProject}
                            required />
                        <Input
                            type="text"
                            label="Techs"
                            name="techs"
                            value={techs}
                            onChange={handleOnChangeTechProject}
                            required />
                        <div style={{display:'flex',justifyContent:'flex-end', width:'100%'}}>
                            <ButtonContained type='submit'>Salvar</ButtonContained>
                            <ButtonOutlined onClick={()=>setIsAddingProject(false)}>Cancelar</ButtonOutlined>
                        </div>
                    </form>
                </AddingWrapper>
            }
            {formDataPost && isAddingPost &&
                <>
                    <PostContent content={formDataPost.content} />
                    <BlogCard post={formDataPost} align="left" />
                </>
            }
        </AdminWrapper>
    )
}
