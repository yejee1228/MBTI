import { useRouter } from 'next/router';
import { RootState } from 'store/modules';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { MainWrap } from 'lib/style/main';
import * as Q from 'lib/style/window';
import { getResult, setResult } from 'store/modules/main';
import { useQuestions } from './queries';
import { IQuestion } from 'lib/types';

const QuestionWindow = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { num } = router.query
    const page: number = num ? num as unknown as number * 1 : 0
    const questionObject: IQuestion = {
        seq: '',
        text: '',
        image: '',
        option1: '',
        option2: '',
        optionPoint1: '',
        optionPoint2: '',
    }

    const [question, setQuestion] = useState(questionObject)
    const [correct, setCorrect] = useState(0)
    const [pageCount, setPageCount] = useState(0)

    const pageArray: number[] = useSelector((state: RootState) => state.main.pageArray)
    const result: string = useSelector((state: RootState) => state.main.result)
    const questionPage: number = pageArray[page]

    const { data } = useQuestions()

    useEffect(() => {
        if (data) {
            setQuestion(data.data[questionPage])
            setPageCount(data.data.length)
        }
        setCorrect(0)
    }, [questionPage, data])

    const nextPage = (option: number, key: string, correct: string) => {
        setCorrect(option)
        dispatch(setResult(page, correct))
        if (page === pageCount - 1) {
            dispatch(getResult())
            setTimeout(function () {
                router.push(`/result?key=${result}`)
            }, 500)
        } else {
            setTimeout(function () {
                router.push(`/question?num=${page + 1}`)
            }, 500)
        }
    }

    return (
        <div>
            <MainWrap>
                <Q.QuestionWrap>
                    <Q.QuestionWindowWrap>
                        <Q.Count>0{page + 1}/{pageCount < 10 ? '0' + pageCount : pageCount}</Q.Count>
                        <Q.ProgressBar>
                            {
                                pageArray.map((value, index) =>
                                    index <= page ?
                                        <Q.Proceeded key={index} count={pageCount} page={index} />
                                        :
                                        <Q.BeforeProgress key={index} count={pageCount} page={index} />
                                )
                            }
                        </Q.ProgressBar>
                        <Q.QuestionBox>
                            <Q.QuestionText color='#4f6772'>
                                Q .
                            </Q.QuestionText>
                            <br />
                            <Q.QuestionText color='#000000'>
                                {
                                    question.text
                                }
                            </Q.QuestionText>
                            <Q.QuestionImageWrap>
                                <Q.QuestionImage src={question.image} />
                            </Q.QuestionImageWrap>
                        </Q.QuestionBox>
                        <Q.ResultBox>
                            <Q.ResultButton correct={correct === 1} onClick={() => nextPage(1, question.seq, question.optionPoint1)}>
                                <Q.ResultButtonSpan>
                                    {question.option1}
                                </Q.ResultButtonSpan>
                            </Q.ResultButton>
                            <Q.ResultButton correct={correct === 2} onClick={() => nextPage(2, question.seq, question.optionPoint2)}>
                                <Q.ResultButtonSpan>
                                    {question.option2}
                                </Q.ResultButtonSpan>
                            </Q.ResultButton>
                        </Q.ResultBox>
                    </Q.QuestionWindowWrap>
                </Q.QuestionWrap>
            </MainWrap>
        </div>
    );
};

export default QuestionWindow;