
export interface IQuestionAndAnswers {
    id: string
    question: string
    answer: string
}

export const questionAndAnswers: IQuestionAndAnswers[] =
    [
        {
            id: '0',
            question: 'Varför gjorde du så?',
            answer: "Jag är en rumpa"
        },
        {
            id: '1',
            question: 'Vars studerade du?',
            answer: "Jag studerande vid medieinstitutet"
        },
        {
            id: '2',
            question: 'Har arbetslivet bemött dig som du tänkt?',
            answer: "Inte riktigt. Men när man inte vet mycket om en bransch innan så är det svårt att säga något annat."
        },
        {
            id: '3',
            question: 'Vad har du för framtidsplaner?',
            answer: "Jag vill du göra nåt annat"
        },
    ]