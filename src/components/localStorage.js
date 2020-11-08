const KEY = 'cart_state'

class LocalStorageService {
  save (state) {
    try {
      const serialisedState = JSON.stringify(state)
      localStorage.setItem(KEY, serialisedState)
    } catch (e) {
      console.warn(e)
    }
  }

  load (defaultValue) {
    try {
      const serialisedState = localStorage.getItem(KEY)
      if (serialisedState === null) return defaultValue
      return JSON.parse(serialisedState)
    } catch (e) {
      console.warn(e)
      return defaultValue
    }
  }
}

export const localService = new LocalStorageService()
