import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'

export const useMainStore = defineStore({
  id: 'myMainStore',
  state: () => ({
    storeId: 1,
    jwt: '',
    refreshToken: '',
    productArray: [],
    shippingChoicesArray: [],
    cart: []
  }),
  getters: {
    getStoreId: (state) => state.storeId,
    getJWT: (state) => state.jwt,
    getRefreshToken: (state) => state.refreshToken,
    getProductArray: (state) => state.productArray,
    getShippingChoicesArray: (state) => state.shippingChoicesArray,
    getCart: (state) => state.cart
  },
  actions: {
    setJWT(jwt: any) {
      this.jwt = jwt
    },
    setRefreshToken(RT: any) {
      this.refreshToken = RT
    },
    setProductArray(Array: any) {
      this.productArray = Array || []
    },
    setShippingChoicesArray(Array: any) {
      this.shippingChoicesArray = Array || []
    },
    getStoredCart() {
      if (sessionStorage.getItem('cart')) {
        const CartArrayString = sessionStorage.getItem('cart')
        if (CartArrayString) {
          return JSON.parse(CartArrayString)
        } else {
          return []
        }
      } else {
        return []
      }
    },
    emptyCart() {
      sessionStorage.setItem('cart', JSON.stringify([]))
      this.cart = []
    },
    removeItemFromCart(Item: any) {
      this.cart = this.getStoredCart()
      const removeThisIndex = this.cart.findIndex((element) => element === Item)
      if (removeThisIndex !== -1) {
        this.cart.splice(removeThisIndex, 1)
      }

      sessionStorage.setItem('cart', JSON.stringify(this.cart))
    },
    reduceItemQuantityFromCart(Item: any) {
      // Determine if already in cart
      this.cart = this.getStoredCart()
      const reduceThisIndex = this.cart.findIndex((element) => element === Item)
      if (reduceThisIndex !== -1) {
        if (this.cart[reduceThisIndex].cartCount - 1 === 0) {
          this.cart.splice(reduceThisIndex, 1)
        } else {
          this.cart[reduceThisIndex].reduceThisIndex--
        }

        sessionStorage.setItem('cart', JSON.stringify(this.cart))
      }
    },
    addItemToCart(Item: any) {
      // Determine if already in cart
      this.cart = this.getStoredCart()
      const increaseThisIndex = this.cart.findIndex((element) => element === Item)
      if (increaseThisIndex !== -1) {
        this.cart[increaseThisIndex].cartCount++
      } else {
        this.cart.push(Item)
      }

      sessionStorage.setItem('cart', JSON.stringify(this.cart))
    },
    calculateCartCost() {
      this.cart = this.getStoredCart()
      let totalCost = 0.0
      this.cart.forEach((item) => {
        totalCost += item.cost * item.cartCount
      })

      return totalCost
    },
    calculateAvailableShippingChoices() {
      this.cart = this.getStoredCart()
      let availableShippingChoices: any[] = []
      let totalArea = 0.0
      this.cart.forEach((item) => {
        totalArea += item.length * item.width * item.height
      })

      let runningAreaMax = 0.0
      this.shippingChoicesArray.forEach((choice) => {
        runningAreaMax = choice.length * choice.width * choice.height
        if (runningAreaMax > totalArea) {
          availableShippingChoices.push(choice)
          runningAreaMax = 0.0
        }
      })

      return availableShippingChoices
    }
  },
  persist: true
})
