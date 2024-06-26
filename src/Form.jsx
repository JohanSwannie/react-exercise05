import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const checkForErrors = () => {
    const errors = [];
    if (!email || !password || !confirmPassword) {
      errors.push("You need to complete all fields");
    }
    if ([...email].filter((d) => d === "@").length !== 1) {
      errors.push("Email field must have one @ sign");
    }
    if (password.length < 8) {
      errors.push("Password need to be at least 8 characters in length");
    }
    if (password !== confirmPassword) {
      errors.push("Passwords must match");
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = checkForErrors();
    setErrorMessage(errors.length ? errors[0] : "Sign Up Successfull");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <div className="form-fields">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={email}
          autoFocus
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </div>
      <div className="errorMsg">{errorMessage}</div>
      <input type="submit" />
    </form>
  );
};

export default Form;
