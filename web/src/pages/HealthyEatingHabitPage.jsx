import React from "react";
import HeaderMenu from "../core/assets/HeaderMenu.jsx";
import LeftMenu from "../core/assets/LeftMenu.jsx";
import Layout from "../core/assets/Layout.jsx";
import { DashboardContainer } from "../containers/DashboardContainer.jsx";
import HealthyEatingHabitsTable from "../core/compoinents/HealthyEatingHabitsTable.jsx";

const HealthyEatingHabitPage = () => {
  return (
    <Layout>
      <HeaderMenu />
      <LeftMenu />
      <DashboardContainer>
        <HealthyEatingHabitsTable style={{ gridColumn: "span 3", gridRow: "span 3" }} />
      </DashboardContainer>
    </Layout >
  );
};

export default HealthyEatingHabitPage;