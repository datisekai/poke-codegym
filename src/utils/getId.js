export const getIdPokemon = (url) => {
    const main_string = 'https://pokeapi.co/api/v2/pokemon/'
    return url.slice(main_string.length,url.length - 1)
}