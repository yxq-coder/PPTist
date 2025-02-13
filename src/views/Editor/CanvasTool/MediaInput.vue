<template>
  <div class="media-input">
    <div class="tabs">
      <div 
        class="tab" 
        :class="{ 'active': type === tab.key }" 
        v-for="tab in tabs" 
        :key="tab.key"
        @click="type = tab.key"
      >{{tab.label}}</div>
    </div>

    <template v-if="type === 'video'">
      <Input v-model:value="videoSrc" placeholder="请输入视频地址，***.mp4"></Input>
      <div class="btns">
        <Button @click="close()" style="margin-right: 10px;">取消</Button>
        <Button type="primary" @click="insertVideo()">确认</Button>
      </div>
    </template>

    <template v-if="type === 'audio'">
      <Input v-model:value="audioSrc" placeholder="请输入音频地址，***.mp3"></Input>
      <div class="btns">
        <Button @click="close()" style="margin-right: 10px;">取消</Button>
        <Button type="primary" @click="insertAudio()">确认</Button>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { message } from 'ant-design-vue'

type TypeKey = 'video' | 'audio'
interface TabItem {
  key: TypeKey;
  label: string;
}

export default defineComponent({
  name: 'media-input',
  emits: ['insertVideo', 'insertAudio', 'close'],
  setup(props, { emit }) {
    const type = ref<TypeKey>('video')

    const videoSrc = ref('')
    const audioSrc = ref('')

    const tabs: TabItem[] = [
      { key: 'video', label: '视频' },
      { key: 'audio', label: '音频' },
    ]

    const insertVideo = () => {
      if (!videoSrc.value) return message.error('请先输入正确的视频地址')
      emit('insertVideo', videoSrc.value)
    }

    const insertAudio = () => {
      if (!audioSrc.value) return message.error('请先输入正确的音频地址')
      emit('insertAudio', audioSrc.value)
    }

    const close = () => emit('close')

    return {
      type,
      videoSrc,
      audioSrc,
      tabs,
      insertVideo,
      insertAudio,
      close,
    }
  },
})
</script>

<style lang="scss" scoped>
.media-input {
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
