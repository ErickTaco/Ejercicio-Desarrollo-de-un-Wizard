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
      usuarios: [],
      demoInfo: null,
      feedback: false,
      feedbackMessage: "",
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

          console.log(response.data.status);
          if (response.data.status == true) {
            localStorage.setItem(
              "usuario",
              JSON.stringify({
                nombre: this.nombre,
                apellido: this.apellido,
                telefono: this.telefono,
              })
            );

            this.demoInfo = "Aquí va la información de la demo...";

            this.feedbackMessage = "Hemos enviado con exito el codigo";

            this.feedback = true;

            setTimeout(() => {
              this.feedback = false;
              this.formEnviado = true;
            }, 5000);
          } else {
            alert(
              "No hemos podido enviar el codigo por favor intente de nuevo"
            );
          }
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

        this.demoInfo = "Aquí va la información de la demo...";

        this.feedbackMessage = "Codigo Correcto";

        this.feedback = true;

        setTimeout(() => {
          this.feedback = false;

          this.$router.push("/Ruc");
        }, 4000);
      } catch (error) {
        console.error("Error al verificar código:", error);
        alert("Error al verificar código");
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
