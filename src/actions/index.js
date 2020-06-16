import CALL_API from "../middleware/api";

export const QUOTE_REQUEST = "QUOTE_REQUEST";
export const QUOTE_SUCCESS = "QUOTE_SUCCESS";
export const QUOTE_FAILURE = "QUOTE_FAILURE";

const fetchQuote = () => {
  console.log("Fetching")
  return {
    [CALL_API]: {
      types: [QUOTE_REQUEST, QUOTE_SUCCESS, QUOTE_FAILURE],
      endpoint: "quotes",
    },
  }
};

export const getQuote = () => (dispath) => {
  console.log("getingQuote");
  return dispath(fetchQuote());
};

export const RESET_ERROR_MESSAGE = "RESET_ERROR_MESSAGE";

// Resets the currently visible error message.
export const resetErrorMessage = () => ({
  type: RESET_ERROR_MESSAGE,
});
