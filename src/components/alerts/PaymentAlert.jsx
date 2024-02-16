export default function PaymentAlert({
  metadata: payment,
  name,
  onDismiss: handleClick,
}) {
  return (
    <section>
      <h3>Late Payment</h3>
      <div>{payment}</div>
      <div className="mt-2">
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
