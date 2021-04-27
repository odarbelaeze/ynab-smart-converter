import { FC } from "react";
import "./ConfigSelector.css";

interface Props {
  headers: string[];
}

const ConfigSelector: FC<Props> = ({ headers }) => {
  return (
    <div className="ConfigSelector">
      {["Date", "Payee", "Memo", "Ammount"].map((name) => (
        <div className="ConfigSelector-field" key={name}>
          <label htmlFor={name}>{name}</label>
          <select id={name}>
            <option>Choose option</option>

            <option
              style={{
                fontSize: "1pt",
                backgroundColor: "lightgray",
                padding: "8px",
              }}
              disabled
            >
              &nbsp;
            </option>
            {headers.map((header) => (
              <option key={`${name}:${header}`}>{header}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default ConfigSelector;
