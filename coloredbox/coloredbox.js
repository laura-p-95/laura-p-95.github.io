(function () {
	//The following code creates a template HTML element:
	let template = document.createElement("template");
	template.innerHTML = `
		<style>
		:host {
			border-radius: 25px;
			border-width: 4px;
			border-color: black;
			border-style: solid;
			display: block;
		} 
		</style> 
	`;
	//a template for the “shadow DOM” HTML element that represents the HTML DOM of the Colored Box, which exists separately from the HTML DOM of the web page.
	//It is inserted only during rendering into the HTML DOM of the web page.Thus, you can, for example, apply styles to a shadow DOM element without interfering
	//with the HTML DOM of the web page.


	//The Web Component JavaScript defines a new custom element com-sap-sample-coloredbox and associates it with a JavaScript API.
	// The JavaScript API of the custom element is defined by the ColoredBox class, which extends the HTMLElement class
	class ColoredBox extends HTMLElement { 
		
		constructor() {
			super();//The super() function is used to give access to methods and properties of a parent or sibling class.
			let shadowRoot = this.attachShadow({ mode: "open" });//the shadow DOM root element is created.
			shadowRoot.appendChild(template.content.cloneNode(true));// a copy of the template element is added as a child element to the shadow DOM root element. 
			this.addEventListener("click", event => {
				//an event listener is attached to the custom element, listening for click events. 
				//If one such event occurs, its handler function creates a new onClick event and dispatches(“fires”) it. 
				var event = new Event("onClick");//"onClick" is the same name as it is defined in the events section of the custom widget JSON
				this.dispatchEvent(event);
			});
			this._props = {}; //to make managing the properties of the Web Component easier, an empty _props object is initialized.
		}


		//The Colored Box handles updates of its two properties color and opacity, defined in the properties array of the custom widget JSON, 
		//by implementing the onCustomWidgetBeforeUpdate and onCustomWidgetAfterUpdate functions.
		onCustomWidgetBeforeUpdate(changedProperties) {
			this._props = { ...this._props, ...changedProperties };
			//In the onCustomWidgetBeforeUpdate function, the properties in the passed changedProperties object are merged with the properties 
			//of the _props object.Thus, _props contains the state of all Colored Box properties before the Colored Box is updated.
		}

		//In the onCustomWidgetAfterUpdate function, the properties in the passed changedProperties object is used to directly set the color and 
		//opacity CSS styles of the Colored Box.
		onCustomWidgetAfterUpdate(changedProperties) {
			if ("color" in changedProperties) {
				this.style["background-color"] = changedProperties["color"];
			}
			if ("opacity" in changedProperties) {
				this.style["opacity"] = changedProperties["opacity"];
			}
		}
	}

	customElements.define("com-sap-sample-coloredbox", ColoredBox);
	//"com-sap-sample-coloredbox" same name as the property value of property name tag of the first item in the webcomponents array inside the custom widget JSON.
})();