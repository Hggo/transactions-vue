import vue from 'vue'

export default vue.filter('money', (value: string) => {
  const asNumber = Math.floor(Number(value) * 100)
  return `R$ ${String(asNumber / 100).replace('.', ',')}`
})
