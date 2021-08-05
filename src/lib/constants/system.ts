export const DNS = process.env.NODE_ENV === "development"
  ? "https://legan.eu.ngrok.io"
  : "https://api.fodture.com";

export const NAME_REGEX = /[a-zA-ZáéíóúÁÉÍÓÚ]/;
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/;
export const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
