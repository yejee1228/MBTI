const SET_INITIAL_PAGE = 'main/SET_INITIAL_PAGE' as const
const SET_PAGE_ARRAY = 'main/SET_PAGE_ARRAY' as const
const INCREASE_PAGE = 'main/INCREASE_PAGE' as const
const SET_RESULT = 'main/SET_RESULT' as const
const GET_RESULT = 'main/GET_RESULT' as const
const SET_INITIAL_SCORE = 'main/SET_INITIAL_SCORE' as const

export const setInitialPage = () => ({ type: SET_INITIAL_PAGE })
export const setPageArray = (pageCount: number) => ({ type: SET_PAGE_ARRAY, pageCount })
export const increasePage = () => ({ type: INCREASE_PAGE })
export const setResult = (page: number, correct: string) => ({ type: SET_RESULT, page, correct })
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
    corrects: string[]
}

const initialState: MainState = {
    page: 0,
    pageArray: [],
    result: '',
    resultType: ['EI', 'SN', 'FT', 'PJ'],
    corrects: [],
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
            const corrects = state.corrects.length <= action.page
                ? [...state.corrects, action.correct]
                : state.corrects.map((correct, index) => index === action.page ? action.correct : correct)
            return {
                ...state,
                corrects
            }
        }

        case GET_RESULT: {
            const result: string[] = []
            const arr = state.resultType
            arr.forEach(item => {
                const options = item.split('')
                const option1 = options[0]
                const option2 = options[1]
                const option1Count = state.corrects.filter(correct => correct === option1).length
                const option2Count = state.corrects.filter(correct => correct === option2).length
                result.push(option1Count > option2Count ? option1 : option2)
            })
            return {
                ...state,
                result: result.join('')
            }
        }

        case SET_INITIAL_SCORE:
            return {
                ...state, result: '',
                corrects: [],
            }

        default: return state
    }
}

export default reducer;