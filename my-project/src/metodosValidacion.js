export default {
  blockNumbersAndSpecialChars(event) {
    const charCode = event.charCode;

    if (
      (charCode >= 48 && charCode <= 57) ||
      (charCode >= 33 && charCode <= 47) ||
      (charCode >= 58 && charCode <= 64) ||
      (charCode >= 91 && charCode <= 96) ||
      (charCode >= 123 && charCode <= 126)
    ) {
      event.preventDefault();
    }
  },

  allowOnlyNumbers(event) {
    const charCode = event.charCode;

    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  },
};
