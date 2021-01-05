import React, {useReducer} from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

interface TCountState {
  firstCounter: number;
  secondCounter: number;
}

interface TAction {
  type: string;
  value: number;
}

const initialState: TCountState = {
  firstCounter: 0,
  secondCounter: 100
}

const reducerFunc = (countState: TCountState, action: TAction): TCountState=> {
  switch (action.type){
    case 'increment1':
      return {...countState, firstCounter: countState.firstCounter + action.value}
    case 'decrement1':
      return {...countState, firstCounter: countState.firstCounter - action.value}
    case 'increment2':
      return {...countState, secondCounter: countState.secondCounter + action.value}
    case 'decrement2':
      return {...countState, secondCounter: countState.secondCounter - action.value}
    case 'reset1':
      return {...countState, firstCounter: initialState.firstCounter}
    case 'reset2':
      return {...countState, secondCounter: initialState.secondCounter}
    default:
      return countState
  }
}
const Counter2 = () => {
  const [count, dispatch] = useReducer(reducerFunc, initialState)
  return (
    <>
      <h2>カウント：{count.firstCounter}</h2>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={()=>dispatch({type: 'increment1', value: 1})}>increment1</Button>
        <Button onClick={()=>dispatch({type: 'decrement1', value: 1})}>decrement1</Button>
        <Button onClick={()=>dispatch({type: 'reset1', value: 0})}>reset</Button>
      </ButtonGroup>
      <h2>カウント2：{count.secondCounter}</h2>
      <ButtonGroup color="secondary" aria-label="outlined primary button group">
        <Button onClick={()=>dispatch({type: 'increment2', value: 100})}>increment2</Button>
        <Button onClick={()=>dispatch({type: 'decrement2', value: 100})}>decrement2</Button>
        <Button onClick={()=>dispatch({type: 'reset2', value: 0})}>reset</Button>
      </ButtonGroup>
    </>
  )
}

export default Counter2