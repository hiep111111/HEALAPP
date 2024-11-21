import React from "react";
import HeaderMenu from "../core/assets/HeaderMenu.jsx";
import LeftMenu from "../core/assets/LeftMenu.jsx";
import Layout from "../core/assets/Layout.jsx";
import { DashboardContainer } from "../containers/DashboardContainer.jsx";
import { BMIProvider } from "../context/BMIContext.js";
import BMICompoinent from "../core/compoinents/BMICompoinent.jsx";
import HeightCompoinent from "../core/compoinents/HeightCompoinent.jsx";


const DashboardPage = () => {
  return (
    <Layout>
      <HeaderMenu />
      <LeftMenu />
      <DashboardContainer>

        <BMIProvider>
          <BMICompoinent style={{ gridColumn: "span 1", gridRow: "span 2" }} />
          <HeightCompoinent style={{ gridColumn: "span 1", gridRow: "span 2" }} />
        </BMIProvider>

      </DashboardContainer>
    </Layout >
  );
};

export default DashboardPage;
