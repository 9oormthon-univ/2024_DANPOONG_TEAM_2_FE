import React, { useState } from "react";
import ChangeCard from "../component/portfolio/change_card";
import { useNavigate } from "react-router-dom";

const Change: React.FC = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([
    {
      storeId: 1,
      storeName: "민무네 찰옥수수",
      storePicture: "https://via.placeholder.com/150",
      isProjectCompleted: false,
      myFundingAmount: 10000,
    },
    {
      storeId: 2,
      storeName: "차로 하는 이야기 녹차담",
      storePicture: "https://via.placeholder.com/150",
      isProjectCompleted: true,
      myFundingAmount: 10000,
    },
  ]);

  const handleClick = (storeId: number, myFundingAmount: number) => {
    navigate("/change_finish", {
      state: { storeId, myFundingAmount },
    });
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {projects.map((project) => (
        <ChangeCard
          key={project.storeId}
          storeId={project.storeId}
          storeName={project.storeName}
          storePicture={project.storePicture}
          isProjectCompleted={project.isProjectCompleted}
          myFundingAmount={project.myFundingAmount}
          onClick={() => handleClick(project.storeId, project.myFundingAmount)}
        />
      ))}
    </div>
  );
};

export default Change;
