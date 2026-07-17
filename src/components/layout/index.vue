<template>
    <div class="blankBox">
        <div class="sideBar">
            <span></span>
            <div class="eachIcon" @click="toHome">
                <Home class="SVG" />
                <span style="font-size: 14px;">我的主页</span>
            </div>
            <div class="eachIcon" @click="toTodayWeather">
                <WeatherSVG class="SVG" />
                <span style="font-size: 14px;">今日天气</span>
            </div>
            <div class="eachIcon" @click="toRecentWeather">
                <ChartSVG class="SVG" />
                <span style="font-size: 14px;">近期天气</span>
            </div>
            <div class="eachIcon" @click="toDailySoup">
                <Soup class="SVG" />
                <span style="font-size: 14px;">每日金句</span>
            </div>
        </div>
        <div class="mainBox">
            <router-view></router-view>
        </div>
    </div>
</template>


<script setup lang='ts' name='index'>
    // 各种icon图标
    import Home from '@/assets/home.svg'
    import WeatherSVG from '@/assets/weather.svg'
    import ChartSVG from '@/assets/lineChart.svg'
    import Soup from '@/assets/soup.svg'

    import { useRouter } from 'vue-router';

    const router = useRouter()

    function toHome(){
        router.push({
            name:'home'
        })
    }
    function toTodayWeather(){
        router.push({
            name:'todayWeather'
        })
    }
    function toRecentWeather(){
        router.push({
            name:'recentWeather'
        })
    }
    function toDailySoup(){
        router.push({
            name:'dailySoup'
        })
    }
</script>


<style scoped>
    .blankBox {
        display: flex;
        width: 100%;
        height: 100%;
    }
    .sideBar {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        gap: 20px;
        width: 60px;
        flex-shrink: 0;
        height: 100%;
        width: 80px;
        background-color: rgba(224, 224, 224, 0.5)
    }
    .mainBox {
        flex:1
    }
    .SVG {
        width: 40px;
        height: 40px;
    }
    .eachIcon {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
    }
</style>