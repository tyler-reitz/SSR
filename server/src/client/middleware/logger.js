export default state => next => action => {
  const { type, payload } = action
  console.log('Action: ', `type: ${type}`, `data: ${payload && payload.data}`)
  return next(action)
}
