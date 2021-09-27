import { Location } from "./location.model";
import { PlaceAction } from "./place-action.model";


describe('PlaceAction', () => {
  it('should create an instance', () => {
    expect(new PlaceAction(new Location(0, 0, 1))).toBeTruthy();
  });
});
