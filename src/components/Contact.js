import React, { useState } from "react";
import { validateEmail } from "../../src/utils/Validate";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Contact() {
  const [contactState, setContactState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = contactState;

  const [invalidEntry, setInvalidEntry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!invalidEntry) {
      console.log(contactState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setInvalidEntry("Submit valid email address.");
      } else {
        setInvalidEntry("");
      }
    } else {
      if (!e.target.value.length) {
        setInvalidEntry(`${e.target.name} required.`);
      } else {
        setInvalidEntry("");
      }
    }
    if (!invalidEntry) {
      setContactState({ ...contactState, [e.target.name]: e.target.value });
      console.log(contactState);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="standard-multiline-flexible"
        label="Name"
        placeholder="Enter Name"
        variant="outlined"
        multiline
        rowsMax={4}
        type="text"
        name="Name"
        defaultValue={name}
        onBlur={handleChange}
      />

      <TextField
        id="standard-multiline-flexible"
        label="Email"
        placeholder="Enter Email"
        variant="outlined"
        multiline
        rowsMax={4}
        type="email"
        name="email"
        defaultValue={email}
        onBlur={handleChange}
      />

      <TextField
        id="standard-multiline-flexible"
        label="Message"
        placeholder="Enter Message"
        variant="outlined"
        multiline
        rowsMax={4}
        type="text"
        name="Message"
        defaultValue={message}
        onBlur={handleChange}
      />

      {/*        <TextField
          id="outlined-basic"
          placeholder="Enter Subject"
          label="Subject"
          variant="outlined"
          value={this.state.subject}
          onChange={(e) => this.setState({ subject: e.target.value })}
          required
        /> */}

      {invalidEntry && (
        <div>
          <p>{invalidEntry}</p>
        </div>
      )}
      <Button type="submit">Submit</Button>
    </form>
  );
}
export default Contact;
