import React from "react";
import "./ContactForm.css";
import {
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { useForm, Controller } from 'react-hook-form';

function ContactForm() {
  const { control, handleSubmit } = useForm();

  const yourSubmitFunction = (data) => {
    console.log(data); // This will contain the form data
    // You can now send the form data to your server or perform any necessary actions.
  };

  return (
    <div className="contactForm__container">
      <div className="contactForm__bg">

      <Typography variant="h5" gutterBottom>
        Contact Us
      </Typography>
      {/* <Divider className="contactForm__divider" /> */}
      <form onSubmit={handleSubmit(yourSubmitFunction)}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
            fullWidth
            label="Your Email Address"
            variant="filled"
            margin="normal"
            className="contactForm__input"
            InputLabelProps={{
                classes: {
                  root: 'input-label-color-default', // Add a CSS class for default state
                  focused: 'input-label-color-focus', // Add a CSS class for focused state
                },
              }}
              InputProps={{
                classes: {
                  underline: 'customInputUnderline',
                },
                style: { color: '#dde6ed' },
              }}
              {...field}
              />
              )}
              />
        <Controller
          name="subject"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
            fullWidth
            label="Subject"
            variant="filled"
            margin="normal"
            className="contactForm__input"
            InputLabelProps={{
              classes: {
                root: 'input-label-color-default', // Add a CSS class for default state
                focused: 'input-label-color-focus', // Add a CSS class for focused state
              },
              }}
              InputProps={{
                classes: {
                  underline: 'customInputUnderline',
                },
                style: { color: '#dde6ed' },
              }}
              {...field}
              />
              )}
              />
        <Controller
          name="message"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            variant="filled"
            margin="normal"
            className="contactForm__input"
            InputLabelProps={{
              classes: {
                root: 'input-label-color-default', // Add a CSS class for default state
                focused: 'input-label-color-focus', // Add a CSS class for focused state
              },
            }}
            InputProps={{
              classes: {
                underline: 'customInputUnderline',
              },
              style: { color: '#dde6ed' },
            }}
            {...field}
            />
            )}
            />
        <Button
          type="submit"
          variant="contained"
          className="contactForm__button"
          fullWidth
          >
          Send Message
        </Button>
      </form>
          </div>
    </div>
  );
}

export default ContactForm;
