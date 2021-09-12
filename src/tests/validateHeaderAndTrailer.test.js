// Utils
import { validateHeaderAndTrailer } from "../utils/validateHeaderAndTrailer";

describe("Validate Header and Trailer ", () => {
  // arrange
  let mockRowIdArray = [];

  // We should see a date converted to a timestamp
  it("Should throw no header error", () => {
    mockRowIdArray = ["300"];
    expect(() => validateHeaderAndTrailer(mockRowIdArray)).toThrow(
      "CSV Array has NO header!"
    );
  });

  it("Should throw duplicate header error", () => {
    mockRowIdArray = ["100", "100", "300", "900"];
    expect(() => validateHeaderAndTrailer(mockRowIdArray)).toThrow(
      "CSV Array has Duplicate header row!"
    );
  });

  it("Should throw wrong position error", () => {
    mockRowIdArray = ["100", "900", "300"];
    expect(() => validateHeaderAndTrailer(mockRowIdArray)).toThrow(
      "CSV Array should only use 100 as staring rowId, and 900 as ending row id."
    );
  });
});
