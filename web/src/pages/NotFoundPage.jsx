import React from "react";
import HeaderMenu from "../core/assets/HeaderMenu.jsx";
import LeftMenu from "../core/assets/LeftMenu.jsx";
import Layout from "../core/assets/Layout.jsx";
import { DashboardContainer } from "../containers/DashboardContainer.jsx";
import Notfound from "../core/compoinents/NotFoundCompoinent.jsx";

const NotFoundPage = () => {
  return (
    <Layout>
      <HeaderMenu />
      <LeftMenu />
      <DashboardContainer>
        <Notfound />
      </DashboardContainer>
    </Layout >
  );
};

export default NotFoundPage;
