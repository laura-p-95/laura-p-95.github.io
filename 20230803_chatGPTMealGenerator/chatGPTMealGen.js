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
		margin: 5px auto;
		max-width: 200px;
	}
  
	/* Style for the input container */
	.input-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 5px;
	}
  
	/* Style for the input field */
	#prompt-input {
		padding: 5px;
		font-size: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
		width: 70%;
	}
  
	/* Style for the button */
	#generate-button {
		padding: 5px;
		font-size: 10px;
		background-color: #3cb6a9;
		color: #fff;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		width: 25%;
	}
  
	/* Style for the generated text area */
	#generated-text {
		padding: 5px;
		font-size: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
		width:96%;
	}
	</style> 
	<div>
		<center>
			<img src="https://laura-p-95.github.io/20230803_chatGPTMealGenerator/sdg_icon.png" width="100"/>
			<h1> MealGenerator</h1>
		</center>
		<div class="input-container">
			<input type="text" id="prompt-input" placeholder="Enter an ingredient">
			<button id="generate-button">Generate Recipe</button>
		</div>
		<textarea id="generated-text" rows="10" cols="50" readonly></ textarea>
	</div>

	`;
	
	class ChatGPT extends HTMLElement { 
		
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

	

		// sounds important
		_updateData(dataBinding) {
			console.log('dataBinding:', dataBinding);
			if (!dataBinding) {
				console.error('dataBinding is undefined');
			}
			if (!dataBinding || !dataBinding.data) {
				console.error('dataBinding.data is undefined');
			}

			if (this._ready) {
				// Check if dataBinding and dataBinding.data are defined
				if (dataBinding && Array.isArray(dataBinding.data)) {
					// Transform the data into the correct format
					const transformedData = dataBinding.data.map(row => {
						console.log('row:', row);
						// Check if dimensions_0 and measures_0 are defined before trying to access their properties
						if (row.dimensions_0 && row.measures_0) {
							return {
								dimension: row.dimensions_0.label,
								measure: row.measures_0.raw
							};
						}
					}).filter(Boolean);  // Filter out any undefined values

					this._renderChart(transformedData);
				} else {
					console.error('Data is not an array:', dataBinding && dataBinding.data);
				}
			}
		}

		async connectedCallback() {
			this.initMain();
		}
		async initMain() {
			const generatedText = this.shadowRoot.getElementById("generated-text");
			generatedText.value = "";
			const {apiKey} = this._props || "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";
			const {max_tokens} = this._props || 1024;
			const generateButton = this.shadowRoot.getElementById("generate-button");
			generateButton.addEventListener("click", async () => {
				const promptInput = this.shadowRoot.getElementById("prompt-input");
				const generatedText = this.shadowRoot.getElementById("generated-text");
				generatedText.value = "Finding result...";
				const prompt = promptInput.value;
				const response = await fetch("https://api.openai.com/v1/completions", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + apiKey
					},
					body: JSON.stringify({
						"model": "text-davinci-002",
						"prompt": prompt,
						"max_tokens": parseInt(max_tokens),
						"n": 1,
						"temperature": 0.5
					})
				});

				if (response.status === 200) {
					const {
						choices
					} = await response.json();
					const generatedTextValue = choices[0].text;
					generatedText.value = generatedTextValue.replace(/^\n+/, '');
				} else {
					const error = await response.json();
					alert("OpenAI Response: " + error.error.message);
					generatedText.value = "";
				}
			});
		}

		onCustomWidgetBeforeUpdate(changedProperties) {
			this._props = { ...this._props, ...changedProperties };
			
		}

		
		onCustomWidgetAfterUpdate(changedProperties) {
			if ("myDataBinding" in changedProperties) {
				this._updateData(changedProperties.myDataBinding);
			}

			this.initMain();
			
			if ("color" in changedProperties) {
				this.style["background-color"] = changedProperties["color"];
			}


		}


	}

	customElements.define("chat-gpt-meal-generator-js", ChatGPT);

	
})();