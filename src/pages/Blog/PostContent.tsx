import styled from "styled-components";

const Content = styled.article`
    font-family: Roboto, sans-serif;
    line-height: 1.6;
    color: #fff;
    margin: 16px 0;

    img {
        max-width: 100%;
        height: auto;
        border-radius: 10px;
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
        border-bottom: 2px solid #f0f0f0;
        padding-bottom: 0.5rem;
    }

    h3 {
        font-size: 1.5rem;
        margin-bottom: 0.75rem;
        border-bottom: 1px solid #f0f0f0;
        padding-bottom: 0.5rem;
    }

    h4 {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1rem;
        margin-bottom: 1.25rem;
    }

    a {
        color: #007BFF;
        text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
    }

    pre {
        background-color: #000000;
        padding: 1rem;
        border-radius: 5px;
        margin-bottom: 1.5rem;
        overflow-x: auto;

    code {
        display: block;
        background-color: #000000;
        font-family: 'Fira Code', monospace;
        color: #d6336c;
    }
    }

    code {
        background-color: #000000;
        color: #d6336c;
        padding: 0.2rem 0.4rem;
        border-radius: 3px;
        font-family: 'Fira Code', monospace;
    }

    figure {
        margin: 2rem 0;
        text-align: center;

    img {
        max-width: 100%;
        height: auto;
        border-radius: 10px;
    }

    figcaption {
        margin-top: 0.5rem;
        font-size: 0.9rem;
        color: #fff;
    }
    }
`;

export default function PostContent ({ content }:{content:string}) {
    return(
        <Content dangerouslySetInnerHTML={{__html: content}} />
    )
}