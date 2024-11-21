import { FaTachometerAlt, FaUser, FaFileAlt, FaWallet } from "react-icons/fa";

const LeftMenuItems = [
  {
    key: 'Dashboard',
    icon: <FaTachometerAlt />,
    label: 'Bảng Điều Khiển',
    link: '/dashboard',
    subItems: [
      { key: 'overview', label: 'Tổng Quan', link: '/dashboard/overview' },
      { key: 'stats', label: 'Thống Kê', link: '/dashboard/stats' },
    ],
  },
  {
    key: 'HealthInfoManagement',
    icon: <FaUser />,
    label: 'Theo Dõi Bữa Ăn',
    link: '/mealTracking',
    subItems: [
      { key: 'trackDailyMeals', label: 'Theo Dõi Bữa Ăn Hằng Ngày', link: '/mealTracking/trackDailyMeals' },
      { key: 'createMeal', label: 'Tạo Bữa Ăn', link: '/mealTracking/createMeal' },
      { key: 'mealSuggestions', label: 'Gợi Ý Bữa Ăn', link: '/mealTracking/mealSuggestions' },
    ],
  },
  {
    key: 'HealthMetricsManagement',
    icon: <FaUser />,
    label: 'Chỉ Số Sức Khỏe',
    link: '/healthMetrics',
    subItems: [
      { key: 'trackWeightAndBMI', label: 'Theo Dõi Cân Nặng và BMI', link: '/healthMetrics/trackWeightAndBMI' },
      { key: 'trackPhysicalActivity', label: 'Thêm Cân Nặng và BMI', link: '/healthMetrics/createTrackWeightAndBMI' },
    ],
  },
  {
    key: 'ExerciseAndActivity',
    icon: <FaFileAlt />,
    label: 'Bài Tập và Hoạt Động',
    link: '/exerciseAndActivity',
    subItems: [
      { key: 'exerciseRecommendations', label: 'Gợi Ý Bài Tập', link: '/exerciseAndActivity/exerciseRecommendations' },
      { key: 'activityLog', label: 'Nhật Ký Hoạt Động', link: '/exerciseAndActivity/activityLog' },
      { key: 'trackExerciseProgress', label: 'Theo Dõi Tiến Trình Tập Luyện', link: '/exerciseAndActivity/trackExerciseProgress' },
    ],
  },
  {
    key: 'NutritionalEducation',
    icon: <FaWallet />,
    label: 'Giáo Dục Dinh Dưỡng',
    link: '/nutritionalEducation',
    subItems: [
      { key: 'dietaryTips', label: 'Lời Khuyên Về Chế Độ Ăn', link: '/nutritionalEducation/dietaryTips' },
      { key: 'healthyEatingHabits', label: 'Thói Quen Ăn Uống Lành Mạnh', link: '/nutritionalEducation/healthyEatingHabits' },
      { key: 'nutritionalKnowledge', label: 'Kiến Thức Dinh Dưỡng', link: '/nutritionalEducation/nutritionalKnowledge' },
    ],
  }
];

export default LeftMenuItems;
