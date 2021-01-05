import React, {useReducer, useEffect, Reducer} from 'react'
import '../../App.css'
import axios from 'axios'


interface DataState {
    isLoading: boolean,
    isError: string,
    post: any,
}
interface DataAction {
    type: ActionType,
    payload: DataState,
}
enum ActionType {
    FETCH_INIT = 'FETCH_INIT',
    FETCH_SUCCESS = 'FETCH_SUCCESS',
    FETCH_ERROR = 'FETCH_ERROR',
}

const initialState = {
  isLoading: true,
  isError: '',
  post: {}
}

const dataFetchReducer: React.Reducer<DataState, DataAction> = (dataState: DataState, action: DataAction) => {
  switch(action.type) {
    case ActionType.FETCH_INIT:
      return {
        isLoading: true,
        post: {},
        isError: ''
      }
    case ActionType.FETCH_SUCCESS:
      return {
        isLoading: false,
        post: action.payload,
        isError: ''
      }
    case ActionType.FETCH_ERROR:
      return {
        isLoading: false,
        post: {},
        isError: '読み込みに失敗しました'
      }
    default:
      return dataState
  }
}

const ReducerApp: React.FC = () => {
  const [dataState, dispatch] = useReducer(dataFetchReducer, initialState)
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then( res =>{
      dispatch({type:ActionType.FETCH_SUCCESS, payload: res.data})
    })
    .catch(err => {
      dispatch({type:ActionType.FETCH_ERROR, payload: initialState})
    })
  }, [])
  return (
    <div className='App'>
      <h3>{dataState.isLoading? 'Loading...': dataState.post.title}</h3>
      <p>{dataState.isError ? dataState.isError : null}</p>
    </div>
  )
}

export default ReducerApp