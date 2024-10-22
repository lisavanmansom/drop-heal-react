import MeshgradBlue from '../components/Meshgrad-blue.jsx'
import MeshgradRed from '../components/Meshgrad-red.jsx'
import MeshgradGreen from '../components/Meshgrad-green.jsx'
import MeshgradPink from '../components/Meshgrad-pink.jsx'

import ArrowR from '../components/ArrowR.jsx';
import ArrowL from '../components/ArrowL.jsx';

import './task.css';

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const TaskDetail = () => {
    const { id } = useParams();
    const [task, setTask] = useState(null);

    useEffect(() => {
        fetch(`https://fdnd-agency.directus.app/items/dropandheal_task/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setTask(data.data); 
            });
    }, [id]);

    if (!task) {
        return <div>Loading...</div>; // Loading state aanpassen
    }

    return (
        <section>
            <h1>Introductie rouwtaken</h1>
            <h2>Rouwtaak</h2>
            <h3>{task.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: task.description }} />

        {/* custom elements based on id */}
        {id === '1' && (
                <div className={`task-detail task-${id}`}>
                    <MeshgradBlue />
                    <Link to="/task/1"><ArrowL /></Link>
                    <Link to="/task/2"><ArrowR /></Link>

                    <div aria-busy="true" aria-describedby="progress-bar"></div>
                    <progress value="50" max="100"></progress>
                </div>
            )}

            {id === '2' && (
                <div className={`task-detail task-${id}`}>
                    <MeshgradRed />
                    <Link to="/task/1"><ArrowL /></Link>
                    <Link to="/task/3"><ArrowR /></Link>

                    <div aria-busy="true" aria-describedby="progress-bar"></div>
                    <progress value="60" max="100"></progress>
                </div>
            )}

            {id === '3' && (
                <div className={`task-detail task-${id}`}>
                    <MeshgradGreen />
                    <Link to="/task/2"><ArrowL /></Link>
                    <Link to="/task/4"><ArrowR /></Link>

                    <div aria-busy="true" aria-describedby="progress-bar"></div>
                    <progress value="70" max="100"></progress>
                </div>
            )}

            {id === '4' && (
                <div className={`task-detail task-${id}`}>
                    <MeshgradPink/>
                    <Link to="/task/3"><ArrowL /></Link>
                    <Link to="/task/4"><ArrowR /></Link>

                    <div aria-busy="true" aria-describedby="progress-bar"></div>
                    <progress value="80" max="100"></progress>
                </div>
            )}
        </section>
    );
};

export default TaskDetail;
