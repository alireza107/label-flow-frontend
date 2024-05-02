import { render } from '@testing-library/react';

import { Tabs } from './tabs';

const tabs = [
  {
    label: 'Tab 1',
    content: 'Tab 1 content',
  },
  {
    label: 'Tab 2',
    content: 'Tab 2 content',
  },
  {
    label: 'Tab 3',
    content: 'Tab 3 content',
  },
];

describe('Tabs', () => {
  test('render a simple tab component', () => {
    const { container } = render(<Tabs tabs={tabs} />);
    expect(container.querySelector('.tabs')).toBeInTheDocument();
  });

  test('render tab labels', () => {
    const { container } = render(<Tabs tabs={tabs} />);
    expect(container.querySelectorAll('.tab-label')).toHaveLength(3);
  });

  test('render tab content', () => {
    const { container } = render(<Tabs tabs={tabs} />);
    expect(container.querySelectorAll('.tab-content')).toHaveLength(3);
  });

  test('render tab content with correct text', () => {
    const { container } = render(<Tabs tabs={tabs} />);
    expect(container.querySelector('.tab-content')?.textContent).toBe('Tab 1 content');
  });

  test('change tab content when clicking on tab label', () => {
    const { container } = render(<Tabs tabs={tabs} />);
    const tabLabel = container.querySelector('.tab-label:first-of-type') as HTMLElement;
    tabLabel.click();
    expect(container.querySelector('.tab-content')?.textContent).toBe('Tab 1 content');
  });
});
