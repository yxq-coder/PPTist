<template>
 <div class="file-input">
    <div class="tabs">
      <div 
        class="tab" 
        :class="{ 'active': type === tab.key }" 
        v-for="tab in tabs" 
        :key="tab.key"
        @click="type = tab.key"
      >{{tab.label}}</div>
    </div>

    <template v-if="type === 'file'">
      <Input v-model:value="fileSrc" placeholder="请输入文件地址…"></Input>
      <div class="btns">
        <Button @click="close()" style="margin-right: 10px;">取消</Button>
        <Button type="primary" @click="insertFile()">确认</Button>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { message } from 'ant-design-vue'

type TypeKey = 'file'
interface TabItem {
  key: TypeKey;
  label: string;
}

export default defineComponent({
  name: 'file-input',
  emits: ['insertFile', 'close'],
  props: {
    src: {
      type: String,
      required: true,
    }
  },
  setup(props, { emit }) {
    const type = ref<TypeKey>('file')

    const fileSrc = ref(props.src)
    // fileSrc.value = props.src

    const tabs: TabItem[] = [
      { key: 'file', label: '文件地址' },
    ]

    const insertFile = () => {
      if (!fileSrc.value) return message.error('请先输入正确的文件地址…')
      emit('insertFile', fileSrc.value)
    }

    const close = () => emit('close')

    return {
      type,
      fileSrc,
      tabs,
      insertFile,
      close,
    }
  },
})
</script>

<style lang="scss" scoped>
.file-input {
  width: 480px;
}
.tabs {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid $borderColor;
  margin-bottom: 20px;
}
.tab {
  padding: 0 10px 8px;
  border-bottom: 2px solid transparent;
  cursor: pointer;

  &.active {
    border-bottom: 2px solid $themeColor;
  }
}
.btns {
  margin-top: 10px;
  text-align: right;
}
</style>
