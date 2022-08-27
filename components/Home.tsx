import React from 'react';
import { useRouter } from "next/router";
import { useDispatch } from 'react-redux';
import { MainWrap } from 'lib/style/main';
import * as H from 'lib/style/home';
import { setInitialPage, setInitialScore, setPageArray } from 'store/modules/main';
import { useQuestions } from 'components/question/queries';

const Home = () => {
    const { data } = useQuestions()
    const router = useRouter()
    const dispatch = useDispatch()
    const goQuestionPage = () => {
        dispatch(setInitialPage())
        dispatch(setInitialScore())
        dispatch(setPageArray(data.data.length))
        router.push('/question')
    }

    return (
        <div>
            <MainWrap>
                <H.Wrap>
                    <H.Poster />
                    <H.Button onClick={goQuestionPage}>
                        <H.ButtonText color={'#FFFFFF'}>테스트</H.ButtonText>
                        &nbsp;
                        <H.ButtonText color={'#ffc848'}>시작하기</H.ButtonText>
                    </H.Button>
                </H.Wrap>
            </MainWrap>
        </div>
    )
}

export default Home