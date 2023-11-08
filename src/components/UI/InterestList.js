import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InterestList({ interests }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <span className="d-none d-lg-block">Interested in - </span>
        <ul style={{ listStyle: "none", display: "flex" }}>
          {interests.map((interest, index) => (
            <li className={"me-5"} key={index}>
              <FontAwesomeIcon icon={interest} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
