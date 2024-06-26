import { questionsIcms, questionsUberizacao } from "./questions";

export const switchQuestionsFunction = (actualQuestions) => {
    switch (actualQuestions) {
        case 'icms':
            return questionsIcms;
        case 'uberizacao':
            return questionsUberizacao;
        default:
            break
    }
}