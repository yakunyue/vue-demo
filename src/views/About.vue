<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <Button type="primary" @click="isCollapse = false">展开</Button>
      <Button type="dashed" @click="isCollapse = true">收起</Button>

      <el-menu default-active="0" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <template v-for="(item, index) in routes">
          <template v-if="item.children && item.children.length>0">
            <el-submenu :index="item.name" :key="index">
              <template slot="title">
                <Icon :type="item.meta.icon" />
                <span slot="title">{{$t(`${item.name}`)}}</span>
              </template>
              <el-menu-item :index="c.name" v-for="(c, cindex) in item.children" :key="cindex">
                <Icon :type="item.meta.icon" />
                <span slot="title">{{$t(`${c.name}`)}}</span>
              </el-menu-item>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="item.name" :key="index">
              <Icon :type="item.meta.icon" />
              <span slot="title">{{$t(`${item.name}`)}}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
  </div>
</template>
<script>
    export default {
        name: 'home',
        data() {
            return {
                isCollapse: true,
                routes:this.$router.options.routes
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        mounted(){
            console.log('router',this.$router.options.routes)
            // console.log('process.env.BASE_URL',process.env.BASE_URL)
        }
    }
</script>