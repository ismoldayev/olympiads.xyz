// Section -> Chapter -> Module

export type SectionID =
  | 'general'
  | 'mechanics'
  | 'electromagnetism'
  | 'thermodynamics'
  | 'plat'
  | 'adv';

export type Chapter = {
  name: string;
  items: string[];
  description?: string;
};

const MODULE_ORDERING: { [key in SectionID]: Chapter[] } = {
  general: [
    {
      name: 'Първи стъпки',
      description: 'Започнете оттук ако сте начинаещ олимпиец.',
      items: [
        'introduction',
        'syllabus',
        'resources-learning-phyiscs',
        'faq',
        'expected-knowledge',
      ],
    },
    {
      name: 'Съдействие',
      description: 'Как можете да подкрепите проекта.',
      items: ['modules', 'working-mdx', 'contributing', 'adding-solution'],
    },
    {
      name: 'Състезателни ресурси',
      description: 'Полезно за всички състезатели',
      items: ['olympiads'],
    },
    {
      name: 'Подготвителни планове',
      description: 'Планове за подготовка по различни предмети.',
      items: ['plan-geo-int'],
    },
    {
      name: 'Математически апарат',
      description: 'Необходими математически знания за олимпиадите по физика.',
      items: [],
    },
    {
      name: 'Експерименти',
      description: 'Как да се справим добре на експерименталния тур.',
      items: [],
    },
  ],
  mechanics: [
    {
      name: 'Кинематика',
      items: [],
    },
    {
      name: 'Статика',
      items: [],
    },
    {
      name: 'Динамика',
      items: [],
    },
    {
      name: 'Трептения',
      items: [],
    },
    {
      name: 'Въртене',
      items: [],
    },
    {
      name: 'Гравитация',
      description: '',
      items: [],
    },
    {
      name: 'Флуиди',
      description: '',
      items: [],
    },
  ],
  electromagnetism: [
    {
      name: 'Електростатика',
      items: [],
    },
    {
      name: 'Електричен ток',
      items: [],
    },
    {
      name: 'Магнитостатика',
      items: [],
    },
    {
      name: 'Движение на заредени частици',
      items: [],
    },
    {
      name: 'Индукция',
      items: [],
    },
    {
      name: 'Нелинейни вериги',
      items: [],
    },
    {
      name: 'Електродинамика',
      items: [],
    },
  ],
  thermodynamics: [
    {
      name: 'Идеален газ',
      items: [],
    },
    {
      name: 'Мокекулно-кинетична теория',
      items: [],
    },
    {
      name: 'Втори принцип на термодинамиката',
      items: [],
    },
    {
      name: 'Реални газове и течности',
      items: [],
    },
  ],
  plat: [
    {
      name: 'Релативистична кинематика',
      items: [],
    },
    {
      name: 'Релативистична динамика',
      items: [],
    },
    {
      name: 'Вълни',
      items: [],
    },
    {
      name: 'Вълнови ефекти',
      items: [],
    },
    {
      name: 'Квантова механика',
      items: [],
    },
  ],
  adv: [
    {
      name: 'Геометрия и време',
      items: [],
    },
    {
      name: 'Небесна сфера',
      items: [],
    },
    {
      name: 'Небесна механика',
      items: [],
    },
    {
      name: 'Оптика',
      items: [],
    },
    {
      name: 'Частици и полета',
      items: [],
    },
    {
      name: 'Закони за излъчване',
      items: [],
    },
    {
      name: 'Галактики, космология',
      items: [],
    },
    {
      name: 'Наблюдателен кръг',
      items: [],
    },
  ],
};

export default MODULE_ORDERING;
export const SECTIONS: SectionID[] = Object.keys(
  MODULE_ORDERING
) as SectionID[];
export const SECTION_LABELS: { [key in SectionID]: string } = {
  general: 'Общи',
  mechanics: 'Механика',
  electromagnetism: 'Електричество и магнетизъм',
  thermodynamics: 'Термодинамика',
  plat: 'Модерна физика',
  adv: 'Астрономия',
};
export const SECTION_SEO_DESCRIPTION: { [key in SectionID]: string } = {
  general:
    'Обща информация за олимпиади по физика и астрономия. Включва ресурси за подготовка, практични съвети и още!',
  mechanics:
    'Темите по механика включват кинематика, статика, динамика, трептения, въртеливи движения, гравитация, механика на флуиди и още!.',
  electromagnetism:
    'Темите по електромагнетизъм включват електростатика, електрични вериги, магнетизъм, магнетостатика, RLC вериги, електромагнитна индукция, проводници, полупроводници, движение на заряди и още!',
  thermodynamics:
    'Темите по термодинамика включват идеални газове, ентропия, цикли, КПД, молекулно-кинетична теория, повърхностно напрежение, фазови преходи, излъчване, атмосфера и още!',
  plat: 'Темите по модерна физика включват релативистика, геометрична оптика, вълни, интерференция, дифракция, квантова механика, ядрена физика, физика на кондензираната материя и още!',
  adv: 'Темите по астрономия включват геометрия и време, небесна сфера, небесна механика, оптика, частици и полета, закони за излъчване, галактики, космология и още!',
};
export const SECTION_SEO_TITLES: { [key in SectionID]: string } = {
  general: 'Обща информация',
  mechanics: 'Теми по механика',
  electromagnetism: 'Теми по електромагнетизъм',
  thermodynamics: 'Теми по термодинамика',
  plat: 'Теми по модерна физика',
  adv: 'Теми по астрономия',
};

const moduleIDToSectionMap: { [key: string]: SectionID } = {};

SECTIONS.forEach(section => {
  MODULE_ORDERING[section].forEach(category => {
    category.items.forEach(moduleID => {
      moduleIDToSectionMap[moduleID] = section;
    });
  });
});

export { moduleIDToSectionMap };
export { moduleIDToURLMap };

const moduleIDToURLMap: { [key: string]: string } = {};

SECTIONS.forEach(section => {
  MODULE_ORDERING[section].forEach(category => {
    category.items.forEach(moduleID => {
      moduleIDToURLMap[moduleID] = `/${section}/${moduleID}`;
    });
  });
});
