export const apiURL = () => {
    return window.location.hostname === "localhost"
      ? "http://localhost:3004"
      : "https://petite-yesi.herokuapp.com/";
  };

