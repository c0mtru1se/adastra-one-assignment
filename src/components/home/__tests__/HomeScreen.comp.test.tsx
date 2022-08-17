import { render } from '@testing-library/react-native';
import { HomeScreen } from '../HomeScreen';

describe('HomeScreen component', () => {
  it('should display heading on mount', () => {
    const { getByText } = render(<HomeScreen />);

    expect(getByText('Books collection')).toBeTruthy();
  });
});
