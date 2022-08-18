import { render } from '@testing-library/react-native';
import { HomeScreen } from '../HomeScreen';
import { CommonProvidersForTests } from '../../../../jest/CommonProvidersForTests';

describe('HomeScreen component', () => {
  it('should display heading on mount', () => {
    const { getByText } = render(<HomeScreen />, {
      wrapper: CommonProvidersForTests,
    });

    expect(getByText('Books collection')).toBeTruthy();
  });
});
