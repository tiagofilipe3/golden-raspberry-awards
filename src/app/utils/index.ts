import { v4 as uuidv4 } from 'uuid'

const addUuid = (list: any[]) => {
  return list.map((item) => ({ ...item, id: uuidv4() }))
}

export default addUuid
