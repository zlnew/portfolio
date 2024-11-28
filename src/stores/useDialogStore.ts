import { defineStore } from 'pinia'
import { markRaw, ref, type Component } from 'vue'

interface ModalState {
  component: Component | null
  componentProps?: Record<string, any>
}

export const useDialogStore = defineStore('dialog', () => {
  const initialState = {
    component: null,
    componentProps: {}
  }

  const state = ref<ModalState>({ ...initialState })

  function open({ component, componentProps }: ModalState) {
    const newState = {
      component: component != null ? markRaw(component) : component,
      componentProps
    }

    Object.assign(state.value, newState)
  }

  function close() {
    Object.assign(state.value, initialState)
  }

  return {
    state,
    open,
    close
  }
})
