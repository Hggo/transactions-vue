import { moneyFilterFunction } from '@/components/shared/filter/money.filter'
import { statusFilterFunction } from '@/components/shared/filter/status.filter'

describe('Pipes tests', () => {
  it('Should transform the status correctly', () => {
    const status = 'created'
    expect(statusFilterFunction('created')).toBe('solicitada')
    expect(statusFilterFunction('processed')).toBe('concluída')
    expect(statusFilterFunction('processing')).toBe('processada')
  })

  it('Should transform the money value correctly to reais ', () => {
    expect(moneyFilterFunction('1000.99')).toEqual('R$ 1.000,99')
    expect(moneyFilterFunction('100099.9')).toEqual('R$ 100.099,90')
  })
})
