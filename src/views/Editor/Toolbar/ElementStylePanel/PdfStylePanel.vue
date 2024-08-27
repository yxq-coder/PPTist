<template>
  <div class="pdf-style-panel">
    <div class="row">
      <Popover trigger="click" v-model:visible="pdfInputVisible">
        <template #content>
          <FileInput :src="handleElement.src"
            @close="pdfInputVisible = false"
            @insertFile="src => { replacePdf(src); pdfInputVisible = false }"
          />
        </template>
        <Button class="full-width-btn"><IconTransform class="btn-icon" /> 替换文件</Button>
      </Popover>
    </div>
    <div class="row">
      <div style="flex: 2">缩放比例：</div>
      <Slider
        class="slider"
        :min="0"
        :max="2"
        :step="0.1"
        v-model:value="handleElement.scale"
        @change="value => updateScale(value)" 
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore, useSlidesStore } from '@/store'
// import { PPTPdfElement } from '@/types/slides'
import useHistorySnapshot from '@/hooks/useHistorySnapshot'

import FileInput from '@/views/Editor/CanvasTool/FileInput.vue'
// import ColorButton from '../common/ColorButton.vue'

export default defineComponent({
  name: 'pdf-style-panel',
  components: {
    FileInput,
    // ColorButton,
  },
  setup() {
    const slidesStore = useSlidesStore()
    const { handleElement, handleElementId } = storeToRefs(useMainStore())

    const { addHistorySnapshot } = useHistorySnapshot()

    const pdfInputVisible = ref(false)

    // const scale = ref<number>(1)
    
    /* 
    const updatePdf = (props: Partial<PPTPdfElement>) => {
      if (!handleElement.value) return
      slidesStore.updateElement({ id: handleElement.value.id, props })
      addHistorySnapshot()
    }
    */

    const replacePdf = (src: string) => {
      const props = { src: src }
      slidesStore.updateElement({ id: handleElementId.value, props })
      addHistorySnapshot()
    }

    const updateScale = (value: number) => {
      if (!handleElement.value) return
      const props = { scale: value }
      slidesStore.updateElement({ id: handleElement.value.id, props })
      addHistorySnapshot() 
    }

    return {
      // scale,
      updateScale,
      pdfInputVisible,
      handleElement,
      replacePdf,
    }
  }
})
</script>

<style lang="scss" scoped>
.scale-handler {
  display: flex;
  align-items: center;

  .text {
    width: 40px;
    text-align: center;
    cursor: pointer;
  }

  .viewport-size {
    font-size: 13px;
  }
}
.row {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.slider {
  flex: 3;
}
</style>