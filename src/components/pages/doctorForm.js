// DoctorForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './DoctorForm.module.css';

const DoctorForm = () => {
  const navigate = useNavigate()
  const [doctor, setDoctor] = useState({
    doctorId: '',
    name: '',
    specialization: '',
    contactInfo: '',
    schedule: [{ slotId: '', startTime: '', endTime: '', available: true }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const handleScheduleChange = (index, field, value) => {
    const updatedSchedule = doctor.schedule.map((slot, i) =>
      i === index ? { ...slot, [field]: value } : slot
    );
    setDoctor({ ...doctor, schedule: updatedSchedule });
  };

  const addSlot = () => {
    setDoctor({
      ...doctor,
      schedule: [...doctor.schedule, { slotId: '', startTime: '', endTime: '', available: true }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Doctor Info:', doctor);
    navigate('/')
    
    // Handle form submission logic here
  };

  return (
    <form className="doctorForm" onSubmit={handleSubmit}>
      <h2 className="formTitle">Doctor Signup Form</h2>
      <label>
        Doctor ID:
        <input type="text" name="doctorId" value={doctor.doctorId} onChange={handleChange} required />
      </label>

      <label>
        Name:
        <input type="text" name="name" value={doctor.name} onChange={handleChange} required />
      </label>

      <label>
        Specialization:
        <input type="text" name="specialization" value={doctor.specialization} onChange={handleChange} required />
      </label>

      <label>
        Contact Information:
        <input type="email" name="contactInfo" value={doctor.contactInfo} onChange={handleChange} required />
      </label>

      <div className="scheduleSection">
        <h3>Schedule Slots</h3>
        {doctor.schedule.map((slot, index) => (
          <div key={index} className="slot">
            <label>
              Slot ID:
              <input
                type="text"
                value={slot.slotId}
                onChange={(e) => handleScheduleChange(index, 'slotId', e.target.value)}
                required
              />
            </label>

            <label>
              Start Time:
              <input
                type="datetime-local"
                value={slot.startTime}
                onChange={(e) => handleScheduleChange(index, 'startTime', e.target.value)}
                required
              />
            </label>

            <label>
              End Time:
              <input
                type="datetime-local"
                value={slot.endTime}
                onChange={(e) => handleScheduleChange(index, 'endTime', e.target.value)}
                required
              />
            </label>

            <label>
              Available:
              <select
                value={slot.available}
                onChange={(e) => handleScheduleChange(index, 'available', e.target.value === 'true')}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </label>
          </div>
        ))}
        <button type="button" className="addSlotButton" onClick={addSlot}>
          Add Slot
        </button>
      </div>

      <button type="submit" className="submitButton">Submit</button>
    </form>
  );
};

export default DoctorForm;