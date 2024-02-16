import { formatDateTime } from "../../util/dateFormatter";

export default function PaymentAlert({
  metadata: breaches,
  name,
  onDismiss: handleClick,
}) {
  return (
    <section>
      <h3>Password compromised</h3>
      <span>
        Your password has been found to be compromised across multiple sites:
      </span>

      {/* List of dates and sites where the user's password was found to be compromised */}
      <ul className="list-unstyled my-2">
        {breaches.map(breach => (
          <li key={breach.date + breach.site}>
            - <span>{formatDateTime(breach.date)}</span> - {breach.site}
          </li>
        ))}
      </ul>

      <span>
        At this time your account with us has not been breached. We recommend
        you take immediate action to prevent losing access to your account.
        Please change your password as soon as possible to maintain access to
        your account.
      </span>

      <div className="mt-2">
        <button className="btn btn-secondary me-2">Change your password</button>
        <button
          className="btn btn-secondary"
          onClick={handleClick}
          value={name}
        >
          Dismiss
        </button>
      </div>
    </section>
  );
}
