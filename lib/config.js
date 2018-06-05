const defaults = {}
var reader = new FileReader();
defaults.configDir = "./config"
defaults.atomsPath = path.join(defaults.configDir, 'atoms.yaml')
defaults.specialTokensPath = path.join(defaults.configDir, 'special_tokens.yaml')
let tokens = {}
export function loadConfigSync({ configDir = defaults.configDir, atomsPath = defaults.atomsPath, specialTokensPath = defaults.specialTokensPath } = {}) {
    $.ajax({
        url: specialTokensPath,
        method: "GET",
        async: false,
        success: (data) =>{ tokens.specialTokens = jsyaml.load(data)}
    })
    $.ajax({
        url: atomsPath,
        method: "GET",
        async: false,
        success: (data) =>{ tokens.atoms = jsyaml.load(data)}
    })
    while(1){
        if(tokens.hasOwnProperty('atoms') && tokens.hasOwnProperty('specialTokens')){
            return tokens;
        }
    }
}
export function saveConfigSync({ configDir = defaults.configDir, atomsPath = defaults.atomsPath, specialTokensPath = defaults.specialTokensPath }) {
    $.ajax({
        url: atomsPath,
        method: "PUT",
        data:  jsyaml.safeDump(this.atoms),
        async: false
    })
}
export function setAtoms(atoms) {
    tokens.atoms = atoms;
}
export function getAtoms() {
    return tokens.atoms
}
export function getSpecialTokens() {
    return tokens.specialTokens;
}
export function getAllLilSymbols() {
    let symbols = this.getAtoms().map(a => ({ big: a.big, lil: a.lil || a.lil_generated }));
    let specials = this.getSpecialTokens();
    for (let s in specials)
        if (!Array.isArray(specials[s]))
            symbols.push({ big: s, lil: specials[s] });
        else
            for (let variable of specials[s])
                symbols.push({ big: "variableSet", lil: variable.setter }, { big: "variableGet", lil: variable.getter });
    return symbols;
}