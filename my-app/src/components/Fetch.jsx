import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Fetch = () => {
    const [Tasks, setTasks] = useState([]);

    useEffect(() => {
      fetch('https://fdnd-agency.directus.app/items/dropandheal_task')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setTasks(data.data);
        });
    }, []);

    return (
        <section>
            {Tasks.map((task) => (
                <article key={task.id}>
                    <h3>{task.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: task.description }} />
                    <Link to={`/task/${task.id}`}>View Details</Link> {/* Link to task detail page */} 
                </article>
            ))}
        </section>
    );
}

export default Fetch;
