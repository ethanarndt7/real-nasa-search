import { html, fixture, expect } from '@open-wc/testing';
import "../real-nasa-search.js";

describe("realNasaSearch test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <real-nasa-search
        title="title"
      ></real-nasa-search>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
