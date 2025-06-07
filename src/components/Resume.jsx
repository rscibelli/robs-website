import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Resume() {
  return (
    <div
      className="container-fluid py-5"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #f8f9fa 1px, transparent 1px), linear-gradient(to bottom, #f8f9fa 1px, transparent 1px)',
        backgroundColor: '#ffffff',
        backgroundSize: '25px 25px',
        backgroundPosition: '0 0'
      }}
    >
      <div className="container bg-white p-5 rounded shadow">
        {/* About Me Section */}
        <section className="mb-5">
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <img
                src="https://lh3.googleusercontent.com/pw/AP1GczN1qlZPQSuaYwmKN7txkz-DHZA8qUg5CbwqRHpj1yNEICjQoDhBv4P072S-7zPxwWPQGat8YBotoGI6W_vjvKE0NfW6N_LYFCUHNL8QW-DkBXFZtL_-ca9UhnYREttU6cjwdV0yS57ck4HtspQgnYChJQ=w596-h705-s-no-gm?authuser=0" // Updated with your Google Photos link
                alt="Robert Scibelli Profile"
                className="img-fluid rounded-circle shadow-sm mb-3"
                style={{
                  width: '300px',
                  height: '300px',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </div>
            <div className="col-md-8">
              <h1 className="display-4">Robert Scibelli</h1>
              <p className="lead mb-4">Sr. Software Engineer</p>
              <p className="px-5">
                Dedicated Senior Software Engineer with six years of experience in developing scalable backend systems and robust infrastructure. I excel at tackling complex technical challenges, driving modernization efforts, and delivering efficient solutions that significantly improve system performance.
              </p>
            </div>
          </div>
        </section>

        {/* Horizontal rule after About Me, before boxed sections begin */}
        <hr className="my-5" />

        {/* Skills Section - Full Width Box with Title Above */}
        <section className="mb-5">
          <div className="row mb-3">
            <div className="col-12">
              <h2 className="text-start ps-4">Skills</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card shadow-sm p-4">
                <table className="table table-bordered table-hover mb-0">
                  <tbody>
                    <tr>
                      <th scope="row" className="text-start" style={{ width: '35%' }}>Programming Languages</th>
                      <td className="text-start">Java, Go, JavaScript, Typescript, HTML, Python</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-start" style={{ width: '35%' }}>Tools & Technologies</th>
                      <td className="text-start">Kafka, Confluent Suite, OpenRewrite, Kubernetes, Docker, AWS, Spring, Spring Boot, Maven, React, Node.js, GitHub, Atlassian Suite</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-start" style={{ width: '35%' }}>Professional Skills</th>
                      <td className="text-start">Object-oriented programming, Problem Solving, Critical Thinking, Architecture Design, Troubleshooting, Teaching, Communication, Mentorship</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section - Full Width Box with Title Above */}
        <section className="mb-5">
          <div className="row mb-3">
            <div className="col-12">
              <h2 className="text-start ps-4">Experience</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card shadow-sm p-4">
                {/* Senior Software Engineer */}
                <div className="mb-3">
                  <h5 className="mb-1 text-start">Senior Software Engineer</h5>
                  <p className="mb-2 text-muted text-start">Liberty Mutual Insurance · 2024 - Present</p>
                  <p className="mb-1 small text-secondary text-start">Spearheaded the migration plan for IBM MQ to RabbitMQ, utilizing OpenRewrite to re-point legacy Java applications</p>
                  <p className="mb-1 small text-secondary text-start">Utilized a centralized status page to display the Kafka infrastructure's runtime status while planning an integration with Datadog for dynamic updates</p>
                  <p className="mb-0 small text-secondary text-start">Provided helpful customer service to users, ensuring they uphold proper event driven architecture</p>
                </div>

                <hr className="my-3" />

                {/* Software Engineer */}
                <div className="mb-3">
                  <h5 className="mb-1 text-start">Software Engineer</h5>
                  <p className="mb-2 text-muted text-start">Liberty Mutual Insurance · 2022 - 2024</p>
                  <p className="mb-1 small text-secondary text-start">Designed and implemented a self-service tool for Confluent Connect in Go, enhancing the customer experience and securing the API with Ping</p>
                  <p className="mb-1 small text-secondary text-start">Developed an incident validation tool for the Kafka-UI application to safeguard production data, gaining valuable experience in Kubernetes</p>
                  <p className="mb-1 small text-secondary text-start">Dedicated to giving back by mentoring junior developers and volunteering in my community</p>
                </div>

                <hr className="my-3" />

                {/* Associate Infrastructure Engineer */}
                <div className="mb-0">
                  <h5 className="mb-1 text-start">Associate Infrastructure Engineer</h5>
                  <p className="mb-2 text-muted text-start">Liberty Mutual Insurance · 2020 - 2022</p>
                  <p className="mb-0 small text-secondary text-start">Dedicated software engineer with six years of experience in backend API development and infrastructure solutions. In my role as a Kafka administrator, I have been instrumental in managing and optimizing event-driven architectures to ensure seamless data flow across systems.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Full Width Box with Title Above (and internal cards) */}
        <section className="mb-5">
          <div className="row mb-3">
            <div className="col-12">
              <h2 className="text-start ps-4">Projects</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card shadow-sm p-4"> {/* Outer card for the whole Projects section */}
                <div className="row">
                  {/* Home Automation Project Card - NOW INDIVIDUAL CARD AGAIN */}
                  <div className="col-md-6 mb-4">
                    <div className="card h-100 shadow-sm"> {/* Individual card for this project */}
                      <div className="card-body">
                        <h5 className="card-title">Home Automation</h5>
                        <p className="mb-2 text-muted">February 2025</p>
                        <p className="card-text mb-0 text-secondary">
                          Established a smart home setup using a Raspberry Pi running Home Assistant OS, integrating Zigbee and Z-Wave controllers for seamless device interaction.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Wedding Website Project Card - NOW INDIVIDUAL CARD AGAIN */}
                  <div className="col-md-6 mb-4">
                    <div className="card h-100 shadow-sm"> {/* Individual card for this project */}
                      <div className="card-body">
                        <h5 className="card-title">Wedding Website</h5>
                        <p className="mb-2 text-muted">August 2024</p>
                        <p className="card-text mb-0 text-secondary">
                          Developed a wedding website using React and Go, hosted on a local Raspberry Pi using Docker.
                        </p>
                        <p className="card-text mb-0 text-secondary">
                          Implemented an interactive song request feature that allowed guests to submit their choices, which were processed and displayed dynamically in a user-friendly table on the frontend.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hobbies Section - NO BIG BOX, more minimal */}
        <section className="mb-5">
          {/* Hobbies content without a card, contained in a centered column */}
          <div className="row">
            <div className="col-md-8 mx-auto"> {/* Centered column for the content */}
              <h4 className="mb-2">My Interests</h4> {/* Keep text-start for internal consistency */}
              <p className="text-muted mb-0">
                🏃‍♂️ Running • 🏌️ Golfing • 🥾 Hiking • 💻 Playing with tech
              </p>
            </div>
          </div>
        </section>

        <footer className="text-center mt-5 pt-4 border-top">
          <p className="text-muted">© {new Date().getFullYear()} Robert Scibelli</p>
        </footer>
      </div>
    </div>
  );
}

export default Resume;