import Transaction from '@/typings/transaction'
import httpClient from './httpClient'

export function listTransactions () {
  return httpClient.get<Transaction[]>('/transactions')
}

export function getTransaction (id: string) {
  return httpClient.get<Transaction>(`/${id}`)
}
