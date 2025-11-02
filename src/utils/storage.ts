
type TKeyStorage = 'user'

const saveDataStorage = (key: TKeyStorage, value: string) => {
  localStorage.setItem(key, value)
}

const getDataStorage = (key: TKeyStorage) => {
  return localStorage.getItem(key)
}

const removeDataStorage = (key: TKeyStorage) => {
  localStorage.removeItem(key)
}
export {saveDataStorage, getDataStorage, removeDataStorage}