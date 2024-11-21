import React from "react";
import HeaderMenu from "../core/assets/HeaderMenu.jsx";
import LeftMenu from "../core/assets/LeftMenu.jsx";
import Layout from "../core/assets/Layout.jsx";
import { DashboardContainer } from "../containers/DashboardContainer.jsx";
import CreateBMIForm from "../Form/CreateBMIForm.jsx";


const CreateBMIPage = () => {
  return (
    <Layout>
      <HeaderMenu />
      <LeftMenu />
      <DashboardContainer>

        <CreateBMIForm style={{ gridColumn: "span 3", gridRow: "span 2" }} />

      </DashboardContainer>
    </Layout >
  );
};

export default CreateBMIPage;
