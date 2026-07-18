import { useState } from "react";
import type { Deployment } from "./types/deployment";
import { getStatusLabel, formatDeploymentTime } from "./lib/deployment-status";
import "./App.css";

const INITIAL_DEPLOYMENTS: Deployment[] = [
  {
    id: "dep-f89a2",
    status: "finished",
    startedAt: "2026-07-18T16:20:00Z",
    finishedAt: "2026-07-18T16:24:12Z",
  },
  {
    id: "dep-9c2b1",
    status: "failed",
    startedAt: "2026-07-18T15:45:00Z",
    finishedAt: "2026-07-18T15:46:30Z",
  },
  {
    id: "dep-a1b2c",
    status: "in_progress",
    startedAt: "2026-07-18T16:48:00Z",
    finishedAt: null,
  },
  {
    id: "dep-3d4e5",
    status: "queued",
    startedAt: "2026-07-18T16:50:00Z",
    finishedAt: null,
  },
];

function App() {
  const [deployments, setDeployments] = useState<Deployment[]>(INITIAL_DEPLOYMENTS);

  const getStatusColorClass = (status: Deployment["status"]) => {
    switch (status) {
      case "finished":
        return "status-success";
      case "failed":
        return "status-failed";
      case "in_progress":
        return "status-progress";
      case "queued":
        return "status-queued";
      default:
        return "";
    }
  };

  const handleTriggerDeployment = () => {
    const newDep: Deployment = {
      id: `dep-${Math.random().toString(36).substring(2, 7)}`,
      status: "queued",
      startedAt: new Date().toISOString(),
      finishedAt: null,
    };
    setDeployments([newDep, ...deployments]);

    // Simulate progression
    setTimeout(() => {
      setDeployments((prev) =>
        prev.map((d) => (d.id === newDep.id ? { ...d, status: "in_progress" } : d))
      );
    }, 3000);

    setTimeout(() => {
      setDeployments((prev) =>
        prev.map((d) =>
          d.id === newDep.id
            ? {
                ...d,
                status: Math.random() > 0.15 ? "finished" : "failed",
                finishedAt: new Date().toISOString(),
              }
            : d
        )
      );
    }, 8000);
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo-section">
          <div className="pulse-logo"></div>
          <h1>Orbinx Ops</h1>
        </div>
        <button className="trigger-btn" onClick={handleTriggerDeployment}>
          Trigger Deployment
        </button>
      </header>

      <main className="dashboard-main">
        <section className="summary-cards">
          <div className="card">
            <h3>Active Deployments</h3>
            <p className="card-value">
              {deployments.filter((d) => d.status === "in_progress" || d.status === "queued").length}
            </p>
          </div>
          <div className="card">
            <h3>Success Rate</h3>
            <p className="card-value">
              {(() => {
                const finished = deployments.filter((d) => d.status === "finished").length;
                const total = deployments.filter((d) => d.status === "finished" || d.status === "failed").length;
                return total > 0 ? `${Math.round((finished / total) * 100)}%` : "100%";
              })()}
            </p>
          </div>
          <div className="card">
            <h3>System Status</h3>
            <p className="card-value status-good">Healthy</p>
          </div>
        </section>

        <section className="deployment-list-section">
          <h2>Recent Operations</h2>
          <div className="deployment-table-wrapper">
            <table className="deployment-table">
              <thead>
                <tr>
                  <th>Deployment ID</th>
                  <th>Status</th>
                  <th>Label</th>
                  <th>Started At</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {deployments.map((dep) => {
                  const label = getStatusLabel(dep.status);
                  const startedStr = formatDeploymentTime(dep);
                  const duration = dep.finishedAt
                    ? `${Math.round(
                        (new Date(dep.finishedAt).getTime() - new Date(dep.startedAt).getTime()) / 1000
                      )}s`
                    : "--";

                  return (
                    <tr key={dep.id}>
                      <td className="mono-text">{dep.id}</td>
                      <td>
                        <span className={`status-badge ${getStatusColorClass(dep.status)}`}>
                          <span className="dot"></span>
                          {dep.status.replace("_", " ")}
                        </span>
                      </td>
                      <td>
                        <span className="label-text">{label}</span>
                      </td>
                      <td>{startedStr}</td>
                      <td>{duration}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="dashboard-footer">
        <p>Orbinx Tier 2 - Live Operations Dashboard (Demo)</p>
      </footer>
    </div>
  );
}

export default App;
