import React, { useState } from 'react';
import { Dropdown, Input, Button } from 'semantic-ui-react';
import '../core/compoinents/compoinentsCss/createMealForm.css';

const CreateBMIForm = ({ style }) => {
  const [formData, setFormData] = useState({
    user_id: '60c72b2f9ebc9f3e3b9b3a61', // Giá trị user_id cố định
    date: '', // Sẽ tự động lấy ngày hiện tại
    weight: '',
    height: '',
    calories_burned: '',
    steps: '',
    activity_level: '',
  });

  const handleChange = (e, { name, value }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ...formData,
      date: new Date().toISOString().split('T')[0],
      weight: parseFloat(formData.weight),
      height: parseFloat(formData.height),
      calories_burned: parseFloat(formData.calories_burned),
      steps: parseFloat(formData.steps),
    };

    try {
      const response = await fetch('http://localhost:8000/create-health_stats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Health stats created successfully!');
        setFormData({
          user_id: '60c72b2f9ebc9f3e3b9b3a61', // Reset user_id
          date: '',
          weight: '',
          height: '',
          calories_burned: '',
          steps: '',
          activity_level: '',
        });
      } else {
        alert('Failed to create health stats!');
      }
    } catch (error) {
      console.error('Error creating health stats:', error);
    }
  };

  const activityLevelOptions = [
    { key: 'low', value: 'Low', text: 'Low' },
    { key: 'moderate', value: 'Moderate', text: 'Moderate' },
    { key: 'high', value: 'High', text: 'High' },
  ];

  return (
    <div className='grid-item' style={style}>
      <form onSubmit={handleSubmit}>
        <h3>Tạo Thông Tin Sức Khỏe</h3>
        <br />
        <div className="ui two column grid">
          <div className="column">
            <div className="ui input fluid">
              <Input
                type="number"
                name="weight"
                placeholder="Cân nặng (kg)"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
            <div className="ui input fluid">
              <Input
                type="number"
                name="height"
                placeholder="Chiều cao (cm)"
                value={formData.height}
                onChange={handleChange}
              />
            </div>
            <div className="ui input fluid">
              <Input
                type="number"
                name="calories_burned"
                placeholder="Lượng calo tiêu thụ"
                value={formData.calories_burned}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Cột 2 */}
          <div className="column">
            <div className="ui input fluid">
              <Input
                type="number"
                name="steps"
                placeholder="Số bước chân"
                value={formData.steps}
                onChange={handleChange}
              />
            </div>
            <div className="ui input fluid">
              <Dropdown
                placeholder='Mức độ hoạt động'
                fluid
                selection
                options={activityLevelOptions}
                name="activity_level"
                value={formData.activity_level}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <Button type="submit" color="green">Submit</Button>
      </form>
    </div>
  );
};

export default CreateBMIForm;
