import React from "react";
import HeaderMenu from "../core/assets/HeaderMenu.jsx";
import LeftMenu from "../core/assets/LeftMenu.jsx";
import Layout from "../core/assets/Layout.jsx";
import { DashboardContainer } from "../containers/DashboardContainer.jsx";
import { HealthListProvider } from "../context/HealthListContext.js";
import HealthListTable from "../core/compoinents/HealthListTable.jsx";


const HealthDashBoardPage = () => {
  return (
    <Layout>
      <HeaderMenu />
      <LeftMenu />
      <DashboardContainer>

        <HealthListProvider>
          <HealthListTable style={{ gridColumn: "span 3", gridRow: "span 5" }} />
        </HealthListProvider>

      </DashboardContainer>
    </Layout >
  );
};

export default HealthDashBoardPage;
