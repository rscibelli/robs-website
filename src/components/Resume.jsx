import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Resume() {
  return (
    <div className="container py-5">
      <header className="mb-5 text-center">
        <h1 className="display-4">Robert Scibelli</h1>
        <p className="lead">Sr. Software Engineer</p>
      </header>

      <section className="mb-5">
        <h2>About Me</h2>
        <p>
          Dedicated software engineer with six years of experience in backend API development and infrastructure solutions. As a Kafka administrator, I create pipeline tools in Java and Go, while also providing customer support. Recently, I contributed to the core platform modernization effort by planning the migration of legacy applications from IBM MQ to RabbitMQ. From this, I learned that I truly thrive when tackling complex problems because it helps me work efficiently and I deliver effective results.
        </p>
      </section>

      <section className="mb-5">
        <h2>Projects</h2>
        <div className="row">
          {/* Project Card Example */}
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">My Project 1</h5>
                <p className="card-text">
                  A brief description of this cool project. Built with React and deployed with Nginx.
                </p>
                {/* <a href="#" className="btn btn-primary">View Project</a> */}
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">My Project 2</h5>
                <p className="card-text">
                  A brief description of this cool project. Built with React and deployed with Nginx.
                </p>
                {/* <a href="#" className="btn btn-primary">View Project</a> */}
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">My Project 3</h5>
                <p className="card-text">
                  A brief description of this cool project. Built with React and deployed with Nginx.
                </p>
                {/* <a href="#" className="btn btn-primary">View Project</a> */}
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">My Project 4</h5>
                <p className="card-text">
                  A brief description of this cool project. Built with React and deployed with Nginx.
                </p>
                {/* <a href="#" className="btn btn-primary">View Project</a> */}
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="mb-5">
        <div className="row">
            <div className="col-md-4 mx-auto">
            <h2>Hobbies</h2>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">🏃‍♂️ Running</li>
                <li className="list-group-item">🏌️ Golfing</li>
                <li className="list-group-item">🥾 Hiking</li>
                <li className="list-group-item">💻 Playing with tech</li>
            </ul>
            </div>
        </div>
      </section>

      <footer className="text-center mt-5 pt-4 border-top">
        <p className="text-muted">&copy; {new Date().getFullYear()} Robert Scibelli</p>
      </footer>
      
    </div>
  );
}

export default Resume;