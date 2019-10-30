declare const Vue: any;

interface Game {
    title: string;
    author: string;
    releaseDate: Date;
    imageUrl: string;
}

interface GameListResponse extends Array<Game> { };

interface Component {
    selector: string;
    element: Element | null;

    load(): void;
};

abstract class BaseComponent implements Component {
    selector: string;
    element: Element;

    constructor(selector: string) {
        this.selector = selector;

        const element = document.querySelector(this.selector);
        if (element == null) {
            throw new Error(`Element ${this.selector} could not be found`);
        }

        this.element = element;
    };

    init() {
        const element = document.querySelector(this.selector);
        if (element == null) {
            throw new Error(`Element ${this.selector} could not be found`);
        }

        this.element = element;
    }

    abstract load(): void;
};

class Title extends BaseComponent {
    constructor() {
        super("#title");
    }

    async load(): Promise<void> {
        const response = await fetch("http://127.0.0.1:8080/hello");

        if (response.ok) {
            this.element.textContent = await response.text();
        }
    }
};

class List extends BaseComponent {
    constructor() {
        super("#list");
    }

    async load(url?: string): Promise<void> {
        const response = await fetch(url || "http://127.0.0.1:8080/video-games");
        if (response.ok) {
            this.element.innerHTML = "";

            const games = (await response.json()) as GameListResponse;

            games.forEach(game => {
                game.releaseDate = new Date(game.releaseDate);

                const tpl = `
                    <div class="mdl-card mdl-shadow--2dp">
                        <div class="mdl-card__title" style="background-image:url('${game.imageUrl}')">
                        </div>
                        <div class="mdl-card__supporting-text">
                            <div class="mdl-typography--title">${game.title} (${game.releaseDate.toLocaleDateString()}) - ${game.author}</div>
                        </div>
                    </div>`
                const li = document.createElement('div');
                li.setAttribute("class", "mdl-cell mdl-cell--3-col");
                li.innerHTML = tpl;

                this.element.appendChild(li);
            });
        }
    }
};

class Form {
    selector: string = "#search-form"
    element: HTMLFormElement;

    constructor() {
        const element = document.querySelector(this.selector) as HTMLFormElement;
        if (!element) {
            throw new Error("Cannot find element" + this.selector);
        }
        this.element = element;

        this.element.onsubmit = (event: Event) => {
            event.preventDefault();
            event.stopPropagation();

            const searchValue = (this.element.querySelector("input") as HTMLInputElement).value;
            list.load(searchValue ? `http://127.0.0.1:8080/video-games?author=${searchValue}` : "http://127.0.0.1:8080/video-games");
        };
    }
};

new Title().load();
const form = new Form();
const list = new List();
list.load();