class SummaryItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.#render();
  }

  #render() {
    const wrapper = this.#createWrapper();

    this.replaceChildren(wrapper);
  }

  #createWrapper() {
    const wrapper = document.createElement("div");
    wrapper.classList.add(
      ...`flex rounded-[12px] px-[1rem] py-[1.125rem] [background:_linear-gradient(to_top,_rgba(255,_255,_255,_0.95)_0%,_rgba(255,_255,_255,_0.95)_100%)]`.split(
        " ",
      ),
    );

    const label = this.#createLabel();
    const numbers = this.#createNumbers();

    wrapper.append(label, numbers);
    return wrapper;
  }

  #createLabel() {
    const label = document.createElement("label");
    label.classList.add(..."flex flex-auto items-center".split(" "));

    const icon = this.#getIcon();
    const labelText = this.#createLabelText();

    label.append(icon, labelText);
    return label;
  }

  #getIcon() {
    const svgId = this.dataset.svgId ?? "";

    const template = document.getElementById(svgId);

    if (template instanceof HTMLTemplateElement) {
      return template.content.cloneNode(true);
    }

    return "";
  }

  #createLabelText() {
    const labelText = document.createElement("span");
    labelText.classList.add(..."ml-[.75rem] font-medium not-italic".split(" "));

    const text = this.dataset.text ?? "";
    const textNode = document.createTextNode(text);

    labelText.appendChild(textNode);
    return labelText;
  }

  #createNumbers() {
    const container = document.createElement("div");
    container.classList.add(
      ..."text-title/50 flex items-center space-x-[.5rem] font-bold not-italic".split(
        " ",
      ),
    );

    const output = this.#createOutput();
    const per = this.#createNumbersPer();
    const total = this.#createTotal();

    container.append(output, per, total);
    return container;
  }

  #createOutput() {
    const output = document.createElement("output");
    output.classList.add("text-title");

    const outputData = this.dataset.progress ?? "";
    const outputText = document.createTextNode(outputData);

    output.appendChild(outputText);
    return output;
  }

  #createNumbersPer() {
    const per = document.createElement("span");

    const perText = document.createTextNode("/");

    per.appendChild(perText);
    return per;
  }

  #createTotal() {
    const total = document.createElement("b");

    const totalText = document.createTextNode("100");

    total.appendChild(totalText);
    return total;
  }
}

export default SummaryItem;
