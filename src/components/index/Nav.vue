<template>
    <div class="lh_nav">
        <div class="lh_nav_left">
			<img src="../../images/heard.jpg" alt="头像">
			<p>{{name}}</p>
		</div>
        <div class="lh_nav_right"></div>
    </div>
</template>

<script>
    export default {
       name:'',
       components:{

       },
       data() {
           return {
               name:"LingHuZhangHao"
           }
       },
    }
</script>

<style lang="scss" scoped>
.lh_nav{
    width: 100%;
    height: 80px;
    background: #24292e;
    color: #fff;
    font-size: 28px;
}
.lh_nav_left{
	width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    img{
        display: block;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin: 0 50px 0 10%;
    }
}
.lh_nav_right{
	width: 70%;
}
</style>