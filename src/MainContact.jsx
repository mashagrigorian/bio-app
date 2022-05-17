const MainContact = () => {
  return (
    <>
      {/* <h1>Create App</h1> */}
      <link rel="icon" />
      <h1>Contact Us</h1>
      <p className="sub-title">lorem ipsum</p>
      <div id="contact-container">
        <div className="contact-info">
          <h4>Contact Information</h4>
          <p>Fill up the form and then click send</p>
          <div className="icon-text">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <span>+374 10 651-631</span>
          </div>
          <div className="icon-text">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <span>info@cep.am antifraud@epiu.am</span>
          </div>
          <div className="icon-text">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <span>129 Armenakyan Street, Yerevan</span>
          </div>
          <div className="social-media">
            <a href="#" className="icon-circle">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="#" className="icon-circle">
              <i class="fa fa-youtube" aria-hidden="true"></i>
            </a>
            <a href="#" className="icon-circle">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <form>
          <div className="col">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label>Email</label>
              <input type="email" />
            </div>
          </div>
          <div className="col">
            <div className="form-group solo">
              <label>Message</label>
              <textarea></textarea>
            </div>
          </div>
          <div className="col">
            <div className="form-group solo right">
              <button className="primary">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default MainContact;
