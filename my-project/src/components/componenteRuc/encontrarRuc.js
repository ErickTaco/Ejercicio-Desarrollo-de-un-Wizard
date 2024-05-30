import metodosValidacion from "../../metodosValidacion.js";

export default {
  data() {
    return {
      text: "",
      code: "",
    };
  },
  methods: {
    blockNumbersAndSpecialChars(event) {
      metodosValidacion.allowOnlyNumbers(event);
    },
  },
};
