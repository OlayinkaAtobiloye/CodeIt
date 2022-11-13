<template>
  <div class="qr-code-div">
    <img v-bind:src="svgLink" class="qr-code" />

    <div class="download-div">
      <button class="bg-deep-blue download">
        <a v-bind:href="pngLink" download="qrCode.png"
          ><span class="material-symbols-outlined">
            download </span
          >JPG</a
        >
      </button>
      <button class="bg-yellow download">
        <a v-bind:href="pngLink" download="qrCode.png"
          ><span class="material-symbols-outlined">
            download </span
          >SVG</a
        >
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "QRCode",
  props: {
    pngLink: String,
    svgLink: String
  }
};
</script>

<style>
.qr-code {
  width: 200px;
  height: auto;
  margin-bottom: 32px;
  background: inherit;
  margin-bottom: 16px;
}
.qr-code-div {
  display: flex;
  justify-content: center;
  background: #0a1b45;
  width: 30%;
  flex-direction: column;
  align-items: center;
}
.bg-yellow {
  background: #ffa901;
}
.bg-deep-blue {
  background: #133387;
}
.download {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 16px;
  border-radius: 10px;
  border-style: none;
  color: #ffffff;
  cursor: pointer;
}

.download-div {
  display: flex;
  justify-content: space-between;
  background: inherit;
  width: 80%;
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}

span {
  background: inherit;
}

a {
  background: inherit;
  color: inherit;
  text-decoration: none;
  display: inherit;
  justify-content: center;
  align-items: center;
}
</style>
