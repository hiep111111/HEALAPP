import React from "react";
import HeaderMenu from "../core/assets/HeaderMenu.jsx";
import LeftMenu from "../core/assets/LeftMenu.jsx";
import Layout from "../core/assets/Layout.jsx";
import { DashboardContainer } from "../containers/DashboardContainer.jsx";
import MealSugestionTable from "../core/compoinents/MealSugestionTable.jsx";


const MealSugestionPage = () => {
  return (
    <Layout>
      <HeaderMenu />
      <LeftMenu />
      <DashboardContainer>
        <MealSugestionTable style={{ gridColumn: "span 3", gridRow: "span 6" }} />
      </DashboardContainer>
    </Layout >
  );
};

export default MealSugestionPage;