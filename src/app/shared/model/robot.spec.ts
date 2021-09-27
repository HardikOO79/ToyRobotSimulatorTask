import { Robot } from "./robot.model";
import { TableArea } from "./table-area.model";


describe('Robot', () => {
  it('should create an instance', () => {
    expect(new Robot(new TableArea(0, 0))).toBeTruthy();
  });
});
