export default class Section {
    constructor ({items, renderer}, classSelector) {
        this._items = items;
        this._renderer = renderer;
        this._classSelector = classSelector;
    }

    renderItems() {
        this._items.forEach((item) => {
            this.renderer(item)
        })
    }

    addItem(element) {
        this._classSelector.append(element);
    }
}