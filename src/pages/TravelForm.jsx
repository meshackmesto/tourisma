import React, { useState } from "react";
import "./form.css";
import NavBar from '../components/NavBar';

export default function Form() {
  const [name, setName] = useState("");

  function handleSubmit() {
    console.alert(`Thanktou ${name} .n/Your request has been submitted.`);
  }
  return (
    <div onSubmit={handleSubmit} className="form">
      <header>
        <NavBar />
      </header>
      <form className="data">
        <div className="form_header">
          <div className="form_image">
            <img
              src="https://www.jotform.com/uploads/ugurg/form_files/Travel_Agency_Survey_2.65cce1001fb2d4.19846425.png"
              alt="header"
            />
          </div>

          <div className="header_text">
            <h1 className="header">Tourisma Survey</h1>

            <div className="h_text">
              <p>
                Thanks so much for your interest in <b>Tourisma!</b> I'd love to
                get to know you better before we chat! Can you tell me a little
                bit about your travel interests?
              </p>
            </div>
          </div>
        </div>

        <div className="details">
          <div className="form_section">
            <div className="f_i">
              <div className="input">
                <div className="i_input">
                  <label>Title</label>
                  <select className="form-dropdown">
                    <option value="">Please Select</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                  </select>
                </div>

                <div className="i_input">
                  <label>Name</label>{" "}
                  <input
                    placeholder="Name"
                    type="text"
                    value={name}
                    onChange={setName}
                  />
                </div>
              </div>

              <div className="input">
                <div className="i_input">
                  <label>Birth date</label>{" "}
                  <input placeholder="MM-DD-YYYY" type="date" />
                </div>

                <div className="i_input">
                  <label>Organization name</label>{" "}
                  <input placeholder="" type="text" />
                </div>
              </div>

              <div className="input">
                <div className="i_input">
                  <label>E-mail</label>{" "}
                  <input placeholder="myname@example.com" type="email" />
                </div>

                <div className="i_input">
                  <label>Phone number</label>{" "}
                  <input placeholder="0000-000-000" type="text" />
                </div>
              </div>
            </div>
          </div>

          <div className="t_details">
            <header>Travel Details</header>
            <div className="selection">
              <div className="i_input">
                <label>Departure coutry</label>{" "}
                <input placeholder="Your country" type="text" />
              </div>

              <div className="i_input">
                <label>Destination country</label>
                <select name="country" id=".country" />{" "}
              </div>
            </div>{" "}
            <div>
              <div className="i_input">
                <label>Departure Time</label>
                <input type="date" placeholder="Date" />
              </div>
              <select className="form-dropdown">
                <option value="">PM</option>
                <option value="">AM</option>
              </select>
            </div>
            <div className="input">
              <div className="i_input">
                <label>Return date</label>
                <input type="date" placeholder="Date" />
              </div>
              <div className="i_input"></div>
              <select className="form-dropdown">
                <option value="PM">PM</option>
                <option value="Am">AM</option>
              </select>
              <label></label> <input type="text" />
              <label></label> <input type="text" />
            </div>
            <div className="input">
              <label></label>
              <div className="i_input"></div>
              <select className="form-dropdown">
                <option value="">Please Select</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
              </select>
              <label></label> <input type="text" />
              <label></label> <input type="text" />
            </div>
            <label></label>
            <div className="i_input"></div>
            <select className="form-dropdown"></select>
            <label></label> <input type="text" />
            <label></label> <input type="text" />
            <div className="check">
              <p>Plese check what you need</p>
              <label>Airline Ticket</label>{" "}
              <input type="checkbox" name="" id="" />
              <label>Rental car</label> <input type="checkbox" name="" id="" />
              <label>Hotel Accomadations</label>{" "}
              <input type="checkbox" name="" id="" />
              <div>
                <div className="i_input">
                  <label>Preferred hotel brand</label>
                  <input type="text" />
                </div>

                <div className="i_input">
                  <label>Preferred airline</label>
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>
          <button type="submit">Submitt</button>
        </div>
      </form>
    </div>
  );
}
