import axios from "axios";
import { apiroot } from "../App";
import { Post } from "../pages/Blog/Blog";
import { IProject } from "../pages/Projects/Projects";

export function AddNewPost(postData:Post) {
    axios.post(`${apiroot}/api/post`,postData)
        .then(response => {
            return response.status;
        })
        .catch(error => {
            return error.response?.status;
        });
}

export function AddNewProject(projectData:IProject) {
    axios.post(`${apiroot}/api/project`,projectData)
        .then(response => {
            return response.status;
        })
        .catch(error => {
            return error.response?.status;
        });
}
