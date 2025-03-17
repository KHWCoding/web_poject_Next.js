import { getData } from "@/backend/data-actions";
import Card from "@/ui/card";
import { SearchBox } from "@/ui/searchbox";
import UpScrollButton from "@/ui/up-scroll-btn";

export default async function Page({ params }: { params: Promise<{ category: string }>}) {
    const param = await params;
    const data = await getData(param.category);
    
    return (
        <main className="pl-4 pr-4 pt-16 pb-12 lg:pl-[19rem] lg:pt-0 bg-white">
            <div className="flex items-center justify-center p-2">
                <SearchBox />
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {data?.map(el => (
                    <div key={el.id}>
                        <Card data={el} />
                    </div>
                ))}
            </div>
            <UpScrollButton />
        </main>
    );
}