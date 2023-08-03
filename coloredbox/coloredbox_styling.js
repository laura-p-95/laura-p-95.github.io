
(function () {
	
	let template = document.createElement("template");
	
	template.innerHTML = `
		<form id="form">
			<fieldset>
				<legend>Colored Box Properties</legend>
				<table>
					
					<tr>
						<td>Color</td>
						<td><input id="styling_color" type="text" size="30" maxlength="30"></td>
					</tr>
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
	`;
	class ColoredBoxStylingPanel extends HTMLElement {
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
						color: this.color,
						apiKey: this.apiKey,
						max_tokens: this.max_tokens
					}
				}
			}));
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

	customElements.define("com-sap-sample-coloredbox-styling", ColoredBoxStylingPanel);
})();