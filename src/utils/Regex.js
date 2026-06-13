export const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const maskPhone = (value) => {
  if (!value) return "";

  let formattedValue = value.replace(/\D/g, "");
  formattedValue = formattedValue.replace(/^(\d{2})(\d)/g, "($1) $2");
  formattedValue = formattedValue.replace(/(\d)(\d{4})$/, "$1-$2");

  return formattedValue;
};
