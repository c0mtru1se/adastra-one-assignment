import { render } from '@testing-library/react-native';
import testBook from '../../../../models/__fixtures__/singleBook.json';
import { BookCarousel } from '../BookCarousel';
import { CommonProvidersForTests } from '../../../../../jest/CommonProvidersForTests';

describe('BookCarousel', () => {
  it('should display correct book item with a single book payload', () => {
    const { getByText, getByA11yHint } = render(
      <BookCarousel data={[testBook]} />,
      {
        wrapper: CommonProvidersForTests,
      }
    );

    expect(getByText('March Hare. Alice.')).toBeTruthy();
    expect(getByA11yHint('Cover for: March Hare. Alice.')).toBeTruthy();
  });
});
