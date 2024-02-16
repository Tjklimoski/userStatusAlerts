import { useEffect, useState } from "react";
import PaymentAlert from "../alerts/PaymentAlert.jsx";
import CompromisedAlert from "../alerts/CompromisedAlert.jsx";
import { useAuth } from "../../context/AuthProvider";

export default function AlertsCard() {
  const { auth } = useAuth();

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
      const name = "breaches_alert";
      const breaches_alert = {
        name,
        jsx: (
          <CompromisedAlert
            metadata={breaches}
            name={name}
            onDismiss={handleDismiss}
          />
        ),
      };

      setAlerts(currentAlerts => [...currentAlerts, breaches_alert]);
    }

    if (payment) {
      const name = "payment_alert";
      const payment_alert = {
        name,
        jsx: (
          <PaymentAlert
            metadata={payment}
            name={name}
            onDismiss={handleDismiss}
          />
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
