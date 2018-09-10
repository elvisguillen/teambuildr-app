import { 
  ADD_FLASH_MESSAGE,
  DELETE_FLASH_MESSAGE,
} from './actionTypes';

export function addFlashMessages(message) {
  return {
    type: ADD_FLASH_MESSAGE,
    message
  }
}

export function deleteFlashMessages(id) {
  return {
    type: DELETE_FLASH_MESSAGE,
    id
  }
}