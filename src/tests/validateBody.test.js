// Utils
import { validateBody } from "../utils/validateBody";

describe("Validate Header and Trailer ", () => {
  // arrange
  let mockRowIdArray = [];

  // We should see a date converted to a timestamp
  it("Should throw error as each row with 200 should follow with at least one 300 row id", () => {
    mockRowIdArray = ["100", "200", "300", "200"];
    expect(() => validateBody(mockRowIdArray)).toThrow(
      "CSV Array, each 200 row id needs to follow at least one 300 row id!"
    );
  });
});
