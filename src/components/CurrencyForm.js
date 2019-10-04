import React from "react";

function CurrencyForm() {
    return (
        <div>
        <header>
          
          <h1>Currency Converter</h1>
        </header>
        <div className="content">
          <div className="row row-select-currency">
            <div className="col-md-6 col-md-offset-3">
              <h2>Select Currency</h2>
              <input/>
              <p>
                {
                  //Select currency
                }
              </p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-sm-6 currency-from-input">
              <h3 className={`currency-flag`}>A currency name</h3>
              {
                  //Currency A input
              }
              <div className="input-group">
                <span className="input-group-addon">A currency sign</span>
                <input type="number" className="form-control" />
                <span className="input-group-addon" id="basic-addon2">A currency code</span>
              </div>

            </div>
            <div className="col-sm-6 currency-to-input">
              <h3 className={`currency-flag`}>B currency name</h3>
              {
                  //Currency B input
              }
              <div className="input-group">
                <span className="input-group-addon">B currency sign</span>
                <input type="number" className="form-control"/>
                <span className="input-group-addon" id="basic-addon3">B currency name</span>
              </div>

            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              {
                  //Update to currently selected currency
              }
              <p>
                Exchange Rate:
              </p>
            </div>
          </div>
        </div>
      </div>

    )
}

export default CurrencyForm;