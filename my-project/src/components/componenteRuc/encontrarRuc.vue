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
</template>
<style src="./encontrarRuc.css"></style>
<script src="./encontrarRuc.js"></script>
