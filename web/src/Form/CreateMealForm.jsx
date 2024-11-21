import React, { useState } from 'react';
import { Dropdown, Input, Button } from 'semantic-ui-react';
import '../core/compoinents/compoinentsCss/createMealForm.css';

const CreateMealForm = ({ style }) => {
  const [formData, setFormData] = useState({
    name: '',
    calories: '',
    proteins: '',
    fats: '',
    carbohydrates: '',
    meal_time: '',
  });

  // Hàm cập nhật giá trị các input
  const handleChange = (e, { name, value }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Hàm gửi dữ liệu tới server
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: formData.name,
      calories: parseFloat(formData.calories),
      proteins: parseFloat(formData.proteins),
      fats: parseFloat(formData.fats),
      carbohydrates: parseFloat(formData.carbohydrates),
      meal_time: formData.meal_time,
    };

    try {
      const response = await fetch('http://localhost:8000/create-meal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Meal created successfully!');
        setFormData({
          name: '',
          calories: '',
          proteins: '',
          fats: '',
          carbohydrates: '',
          meal_time: '',
        });
      } else {
        alert('Failed to create meal!');
      }
    } catch (error) {
      console.error('Error creating meal:', error);
    }
  };

  const mealTimeOptions = [
    { key: 'morning', value: 'Sáng', text: 'Sáng' },
    { key: 'afternoon', value: 'Trưa', text: 'Trưa' },
    { key: 'evening', value: 'Chiều', text: 'Chiều' },
    { key: 'night', value: 'Tối', text: 'Tối' },
  ];

  return (
    <div className='grid-item' style={style}>
      <form onSubmit={handleSubmit}>
        <h3>Tạo Bữa Ăn</h3>
        <br />
        <div className="ui two column grid">
          <div className="column">
            <div className="ui input fluid">
              <Input
                type="text"
                name="name"
                placeholder="Meal Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="ui input fluid">
              <Input
                type="number"
                name="calories"
                placeholder="Calories"
                value={formData.calories}
                onChange={handleChange}
              />
            </div>
            <div className="ui input fluid">

              <Input
                type="number"
                name="proteins"
                placeholder="Proteins (grams)"
                value={formData.proteins}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Cột 2 */}
          <div className="ui input fluid" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

            <div className="ui input fluid">
              <Input
                type="number"
                name="fats"
                placeholder="Fats (grams)"
                value={formData.fats}
                onChange={handleChange}
              />
            </div>
            <div className="ui input fluid" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

              <Input
                type="number"
                name="carbohydrates"
                placeholder="Carbohydrates (grams)"
                value={formData.carbohydrates}
                onChange={handleChange}
              />
            </div>
            <div className="ui input fluid" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <Dropdown
                placeholder='Select Meal Time'
                fluid
                selection
                options={mealTimeOptions}
                name="meal_time"
                value={formData.meal_time}
                onChange={handleChange}
                style={{ width: '100%', maxWidth: '500px', padding: '15px 20px', fontSize: '18px' }}
              />
            </div>
          </div>
        </div>

        <Button type="submit" color="green">Submit</Button>
      </form>
    </div >
  );
};

export default CreateMealForm;
