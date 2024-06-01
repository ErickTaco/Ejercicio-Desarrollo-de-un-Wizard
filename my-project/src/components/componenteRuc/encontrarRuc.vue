<template>
  <div>
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
                readonly
              />
            </div>
            <div class="form-group">
              <label for="input4" class="font-weight-bold"
                >Correo Electrónico</label
              >
              <input
                v-model="ruc"
                id="input4"
                class="form-control animate__animated animate__pulse"
                placeholder="Ingrese el RUC"
              />
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn-block btn-shadow">
            Crear Demo
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    Launch static backdrop modal
  </button>

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
          <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="modal-body">
            <p><strong>Nombre:</strong> {{ userInfo.name }}</p>
            <p><strong>Apellido:</strong> {{ userInfo.lastname }}</p>
            <p><strong>Teléfono:</strong> {{ userInfo.phone }}</p>
            <p><strong>RUC:</strong> {{ userInfo.ruc }}</p>
            <p><strong>Dirección:</strong> {{ userInfo.address }}</p>
            <p>
              <strong>Nombre Comercial:</strong> {{ userInfo.commercialname }}
            </p>
            <p><strong>Razón Social:</strong> {{ userInfo.businessname }}</p>
            <p><strong>Código:</strong> {{ userInfo.code }}</p>
            <p><strong>Correo Electrónico:</strong> {{ userInfo.email }}</p>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Understood</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="./encontrarRuc.css"></style>
<script src="./encontrarRuc.js"></script>
