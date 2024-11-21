import React, { useState } from "react";
import { Table, Modal, Button } from "semantic-ui-react";
import { mealSuggestionsModels } from "../../models/mealSuggestionsModels";
import "./compoinentsCss/HeightCompoinent.css";

const MealSugestionTable = ({ style }) => {

  const [selectedMeal, setSelectedMeal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMeal(null);
  };

  return (
    <div className="grid-item" style={{ ...style }}>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID Món ăn</Table.HeaderCell>
            <Table.HeaderCell>Tên món ăn</Table.HeaderCell>
            <Table.HeaderCell>Lượng calo trên /100g</Table.HeaderCell>
            <Table.HeaderCell>Proteins (g)</Table.HeaderCell>
            <Table.HeaderCell>Chất béo (g)</Table.HeaderCell>
            <Table.HeaderCell>Tinh Bột (g)</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {mealSuggestionsModels.map((meal) => (
            <Table.Row key={meal.id}>
              <Table.Cell>
                <a
                  href="#!"
                  onClick={() => handleMealClick(meal)}
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  {meal.id}
                </a>
              </Table.Cell>
              <Table.Cell>{meal.name}</Table.Cell>
              <Table.Cell>{meal.calories}</Table.Cell>
              <Table.Cell>{meal.proteins}</Table.Cell>
              <Table.Cell>{meal.fats}</Table.Cell>
              <Table.Cell>{meal.carbs}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Modal open={isModalOpen} onClose={closeModal} centered>
        <Modal.Header>Thông tin món ăn</Modal.Header>
        <Modal.Content>
          <div style={{ color: "black" }}>
            {selectedMeal && (
              <div>
                <p>
                  <strong>ID Món ăn:</strong> {selectedMeal.id}
                </p>
                <p>
                  <strong>Tên món ăn:</strong> {selectedMeal.name}
                </p>
                <p>
                  <strong>Lượng calo:</strong> {selectedMeal.calories} cal/100g
                </p>
                <p>
                  <strong>Proteins:</strong> {selectedMeal.proteins} g
                </p>
                <p>
                  <strong>Chất béo:</strong> {selectedMeal.fats} g
                </p>
                <p>
                  <strong>Tinh Bột:</strong> {selectedMeal.carbs} g
                </p>
                <p>
                  <strong>Nguyên liệu:</strong> {selectedMeal.ingredients}
                </p>
                <p>
                  <strong>Hướng dẫn:</strong> {selectedMeal.instructions}
                </p>
              </div>
            )}
          </div>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default MealSugestionTable;

