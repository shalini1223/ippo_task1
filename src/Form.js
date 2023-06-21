import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'; 

const Form = () => {
  const [nums, setNums] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/save-results', { nums });
      setResult(response.data.result);
    } catch (error) {
      console.error('Error saving results:', error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Enter the numbers (comma-separated):
          <input type="text" value={nums} onChange={(e) => setNums(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {result && (
        <div className="result-container">
          Minimum absolute difference: {result}
        </div>
      )}
    </div>
  );
};

export default Form;
