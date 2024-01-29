import { MenuSidebar, MyProfile } from "./Index";

const Dashboard = () => {
  return (
    <div className="flex p-4 gap-x-4 h-screen">
      <div className="hidden xl:block min-h-full">
        <MenuSidebar />
      </div>
      <div className="grow min-h-full">
        <MyProfile />
      </div>
    </div>
  );
};

export default Dashboard;
