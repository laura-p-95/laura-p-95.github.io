(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML =
        `<button type="button" id="myBtn">Helper Button</button>`;

    class PerformanceHelp extends HTMLElement {
        constructor() {
            super();
            this.init();
            
        }

        onCustomWidgetBeforeUpdate(changedProperties) {
            this._props = { ...this._props, ...changedProperties };
        }


        // sounds important
        onCustomWidgetAfterUpdate(changedProperties) {
            if ("myDataBinding" in changedProperties) {
                this._updateData(changedProperties.myDataBinding);
            }
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
})();