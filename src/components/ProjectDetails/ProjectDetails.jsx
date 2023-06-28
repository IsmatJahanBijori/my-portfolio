import React, { useEffect, useState } from 'react';

const ProjectDetails = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(data => setProjects(data))
    }, [])
    return (
        <div className=''>
            <div className='grid md:gap-10 grid-cols-1 lg:grid-cols-3 mx-10 md:mx-48 my-36'>
                {projects.map(project =>
                    <div className="card w-72 md:w-96 bg-slate-300 shadow-xl my-12">
                        <figure><img src={project.image} alt="Image" className='p-5 rounded-xl' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{project.name}</h2>
                            <p>
                                {
                                    project.features.map(proj => <li>{proj}</li>)
                                }
                            </p>
                            <button className="btn btn-primary">{project.technology}</button>
                            <button className="btn btn-primary h-20 gap-2">{project.framework}</button>
                            
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    );
};

export default ProjectDetails;
