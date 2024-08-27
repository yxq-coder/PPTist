<template>
  <div class="editable-element-pdf"
    :class="{ 'lock': elementInfo.lock }"
    :style="{
      top: elementInfo.top + 'px',
      left: elementInfo.left + 'px',
      width: elementInfo.width + 'px',
      height: elementInfo.height + 'px',
    }"
  >
    <div
      class="rotate-wrapper"
      :style="{ transform: `rotate(${elementInfo.rotate}deg)` }"
    >
      <div 
        class="element-content" 
        v-contextmenu="contextmenus" 
        @mousedown="$event => handleSelectElement($event)"
      >
        <div>
          <!-- <pdf :src="pdfdata" v-for="i in numPages" :key="i" :id="i" :page="i" :scale="elementInfo.scale">
          </pdf> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore, useSlidesStore } from '@/store'
import { PPTPdfElement } from '@/types/slides'
import { ContextmenuItem } from '@/components/Contextmenu/types'
import { VIEWPORT_SIZE } from '@/configs/canvas'

// import pdf from 'pdfvuer'

export default defineComponent({
  name: 'editable-element-pdf',
  components: {
    // pdf
  },
  props: {
    elementInfo: {
      type: Object as PropType<PPTPdfElement>,
      required: true,
    },
    selectElement: {
      type: Function as PropType<(e: MouseEvent, element: PPTPdfElement, canMove?: boolean) => void>,
      required: true,
    },
    contextmenus: {
      type: Function as PropType<() => ContextmenuItem[]>,
    },
  },
  setup(props) {
    const { canvasScale, handleElementId } = storeToRefs(useMainStore())
    // const { viewportRatio } = storeToRefs(useSlidesStore())

    const handleSelectElement = (e: MouseEvent) => {
      if (props.elementInfo.lock) return
      e.stopPropagation()

      props.selectElement(e, props.elementInfo)
    }

    // const numPages = ref(0)
    // const pdfdata = pdfvuer.createLoadingTask(props.elementInfo.src);
    /* pdfdata.then((pdf: pdfInfo) => {
      numPages.value = pdf.numPages
    }) */

    return {
      // numPages,
      // pdfdata,
      canvasScale,
      handleElementId,
      handleSelectElement,
    }
  },
})
</script>

<style src="pdfvuer/dist/pdfvuer.css"></style>

<style lang="scss" scoped>
.editable-element-pdf {
  position: absolute;

  &.lock .pdf-icon {
    cursor: default;
  }
}
.rotate-wrapper {
  width: 100%;
  height: 100%;
}
.element-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  overflow-x: hidden;
  overflow-y: auto;
}
.pdf-icon {
  cursor: move;
}
</style>
