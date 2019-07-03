import { } from "jquery";

class Main {
    public show(text: string): void {
        const $ele: JQuery = $("h4");
        const dt = new Date();

        const time = `${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`;
        $ele.text(`${text} #${time}`);
    }
}

$(document).ready(() => {
    const m = new Main();
    m.show("hello,typescript!");
});
