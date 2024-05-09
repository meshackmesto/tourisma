import React, { useState, useEffect } from "react";
import "./form.css";
import NavBar from "../components/NavBar";

export default function Form() {
  const [name, setName] = useState("");
  const [cities, setCities] = useState([]);
  const [destinationCountry, setDestinationCountry] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/cityData")
      .then((response) => response.json())
      .then((data) => setCities(data))
      .catch((error) => console.error("Error fetching cities:", error));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Thank you ${name}.\nYour request has been submitted.`);
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="form">
        <form onSubmit={handleSubmit} className="data">
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
                  Thanks so much for your interest in <b>Tourisma!</b> I'd love
                  to get to know you better before we chat! Can you tell me a
                  little bit about your travel interests?
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
                      onChange={(e) => setName(e.target.value)}
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
                  <label>Departure country</label>{" "}
                  <input placeholder="Your country" type="text" />
                </div>
                <div className="i_input">
                  <label>Destination country</label>
                  <select
                    value={destinationCountry}
                    onChange={(e) => setDestinationCountry(e.target.value)}
                  >
                    <option value="">Please Select</option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <div className="i_input">
                  <label>Departure Date</label>
                  <input type="date" placeholder="Date" />
                </div>
              </div>
              <div className="input">
                <div className="i_input">
                  <label>Return date</label>
                  <input type="date" placeholder="Date" />
                </div>
              </div>
              <div className="input">
                <div className="i_input" id="marked">
                  <label></label>
                  <select className="form-dropdown">
                    <option value="">Please Select</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                  </select>
                </div>
                <div className="i_input" id="marked">
                  <label></label>
                  <input type="text" />
                </div>
                <div className="i_input">
                  <label></label>
                  <input type="text" />
                </div>
              </div>
              <div className="check">
                <p>Plese check what you need</p>
                <label>Airline Ticket</label>{" "}
                <input type="checkbox" name="" id="" />
                <label>Rental car</label>{" "}
                <input type="checkbox" name="" id="" />
                <label>Hotel Accommodations</label>{" "}
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
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
