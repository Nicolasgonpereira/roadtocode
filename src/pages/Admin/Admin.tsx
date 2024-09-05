import { useState } from "react";
import styled from "styled-components";
import Input from "../../components/Input";
import { AddNewPost, AddNewProject } from "../../utils/API";
import { Post } from "../Blog/Blog";
import BlogCard from "../Blog/BlogCard";
import PostContent from "../Blog/PostContent";
import { IProject } from "../Projects/Projects";

const conteudoGPT = `<article>
    <h2>Getting Started with Node.js</h2>
    <p>Node.js is a powerful and flexible platform for building fast and scalable network applications. In this post, we will cover the basics of getting started with Node.js.</p>
    
    <h3>What is Node.js?</h3>
    <p>Node.js is an open-source, cross-platform JavaScript runtime environment that allows you to execute JavaScript code on the server side. It is built on Chrome's V8 JavaScript engine, making it highly performant.</p>
    
    <h3>Setting Up Your Development Environment</h3>
    <p>Before we start coding, you'll need to set up your development environment. Follow these steps:</p>
    
    <h4>Step 1: Install Node.js</h4>
    <p>Download the latest version of Node.js from the official website and follow the installation instructions for your operating system.</p>
    <p><a href="https://nodejs.org" target="_blank">Download Node.js</a></p>
    
    <h4>Step 2: Verify the Installation</h4>
    <p>Once installed, open your terminal and run the following commands to verify that Node.js and npm (Node Package Manager) are correctly installed:</p>
    <pre><code>node -v
npm -v</code></pre>
    <p>If everything is set up correctly, these commands will return the versions of Node.js and npm that are installed.</p>
    
    <h3>Your First Node.js Application</h3>
    <p>Let's write a simple "Hello, World!" application in Node.js.</p>
    
    <h4>Step 1: Create a New File</h4>
    <p>Create a new file called <code>app.js</code> in your project directory.</p>
    
    <h4>Step 2: Write the Code</h4>
    <p>Open the <code>app.js</code> file in your text editor and add the following code:</p>
    <pre><code>const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});</code></pre>
    <p>This code creates a simple HTTP server that responds with "Hello, World!" when accessed.</p>
    
    <h4>Step 3: Run the Application</h4>
    <p>In your terminal, navigate to the directory where <code>app.js</code> is located and run the following command:</p>
    <pre><code>node app.js</code></pre>
    <p>Open your browser and navigate to <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>. You should see "Hello, World!" displayed in your browser.</p>
    
    <h3>Conclusion</h3>
    <p>Congratulations! You've just written your first Node.js application. In future posts, we'll dive deeper into more advanced topics and explore the full power of Node.js.</p>
    
    <p>Stay tuned for more tutorials and tips on web development!</p>
    
    <figure>
        <img src="https://via.placeholder.com/600x400" alt="Placeholder image">
        <figcaption>Figure 1: Example of a Node.js server running.</figcaption>
    </figure>
</article>
`;


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
        console.log(formDataProject);
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
                        <Input
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
