import { searchData } from "@/backend/data-actions";
import Card from "@/ui/card";
import { SearchBox } from "@/ui/searchbox";

export default async function Page({ params }: { params: Promise<{ name: string }>}) {
    const param = await params;
    const data = await searchData(decodeURIComponent(param.name));
    // 아스키문자로 변환되어 있는 param.name을 변환해줌

    return (
        <main className="pl-4 pr-4 pt-16 pb-12 lg:pl-[19rem] lg:pt-0">
            <div className="flex items-center justify-center p-2">
                <SearchBox />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {data?.map(el => (
                    <div key={el.id}>
                        <Card data={el} />
                    </div>
                ))}
            </div>
        </main>
    );
}