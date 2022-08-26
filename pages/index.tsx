import { useRouter } from "next/router";
import { useDispatch } from 'react-redux';
import { MainWrap } from 'lib/style/main';
import { Wrap, Poster, Button, ButtonText } from 'lib/style/title';
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
        <Wrap>
          <Poster />
          <Button onClick={goQuestionPage}>
            <ButtonText color={'#FFFFFF'}>테스트</ButtonText>
            &nbsp;
            <ButtonText color={'#ffc848'}>시작하기</ButtonText>
          </Button>
        </Wrap>
      </MainWrap>
    </div>
  )
}

export default Home
