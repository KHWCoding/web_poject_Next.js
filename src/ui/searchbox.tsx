'use client';

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { FormEvent, useState, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
//import { debounce } from "lodash";
// 검색어 목록 띄울 때 사용 예정

export function SearchBox() {
    const router = useRouter();
    const [keyword, setKeyword] = useState("");
    
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        router.push(`/search/${keyword}`);
    } // 버튼 클릭 시시 해당 라우터로 이동

    const enterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        
        router.push(`/search/${keyword}`);
    } // 엔터키를 누를 시 해당 라우터로 이동동

    return (
        <form className="flex border w-[16rem] lg:w-[26rem]" onSubmit={(e) => submitHandler(e)}>
            <input className="pl-1 w-56 lg:w-96" placeholder="검색" onChange={e => setKeyword(e.target.value)} 
            onKeyDown={(e) => { if (e.key === "Enter") enterHandler(e); }} />
            <button type="submit" className="bg-gray-200">
                <MagnifyingGlassIcon className="w-8 h-8" />
            </button>
        </form>
    );
}
