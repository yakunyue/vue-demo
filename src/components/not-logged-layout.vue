<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 100vh;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1" @click.native="toA">
                            <Icon type="ios-navigate"></Icon>
                            <span>详情</span>
                        </MenuItem>
                        <MenuItem name="2" @click.native="toB">
                            <Icon type="ios-keypad"></Icon>
                            <span>帮助</span>
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content :style="{padding: '0 50px'}">
                <Button type="primary" @click="toLogin">登录</Button>
                <Card>
                    <div style="min-height: 200px;">
                        <slot name="aOrB"></slot>
                    </div>
                </Card>
                <Card>
                    <div style="min-height: 200px;">
                        <slot name="aOrB2"></slot>
                    </div>
                </Card>
            </Content>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
    </div>
</template>
<script>
    export default {
        methods:{
            toLogin(){
                this.$router.push({ name: 'operation' })
            },
            toA(){
                this.$router.push({ name: 'not-logged-a' })
            },
            toB(){
                this.$router.push({ name: 'not-logged-b' })
            }
        }

    }
</script>
