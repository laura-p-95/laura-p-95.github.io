(function () {
	let template = document.createElement("template");
	template.innerHTML = `


	<style>
        :host {}
  
  /* Style for the container */
  div {
    margin: 50px auto;
    max-width: 400px;
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
    font-size: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 70%;
  }
  
  /* Style for the button */
  #generate-button {
    padding: 10px;
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
		padding: 10px;
		font-size: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
	  width:96%;

	  /* Dropdown Button */
	.dropbtn {
	  background-color: #04AA6D;
	  color: white;
	  padding: 16px;
	  font-size: 16px;
	  border: none;
	  cursor: pointer;
	}

	/* Dropdown button on hover & focus */
	.dropbtn:hover, .dropbtn:focus {
	  background-color: #3e8e41;
	}

	/* The search field */
	#myInput {
	  box-sizing: border-box;
	  background-image: url('searchicon.png');
	  background-position: 14px 12px;
	  background-repeat: no-repeat;
	  font-size: 16px;
	  padding: 14px 20px 12px 45px;
	  border: none;
	  border-bottom: 1px solid #ddd;
	}

	/* The search field when it gets focus/clicked on */
	#myInput:focus {outline: 3px solid #ddd;}

	/* The container <div> - needed to position the dropdown content */
	.dropdown {
	  position: relative;
	  display: inline-block;
	}

	/* Dropdown Content (Hidden by Default) */
	.dropdown-content {
	  display: none;
	  position: absolute;
	  background-color: #f6f6f6;
	  min-width: 230px;
	  border: 1px solid #ddd;
	  z-index: 1;
	}

	/* Links inside the dropdown */
	.dropdown-content a {
	  color: black;
	  padding: 12px 16px;
	  text-decoration: none;
	  display: block;
	}

	/* Change color of dropdown links on hover */
	.dropdown-content a:hover {background-color: #f1f1f1}

	/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
	.show {display:block;}
  }
      </style>
	<div>
		<center>
			<img src="https://laura-p-95.github.io/20230803_chatGPTMealGenerator/sdg_icon.png" width="100"/>
			<h1> MealGenerator</h1>
		</center>
		<h3>Write an Ingredient</h3>
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
				const promptInput =  this.shadowRoot.getElementById("prompt-input");
				const generatedText = this.shadowRoot.getElementById("generated-text");
				generatedText.value = "Finding result...";
				const prompt = "Write a recipe that uses the following ingredients: " + promptInput.value;
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