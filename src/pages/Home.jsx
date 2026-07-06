import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <h1>AI Smart Rifle Shooting Training System</h1>

        <p>
          Improve shooting accuracy using Artificial Intelligence,
          Computer Vision and Embedded Sensors.
        </p>

        <Link to="/dashboard">
          <button className="btn">Open Dashboard</button>
        </Link>

      </section>

      <section className="features">

        <h2>Project Features</h2>

        <div className="cards">

          <div className="card">
            <h3>🎯 AI Accuracy</h3>
            <p>
              AI evaluates posture and shooting performance.
            </p>
          </div>

          <div className="card">
            <h3>📷 Computer Vision</h3>
            <p>
              Detects shooter posture using camera.
            </p>
          </div>

          <div className="card">
            <h3>📊 Live Dashboard</h3>
            <p>
              Displays shooting statistics in real time.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;