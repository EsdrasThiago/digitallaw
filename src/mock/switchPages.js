import { icmsContents, improbidadeContents, uberizacaoContents } from "./mainContents"

export const switchPagesFunction = (actualPage) => {
    switch (actualPage) {
        case 'improbidade':
            return improbidadeContents;
        case 'icms':
            return icmsContents;
        case 'uberizacao':
            return uberizacaoContents;
        default:
            break
    }
}