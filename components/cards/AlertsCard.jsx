import { useEffect, useState } from "react";

const ALERT_NAMES = {
  breaches: "breaches_alert",
  test: "test_alert",
};

export default function AlertsCard({ auth }) {
  const breaches = auth.meta.breaches;
  // An array to hold the JSX of different alerts to render
  const [alerts, setAlerts] = useState([]);

  function handleDismiss(e) {
    const nameToDismiss = e.target.value;
    setAlerts(currentAlerts =>
      currentAlerts.filter(alert => alert.name !== nameToDismiss)
    );
  }

  // use effect to only set alerts once
  useEffect(() => {
    const name = ALERT_NAMES.breaches;
    if (breaches) {
      const breaches_alert = {
        name,
        jsx: (
          <li key={name}>
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
                recommend you take immediate action to prevent losing access to
                your account. Please change your password as soon as possible to
                maintain access to your account.
              </span>
              <div className="mt-2">
                <button className="btn btn-secondary me-2">
                  Change your password
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={handleDismiss}
                  value={ALERT_NAMES.breaches}
                >
                  Dismiss
                </button>
              </div>
            </div>
          </li>
        ),
      };

      setAlerts(currentAlerts => [...currentAlerts, breaches_alert]);
    }

    // clean up when component unmounts. Clear alerts
    return () => setAlerts([]);
  }, [breaches, setAlerts]);

  return (
    <div className="card mx-4 mb-4 bg-warning text-black">
      <div className="card-header">Alerts</div>
      <div className="card-body">
        <ul className="list-unstyled">{alerts.map(alert => alert.jsx)}</ul>

        <p>No alerts</p>
      </div>
    </div>
  );
}
