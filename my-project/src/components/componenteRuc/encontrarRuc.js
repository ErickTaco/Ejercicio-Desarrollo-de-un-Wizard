import metodosValidacion from "../../metodosValidacion.js";
import axios from "axios";

export default {
  data() {
    return {
      text: "",
      code: "",
      ruc: "",
      rucList: [],
    };
  },
  methods: {
    blockNumbersAndSpecialChars(event) {
      metodosValidacion.allowOnlyNumbers(event);
    },
    async getRucInfo() {
      console.log(this.ruc);
      try {
        console.log(`https://test.wanqara.com/api/ruc/${this.ruc}`);
        const response = await axios.get(
          `https://test.wanqara.com/api/ruc/${this.ruc}`
        );
        const rucData = response.data.data; // Asegúrate de acceder a los datos correctos
        this.rucList.push(rucData); // Agregar la información al array rucList
        console.log(this.rucList);
      } catch (error) {
        console.error("Error al obtener información del RUC:", error);
      }
    },
  },
};
