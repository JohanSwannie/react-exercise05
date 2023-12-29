import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const checkForErrors = () => {
    const errors = [];
    if (!email || !password || !confirmPassword) {
      errors.push("You need to complete all fields");
    }
    if ([...email].filter((d) => d === "@").length !== 1) {
      errors.push("Email field must have one @ sign");
    }

    alert(errors);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    checkForErrors();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <div className="form-fields">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <label htmlFor="email">Confirm Password</label>
        <input
          type="password"
          name="confirm-password"
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </div>
      <input type="submit"></input>
    </form>
  );
};

export default Form;
