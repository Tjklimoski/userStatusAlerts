import TasksCard from "./cards/TasksCard";
import AlertsCard from "./cards/AlertsCard";

export default function Dashboard({ auth }) {
  return (
    <div className="container-xxl">
      <header className="d-flex justify-content-between my-4">
        <h1 className="me-4">{auth.user.name}&apos;s Dashboard </h1>
        <span className="fw-light">Jan 5, 2024</span>
      </header>
      <AlertsCard />
      <TasksCard />
    </div>
  );
}
