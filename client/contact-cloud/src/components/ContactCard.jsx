import { Link } from "react-router-dom";
import UserGender from "./UserGender";
import CallButton from "./CallButton";
import "../styles/Card.css";

const ContactCard = ({ data }) => {
  const { _id, name, gender, number1, number2 } = data;

  return (
    <>
      <div className="card">
        <div className="gender-icon">
          {" "}
          <UserGender gender={gender} />
        </div>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="card-content-container">
            <span className="card-content">{number1}</span>
            <span>
              {" "}
              <CallButton number={number1} size={12} />
            </span>

            <span className="card-content"> {number2}</span>
            {number2 && (
              <span>
                {" "}
                <CallButton number={number2} size={12} />
              </span>
            )}
          </div>

          <Link to={`contact/description/${_id}`}>
            <button className="card-button">View More</button>
          </Link>
          <Link to={`editcontact/${_id}`} state={{ contact: data }}>
            <button className="card-button">Edit Contact</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
