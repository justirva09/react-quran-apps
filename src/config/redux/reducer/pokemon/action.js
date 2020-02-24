import actionType from './const';


export const setPokemon = (value) => ({
  type: actionType.SET_POKEMON,
  value: value
})

export const clearPokemon = () => ({
  type: actionType.CLEAR_POKEMON
})
