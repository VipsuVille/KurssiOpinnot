import axios from 'axios'
const baseUrl = 'api/persons'

const getAll = () => {
  console.log(baseUrl)
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}
const letsRemove = (id) => {
  console.log(`${baseUrl}/${id}`)
  var j = (`${baseUrl}/${id}`)
  return axios.delete(j)
}
export default { getAll, create, update, letsRemove }