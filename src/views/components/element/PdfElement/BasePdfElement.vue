<template>
  <div class="base-element-pdf"
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
      <div class="element-content">
        <div>
          <!-- <pdf :src="pdfdata" v-for="i in numPages" :key="i" :page="i" :scale="elementInfo.scale">
          </pdf> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import { PPTPdfElement } from '@/types/slides'

// import pdf from 'pdfvuer' 

export default defineComponent({
  name: 'base-element-pdf',
  components: {
    // pdf
  },
  props: {
    elementInfo: {
      type: Object as PropType<PPTPdfElement>,
      required: true,
    },
  },
  setup(props) {
    /* const numPages = ref(0)
    const pdfdata = pdfvuer.createLoadingTask(props.elementInfo.src);
    pdfdata.then((pdf: pdfInfo) => {
      numPages.value = pdf.numPages
    }) */

    return {
      // numPages,
      // pdfdata
    }
  },
})
</script>

<!-- <style src="pdfvuer/dist/pdfvuer.css"></style> -->

<style lang="scss" scoped>
.base-element-pdf {
  position: absolute;
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
  overflow-x: hidden;
  overflow-y: auto;
}

.pdf-icon {
  cursor: move;
}
</style>
