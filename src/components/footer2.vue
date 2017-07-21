<template>
	<div class="footer">
		<p style="padding-top:0.9rem">
			@2017 VRVIU All Rights Reserved.
		</p>
	</div>
</template>
<script>
  export default {
    data () {
    	return {
    	  msg: 'Welcome to Your Vue.js App'
    	}
    }
  }
</script>
<style>
	.footer{
		background: #fff;
		text-align: center;
		/* position:absolute; */
		left: 0;
		bottom:0;
		width: 100%;
		height:2rem;
	}
	.footer p{
		font-size: 0.16rem;
		color:#717171;
		margin: 0;
		line-height:0.32rem;
	}
</style>