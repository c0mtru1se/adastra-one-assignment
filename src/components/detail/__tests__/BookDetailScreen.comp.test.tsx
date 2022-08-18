import { render } from '@testing-library/react-native';
import { BookDetailScreen } from '../BookDetailScreen';
import singleBook from '../../../models/__fixtures__/singleBook.json';
import { CommonProvidersForTests } from '../../../../jest/CommonProvidersForTests';

describe('BookDetailScreen', () => {
  it('should display correct book data', () => {
    const { getByText, getByA11yHint } = render(
      <BookDetailScreen
        route={{ params: singleBook } as any}
        navigation={{} as any}
      />,
      {
        wrapper: CommonProvidersForTests,
      }
    );

    expect(getByA11yHint('Cover for: March Hare. Alice.')).toBeTruthy();
    expect(getByText('March Hare. Alice.')).toBeTruthy();
    expect(getByText('Rashad Christiansen')).toBeTruthy();
    expect(
      getByText(
        "Geography. London is the reason they're called lessons,' the Gryphon went on, 'and most of 'em do.' 'I don't know of any use, now,' thought poor Alice, 'when one wasn't always growing larger and."
      )
    ).toBeTruthy();
    expect(getByText('Non')).toBeTruthy();
  });
});
