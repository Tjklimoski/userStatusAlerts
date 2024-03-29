import TasksCard from "./cards/TasksCard";
import AlertsCard from "./cards/AlertsCard";
import { today } from "../util/dateFormatter";
import { useAuth } from "../context/AuthProvider";

export default function Dashboard() {
  const { auth } = useAuth();

  return (
    <div className="container-xxl">
      <header className="d-flex justify-content-between my-4">
        <h1 className="me-4">{auth.user.name}&apos;s Dashboard </h1>
        <span className="fw-light">{today}</span>
      </header>
      <AlertsCard />
      <TasksCard />
    </div>
  );
}
