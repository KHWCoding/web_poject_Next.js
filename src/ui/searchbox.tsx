'use client';

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { FormEvent, useState, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
//import { debounce } from "lodash";
// 검색어 목록 띄울 때 사용 예정

export function SearchBox() {
    const router = useRouter();
    const [keyword, setKeyword] = useState("");
    
    const submitHandler = (e: FormEvent<HTMLFormElement> | KeyboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        
        router.push(`/search/${keyword}`);
    } // 버튼을 클릭하거나 엔터키를 누를 시 해당 라우터로 이동

    return (
        <form className="flex border bg-white rounded-md w-[16rem] lg:w-[26rem]" onSubmit={(e) => submitHandler(e)}>
            <input className="pl-1 w-56 text-gray-700 bg-white rounded-l-md outline-none lg:w-96 dark:bg-black dark:text-gray-300" placeholder="검색" onChange={e => setKeyword(e.target.value)} 
            onKeyDown={(e) => { if (e.key === "Enter") submitHandler(e); }} />
            <button type="submit" className="rounded-r-md">
                <MagnifyingGlassIcon className="w-8 h-8 bg-gray-200 rounded-r-md dark:bg-white" />
            </button>
        </form>
    );
}
