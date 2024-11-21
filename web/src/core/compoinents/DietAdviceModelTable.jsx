import React, { useState } from "react";
import { Table, Modal, Button } from "semantic-ui-react";
import { dietAdviceModel } from "../../models/dietAdviceModel";
import "./compoinentsCss/HeightCompoinent.css";

const DietAdviceModelTable = ({ style }) => {

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
            <Table.HeaderCell>ID </Table.HeaderCell>
            <Table.HeaderCell>Đề mục</Table.HeaderCell>
            <Table.HeaderCell>Mô tả</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {dietAdviceModel.map((data) => (
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
              <Table.Cell>{data.title}</Table.Cell>
              <Table.Cell>{data.description}</Table.Cell>

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
                  <strong>Đề mục</strong> {selectedMeal.title}
                </p>
                <p>
                  <strong>Mô tả</strong> {selectedMeal.description} cal/100g
                </p>

              </div>
            )}
          </div>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default DietAdviceModelTable;

