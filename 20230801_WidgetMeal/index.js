(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `

    <head>
        <title>Recipe Suggestion App</title>
    </head>
    <body>
        <h1>Recipe Suggestion App</h1>
        <form>
            <label for="ingredients">Enter Ingredients:</label>
            <input type="text" id="ingredients" name="ingredients" required>
            <button type="button" onclick="generateRecipe()">Generate Recipe</button>
        </form>
        <div id="recipeOutput"></div>

        <script src="app.js"></script>
    </body>

`;
class MealHelper extends HTMLElement {
    constructor() {
        super();
        this.init();
    }

    init() {

        let shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
        this.addEventListener("click", event => {
            var event = new Event("onClick");
            this.fireChanged();
            this.dispatchEvent(event);
        });
    }

    fireChanged() {
        console.log("OnClick Triggered");

    }
}
customElements.define('custom-button', PerformanceHelp);
}) ();