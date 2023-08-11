import data from './data.json';
import {useState} from 'react';
import "./styles.css"

export default function MyProjects(){
    const [index, setIndex] = useState(0);
    let projects = data.projects;
    let project = projects[index];

    function handleClick() {
        if (index < data.projects.length-1)
        {
           setIndex(index + 1);
        }
        else 
        {
           setIndex(0);
        }
     }

     return(
        <div>
            <button onClick = {handleClick}>Next</button>
            <h2>{project.name}</h2>
            <p>{project.canvas}</p> 
            <img src={project.photoUrl} alt={project.alt}/>
        </div>
     );

}