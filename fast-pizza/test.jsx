import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHouseUser, FaUsers, FaUserAlt } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { AiOutlineReconciliation } from "react-icons/ai";
import { FcDepartment } from "react-icons/fc";
import { MdOutlineSms } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav
      className={`flex flex-col md:block h-full text-Primary font-semibold border border-l-2 border-Primary-light ${
        isCollapsed ? "w-16" : "w-[180px]"
      }`}>
      <div>
        <button
          className=" w-full px-4 py-5 text-Primary hover:bg-custom-brown hover:text-Primary"
          onClick={toggleSidebar}>
          {isCollapsed ? <FaArrowAltCircleRight /> : <FaArrowAltCircleLeft />}
        </button>
        <ul className="flex-grow">
          <li className="flex items-center gap-2 px-4 py-5 hover:bg-custom-brown hover:text-Primary">
            <FaHouseUser />
            {!isCollapsed && <Link to="/dashboard/">Home</Link>}
          </li>
          <li className="flex items-center gap-2 px-4 py-5 hover:bg-custom-brown hover:text-Primary">
            <FaUsers />
            {!isCollapsed && <Link to="/dashboard/members">Members</Link>}
          </li>
          <li className="flex items-center gap-2 px-4 py-5 hover:bg-custom-brown hover:text-Primary">
            <FaMoneyBillTrendUp />
            {!isCollapsed && <Link to="/dashboard/finance">Finance</Link>}
          </li>
          <li className="flex items-center gap-2 px-4 py-5 hover:bg-custom-brown hover:text-Primary">
            <AiOutlineReconciliation />
            {!isCollapsed && <Link to="/dashboard/attendance">Attendance</Link>}
          </li>
          <li className="flex items-center gap-2 px-4 py-5 hover:bg-custom-brown hover:text-Primary">
            <FcDepartment />
            {!isCollapsed && (
              <Link to="/dashboard/departments">Departments</Link>
            )}
          </li>
          <li className="flex items-center gap-2 px-4 py-5 hover:bg-custom-brown hover:text-Primary">
            <MdOutlineSms />
            {!isCollapsed && <Link to="/dashboard/bulksms">Bulk SMS</Link>}
          </li>
          <li className="flex items-center gap-2 px-4 py-5 hover:bg-custom-brown hover:text-Primary">
            <FaUserAlt />
            {!isCollapsed && <Link to="/dashboard/user">Users</Link>}
          </li>
        </ul>
      </div>
      <button className="mt-auto w-full flex items-center gap-2 px-4 py-5 cursor-pointer hover:bg-custom-brown hover:text-Primary">
        <RiLogoutBoxLine />
        {!isCollapsed && <Link to="/dashboard/logout">LOG OUT</Link>}
      </button>
    </nav>
  );
}

export default Sidebar;
