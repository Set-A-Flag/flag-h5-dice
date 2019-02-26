<template>
    <transition name="scoreShow">
        <div v-show="visibled">
            <div class="dice-cover"></div>
            <div class="scoreImage">
                <img v-show="mode=='10'" src="@/assets/game/+10.png" alt="">
                <img v-show="mode=='20'" src="@/assets/game/+20.png" alt="">
                <img v-show="mode=='30'" src="@/assets/game/+30.png" alt="">
                <img v-show="mode=='-10'" src="@/assets/game/-10.png" alt="">
                <img v-show="mode=='-20'" src="@/assets/game/-20.png" alt="">
                <img v-show="mode=='-30'" src="@/assets/game/-30.png" alt="">
                <img v-show="mode=='halve'" src="@/assets/game/halve.png" alt="">
                <img v-show="mode=='onceMore'" src="@/assets/game/OnceMore.png" alt="">
                <img v-show="mode=='doubling'" src="@/assets/game/Doubling.png" alt="">
            </div>
        </div>
    </transition>
</template>

<script>

export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        mode: {
            type: String,
            default: ''
            // 10 20 30 -10 -20 -30 x2 /2 都是字符串
        }
    },
    data() {
        return {
            visibled: false
        }
    },
    computed: {
        modeImgName() {
            const imgName = {
                '10': '+10',
                '20': '+20',
                '30': '+30',
                '-10': '-10',
                '-20': '-20',
                '-30': '-30',
                halve: 'halve',
                onceMore: 'OnceMore',
                doubling: 'Doubling'
            }
            return imgName[this.mode]
        }
    },
    watch: {
        visible(newv, oldv) {
            
                this.visibled = newv
                if(this.visibled){
                    window.setTimeout(()=>{
                        this.$parent.scoreShow = false;
                    },2000)
                }
            
        }
    }
}
</script>

<style lang="less" scoped>
    .scoreShow-enter-active, .scoreShow-leave-active {
        transition: opacity .5s;
    }
    .scoreShow-enter, .scoreShow-leave-to {
        opacity: 0;
    }
    .dice-cover {
        position: fixed;
        background: rgba(0, 0, 0, .5);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .scoreImage {
        width: 10rem;
        height: 100%;
        position: fixed;
        top: 0;
        left: calc((100% - 10rem) / 2);
        padding: 1.5rem 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        img {
            margin: 0 auto;
            width: 5.9rem;
        }
    }
</style>
