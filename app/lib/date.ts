export const getFormattedDate = (date: any, separator: string) => {
    const year = date.getFullYear();
    const month = leftPad(date.getMonth() + 1);
    const day = leftPad(date.getDate());

    return [year, month, day].join(separator);

}

function leftPad(value: number) {
    if (value >= 10) {
        return value;
    }

    return `0${value}`;
}

export const getElapsedTime = (date: string) => {
    
    const startDate: any = new Date(date);
    const endDate: any = new Date();

    const diff = (endDate - startDate) / 1000;

    const times = [
        {name: '년', ms: 60 * 60 * 24 * 365},
        {name: '월', ms: 60 * 60 * 24 * 30},
        {name: '일', ms: 60 * 60 * 24},
        {name: '시간', ms: 60 * 60},
        {name: '분', ms: 60},
    ]

    for(const time of times) {
        const betTime = Math.floor(diff / time.ms);

        if(betTime > 0) {
            return `${betTime}${time.name} 전`
        }
    }

    return '방금 전'
}