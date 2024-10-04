import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ShippingAddressForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    country: 'India',
    state: '',
    pinCode: '',
    phone: '',
    isDifferentBillingAddress: false
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Validate form inputs
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.pinCode.trim()) {
      newErrors.pinCode = 'Pin Code is required';
    } else if (!/^\d{6}$/.test(formData.pinCode)) {
      newErrors.pinCode = 'Invalid Pin Code';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid Phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Data:', formData);
      // Add form submission logic here
    }
  };

  return (
    
    <form 
      onSubmit={handleSubmit} 
      style={styles.form}
    >
      <h3 style={styles.heading}>Shipping Address</h3>

      <div style={styles.formGroup}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.name && <p style={styles.error}>{errors.name}</p>}
      </div>

      <div style={styles.formGroup}>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.address && <p style={styles.error}>{errors.address}</p>}
      </div>

      <div style={styles.formGroup}>
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.city && <p style={styles.error}>{errors.city}</p>}
      </div>

      <div style={styles.formGroup}>
        <label>Country:</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="India">India</option>
          {/* Add more countries if needed */}
        </select>
      </div>

      <div style={styles.formGroup}>
        <label>State:</label>
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="">Select State</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Kerala">Kerala</option>
          <option value="Karnataka">Karnataka</option>
          {/* Add more states as needed */}
        </select>
        {errors.state && <p style={styles.error}>{errors.state}</p>}
      </div>

      <div style={styles.formGroup}>
        <label>Pin Code:</label>
        <input
          type="text"
          name="pinCode"
          value={formData.pinCode}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.pinCode && <p style={styles.error}>{errors.pinCode}</p>}
      </div>

      <div style={styles.formGroup}>
        <label>Phone:</label>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="India Flag" width={24} style={{ marginRight: '8px' }} />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{ ...styles.input, flex: 1 }}
          />
        </div>
        {errors.phone && <p style={styles.error}>{errors.phone}</p>}
      </div>

      <div style={styles.formGroup}>
        <label>
          <input
            type="checkbox"
            name="isDifferentBillingAddress"
            checked={formData.isDifferentBillingAddress}
            onChange={handleChange}
          />
          {' '}Check if Shipping and Billing address are different.
        </label>
      </div>

      <button type="submit" style={styles.button}>
       <Link to="/payment">Ship To This Address</Link> 
       
      </button>
    </form>
  );
};

// CSS-in-JS styling with media queries
const styles = {
  form: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '16px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '16px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '4px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    boxSizing: 'border-box',  // Ensure padding does not affect width
  },
  error: {
    color: 'red',
    marginTop: '4px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#550a35',
    color: '#550a35',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  // Media query for smaller screens
  '@media (max-width: 600px)': {
    form: {
      padding: '12px',  // Adjust padding for smaller screens
    },
    input: {
      fontSize: '14px',  // Adjust font size for smaller screens
    },
    button: {
      padding: '8px',  // Adjust button padding
      fontSize: '14px',  // Adjust button font size
    },
  }
};

export default ShippingAddressForm;
