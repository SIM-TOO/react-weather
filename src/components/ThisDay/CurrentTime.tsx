import React from 'react'
import { useTime } from '../../utils/useTime'

// 스타일 설정
const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
};

const CurrentTime = () => {

    // 1초 = 1000
    const currentTime = useTime(1000);
    // console.log(currentTime);

    // Intl.DateTimeFormat를 활용한 시간 가져오기
    const time = new Intl.DateTimeFormat("ko-KR", options).format(
        currentTime
    );

    return (
        <div>{time}</div>
    )
}

export default CurrentTime