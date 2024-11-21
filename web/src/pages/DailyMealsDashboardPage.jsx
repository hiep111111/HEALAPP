import React from "react";
import HeaderMenu from "../core/assets/HeaderMenu.jsx";
import LeftMenu from "../core/assets/LeftMenu.jsx";
import Layout from "../core/assets/Layout.jsx";
import { DashboardContainer } from "../containers/DashboardContainer.jsx";
import { DailyMealProvider } from "../context/DailyMealContext.js";
import DailyMealCompoinent from "../core/compoinents/DailyMealCompoinent.jsx";


const DailyMealsDashboardPage = () => {
  return (
    <Layout>
      <HeaderMenu />
      <LeftMenu />
      <DashboardContainer>

        <DailyMealProvider>
          <DailyMealCompoinent style={{ gridColumn: "span 3", gridRow: "span 7" }} />
        </DailyMealProvider>

      </DashboardContainer>
    </Layout >
  );
};

export default DailyMealsDashboardPage;
