import React from "react";
import HeaderMenu from "../core/assets/HeaderMenu.jsx";
import LeftMenu from "../core/assets/LeftMenu.jsx";
import Layout from "../core/assets/Layout.jsx";
import { DashboardContainer } from "../containers/DashboardContainer.jsx";
import DietAdviceModelTable from "../core/compoinents/DietAdviceModelTable.jsx";

const DietAdvidePage = () => {
  return (
    <Layout>
      <HeaderMenu />
      <LeftMenu />
      <DashboardContainer>
        <DietAdviceModelTable style={{ gridColumn: "span 3", gridRow: "span 3" }} />
      </DashboardContainer>
    </Layout >
  );
};

export default DietAdvidePage;