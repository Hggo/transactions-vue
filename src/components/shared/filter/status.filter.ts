import vue from 'vue'

export function statusFilterFunction (value: 'created' | 'processing' | 'processed') {
  const translation = {
    created: 'solicitada',
    processing: 'processada',
    processed: 'concluída'
  }
  return translation[value]
}

export default vue.filter('status', statusFilterFunction)
