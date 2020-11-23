import vue from 'vue'

export function moneyFilterFunction (value: string) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  })
  return `R$ ${formatter.format(Number(value))}`
}

export default vue.filter('money', moneyFilterFunction)
