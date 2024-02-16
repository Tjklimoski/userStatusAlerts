import { useState } from "react";

export default function AlertsCard({ auth }) {
  // An array to hold the JSX of different alerts to render
  const [alerts, setAlerts] = useState([]);

  return (
    <div className="card mx-4 mb-4 bg-warning text-black">
      <div className="card-header">Alerts</div>
      <div className="card-body">
        <ul className="list-unstyled">
          <li>
            <div>Alert 1</div>
            <hr />
          </li>
          <li>
            <div>Alert 2</div>
          </li>
        </ul>

        <p>No alerts</p>
      </div>
    </div>
  );
}
