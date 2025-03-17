export type category = {
    name: string;
    slug: string;
    description?: string;
};

export const menus: { categories: category[] }[] = [
    {
        
        categories: [
            { name: '멸종위기 1급', slug: 'first', },
            { name: '멸종위기 2급', slug: 'second', },
            { name: '관찰종', slug: 'observe'},
        ],
    },
];

/*
{ name: '고등균류', slug: 'fungi_second', },
{ name: '곤충류', slug: 'insect_second', },
{ name: '무척추동물', slug: 'invertebrates_second', },
{ name: '양서류', slug: 'amphibians_second', },
{ name: '어류', slug: 'pisces_second', },
{ name: '육상식물', slug: 'embryophyte_second', },
{ name: '조류', slug: 'birds_second', },
{ name: '파충류', slug: 'reptiles_second', },
{ name: '포유류', slug: 'mammals_second', },
{ name: '해조류', slug: 'seaweeds_sceond', },
 */