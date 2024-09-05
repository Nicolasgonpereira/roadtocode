import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { apiroot } from "../../App";
import ProjectCard from "./ProjectCard";

const ProjectWrapper = styled.main`
    box-sizing: border-box;
    width: 100%;
    padding: 0 15%;
    margin: 40px 0;
`

export interface IProject {
    id:string;
    title: string;
    github: string;
    live: string;
    description: string;
    date: string;
    image: string;
    tech: Array<string>;
}

export interface IProjectList {
    items: Array<IProject>;
    count:number
}

export default function Projects() {

    const [projectList, setProjectList] = useState<IProjectList>();

    useEffect(()=>{
        const fetchData = async () => {
            const data = await axios.get(`${apiroot}/api/project/list`).then(res=>res.data);
            setProjectList(data);
        }
        fetchData();
    },[]);
    
    return (
        <ProjectWrapper>
            <h3 style={{textAlign:'justify'}}>Aqui estarão contidos os projetos particulares que desenvolvi.
                Onde poderá verificar eles em funcionamento (Live) e também o código fonte
                no GitHub. Alguns projetos de empresa não estarão disponíveis para ver em Live ou
                o código fonte.
            </h3>
            {projectList && projectList.items.map((project:IProject, index:number)=>(
                <>
                    <ProjectCard key={project.title} projectInfo={project}
                        align={index%2===0?'left':'right'}/>
                </>
            ))}
        </ProjectWrapper>
    )
}