import { useRouter } from 'next/router';
import * as W from 'lib/style/window';
import { useResult, useResultBestChemi, useResultWorstChemi } from './queries';
import { useSelector } from 'react-redux';
import { RootState } from 'store/modules';
import { useEffect } from 'react';

const Result = () => {
    const router = useRouter()
    const resultKey = useSelector((state: RootState) => state.main.result)
    const key = (router.query?.key && typeof router.query?.key === 'string') ? router.query?.key : resultKey

    const { data: result } = useResult(key)
    const bestChemi = result?.data.chemi.best
    const worstChemi = result?.data.chemi.worst
    const { data: bestResult } = useResultBestChemi(bestChemi, {
        enabled: !!bestChemi,
    })
    const { data: worstResult } = useResultWorstChemi(worstChemi, {
        enabled: !!worstChemi,
    })

    useEffect(() => {
        if (!key) {
            alert('테스트를 먼저 진행해주세요.')
            router.push('/')
        }
    }, [key, router])

    const copyLink = () => {
        const dummy = document.createElement("input")
        const text = location.href

        document.body.appendChild(dummy)
        dummy.value = text
        dummy.select()
        document.execCommand("copy")
        document.body.removeChild(dummy)
        alert('링크가 복사되었습니다')
    }

    const goReturn = () => {
        router.push('/')
    }

    return (
        <div>
            <W.ResultWrap>
                {result &&
                    <>
                        <W.ResultTypeName>{result?.data.key}</W.ResultTypeName>
                        <W.ResultTypeText>{result && result.data.title}</W.ResultTypeText>
                        <W.ResultCharacter>
                            <W.ResultCharacterText color={'#FFFFFF'}>{result && '<' + result.data.group + '>'}</W.ResultCharacterText>
                            &nbsp;
                            <W.ResultCharacterText color={'#FFF086'}>{result && result.data.name}</W.ResultCharacterText>
                        </W.ResultCharacter>
                        {/* <W.ResultWindowWrap>
                            <W.ResultContentWrap>
                                <W.ResultImage src={result && '/images/' + result.data.key + '.png'} />
                                <W.TypeTalk>{result && result.data.key} 유형</W.TypeTalk>
                                <W.Expression color='#000D50'>
                                    {result && result.data.expression}
                                </W.Expression>
                            </W.ResultContentWrap>
                        </W.ResultWindowWrap>
                        <W.ResultWindowWrap>
                            <W.ResultContentWrap>
                                <W.ResultDescription>
                                    <b>{result && result.data.description[0]}</b>
                                    <br />
                                    <br />
                                    {result && result.data.description[1]}
                                    <br />
                                    <br />
                                    {result && result.data.description[2]}
                                    <br />
                                    <br />
                                    {result && result.data.description[3]}
                                </W.ResultDescription>
                            </W.ResultContentWrap>
                        </W.ResultWindowWrap> */}
                        <W.Relationship>
                            <W.ResultChmiWindowWrap>
                                <W.ResultContentWrap onClick={() => router.push(`/result?key=${bestResult?.data.key}`)}>
                                    <W.TitleSpan>가장 잘 맞는<br />유형</W.TitleSpan>
                                    <W.ChmiImg url={bestResult && '/images/' + bestResult?.data.key + '.png'}></W.ChmiImg>
                                    <W.ChmiName>{bestResult && bestResult?.data.key}</W.ChmiName>
                                </W.ResultContentWrap>
                            </W.ResultChmiWindowWrap>
                            <W.ResultChmiWindowWrap>
                                <W.ResultContentWrap onClick={() => router.push(`/result?key=${worstResult?.data.key}`)}>
                                    <W.TitleSpan>정반대의<br />유형</W.TitleSpan>
                                    <W.ChmiImg url={worstResult && '/images/' + worstResult?.data.key + '.png'}></W.ChmiImg>
                                    <W.ChmiName>{worstResult && worstResult?.data.key}</W.ChmiName>
                                </W.ResultContentWrap>
                            </W.ResultChmiWindowWrap>
                        </W.Relationship>
                        <W.ResultWindowWrap>
                            <W.ResultContentWrap>
                                <W.TitleSpan>
                                    결과 공유하고, 친구와 궁합 확인하기
                                </W.TitleSpan>
                                <W.ShareBox>
                                    <W.ShareImg src='/images/kakao.png' alt='카카오톡 공유하기' />
                                    <W.ShareImg src='/images/twitter.png' alt='트위터 공유하기' />
                                    <W.ShareImg onClick={copyLink} src='/images/link.png' alt='링크 복사하기' />
                                </W.ShareBox>
                            </W.ResultContentWrap>
                        </W.ResultWindowWrap>
                        <W.ReturnButton onClick={goReturn}>
                            <a>
                                테스트&nbsp;<W.ResultCharacterText color={'#FFF086'}>다시하기</W.ResultCharacterText>
                            </a>
                        </W.ReturnButton>
                    </>
                }
            </W.ResultWrap>
        </div>
    );
};

export default Result;