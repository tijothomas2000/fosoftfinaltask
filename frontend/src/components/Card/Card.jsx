import "./Card.scss";

export default function Card({ ...props }) {
  return (
    <div className="card">
      <figure className="imagecontainer">
        <img src={`${props.image}`} alt="" />
      </figure>
      <div className="itemtitle">
        <h3>{props.name}</h3>
      </div>
    </div>
  )
}
