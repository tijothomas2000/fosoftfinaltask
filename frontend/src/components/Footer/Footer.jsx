import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footercontainer">
        <div className="brandsection">
          <img src="src\assets\logo.jpg" alt="Brand Logo" />
        </div>
        <div className="usefullinks">
          <div className="usefullinkset">
            <h3>Quick Links</h3>
            <li>Popular Dishes</li>
            <li>Categories</li>
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
          </div>
          <div className="usefullinkset">
            <h3>Info</h3>
            <li>About Us</li>
            <li>Location</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li></div>
          <div className="usefullinkset">
            <h3>Socials</h3>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Youtube</li>
            <li>Whatsapp</li>
          </div>
        </div>
      </div>
    </div>
  )
}
