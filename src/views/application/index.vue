<template>
  <div class="application">
    <div class="content">
        <h1 class="title">1025手游门店报名表</h1>
        <div class="myFrom">
            <div class="fromItem">
                <span class="itemName">姓名:</span>
                <input type="text" class="textInput">
            </div>
            <div class="fromItem">
                <span class="itemName">手机号:</span>
                <input type="number" class="textInput">
            </div>
            <div class="fromItem">
                <span class="itemName">地区:</span>
                <select class="itemSelect" v-model="provinceSelect">
                    <option v-for="(province, key) in provinces" :key="key" :value="key">{{province}}</option>
                </select>
                <select class="itemSelect" v-model="citySelect">
                    <template v-if="citys">
                        <option v-for="(city, key) in citys" :key="key" :value="key">{{city}}</option>
                    </template>
                    <template v-else>
                        <option value="-1">无</option>
                    </template>
                </select>
                <select class="itemSelect" v-model="countySelect">
                    <template v-if="countys">
                        <option v-for="(county, key) in countys" :key="key" :value="key">{{county}}</option>
                    </template>
                    <template v-else>
                        <option value="-2">无</option>
                    </template>
                </select>
            </div>
            <div class="fromItem">
                <span class="itemName">门店名:</span>
                <input type="number" class="textInput">
            </div>
            <div class="fromItem">
                <span class="itemName">归属代理商:</span>
                <input type="number" class="textInput">
            </div>
        </div>
        <div class="footerSpan">
            <h6 class="ftitle">报名说明</h6>
            <span class="fcontent">报名第三届1025果本爱我节，拿专项政策扶贫，更有H5手游引流、大抽奖等劲爆活动等着你！</span>
        </div>
    </div>
  </div>
</template>
<script>
import districtsData from './districts.json'

export default {
    data() {
        return {
            provinceSelect: '',
            citySelect: '',
            countySelect: ''
        }
    },
    created() {
        
    },
    computed: {
        provinces() {
            return districtsData['100000']
        },
        citys() {
            return this.provinceSelect ? districtsData[this.provinceSelect] : null
        },
        countys() {
            return this.citySelect ? districtsData[this.citySelect] : null
        }
    },
    watch: {
        provinceSelect() {
            this.citySelect = ''
        },
        citySelect() {
            this.countySelect = ''
        }
    }
}
</script>

<style lang="less" scoped>
.application {
    .content {
        margin: 5rem auto 0;
        padding: 1rem .5rem .5rem;
        width: 8rem;
        border: 2px solid #B0D27F;
        border-radius: 15px;
        color: #5A8A36;
        background: rgba(255, 255, 255, 0.7);
        .title {
            font-size: 20px;
            font-weight: 800;
            margin-bottom: .5rem;
        }
        .myFrom {
            .fromItem {
                display: flex;
                padding: 5px 10px;
                margin-bottom: 10px;
                border: 2px solid #5A8A36;
                border-radius: 15px;
                background: rgba(255, 255, 255, 0.8);
                .itemName {
                    display: inline-block;
                    width: 2rem;
                    text-align: left;
                    margin-right: 10px;
                    font-weight: 800;
                }
                .itemSelect {
                    margin-right: 5px;
                    width: 2rem;
                    font-size: 10px;
                    &:last-child {
                        margin-right: 0;
                    }
                }
                .textInput {
                    width: 3.5rem;
                    background-color: transparent;
                    border: 0;
                }
            }
        }
        .footerSpan {
            text-align: left;
            .ftitle {
                font-weight: 800;
                margin-bottom: 2px;
            }
            .fcontent {
                font-size: 8px;
            }
        }
    }
}
</style>
