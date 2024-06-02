<template>
  <div class="container mt-5">
    <transition name="fade">
      <div v-if="!formEnviado" class="card shadow p-4 rounded-lg border-0">
        <h2 class="text-center mb-4">Formulario de Contacto</h2>
        <form
          @submit.prevent="enviarCodigo"
          class="needs-validation"
          novalidate
        >
          <div class="form-group">
            <label for="nombre" class="form-label">Nombre:</label>
            <input
              type="text"
              class="form-control"
              id="nombre"
              v-model="nombre"
              placeholder="Ingresa tu nombre"
              name="nombre"
              @keypress="blockNumbersAndSpecialChars"
              required
            />
          </div>
          <div class="form-group">
            <label for="apellido" class="form-label">Apellido:</label>
            <input
              type="text"
              class="form-control"
              id="apellido"
              v-model="apellido"
              placeholder="Ingresa tu apellido"
              name="apellido"
              @keypress="blockNumbersAndSpecialChars"
              required
            />
            <div class="invalid-feedback">Por favor, ingresa tu apellido.</div>
          </div>
          <div class="form-group">
            <label for="telefono" class="form-label">Teléfono:</label>
            <input
              type="tel"
              class="form-control"
              id="telefono"
              v-model="telefono"
              placeholder="Ingresa tu teléfono"
              name="telefono"
              @keypress="allowOnlyNumbers"
              required
            />
            <div class="invalid-feedback">Por favor, ingresa tu teléfono.</div>
          </div>
          <button type="submit" class="btn btn-primary btn-block rounded-pill">
            Enviar
          </button>
        </form>
      </div>
    </transition>

    <transition name="fade">
      <div v-if="formEnviado" class="card shadow p-4 rounded-lg border-0">
        <h2 class="text-center mb-4">Ingresa tu código de validación:</h2>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            v-model="codigo"
            @keypress="allowOnlyNumbers"
            placeholder="Código de validación"
          />
        </div>
        <button
          @click="validarCodigo"
          class="btn btn-primary btn-block rounded-pill"
        >
          Validar Código
        </button>
      </div>
    </transition>
  </div>
  <!--   mostrar el feedback -->
  <div v-if="feedback" class="feedback">
    {{ feedbackMessage }}
  </div>
</template>
<script src="./envioCodigo.js"></script>

<style src="./envioCodigo.css"></style>
