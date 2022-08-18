/* eslint-env jest */
import { fireEvent, render } from '@testing-library/react-native';
import testBook from '../../../../models/__fixtures__/singleBook.json';
import { BookCarouselItem } from '../BookCarouselItem';
import { CommonProvidersForTests } from '../../../../../jest/CommonProvidersForTests';

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');

  return {
    ...actualNav,
    useNavigation: () => ({ navigate: mockNavigate }),
  };
});

const renderCarouselItem = () =>
  render(<BookCarouselItem item={testBook} />, {
    wrapper: CommonProvidersForTests,
  });

describe('MovieItem', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should display correct title of a given book', () => {
    const { getByText } = renderCarouselItem();

    expect(getByText('March Hare. Alice.')).toBeTruthy();
  });

  it('should navigate to BookDetail screen on item press', () => {
    const { getByText } = renderCarouselItem();

    fireEvent.press(getByText('March Hare. Alice.'));

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('BookDetail', testBook);
  });
});
