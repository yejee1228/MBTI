const SET_INITIAL_PAGE = 'main/SET_INITIAL_PAGE' as const
const SET_PAGE_ARRAY = 'main/SET_PAGE_ARRAY' as const
const INCREASE_PAGE = 'main/INCREASE_PAGE' as const
const SET_RESULT = 'main/SET_RESULT' as const
const GET_RESULT = 'main/GET_RESULT' as const
const SET_INITIAL_SCORE = 'main/SET_INITIAL_SCORE' as const

export const setInitialPage = () => ({ type: SET_INITIAL_PAGE })
export const setPageArray = (pageCount: number) => ({ type: SET_PAGE_ARRAY, pageCount })
export const increasePage = () => ({ type: INCREASE_PAGE })
export const setResult = (key: string, correct: string) => ({ type: SET_RESULT, key, correct })
export const getResult = () => ({ type: GET_RESULT })
export const setInitialScore = () => ({ type: SET_INITIAL_SCORE })

export type MainAction =
    | ReturnType<typeof setInitialPage>
    | ReturnType<typeof setPageArray>
    | ReturnType<typeof increasePage>
    | ReturnType<typeof setResult>
    | ReturnType<typeof getResult>
    | ReturnType<typeof setInitialScore>;

export interface MainState {
    page: number,
    pageArray: number[],
    result: string,
    resultType: string[],
    corrects:
    { key: string, options: { key: string, count: number }[] }[]
}

const initialState: MainState = {
    page: 0,
    pageArray: [],
    result: '',
    resultType: ['EI', 'SN', 'FT', 'PJ'],
    corrects: [
        { key: 'EI', options: [{ key: 'E', count: 0 }, { key: 'I', count: 0 }] },
        { key: 'SN', options: [{ key: 'S', count: 0 }, { key: 'N', count: 0 }] },
        { key: 'FT', options: [{ key: 'F', count: 0 }, { key: 'T', count: 0 }] },
        { key: 'PJ', options: [{ key: 'P', count: 0 }, { key: 'J', count: 0 }] },
    ],
}

const reducer = (state: MainState = initialState, action: MainAction) => {
    switch (action.type) {
        case SET_INITIAL_PAGE:
            return { ...state, page: 0 }

        case SET_PAGE_ARRAY: {
            const array: number[] = []
            for (let i = 0; i < action.pageCount; i++) {
                array.push(i)
            }
            const sortedArray = array.sort(() => Math.random() - 0.5);
            return { ...state, pageArray: sortedArray }
        }

        case INCREASE_PAGE:
            return { ...state, page: state.page + 1 }

        case SET_RESULT: {
            return {
                ...state,
                corrects: state.corrects.map(correct => correct.key === action.key ? {
                    ...correct, options: correct.options.map(value => value.key === action.correct ? { ...value, count: value.count + 1 }
                        : value)
                } : correct)
            }
        }

        case GET_RESULT: {
            const result: string[] = []
            const arr = state.resultType
            for (let i = 0; i < arr.length; i++) {
                const correct = state.corrects.filter(correct => correct.key === arr[i])[0]
                const maxValue = correct.options[0].count >= correct.options[1].count ? correct.options[0].key : correct.options[1].key
                result[i] = maxValue
            }
            return {
                ...state,
                result: result.join('')
            }
        }

        case SET_INITIAL_SCORE:
            return {
                ...state, result: '',
                corrects: [
                    { key: 'EI', options: [{ key: 'E', count: 0 }, { key: 'I', count: 0 }] },
                    { key: 'SN', options: [{ key: 'S', count: 0 }, { key: 'N', count: 0 }] },
                    { key: 'FT', options: [{ key: 'F', count: 0 }, { key: 'T', count: 0 }] },
                    { key: 'PJ', options: [{ key: 'P', count: 0 }, { key: 'J', count: 0 }] },
                ],
            }

        default: return state
    }
}

export default reducer;