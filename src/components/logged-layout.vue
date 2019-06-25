<style scoped lang="less">
    .layout {
        background: #F8FAFC;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-header-bar {
        display: flex;
        align-items: center;
        padding: 14px 20px;
        height: 66px;
        background: #fff;
        border-bottom: 1px solid rgb(237, 238, 240);
    }

    .content-layout {
        position: relative;
    }

    .content-sider {
        min-height: calc(100vh - 54px);
    }

    .warp {
        overflow: auto;
        height: calc(100vh - 66px);
    }

    .content {
        padding: 40px;
        min-height: calc(100vh - 120px);
    }

    .icon-c {
        margin-right: 16px;
        position: relative;
        bottom: 2px;
    }

    .layout-bottom-bar {
        height: 54px;
        background: #fff;
        border-top: 1px solid rgb(237, 238, 240);
        display: flex;
        align-items: center;
        padding: 16px 12px;
    }

    .sider {
        height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;
        border-right: 1px solid rgb(237, 238, 240);
        text-align: left;
        transition: border-color .3s, background-color .3s, color .3s;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .change-mode {
        cursor: pointer;
        text-align: center;
        border-top: 1px solid;
        font-weight: bold;
        height: 54px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .change-mode-dark {
        color: #ced4da;
        &:hover {
            color: #fff;
        }
        border-color: rgb(79, 87, 103);
    }

    .change-mode-light {
        color: #6c757d;
        &:hover {
            color: #000;
        }
        border-color: #e3ebf6;
    }

    .mgRight5 {
        margin-right: 5px;
    }

    .mgRight10 {
        margin-right: 10px;
    }
</style>
<style lang="less">
    .el-menu {
        border-right: none;
    }

    .el-submenu .el-menu-item {
        padding-left: 54px !important;
    }

    // 收起后弹出的样式
    .el-menu--popup {
        background: #fff;
    }

    .sider-light, .el-menu--popup {
        .el-menu-item {
            color: #6c757d;
            font-weight: bold;

        }
        .el-menu-item:focus, .el-menu-item:hover {
            outline: 0;
            color: #000;
            background-color: #fff;
            & i {
                transition: border-color .3s, background-color .3s, color .3s;
                color: #000;
            }
        }
        .el-submenu__title {
            color: #6c757d;
            font-weight: bold;
        }
        .el-submenu__title:hover {
            outline: 0;
            color: #000;
            background-color: #fff;
            & i {
                transition: border-color .3s, background-color .3s, color .3s;
                color: #000;
            }
        }
        .el-submenu__title:focus {
            outline: 0;
            background-color: #fff;
            & i {
                transition: border-color .3s, background-color .3s, color .3s;
                color: #000;
            }
        }
        .el-menu-item.is-active {
            color: #2c7be5;
            & i {
                transition: border-color .3s, background-color .3s, color .3s;
                color: #2c7be5;
            }
        }
    }

    .sider-dark {
        .el-menu-item {
            color: #ced4da;
            font-weight: bold;
            background: #354052;
        }
        .el-menu-item:focus, .el-menu-item:hover {
            outline: 0;
            color: #e9ecef;
            background-color: #2d3646;
            & i {
                transition: border-color .3s, background-color .3s, color .3s;
                color: #e9ecef;
            }
        }
        .el-submenu__title {
            color: #ced4da;
            font-weight: bold;
            background: #354052;
        }
        .el-submenu__title:hover, .el-submenu__title:focus {
            outline: 0;
            color: #e9ecef;
            background-color: #2d3646;
            & i {
                transition: border-color .3s, background-color .3s, color .3s;
                color: #e9ecef;
            }
        }
        .el-menu-item.is-active {
            color: #e9ecef;
            background-color: #2d3646;
        }
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <Sider collapsible :collapsed-width="64" v-model="siderCollapsed" hide-trigger class="sider"
                   :style="isDark?{background:'#354052'}:{background:'#fff'}">
                <div class="content-sider">
                    <el-menu default-active="0" :class="[isDark ? 'sider-dark' : 'sider-light']"
                             :collapse="menuCollapse"
                             :collapse-transition="false">
                        <template v-for="(item, index) in routes">
                            <template v-if="item.children && item.children.length>0">
                                <el-submenu :index="item.name" :key="index">
                                    <template slot="title">
                                        <Icon size="18" class="icon-c"
                                              :type="item.meta.icon"/>
                                        <span slot="title">{{$t(`${item.name}`)}}</span>
                                    </template>
                                    <el-menu-item :index="c.name" v-for="(c, cindex) in item.children" :key="cindex">
                                        <span slot="title">{{$t(`${c.name}`)}}</span>
                                    </el-menu-item>
                                </el-submenu>
                            </template>
                            <template v-else>
                                <el-menu-item :index="item.name" :key="index">
                                    <Icon size="18" class="icon-c"
                                          :type="item.meta.icon"/>
                                    <span slot="title">{{$t(`${item.name}`)}}</span>
                                </el-menu-item>
                            </template>
                        </template>
                    </el-menu>
                </div>

                <div v-if="isDark" class="change-mode change-mode-dark" @click="isDark = false">
                    <div>
                        <Icon class="vertical-center mgRight5" type="md-sunny" size="18"/>
                        <span class="vertical-center mgRight10" v-if="!siderCollapsed">Light Mode</span>
                        <Icon class="vertical-center" v-if="!siderCollapsed" type="ios-arrow-round-forward" size="18"/>
                    </div>
                </div>
                <div v-else class="change-mode change-mode-light" @click="isDark = true">
                    <div>
                        <Icon class="vertical-center mgRight5" type="md-moon" size="18"/>
                        <span class="vertical-center mgRight10" v-if="!siderCollapsed">Dark Mode</span>
                        <Icon class="vertical-center" v-if="!siderCollapsed" type="ios-arrow-round-forward" size="18"/>
                    </div>
                </div>

                <div slot="trigger"></div>
            </Sider>

            <Layout class="content-layout">
                <Header class="layout-header-bar">
                    <Icon type="md-list" size="26" @click="collapse"/>
                </Header>
                <div class="warp">
                    <div class="content">
                        <slot></slot>
                    </div>
                    <Footer class="layout-bottom-bar">2011-2016 &copy; TalkingData</Footer>
                </div>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isDark: false, // 默认是白色
                siderCollapsed: false,
                menuCollapse: false,
                routes: this.$router.options.routes
            }
        },
        methods: {
            collapse() {
                this.menuCollapse = !this.menuCollapse
                this.siderCollapsed = !this.siderCollapsed
            },
            changeCollapse() {
                if (document.documentElement.clientWidth < 768) {
                    this.menuCollapse = true
                    this.siderCollapsed = true
                } else {
                    this.menuCollapse = false
                    this.siderCollapsed = false
                }
            }
        },
        mounted() {
            this.changeCollapse()
            window.onresize = () => {
                this.changeCollapse()
            }
        },
        destroyed() {

        }
    }
</script>
