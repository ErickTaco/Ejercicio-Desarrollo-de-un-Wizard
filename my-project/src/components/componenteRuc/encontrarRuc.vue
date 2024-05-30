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
            <button @click="buscarRuc" type="button" class="btn btn-secondary">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div class="invalid-feedback">Por favor, ingresa tu RUC.</div>
      </div>
    </div>
  </div>
</template>
<style src="./encontrarRuc.css"></style>
<script src="./encontrarRuc.js"></script>
