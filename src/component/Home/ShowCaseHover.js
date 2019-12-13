import React, { Component } from "react";
import "./ShowCaseHover.css";

class ShowCase extends Component {
  componentDidMount() {
    const width = window.innerWidth > 0 && window.innerWidth;
    if (width > 992) {
      console.log("sd");
      const imgElements = document.getElementsByClassName("gt-991");
      for (let i = 0; i < imgElements.length; i++) {
        if (imgElements[i].getAttribute("data-src")) {
          imgElements[i].setAttribute(
            "src",
            imgElements[i].getAttribute("data-src")
          );
          imgElements[i].removeAttribute("data-src");
        }
      }
    }
  }
  render() {
    return (
      <div id="page-container">
        <div id="">
          <section id="pre-content-banner">
            <div className="region region-pre-content">
              <section
                id="block-homepageinteractivescene"
                className="block block-block-content block-block-content101dd041-bfcd-4986-8a7a-091724408a93 clearfix"
              >
                <div className="field field--name-body field--type-text-with-summary field--label-hidden field--item">
                  <div
                    className="row interactive-scene"
                    style={{ marginBottom: "24px" }}
                  >
                    <div className="container">
                      <div className="i-scene-wrapper">
                        <img
                          className="hidden-sm hidden-xs"
                          src="https://www.gasboy.com/us/sites/gasboy.com.us/files/GasboyInteractiveScene_o.jpg"
                        />
                        <div className="i-markers">
                          <div className="cloud-marker">
                            <img
                              className="hidden-sm hidden-xs gt-991"
                              data-src="https://www.gasboy.com/us/sites/gasboy.com.us/files/1-Cloud_Circle.gif"
                            />
                            <div className="i-marker-info">
                              <div className="row">
                                <div className="gvr-color-strip">
                                  <div className="gvr-red col-xs-4"></div>
                                  <div className="gvr-green col-xs-4"></div>
                                </div>
                                <img src="https://www.gasboy.com/us/sites/gasboy.com.us/files/EKOS-by-Gasboy_1_o.jpg" />
                                <div className="container-fluid">
                                  <h3>EKOS Software</h3>
                                  <p>
                                    EKOS is the end-to-end cloud based platform
                                    that provides Fleet Managers with visibility
                                    of their fleet equipment, fuel management
                                    processes, inventory monitoring, compliance,
                                    and reporting.
                                  </p>
                                  <a
                                    // href="https://www.gasboy.com/us/products/software-solutions/ekos-gasboy"
                                    className="btn btn-primary pull-right"
                                  >
                                    View Options
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="gas-truck-marker">
                            <img
                              className="hidden-sm hidden-xs gt-991"
                              data-src="https://www.gasboy.com/us/sites/gasboy.com.us/files/2-Gas-Truck_Circle.gif"
                            />
                            <div className="i-marker-info">
                              <div className="row">
                                <div className="gvr-color-strip">
                                  <div className="gvr-red col-xs-4"></div>
                                  <div className="gvr-green col-xs-4"></div>
                                </div>
                                <img src="https://www.gasboy.com/us/sites/gasboy.com.us/files/Fuel-Truck-Controller.jpg" />
                                <div className="container-fluid">
                                  <h3>Fuel Truck Controller</h3>
                                  <p>
                                    A mobile fueling system that takes your fuel
                                    management system wherever it needs to go-
                                    to heavy or stationary equipment- via tanker
                                    truck.
                                  </p>
                                  <a
                                    // href="https://www.gasboy.com/us/products/fuel-management-solutions"
                                    className="btn btn-primary pull-right"
                                  >
                                    View Options
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="utility-truck-marker">
                            <img
                              className="hidden-sm hidden-xs gt-991"
                              data-src="https://www.gasboy.com/us/sites/gasboy.com.us/files/6-Utility-Truck_Circle.gif"
                            />
                            <div className="i-marker-info">
                              <div className="row">
                                <div className="gvr-color-strip">
                                  <div className="gvr-red col-xs-4"></div>
                                  <div className="gvr-green col-xs-4"></div>
                                </div>
                                <img src="https://www.gasboy.com/us/sites/gasboy.com.us/files/DataPassPlus.jpg" />
                                <div className="container-fluid">
                                  <h3>DataPass PLUS</h3>
                                  <p>
                                    Automatically capture vehicle information
                                    and driver behavior directly from the
                                    vehicle. So, you can proactively manage your
                                    fleet vehicles and drivers based on accurate
                                    information.
                                  </p>
                                  <a
                                    // href="https://www.gasboy.com/us/products/fuel-management-solutions/fuel-point-plus"
                                    className="btn btn-primary pull-right"
                                  >
                                    View Options
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tls-marker">
                            <img
                              className="hidden-sm hidden-xs gt-991"
                              data-src="https://www.gasboy.com/us/sites/gasboy.com.us/files/7-TLS_Circle.gif"
                            />
                            <div className="i-marker-info">
                              <div className="row">
                                <div className="gvr-color-strip">
                                  <div className="gvr-red col-xs-4"></div>
                                  <div className="gvr-green col-xs-4"></div>
                                </div>
                                <img src="https://www.gasboy.com/us/sites/gasboy.com.us/files/vr_na_-_gauges_tls-4xx_series-scr_2_o.png" />
                                <div className="container-fluid">
                                  <h3>
                                    TLS-4 Series Automatic Tank Gauge Family
                                  </h3>
                                  <p>
                                    The TLS-4 Series Automatic Tank Gauges
                                    provide comprehensive fuel site data for
                                    advanced fuel asset and compliance
                                    management.
                                  </p>
                                  <a
                                    // href="https://www.veeder.com/us/automatic-tank-gauging-products"
                                    className="btn btn-primary pull-right"
                                  >
                                    View Options
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="van-fuel-marker">
                            <img
                              className="hidden-sm hidden-xs gt-991"
                              data-src="https://www.gasboy.com/us/sites/gasboy.com.us/files/8-Van_Circle.gif"
                            />
                            <div className="i-marker-info">
                              <div className="row">
                                <div className="gvr-color-strip">
                                  <div className="gvr-red col-xs-4"></div>
                                  <div className="gvr-green col-xs-4"></div>
                                </div>
                                <img src="https://www.gasboy.com/us/sites/gasboy.com.us/files/ForeFuel2.jpg" />
                                <div className="container-fluid">
                                  <h3>FuelPoint&reg; PLUS</h3>
                                  <p>
                                    Secure your fuel. The Gasboy FuelPoint&reg;
                                    PLUS system uses secure RFID communication
                                    to automatically identify vehicles that
                                    belong to your fleet.
                                  </p>
                                  <a
                                    // href="https://www.gasboy.com/us/products/fuel-management-solutions/fuel-point-plus"
                                    className="btn btn-primary pull-right"
                                  >
                                    View Options
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="islander-marker">
                            <img
                              className="hidden-sm hidden-xs gt-991"
                              data-src="https://www.gasboy.com/us/sites/gasboy.com.us/files/5-Islander-Prime_Circle.gif"
                            />
                            <div className="i-marker-info">
                              <div className="row">
                                <div className="gvr-color-strip">
                                  <div className="gvr-red col-xs-4"></div>
                                  <div className="gvr-green col-xs-4"></div>
                                </div>
                                <img src="https://www.gasboy.com/us/sites/gasboy.com.us/files/Islander-PRIME.jpg" />
                                <div className="container-fluid">
                                  <h3>Islander PRIME</h3>
                                  <p>
                                    Best-in-class homebase controller and an
                                    all-in-one standalone pedestal enabling
                                    forecourt automation with flexible fueling
                                    authorizations
                                  </p>
                                  <a
                                    // href="https://www.gasboy.com/us/products/fuel-management-solutions"
                                    className="btn btn-primary pull-right"
                                  >
                                    View Options
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="pump-marker">
                            <img
                              className="hidden-sm hidden-xs gt-991"
                              data-src="https://www.gasboy.com/us/sites/gasboy.com.us/files/4-Pump_Circle.gif"
                            />
                            <div className="i-marker-info">
                              <div className="row">
                                <div className="gvr-color-strip">
                                  <div className="gvr-red col-xs-4"></div>
                                  <div className="gvr-green col-xs-4"></div>
                                </div>
                                <img src="https://www.gasboy.com/us/sites/gasboy.com.us/files/Atlas-9800K.jpg" />
                                <div className="container-fluid">
                                  <h3>Atlas 9800K</h3>
                                  <p>
                                    Built to handle the rigors of the fleet and
                                    commercial environment, the Atlas platform
                                    offers a wide range of models and flow rates
                                    for all fuel types.
                                  </p>
                                  <a
                                    // href="https://www.gasboy.com/us/products/commercial-fleet-dispensers"
                                    className="btn btn-primary pull-right"
                                  >
                                    View Options
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sump-marker">
                            <img
                              className="hidden-sm hidden-xs gt-991"
                              data-src="https://www.gasboy.com/us/sites/gasboy.com.us/files/3-Sump_Circle.gif"
                            />
                            <div className="i-marker-info">
                              <div className="row">
                                <div className="gvr-color-strip">
                                  <div className="gvr-red col-xs-4"></div>
                                  <div className="gvr-green col-xs-4"></div>
                                </div>
                                <img src="https://www.gasboy.com/us/sites/gasboy.com.us/files/red_jacket_pump1-web.png" />
                                <div className="container-fluid">
                                  <h3>Red Jacket Submersible Turbine Pumps</h3>
                                  <p>
                                    The industry's most advanced turbine pumps -
                                    delivering the highest efficiency, fuel flow
                                    and lowest power consumption.
                                  </p>
                                  <a
                                    // href="https://www.veeder.com/us/red-jacket-submersible-pumping-systems-stp/red-jacket-pumping-systems-and-solutions/red-jacket-stp-built-last/red-jacket-submersible-turbine-pump-stp"
                                    className="btn btn-primary pull-right"
                                  >
                                    View Options
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ShowCase;
