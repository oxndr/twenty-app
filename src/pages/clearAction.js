export const clearAction = (state, payload) => {
  console.log('Cleared store!')
  return { data: { name: '', email: '', phone: '', quantity: '' } }
}
