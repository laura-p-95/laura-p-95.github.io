//This Styling Panel lets you change the color of the Colored Box in analytics designer.
//The following code creates a template HTML element:
//This template element defines a simple form with id "form".
	//It contains a table with an input field with id "styling_color" and a length and capacity of 40 characters.
(function () {
	
	let template = document.createElement("template");
	
	template.innerHTML = `
		<form id="form">
			<fieldset>
				<legend>Colored Box Properties</legend>
				<table>
					<tr>
						<td>Color</td>
						<td><input id="styling_color" type="text" size="40" maxlength="40"></td>
					</tr>
				</table>
				<input type="submit" style="display:none;">
			</fieldset>
		</form>
	`;

	class ColoredBoxStylingPanel extends HTMLElement {
		constructor() {
			super();

			this._shadowRoot = this.attachShadow({ mode: "open" });//the shadow DOM root element is created. A reference to it is stored
			//in the local variable _shadowRoot, because the shadow DOM root element is referenced later in the color setter and getter functions of this class. 

			this._shadowRoot.appendChild(template.content.cloneNode(true));//a copy of the template element is added as a child element to the shadow DOM root element. 

			this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));//an event listener is attached to form, 
			//listening for submit events.If one such event occurs, the event handler function _submit() is called. 
		}

		_submit(e) {
			e.preventDefault(); //The _submit() function calls function preventDefault() on the passed event object, which prevents submitting the form to the server.
			this.dispatchEvent(new CustomEvent("propertiesChanged", { //a custom event is created. Its name "propertiesChanged" indicates a change of properties to the Custom Widget framework 
				detail: {
					properties: {
						color: this.color
					}
					//This custom event contains a JSON payload, which defines which properties actually have changed and to what values.
					//In this case it is the color property of the custom widget.Its new value is retrieved by executing this.color, 
					//which implicitly calls the color getter function of class ColoredBoxStylingPanel.
				}
			}));
		}

		//The color setter function places a text representation of the new color into the input field of the Colored Box’s Styling Panel. 
		//Incidentally, in this JavaScript code this function is not called directly, but by the Custom Widget framework 
		//when the Styling Panel Sheet of the Colored Box is created, assigning an initial value to the input field.
		set color(newColor) {
			this._shadowRoot.getElementById("styling_color").value = newColor;
		}


		//The color getter function returns the text of the input field of the Colored Box’s Styling Panel. 
		//This function is called indirectly in the _submit() event handler function during the construction 
		//of the JSON event payload when the current color is retrieved by this.color.
		get color() {
			return this._shadowRoot.getElementById("styling_color").value;
		}
	}

	customElements.define("com-sap-sample-coloredbox-styling", ColoredBoxStylingPanel);