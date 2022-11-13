<template>
  <div class="code-generator">
    <span
      class="material-symbols-outlined hide mobile"
      v-bind:class="{ show: displayPopUp }"
      v-on:click="hidePopUp()"
    >
      arrow_back_ios
    </span>
    <SideBar v-bind:class="{ hide: displayPopUp }"></SideBar>
    <div class="input-div" v-bind:class="{ hide: displayPopUp }">
      <input v-model="url" placeholder="Enter your website URL" />
      <button class="generate-qr" v-on:click="generateQR()">
        Generate QR code
      </button>
    </div>
    <QRCode
      id="qr-code"
      v-bind:class="{ show: displayPopUp }"
      v-bind:pngLink="pngLink"
      v-bind:svgLink="svgLink"
    />
  </div>
</template>

<script>
import SideBar from "./SideBar.vue";
import QRCode from "./QRCode.vue";
export default {
  name: "CodeGenerator",
  components: {
    SideBar,
    QRCode
  },
  data() {
    return {
      url: "",
      displayPopUp: false,
      pngLink: "https://www.qrtag.net/api/qr_4.png",
      svgLink: "https://www.qrtag.net/api/qr_4.svg"
    };
  },
  methods: {
    generateQR: function() {
      if (this.$store.state.qrCodes.length < 10) {
        this.displayPopUp = true;
        this.pngLink = `https://www.qrtag.net/api/qr_4.png?url=${this.url}`;
        this.svgLink = `https://www.qrtag.net/api/qr_4.svg?url=${this.url}`;
        this.$store.commit("updateCodes", {
          imageURL: this.svgLink,
          siteURL: this.url
        });
        this.url = "";
      } else {
        alert(
          "You have exceeded the limit. Please refresh to be able to create more codes."
        );
      }
    },
    hidePopUp: function() {
      this.displayPopUp = false;
    }
  }
};
</script>

<style>
.input-div {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
input {
  border: none;
  width: 80%;
  border-bottom: 1px solid #021136;
  padding-bottom: 12px;
  min-height: 80px;
  margin-bottom: 60px;
  font-size: 32px;
}

input:focus {
  outline: none;
}

input::placeholder {
  font-family: Inter;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0em;
  color: #021136;
}

.code-generator {
  display: flex;
  width: 100%;
  height: 100vh;
}
.generate-qr {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 12px;
  background: #021136;
  border-radius: 10px;
  border-style: none;
  color: #ffffff;
  cursor: pointer;
}
.mobile {
  position: absolute;
  top: 18px;
  left: 16px;
  background: #0a1b45;
  display: none;
  color: #ffffff;
}

@media (max-width: 768px) {
  .input-div {
    width: 70%;
  }
  #qr-code {
    display: none;
  }
  .hide {
    display: none !important;
  }
  .show {
    display: flex !important;
  }
  input::placeholder {
    font-size: 16px;
  }
  input {
    font-size: 16px;
    min-height: 50px;
  }
}
</style>
