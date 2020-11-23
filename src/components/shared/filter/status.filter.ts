import vue from 'vue'

export default vue.filter('status', (value: 'created' | 'processing' | 'processed') => {
  const translation = {
    created: 'solicitada',
    processing: 'processada',
    processed: 'concluída'
  }
  return translation[value]
})
