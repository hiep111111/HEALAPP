import React from "react";
import HeaderMenu from "../core/assets/HeaderMenu.jsx";
import LeftMenu from "../core/assets/LeftMenu.jsx";
import Layout from "../core/assets/Layout.jsx";
import { DashboardContainer } from "../containers/DashboardContainer.jsx";
import ExerciseSuggestionsTable from "../core/compoinents/ExerciseSuggestionsTable.jsx";

const ExerciseSuggestionPage = () => {
  return (
    <Layout>
      <HeaderMenu />
      <LeftMenu />
      <DashboardContainer>
        <ExerciseSuggestionsTable style={{ gridColumn: "span 3", gridRow: "span 6" }} />
      </DashboardContainer>
    </Layout >
  );
};

export default ExerciseSuggestionPage;