import { render } from '@testing-library/react-native';
import { HomeScreenInner } from '../HomeScreenInner';

describe('HomeScreenInner component', () => {
  it('should display loading state on mount', () => {
    const { getAllByA11yHint } = render(<HomeScreenInner />);

    expect(getAllByA11yHint('Loading box')[0]).toBeTruthy();
    expect(getAllByA11yHint('Loading box').length).toBe(3);
  });
});
