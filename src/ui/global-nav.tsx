'use client';

import { menus, type category } from "@/data/menu";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useState } from "react";

export function GlobalNav() {
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);

    // 큰 화면일 때는 왼쪽 옆에 네비게이션바가 고정, 작은 화면일 때는 위쪽에 내비게이션 바 고정 및 메뉴를 열고 닫을 수 있는 버튼 보이게 하기
    return (
        <div className="fixed top-0 z-10 flex flex-col w-full bg-white border-b border-gray-800 lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
            <div className="flex items-center justify-center px-4 py-4 h-14 lg:h-auto">
                <Link href="/" className="group flex items-center justify-center gap-x-2.5" onClick={close}>
                    <h1 className="font-semibold tracking-wide text-black group-hover:text-gray-400">
                        대한민국 멸종위기 생물
                    </h1>
                </Link>
            </div>
            <button type="button" className="absolute top-0 left-0 flex items-center px-4 group h-14 gap-x-2 lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                    <XMarkIcon className="block w-6 text-black" />
                ) : (
                    <Bars3BottomLeftIcon className="block w-6 text-black" />
                )}
                <div className="font-medium text-black group-hover:text-gray-400">
                    메뉴
                </div>
            </button>

            <div className={clsx('overflow-y-auto lg:static lg:block', {
                'fixed inset-x-0 bottom-0 top-14 mt-px bg-white' : isOpen,
                hidden: !isOpen,
            })}>
                <nav className="px-2 pt-5 pb-24 space-y-6">
                    {menus.map((section, idx) => {
                        return (
                            <div key={idx}>
                                <div className="space-y-1">
                                    {section.categories.map((item, idx) => (
                                        <GlobalNavItem key={idx} item={item} close={close} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}

function GlobalNavItem({ item, close, }: { item: category, close: () => false | void; }) {
    const segment = useSelectedLayoutSegment(); // 호출된 레이아웃보다 한 수준 아래에 있는 segment를 반환
    const isActive = item.slug === segment; // 모든 활성 세그먼트를 반환하려면 useSelectedLayoutSegments를 사용

    return (
        <Link onClick={close} href={`/${item.slug}`} className={clsx(
            'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-800',
            {
                'text-gray-600 hover:bg-gray-100': !isActive,
                'text-gray-800 bg-gray-200': isActive,
            },
        )}
        >
            {item.name}
        </Link>
    );
}