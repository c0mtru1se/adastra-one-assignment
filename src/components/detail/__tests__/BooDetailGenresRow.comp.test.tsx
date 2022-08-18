import { render } from '@testing-library/react-native';
import { CommonProvidersForTests } from '../../../../jest/CommonProvidersForTests';
import { BookDetailGenresRow } from '../BookDetailGenresRow';

describe('BookDetailGenresRow', () => {
  it('should render one badge given a book with one genre', () => {
    const { getByText, getAllByA11yHint } = render(
      <BookDetailGenresRow genres="Genre1" />,
      {
        wrapper: CommonProvidersForTests,
      }
    );

    expect(getAllByA11yHint('Book genre badge').length).toBe(1);
    expect(getByText('Genre1')).toBeTruthy();
  });

  it('should render multiple badges given a book with multiple genre', () => {
    const { getByText, getAllByA11yHint } = render(
      <BookDetailGenresRow genres={['Genre1', 'Genre2', 'Genre3']} />,
      {
        wrapper: CommonProvidersForTests,
      }
    );

    expect(getAllByA11yHint('Book genre badge').length).toBe(3);
    expect(getByText('Genre1')).toBeTruthy();
    expect(getByText('Genre2')).toBeTruthy();
    expect(getByText('Genre3')).toBeTruthy();
  });
});
