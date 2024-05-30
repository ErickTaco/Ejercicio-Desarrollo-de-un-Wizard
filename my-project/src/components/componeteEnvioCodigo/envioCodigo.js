import axios from "axios";
import metodosValidacion from "../../metodosValidacion.js";
export default {
  data() {
    return {
      nombre: "",
      apellido: "",
      telefono: "",
      codigoValidado: false,
      codigo: "",
      formEnviado: false,
    };
  },
  methods: {
    blockNumbersAndSpecialChars(event) {
      metodosValidacion.blockNumbersAndSpecialChars(event);
    },

    allowOnlyNumbers(event) {
      metodosValidacion.allowOnlyNumbers(event);
    },

    async enviarCodigo() {
      if (this.validateForm()) {
        try {
          const response = await axios.get(
            "https://test.wanqara.com/api/send-code"
          );
          console.log(response.data);
          this.formEnviado = true;
        } catch (error) {
          console.error("Error al enviar código:", error);
        }
      }
    },

    async validarCodigo() {
      try {
        const response = await axios.post(
          `https://test.wanqara.com/api/verify-code?code=${this.codigo}`
        );
        console.log(response.data);
        this.$router.push("/Ruc");
      } catch (error) {
        console.error("Error al verificar código:", error);
      }
    },

    validateForm() {
      if (
        !this.nombre ||
        typeof this.nombre !== "string" ||
        this.nombre.trim() === ""
      ) {
        alert("No ha ingresado un nombre");
        return false;
      }

      if (
        this.telefono === null ||
        this.telefono.length < 10 ||
        this.telefono.length > 10
      ) {
        alert("Numero Invalido");
        return false;
      }

      return true;
    },
  },
};
