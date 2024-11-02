import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const AppointmentForm = () => {
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState({
    doctorId: '',
    patientId: '',
    dateTime: '',
    notes: '',
  });
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch doctors and patients from Firestore on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const doctorsCollection = collection(db, 'doctors');
        const patientsCollection = collection(db, 'patients');

        const [doctorsSnapshot, patientsSnapshot] = await Promise.all([
          getDocs(doctorsCollection),
          getDocs(patientsCollection),
        ]);

        const doctorsList = doctorsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const patientsList = patientsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setDoctors(doctorsList);
        setPatients(patientsList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare appointment data
    const appointmentData = {
      ...appointment,
      dateTime: new Date(appointment.dateTime), // Convert to JavaScript Date object
    };

    try {
      // Add a new document to the appointments collection
      await addDoc(collection(db, 'appointments'), appointmentData);
      console.log('Appointment created successfully:', appointmentData);

      // Navigate back to appointments list or a confirmation page
      navigate('/appointments');
    } catch (error) {
      console.error('Error adding appointment:', error);
    }
  };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

  return (
    <div className="appointment-form-container">
      <h2>Create an Appointment</h2>
      <form onSubmit={handleSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="doctorId">Doctor:</label>
          <select
            name="doctorId"
            value={appointment.doctorId}
            onChange={handleChange}
            required
          >
            <option value="">Select Doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name} - {doctor.specialization}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="patientId">Patient:</label>
          <select
            name="patientId"
            value={appointment.patientId}
            onChange={handleChange}
            required
          >
            <option value="">Select Patient</option>
            {patients.map((patient) => (
              <option key={patient.id} value={patient.id}>
                {patient.name} - {patient.contactDetails}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dateTime">Date & Time:</label>
          <input
            type="datetime-local"
            name="dateTime"
            value={appointment.dateTime}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="notes">Notes:</label>
          <textarea
            name="notes"
            value={appointment.notes}
            onChange={handleChange}
            placeholder="Add any notes for the appointment"
          />
        </div>

        <button type="submit" className="submit-button">Create Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
