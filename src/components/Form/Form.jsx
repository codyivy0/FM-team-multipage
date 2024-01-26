import { useState } from "react";
import styles from "./Form.module.css";
import Button from "../Button/Button";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("form data:", formData);
  }

  return (
    <div className={styles.formContainer}>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <br />

        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <br />

        <input
          type="text"
          placeholder="Company Name"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />

        <br />

        <input
          type="text"
          placeholder="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <br />

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <br />
        <Button className={styles.submitBtn}>submit</Button>
      </form>
    </div>
  );
};

export default Form;
