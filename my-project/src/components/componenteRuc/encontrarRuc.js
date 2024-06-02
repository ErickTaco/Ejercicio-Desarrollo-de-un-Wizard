import metodosValidacion from "../../metodosValidacion.js";
import axios from "axios";

export default {
  mounted() {
    const usuarioString = localStorage.getItem("usuario");
    if (usuarioString) {
      const usuario = JSON.parse(usuarioString);
      console.log("Datos del usuario:", usuario);
      this.nombre = usuario.nombre;
      this.apellido = usuario.apellido;
      this.telefono = usuario.telefono;
    } else {
      console.log(
        "No se encontraron datos de usuario en el almacenamiento local."
      );
    }
  },
  data() {
    return {
      text: "",
      code: "",
      ruc: "",
      rucList: [],
      input1: "",
      input2: "",
      input3: "",
      nombre: "",
      apellido: "",
      telefono: "",
      correoElectronico: "",
      formEnviado: false,
      showModal: false,
      fromRuc: true,
      fin: false,
    };
  },

  methods: {
    blockNumbersAndSpecialChars(event) {
      metodosValidacion.allowOnlyNumbers(event);
    },
    async getRucInfo() {
      this.rucList = [];

      console.log(this.ruc);
      try {
        console.log(`https://test.wanqara.com/api/ruc/${this.ruc}`);
        const response = await axios.get(
          `https://test.wanqara.com/api/ruc/${this.ruc}`
        );
        const rucData = response.data.data;

        this.rucList.push(rucData);

        this.input1 = this.rucList[0].businessname;
        this.formEnviado = true;
      } catch (error) {
        this.rucList = [];
        this.formEnviado = true;
        alert("No hemos encontrado el Ruc ingresado");
        this.$router.push("/Ruc");

        console.error("Error al obtener información del RUC:", error);
      }
    },
    recolectarCodigo(event) {
      let selectedValue = event.target.value;
      if (selectedValue == "001") {
        this.input2 = this.rucList[0].subsidiaries[0].address;
        this.input3 = this.rucList[0].subsidiaries[0].commercial_name;
      } else if (selectedValue == "002") {
        this.input2 = this.rucList[0].subsidiaries[1].address;
        this.input3 = this.rucList[0].subsidiaries[1].commercial_name;
      } else {
        this.input2 = this.rucList[0].subsidiaries[2].address;
        this.input3 = this.rucList[0].subsidiaries[2].commercial_name;
      }
    },
    gracias() {
      (this.fromRuc = false), (this.fin = true);
      setTimeout(() => {
        this.$router.push("/");
      }, 4000);
    },
  },
};
