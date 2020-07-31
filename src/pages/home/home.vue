<template>
	<view>
    <cu-custom bgColor="bg-gradual-pink" isCustom="true"><block slot="content">主页</block></cu-custom>
		<view class="cu-bar bg-white margin-top">
			<view class="action">
				<text class="cuIcon-title text-green"></text>
				<text>底部操作条</text>
			</view>
		</view>
	</view>
</template>

<script>
  import { mapGetters } from 'vuex'

	export default {
		data() {
			return {
				title: 'Home'
			}
		},
    computed: {
      ...mapGetters({
        platfrom: 'getPlatfrom'
      })
    },
		onLoad() {
      console.log(this.platfrom)
      this.getData()
    },
    onShow() {
      console.log(this.platfrom)
    },
		methods: {
      getData() {
        console.log(this.platfrom)
        this.$http.get('/api/booklists', {
          params: {
            type: 'man',
            screen: 'comprehensive',
            page: 1
          }
        })
      }
		}
	}
</script>

<style>
	
</style>
