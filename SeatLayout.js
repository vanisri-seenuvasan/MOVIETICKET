import React, { useState,useEffect } from 'react';
import './SeatLayout.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import SeatReservation from './SeatReservation';
const SeatLayout = () => {
  const [name, setName] = useState('');
  const [numSeats, setNumSeats] = useState('');
  const [selectedSeats, setSelectedSeats] = useState('');
  const onDataSubmit = (submittedName, submittedNumSeats) => {
    setName(submittedName);
    setNumSeats(submittedNumSeats);
  };
  const onLoaderFunc = () => {
    // Add any initialization logic here
  };
  const clearSeats = () => {
    document.querySelectorAll('.seats:checked').forEach((checkbox) => {
      checkbox.checked = false;
    });
    setSelectedSeats('');
  };

  const handlePayment = () => {
    // Add logic for handling payment
    // You can use the selectedSeats, name, and numSeats state values for this logic
    alert(`Payment logic goes here`);
  };

  const takeData = () => {
    // Add logic for handling data when "Start Selecting" button is clicked
  };

  const updateTextArea = () => {
    if ($("input:checked").length === parseInt($("#Numseats").val())) {
      $(".seatStructure *").prop("disabled", true);

      const allSeatsVals = [];
      $('#seatsBlock :checked').each(function () {
        allSeatsVals.push($(this).val());
      });

      setSelectedSeats(allSeatsVals);
      onDataSubmit($("#Username").val(), $("#Numseats").val());
    } else {
      alert("Please select " + $("#Numseats").val() + " seats");
    }
    
    
    const selectedCheckboxes = document.querySelectorAll('.seats:checked');
  const selectedSeatsArray = Array.from(selectedCheckboxes).map((checkbox) => checkbox.value);
  const selectedSeatsString = selectedSeatsArray.join(', ');
  setSelectedSeats(selectedSeatsString);
    // Add logic for updating text area when "Confirm Selection" button is clicked
  };
  useEffect(() => {
    onLoaderFunc();
  }, []);
  
  return (
      <div >
        
      <SeatReservation onDataSubmit={onDataSubmit} />
      

      <div className="seatStructure">
        <center>
          <table id="seatsBlock">
            <tbody>
              <tr>
                <td colspan="14">
                  <div className="screen">SCREEN</div>
                </td>
                <td rowspan="20">
                  <div className="smallBox greenBox">Selected Seat</div> <br />
                  <div className="smallBox redBox">Reserved Seat</div>
                  <br />
                  <div className="smallBox emptyBox">Empty Seat</div>
                  <br />
                </td>
              </tr>

              <tr>
    <td></td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    <td></td>
    <td>6</td>
    <td>7</td>
    <td>8</td>
    <td>9</td>
    <td>10</td>
    <td>11</td>
    <td>12</td>
</tr>
  
<tr>
  <td>A</td>
  <td><input type="checkbox" className="seats" value="A1" /></td>
  <td><input type="checkbox" className="seats" value="A2" /></td>
  <td><input type="checkbox" className="seats" value="A3" /></td>
  <td><input type="checkbox" className="seats" value="A4" /></td>
  <td><input type="checkbox" className="seats" value="A5" /></td>
  <td className="seatGap"></td>
  <td><input type="checkbox" className="seats" value="A6" /></td>
  <td><input type="checkbox" className="seats" value="A7" /></td>
  <td><input type="checkbox" className="seats" value="A8" /></td>
  <td><input type="checkbox" className="seats" value="A9" /></td>
  <td><input type="checkbox" className="seats" value="A10" /></td>
  <td><input type="checkbox" className="seats" value="A11" /></td>
  <td><input type="checkbox" className="seats" value="A12" /></td>
</tr>

  
  <tr>
  <td>B</td>
  <td><input type="checkbox" className="seats" value="B1" /></td>
  <td><input type="checkbox" className="seats" value="B2" /></td>
  <td><input type="checkbox" className="seats" value="B3" /></td>
  <td><input type="checkbox" className="seats" value="B4" /></td>
  <td><input type="checkbox" className="seats" value="B5" /></td>
  <td></td>
  <td><input type="checkbox" className="seats" value="B6" /></td>
  <td><input type="checkbox" className="seats" value="B7" /></td>
  <td><input type="checkbox" className="seats" value="B8" /></td>
  <td><input type="checkbox" className="seats" value="B9" /></td>
  <td><input type="checkbox" className="seats" value="B10" /></td>
  <td><input type="checkbox" className="seats" value="B11" /></td>
  <td><input type="checkbox" className="seats" value="B12" /></td>
</tr>

  
  <tr>
  <td>C</td>
  <td><input type="checkbox" className="seats" value="C1" /></td>
  <td><input type="checkbox" className="seats" value="C2" /></td>
  <td><input type="checkbox" className="seats" value="C3" /></td>
  <td><input type="checkbox" className="seats" value="C4" /></td>
  <td><input type="checkbox" className="seats" value="C5" /></td>
  <td></td>
  <td><input type="checkbox" className="seats" value="C6" /></td>
  <td><input type="checkbox" className="seats" value="C7" /></td>
  <td><input type="checkbox" className="seats" value="C8" /></td>
  <td><input type="checkbox" className="seats" value="C9" /></td>
  <td><input type="checkbox" className="seats" value="C10" /></td>
  <td><input type="checkbox" className="seats" value="C11" /></td>
  <td><input type="checkbox" className="seats" value="C12" /></td>
</tr>

  
<tr>
  <td>D</td>
  <td><input type="checkbox" className="seats" value="D1" /></td>
  <td><input type="checkbox" className="seats" value="D2" /></td>
  <td><input type="checkbox" className="seats" value="D3" /></td>
  <td><input type="checkbox" className="seats" value="D4" /></td>
  <td><input type="checkbox" className="seats" value="D5" /></td>
  <td></td>
  <td><input type="checkbox" className="seats" value="D6" /></td>
  <td><input type="checkbox" className="seats" value="D7" /></td>
  <td><input type="checkbox" className="seats" value="D8" /></td>
  <td><input type="checkbox" className="seats" value="D9" /></td>
  <td><input type="checkbox" className="seats" value="D10" /></td>
  <td><input type="checkbox" className="seats" value="D11" /></td>
  <td><input type="checkbox" className="seats" value="D12" /></td>
</tr>

  
<tr>
  <td>E</td>
  <td><input type="checkbox" className="seats" value="E1" /></td>
  <td><input type="checkbox" className="seats" value="E2" /></td>
  <td><input type="checkbox" className="seats" value="E3" /></td>
  <td><input type="checkbox" className="seats" value="E4" /></td>
  <td><input type="checkbox" className="seats" value="E5" /></td>
  <td></td>
  <td><input type="checkbox" className="seats" value="E6" /></td>
  <td><input type="checkbox" className="seats" value="E7" /></td>
  <td><input type="checkbox" className="seats" value="E8" /></td>
  <td><input type="checkbox" className="seats" value="E9" /></td>
  <td><input type="checkbox" className="seats" value="E10" /></td>
  <td><input type="checkbox" className="seats" value="E11" /></td>
  <td><input type="checkbox" className="seats" value="E12" /></td>
</tr>

  
<tr class="seatVGap"></tr>
  
<tr>
  <td>F</td>
  <td><input type="checkbox" className="seats" value="F1" /></td>
  <td><input type="checkbox" className="seats" value="F2" /></td>
  <td><input type="checkbox" className="seats" value="F3" /></td>
  <td><input type="checkbox" className="seats" value="F4" /></td>
  <td><input type="checkbox" className="seats" value="F5" /></td>
  <td></td>
  <td><input type="checkbox" className="seats" value="F6" /></td>
  <td><input type="checkbox" className="seats" value="F7" /></td>
  <td><input type="checkbox" className="seats" value="F8" /></td>
  <td><input type="checkbox" className="seats" value="F9" /></td>
  <td><input type="checkbox" className="seats" value="F10" /></td>
  <td><input type="checkbox" className="seats" value="F11" /></td>
  <td><input type="checkbox" className="seats" value="F12" /></td>
</tr>

  
<tr>
  <td>G</td>
  <td><input type="checkbox" className="seats" value="G1" /></td>
  <td><input type="checkbox" className="seats" value="G2" /></td>
  <td><input type="checkbox" className="seats" value="G3" /></td>
  <td><input type="checkbox" className="seats" value="G4" /></td>
  <td><input type="checkbox" className="seats" value="G5" /></td>
  <td></td>
  <td><input type="checkbox" className="seats" value="G6" /></td>
  <td><input type="checkbox" className="seats" value="G7" /></td>
  <td><input type="checkbox" className="seats" value="G8" /></td>
  <td><input type="checkbox" className="seats" value="G9" /></td>
  <td><input type="checkbox" className="seats" value="G10" /></td>
  <td><input type="checkbox" className="seats" value="G11" /></td>
  <td><input type="checkbox" className="seats" value="G12" /></td>
</tr>

  
<tr>
  <td>H</td>
  <td><input type="checkbox" className="seats" value="H1" /></td>
  <td><input type="checkbox" className="seats" value="H2" /></td>
  <td><input type="checkbox" className="seats" value="H3" /></td>
  <td><input type="checkbox" className="seats" value="H4" /></td>
  <td><input type="checkbox" className="seats" value="H5" /></td>
  <td></td>
  <td><input type="checkbox" className="seats" value="H6" /></td>
  <td><input type="checkbox" className="seats" value="H7" /></td>
  <td><input type="checkbox" className="seats" value="H8" /></td>
  <td><input type="checkbox" className="seats" value="H9" /></td>
  <td><input type="checkbox" className="seats" value="H10" /></td>
  <td><input type="checkbox" className="seats" value="H11" /></td>
  <td><input type="checkbox" className="seats" value="H12" /></td>
</tr>

  
<tr>
  <td>I</td>
  <td><input type="checkbox" className="seats" value="I1" /></td>
  <td><input type="checkbox" className="seats" value="I2" /></td>
  <td><input type="checkbox" className="seats" value="I3" /></td>
  <td><input type="checkbox" className="seats" value="I4" /></td>
  <td><input type="checkbox" className="seats" value="I5" /></td>
  <td></td>
  <td><input type="checkbox" className="seats" value="I6" /></td>
  <td><input type="checkbox" className="seats" value="I7" /></td>
  <td><input type="checkbox" className="seats" value="I8" /></td>
  <td><input type="checkbox" className="seats" value="I9" /></td>
  <td><input type="checkbox" className="seats" value="I10" /></td>
  <td><input type="checkbox" className="seats" value="I11" /></td>
  <td><input type="checkbox" className="seats" value="I12" /></td>
</tr>

  
<tr>
  <td>J</td>
  <td><input type="checkbox" className="seats" value="J1" /></td>
  <td><input type="checkbox" className="seats" value="J2" /></td>
  <td><input type="checkbox" className="seats" value="J3" /></td>
  <td><input type="checkbox" className="seats" value="J4" /></td>
  <td><input type="checkbox" className="seats" value="J5" /></td>
  <td></td>
  <td><input type="checkbox" className="seats" value="J6" /></td>
  <td><input type="checkbox" className="seats" value="J7" /></td>
  <td><input type="checkbox" className="seats" value="J8" /></td>
  <td><input type="checkbox" className="seats" value="J9" /></td>
  <td><input type="checkbox" className="seats" value="J10" /></td>
  <td><input type="checkbox" className="seats" value="J11" /></td>
  <td><input type="checkbox" className="seats" value="J12" /></td>
</tr>

</tbody>
          </table>
          <br />
          
          <center>
          <button onClick={updateTextArea}>Confirm Selection</button>
          <br/>
          <br/>
          <button onClick={clearSeats}>Clear</button>
          <br/>
          <br/>

          </center>
        </center>
      </div>

      <br />
      <br />

      <div className="displayerBoxes">
        <center>
          <table className="Displaytable">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Number of Seats</th>
                <th>Seats</th>
              </tr>
              <tr>
                <td>
                  <textarea id="nameDisplay" value={name} readOnly></textarea>
                </td>
                <td>
                  <textarea id="NumberDisplay" value={numSeats} readOnly></textarea>
                </td>
                <td>
                  <textarea id="seatsDisplay" value={selectedSeats} readOnly></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={handlePayment}>
            <Link to="/payment">
            Payment
            </Link>
            </button>
        </center>
      </div>
      
    </div>
  );
};

export default SeatLayout;
