import { NavLink, Outlet } from "react-router-dom";
import { useAdmin } from "../hooks/useAdmin";
import { useInstructor } from "../hooks/useInstructor";
import NavigationBar from "../components/Shared/NavigationBar/NavigationBar";

const Dashboard = () => {
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();
  return (
    <>
     <NavigationBar></NavigationBar>
      <div className="drawer lg:drawer-open mt-5">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center ">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side rounded-lg">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-purple-500 text-xl text-white">
            <div>
              <h1 className="text-center pb-10 text-3xl font-bold">
                SummerSportsHub
              </h1>
            </div>
            {isAdmin ? (
              <>
                <li>
                  <NavLink
                    to="/dashboard/manageClasses"
                    className={({ isActive }) => (isActive ? "text-white" : "")}
                  >
                    Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageUsers"
                    className={({ isActive }) => (isActive ? "text-white" : "")}
                  >
                    Manage Users
                  </NavLink>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <NavLink
                    to="/dashboard/addClass"
                    className={({ isActive }) => (isActive ? "text-white" : "")}
                  >
                    Add a Class
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/myAddedClasses"
                    className={({ isActive }) => (isActive ? "text-white" : "")}
                  >
                    My Classes
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/dashboard/mySelectedClasses"
                    className={({ isActive }) => (isActive ? "text-white" : "")}
                  >
                    My selected Class
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/myClasses"
                    className={({ isActive }) => (isActive ? "text-white" : "")}
                  >
                    My Enrolled Class
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/paymentHistory"
                    className={({ isActive }) => (isActive ? "text-white" : "")}
                  >
                    Payment History
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider bg-white"></div>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-white" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/classes"
                className={({ isActive }) => (isActive ? "text-white" : "")}
              >
                Classes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/instructors"
                className={({ isActive }) => (isActive ? "text-white" : "")}
              >
                Instructors
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
