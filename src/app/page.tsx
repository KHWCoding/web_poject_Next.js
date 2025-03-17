import { ExternalLink } from "@/ui/external-link";
import { SearchBox } from "@/ui/searchbox";

export default function Home() {
  return (
    <main className="pl-4 pr-4 pt-16 pb-12 h-screen lg:pl-[19rem] lg:pt-0">
      <div className="flex items-center justify-center p-2">
        <SearchBox />
      </div>
      <div className="flex justify-center item-center h-[92%] lg:h-[94%]">
        <div className="border-2 border-gray-500 rounded-xl w-full">
          <div className="p-2 leading-8">
            <div className="tracking-wider">
              모든 이미지는 국립생물자원관에서 가져왔습니다.
              <div className="flex gap-2">
                <ExternalLink href="https://species.nibr.go.kr/index.do">사이트 이동</ExternalLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

/*<div className="flex gap-2">
            <Link href="/login" className="flex items-center self-start gap-2 px-6 py-3 text-sm font-medium text-white transition-colors bg-blue-400 rounded-lg hover:bg-blue-200 md:text-base">
              로그인 <ArrowRightIcon className="w-5 md:w-2 lg:w-6" />
            </Link>
            <Link href="/signup" className="flex items-center self-start gap-2 px-6 py-3 text-sm font-medium text-white transition-colors bg-blue-400 rounded-lg hover:bg-blue-200 md:text-base">
              회원가입 <UserPlusIcon className="w-5 md:w-2 lg:w-6" />
            </Link>
          </div>*/