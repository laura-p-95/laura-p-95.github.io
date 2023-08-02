(function () {
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
	/* Style for the container */
	div {
		margin: 50px auto;
		max-width: 600px;
	}
  
	/* Style for the input container */
	.input-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}
  
	/* Style for the input field */
	#prompt-input {
		padding: 10px;
		font-size: 16px;
		border: 1px solid #ccc;
		border-radius: 5px;
		width: 70%;
	}
  
	/* Style for the button */
	#generate-button {
		padding: 10px;
		font-size: 16px;
		background-color: #3cb6a9;
		color: #fff;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		width: 25%;
	}
  
	/* Style for the generated text area */
	#generated-text {
		padding: 10px;
		font-size: 16px;
		border: 1px solid #ccc;
		border-radius: 5px;
		width:96%;
	}
	</style> 
	<div>
		<center>
			<img src="https://laura-p-95.github.io/coloredbox/sdg_icon.png" width="20"/>
			<h1>MealGenerator</h1>
		</center>
		<div class="input-container">
			<input type="text" id="prompt-input" placeholder="Enter an ingredient">
			<button id="generate-button">Generate Recipe</button>
		</div>
		<textarea id="generated-text" rows="10" cols="50" readonly></ textarea>
	</div>

	`;
	
	class ColoredBox extends HTMLElement { 
		
		constructor() {
			super();
			let shadowRoot = this.attachShadow({ mode: "open" });
			shadowRoot.appendChild(template.content.cloneNode(true));
			this.addEventListener("click", event => {
				
				var event = new Event("onClick");
				this.dispatchEvent(event);
			});
			this._props = {}; 
		}

		onCustomWidgetBeforeUpdate(changedProperties) {
			this._props = { ...this._props, ...changedProperties };
			
		}

		
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

	
})();