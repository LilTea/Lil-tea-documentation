
import { loadConfigSync } from "./config.js" 
const tokens = loadConfigSync().atoms

function tokenToToken(token, from, to) {
    
    const found = tokens.filter(t => t[from] === token || t[from + "_generated"] === token);
    if (found.length == 0) throw Error(`${to} token for ${from} token "${token}" not found.`)
    if (found.length > 1) throw Error(`more than 1 possible ${to} tokens exist for ${from} token "${token}".`)
    return found[0][to] || found[0][to + "_generated"];
}
function lil2jsToken(token){
    return tokenToToken(token, "lil", "js");
}
function big2lilToken(token){
    return tokenToToken(token, "big", "lil");
}
function lil2bigToken(token){
    return tokenToToken(token, "lil", "js");
}
function big2jsToken(token){
    return tokenToToken(token, "big", "js");
}


export function big2lil(source) {
    return source.split(/\s/).map(big2lilToken).join('');
}

export function lil2big(source) {
    throw Error("Not implemented");
}

export {lil2jsToken,big2lilToken, lil2bigToken,big2jsToken}

const _tokens = tokens;
export { _tokens as tokens };