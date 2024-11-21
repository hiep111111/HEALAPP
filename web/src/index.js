import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes và Route
import { Provider } from 'react-redux'; // Import Provider
import { leftMenustore } from './store/leftMenuStore.js';
import DashboardPage from './pages/DashboardPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import DailyMealsDashboardPage from './pages/DailyMealsDashboardPage.jsx';
import CreateMealPage from './pages/CreateMealPage.jsx';
import MealSugestionPage from './pages/MealSugestionPage.jsx';
import HealthDashBoardPage from './pages/HealthDashBoardPage.jsx';
import CreateBMIPage from './pages/CreateBMIPage.jsx';
import ExerciseSuggestionPage from './pages/ExerciseSuggestionsPage.jsx';
import DietAdvidePage from './pages/DietAdvidePage.jsx';
import HealthyEatingHabitPage from './pages/HealthyEatingHabitPage.jsx';
import KnowLedgePage from './pages/KnowLedgePage.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={leftMenustore}>
      <Router>
        <Routes>
          <Route path="/dashboard/overview" element={<DashboardPage />} />
          <Route path="/mealTracking/trackDailyMeals" element={<DailyMealsDashboardPage />} />
          <Route path="/mealTracking/createMeal" element={<CreateMealPage />} />
          <Route path="/mealTracking/mealSuggestions" element={<MealSugestionPage />} />

          <Route path="/healthMetrics/trackWeightAndBMI" element={<HealthDashBoardPage />} />
          <Route path="/healthMetrics/createTrackWeightAndBMI" element={<CreateBMIPage />} />

          <Route path="/exerciseAndActivity/exerciseRecommendations" element={<ExerciseSuggestionPage />} />


          <Route path="/nutritionalEducation/dietaryTips" element={<DietAdvidePage />} />
          <Route path="/nutritionalEducation/healthyEatingHabits" element={<HealthyEatingHabitPage />} />
          <Route path="/nutritionalEducation/nutritionalKnowledge" element={<KnowLedgePage />} />

          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

