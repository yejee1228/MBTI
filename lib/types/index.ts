export interface IQuestion {
    seq: string,
    text: string,
    image: string,
    option1: string,
    option2: string,
    optionPoint1: string,
    optionPoint2: string
}
export interface IResult {
    title: string,
    group: string,
    name: string,
    key: string,
    description: string[],
    expression: string,
    chemi: { best: string, worst: string }
}