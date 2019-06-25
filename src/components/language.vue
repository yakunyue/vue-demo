<template>
    <div>
        <Dropdown trigger="click" @on-click="selectLang">
            <a href="javascript:void(0)">
                {{ title }}
                <Icon :size="18" type="md-arrow-dropdown" />
            </a>
            <DropdownMenu slot="list">
                <DropdownItem v-for="(value, key) in localList" :name="key" :key="`lang-${key}`">{{ value }}</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                lang:'zh-CN',
                langList: {
                    'zh-CN': '语言',
                    'en-US': 'Lang'
                },
                localList: {
                    'zh-CN': '中文简体',
                    'en-US': 'English'
                }
            }
        },
        computed: {
            title () {
                return this.langList[this.lang]
            }
        },
        methods: {
            selectLang (name) {
                this.lang = name
                this.$i18n.locale = name
                // 修改title的文字
                window.document.title = this.$t(`${this.$route.name}`)
            }
        }
    }
</script>
<style lang="less">

</style>
