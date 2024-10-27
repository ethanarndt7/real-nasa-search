import { LitElement, html, css } from "lit";
import { NasaSearch } from "./nasa-search";

export class NasaImage extends LitElement {

  constructor() {
    super();
    this.title = '';
    this.source = '';
    this.link = '';
    this.atlText = '';
  }

  static get properties() {
    return {
        source: { type: String },
        title: { type: String },
        link: {type: String},
        altText: {type: String}
    };
  }

  static get styles() {
    return [css`
    

    .image {
    display: inline-block;
    width: 240px;
    height: 240px;
    }

    .image div {
    max-width: 200px;
    font-size: 16px;
    font-weight: bold;
    }

    .image img {
    display: block;
    width: 200px;
    height: 200px;
    }

    `];
  }

  render() {
    return html`
    <div class="image">
        <a href="${this.link}" target="blank">
        <img src="${this.source}" alt="${this.altText}"/>
        <div>${this.title}</div>
    </div>
    `;
  }
  static get tag() {
    return "nasa-image";
  }
}
customElements.define(NasaImage.tag, NasaImage);