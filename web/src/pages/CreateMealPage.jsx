import React from "react";
import HeaderMenu from "../core/assets/HeaderMenu.jsx";
import LeftMenu from "../core/assets/LeftMenu.jsx";
import Layout from "../core/assets/Layout.jsx";
import { DashboardContainer } from "../containers/DashboardContainer.jsx";
import CreateMealForm from "../Form/CreateMealForm.jsx";


const CreateMealPage = () => {
  return (
    <Layout>
      <HeaderMenu />
      <LeftMenu />
      <DashboardContainer>

        <CreateMealForm style={{ gridColumn: "span 3", gridRow: "span 2" }} />

      </DashboardContainer>
    </Layout >
  );
};

export default CreateMealPage;
