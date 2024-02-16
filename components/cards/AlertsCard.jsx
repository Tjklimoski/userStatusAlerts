import { useState } from "react";

export default function AlertsCard({ auth }) {
  const breaches = auth.meta.breaches;
  // An array to hold the JSX of different alerts to render
  const [alerts, setAlerts] = useState([]);

  if (breaches) {
    const breaches_alert = (
      <li>
        <div>
          <span>
            Your password has been found to be compromised across multiple
            sites:
          </span>
          <ul className="list-unstyled my-2">
            {breaches.map(breach => (
              <li key={breach.date + breach.site}>
                - <span>{breach.date}</span> - {breach.site}
              </li>
            ))}
          </ul>
          <span>
            At this time your account with us has not been breached. We
            recommend you take immediate action to prevent losing access to your
            account. Please change your password as soon as possible to maintain
            access to your account.
          </span>
          <div className="mt-2">
            <button className="btn btn-secondary me-2">
              Change your password
            </button>
            <button className="btn btn-secondary">Dismiss</button>
          </div>
        </div>
      </li>
    );

    setAlerts(currentAlerts => [...currentAlerts, breaches_alert]);
  }

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
          {breaches_alert}
        </ul>

        <p>No alerts</p>
      </div>
    </div>
  );
}
