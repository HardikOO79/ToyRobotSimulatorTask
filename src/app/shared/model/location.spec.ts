import { Location } from "./location.model";


describe('Location', () => {
  it('should create an instance', () => {
    expect(new Location(0, 0, 1)).toBeTruthy();
  });
});
