<template>
    <div class="code-generator">
        <SideBar v-bind:class="{'hide': displayPopUp}"></SideBar>
        <div class="input-div" v-bind:class="{'hide': displayPopUp}">
            <input v-model="url" placeholder="Enter your website URL"/>
            <button class="generate-qr" v-on:click="generateQR()">Generate QR code</button>
        </div>
        <QRCode id="qr-code" v-bind:class="{'show': displayPopUp}" v-bind:pngLink="pngLink" v-bind:svgLink="svgLink"/>
    </div>
</template>

<script>
import SideBar from './SideBar.vue';
import QRCode from './QRCode.vue';
export default{
    name: "CodeGenerator",
    components: {
        SideBar,
        QRCode
    },
    data(){
        return{
        url: "",
        displayPopUp: false,
        pngLink: "https://qrtag.net/api/qr.png/",
        svgLink: "https://qrtag.net/api/qr.svg/",
    }
    },
    methods:{
        generateQR: function(){
            this.displayPopUp = true;
            this.pngLink = `https://qrtag.net/api/qr4.png/?url=${this.url}`;
            this.svgLink = `https://qrtag.net/api/qr4.svg/?url=${this.url}`;
            console.log(this.svgLink);
        }
    }
}
</script>

<style>
.input-div{
    padding-top: 60px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
input{
    border: none;
    width: 80%;
    border-bottom: 1px solid #021136;
    padding-bottom: 12px;
    min-height: 100px;
    margin-bottom: 60px;
    font-size: 32px;
}

input:focus{
    outline: none;
}

input::placeholder{
    font-family: Inter;
font-size: 36px;
font-weight: 400;
line-height: 36px;
letter-spacing: 0em;
color: #021136;
}

.code-generator{
    display: flex;
    width: 100%;
    /* justify-content: space-between; */

}
.generate-qr{
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 12px;
background: #021136;
border-radius: 10px;
border-style: none;
color: #FFFFFF;
cursor: pointer;
}

@media(max-width: 768px){
    .input-div{
        width: 80%;
    }
    #qr-code{
        display: none;
    }
    .hide{
        display: none !important;
    }
    .show{
        display: flex !important;
    }
   
}
</style>