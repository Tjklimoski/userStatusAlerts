import { useAuth } from "../context/AuthProvider";

const ACCOUNT_STATUS = {
  safe: "safe",
  compromised: "compromised",
};

export default function LoginForm() {
  const { login } = useAuth();

  function handleLogin(e) {
    const status = e.target.value;
    if (status === ACCOUNT_STATUS.safe) {
      login({
        user: {
          name: "Safe",
          photo: "http://url.com/id",
        },
        field: ["more data"],
        meta: {},
      });
    } else {
      login({
        user: {
          name: "Compromised",
          photo: "http://url.com/id",
        },
        field: ["more data"],
        meta: {
          breaches: [
            { date: "2024-02-16T00:50:21.236Z", site: "https://google.com" },
            { date: "2024-01-24T09:30:55.146Z", site: "https://facebook.com" },
            { date: "2024-01-27T17:47:26.434Z", site: "https://spotify.com" },
          ],
          payment:
            "You have not payed your fee for the month. Please visit the payment center as soon as possible to resolve the issue.",
        },
      });
    }
  }

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <form className="bg-body-tertiary p-4 rounded w-50">
        <div className="mb-3">
          <h2>Login</h2>
          <p>Choose between a safe or compromised account.</p>
        </div>

        <div className="row gx-2 gy-2">
          <div className="col-md-6">
            <button
              onClick={handleLogin}
              value={ACCOUNT_STATUS.safe}
              className="btn btn-primary w-100"
            >
              Login Safe 🦺
            </button>
          </div>
          <div className="col-md-6">
            <button
              onClick={handleLogin}
              value={ACCOUNT_STATUS.compromised}
              className="btn btn-danger w-100"
            >
              Login Compromised 💀
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
