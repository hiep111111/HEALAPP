import React, { useState } from "react";
import { Table, Modal, Button } from "semantic-ui-react";
import { knowLedgeModel } from "../../models/knowLedgeModel";
import "./compoinentsCss/HeightCompoinent.css";

const KnowLedgeTable = ({ style }) => {

  const [selectedMeal, setSelectedMeal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMealClick = (data) => {
    setSelectedMeal(data);
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
            <Table.HeaderCell>Tên Topic</Table.HeaderCell>
            <Table.HeaderCell>Mô tả</Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>
          {knowLedgeModel.map((data) => (
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
              <Table.Cell>{data.topic}</Table.Cell>
              <Table.Cell>{data.description}</Table.Cell>
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
                  <strong>ID :</strong> {selectedMeal.id}
                </p>
                <p>
                  <strong>Tên Toppic:</strong> {selectedMeal.topic}
                </p>

                <p>
                  <strong>Mô tả:</strong> {selectedMeal.description}
                </p>
              </div>
            )}
          </div>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default KnowLedgeTable;

