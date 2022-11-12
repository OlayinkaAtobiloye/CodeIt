<template>
       <nav class="sidebar">
        <h1>C<span class="text-yellow">O</span>DEiT</h1>
        <ul>
            <li><a>Website</a></li>
            <li><a>Instagram</a></li>
            <li><a>Facebook</a></li>
            <li><a>YouTube</a></li>
            <li><a>History</a></li>
        </ul>
       </nav> 
</template>

<script>
export default{
    name: "SideBar",
    components: {
        
    }
}
</script>

<style>
li{
    list-style: none;
}
.sidebar{
    width: 30%;
    border-right: 1px solid #021136;
    color: #000000;
    flex-direction: column;
    display: flex;
    align-items: center;
    padding-top: 60px;
    min-height: 100vh;
}
.sidebar ul li{
    margin-bottom: 12px;
    margin-top: 60px;
}
.text-yellow{
    color: #FFA901;

}
.bg-deep-blue{
    background: #021136;
}
.text-white{
    background: #FFFFFF;

}
.text-deep-blue{
    color: #021136;
}
@media(max-width: 768px){
 .qr-code-div{
    width: 100% !important;
 }  
}
</style>