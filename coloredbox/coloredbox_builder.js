//This Builder Panel lets you change the opacity of the Colored Box in analytics designer.
(function () {
	let template = document.createElement("template");
	//This template HTML element is a template for the shadow DOM HTML element that represents the HTML DOM of the Styling Panel of the Colored Box.

	//This template element defines a simple form with id "form".
	//It contains a table with an input field with id "builder_opacity" and a length and capacity of 5 characters.
	template.innerHTML = `
		<form id="form">
			<fieldset>
				<legend>Colored Box Properties</legend>
				<table>
					<tr>
						<td>Opacity</td>
						<td><input id="builder_opacity" type="text" size="5" maxlength="5"></td>
					</tr>
				</table>
				<input type="submit" style="display:none;">
			</fieldset>
		</form>
		<style>
		:host {
			display: block;
			padding: 1em 1em 1em 1em;
		}
		</style>
	`;

	class ColoredBoxBuilderPanel extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({ mode: "open" });
			//Then, the shadow DOM root element is created. 
			//A reference to it is stored in the local variable _shadowRoot, 
			//because the shadow DOM root element is referenced later in the color setter and getter functions of this class. 

			this._shadowRoot.appendChild(template.content.cloneNode(true)); //a copy of the template element is added as a child element to the shadow DOM root element.
			
			this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));
			//an event listener is attached to form, listening for submit events. If one such event occurs, the event handler function _submit() is called.
		}

		_submit(e) {
			e.preventDefault(); //The _submit() function calls function preventDefault() on the passed event object, which prevents submitting the form to the server.
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
				detail: {
					properties: {
						opacity: this.opacity
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
	}

	customElements.define("com-sap-sample-coloredbox-builder", ColoredBoxBuilderPanel);
})();