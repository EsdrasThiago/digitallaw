import { useMemo, useState } from 'react'
import Context from './myContext'

function Provider({ children }) {
    const [questions, setQuestions] = useState();

    const listData = useMemo(() => ({
        questions,
        setQuestions
    }), [
        questions,
        setQuestions
    ])
    return <Context.Provider value={listData}>{children}</Context.Provider>;
}

export default Provider