import React, { useState } from "react";
import { Table, Modal, Button } from "semantic-ui-react";
import { exerciseSuggestionsModels } from "../../models/exerciseSuggestionsModels";
import "./compoinentsCss/HeightCompoinent.css";

const ExerciseSuggestionsTable = ({ style }) => {

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
          {exerciseSuggestionsModels.map((data) => (
            <Table.Row key={data.id}>
              <Table.Cell>
                <a
                  href="#!"
                  onClick={() => handleMealClick(data)}
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  {data.id}
                </a>
              </Table.Cell>
              <Table.Cell>{data.name}</Table.Cell>
              <Table.Cell>{data.goal}</Table.Cell>
              <Table.Cell>{data.muscleGroup}</Table.Cell>
              <Table.Cell>{data.duration}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Modal open={isModalOpen} onClose={closeModal} centered>
        <Modal.Header>Thông tin </Modal.Header>
        <Modal.Content>
          <div style={{ color: "black" }}>
            {selectedMeal && (
              <div>
                <p>
                  <strong>ID :</strong> {selectedMeal.id}
                </p>
                <p>
                  <strong>Tên bài tập:</strong> {selectedMeal.name}
                </p>
                <p>
                  <strong>Mục tiêu:</strong> {selectedMeal.goal} cal/100g
                </p>
                <p>
                  <strong>Nhóm cơ:</strong> {selectedMeal.muscleGroup} g
                </p>
                <p>
                  <strong>Thời gian:</strong> {selectedMeal.duration} g
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

export default ExerciseSuggestionsTable;

