import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  seq: string,
  text: string,
  image: string,
  option1: string,
  option2: string,
  optionPoint1: string,
  optionPoint2: string,
}[]

const question = [
  {
    seq: "EI",
    text: "자가격리 중인 나의 모습은?",
    image: "/images/EI.png",
    option1: "너무 행복하다.. 룰루~😚",
    option2: "지겨워... 답답해서 당장 나가고만 싶다아!!!!😭",
    optionPoint1: "I",
    optionPoint2: "E",
  },
  {
    seq: "SN",
    text: "길을 선택하는 당신의 방법은?",
    image: "/images/SN.png",
    option1: "항상 가는 길로 빠르게 간다.",
    option2: "새로운 길로 모험을 떠나볼까나?",
    optionPoint1: "S",
    optionPoint2: "N",
  },
  {
    seq: "FT",
    text: "친구가 우울해서 염색했다고 한다. 내가 할 말은?",
    image: "/images/FT.png",
    option1: "무슨 일 있어? 왜 우울해?",
    option2: "오! 무슨색??",
    optionPoint1: "F",
    optionPoint2: "T",
  },
  {
    seq: "PJ",
    text: "여행을 가기로 했다. 당신은?",
    image: "/images/PJ.png",
    option1: "발 닿는 데로 가는게 진정한 여행이지.",
    option2: "시간과 장소를 꼼꼼히 계획한다.",
    optionPoint1: "P",
    optionPoint2: "J",
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;
  if (method === "GET") {
    return res.status(200).json(question)
  }
}
