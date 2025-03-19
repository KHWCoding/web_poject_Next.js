'use client';

import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { throttle } from "lodash";
import { useEffect, useState, useMemo } from "react";

// throttle => 사용자가 이벤트를 몇 번이나 발생시키든 일정한 시간 간격으로 한 번만 실행되게 해줌
const THROTTLE_WAIT = 300; // 1초: 1000
export default function UpScrollButton() {
    const [isVisible, setisVisible] = useState(typeof window === "undefined" ? false : window.scrollY > 0);
    // ssr을 할 경우, 페이지를 처음 렌더링 하는 과정에서 window나 document의 전역 객체가 존재하지 않으므로 조건을 통해 구분

    // 스크롤 위치에 따른 버튼의 랜더링 여부 결정
    // useMemo는 동일한 값을 리턴하는 함수를 반복적으로 호출할 경우 맨 처음 값을 메모리에 저장해서 필요할 때마다 또다시 계산하지 않고 메모리에서 꺼내서 재사용 하는 기법
    const handleIsVisible = useMemo(() => 
        throttle(() => {
            setisVisible(window.scrollY > 0);
    }, THROTTLE_WAIT), []);
    // useCallback: 이전에 생성된 함수기억, useMemo: 이전에 계산된 값 기억

    // 버튼 클릭 시 15ms마다 scrollStep만큼 이동
    const onClick = () => {
        const scrollStep = -window.scrollY / 20;
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
                return;
            }
            clearInterval(scrollInterval); // 메모리 누수 방지, 함수 호출 중단
        }, 15)
    }

    // useEffect는 컴포넌트가 랜더링 될 때마다 특정 작업을 실행할 수 있또록 하는 Hook
    useEffect(() => {
        window.addEventListener("scroll", handleIsVisible);
        return () => {
            window.removeEventListener("scroll", handleIsVisible);
        }
    }, [handleIsVisible]);

    return (
        <div className="fixed bottom-10 right-4 w-9 h-9">
            {isVisible && (
                <button type="button" onClick={onClick} aria-label="최상단 이동">
                    <ArrowUpCircleIcon className="opacity-30 w-9 h-9 hover:opacity-70" />
                </button>
            )}
        </div>
    );
}