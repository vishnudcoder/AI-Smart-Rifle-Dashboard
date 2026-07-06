function Dashboard() {
  return (
    <div className="dashboard">

      <h1>🎯 AI Smart Rifle Dashboard</h1>

      <p className="subtitle">
        Live Rifle Shooting Performance
      </p>

      <div className="stats">

        <div className="stat-card">
          <h2>92%</h2>
          <p>Accuracy</p>
        </div>

        <div className="stat-card">
          <h2>89%</h2>
          <p>Stability</p>
        </div>

        <div className="stat-card">
          <h2>25</h2>
          <p>Shots Fired</p>
        </div>

        <div className="stat-card">
          <h2>22</h2>
          <p>Hits</p>
        </div>

      </div>

      <div className="main-grid">

        <div className="panel">

          <h2>🎯 Target View</h2>

          <div className="target">

            <div className="ring1">

              <div className="ring2">

                <div className="ring3">

                  <div className="shot shot1"></div>

                  <div className="shot shot2"></div>

                  <div className="shot shot3"></div>

                  <div className="center"></div>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="panel">

          <h2>📊 Session Summary</h2>

          <table>

            <tbody>

              <tr>
                <td>Total Shots</td>
                <td>25</td>
              </tr>

              <tr>
                <td>Successful Hits</td>
                <td>22</td>
              </tr>

              <tr>
                <td>Misses</td>
                <td>3</td>
              </tr>

              <tr>
                <td>Accuracy</td>
                <td>92%</td>
              </tr>

              <tr>
                <td>Average Time</td>
                <td>1.4 sec</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

      <div className="feedback">

        <h2>🤖 AI Suggestions</h2>

        <ul>

          <li>✅ Maintain Shoulder Alignment</li>

          <li>✅ Hold Breath Before Trigger Pull</li>

          <li>✅ Improve Rifle Stability</li>

          <li>✅ Keep Eye Focused on Target</li>

          <li>✅ Smooth Trigger Press</li>

        </ul>

      </div>

    </div>
  );
}

export default Dashboard;