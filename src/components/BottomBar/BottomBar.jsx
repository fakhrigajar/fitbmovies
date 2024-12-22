import { Avatar, Segmented } from "antd";
import React from "react";
import PlusLinearIcon from "../../assets/icons/PlusLinearIcon";
import { HomeFilled, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function BottomBar() {
  return (
    <div className="fixed left-0 right-0 bottom-0">
      <Segmented
        className="w-full bg-dark-10 bottombar sm:px-10"
        options={[
          {
            label: (
              <a href="/">
                <div className="p-2">
                  <HomeFilled className="text-2xl" />
                  <div>User 1</div>
                </div>
              </a>
            ),
            value: "tab1",
          },
          {
            label: (
              <div>
                <div className="p-2">
                  <SearchOutlined className="text-2xl" />
                  <div>Search</div>
                </div>
              </div>
            ),
            value: "tab2",
          },
          {
            label: (
              <div>
                <div className="p-2">
                  <UserOutlined className="text-2xl" />
                  <div>Profile</div>
                </div>
              </div>
            ),
            value: "tab3",
          },
          {
            label: (
              <div>
                <div className="p-2">
                  <UserOutlined className="text-2xl" />
                  <div>Profile</div>
                </div>
              </div>
            ),
            value: "tab4",
          },
        ]}
      />
    </div>
  );
}

export default BottomBar;
