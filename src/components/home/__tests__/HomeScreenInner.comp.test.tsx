import { render } from '@testing-library/react-native';
import { HomeScreenInner } from '../HomeScreenInner';

describe('HomeScreenInner component', () => {
  it('should display loading state on mount', () => {
    const { getByText } = render(<HomeScreenInner />);

    expect(getByText('Loading...')).toBeTruthy();
  });
});
