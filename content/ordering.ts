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
      description: "Start here if you're new to competitive programming.",
      items: [
        'using-this-guide',
        'intro-cp',
        'choosing-lang',
        'resources-learning-to-code',
        'running-code-online',
        'data-types',
        'input-output',
        'expected-knowledge',
      ],
    },
    {
      name: 'Contributing',
      description: 'How you can add content to the guide.',
      items: ['contributing', 'adding-solution', 'modules', 'working-mdx'],
    },
    {
      name: 'Подготвителни планове',
      description: 'How you can add content to the guide.',
      items: ['contributing', 'adding-solution', 'modules', 'working-mdx'],
    },
    {
      name: 'Общи ресурси',
      description: 'Useful for competitors of all levels.',
      items: [
        'debugging-checklist',
        'practicing',
        'contest-strategy',
        'resources-cp',
        'contests',
        'olympiads',
      ],
    },
    {
      name: 'Математически апарат',
      description:
        'Setup instructions and discussion of language-specific features.',
      items: [
        'running-code-locally',
        'cpp-command',
        'fast-io',
        'basic-debugging',
        'debugging-cpp',
        'generic-code',
        'lambda-funcs',
      ],
    },
    {
      name: 'Експерименти',
      description:
        'Information specific to USACO as well as USA camps and contests.',
      items: ['usaco-faq', 'usaco-monthlies', 'usaco-camp', 'resources-usa'],
    },
  ],
  mechanics: [
    {
      name: 'Кинематика',
      items: ['time-comp', 'intro-ds', 'simulation', 'rect-geo'],
    },
    {
      name: 'Статика',
      items: ['intro-complete', 'complete-rec'],
    },
    {
      name: 'Динамика',
      items: ['intro-sorting', 'intro-sets'],
    },
    {
      name: 'Трептения',
      items: ['ad-hoc', 'intro-greedy', 'intro-graphs'],
    },
    {
      name: 'Въртене',
      description: 'Congratulations on making it this far!',
      items: ['mechanics-conclusion'],
    },
    {
      name: 'Гравитация',
      description: 'Congratulations on making it this far!',
      items: ['mechanics-conclusion'],
    },
    {
      name: 'Флуиди',
      description: 'Congratulations on making it this far!',
      items: ['mechanics-conclusion'],
    },
  ],
  electromagnetism: [
    {
      name: 'Prefix Sums',
      items: ['prefix-sums', 'more-prefix-sums'],
    },
    {
      name: 'Sorting & Searching',
      items: [
        'sorting-custom',
        'two-pointers',
        'intro-sorted-sets',
        'custom-cpp-stl',
        'greedy-sorting',
        'binary-search',
      ],
    },
    {
      name: 'Graphs',
      description:
        'Most Electromagnetism to Modern contests have at least one graph problem.',
      items: ['graph-traversal', 'flood-fill', 'func-graphs'],
    },
    {
      name: 'Additional Topics',
      items: ['intro-bitwise'],
    },
    {
      name: 'Conclusion',
      description: 'Congratulations on making it this far!',
      items: ['electromagnetism-conclusion'],
    },
  ],
  thermodynamics: [
    {
      name: 'Math',
      items: ['divisibility', 'modular', 'combo'],
    },
    {
      name: 'Dynamic Programming',
      description:
        'Most Thermodynamics and Modern contests have at least one DP problem.',
      items: [
        'intro-dp',
        'knapsack',
        'paths-grids',
        'lis',
        'dp-bitmasks',
        'dp-ranges',
        'digit-dp',
      ],
    },
    {
      name: 'Graphs',
      description:
        'Most Electromagnetism to Modern contests have at least one graph problem.',
      items: [
        'unweighted-shortest-paths',
        'dsu',
        'toposort',
        'shortest-paths',
        'mst',
      ],
    },
    {
      name: 'Data Structures',
      items: ['stacks', 'sliding-window', 'PURS'],
    },
    {
      name: 'Trees',
      items: ['tree-euler', 'dp-trees', 'all-roots'],
    },
    {
      name: 'Additional Topics',
      description: 'Rarely required.',
      items: ['string-hashing', 'hashmaps', 'meet-in-the-middle'],
    },
    {
      name: 'Conclusion',
      description: 'Congratulations on making it this far!',
      items: ['thermodynamics-conclusion'],
    },
  ],
  plat: [
    {
      name: 'Range Queries',
      items: [
        'segtree-ext',
        'range-sweep',
        'RURQ',
        'sparse-segtree',
        '2DRQ',
        'DC-SRQ',
        'sqrt',
      ],
    },
    {
      name: 'Trees',
      items: ['binary-jump', 'merging', 'hld', 'centroid'],
    },
    {
      name: 'Geometry',
      items: ['geo-pri', 'sweep-line', 'convex-hull', 'convex-hull-trick'],
    },
    {
      name: 'Misc. Topics',
      items: ['matrix-expo', 'bitsets', 'DC-DP'],
    },
    {
      name: 'Conclusion',
      items: ['plat-conclusion'],
    },
  ],
  adv: [
    {
      name: 'Геометрия и време',
      items: [
        'springboards',
        'wavelet',
        'count-min',
        'segtree-beats',
        'persistent',
        'treaps',
      ],
    },
    {
      name: 'Небесна сфера',
      items: ['line-container', 'lagrange', 'slope-trick'],
    },
    {
      name: 'Небесна механика',
      items: [
        'sp-neg',
        'eulerian-tours',
        'BCC-2CC',
        'SCC',
        'offline-del',
        'eulers-formula',
        'critical',
        'link-cut-tree',
      ],
    },
    {
      name: 'Оптика',
      items: ['comb-sub', 'dp-more', 'dp-sos'],
    },
    {
      name: 'Частици и полета',
      items: ['max-flow', 'min-cut', 'flow-lb', 'min-cost-flow'],
    },
    {
      name: 'Закони за излъчване',
      items: ['fft', 'fft-ext'],
    },
    {
      name: 'Галактики, космология',
      items: ['string-search', 'suffix-array', 'string-suffix'],
    },
    {
      name: 'Misc. Topics',
      items: [
        'extend-euclid',
        'xor-basis',
        'fracturing-search',
        'game-theory',
        'multiplicative',
        'matroid-isect',
        'interactive',
        'vectorization',
      ],
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
  electromagnetism: 'Електромагнетизъм',
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
