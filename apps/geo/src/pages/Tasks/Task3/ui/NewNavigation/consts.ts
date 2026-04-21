import type { NavItem } from './types';

// чтобы элемент навигации корректно рендерился, нужно добавить соответствующие страницы (замокать)
// и добавить их в роутере
export const items: NavItem[] = [
  {
    label: 'Справочники',
    children: [
      { label: 'Станции', to: { name: 'station' } },
      { label: 'Компании', to: { name: 'companies' } },
      { label: 'Грузы', to: { name: 'cargo' } },
      {
        label: 'Правила погрузки',
        children: [
          { label: '№1 ст. Экспорт', to: { name: 'load-rule', params: { id: '1' } } },
          { label: '№2 ст. Внутренние', to: { name: 'load-rule', params: { id: '2' } } },
          { label: '№3 ст. Припорт.', to: { name: 'load-rule', params: { id: '3' } } },
        ],
      },
    ],
  },
  {
    label: 'Администрирование',
    children: [
      { label: 'Пользователи', to: { name: 'users' } },
      { label: 'Журнал аудита', to: { name: 'audit' } },
    ],
  },
];
