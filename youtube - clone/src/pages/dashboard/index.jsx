import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex gap-10">
      <div className="w-[300px] h-[100vh] bg-[#0F0F0F] p-5">
        <Link
          to={"/"}
          className="text-white flex items-center gap-2 text-[16px]"
        >
          <img
            className="w-[30px]"
            src="../public/youtube-color-svgrepo-com.svg"
            alt=""
          />{" "}
          <h3>YouTube</h3>
        </Link>
        <br />
        <Link
          to={"/dashboard/main"}
          className="text-white flex items-center gap-2 text-[16px]"
        >
          <i class="fa-solid fa-house"></i> Home
        </Link>
        <br />

        <Link
          to={"/dashboard/students"}
          className="text-white flex items-center gap-2 text-[16x]"
        >
          <i class="fa-solid fa-play"></i>Shorts
        </Link>
        <br />

        <Link
          to={"/dashboard/chanel"}
          className="text-white flex items-center gap-2 text-[16px]"
        >
          <i class="fa-solid fa-user-plus"></i>Subscription
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
