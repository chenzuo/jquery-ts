import {} from "jquery";

class Main {
    public show(text: string): void {
        const $ele: JQuery = $("h4");
        $ele.text(text);
    }
}

$(document).ready(() => {
    const m = new Main();
    m.show("hello,typescript!");
});
