import Image from "next/image";
import { inform } from "@/types/type-definition";
import clsx from "clsx";

export default function Card({ data }: { data: inform; }) {
    return (
        <div className={clsx("flex flex-col justify-center items-center w-full rounded-lg shadow-xl", {
            "bg-gray-400/80": data.type === "fungi",
            "bg-blue-600/90": data.type === "insect",
            "bg-red-400/50": data.type === "invertebrates",
            "bg-orange-400/75": data.type === "amphibians",
            "bg-blue-400": data.type === "pisces",
            "bg-green-700/85": data.type === "embryophyte",
            "bg-sky-200/80": data.type === "birds",
            "bg-green-500": data.type === "reptiles",
            "bg-purple-400/90": data.type === "mammals",
            "bg-green-300": data.type === "seaweeds",
        })}>
            <div>
                <div className="bg-white w-48 h-36">
                    <Image src={`/${data.name}.jpg`} width={192} height={144} alt={`${data.name}`} />
                </div>
            </div>
            <div className="flex justify-center bg-gray-100 rounded-b-lg pt-0.5 pb-0.5 w-full">
                <div className="text-base font-semibold tracking-wider text-black p-1/2">{`${data.name}`}</div>
            </div>
        </div>
    )
}

// Image 태그 쓰는 이유
// 1. lazy loading => 최초 페이지 로딩시간 개선 및 최초 데이터 전달 양 감소 (웹페이지 로딩 퍼포먼스 최적화시키기 위함)
// 2. 사이즈 최적화
// 3. layout shift 방지