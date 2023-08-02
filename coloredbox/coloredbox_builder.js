(function () {
	let template = document.createElement("template");

	template.innerHTML = `
	
		
    #form {
        font-family: Arial, sans-serif;
        width: 400px;
        margin: 0 auto;
    }

    a {
        text-decoration: none;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 10px;
    }

    td {
        padding: 1px;
        text-align: left;
        font-size: 13px;
    }

    input {
        width: 100%;
        padding: 10px;
        border: 2px solid #ccc;
        border-radius: 5px;
        font-size: 13px;
        box-sizing: border-box;
        margin-bottom: 10px;
    }


    input[type="color"] {
	-webkit-appearance: none;
	border: none;
	width: 32px;
	height: 32px;
}
input[type="color"]::-webkit-color-swatch-wrapper {
	padding: 0;
}
input[type="color"]::-webkit-color-swatch {
	border: none;
}


    select {
        width: 100%;
        padding: 10px;
        border: 2px solid #ccc;
        border-radius: 5px;
        font-size: 13px;
        box-sizing: border-box;
        margin-bottom: 10px;
    }

    input[type="submit"] {
        background-color: #487cac;
        color: white;
        padding: 10px;
        border: none;
        border-radius: 5px;
        font-size: 14px;
        cursor: pointer;
        width: 100%;
    }

    #label {
        width: 140px;
    }
</style>
<form id="form">
			<fieldset>
				<legend>Colored Box Properties</legend>
				<table>
					<tr>
						<td>Opacity</td>
						<td><input id="builder_opacity" type="text" size="5" maxlength="5"></td>
					</tr>
					<tr>
						<td>Color</td>
						<td><input id="styling_color" type="text" size="40" maxlength="40"></td>
					</tr>
				</table>
				</fieldset>
				<br><br><br>
				<fieldset>
				<legend>OpenAI Properties</legend>
				<table>
					<tr>
						<td>Api Key of ChatGPT</td>
						<td><input id="builder_apiKey" type="text" placeholder="Enter Api Key of ChatGPT"></td>
					</tr>
					<tr>
						<td>Result Max Length</td>
						<td><input id="builder_max_tokens" type="number" placeholder="Enter Result Max Length"></td>
					</tr>
				</table>
				<input type="submit" style="display:none;">
			</fieldset>
		</form>

		<br>
	`;

	class ColoredBoxBuilderPanel extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({ mode: "open" });
			

			this._shadowRoot.appendChild(template.content.cloneNode(true)); 
			
			this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));
		}

		_submit(e) {
			e.preventDefault(); 
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
				detail: {
					properties: {
						opacity: this.opacity,
						color: this.color,
						apiKey: this.apiKey,
						max_tokens: this.max_tokens
					}
				}
			}));
	}

		set opacity(newOpacity) {
			this._shadowRoot.getElementById("builder_opacity").value = newOpacity;
		}

		get opacity() {
			return this._shadowRoot.getElementById("builder_opacity").value;
		}


		set color(newColor) {
			this._shadowRoot.getElementById("styling_color").value = newColor;
		}

		get color() {
			return this._shadowRoot.getElementById("styling_color").value;
		}

		set apiKey(_apiKey) {
			this._shadowRoot.getElementById("builder_apiKey").value = _apiKey;
		}
		get apiKey() {
			return this._shadowRoot.getElementById("builder_apiKey").value;
		}

		set max_tokens(_max_tokens) {
			this._shadowRoot.getElementById("builder_max_tokens").value = _max_tokens;
		}
		get max_tokens() {
			return this._shadowRoot.getElementById("builder_max_tokens").value;
		}
	}

	customElements.define("com-sap-sample-coloredbox-builder", ColoredBoxBuilderPanel);
})();