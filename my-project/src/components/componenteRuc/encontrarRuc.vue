<template>
  <div class="container mt-5">
    <div class="card shadow p-4 rounded-lg border-0">
      <h2 class="text-center mb-4">Buscar RUC</h2>
      <div class="form-group">
        <label for="ruc" class="form-label">RUC:</label>
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            id="ruc"
            v-model="ruc"
            name="ruc"
            @keypress="blockNumbersAndSpecialChars"
            required
          />

          <div class="input-group-append">
            <button @click="getRucInfo" type="button" class="btn btn-secondary">
              Buscar
            </button>
          </div>
        </div>
        <div class="invalid-feedback">Por favor, ingresa tu RUC.</div>
      </div>
    </div>

    <div v-if="rucList.length">
      <h3>Información del RUC:</h3>
      <ul>
        <li v-for="(info, index) in rucList" :key="index">
          <div>
            <p><strong>RUC:</strong> {{ info.ruc }}</p>
            <p><strong>Nombre Comercial:</strong> {{ info.businessname }}</p>
            <div v-if="info.subsidiaries && info.subsidiaries.length">
              <h4>Sucursales:</h4>
              <ul>
                <li
                  v-for="(subsidiary, sIndex) in info.subsidiaries"
                  :key="sIndex"
                >
                  <p>
                    <strong>Nombre Comercial:</strong>
                    {{ subsidiary.commercial_name }}
                  </p>
                  <p><strong>Dirección:</strong> {{ subsidiary.address }}</p>
                  <p><strong>Código:</strong> {{ subsidiary.code }}</p>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style src="./encontrarRuc.css"></style>
<script src="./encontrarRuc.js"></script>
