import React, { useState } from 'react';

const Reserva = () => {
  const [roomType, setRoomType] = useState('');
  const [guests, setGuests] = useState(1);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Reserva confirmada para um quarto ${roomType} para ${guests} hóspedes.\nCheck-in: ${checkInDate}\nCheck-out: ${checkOutDate}`
    );
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Escolha o seu quarto de hotel</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="roomType" className="form-label">
            Tipo de Quarto
          </label>
          <select
            id="roomType"
            className="form-select"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            required
          >
            <option value="" disabled>
              Escolha o tipo de quarto
            </option>
            <option value="simples">Simples</option>
            <option value="duplo">Duplo</option>
            <option value="suite">Suíte</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="guests" className="form-label">
            Número de Hóspedes
          </label>
          <input
            type="number"
            id="guests"
            className="form-control"
            value={guests}
            min="1"
            onChange={(e) => setGuests(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="checkInDate" className="form-label">
            Data de Check-in
          </label>
          <input
            type="date"
            id="checkInDate"
            className="form-control"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="checkOutDate" className="form-label">
            Data de Check-out
          </label>
          <input
            type="date"
            id="checkOutDate"
            className="form-control"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Reservar
        </button>
      </form>
    </div>
  );
};

export default Reserva;
