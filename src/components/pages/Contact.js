import React from "react";
import Footer from "../inc/footer";
function Contact() {
  return (
    <>
      <div className="contact">
        <form action="action_page.php">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." /><br></br>
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." /><br></br>
          <label htmlFor="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select><br></br>
          <label htmlFor="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "100px" }} /><br></br>
          <input type="submit" className="submit" value="Submit" />
        </form>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Contact;
