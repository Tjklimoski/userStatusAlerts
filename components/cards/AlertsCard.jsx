import { useEffect, useState } from "react";
import { formatDateTime } from "../../util/dateFormatter.js";

const ALERT_NAMES = {
  breaches: "breaches_alert",
  payment: "payment_alert",
};

export default function AlertsCard({ auth }) {
  const breaches = auth.meta.breaches;
  const payment = auth.meta.payment;

  // An array to hold the JSX of different alerts to render
  const [alerts, setAlerts] = useState([]);
  const haveAlerts = alerts.length !== 0;

  function handleDismiss(e) {
    const nameToDismiss = e.target.value;
    setAlerts(currentAlerts =>
      currentAlerts.filter(alert => alert.name !== nameToDismiss)
    );
  }

  // use effect to only set alerts once
  useEffect(() => {
    if (breaches) {
      const name = ALERT_NAMES.breaches;
      const breaches_alert = {
        name,
        jsx: (
          <section>
            <h3>Password compromised</h3>
            <span>
              Your password has been found to be compromised across multiple
              sites:
            </span>
            <ul className="list-unstyled my-2">
              {breaches.map(breach => (
                <li key={breach.date + breach.site}>
                  - <span>{formatDateTime(breach.date)}</span> - {breach.site}
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
                value={name}
              >
                Dismiss
              </button>
            </div>
          </section>
        ),
      };

      setAlerts(currentAlerts => [...currentAlerts, breaches_alert]);
    }

    if (payment) {
      const name = ALERT_NAMES.payment;
      const payment_alert = {
        name,
        jsx: (
          <section>
            <h3>Late Payment</h3>
            <div>{payment}</div>
            <div className="mt-2">
              <button
                className="btn btn-secondary"
                onClick={handleDismiss}
                value={name}
              >
                Dismiss
              </button>
            </div>
          </section>
        ),
      };

      setAlerts(currentAlerts => [...currentAlerts, payment_alert]);
    }

    // clean up when component unmounts. Clear alerts.
    return () => setAlerts([]);
  }, [breaches, payment, setAlerts]);

  return (
    <div
      className={`card mx-4 mb-4 ${haveAlerts ? "bg-warning text-black" : ""}`}
    >
      {haveAlerts && <div className="card-header">Alerts</div>}
      <div className="card-body">
        {haveAlerts ? (
          <ul className="list-unstyled">
            {alerts.map((alert, i) => (
              <li key={alert.name}>
                {alert.jsx}
                {/* Add horizontal line between each alert: */}
                {i !== alerts.length - 1 && <hr />}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mb-0">No alerts</p>
        )}
      </div>
    </div>
  );
}
