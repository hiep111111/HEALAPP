import React from "react";
import HeaderMenu from "../core/assets/HeaderMenu.jsx";
import LeftMenu from "../core/assets/LeftMenu.jsx";
import Layout from "../core/assets/Layout.jsx";
import { DashboardContainer } from "../containers/DashboardContainer.jsx";
import KnowLedgeTable from "../core/compoinents/knowLedgeTable.jsx";


const KnowLedgePage = () => {
  return (
    <Layout>
      <HeaderMenu />
      <LeftMenu />
      <DashboardContainer>
        <KnowLedgeTable style={{ gridColumn: "span 3", gridRow: "span 3" }} />
      </DashboardContainer>
    </Layout >
  );
};

export default KnowLedgePage;