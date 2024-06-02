<template>
  <div v-if="fromRuc">
    <div class="container mt-5">
      <div
        class="card shadow-lg p-4 rounded-lg border-0 bg-light animate__animated animate__fadeIn"
      >
        <h2 class="text-center mb-4 text-primary">Buscar RUC</h2>
        <div class="form-group">
          <label for="ruc" class="form-label font-weight-bold">RUC:</label>
          <div class="input-group">
            <input
              type="text"
              class="form-control animate__animated animate__pulse"
              id="ruc"
              v-model="ruc"
              name="ruc"
              @keypress="blockNumbersAndSpecialChars"
              required
            />
            <div class="input-group-append">
              <button
                @click="getRucInfo"
                type="button"
                class="btn btn-primary btn-shadow"
              >
                Buscar
              </button>
            </div>
          </div>
          <div class="invalid-feedback">Por favor, ingresa tu RUC.</div>
        </div>
      </div>
    </div>

    <div v-if="formEnviado" class="container mt-5">
      <div
        class="card shadow-lg p-4 rounded-lg border-0 bg-light animate__animated animate__fadeIn"
      >
        <h3 class="text-center mb-4 text-primary">Información del RUC</h3>
        <div class="card-body">
          <div v-for="(info, index) in rucList" :key="index">
            <div class="form-group">
              <label for="Razon Social" class="font-weight-bold"
                >Razón Social</label
              >
              <input
                v-model="info.businessname"
                id="input1"
                class="form-control animate__animated animate__pulse"
                readonly
                required
              />
            </div>
            <div class="form-group d-flex align-items-center">
              <div class="flex-grow-1 mr-2">
                <label for="input2" class="font-weight-bold">Dirección</label>
                <input
                  v-model="input2"
                  id="input2"
                  class="form-control animate__animated animate__pulse"
                  readonly
                  required
                  placeholder="Direccion"
                />
              </div>
              <div>
                <label for="select1" class="font-weight-bold">Selección</label>
                <select
                  v-model="selectedOption"
                  id="select1"
                  class="form-control animate__animated animate__pulse"
                  v-if="info.subsidiaries && info.subsidiaries.length"
                  @change="recolectarCodigo"
                >
                  <option
                    v-for="(subsidiary, sIndex) in info.subsidiaries"
                    :key="sIndex"
                  >
                    {{ subsidiary.code }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="input3" class="font-weight-bold"
                >Nombre Comercial</label
              >
              <input
                v-model="input3"
                id="input3"
                class="form-control animate__animated animate__pulse"
                placeholder="Nombre Comercial"
                readonly
                required
              />
            </div>
            <div class="form-group">
              <label for="input4" class="font-weight-bold"
                >Correo Electrónico</label
              >
              <input
                v-model="correoElectronico"
                id="input4"
                class="form-control animate__animated animate__pulse"
                placeholder="Ingrese un Correo Electronico"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-primary btn-block btn-shadow"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Crear Demo
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Tus Datos</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="modal-body">
            <p><strong>Nombre:</strong> {{ nombre }}</p>
            <p><strong>Apellido:</strong>{{ apellido }}</p>
            <p><strong>Teléfono:</strong>{{ telefono }}</p>
            <p><strong>RUC:</strong>{{ ruc }}</p>
            <p><strong>Dirección:</strong>{{ input2 }}</p>
            <p><strong>Nombre Comercial:</strong>{{ input3 }}</p>
            <p><strong>Razón Social:</strong>{{ input1 }}</p>
            <p><strong>Código:</strong>{{ selectedOption }}</p>
            <p><strong>Correo Electrónico:</strong>{{ correoElectronico }}</p>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
            Cerrar
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="gracias"
          >
            Crear
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->

  <div v-if="fin" class="container">
    <div class="title">¡Te recordamos que tu DEMO ya fue creado!</div>
    <div class="checkmark">✔️</div>
    <div class="message">
      Las credenciales y link de acceso fueron enviadas a tu correo electrónico
      <strong>edison@novasolutions.com.ec</strong> también las podrás encontrar
      en tu Whatsapp, verifica el spam de tu correo.
    </div>
    <div class="message">
      Si necesitas ayuda puedes comunicarte al número
      <strong>0985364973</strong>.
    </div>
  </div>
</template>
<style src="./encontrarRuc.css"></style>
<script src="./encontrarRuc.js"></script>
