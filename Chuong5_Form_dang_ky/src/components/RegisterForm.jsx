import React, { useState } from 'react';
function validateEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}
export default function RegisterForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirm: ''
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Email không hợp lệ.';
    }
    if (formData.password.length < 8) {
      newErrors.password = 'Mật khẩu phải từ 8 ký tự trở lên.';
    }
    if (formData.password !== formData.confirm) {
      newErrors.confirm = 'Mật khẩu xác nhận không khớp.';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert('Đăng ký thành công!');
      // Reset form
      setFormData({ email: '', password: '', confirm: '' });
    }
  }
  return (
    <form onSubmit={handleSubmit} className="card">
      <div className="form-group">
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@gmail.com"
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div className="form-group" style={{ marginTop: 12 }}>
        <label>Mật khẩu</label>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Nhập mật khẩu"
        />
        {errors.password && <div className="error">{errors.password}</div>}
      </div>
      <div className="form-group" style={{ marginTop: 12 }}>
        <label>Xác nhận Mật khẩu</label>
        <input
          name="confirm"
          type="password"
          value={formData.confirm}
          onChange={handleChange}
          placeholder="Nhập lại mật khẩu"
        />
        {errors.confirm && <div className="error">{errors.confirm}</div>}
      </div>
      <button className="button" type="submit" style={{ marginTop: 16, width: '100%', backgroundColor: '#007bff', color: 'white' }}>
        Đăng ký
      </button>
    </form>
  );
}